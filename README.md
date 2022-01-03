# Generative Art Playground

## [Try It On GitHub Pages](https://hayashiinshiga.github.io/triangle-playground/)

Generative Art の作品を自由にパラメータを調整して試すことのできる WEB ページです。

<br>

### 描画アルゴリズム

1. ランダムな 3 点を頂点に設定し、三角形を描画します。
1. それぞれの頂点には、ランダムに設定された 2 種類の速度を保持しています。
   - 画像の中心を起点に回転する角速度
   - 画像の中心に向かって引きつけられる速度
1. それぞれの頂点を 2 種類の速度に従って動かした位置に、次の三角形を描画します。
1. 全ての頂点が画像の中心に集まるまで、これらを繰り返します。

<br>

---

<br>

## 使用ライブラリ

- React
- p5.js
- chakra UI

<br>

## ページの構成

```
index.js
    └─App.js
        ├─Canvas.jsx
        └─Tools.jsx
            └─CustomSlider.jsx
```

- App.js

  - 画面レイアウトの作成
  - レスポンシブ表示への対応（ブレイクポイント 620px）

- Canvas.jsx

  - スケッチの描画

- Tools.jsx

  - スライダー、ボタンの描画

- CustomSlider.jsx
  - カスタマイズしたスライダーを提供

<br>

## useState の構成

- App.js
  - sketchValues
    - スケッチに渡すパラメータを管理
- Tools.jsx
  - strokeWeight
    - 描画するラインの太さを保持
  - strokeAlpha
    - 描画するラインの濃さ（α 値）を保持
  - fillAlpha
    - 描画する塗り潰しの濃さ（α 値）を保持
  - density1
    - 図形が回転するスピードを保持
  - density2
    - 図形が縮小するスピードを保持
- CustomSlider.jsx
  - isHover
    - スライダーにマウスがホバーしているか
  - isPicked
    - スライダーのつまみが掴まれているか

<br>

## 再レンダリングのフロー

1. スライダーの値が変更されると、 slider に tooltip で値を表示
1. スライダーによって変更された値を対応する State に保持（更新されるのは tool.jsx のみ）
1. ボタンが押されたときに sketchValues を更新
1. 全体が再レンダリングされる
