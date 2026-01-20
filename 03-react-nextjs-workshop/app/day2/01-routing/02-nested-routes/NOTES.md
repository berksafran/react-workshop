# Nested Routes ve Outlet

React Router'ın en güçlü özelliklerinden biri **Nested Routes** (İç İçe Rotalar) yapısıdır. Bu yapı sayesinde, bir sayfanın belirli bir kısmını sabit tutup (örneğin sidebar veya header), sadece içerik kısmını URL'e göre değiştirebiliriz.

## Outlet Nedir?

`<Outlet />` bileşeni, parent (ebeveyn) route'un içinde, child (çocuk) route'un render edileceği yerdir. HTML'deki `<iframe>` mantığına benzer düşünülebilir, ancak tamamen React bileşenleri ile çalışır.

### Nasıl Çalışır?

1. **Route Tanımlama**: Router configürasyonunda route'lar iç içe tanımlanır.
2. **Layout Bileşeni**: Parent route bir layout bileşeni render eder.
3. **Outlet Yerleşimi**: Bu layout bileşeni içinde, dinamik içeriğin gelmesi istenen yere `<Outlet />` konur.
4. **Render**: Kullanıcı child route'a gittiğinde, React Router otomatik olarak o route'a karşılık gelen bileşeni bulur ve parent'taki Outlet'in yerine koyar.

## Örnek Yapı

```tsx
<Routes>
  <Route path="dashboard" element={<DashboardLayout />}>
    <Route path="profile" element={<ProfileSettings />} />
    <Route path="account" element={<AccountSettings />} />
  </Route>
</Routes>
```

`DashboardLayout` içinde:

```tsx
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        {/* Child route (ProfileSettings veya AccountSettings) burada görünür */}
        <Outlet />
      </main>
    </div>
  );
}
```

## Index Route

Eğer parent route'un kendisine (`/dashboard`) gidildiğinde varsayılan bir içerik göstermek istiyorsak `index` prop'unu kullanırız:

```tsx
<Route path="dashboard" element={<DashboardLayout />}>
  <Route index element={<DashboardHome />} />
  {/* ... diğer route'lar */}
</Route>
```
