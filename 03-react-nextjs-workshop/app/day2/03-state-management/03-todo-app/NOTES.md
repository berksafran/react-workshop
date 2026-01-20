# Mini Ödev: To-Do App

Bu bölümde, öğrendiğimiz Context API ve useReducer hook'larını pekiştirmek için klasik bir To-Do uygulaması geliştirdik.

## İsterler

1.  **Global state yönetimi:** Tüm todo verisi ve filtreleme durumu Context içinde tutulmalı.
2.  **Complex Logic:** Ekleme, silme, toggle, filtreleme gibi işlemler reducer içinde yönetilmeli.
3.  **UI/UX:** Filtrelere göre liste güncellenmeli, tamamlananlar görsel olarak ayrılmalı.

## Yapı

- \`TodoContext.tsx\`: State tanımı ve reducer mantığı. items ve filter burada tutuluyor.
- \`TodoApp.tsx\`: Ana bileşen. Alt bileşenleri (AddTodo, FilterBar, TodoList) birleştiriyor.

## Deneyim Kazanımları

Bu örnek, Redux gibi kütüphanelere geçmeden önce "state management" mantığının kavranması için mükemmel bir pratiktir. Reducer yapısı sayesinde uygulamanın state değişikliklerini tahmin edilebilir (predictable) hale getiririz.
