# Context API

## Context Nedir?

Context, React uygulamasında verileri bileşen ağacında (component tree) manuel olarak her seviyede prop geçmek zorunda kalmadan paylaşmanızı sağlayan bir yöntemdir. Genellikle "global" kabul edilen veriler (tema, dil seçimi, kullanıcı oturumu) için kullanılır.

## Neden Kullanılır? (Prop Drilling Sorunu)

Context olmadan, bir üst bileşenden (Parent) en alt bileşene (Deeply Nested Child) veri taşımak için aradaki tüm bileşenlere prop geçmeniz gerekir. Buna **Prop Drilling** denir.

Context API bu sorunu çözer: Veriyi bir "Provider" ile ağacın tepesinden yayınlar ve herhangi bir alt bileşen bu veriye direkt olarak erişebilir.

## Nasıl Kullanılır?

Context API kullanımı 3 temel adımdan oluşur:

### 1. Context Oluşturma

\`createContext\` fonksiyonu ile bir context objesi oluşturulur.

\`\`\`typescript
import { createContext } from 'react';

// Başlangıç değeri ile context oluşturma
const ThemeContext = createContext('light');
\`\`\`

### 2. Provider ile Veri Sağlama

Oluşturulan Context'in \`.Provider\` bileşeni ile veriyi sarmalayarak alt bileşenlere sunarız.

\`\`\`typescript
function App() {
const [theme, setTheme] = useState('light');

return (
<ThemeContext.Provider value={theme}>
<Toolbar />
</ThemeContext.Provider>
);
}
\`\`\`

### 3. Veriyi Tüketme (Consuming)

Alt bileşenlerde \`useContext\` hook'u ile veriye erişiriz.

\`\`\`typescript
import { useContext } from 'react';

function ThemedButton() {
const theme = useContext(ThemeContext);
return <button className={theme}>I am styled by theme context!</button>;
}
\`\`\`

## Best Practices

1.  **Custom Hook Kullanımı:** Context'i direkt kullanmak yerine, onu sarmalayan bir custom hook yazmak (ör: \`useTheme\`) daha temiz bir API sağlar ve hata ayıklamayı kolaylaştırır (Provider eksikse hata fırlatabilir).
2.  **State Yönetimi:** Provider içinde state mantığını tutmak ve sadece gerekli fonksiyonları/verileri dışarı açmak bileşenleri temiz tutar.
3.  **Performans:** Context değeri her değiştiğinde, o Context'i kullanan **TÜM** bileşenler yeniden render olur. Bu yüzden gereksiz render'ları önlemek için Context'i bölmek (auth context, theme context ayrı ayrı) veya \`useMemo\` kullanmak iyi bir fikirdir.
