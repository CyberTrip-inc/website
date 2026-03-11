# CyberTrip Corporate Website

株式会社CyberTrip のコーポレートサイトです。
「テクノロジーで、物理体験の価値を最大化する」をコンセプトに、日本語・英語の2言語に対応したシングルページ構成のWebサイトです。

## 概要

| 項目 | 内容 |
|------|------|
| 種別 | 静的サイト (HTML / CSS / JavaScript) |
| 対応言語 | 日本語 (`/ja/`) ・ 英語 (`/en/`) |
| レスポンシブ | 対応済み (モバイル / タブレット / デスクトップ) |
| 本番URL | https://cybertrip.co.jp |

## ディレクトリ構成

```
website/
├── index.html          # 言語選択ページ (ルート)
├── ja/
│   └── index.html      # 日本語版サイト
├── en/
│   └── index.html      # 英語版サイト
├── css/
│   └── style.css       # 全ページ共通スタイルシート
├── js/
│   └── script.js       # 共通スクリプト (スクロールアニメーション等)
└── README.md
```

## ページ構成

ルート (`/`) にアクセスすると日本語・英語の言語選択画面が表示され、各言語ページは以下のセクションで構成されています。

- **Hero** — メインビジュアル + キャッチコピー
- **Philosophy** — 問題提起 (3つの問い)
- **Image Row** — フォトギャラリー
- **Concept** — コンセプトメッセージ
- **Vision / Mission** — ビジョンとミッション
- **Company** — 会社概要
- **Closing** — クロージングメッセージ
- **Footer** — フッターナビゲーション

## 技術スタック

- **HTML5** — セマンティックマークアップ
- **CSS3** — CSS Grid / Flexbox / CSS Variables / レスポンシブ対応
- **Vanilla JavaScript** — フレームワーク不使用
  - ヘッダーのスクロール時背景変化
  - Intersection Observer によるスクロールアニメーション
  - モバイルハンバーガーメニュー
- **Google Fonts** — Inter / Noto Sans JP / Noto Serif JP
- **Unsplash** — ヒーロー画像・ギャラリー画像 (外部CDN)

## ローカルでの立ち上げ方法

ビルドツールやパッケージマネージャーは不要です。ローカルのHTTPサーバーで静的ファイルを配信するだけで動作します。

### 方法 1: Python (推奨)

```bash
cd website
python3 -m http.server 8000
```

ブラウザで http://localhost:8000 を開きます。

### 方法 2: Node.js (npx)

```bash
cd website
npx serve .
```

表示されたURLをブラウザで開きます。

### 方法 3: VS Code Live Server

1. VS Code 拡張機能「Live Server」をインストール
2. `index.html` を右クリック → 「Open with Live Server」

### 方法 4: ファイルを直接開く

`index.html` をブラウザにドラッグ＆ドロップでも閲覧可能です。
ただし `file://` プロトコルでは一部機能が制限される場合があります。

## 注意事項

- 画像は Unsplash の外部URLを参照しているため、表示にはインターネット接続が必要です。
- Google Fonts も外部CDNから読み込んでいるため、同様にインターネット接続が必要です。
