const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainImage = document.getElementById('main-image');
const questionText = document.getElementById('question');
const btnWrapper = document.getElementById('btnWrapper');
const finalMessage = document.getElementById('finalMessage');

const reactionImages = [
    "2.png.gif",
    "bubu-dudu.png.gif",
    "bubududukiwi-twitter.png.gif",
    "Dudu.png.gif",
    "1.png.jpg",
    "c90083e9f5c1057dbaf9c2c6ea7f3321.png.jpg",
    "dudu-pleading.png.gif"
];

const phrases = [
    "Sigură că nu? 🥺",
    "Te mai gândești o dată? ✨",
    "Dudu va fi tare distrus... 😭",
    "Nu-mi face asta! Zi DA! ❤️",
    "Îți dau o ciocolată mare! 🍫",
    "Uită-te la fața mea de ursuleț... 🧸",
    "Chiar vrei să fug de tine? 😂",
    "O să obosești să dai click pe NU! 🏃‍♂️",
    "Dudu te roagă frumos! 🙏",
    "Hai, nu mai fi încăpățânată! 🥰",
    "Apasă butonul de DA! 🎯",
    "Promit că o să fie super! ✨",
    "Dudu te iubește mult! ❤️",
    "Ok, deja devine amuzant, zi DA! 😂"
];

let attempt = 0;

function moveButton() {
    // Calculam pozitia pe ecran
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.max(10, Math.random() * maxX);
    const y = Math.max(10, Math.random() * maxY);
    
    noBtn.style.position = "fixed";
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    // Mesaje progresive
    if (attempt < phrases.length) {
        questionText.innerText = phrases[attempt];
    }

    // Rotim pozele ciclic
    let imgIndex = attempt % reactionImages.length;
    mainImage.src = reactionImages[imgIndex];

    attempt++;

    // Mărim butonul DA
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    if (currentSize < 100) {
        yesBtn.style.fontSize = (currentSize + 6) + 'px';
        yesBtn.style.padding = (parseFloat(window.getComputedStyle(yesBtn).padding) + 3) + 'px';
    }
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);

yesBtn.addEventListener('click', () => {
    
    // ============================================================
    // AICI PUI IMAGINEA CARE APARE DUPĂ CE APASĂ "DA"
    // Înlocuiește "image_5ecd12.png" cu numele pozei tale de final
    // ============================================================
    mainImage.src = "ultima.png.jpeg"; 
    
    questionText.style.display = 'none';
    btnWrapper.style.display = 'none';
    finalMessage.style.display = 'block';

    // FUNCTIA DE CONFETTI
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        confetti({
            particleCount: 50,
            spread: 70,
            origin: { x: Math.random(), y: Math.random() - 0.2 },
            colors: ['#ff4d6d', '#ffffff', '#ff0a54']
        });
    }, 250);
});