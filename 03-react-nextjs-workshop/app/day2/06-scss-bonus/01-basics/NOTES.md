# SCSS Basics - Temel Kavramlar

## SCSS Nedir?

SCSS (Sassy CSS), CSS'in daha güçlü ve esnek bir versiyonudur. CSS'e programlama dili özellikleri ekler.

## Temel Özellikler

### 1. Variables (Değişkenler)

```scss
$primary-color: #3498db;
$font-size-base: 16px;
$spacing-unit: 8px;

.button {
  background-color: $primary-color;
  font-size: $font-size-base;
  padding: $spacing-unit * 2;
}
```

### 2. Nesting (İç İçe Yazım)

```scss
.card {
  padding: 20px;

  .card-header {
    font-size: 24px;

    &:hover {
      color: blue;
    }
  }

  .card-body {
    margin-top: 10px;
  }
}
```

### 3. Mixins (Yeniden Kullanılabilir Stiller)

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button-style($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;
  padding: 10px 20px;
  border-radius: 4px;
}

.container {
  @include flex-center;
}

.primary-btn {
  @include button-style(#3498db, white);
}
```

### 4. Partials & Imports (Modern: @use)

**Eski Yöntem (@import - Deprecated):**

```scss
// _variables.scss
$primary-color: #3498db;

// _mixins.scss
@mixin flex-center { ... }

// main.scss
@import 'variables';
@import 'mixins';
```

**Modern Yöntem (@use - Önerilen):**

```scss
// _variables.scss
$primary-color: #3498db;

// _mixins.scss
@mixin flex-center { ... }

// main.scss
@use 'variables' as *;  // Tüm değişkenleri doğrudan kullan
@use 'mixins' as *;     // Tüm mixinleri doğrudan kullan

// veya namespace ile:
@use 'variables' as vars;
.button {
  background: vars.$primary-color;
}
```

### 5. Parent Selector (&)

```scss
.button {
  background: blue;

  &:hover {
    background: darkblue;
  }

  &--primary {
    background: green;
  }

  &__icon {
    margin-right: 5px;
  }
}
```

## CSS vs SCSS Karşılaştırması

**CSS:**

```css
.card {
  padding: 20px;
}

.card .card-header {
  font-size: 24px;
}

.card .card-header:hover {
  color: blue;
}
```

**SCSS:**

```scss
.card {
  padding: 20px;

  .card-header {
    font-size: 24px;

    &:hover {
      color: blue;
    }
  }
}
```

## Avantajları

- ✅ Daha az kod tekrarı
- ✅ Daha organize ve okunabilir
- ✅ Değişkenlerle kolay tema yönetimi
- ✅ Mixinlerle yeniden kullanılabilirlik
- ✅ Matematiksel işlemler yapabilme
