# ملحق ويب Chat-GPT

The OpenAI Chat Extension is a browser extension that allows users to generate AI-powered responses using OpenAI's chat API. It can be activated by selecting text on any webpage and right-clicking to choose "Generate response with OpenAI" from the context menu. The extension then sends the selected text to the OpenAI chat API, which generates a response that is displayed in a pop-up window.

## ترجمة

| 🇺🇸                 | 🇨🇳                               | 🇹🇼                                 | 🇮🇳                 | 🇫🇷                  | 🇦🇪                 | 🇩🇪                   | 🇯🇵                      | 🇪🇸                      |
| -------------------- | ---------------------------------- | ------------------------------------ | -------------------- | --------------------- | -------------------- | ---------------------- | ------------------------- | ------------------------- |
| [إنجليزي](README.md) | [الصينية المبسطة](README.zh-CN.md) | [الصينية التقليدية](README.zh-TW.md) | [هندي](README.hi.md) | [فرنسي](README.fr.md) | [عربى](README.ar.md) | [ألماني](README.de.md) | [اليابانية](README.ja.md) | [الأسبانية](README.es.md) |

## لقطات

![App Screenshot](https://cdn.discordapp.com/attachments/1008195045960204349/1099103637608878090/New_Website_Blue_Mockup_Instagram_-_Laptop.gif)

## سمات

-   يولد ردودًا باستخدام واجهة برمجة تطبيقات الدردشة الخاصة بـ OpenAI
-   يتكامل مع قوائم سياق Chrome لسهولة الوصول إليها
-   ولدت النسخ استجابة للحافظة للصق السريع
-   عملية تركيب بسيطة
-   وثائق مفصلة والأسئلة الشائعة
-   المصدر المفتوح على جيثب

## توثيق

-   انتقل إلى صفحة OpenAI API على[رابيدابي](https://rapidapi.com/openai-api-openai-api-default/api/openai80/).
-   انقر فوق الزر "اشتراك في الاختبار".
-   حدد الخطة "المجانية" وانقر على "اشتراك".
-   اتبع التعليمات للتسجيل في RapidAPI أو تسجيل الدخول إذا كان لديك حساب بالفعل.
-   في صفحة خدمة OpenAI API ، ابحث عن قسم - - "X-RapidAPI-Key" في قائمة رؤوس الطلبات المطلوبة.
-   انسخ مفتاح RapidAPI API في قسم "X-RapidAPI-Key" في ملف background.js في ملحق Chrome.

## تثبيت

-   قم بتنزيل كود مصدر الامتداد من مستودع Github.
-   قم باستخراج المجلد الذي تم تنزيله.
-   افتح Google Chrome وانتقل إلى صفحة "الإضافات". يمكنك القيام بذلك عن طريق كتابة "chrome: // extensions /" في شريط العناوين أو بالنقر على النقاط الثلاث في الزاوية العلوية اليمنى من Chrome ، وتحديد "المزيد من الأدوات" ، ثم "الامتدادات".
-   بمجرد دخولك إلى صفحة "الإضافات" ، قم بتبديل المفتاح الموجود في الزاوية اليمنى العليا لتمكين وضع المطور.
-   انقر فوق الزر "تحميل غير مضغوط" وحدد المجلد المستخرج الذي يحتوي على الكود المصدري للامتداد.
-   بمجرد تحميل الامتداد ، يجب أن يظهر في شريط أدوات المتصفح.
    هذا كل شيء! يجب الآن تثبيت ملحق دردشة GPT وجاهز للاستخدام.

## التعليمات

#### ما هو GPT-3؟

يرمز GPT-3 إلى Transformer Generative مسبق التدريب 3. وهو نموذج لغة AI متقدم تم تطويره بواسطة OpenAI وهو قادر على معالجة اللغة الطبيعية وتوليدها.

#### ما هو امتداد دردشة OpenAI هذا؟

هذا امتداد Chrome يستخدم GPT-3 لإنشاء استجابات للنص المحدد في أي صفحة ويب. يتيح لك إجراء محادثة مع GPT-3 عن طريق تحديد أي نص والنقر فوق قائمة السياق.

#### كيف يعمل هذا الامتداد؟

عند تحديد أي نص في صفحة ويب والنقر فوق قائمة السياق ، يرسل الملحق طلبًا إلى OpenAI API مع النص المحدد كمدخل. تستجيب API باستجابة تم إنشاؤها والتي يتم عرضها بعد ذلك في مربع تنبيه.

#### هل الامتداد آمن؟

نعم ، الامتداد آمن. إنه يعمل فقط على النص المحدد ولا يصل إلى أي معلومات شخصية أو يخزنها. ومع ذلك ، يوصى دائمًا بتوخي الحذر عند تثبيت أي امتداد تابع لجهة خارجية.

#### هل يمكن لصاحب الموقع رؤية الرد الذي تم إنشاؤه؟

لا ، يتم عرض الاستجابة التي تم إنشاؤها فقط في مربع التنبيه ولا يتم إرسالها مرة أخرى إلى موقع الويب أو مالكه.

## المؤلفون

-   [تضمين التغريدة](https://www.github.com/qzxtu)

## يدعم

[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/nova355killer)  
[![Ko-Fi](https://img.shields.io/badge/kofi-00457C?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/nova355)
