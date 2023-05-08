# Chat-GPT Web 扩展

OpenAI Chat Extension 是一个浏览器扩展，允许用户使用 OpenAI 的聊天 API 生成 AI 支持的响应。它可以通过选择任何网页上的文本并右键单击以从上下文菜单中选择“使用 OpenAI 生成响应”来激活。然后，该扩展将选定的文本发送到 OpenAI 聊天 API，后者生成一个显示在弹出窗口中的响应。

## 翻译

| 🇺🇸            | 🇨🇳                    | 🇹🇼                    | 🇮🇳                | 🇫🇷               | 🇦🇪                | 🇩🇪               | 🇯🇵                | 🇪🇸                 |
| --------------- | ----------------------- | ----------------------- | ------------------- | ------------------ | ------------------- | ------------------ | ------------------- | -------------------- |
| [英语](README.md) | [简体中文](README.zh-CN.md) | [繁体中文](README.zh-TW.md) | [印地语](README.hi.md) | [法语](README.fr.md) | [阿拉伯](README.ar.md) | [德语](README.de.md) | [日本人](README.ja.md) | [西班牙语](README.es.md) |

## 截图

![App Screenshot](https://cdn.discordapp.com/attachments/1008195045960204349/1099103637608878090/New_Website_Blue_Mockup_Instagram_-_Laptop.gif)

## 特征

-   使用 OpenAI 的聊天 API 生成响应
-   与 Chrome 上下文菜单集成以便于访问
-   将生成的响应复制到剪贴板以便快速粘贴
-   安装过程简单
-   详细的文档和常见问题解答
-   在 GitHub 上开源

## 文档

-   转到 OpenAI API 页面[快速API](https://rapidapi.com/openai-api-openai-api-default/api/openai80/).
-   单击“订阅测试”按钮。
-   选择免费的“免费”计划并单击“订阅”。
-   按照说明注册 RapidAPI 或登录（如果您已有帐户）。
-   在 OpenAI API 服务页面上，在所需请求标头列表中查找 - - “X-RapidAPI-Key”部分。
-   将 RapidAPI API 密钥复制到 Chrome 扩展中 background.js 文件的“X-RapidAPI-Key”部分。

## 安装

-   从 Github 存储库下载扩展的源代码。
-   提取下载的文件夹。
-   打开谷歌浏览器并导航到“扩展”页面。您可以通过在地址栏中键入“chrome://extensions/”或单击 Chrome 右上角的三个点，选择“更多工具”，然后选择“扩展程序”来执行此操作。
-   进入“扩展”页面后，切换右上角的开关以启用开发者模式。
-   单击“加载解压”按钮并选择包含扩展源代码的解压文件夹。
-   加载扩展后，它应该出现在浏览器的工具栏中。
    就是这样！ GPT Chat Extension 现在应该已安装并可以使用了。

## FAQ

#### 什么是 GPT-3？

GPT-3全称Generative Pre-trained Transformer 3，是OpenAI开发的具有自然语言处理和生成能力的高级AI语言模型。

#### 这个 OpenAI 聊天扩展是什么？

This is a Chrome extension that uses GPT-3 to generate responses for selected text on any webpage. It allows you to have a conversation with GPT-3 by selecting any text and clicking on the context menu.

#### 这个扩展如何工作？

当您在网页上选择任何文本并单击上下文菜单时，该扩展程序会向 OpenAI API 发送一个请求，并将所选文本作为输入。 API 使用生成的响应进行响应，然后显示在警告框中。

#### 扩展安全吗？

是的，扩展是安全的。它仅适用于选定的文本，不会访问或存储任何个人信息。但是，始终建议在安装任何第三方扩展时谨慎使用。

#### 网站所有者可以看到生成的响应吗？

不，生成的响应仅显示在警告框中，不会发送回网站或其所有者。

## 作者

-   [@qzxtu](https://www.github.com/qzxtu)

## 支持

[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/nova355killer)  
[![Ko-Fi](https://img.shields.io/badge/kofi-00457C?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/nova355)
