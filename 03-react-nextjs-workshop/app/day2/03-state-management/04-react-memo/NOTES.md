# React.memo ve Performans

React'te bir parent bileşen render olduğunda, varsayılan olarak tüm child bileşenleri de (props değişmese bile) yeniden render olur. Çoğu durumda bu sorun değildir çünkü React render işlemi ucuzdur. Ancak, render işlemi "pahalı" olan bileşenlerde bu performans sorununa yol açabilir.

## React.memo Nedir?

\`React.memo\`, bir Higher Order Component (HOC)'tir. Bir bileşeni sarmaladığınızda, React bu bileşenin aldığı props'ları bir önceki render'daki props'lar ile karşılaştırır (Shallow Comparison). Eğer props'lar değişmediyse, bileşeni yeniden render etmez, son render sonucunu kullanır.

\`\`\`typescript
const MyComponent = React.memo(function MyComponent(props) {
/_ props değişmediği sürece render olmaz _/
});
\`\`\`

## Ne Zaman Kullanılmalı?

1.  Bileşen aynı props'larla sık sık render oluyorsa.
2.  Bileşenin render işlemi "pahalı" ise (çok fazla DOM elemanı, karmaşık hesaplamalar).
3.  Bileşen saf (pure) ise (yani aynı props her zaman aynı çıktıyı veriyorsa).

## Dikkat Edilmesi Gerekenler

- **Referans Eşitliği (Referential Equality):** Eğer prop olarak bir obje, array veya fonksiyon geçiyorsanız, ana bileşen her render olduğunda bu referanslar yenilenir. Bu durumda \`React.memo\` işe yaramaz защото props değişmiş sayılır.
- **Çözüm:** Fonksiyonlar için \`useCallback\`, objeler/arrayler için \`useMemo\` kullanarak referansları sabitlemelisiniz.

## Örnek Senaryo Demo

Bu demoda, Parent bileşendeki state değiştiğinde (input'a yazı yazma), "Slow List" gereksiz yere tekrar render olur (yapay yavaşlık eklenmiştir). Ancak "Fast List" \`React.memo\` ile sarmalandığı için ve \`items\` prop'u değişmediği için tekrar render olmaz.
