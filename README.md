# Pokemon CLI

## 環境構築手順

### 前提条件
- Node.js インストール済み

### セットアップ
1. **TypeScript環境の初期化**
   ```bash
   npm init -y
   npm install --save-dev typescript
   npx tsc --init
   ```
   
   実行後、以下のファイルが作成されます：
   - `package.json`（プロジェクト設定）
   - `tsconfig.json`（TypeScript設定）

2. **ディレクトリ構造作成**
   ```bash
   mkdir src
   ```

3. **実行テスト用ファイル作成**
   `src/index.ts` を作成：
   ```typescript
   console.log("=== Pokemon CLI ===");

   const pokemonName = "Pikachu";
   const pokemonType = "Electric";

   console.log(`Name: ${pokemonName}`);
   console.log(`Type: ${pokemonType}`);

   const maxHp = 100;
   const hp = 100;

   console.log(`HP: ${hp} / ${maxHp}`);
   ```

4. **実行方法**
   ```bash
   # TypeScriptをJavaScriptにコンパイル
   npx tsc

   # srcディレクトリに移動して実行
   cd src
   node index.js
   ```

## 期待される出力
```
=== Pokemon CLI ===
Name: Pikachu
Type: Electric
HP: 100 / 100
```

## プロジェクト構造
```
poke_cli/
├── src/
│   ├── index.ts    # TypeScriptソースファイル
│   └── index.js    # コンパイル後のJavaScriptファイル
├── package.json    # プロジェクト設定
├── tsconfig.json   # TypeScript設定
└── README.md       
```


