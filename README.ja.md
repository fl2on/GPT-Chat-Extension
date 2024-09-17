# Chat-GPT Web 拡張機能

OpenAI Chat Extension は、ユーザーが OpenAI のチャット API を使用して AI を活用した応答を生成できるようにするブラウザ拡張機能です。これは、任意の Web ページ上のテキストを選択し、右クリックしてコンテキスト メニューから \[OpenAI で応答を生成] を選択することでアクティブ化できます。次に、拡張機能は選択されたテキストを OpenAI チャット API に送信し、ポップアップ ウィンドウに表示される応答を生成します。

## 翻訳

| 🇺🇸            | 🇨🇳                      | 🇹🇼                    | 🇮🇳                   | 🇫🇷                  | 🇦🇪                | 🇩🇪                 | 🇯🇵                | 🇪🇸                  |
| --------------- | ------------------------- | ----------------------- | ---------------------- | --------------------- | ------------------- | -------------------- | ------------------- | --------------------- |
| [英語](README.md) | [簡体字中国語](README.zh-CN.md) | [繁体中文](README.zh-TW.md) | [ヒンディー語](README.hi.md) | [フランス語](README.fr.md) | [アラブ](README.ar.md) | [ドイツ語](README.de.md) | [日本語](README.ja.md) | [スペイン語](README.es.md) |

## スクリーンショット

![App Screenshot](https://cdn.discordapp.com/attachments/1008195045960204349/1099103637608878090/New_Website_Blue_Mockup_Instagram_-_Laptop.gif)

## 特徴

-   OpenAIのチャットAPIを使用して応答を生成します
-   Chrome コンテキスト メニューと統合して簡単にアクセス
-   Copies generated response to clipboard for quick pasting
-   簡単なインストールプロセス
-   詳細なドキュメントとよくある質問
-   GitHub 上のオープンソース

## ドキュメント

-   OpenAI API ページに移動します。[ラピッドAPI](https://rapidapi.com/liuzhaolong765481/api/chatgpt-chatgpt3-5-chatgpt4/).
-   「テストを購読」ボタンをクリックします。
-   無料の「Free」プランを選択し、「Subscribe」をクリックします。
-   手順に従って RapidAPI にサインアップするか、すでにアカウントをお持ちの場合はログインします。
-   OpenAI API サービス ページで、必要なリクエスト ヘッダーのリストで「X-RapidAPI-Key」セクションを探します。
-   RapidAPI API キーを Chrome 拡張機能のbackground.js ファイルの「X-RapidAPI-Key」セクションにコピーします。

## インストール

-   Github リポジトリから拡張機能のソース コードをダウンロードします。
-   ダウンロードしたフォルダーを解凍します。
-   Google Chromeを開き、「拡張機能」ページに移動します。これを行うには、アドレス バーに「chrome://extensions/」と入力するか、Chrome の右上隅にある 3 つの点をクリックして、\[その他のツール]、\[拡張機能] の順に選択します。
-   「拡張機能」ページに移動したら、右上隅にあるスイッチを切り替えて開発者モードを有効にします。
-   「解凍してロード」ボタンをクリックし、拡張機能のソースコードを含む解凍されたフォルダーを選択します。
-   拡張機能が読み込まれると、ブラウザのツールバーに表示されるはずです。
    それでおしまい！ GPT チャット拡張機能がインストールされ、使用できるようになります。

## よくある質問

#### GPT-3とは何ですか?

GPT-3 は、Generative Pre-trained Transformer 3 の略です。これは、OpenAI によって開発された、自然言語の処理と生成が可能な高度な AI 言語モデルです。

#### この OpenAI チャット拡張機能は何ですか?

これは、GPT-3 を使用して、Web ページ上の選択されたテキストに対する応答を生成する Chrome 拡張機能です。任意のテキストを選択してコンテキスト メニューをクリックすると、GPT-3 と会話できます。

#### この拡張機能はどのように機能するのでしょうか?

Web ページ上のテキストを選択してコンテキスト メニューをクリックすると、拡張機能は選択したテキストを入力として OpenAI API にリクエストを送信します。 API は生成された応答で応答し、アラート ボックスに表示されます。

#### 拡張機能は安全ですか?

はい、拡張機能は安全です。選択したテキストに対してのみ機能し、個人情報へのアクセスや保存は行いません。ただし、サードパーティの拡張機能をインストールするときは常に注意することをお勧めします。

#### Web サイトの所有者は生成された応答を見ることができますか?

いいえ、生成された応答はアラート ボックスに表示されるだけで、Web サイトやその所有者に返送されることはありません。

## 著者

-   [@fl2on](https://www.github.com/fl2on)

## サポート

[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/nova355killer)  
[![Ko-Fi](https://img.shields.io/badge/kofi-00457C?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/nova355)
