# Chat-GPT-Weberweiterung

Die OpenAI-Chat-Erweiterung ist eine Browser-Erweiterung, die es Benutzern ermöglicht, mithilfe der Chat-API von OpenAI KI-gestützte Antworten zu generieren. Sie kann aktiviert werden, indem Sie Text auf einer beliebigen Webseite auswählen und mit der rechten Maustaste klicken, um im Kontextmenü „Antwort mit OpenAI generieren“ auszuwählen. Anschließend sendet die Erweiterung den ausgewählten Text an die OpenAI-Chat-API, die eine Antwort generiert, die in einem Popup-Fenster angezeigt wird.

## Übersetzung

| 🇺🇸                  | 🇨🇳                                        | 🇹🇼                                         | 🇮🇳                  | 🇫🇷                        | 🇦🇪                   | 🇩🇪                    | 🇯🇵                      | 🇪🇸                     |
| --------------------- | ------------------------------------------- | -------------------------------------------- | --------------------- | --------------------------- | ---------------------- | ----------------------- | ------------------------- | ------------------------ |
| [Englisch](README.md) | [Vereinfachtes Chinesisch](README.zh-CN.md) | [Traditionelles Chinesisch](README.zh-TW.md) | [Hindi](README.hi.md) | [Französisch](README.fr.md) | [Araber](README.ar.md) | [Deutsch](README.de.md) | [japanisch](README.ja.md) | [Spanisch](README.es.md) |

## Screenshots

![App Screenshot](https://cdn.discordapp.com/attachments/1008195045960204349/1099103637608878090/New_Website_Blue_Mockup_Instagram_-_Laptop.gif)

## Merkmale

-   Erzeugt Antworten mithilfe der Chat-API von OpenAI
-   Integriert sich in Chrome-Kontextmenüs für einfachen Zugriff
-   Kopiert die generierte Antwort zum schnellen Einfügen in die Zwischenablage
-   Einfacher Installationsprozess
-   Detaillierte Dokumentation und FAQ
-   Open Source auf GitHub

## Dokumentation

-   Gehen Sie zur OpenAI-API-Seite unter[RapidAPI](https://rapidapi.com/liuzhaolong765481/api/chatgpt-chatgpt3-5-chatgpt4/).
-   Klicken Sie auf die Schaltfläche „Test abonnieren“.
-   Wählen Sie den kostenlosen Plan „Kostenlos“ und klicken Sie auf „Abonnieren“.
-   Befolgen Sie die Anweisungen, um sich bei RapidAPI anzumelden, oder melden Sie sich an, wenn Sie bereits ein Konto haben.
-   Suchen Sie auf der Seite des OpenAI-API-Dienstes in der Liste der erforderlichen Anforderungsheader nach dem Abschnitt „X-RapidAPI-Key“.
-   Kopieren Sie Ihren RapidAPI-API-Schlüssel in den Abschnitt „X-RapidAPI-Key“ in der Datei „background.js“ in Ihrer Chrome-Erweiterung.

## Installation

-   Laden Sie den Quellcode der Erweiterung aus dem Github-Repository herunter.
-   Extrahieren Sie den heruntergeladenen Ordner.
-   Öffnen Sie Google Chrome und navigieren Sie zur Seite „Erweiterungen“. Sie können dies tun, indem Sie „chrome://extensions/“ in die Adressleiste eingeben oder auf die drei Punkte in der oberen rechten Ecke von Chrome klicken, „Weitere Tools“ und dann „Erweiterungen“ auswählen.
-   Wenn Sie sich auf der Seite „Erweiterungen“ befinden, schalten Sie den Schalter in der oberen rechten Ecke um, um den Entwicklermodus zu aktivieren.
-   Klicken Sie auf die Schaltfläche „Entpackt laden“ und wählen Sie den extrahierten Ordner aus, der den Quellcode der Erweiterung enthält.
-   Sobald die Erweiterung geladen ist, sollte sie in der Symbolleiste Ihres Browsers erscheinen.
    Das ist es! Die GPT-Chat-Erweiterung sollte jetzt installiert und einsatzbereit sein.

## FAQ

#### Was ist GPT-3?

GPT-3 steht für Generative Pre-trained Transformer 3. Es handelt sich um ein fortschrittliches KI-Sprachmodell, das von OpenAI entwickelt wurde und in der Lage ist, natürliche Sprache zu verarbeiten und zu generieren.

#### Was ist diese OpenAI-Chat-Erweiterung?

Dies ist eine Chrome-Erweiterung, die GPT-3 verwendet, um Antworten für ausgewählten Text auf einer beliebigen Webseite zu generieren. Sie können eine Konversation mit GPT-3 führen, indem Sie einen beliebigen Text auswählen und auf das Kontextmenü klicken.

#### Wie funktioniert diese Erweiterung?

Wenn Sie einen beliebigen Text auf einer Webseite auswählen und auf das Kontextmenü klicken, sendet die Erweiterung eine Anfrage an die OpenAI-API mit dem ausgewählten Text als Eingabe. Die API antwortet mit einer generierten Antwort, die dann in einem Warnfeld angezeigt wird.

#### Ist die Erweiterung sicher?

Ja, die Erweiterung ist sicher. Es funktioniert nur mit dem ausgewählten Text und greift nicht auf persönliche Informationen zu und speichert diese auch nicht. Es wird jedoch immer empfohlen, bei der Installation von Erweiterungen von Drittanbietern Vorsicht walten zu lassen.

#### Kann der Websitebesitzer die generierte Antwort sehen?

Nein, die generierte Antwort wird nur im Benachrichtigungsfeld angezeigt und nicht an die Website oder deren Eigentümer zurückgesendet.

## Autoren

-   [@fl2on](https://www.github.com/fl2on)

## Unterstützung

[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/nova355killer)  
[![Ko-Fi](https://img.shields.io/badge/kofi-00457C?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/nova355)
