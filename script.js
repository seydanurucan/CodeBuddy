const firebaseConfig = {
    apiKey: "AIzaSyAsB...",
    authDomain: "codebuddy-2.firebaseapp.com",
    projectId: "codebuddy-2",
    storageBucket: "codebuddy-2.appspot.com",
    messagingSenderId: "471583091216",
    appId: "1:471583091216:web:codebuddy"
};

// Firebase'i Başlatma
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// --- BACKGROUND MATRIX EFFECT ---
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

let columns;
let rainDrops = [];
const matrixChars = "0101ABCDEFUXZ<>殻行線形型点".split("");
const fontSize = 15;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    rainDrops = [];
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawMatrix() {
    ctx.fillStyle = 'rgba(5, 6, 5, 0.08)';  
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#10FF70'; 
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;
        
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.985) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}
setInterval(drawMatrix, 50);

// --- VERİ MOTORU BAŞLANGICI ---
const codeBuddyData = {
    "C# DÖNGÜLER": {
        title: "C# Döngüler (Loops)",
        desc: "Belirli bir kod bloğunun, verilen bir koşul sağlandığı sürece tekrar tekrar çalıştırılmasını sağlayan temel kontrol yapılarıdır.",
        deep: `🔄 C# DÖNGÜ YAPILARI VE İLERİ SEVİYE DERİNLİKLERİ 🔄\n\nC#'ta program akışını yönetirken kod tekrarını önlemenin en güçlü yolu döngülerdir. Projelerde en sık kullanılan 4 döngü yapısı ve mimari farkları şunlardır:\n\n1️⃣ for Döngüsü:\nDöngünün kaç kez döneceği başlangıçta kesin olarak biliniyorsa tercih edilir. Bir sayaç, bir bitiş koşulu ve artış miktarı ile tek satırda kurulur.\nÖrn: for (int i = 0; i < 10; i++)\n\n2️⃣ while Döngüsü:\nDöngünün kaç kez döneceği önceden bilinmiyorsa, sadece bir koşula bağlıysa kullanılır. Koşul doğru (true) olduğu sürece döngü dönmeye devam eder.\n\n3️⃣ do-while Döngüsü:\nwhile döngüsünden tek farkı, koşul ne olursa olsun kod bloğunun en az 1 kez çalıştırılmasının garanti olmasıdır.\n\n4️⃣ foreach Döngüsü:\nC#'ta diziler (Arrays) ve koleksiyonlar (List) üzerinde dönmek için icat edilmiş en güvenli döngüdür.\n\n⚡ Kritik Anahtar Kelimeler:\n• break: Döngüyü o anda tamamen sonlandırır.\n• continue: Döngünün o anki turunu pas geçer.`,
        code: "using System;\n\nclass Program {\n    static void Main() {\n        string[] veriDizisi = { \"C#\", \"Sorgu\", \"Matrix\" };\n        foreach (string terim in veriDizisi) {\n            if (terim == \"Sorgu\") continue;\n            Console.WriteLine($\"Sistem Elemanı: {terim}\");\n        }\n    }\n}",
        output: "Sistem Elemanı: C#\nSistem Elemanı: Matrix"
    },
    "HTML DIV": {
        title: "HTML <div> Etiketi",
        desc: "Web sayfalarında diğer elementleri bir araya toplamak, gruplamak ve CSS ile CSS düzenleri kurmak için kullanılan jenerik bir bölümlendirme (container) etiketidir.",
        deep: `📦 HTML DIV ETİKETİ VE MODERN SEMANTİK WEB DÜNYASI 📦\n\n<div> (Division), HTML'in en çok kullanılan kemik etiketlerinden biridir. Kendisinin varsayılan olarak hiçbir görsel etkisi veya stili yoktur; sadece bir kutudur.\n\n⚡ Blok Seviyeli Element (Block-Level Element):\n<div> etiketi 'block-level' bir elementtir. Bulunduğu satırı uçtan uca kaplar. width ve height değerlerini doğrudan kabul eder.\n\n🎨 CSS ve JS İçin Bağlayıcı Görevi:\nTek başına anlamsız olan div, id veya class öznitelikleriyle birleştiğinde web tasarımın can damarı haline gelir.\n\n🚨 Modern Semantik (Anlamsal) Web Uyarısı:\nModern web standardslarında (HTML5), arama motorlarının (SEO) siteyi daha iyi anlaması için div yerine anlamsal etiketler tercih edilmelidir: <nav>, <header>, <main>, <footer> gibi.`,
        code: "\n<div class=\"matrix-kutu\" style=\"border: 1px solid #10FF70; padding: 10px;\">\n    <h4>CodeBuddy Div Kutusu</h4>\n    <p>Bu yazı yeşil bir çerçeve içindedir.</p>\n</div>",
        output: "[Ekran Çıktısı: 1px yeşil çizgili, içinde başlık ve yazı olan şık bir premium kutu oluşur]"
    },
    "CSS FLEXBOX": {
        title: "CSS Flexbox Düzeni",
        desc: "Web sayfasındaki elementleri dikeyde veya yatayda kolayca hizalamak, dağıtmak ve esnek (responsive) arayüzler tasarlamak için kullanılan 1 boyutlu bir CSS yerleşim modelidir.",
        deep: `📐 CSS FLEXBOX MİMARİSİ VE HİZALAMA FORMÜLLERİ 📐\n\nFlexbox (Flexible Box), responsive (mobil uyumlu) tasarımların şah damarı olan bir sistemdir. display: flex yazdığınız an o kutu bir Flex Container olur.\n\n⚡ Temel Eksen Mantığı:\nElemanları ya yatay satır (row) ya dikey sütun (column) olarak dizer.\n\n🌟 En Kritik Hizalama Parametreleri:\n1️⃣ justify-content: Elemanları ANA EKSENDE (yatayda) nasıl dağıtacağınızı belirler. (center, space-between, space-around)\n2️⃣ align-items: Elemanları YAN EKSENDE (dikeyde) nasıl hizalayacağınızı belirler. (center, flex-start, flex-end)\n\n💡 Sihirli Formül (Tam Ortalamak):\ndisplay: flex;\njustify-content: center;\nalign-items: center;`,
        code: "/* CSS Kodu */\n.container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background: #000;\n}",
        output: "[Görsel Çıktı: İçindeki yan yana dizilmiş 3 premium buton, aralarında eşit boşluklarla dikeyde tam ortalanmış şekilde sıralanır]"
    },
    "PYTHON LİSTE": {
        title: "Python Liste (List)",
        desc: "Python'da birden fazla veriyi tek bir değişken altında, sıralı, değiştirilebilir (mutable) ve farklı veri tiplerini destekleyecek şekilde tutan esnek bir veri yapısıdır.",
        deep: `🐍 PYTHON LİSTELERİ VE GELİŞMİŞ METOTLAR REHBERİ 🐍\n\nPython'da listeler köşeli parantez '[]' ile tanımlanır. İçine aynı anda hem string, hem integer, hem de boolean değerleri karıştırarak atabilirsiniz.\n\n⚡ İndeksleme ve Dilimleme (Slicing):\nListelerin ilk elemanı her zaman 0. indekstir. liste[-1] ifadesi listenin son elemanını getirir. liste[1:4] ifadesi ise 1, 2 ve 3. indekslerdeki elemanları koparıp yeni bir liste verir.\n\n🛠 En Çok Karşına Çıkacak Liste Metotları:\n• append(eleman): Listenin en sonuna yeni bir eleman ekler.\n• insert(indeks, eleman): Belirtilen indeks numarasına elemanı yerleştirir.\n• remove(değer): Liste içindeki belirtilen ilk eşleşen değeri siler.\n• pop(indeks): Belirtilen indeksteki elemanı listeden kopartır.`,
        code: "# Python Kodu\npremium_liste = ['Matrix', 'C#', 'API']\npremium_liste.append('Python')\n\n# Son elemanı ve ilk iki elemanı yazdıralım\nprint('Son Eleman:', premium_liste[-1])\nprint('Dilim:', premium_liste[0:2])",
        output: "Son Eleman: Python\nDilim: ['Matrix', 'C#']"
    },
    "JAVASCRIPT ASYNC": {
        title: "JavaScript Async / Await",
        desc: "JavaScript'te uzun süren asenkron işlemleri (API istekleri, veritabanı sorguları vb.) sanki senkronmuş gibi düz ve okunabilir bir yapıda yazmamızı sağlayan modern bir dil özelliğidir.",
        deep: `⏳ JAVASCRIPT ASENKRON MİMARİSİ VE ASYNC/AWAIT DÜNYASI ⏳\n\nJavaScript tek iş parçacıklı (single-threaded) çalışan bir dildir. İnternetten veri çekilirken sayfanın donmaması için asenkron mimari hayati önem taşır.\n\n🔑 Çalışma Kuralları:\n1️⃣ async Kelimesi: Bir fonksiyonun önüne konduğunda, o fonksiyon artık geriye otomatik olarak bir Promise döndürür.\n2️⃣ await Kelimesi: Sadece async fonksiyonlar içinde kullanılabilir. İşlem bitene kadar alt satıra geçilmesini bekletir ancak tarayıcıyı dondurmaz.\n\n🛡 Hata Yönetimi (Try-Catch):\ntry-catch blokları kullanılarak asenkron hatalar yakalanır.`,
        code: "// JavaScript Asenkron Fonksiyonu\nasync function veriGetir() {\n    try {\n        let response = await fetch('https://api.codebuddy.com/data');\n        let data = await response.json();\n        console.log('Başarılı:', data);\n    } catch (error) {\n        console.error('Hata Yakalandı:', error);\n    }\n}\nveriGetir();",
        output: "Başarılı: { id: 101, secure: true, name: 'Matrix_Data' }"
    },
    "SQL JOIN": {
        title: "SQL JOIN İşlemleri",
        desc: "İlişkisel veritabanlarında, aralarında mantıksal bir bağ (Foreign Key) bulunan iki veya daha fazla tabloyu birleştirerek tek bir sonuç kümesi elde etmeyi sağlayan SQL komutudur.",
        deep: `🗄 SQL JOIN TÜRLERİ VE MATEMATİKSEL KÜME MANTIKLARI 🗄\n\nVeritabanı normalleştirmesi gereği veriler farklı tablolarda tutulur. Bu tabloları birleştirmek için JOIN kullanırız.\n\n🌟 En Çok Kullanılan 4 JOIN Türü:\n1️⃣ INNER JOIN: Tabloların her ikisinde de ortak olan (eşleşen) kayıtları getirir. Kesişim kümesidir.\n2️⃣ LEFT JOIN: Soldaki tablonun tüm kayıtlarını, sağdaki tablonun ise sadece eşleşenlerini getirir. Eşleşmeyen alanlar 'NULL' olur.\n3️⃣ RIGHT JOIN: Sağdaki tablonun tüm kayıtlarını ve soldaki tablonun sadece eşleşen kayıtlarını getirir.\n4️⃣ FULL JOIN: Sol ve sağ tablolardaki tüm kayıtları birleştirir. Eşleşme olmayan tüm kolonları 'NULL' ile doldurur.`,
        code: "-- SQL Sorgu Örneği\nSELECT Kullanicilar.Ad, Siparisler.SiparisNo\nFROM Kullanicilar\nINNER JOIN Siparisler ON Kullanicilar.ID = Siparisler.KullaniciID;",
        output: "Ad          SiparisNo\n---------------------\nMatrix_Neo  #133755\nCode_Buddy  #998211"
    },
    "REACT HOOKS": {
        title: "React Hooks",
        desc: "React 16.8 sürümüyle gelen, Class (Sınıf) yazmaya gerek kalmadan, Functional (Fonksiyonel) bileşenlerde state (durum) ve diğer React özelliklerini kullanmamızı sağlayan özel fonksiyonlardır.",
        deep: `⚛️ REACT HOOKS DEVRİMİ VE YAŞAM DÖNGÜSÜ YÖNETİMİ ⚛️\n\nHooks mimarisi kod tabanını küçülttü ve sadeleştirdi.\n\n⚡ En Popüler İki Hook:\n1️⃣ useState Hook'u: Fonksiyonel bileşene lokal bir 'state' (durum hafızası) ekler. Değer güncellendiğinde arayüzü otomatik olarak yeniden tetikler (re-render).\n2️⃣ useEffect Hook'u: Yaşam döngüsündeki (Bileşen doğdu, güncellendi veya öldü) anları yakalar. Bağımlılık dizisi boş bırakılırsa '[]' sadece sayfa ilk yüklendiğinde 1 kez çalışır.\n\n🚨 Hooks Kuralları:\n• Sadece en üst seviyede (top-level) çağrılmalıdırlar. Döngülerin veya if koşullarının içinde çağrılmazlar.`,
        code: "// React Kodu\nimport React, { useState, useEffect } from 'react';\n\nfunction MatrixSayac() {\n    const [sayac, setSayac] = useState(0);\n    \n    useEffect(() => {\n        console.log(`Sayaç güncellendi: ${sayac}`);\n    }, [sayac]);\n    \n    return <button onClick={() => setSayac(sayac + 1)}>Güç Arttır: {sayac}</button>;\n}",
        output: "[Arayüz Çıktısı: Ekranda bir buton belirir. Tıkladıkça üzerindeki sayı artar ve konsola anlık yeni değer yazılır.]"
    },
    "GIT COMMIT": {
        title: "Git Commit Komutu",
        desc: "Projenizde yaptığınız değişiklikleri, yerel veritabanınıza (local repository) açıklayıcı bir mesajla birlikte kalıcı bir zaman damgası (versiyon) olarak kaydetme işlemidir.",
        deep: `🐙 GIT VERSİYON KONTROL SİSTEMİ VE COMMIT ANATOMİSİ 🐙\n\ngit commit komutu zaman makinesinde bir geri dönüş noktası (Save Point) oluşturmaktır.\n\n🛠 Bir Değişikliğin Commit Olma Yolculuğu (3 Alan):\n1️⃣ Working Directory: Kod üzerinde değişiklik yapılan kırmızı renkli alan.\n2️⃣ Staging Area: 'git add .' komutuyla kodların hazırlandığı yeşil renkli bekleme salonu.\n3️⃣ Local Repository: 'git commit -m \"mesaj\"' komutuyla kodların yerelde mühürlendiği son aşama.\n\n🌟 Mesaj Standartları (Conventional Commits):\n• feat: yeni arama butonu eklendi (Yeni bir özellik)\n• fix: giris ekranindaki çökme somunu çözüldü (Hata düzeltme)`,
        code: "# Terminal Komut Sıralaması\ngit status\ngit add .\ngit commit -m \"feat: dinamik arama motoru ve 8 adet yeni terim sisteme entegre edildi\"",
        output: "[Master root-commit b12c34a] feat: dinamik arama motoru...\n 3 files changed, 250 insertions(+)\n create mode 100644 script.js"
    }
};

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authScreen = document.getElementById('authScreen');
const dashboardScreen = document.getElementById('dashboardScreen');
const termsGrid = document.getElementById('termsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const termDetailCard = document.getElementById('termDetailCard');
const introSection = document.getElementById('introSection');

const termTitle = document.getElementById('termTitle');
const termDesc = document.getElementById('termDesc');
const codeBlock = document.getElementById('codeBlock');
const outputBlock = document.getElementById('outputBlock');

const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');

// --- SEKME (TAB) GEÇİŞ SİSTEMİ (YENİ EKLENDİ VE HATALAR ÇÖZÜLDÜ) ---
const tabLogin = document.getElementById('tabLogin');
const tabRegister = document.getElementById('tabRegister');

if (tabLogin && tabRegister) {
    tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });
}

