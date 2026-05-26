// AUTH ELEMANLARI
const authBox = document.getElementById('authBox');
const appBox = document.getElementById('appBox');
const authTitle = document.getElementById('authTitle');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const mainAuthBtn = document.getElementById('mainAuthBtn');
const toggleAuth = document.getElementById('toggleAuth');

// APP ELEMANLARI
const queryInput = document.getElementById('queryInput');
const searchBtn = document.getElementById('searchBtn');
const resultCard = document.getElementById('resultCard');

let isLoginMode = true;

// MATRIX AKMA ANİMASYONU
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const alphabet = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓ1234567890XYZ<>_".split("");
const fontSize = 12;
let columns = canvas.width / fontSize;
let rainDrops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(11, 15, 23, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#39b54a'; // Bilgisayardaki mat yeşil
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 35);

// GİRİŞ / KAYIT GEÇİŞ
toggleAuth.addEventListener('click', () => {
    isLoginMode = !isLoginMode;
    authTitle.textContent = isLoginMode ? 'Giriş Yap' : 'Kayıt Ol';
    mainAuthBtn.textContent = isLoginMode ? 'Giriş Yap' : 'Kayıt Ol';
    toggleAuth.textContent = isLoginMode ? "Hesabın yok mu? Kayıt Ol" : "Zaten hesabın var mı? Giriş Yap";
});

// GİRİŞ DOĞRULAMA (LOCALSTORAGE)
mainAuthBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const pass = passwordInput.value.trim();

    if(!email || !pass) {
        alert('Lütfen alanları doldurun!');
        return;
    }

    if(isLoginMode) {
        const localPass = localStorage.getItem(email);
        if(localPass === pass) {
            authBox.classList.add('hidden');
            appBox.classList.remove('hidden');
        } else {
            alert('Hatalı giriş!');
        }
    } else {
        if(localStorage.getItem(email)) {
            alert('Bu hesap zaten var!');
        } else {
            localStorage.setItem(email, pass);
            alert('Kayıt başarılı! Giriş yapabilirsiniz.');
            isLoginMode = true;
            authTitle.textContent = 'Giriş Yap';
            mainAuthBtn.textContent = 'Giriş Yap';
            toggleAuth.textContent = "Hesabın yok mu? Kayıt Ol";
        }
    }
});

// KAPSÜLLER İÇİN
function useTag(text) {
    queryInput.value = text;
    askCodeBuddy();
}

// 2 SANİYEDE ŞAK DİYE CEVAP VEREN DOĞRUDAN API BAĞLANTISI
async function askCodeBuddy() {
    const promptText = queryInput.value.trim();
    if(!promptText) return;

    resultCard.classList.remove('hidden');
    resultCard.innerHTML = "<strong>CodeBuddy yanıtlıyor... 🚀</strong>";

    try {
        // Aradaki yavaşlatıcı AllOrigins proxy'sini kaldırıp direkt hızlı köprüye bağlandık
        const response = await fetch('https://ruler-powerful-owl.glitch.me/ask?prompt=' + encodeURIComponent(promptText));
        const parsedData = await response.json();
        
        if(parsedData && parsedData.reply) {
            resultCard.innerHTML = parsedData.reply.replace(/\n/g, '<br>');
        } else {
            resultCard.innerHTML = "🤖 Küçük bir bağlantı azizliği, hemen tekrar bas aşkım!";
        }
    } catch (error) {
        resultCard.innerHTML = "🤖 Sunucu uyandı, lütfen tekrar sorgula canım!";
    }
}

searchBtn.addEventListener('click', askCodeBuddy);
