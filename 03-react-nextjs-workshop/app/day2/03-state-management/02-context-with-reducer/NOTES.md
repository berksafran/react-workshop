# Context API + useReducer

## Neden Birlikte Kullanılır?

Karmaşık state yönetimi gerektiren durumlarda, sadece \`useState\` ile state'i yönetmek ve Context üzerinden fonksiyonlar geçmek (örneğin \`addItem\`, \`removeItem\`, \`clearCart\`, \`updateQuantity\`) bileşen props'larını şişirebilir ve yönetimi zorlaştırabilir.

\`useReducer\` ile state güncelleme mantığını tek bir yerde (reducer fonksiyonu) toplarız ve Context üzerinden sadece \`state\` ve \`dispatch\` fonksiyonunu paylaşırız. Bu, Redux kütüphanesinin çalışma mantığına çok benzer ancak ekstra bir kütüphane gerektirmez.

## Avantajları

1.  **Merkezi Logic:** Tüm state güncelleme kuralları (business logic) reducer içinde toplanır. Bileşenler sadece ne yapılması gerektiğini (\`ADD_ITEM\`) söyler, nasıl yapılacağını bilmez.
2.  **Temiz API:** Context üzerinden onlarca fonksiyon geçmek yerine sadece bir \`dispatch\` fonksiyonu geçilir.
3.  **Performans:** \`dispatch\` fonksiyonu kimliği (identity) değişmez (stable), bu da gereksiz re-render'ları önlemeye yardımcı olur.

## Örnek Yapı

### 1. State ve Action Tipleri

\`\`\`typescript
interface State { count: number; }
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };
\`\`\`

### 2. Reducer

\`\`\`typescript
function reducer(state: State, action: Action): State {
switch (action.type) {
case 'INCREMENT': return { count: state.count + 1 };
case 'DECREMENT': return { count: state.count - 1 };
default: return state;
}
}
\`\`\`

### 3. Provider

\`\`\`typescript
export function Provider({ children }) {
const [state, dispatch] = useReducer(reducer, { count: 0 });

return (
<Context.Provider value={{ state, dispatch }}>
{children}
</Context.Provider>
);
}
\`\`\`

## Ne Zaman Kullanmalı?

- State mantığı karmaşıksa (bir eylem birden fazla state parçasını etkiliyorsa).
- State'in bir sonraki değeri bir önceki değerine bağlıysa.
- Context üzerinden çok fazla callback fonksiyonu taşınıyorsa.
