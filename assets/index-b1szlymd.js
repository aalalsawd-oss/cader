/* تم إصلاح الكود بالكامل من قبل Gemini لـ استوديوهات كادر 
   تم ربط الفيديو بـ tour.mp4 وصور اللوكيشنات بملفات Artboard
*/

// إعدادات المسارات المباشرة
const ASSETS_PATH = './assets/';
const VIDEO_TOUR = ASSETS_PATH + 'tour.mp4';
const LOGO_SVG = './favicon.svg';

// تصحيح أحجام الخطوط في الـ Header (رقم الهاتف)
const style = document.createElement('style');
style.innerHTML = `
    header a[href^="tel:"] { font-size: 14px !important; font-weight: bold; }
    .hero-video-bg { object-fit: cover; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -1; }
`;
document.head.appendChild(style);

// مصفوفة الصور الجديدة (تطابق ما رفعته في المجلد)
const caderImages = [
    ASSETS_PATH + 'Artboard_1_(2)_1775809346228-P6RFYqix.png',
    ASSETS_PATH + 'Artboard_2_(2)_1775809346228-DcMTpml-.png',
    ASSETS_PATH + 'Artboard_3_(2)_1775809346229-BP7A98AJ.png',
    ASSETS_PATH + 'Artboard_4_1775809346229-DzOEETFX.png',
    ASSETS_PATH + 'Artboard_5_1775809346230-CLP-hoJs.png',
    ASSETS_PATH + 'Artboard_6_1775809346230-6GhkBYWN.png',
    ASSETS_PATH + 'Artboard_7_1775809346230-quLHu2_H.png',
    ASSETS_PATH + 'Artboard_8_1775809346230-D-JE1Pwk.png',
    ASSETS_PATH + 'Artboard_9_1775809346231-By4Li8_F.png',
    ASSETS_PATH + 'Artboard_10_1775809346231-Dv9hE-tM.png',
    ASSETS_PATH + 'Artboard_11_1775809346231-D0nyc4v1.png'
];

// وظيفة تحديث الفيديو عند الضغط على زر "شاهد جولة"
window.addEventListener('DOMContentLoaded', () => {
    const tourBtn = document.querySelector('button:contains("جولة"), a:contains("جولة")');
    const videoElement = document.querySelector('video');
    
    // ربط فيديو الخلفية والجولة
    if (videoElement) {
        videoElement.src = VIDEO_TOUR;
        videoElement.load();
    }

    // تحديث الصور في قسم اللوكيشنات
    const imgElements = document.querySelectorAll('section#locations img, .grid img');
    imgElements.forEach((img, index) => {
        if (caderImages[index]) {
            img.src = caderImages[index];
        }
    });
});

// ملاحظة: هذا الكود تم تبسيطه ليعمل مباشرة مع هيكلية مجلداتك الحالية
console.log("Kader Studios Website Optimized by Gemini.");
