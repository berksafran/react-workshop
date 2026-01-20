# Client Side Rendering (CSR)

## Nedir?

CSR, sayfanın iskeletinin (HTML) sunucudan gelmesi, ancak asıl içeriğin veya verilerin tarayıcıda (client) JavaScript ile oluşturulmasıdır. React uygulamalarının (Create React App, Vite) varsayılan çalışma şeklidir.

Next.js App Router'da CSR yapmak için:

1.  \`"use client"\` direktifi kullanılır.
2.  Veri çekme işlemi \`useEffect\` hook'u içinde yapılır.

## Avantajları

1.  **Etkileşim:** Sayfa yüklendikten sonra geçişler çok hızlıdır (SPA hissi).
2.  **Sunucu Yükü:** Sunucu sadece statik dosyaları servis eder, işlem yükü kullanıcının cihazındadır.
3.  **Partial Updates:** Sadece değişen kısımlar güncellenir.

## Dezavantajları

1.  **SEO:** Arama motorları JavaScript'i çalıştırana kadar boş sayfa görebilir (Next.js bunu hibrit yaparak kısmen çözer).
2.  **Initial Load:** JavaScript bundle'ı yüklenene kadar kullanıcı içerik göremeyebilir (Loading state gerekir).

## Nasıl Yapılır?

\`\`\`typescript
"use client";

import { useState, useEffect } from 'react';

export default function ClientPage() {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
fetch('/api/data')
.then(res => res.json())
.then(data => {
setData(data);
setLoading(false);
});
}, []);

if (loading) return <div>Loading...</div>;

return <div>{data.title}</div>;
}
\`\`\`
