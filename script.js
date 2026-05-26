// LocalStorage Veritabanı Yapılandırması (Kullanıcı Kayıt Sistemi)
const authContainer = document.getElementById('authContainer');
const appContainer = document.getElementById('appContainer');
const authForm = document.getElementById('authForm');
const authTitle = document.getElementById('authTitle');
const authEmail = document.getElementById('authEmail');
const authPassword = document.getElementById('authPassword');
const authBtn = document.getElementById('authBtn');
const toggleAuthLink = document.getElementById('toggleAuthLink');
const toggleText = document.getElementById('toggleText');
const logoutBtn = document.getElementById('logoutBtn');

let isLoginMode = true;

// Veritabanı Kontrolü (Oturum Açık mı?)
if (localStorage.getItem('currentUser')) {
    showApp();
}

toggleAuthLink.addEventListener('click', (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    if (!isLoginMode) {
        authTitle.innerText = "CodeBuddy'ye Kayıt Ol";
        authBtn.innerText = "Kayıt Ol";
        toggleText.innerText = "Zaten hesabınız var mı?";
        toggleAuthLink.innerText = "Giriş Yap";
    } else {
        authTitle.innerText = "CodeBuddy'ye Giriş Yap";
        authBtn.innerText = "Giriş Yap";
        toggleText.innerText = "Hesabınız yok mu?";
        toggleAuthLink.innerText = "Kayıt Ol";
    }
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = authEmail.value.trim();
    const password = authPassword.value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (!isLoginMode) {
        // Kayıt Olma İşlemi (Veritabanına Yazma)
        if (users.find(u => u.email === email)) {
            alert("Bu e-posta adresi zaten kayıtlı!");
            return;
        }
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
        isLoginMode = true;
        authTitle.innerText = "CodeBuddy'ye Giriş Yap";
        authBtn.innerText = "Giriş Yap";
    } else {
        // Giriş Yapma İşlemi (Veritabanından Doğrulama)
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('currentUser', email);
            showApp();
        } else {
            alert("Hatalı e-posta veya şifre!");
        }
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    appContainer.classList.add('hidden');
    authContainer.classList.remove('hidden');
});

function showApp() {
    authContainer.classList.add('hidden');
    appContainer.classList.remove('hidden');
}

// Arama ve İçerik Üretim Motoru
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatArea = document.getElementById('chatArea');
const welcomeSection = document.getElementById('welcomeSection');

sendBtn.addEventListener('click', processQuery);
userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') processQuery(); });

function fillInput(text) {
    userInput.value = text;
    processQuery();
}

const database = {
    "c# döngüler": {
        title: "C# Döngü Yapıları (For Loop)",
        desc: "Belirli bir kod bloğunu, belirlenen koşul sağlandığı sürece tekrar tekrar çalıştırmak için kullanılan kontrol yapılarıdır.",
        code: `for (int i = 0; i < 5; i++)\n{\n    Console.WriteLine("Adım: " + i);\n}`,
        output: "Adım: 0\nAdım: 1\nAdım: 2\nAdım: 3\nAdım: 4",
        deep: "For döngüsü; başlangıç değeri, kontrol koşulu ve artış miktarı olmak üzere 3 temel parametre alır. Döngü, koşul 'false' olana dek bellek üzerinde iterasyon gerçekleştirmeye devam eder.",
        roadmap: "1. For/While Temelleri\n2. Break/Continue İfadeleri\n3. İç İçe (Nested) Döngü Optimizasyonları",
        quiz: { q: "C# dilinde sonsuz döngü hangisiyle oluşturulabilir?", a: ["for(;;)", "for(int i=0; i<10; i++)", "if(true)"], correct: 0 }
    },
    "html div": {
        title: "HTML Bölümleme Etiketi (div)",
        desc: "Web sayfalarında blok düzeyinde (block-level) alanlar oluşturarak tasarımları bölümlere ayırmak ve CSS ile şekillendirmek amacıyla kullanılan genel bir kapsayıcıdır.",
        code: `<div class="container">\n    <h1>CodeBuddy</h1>\n</div>`,
        output: "[Ekran Çıktısı: Sayfada yeni bir satırdan başlayan, genişliği %100 kaplayan görünmez bir blok kutu oluşur.]",
        deep: "Div semantik (anlamsal) bir değer taşımaz. Modern web standartlarında div yerine SEO uyumluluğu için section, article, header gibi semantik etiketlerin önceliklendirilmesi önerilir.",
        roadmap: "1. Block vs Inline Farkları\n2. HTML5 Semantik Etiketleri\n3. Dom Hiyerarşisi",
        quiz: { q: "div etiketi varsayılan olarak hangi görüntüleme (display) tipine sahiptir?", a: ["inline", "block", "flex"], correct: 1 }
    },
    "css flexbox": {
        title: "CSS Esnek Kutu Modeli (Flexbox)",
        desc: "Sayfa öğelerini tek boyutlu (satır veya sütun) olarak hizalamak, dağıtmak ve alan yönetimini responsive (esnek) hale getirmek için geliştirilmiş güçlü bir düzen modülüdür.",
        code: `.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}`,
        output: "[Ekran Çıktısı: Kapsayıcı içerisindeki tüm alt öğeler dikeyde ve yatayda tam merkeze hizalanır.]",
        deep: "Flexbox, ana eksen (main axis) ve ikincil eksen (cross axis) mantığına dayanır. justify-content ana ekseni yönetirken, align-items dikey eksendeki dağılımı kontrol eder.",
        roadmap: "1. Display: Flex Tanımlama\n2. Justify ve Align Parametreleri\n3. Flex-direction ve Wrap",
        quiz: { q: "Flexbox düzeninde öğeleri yatay eksende ortalamak için hangi özellik kullanılır?", a: ["align-items: center", "justify-content: center", "text-align: center"], correct: 1 }
    },
    "javascript async": {
        title: "JavaScript Asenkron Yapı (Async/Await)",
        desc: " JavaScript'te uzun süren işlemleri (veri çekme vb.) tarayıcı arayüzünü kilitlemeden, arka planda yürütmek ve asenkron kodları senkron düzen kolaylığında yazmak için kullanılan modern bir mimaridir.",
        code: `async function veriGetir() {\n    let veri = await fetch('api/url');\n    return veri.json();\n}`,
        output: "[Sistem Çıktısı: Promise nesnesi çözümlenene kadar kodun yürütülmesi duraklatılır, arayüz donmaz.]",
        deep: "Async anahtar kelimesi fonksiyonun her zaman bir 'Promise' döndürmesini sağlar. Await ise yalnızca async fonksiyonlar içinde çalışır ve asenkron işlem tamamlanana kadar kod akışını bekletir.",
        roadmap: "1. Callback Fonksiyonları\n2. Promises Yapısı\n3. Async / Await Hata Yönetimi (Try-Catch)",
        quiz: { q: "Await anahtar kelimesi nerede kullanılabilir?", a: ["Herhangi bir fonksiyon içinde", "Yalnızca async fonksiyonların içinde", "Sadece döngülerin içinde"], correct: 1 }
    }
};

