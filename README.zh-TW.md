# Chat-GPT Web 擴展

OpenAI 聊天擴充功能是一個瀏覽器擴展，允許使用者使用 OpenAI 的聊天 API 產生人工智慧驅動的回應。可以透過選擇任何網頁上的文字並右鍵單擊並從上下文選單中選擇“使用 OpenAI 產生回應”來啟動它。然後，擴充功能將選定的文字傳送到 OpenAI 聊天 API，該 API 會產生顯示在彈出視窗中的回應。

## 翻譯

| 🇺🇸            | 🇨🇳                    | 🇹🇼                    | 🇮🇳                | 🇫🇷               | 🇦🇪                | 🇩🇪               | 🇯🇵                | 🇪🇸                 |
| --------------- | ----------------------- | ----------------------- | ------------------- | ------------------ | ------------------- | ------------------ | ------------------- | -------------------- |
| [英語](README.md) | [簡體中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [印地語](README.hi.md) | [法語](README.fr.md) | [阿拉伯](README.ar.md) | [德文](README.de.md) | [日本人](README.ja.md) | [西班牙語](README.es.md) |

## 截圖

![App Screenshot](https://cdn.discordapp.com/attachments/1008195045960204349/1099103637608878090/New_Website_Blue_Mockup_Instagram_-_Laptop.gif)

## 特徵

-   使用 OpenAI 的聊天 API 產生回應
-   與 Chrome 上下文選單整合以方便存取
-   將產生的回應複製到剪貼簿以便快速貼上
-   簡單的安裝過程
-   詳細文件和常見問題解答
-   在 GitHub 上開源

## 文件

-   前往 OpenAI API 頁面[快速API](https://rapidapi.com/liuzhaolong765481/api/chatgpt-chatgpt3-5-chatgpt4/).
-   點選“訂閱測試”按鈕。
-   選擇免費的“免費”計劃並點擊“訂閱”。
-   依照指示註冊 RapidAPI，如果您已有帳戶，請登入。
-   在 OpenAI API 服務頁面上，在所需的請求標頭清單中尋找「X-RapidAPI-Key」部分。
-   將 RapidAPI API 金鑰複製到 Chrome 擴充功能中的 background.js 檔案的「X-RapidAPI-Key」部分。

## 安裝

-   從 Github 儲存庫下載擴充的原始程式碼。
-   解壓縮下載的資料夾。
-   開啟 Google Chrome 並導航至「擴充功能」頁面。您可以透過在網址列中輸入“chrome://extensions/”或點擊 Chrome 右上角的三個點，選擇“更多工具”，然後選擇“擴充功能”來執行此操作。
-   進入「擴充功能」頁面後，切換右上角的開關以啟用開發人員模式。
-   按一下「載入解壓縮」按鈕，然後選擇包含擴充原始碼的解壓縮資料夾。
-   載入擴充功能後，它應該會出現在瀏覽器的工具列中。
    就是這樣！ GPT 聊天擴充現在應該已安裝並可供使用。

## FAQ

#### 什麼是 GPT-3？

GPT-3代表Generative Pre-trained Transformer 3。

#### 這個 OpenAI 聊天擴充功能是什麼？

這是一個 Chrome 擴充程序，使用 GPT-3 為任何網頁上的選定文字產生回應。它允許您透過選擇任何文字並點擊上下文選單來與 GPT-3 進行對話。

#### 這個擴充是如何運作的？

當您選擇網頁上的任何文字並點擊上下文功能表時，擴充功能會向 OpenAI API 發送請求，並將所選文字作為輸入。 API 使用產生的回應進行回應，然後將其顯示在警報框中。

#### 擴充安全嗎？

是的，擴展是安全的。它僅適用於選定的文本，不會存取或儲存任何個人資訊。但是，始終建議在安裝任何第三方擴充功能時務必小心。

#### 網站所有者可以看到產生的回應嗎？

不會，產生的回應僅顯示在警報框中，不會發送回網站或其所有者。

## 作者

-   [@fl2on](https://www.github.com/fl2on)

## 支援

[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/nova355killer)  
[![Ko-Fi](https://img.shields.io/badge/kofi-00457C?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/nova355)
