# SCSS Deep Dive - İleri Seviye Konular

## İleri Seviye SCSS Özellikleri

### 1. Functions (Fonksiyonlar)

SCSS'de kendi fonksiyonlarınızı oluşturabilirsiniz:

```scss
@function calculate-rem($px) {
  @return $px / 16px * 1rem;
}

@function lighten-color($color, $amount) {
  @return lighten($color, $amount);
}

.text {
  font-size: calculate-rem(24px); // 1.5rem
  color: lighten-color(#000, 20%);
}
```

### 2. Control Directives (@if, @else, @for, @each, @while)

#### @if / @else

```scss
@mixin theme-colors($theme) {
  @if $theme == dark {
    background: #000;
    color: #fff;
  } @else if $theme == light {
    background: #fff;
    color: #000;
  } @else {
    background: gray;
    color: white;
  }
}
```

#### @for Loop

```scss
@for $i from 1 through 5 {
  .col-#{$i} {
    width: percentage($i / 5);
  }
}
```

#### @each Loop

```scss
$colors: (
  primary: #3498db,
  secondary: #2ecc71,
  danger: #e74c3c,
);

@each $name, $color in $colors {
  .btn-#{$name} {
    background-color: $color;
  }
}
```

#### @while Loop

```scss
$i: 1;
@while $i <= 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
  $i: $i + 1;
}
```

### 3. Maps (Haritalar)

```scss
$theme-colors: (
  primary: #3498db,
  secondary: #2ecc71,
  danger: #e74c3c,
  warning: #f39c12,
);

.button {
  background: map-get($theme-colors, primary);
}

@each $name, $color in $theme-colors {
  .bg-#{$name} {
    background-color: $color;
  }
}
```

### 4. @extend (Kalıtım)

```scss
%button-base {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.primary-button {
  @extend %button-base;
  background: blue;
  color: white;
}

.secondary-button {
  @extend %button-base;
  background: green;
  color: white;
}
```

### 5. Interpolation (#{})

```scss
$property: margin;
$side: top;

.element {
  #{$property}-#{$side}: 20px; // margin-top: 20px
}
```

### 6. Built-in Functions

#### Color Functions

```scss
$base-color: #3498db;

.element {
  color: lighten($base-color, 20%);
  background: darken($base-color, 10%);
  border: 1px solid saturate($base-color, 30%);
  box-shadow: 0 0 10px rgba($base-color, 0.5);
}
```

#### Math Functions

```scss
.element {
  width: percentage(0.5); // 50%
  padding: round(10.6px); // 11px
  margin: ceil(10.2px); // 11px
  height: floor(10.8px); // 10px
}
```

#### String Functions

```scss
$font: "Helvetica Neue";

.element {
  font-family: unquote($font);
  content: quote($font);
  text-transform: to-upper-case("hello"); // "HELLO"
}
```

### 7. @use ve @forward (Modern Module System)

```scss
// _colors.scss
$primary: #3498db;

// main.scss
@use "colors";

.button {
  background: colors.$primary;
}
```

### 8. Custom Functions ile Grid System

```scss
@function grid-width($columns, $total: 12) {
  @return percentage($columns / $total);
}

.col-6 {
  width: grid-width(6); // 50%
}

.col-4 {
  width: grid-width(4); // 33.333%
}
```

## Mixin vs Extend vs Function

| Özellik     | @mixin                | @extend            | @function      |
| ----------- | --------------------- | ------------------ | -------------- |
| Kullanım    | Stil blokları         | Stil kalıtımı      | Değer döndürme |
| Parametre   | ✅ Evet               | ❌ Hayır           | ✅ Evet        |
| CSS Çıktısı | Her kullanımda tekrar | Gruplar seçicileri | Değer döndürür |
| Performans  | Daha fazla CSS        | Daha az CSS        | En verimli     |

## Best Practices

1. ✅ Değişkenler için anlamlı isimler kullanın
2. ✅ Mixinleri parametreli yapın
3. ✅ @extend yerine @mixin tercih edin (performans)
4. ✅ Nesting'i 3-4 seviyeyle sınırlayın
5. ✅ Partial dosyaları \_ ile başlatın
6. ✅ Modern @use/@forward kullanın (@import yerine)