function processQuery() {
    const query = userInput.value.trim().toLowerCase();
    if (!query) return;

    if (welcomeSection) welcomeSection.style.display = 'none';

    const data = database[query] || {
        title: "Sorgu Sonucu",
        desc: "Girdiğiniz teknik kavram sistem veri setinde analiz edildi. Projenin bir sonraki geliştirme fazında, bu sorgu tipi için yapay zeka entegrasyonu tamamlanacaktır.",
        code: `// Sorgu: ${userInput.value}\n// Veri tabanı eşleşmesi aranıyor...`,
        output: "Durum: İstek kuyruğa alındı.",
        deep: "Bu kavramın detaylı analizi ve dokümantasyon entegrasyonu projenin ilerleyen aşamalarında aktif hale gelecektir.",
        roadmap: "1. Temel Kavram Analizi\n2. Algoritma Entegrasyonu\n3. Üretim Testi",
        quiz: null
    };

    const cardId = 'card_' + Date.now();
    const card = document.createElement('div');
    card.className = 'result-card';
    card.id = cardId;

    let quizHtml = '';
    if (data.quiz) {
        quizHtml = `
            <div class="interactive-box hidden" id="quiz_${cardId}">
                <p><strong>Soru:</strong> ${data.quiz.q}</p>
                ${data.quiz.a.map((opt, idx) => `<button class="quiz-option" onclick="checkQuiz('${cardId}', ${idx}, ${data.quiz.correct})">${opt}</button>`).join('')}
            </div>
        `;
    }

    card.innerHTML = `
        <div class="card-header-actions">
            <span class="card-title">${data.title}</span>
            <button class="favorite-btn" onclick="toggleFav(this)"><i class="fa-solid fa-star"></i></button>
        </div>
        <p class="explanation-text">${data.desc}</p>
        <div class="code-block-container">
            <button class="copy-btn" onclick="copyCode(this)">Kopyala</button>
            <pre><code>${data.code}</code></pre>
        </div>
        <div class="output-container">
            <div class="output-title">Program Çıktısı:</div>
            <div class="output-text">${data.output}</div>
        </div>
        <div class="action-buttons-row">
            <button class="sub-btn" onclick="toggleSubElement('${cardId}', 'deep')"><i class="fa-solid fa-graduation-cap"></i> Derinlemesine Anlat</button>
            <button class="sub-btn" onclick="toggleSubElement('${cardId}', 'roadmap')"><i class="fa-solid fa-map"></i> Yol Haritası</button>
            ${data.quiz ? `<button class="sub-btn" onclick="toggleSubElement('${cardId}', 'quiz')"><i class="fa-solid fa-circle-question"></i> Kendini Test Et</button>` : ''}
        </div>
        <div class="interactive-box hidden" id="deep_${cardId}">
            <p><strong>Derinlemesine Analiz:</strong> ${data.deep}</p>
        </div>
        <div class="interactive-box hidden" id="roadmap_${cardId}">
            <p><strong>3 Adımlı Yol Haritası:</strong></p>
            <p style="white-space: pre-line; line-height: 1.6; margin-top:5px;">${data.roadmap}</p>
        </div>
        ${quizHtml}
    `;

    chatArea.appendChild(card);
    userInput.value = '';
    chatArea.scrollTop = chatArea.scrollHeight;
}

function toggleSubElement(cardId, type) {
    const el = document.getElementById(`${type}_${cardId}`);
    if (el) el.classList.toggle('hidden');
}

function copyCode(btn) {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code);
    btn.innerText = "Kopyalandı!";
    setTimeout(() => { btn.innerText = "Kopyala"; }, 2000);
}

function toggleFav(btn) {
    btn.classList.toggle('active');
}

function checkQuiz(cardId, chosen, correct) {
    const box = document.getElementById(`quiz_${cardId}`);
    if (chosen === correct) {
        alert("Tebrikler! Doğru cevap.");
        box.classList.add('hidden');
    } else {
        alert("Hatalı cevap, lütfen tekrar deneyiniz.");
    }
}