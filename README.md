# ZOEN-TECH Wiki

ZOEN-TECH 株式会社の社内Wiki。虎の巻（MVV）・マニュアル・ナレッジ・制度を集約。

🌐 **公開URL**: https://zoen-tech.github.io/wiki/

## 構成

```
docs/
├── index.md            # Wikiトップ
├── torano-maki/        # 虎の巻（MVV・行動指針）
├── manuals/            # 各種マニュアル
│   └── google-chat/
├── knowledge/          # 社内ナレッジ
└── rules/              # 制度・ルール
```

## ローカルでプレビュー

```bash
pip install mkdocs-material
mkdocs serve
```

→ http://127.0.0.1:8000 でプレビュー可能。

## 更新方法

1. `docs/` 配下の MD ファイルを編集
2. `main` ブランチにプッシュ → GitHub Actions が自動デプロイ

各ページ右上の「✏️ 編集」ボタンから直接 GitHub 上で編集することもできます。
