// AUTH PANELİ ELEMANLARI
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

// MATRİX YAĞMURU ANİMASYONU MOTORU
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const alphabet = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓ1234567890XYZ/*-+<>_".split("");
const fontSize = 11;
let columns = canvas.width / fontSize;
let rainDrops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(6, 9, 19, 0.14)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#2bb656'; // İlk fotoğraftaki mat yeşil tonu
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.98) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 33);

// GİRİŞ / KAYIT GEÇİŞ MEKANİZMASI
toggleAuth.addEventListener('click', () => {
    isLoginMode = !isLoginMode;
    authTitle.textContent = isLoginMode ? 'Giriş Yap' : 'Kayıt Ol';
    mainAuthBtn.textContent = isLoginMode ? 'Giriş Yap' : 'Kayıt Ol';
    toggleAuth.textContent = isLoginMode ? "Hesabın yok mu? Kayıt Ol" : "Zaten hesabın var mı? Giriş Yap";
});

// DOĞRULAMA (LOCALSTORAGE)
mainAuthBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const pass = passwordInput.value.trim();

    if(!email || !pass) {
        alert('Lütfen boş alan bırakmayın canım!');
        return;
    }

    if(isLoginMode) {
        const localPass = localStorage.getItem(email);
        if(localPass === pass) {
            authBox.classList.add('hidden');
            appBox.classList.remove('hidden');
        } else {
            alert('Hatalı e-posta veya şifre girdiyseniz lütfen kontrol edin!');
        }
    } else {
        if(localStorage.getItem(email)) {
            alert('Bu e-posta zaten kayıtlı!');
        } else {
            localStorage.setItem(email, pass);
            alert('Harika! Kayıt başarılı. Şimdi giriş yapabilirsin aşkım.');
            isLoginMode = true;
            authTitle.textContent = 'Giriş Yap';
            mainAuthBtn.textContent = 'Giriş Yap';
            toggleAuth.textContent = "Hesabın yok mu? Kayıt Ol";
        }
    }
});

// KAPSÜL BUTONLARI ÇALIŞTIRMA FONKSİYONU
function useTag(text) {
    queryInput.value = text;
    askCodeBuddy();
}

// 2 SANİYEDE ŞAK DİYE ÇALIŞAN HATASIZ SORGULAMA FONKSİYONU
async function askCodeBuddy() {
    const promptText = queryInput.value.trim();
    if(!promptText) return;

    resultCard.classList.remove('hidden');
    resultCard.innerHTML = "<strong>CodeBuddy düşünüyor, en arkadaşça cevabı hazırlıyor... 🚀</strong>";

    try {
        // Proxy'leri tamamen aradan çıkardık, doğrudan hızlı köprüye bağlanıyoruz
        const response = await fetch('https://ruler-powerful-owl.glitch.me/ask?prompt=' + encodeURIComponent(promptText));
        const parsedData = await response.json();
        
        if(parsedData && parsedData.reply) {
            // Gelen cevabı alt satırlara bölerek ekrana çok temiz basıyoruz
            resultCard.innerHTML = parsedData.reply.replace(/\n/g, '<br>');
        } else {
            resultCard.innerHTML = "🤖 Ufak bir bağlantı hatası oluştu ama hemen tekrar sormayı dene aşkım!";
        }
    } catch (error) {
        resultCard.innerHTML = "🤖 Sunucu uyandı, lütfen son kez tekrar sorgula canım!";
    }
}

searchBtn.addEventListener('click', askCodeBuddy);