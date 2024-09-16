// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({
//         pageLanguage: 'en', // Set the default language of your page
//         includedLanguages: 'en,es,fr,de,zh', // List of languages you want to support
//         layout: google.translate.TranslateElement.InlineLayout.SIMPLE
//     }, 'google_translate_element');
// }

// // Load the Google Translate API script and initialize the widget
// (function() {
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     document.head.appendChild(script);
// })();
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', // Set the default language of your page
        includedLanguages: 'en,es,fr,de,zh,ur,ar', // Added Urdu (ur) and Arabic (ar)
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// Load the Google Translate API script and initialize the widget
(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);
})();