// --- DİNAMİK VERİTABANI GİRİŞ & KAYIT SİSTEMİ ---

// 1. Kullanıcı Kayıt Olma Tetikleyicisi
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('regUsernameInput').value.trim().toLowerCase();
        const password = document.getElementById('regPasswordInput').value.trim();

        if (username.length < 3 || password.length < 4) {
            alert("Kullanıcı adı en az 3, şifre en az 4 karakter olmalıdır!");
            return;
        }

        db.collection("users").doc(username).get().then((doc) => {
            if (doc.exists) {
                alert("🚨 Bu kullanıcı adı sistemde zaten kayıtlı!");
            } else {
                db.collection("users").doc(username).set({
                    password: password,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(() => {
                    alert("🎉 Kayıt başarılı! Giriş sekmesinden belirlediğin şifreyle bağlanabilirsin.");
                    tabLogin.click(); // Otomatik giriş sekmesine yönlendirir
                })
                .catch((err) => alert("Kayıt hatası: " + err));
            }
        });
    });
}

// 2. Kullanıcı Giriş Yapma Tetikleyicisi
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value.trim();

        db.collection("users").doc(username).get().then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                if (userData.password === password) {
                    authScreen.classList.add('hidden');
                    dashboardScreen.classList.remove('hidden');
                    if (document.getElementById('welcomeText')) {
                        document.getElementById('welcomeText').innerText = `Sistem: ${username.toUpperCase()}`;
                    }
                    initDashboard();
                } else {
                    alert("🚨 Hatalı Sistem Şifresi!");
                }
            } else {
                alert("🚨 Kullanıcı bulunamadı! Önce Kayıt Ol sekmesinden hesap açmalısın.");
            }
        }).catch((err) => {
            console.error("Giriş sırasında hata oluştu: ", err);
        });
    });
}

// Terim Butonlarını Grid Düzeninde Başlatma
function initDashboard() {
    if (!termsGrid) return;
    termsGrid.innerHTML = '';
    Object.keys(codeBuddyData).forEach(key => {
        const chip = document.createElement('div');
        chip.className = 'term-chip';
        chip.innerText = key.toLowerCase();
        
        chip.addEventListener('click', () => showTermDetail(key));
        termsGrid.appendChild(chip);
    });
}

// Terim Detaylarını Gösterme Fonksiyonu
function showTermDetail(key) {
    const data = codeBuddyData[key];
    if (!data) return;

    if (introSection) introSection.classList.add('hidden');
    if (termDetailCard) termDetailCard.classList.remove('hidden');

    if (termTitle) termTitle.innerText = data.title;
    if (termDesc) termDesc.innerText = data.desc;
    if (codeBlock) codeBlock.innerText = data.code;
    if (outputBlock) outputBlock.innerText = data.output;
}
