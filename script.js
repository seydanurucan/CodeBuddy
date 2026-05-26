// Kimlik Doğrulama Elemanları
const authBox = document.getElementById('authBox');
const appBox = document.getElementById('appBox');
const authTitle = document.getElementById('authTitle');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const mainAuthBtn = document.getElementById('mainAuthBtn');
const toggleAuth = document.getElementById('toggleAuth');

// Uygulama Elemanları
const queryInput = document.getElementById('queryInput');
const searchBtn = document.getElementById('searchBtn');
const resultCard = document.getElementById('resultCard');

let isLoginMode = true;

// Mod Değiştirme (Giriş / Kayıt)
toggleAuth.addEventListener('click', () => {
    isLoginMode = !isLoginMode;
    authTitle.textContent = isLoginMode ? 'Giriş Yap' : 'Kayıt Ol';
    mainAuthBtn.textContent = isLoginMode ? 'Giriş Yap' : 'Kayıt Ol';
    toggleAuth.textContent = isLoginMode ? "Hesabın yok mu? Kayıt Ol" : "Zaten hesabın var mı? Giriş Yap";
});

// Giriş ve Kayıt Mekanizması (LocalStorage)
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

// Hazır Kapsüllere Tıklama Fonksiyonu
function useTag(text) {
    queryInput.value = text;
    askCodeBuddy();
}

// Akıllı Yapay Zeka Sorgusu
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
            resultCard.innerHTML = "🤖 Ufak bir bağlantı hatası oluştu ama hemen tekrar dene aşkım!";
        }
    } catch (error) {
        resultCard.innerHTML = "🤖 Sunucu şu an yoğun, lütfen tekrar sorgula canım!";
    }
}

searchBtn.addEventListener('click', askCodeBuddy);
