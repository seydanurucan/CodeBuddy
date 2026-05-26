// KİMLİK DOĞRULAMA
const authBox = document.getElementById('authBox');
const appBox = document.getElementById('appBox');
const authTitle = document.getElementById('authTitle');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const mainAuthBtn = document.getElementById('mainAuthBtn');
const toggleAuth = document.getElementById('toggleAuth');

// UYGULAMA ELEMANLARI
const queryInput = document.getElementById('queryInput');
const searchBtn = document.getElementById('searchBtn');
const resultCard = document.getElementById('resultCard');

let isLoginMode = true;

// CANLI AKAN MATRİX YAĞMURU MOTORU
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const katakana = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890XYZ&*$#@";
const alphabet = katakana.split("");

const fontSize = 14;
let columns = canvas.width / fontSize;
let rainDrops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(3, 6, 15, 0.12)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff64';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() * 0.975 > 0.95) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 33);

// GİRİŞ / KAYIT GEÇİŞİ
toggleAuth.addEventListener('click', () => {
    isLoginMode = !isLoginMode;
    authTitle.textContent = isLoginMode ? 'Giriş Yap' : 'Kayıt Ol';
    mainAuthBtn.textContent = isLoginMode ? 'Giriş Yap' : 'Kayıt Ol';
    toggleAuth.textContent = isLoginMode ? "Hesabın yok mu? Kayıt Ol" : "Zaten hesabın var mı? Giriş Yap";
});

// LOCALSTORAGE VERİTABANI KONTROLÜ
mainAuthBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const pass = passwordInput.value.trim();

    if(!email || !pass) {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }

    if(isLoginMode) {
        const localPass = localStorage.getItem(email);
        if(localPass === pass) {
            authBox.classList.add('hidden');
            appBox.classList.remove('hidden');
        } else {
            alert('Hatalı e-posta veya şifre!');
        }
    } else {
        if(localStorage.getItem(email)) {
            alert('Bu e-posta zaten kayıtlı!');
        } else {
            localStorage.setItem(email, pass);
            alert('Başarıyla kayıt olundu! Şimdi giriş yapabilirsiniz.');
            isLoginMode = true;
            authTitle.textContent = 'Giriş Yap';
            mainAuthBtn.textContent = 'Giriş Yap';
            toggleAuth.textContent = "Hesabın yok mu? Kayıt Ol";
        }
    }
});

// KAPSÜL BUTONLAR
function useTag(text) {
    queryInput.value = text;
    askCodeBuddy();
}

// AKILLI SORGULAMA MOTORU
async function askCodeBuddy() {
    const promptText = queryInput.value.trim();
    if(!promptText) return;

    resultCard.classList.remove('hidden');
    resultCard.innerHTML = "<strong>CodeBuddy düşünüyor, en net ve arkadaşça cevabı hazırlıyor... 🚀</strong>";

    try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://ruler-powerful-owl.glitch.me/ask?prompt=' + encodeURIComponent(promptText)));
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);
        
        if(parsedData && parsedData.reply) {
            resultCard.innerHTML = parsedData.reply.replace(/\n/g, '<br>');
        } else {
            resultCard.innerHTML = "🤖 Ufak bir bağlantı hatası oluştu, lütfen tekrar dene aşkım!";
        }
    } catch (error) {
        resultCard.innerHTML = "🤖 Sunucu yoğun, lütfen tekrar sorgula canım!";
    }
}

searchBtn.addEventListener('click', askCodeBuddy);
