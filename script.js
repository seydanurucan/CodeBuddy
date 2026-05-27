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

// --- BACKGROUND MATRIX EFFECT (TAM EKRAN GÜNCELLEMESİ) ---
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
    ctx.fillStyle = 'rgba(5, 6, 5, 0.15)'; 
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
        code: "using System;\n\nclass Program {\n    static void Main() {\n        string[] siberDizi = { \"C#\", \"Sorgu\", \"Matrix\" };\n        foreach (string terim in siberDizi) {\n            if (terim == \"Sorgu\") continue;\n            Console.WriteLine($\"Siber Eleman: {terim}\");\n        }\n    }\n}",
        output: "Siber Eleman: C#\nSiber Eleman: Matrix",
        questions: [
            { q: "Koşul yanlış olsa bile en az bir kez çalışan döngü hangisidir?", options: ["for", "while", "do-while", "foreach"], answer: "do-while" },
            { q: "Belirli bir sayıda döneceği kesin olan durumlarda genellikle hangi döngü tercih edilir?", options: ["for", "while", "do-while", "if"], answer: "for" },
            { q: "Bir koleksiyon veya dizinin tüm elemanlarını sırayla dönmek için en pratik döngü hangisidir?", options: ["while", "foreach", "for", "switch"], answer: "foreach" },
            { q: "Döngüyü tamamen sonlandırıp döngüden çıkmak için hangi anahtar kelime kullanılır?", options: ["continue", "return", "break", "exit"], answer: "break" },
            { q: "Döngünün o anki turunu atlayıp bir sonraki tura geçmesini sağlayan ifade hangisidir?", options: ["break", "continue", "skip", "next"], answer: "continue" },
            { q: "Sonsuz döngü oluşturmak için 'while(...)' içine ne yazılmalıdır?", options: ["false", "0", "null", "true"], answer: "true" },
            { q: "for (int i=0; i<5; i++) döngüsü toplam kaç kez tetiklenir?", options: ["4", "5", "6", "Sonsuz"], answer: "5" },
            { q: "Döngü koşulu başlangıçta false ise hangi döngü hiç çalışmaz?", options: ["do-while", "while", "İkisi de", "Hiçbiri"], answer: "while" },
            { q: "for döngüsünde sayaç artırma alanında 'i+=2' yazılırsa sayaç nasıl ilerler?", options: ["Birer birer", "İkişer ikişer", "Karesi alınır", "Hata verir"], answer: "İkişer ikişer" },
            { q: "Aşağıdakilerden hangisi C#'ta geçerli bir döngü türü değildir?", options: ["for", "while", "repeat-until", "foreach"], answer: "repeat-until" }
        ]
    },
    "HTML DIV": {
        title: "HTML <div> Etiketi",
        desc: "Web sayfalarında diğer elementleri bir araya toplamak, gruplamak ve CSS ile CSS düzenleri kurmak için kullanılan jenerik bir bölümlendirme (container) etiketidir.",
        deep: `📦 HTML DIV ETİKETİ VE MODERN SEMANTİK WEB DÜNYASI 📦\n\n<div> (Division), HTML'in en çok kullanılan kemik etiketlerinden biridir. Kendisinin varsayılan olarak hiçbir görsel etkisi veya stili yoktur; sadece bir kutudur.\n\n⚡ Blok Seviyeli Element (Block-Level Element):\n<div> etiketi 'block-level' bir elementtir. Bulunduğu satırı uçtan uca kaplar. width ve height değerlerini doğrudan kabul eder.\n\n🎨 CSS ve JS İçin Bağlayıcı Görevi:\nTek başına anlamsız olan div, id veya class öznitelikleriyle birleştiğinde web tasarımın can damarı haline gelir.\n\n🚨 Modern Semantik (Anlamsal) Web Uyarısı:\nModern web standartlarında (HTML5), arama motorlarının (SEO) siteyi daha iyi anlaması için div yerine anlamsal etiketler tercih edilmelidir: <nav>, <header>, <main>, <footer> gibi.`,
        code: "\n<div class=\"siber-kutu\" style=\"border: 1px solid #10FF70; padding: 10px;\">\n    <h4>CodeBuddy Div Kutusu</h4>\n    <p>Bu yazı yeşil bir çerçeve içindedir.</p>\n</div>",
        output: "[Ekran Çıktısı: 1px yeşil çizgili, içinde başlık ve yazı olan şık bir siber kutu oluşur]",
        questions: [
            { q: "<div> etiketinin açılımı aşağıdakilerden hangisidir?", options: ["Division", "Document", "Direction", "Device"], answer: "Division" },
            { q: "<div> etiketi varsayılan olarak nasıl bir elementtir?", options: ["inline", "block-level", "inline-block", "flex"], answer: "block-level" },
            { q: "Aşağıdaki etiketlerden hangisi div gibi block-level bir elementtir?", options: ["<span>", "<a>", "<p>", "<img>"], answer: "<p>" },
            { q: "div elementinin yan yana gelmesini sağlamak için CSS'te en sık hangi özellik kullanılır?", options: ["display: block", "display: flex", "position: static", "clear: both"], answer: "display: flex" },
            { q: "<div> etiketinin web sayfasındaki temel amacı nedir?", options: ["Metni kalınlaştırmak", "Link vermek", "İçerikleri gruplayıp düzenlemek", "Resim eklemek"], answer: "İçerikleri gruplayıp düzenlemek" },
            { q: "Bir div içine yazılan metni tamamen ortalamak için hangi CSS kodu yazılabilir?", options: ["text-align: center", "align: middle", "float: center", "margin: top"], answer: "text-align: center" },
            { q: "HTML5 ile birlikte gelen ve sadece div kullanmak yerine tercih edilen semantik etiket hangisidir?", options: ["<b>", "<section>", "<i>", "<br>"], answer: "<section>" },
            { q: "İki farklı div elementine aynı CSS özelliklerini tanımlamak için hangisi kullanılır?", options: ["Aynı id", "Aynı class", "Aynı href", "Aynı src"], answer: "Aynı class" },
            { q: "Bir div'in dış boşluğunu ayarlamak için hangi CSS özelliği kullanılır?", options: ["padding", "margin", "border", "width"], answer: "margin" },
            { q: "Bir div'in iç boşluğunu (kendi duvarı ile içerik arası) hangisi ayarlar?", options: ["margin", "padding", "height", "display"], answer: "padding" }
        ]
    },
    "CSS FLEXBOX": {
        title: "CSS Flexbox Düzeni",
        desc: "Web sayfasındaki elementleri dikeyde veya yatayda kolayca hizalamak, dağıtmak ve esnek (responsive) arayüzler tasarlamak için kullanılan 1 boyutlu bir CSS yerleşim modelidir.",
        deep: `📐 CSS FLEXBOX MİMARİSİ VE HİZALAMA FORMÜLLERİ 📐\n\nFlexbox (Flexible Box), responsive (mobil uyumlu) tasarımların şah damarı olan bir sistemdir. display: flex yazdığınız an o kutu bir Flex Container olur.\n\n⚡ Temel Eksen Mantığı:\nElemanları ya yatay satır (row) ya dikey sütun (column) olarak dizer.\n\n🌟 En Kritik Hizalama Parametreleri:\n1️⃣ justify-content: Elemanları ANA EKSENDE (yatayda) nasıl dağıtacağınızı belirler. (center, space-between, space-around)\n2️⃣ align-items: Elemanları YAN EKSENDE (dikeyde) nasıl hizalayacağınızı belirler. (center, flex-start, flex-end)\n\n💡 Sihirli Formül (Tam Ortalamak):\ndisplay: flex;\njustify-content: center;\nalign-items: center;`,
        code: "/* CSS Kodu */\n.container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background: #000;\n}",
        output: "[Görsel Çıktı: İçindeki yan yana dizilmiş 3 siber buton, aralarında eşit boşluklarla dikeyde tam ortalanmış şekilde sıralanır]",
        questions: [
            { q: "Flexbox sistemini başlatmak için kapsayıcıya hangi CSS kodu yazılır?", options: ["display: block", "display: flex", "position: flex", "float: left"], answer: "display: flex" },
            { q: "Elemanları ana eksende (varsayılan yatayda) hizalamak için hangisi kullanılır?", options: ["align-items", "justify-content", "flex-direction", "flex-wrap"], answer: "justify-content" },
            { q: "Elemanları yan eksende (varsayılan dikeyde) hizalamak için hangisi kullanılır?", options: ["justify-content", "align-items", "flex-flow", "order"], answer: "align-items" },
            { q: "Flex elemanlarının alt satıra geçip geçmeyeceğini hangi özellik belirler?", options: ["flex-wrap", "flex-direction", "justify-content", "flex-grow"], answer: "flex-wrap" },
            { q: "Flexbox'ta ana eksen yönünü dikey (yukarıdan aşağıya) yapmak için ne yazılır?", options: ["flex-direction: row", "flex-direction: column", "flex-wrap: wrap", "align-content: center"], answer: "flex-direction: column" },
            { q: "justify-content: space-between ne işe yarar?", options: ["Elemanları ortalar", "Elemanların arasına eşit boşluk bırakır", "Elemanları sona yaslar", "Elemanları gizler"], answer: "Elemanların arasına eşit boşluk bırakır" },
            { q: "Flexbox alt elemanlarının sıralamasını değiştirmek için hangi alt özellik kullanılır?", options: ["sort", "index", "order", "flex-order"], answer: "order" },
            { q: "Flexbox varsayılan olarak kaç boyutlu bir yerleşim modelidir?", options: ["1 boyutlu", "2 boyutlu", "3 boyutlu", "Boyutsuzdur"], answer: "1 boyutlu" },
            { q: "Bir flex elemanının diğerlerine göre ne kadar büyüyeceğini belirleyen kod hangisidir?", options: ["flex-shrink", "flex-grow", "flex-basis", "max-width"], answer: "flex-grow" },
            { q: "Flexbox'ta elemanları dikeyde ve yatayda tam ortalamak için hangi ikili kullanılır?", options: ["left/top", "row/column", "justify-content/align-items", "margin/padding"], answer: "justify-content/align-items" }
        ]
    },
    "PYTHON LİSTE": {
        title: "Python Liste (List)",
        desc: "Python'da birden fazla veriyi tek bir değişken altında, sıralı, değiştirilebilir (mutable) ve farklı veri tiplerini destekleyecek şekilde tutan esnek bir veri yapısıdır.",
        deep: `🐍 PYTHON LİSTELERİ VE GELİŞMİŞ METOTLAR REHBERİ 🐍\n\nPython'da listeler köşeli parantez '[]' ile tanımlanır. İçine aynı anda hem string, hem integer, hem de boolean değerleri karıştırarak atabilirsiniz.\n\n⚡ İndeksleme ve Dilimleme (Slicing):\nListelerin ilk elemanı her zaman 0. indekstir. liste[-1] ifadesi listenin son elemanını getirir. liste[1:4] ifadesi ise 1, 2 ve 3. indekslerdeki elemanları koparıp yeni bir liste verir.\n\n🛠 En Çok Karşına Çıkacak Liste Metotları:\n• append(eleman): Listenin en sonuna yeni bir eleman ekler.\n• insert(indeks, eleman): Belirtilen indeks numarasına elemanı yerleştirir.\n• remove(değer): Liste içindeki belirtilen ilk eşleşen değeri siler.\n• pop(indeks): Belirtilen indeksteki elemanı listeden kopartır.`,
        code: "# Python Kodu\nsiber_liste = ['Matrix', 'C#', 'API']\nsiber_liste.append('Python')\n\n# Son elemanı ve ilk iki elemanı yazdıralım\nprint('Son Eleman:', siber_liste[-1])\nprint('Dilim:', siber_liste[0:2])",
        output: "Son Eleman: Python\nDilim: ['Matrix', 'C#']",
        questions: [
            { q: "Python'da listeler hangi parantez kullanılarak tanımlanır?", options: ["()", "{}", "[]", "<>"], answer: "[]" },
            { q: "Listenin en sonuna yeni bir eleman eklemek için hangi metot kullanılır?", options: ["add()", "append()", "insert()", "push()"], answer: "append()" },
            { q: "Listenin istenen belirli bir indeksine eleman eklemek için hangisi kullanılır?", options: ["insert()", "append()", "extend()", "add()"], answer: "insert()" },
            { q: "Listenin son elemanını silip sildiği elemanı döndüren metot hangisidir?", options: ["remove()", "delete()", "pop()", "clear()"], answer: "pop()" },
            { q: "Listenin toplam kaç elemandan oluştuğunu (uzunluğunu) hangi fonksiyon verir?", options: ["size()", "count()", "length()", "len()"], answer: "len()" },
            { q: "Listenin tüm elemanlarını tamamen temizlemek için hangisi kullanılır?", options: ["clear()", "reset()", "remove_all()", "pop()"], answer: "clear()" },
            { q: "liste = [10, 20, 30] ifadesinde liste[0] elemanı hangisidir?", options: ["10", "20", "30", "Hata verir"], answer: "10" },
            { q: "Listeyi alfabetik veya küçükten büyüğe sıralamak için hangi metot kullanılır?", options: ["reverse()", "sort()", "order()", "arrange()"], answer: "sort()" },
            { q: "Belirli bir elemanın listede kaç defa tekrar ettiğini bulan metot hangisidir?", options: ["sum()", "count()", "find()", "index()"], answer: "count()" },
            { q: "Python listeleri hakkında hangisi doğrudur?", options: ["Elemanları değiştirilemez", "Sadece sayı alabilir", "Değiştirilebilirdir ve farklı tipler alabilir", "Sırasızdır"], answer: "Değiştirilebilirdir ve farklı tipler alabilir" }
        ]
    },
    "JAVASCRIPT ASYNC": {
        title: "JavaScript Async / Await",
        desc: "JavaScript'te uzun süren asenkron işlemleri (API istekleri, veritabanı sorguları vb.) sanki senkronmuş gibi düz ve okunabilir bir yapıda yazmamızı sağlayan modern bir dil özelliğidir.",
        deep: `⏳ JAVASCRIPT ASENKRON MİMARİSİ VE ASYNC/AWAIT DÜNYASI ⏳\n\nJavaScript tek iş parçacıklı (single-threaded) çalışan bir dildir. İnternetten veri çekilirken sayfanın donmaması için asenkron mimari hayati önem taşır.\n\n🔑 Çalışma Kuralları:\n1️⃣ async Kelimesi: Bir fonksiyonun önüne konduğunda, o fonksiyon artık geriye otomatik olarak bir Promise döndürür.\n2️⃣ await Kelimesi: Sadece async fonksiyonlar içinde kullanılabilir. İşlem bitene kadar alt satıra geçilmesini bekletir ancak tarayıcıyı dondurmaz.\n\n🛡 Hata Yönetimi (Try-Catch):\ntry-catch blokları kullanılarak asenkron hatalar yakalanır.`,
        code: "// JavaScript Asenkron Fonksiyonu\nasync function siberVeriGetir() {\n    try {\n        let response = await fetch('https://api.codebuddy.com/data');\n        let data = await response.json();\n        console.log('Başarılı:', data);\n    } catch (error) {\n        console.error('Siber Hata Yakalandı:', error);\n    }\n}\nsiberVeriGetir();",
        output: "Başarılı: { id: 101, secure: true, name: 'Siber_Data' }",
        questions: [
            { q: "await anahtar kelimesi hangi fonksiyonların içinde kullanılabilir?", options: ["Sadece async fonksiyonlarda", "Tüm normal fonksiyonlarda", "Sadece constructor içinde", "Arrow fonksiyonlarda kullanılamaz"], answer: "Sadece async fonksiyonlarda" },
            { q: "async bir fonksiyon geriye her zaman ne döndürür?", options: ["String", "Number", "Promise", "Boolean"], answer: "Promise" },
            { q: "Asenkron işlemlerdeki hataları yakalamak için async/await ile hangi blok kullanılır?", options: ["if/else", "try/catch", "then/catch", "switch/case"], answer: "try/catch" },
            { q: "Bir API'den veri çekmek için kullanılan modern asenkron JS fonksiyonu hangisidir?", options: ["get()", "fetch()", "request()", "api()"], answer: "fetch()" },
            { q: "async/await yapısı arka planda aslında hangi JS mimarisini kullanır?", options: ["Callback", "Promise", "Generator", "Döngüler"], answer: "Promise" },
            { q: "await kelimesinin tam kelime anlamı ve işlevi nedir?", options: ["Hızlandırır", "İşlem bitene kadar kodun çalışmasını bekletir", "Durdurur", "Arka plana atar"], answer: "İşlem bitene kadar kodun çalışmasını bekletir" },
            { q: "Aşağıdakilerden hangisi bir asenkron işlem örneğidir?", options: ["Değişken tanımlama", "Veritabanından veri çekme", "Matematiksel toplama yapma", "Konsola yazı yazdırma"], answer: "Veritabanından veri çekme" },
            { q: "Eski tip iç içe geçen ve kod okunurluğunu bozan asenkron yapılara ne ad verilir?", options: ["Callback Hell", "Promise Chain", "Async Loop", "Shadowing"], answer: "Callback Hell" },
            { q: "Süslü parantezsiz async arrow fonksiyon yazımı hangisinde doğrudur?", options: ["async () => {}", "() => async", "const async = () =>", "function async()"], answer: "async () => {}" },
            { q: "Promise yapısındaki .then() ve .catch() kullanımını daha düz yazmak için ne geliştirilmiştir?", options: ["Var/Let", "For/In", "Async/Await", "Flexbox"], answer: "Async/Await" }
        ]
    },
    "SQL JOIN": {
        title: "SQL JOIN İşlemleri",
        desc: "İlişkisel veritabanlarında, aralarında mantıksal bir bağ (Foreign Key) bulunan iki veya daha fazla tabloyu birleştirerek tek bir sonuç kümesi elde etmeyi sağlayan SQL komutudur.",
        deep: `🗄 SQL JOIN TÜRLERİ VE MATEMATİKSEL KÜME MANTIKLARI 🗄\n\nVeritabanı normalleştirmesi gereği veriler farklı tablolarda tutulur. Bu tabloları birleştirmek için JOIN kullanırız.\n\n🌟 En Çok Kullanılan 4 JOIN Türü:\n1️⃣ INNER JOIN: Tabloların her ikisinde de ortak olan (eşleşen) kayıtları getirir. Kesişim kümesidir.\n2️⃣ LEFT JOIN: Soldaki tablonun tüm kayıtlarını, sağdaki tablonun ise sadece eşleşenlerini getirir. Eşleşmeyen alanlar 'NULL' olur.\n3️⃣ RIGHT JOIN: Sağdaki tablonun tüm kayıtlarını ve soldaki tablonun sadece eşleşen kayıtlarını getirir.\n4️⃣ FULL JOIN: Sol ve sağ tablolardaki tüm kayıtları birleştirir. Eşleşme olmayan tüm kolonları 'NULL' ile doldurur.`,
        code: "-- SQL Sorgu Örneği\nSELECT Kullanicilar.Ad, Siparisler.SiparisNo\nFROM Kullanicilar\nINNER JOIN Siparisler ON Kullanicilar.ID = Siparisler.KullaniciID;",
        output: "Ad          SiparisNo\n---------------------\nMatrix_Neo  #133755\nSiber_Buddy #998211",
        questions: [
            { q: "Sadece iki tablonun da eşleşen (kesişen) kayıtlarını getiren JOIN hangisidir?", options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL JOIN"], answer: "INNER JOIN" },
            { q: "Soldaki tablonun tamamını ve sağdaki tablonun sadece eşleşenlerini getiren hangisidir?", options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "CROSS JOIN"], answer: "LEFT JOIN" },
            { q: "JOIN işlemlerinde tabloların hangi sütunlar üzerinden bağlanacağı hangi kelimeyle belirtilir?", options: ["WHERE", "ON", "GROUP BY", "HAVING"], answer: "ON" },
            { q: "Eşleşme olmasa bile iki tablodaki tüm kayıtları birleştiren JOIN türü hangisidir?", options: ["INNER JOIN", "FULL JOIN (OUTER)", "LEFT JOIN", "SELF JOIN"], answer: "FULL JOIN (OUTER)" },
            { q: "İki tablonun kartezyen çarpımını (tüm olasılıklerin eşleşmesini) hangi JOIN yapar?", options: ["CROSS JOIN", "INNER JOIN", "LEFT JOIN", "NATURAL JOIN"], answer: "CROSS JOIN" },
            { q: "Bir tablonun kendisiyle birleştirilmesi işlemine ne ad verilir?", options: ["Double JOIN", "Self JOIN", "Auto JOIN", "Inner JOIN"], answer: "Self JOIN" },
            { q: "LEFT JOIN yapıldığında sağ tablodan eşleşmeyen satırlar hangi değerle doldurulur?", options: ["0", "Boşluk (' ')", "NULL", "Hata kodu"], answer: "NULL" },
            { q: "SQL'de JOIN yazmak zorunlu mudur yoksa alternatif var mıdır?", options: ["Zorunludur", "WHERE ifadesi ile de tablolar bağlanabilir", "Sadece tek tablo sorgulanabilir", "Hiçbiri"], answer: "WHERE ifadesi ile de tablolar bağlanabilir" },
            { q: "Tablo isimlerini uzun uzun yazmamak için atanan kısaltmalara (örn: Kullanicilar k) ne denir?", options: ["Alias (Takma Ad)", "Index", "Key", "Trigger"], answer: "Alias (Takma Ad)" },
            { q: "İlişkisel veritabanlarında tablolar arası bağı kuran anahtar sütun çifti nedir?", options: ["Primary Key - Foreign Key", "Local Key - Global Key", "Unique Key - Static Key", "ID - Name"], answer: "Primary Key - Foreign Key" }
        ]
    },
    "REACT HOOKS": {
        title: "React Hooks",
        desc: "React 16.8 sürümüyle gelen, Class (Sınıf) yazmaya gerek kalmadan, Functional (Fonksiyonel) bileşenlerde state (durum) ve diğer React özelliklerini kullanmamızı sağlayan özel fonksiyonlardır.",
        deep: `⚛️ REACT HOOKS DEVRİMİ VE YAŞAM DÖNGÜSÜ YÖNETİMİ ⚛️\n\nHooks mimarisi kod tabanını küçülttü ve sadeleştirdi.\n\n⚡ En Popüler İki Hook:\n1️⃣ useState Hook'u: Fonksiyonel bileşene lokal bir 'state' (durum hafızası) ekler. Değer güncellendiğinde arayüzü otomatik olarak yeniden tetikler (re-render).\n2️⃣ useEffect Hook'u: Yaşam döngüsündeki (Bileşen doğdu, güncellendi veya öldü) anları yakalar. Bağımlılık dizisi boş bırakılırsa '[]' sadece sayfa ilk yüklendiğinde 1 kez çalışır.\n\n🚨 Hooks Kuralları:\n• Sadece en üst seviyede (top-level) çağrılmalıdırlar. Döngülerin veya if koşullarının içinde çağrılmazlar.`,
        code: "// React Kodu\nimport React, { useState, useEffect } from 'react';\n\nfunction SiberSayac() {\n    const [sayac, setSayac] = useState(0);\n    \n    useEffect(() => {\n        console.log(`Sayaç güncellendi: ${sayac}`);\n    }, [sayac]);\n    \n    return <button onClick={() => setSayac(sayac + 1)}>Güç Arttır: {sayac}</button>;\n}",
        output: "[Arayüz Çıktısı: Ekranda bir buton belirir. Tıkladıkça üzerindeki sayı artar ve konsola anlık yeni değer yazılır.]",
        questions: [
            { q: "React'te durum (state) yönetimi sağlamak için hangi temel hook kullanılır?", options: ["useEffect", "useState", "useContext", "useRef"], answer: "useState" },
            { q: "Bileşenin yüklenmesi, güncellenmesi veya silinmesi anlarını yaklayan hook hangisidir?", options: ["useState", "useMemo", "useEffect", "useReducer"], answer: "useEffect" },
            { q: "Gereksiz render işlemlerini önlemek ve fonksiyonları hafızada tutmak için hangisi kullanılır?", options: ["useCallback", "useState", "useRef", "useImperativeHandle"], answer: "useCallback" },
            { q: "DOM elementlerine doğrudan erişmek veya render tetiklemeden veri saklamak için hangi hook seçilir?", options: ["useState", "useRef", "useContext", "useLayoutEffect"], answer: "useRef" },
            { q: "Global durumu (Context API) bileşen içinde tüketmek için hangi hook kullanılır?", options: ["useReducer", "useContext", "useState", "useGlobal"], answer: "useContext" },
            { q: "useState bize geriye ne döndürür?", options: ["Sadece bir değer", "Bir değer ve o değeri güncelleyecek bir fonksiyon içeren dizi", "Bir obje", "Bir fonksiyon"], answer: "Bir değer ve o değeri güncelleyecek bir fonksiyon içeren dizi" },
            { q: "useEffect'in sonundaki bağımlılık dizisi boş bırakılırsa [] ne olur?", options: ["Her renderda çalışır", "Sadece bileşen ilk yüklendiğinde (mount) 1 kez çalışır", "Hiç çalışmaz", "Hata verir"], answer: "Sadece bileşen ilk yüklendiğinde (mount) 1 kez çalışır" },
            { q: "Büyük ve karmaşık state yapılarını yönetmek için useState yerine hangi gelişmiş hook önerilir?", options: ["useMemo", "useReducer", "useEffect", "useCallback"], answer: "useReducer" },
            { q: "React Hook fonksiyonları isimlendirilirken hangi kelimeyle başlamak zorundadır?", options: ["react", "get", "use", "hook"], answer: "use" }
        ]
    },
    "GIT COMMIT": {
        title: "Git Commit Komutu",
        desc: "Projenizde yaptığınız değişiklikleri, yerel veritabanınıza (local repository) açıklayıcı bir mesajla birlikte kalıcı bir zaman damgası (versiyon) olarak kaydetme işlemidir.",
        deep: `🐙 GIT VERSİYON KONTROL SİSTEMİ VE COMMIT ANATOMİSİ 🐙\n\ngit commit komutu zaman makinesinde bir geri dönüş nokt Gradyan (Save Point) oluşturmaktır.\n\n🛠 Bir Değişikliğin Commit Olma Yolculuğu (3 Alan):\n1️⃣ Working Directory: Kod üzerinde değişiklik yapılan kırmızı renkli alan.\n2️⃣ Staging Area: 'git add .' komutuyla kodların hazırlandığı yeşil renkli bekleme salonu.\n3️⃣ Local Repository: 'git commit -m \"mesaj\"' komutuyla kodların yerelde mühürlendiği son aşama.\n\n🌟 Mesaj Standartları (Conventional Commits):\n• feat: yeni arama butonu eklendi (Yeni bir özellik)\n• fix: giris ekranindaki çökme sorunu çözüldü (Hata düzeltme)`,
        code: "# Terminal Komut Sıralaması\ngit status\ngit add .\ngit commit -m \"feat: siber arama motoru ve 8 adet yeni terim sisteme entegre edildi\"",
        output: "[Master root-commit b12c34a] feat: siber arama motoru...\n 3 files changed, 250 insertions(+)\n create mode 100644 script.js",
        questions: [
            { q: "Yaptığımız değişiklikleri yerel depoya mesajla birlikte mühürleyen komut hangisidir?", options: ["git push", "git commit", "git add", "git log"], answer: "git commit" },
            { q: "git commit komutuna mesaj eklemek için kullanılan parametre hangisidir?", options: ["-v", "-m", "-a", "-message"], answer: "-m" },
            { q: "Değişiklikleri commit etmeden ÖNCE hazırlık alanına (Staging Area) alan komut hangisidir?", options: ["git init", "git status", "git add", "git push"], answer: "git add" },
            { q: "Yereldeki commit'leri uzak sunucuya (GitHub vb.) gönderen komut hangisidir?", options: ["git pull", "git push", "git clone", "git fetch"], answer: "git push" },
            { q: "Şu ana kadar atılmış olan tüm commit geçmişini listelemek için hangisi yazılır?", options: ["git status", "git log", "git history", "git show"], answer: "git log" },
            { q: "Hangi dosyaların değiştiğini ve hazırlık alanında ne olduğunu görmek için hangisi kullanılır?", options: ["git status", "git check", "git diff", "git add"], answer: "git status" },
            { q: "Yeni ve boş bir Git deposu (repository) oluşturmak için ilk hangi komut yazılır?", options: ["git add", "git commit", "git init", "git clone"], answer: "git init" },
            { q: "Uzak sunucudaki bir projeyi bilgisayarımıza ilk defa indirmek için ne yaparız?", options: ["git push", "git commit", "git clone", "git init"], answer: "git clone" },
            { q: "Son atılan commit mesajını değiştirmek veya düzeltmek için hangi parametre eklenir?", options: ["--amend", "--fix", "--change", "--reset"], answer: "--amend" },
            { q: "Git sisteminde commit'ler tam olarak nereye kaydedilir?", options: ["Buluta (GitHub'a doğrudan)", "Bilgisayarımızdaki yerel Git veritabanına", "RAM belleğe", "Sunucuya"], answer: "Bilgisayarımızdaki yerel Git veritabanına" }
        ]
    }
};

let currentActiveTerm = null;
const favorites = new Set();
let currentQuestionIndex = 0;
let correctAnswersCount = 0;

const loginForm = document.getElementById('loginForm');
const authScreen = document.getElementById('authScreen');
const dashboardScreen = document.getElementById('dashboardScreen');
const termsGrid = document.getElementById('termsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const termDetailCard = document.getElementById('termDetailCard');
const introSection = document.getElementById('introSection');

const termTitle = document.getElementById('termTitle');
const termDesc = document.getElementById('termDesc');
const termDeepDesc = document.getElementById('termDeepDesc');
const codeBlock = document.getElementById('codeBlock');
const outputBlock = document.getElementById('outputBlock');

const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');

// GİRİŞ FORMU TETİKLEME (GERÇEKÇİ KORUMA ENTEGRASYONU)
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Gerçekçi Siber Giriş Kuralları
        if (username === "admin" && password === "matrix2026") {
            authScreen.classList.add('hidden');
            dashboardScreen.classList.remove('hidden');
            initDashboard();
        } else {
            alert("🚨 ERİŞİM REDDEDİLDİ: Geçersiz Siber Kimlik Bilgileri!");
        }
    });
}

// Terim Butonlarını Grid Düzeninde Başlatma
function initDashboard() {
    if (!termsGrid) return;
    termsGrid.innerHTML = '';
    Object.keys(codeBuddyData).forEach(key => {
        const chip = document.createElement('div');
        chip.className = 'term-chip';
        
        if(key === "C# DÖNGÜLER") chip.innerText = "C# döngüler";
        else if(key === "HTML DIV") chip.innerText = "HTML div";
        else if(key === "CSS FLEXBOX") chip.innerText = "CSS flexbox";
        else if(key === "PYTHON LİSTE") chip.innerText = "Python liste";
        else if(key === "JAVASCRIPT ASYNC") chip.innerText = "JavaScript async";
        else if(key === "SQL JOIN") chip.innerText = "SQL JOIN";
        else if(key === "REACT HOOKS") chip.innerText = "React hooks";
        else if(key === "GIT COMMIT") chip.innerText = "Git commit";
        else chip.innerText = key.toLowerCase();

        chip.addEventListener('click', () => loadTermDetails(key));
        termsGrid.appendChild(chip);
    });
}

// Terim Detaylarını Yükleme
function loadTermDetails(key) {
    const term = codeBuddyData[key];
    if(!term) return;

    currentActiveTerm = key;
    if(introSection) introSection.classList.add('hidden'); 
    if(termDetailCard) termDetailCard.classList.remove('hidden'); 
    if(termDeepDesc) termDeepDesc.classList.add('hidden');
    if(document.getElementById('quizWindow')) document.getElementById('quizWindow').classList.add('hidden');
    if(document.getElementById('quizResult')) document.getElementById('quizResult').classList.add('hidden');

    termTitle.innerText = term.title;
    termDesc.innerText = term.desc;
    codeBlock.innerText = term.code;
    outputBlock.innerText = term.output;
    if(document.getElementById('addFavBtn')) {
        document.getElementById('addFavBtn').innerText = favorites.has(key) ? "⭐ Favoride" : "⭐ Favoriye Ekle";
    }
}

// Sonsuz Dinamik Arama Motoru ve Firebase Bulut Bağlantısı
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query.length < 2) {
            alert("Lütfen geçerli bir yazılım terimi girin.");
            return;
        }

        const upperQuery = query.toUpperCase();

        // Eğer aranan kelime veri motorunda yoksa anlık olarak oluşturulup Firebase'e fırlatılıyor
        if (!codeBuddyData[upperQuery]) {
            codeBuddyData[upperQuery] = {
                title: `${query} Nedir?`,
                desc: `Yazılım ekosisteminde '${query}' kavramı, geliştirme süreçlerinde ve modern mimari yapılarda rol oynayan bir bileşendir.`,
                deep: `🚀 ${upperQuery} DETAYLI TEKNİK ANALİZ REHBERİ 🚀\n\nMimarisi kod kalitesini, sürdürülebilirliği ve çalışma zamanı performansını optimize etmeye yardımcı olur.`,
                code: `// ${query} yapısı için temel simülasyon kodu\nfunction execute${upperQuery.replace(/[^A-Z0-9]/gi, '')}() {\n    console.log("${query} başarıyla entegre edildi.");\n}`,
                output: `[Siber Çıktı: ${query} entegrasyonu stabil.]`,
                questions: [
                    { q: `${query} hangi amaçla kullanılır?`, options: ["Performans", "Düzenleme", "Güvenlik", "Hepsi"], answer: "Hepsi" }
                ]
            };

            // Canlı Firebase Veri Gönderimi (Hocanın İstediği Alan)
            db.collection("terms").add({
                name: query,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                console.log("Veri başarıyla buluta mühürlendi!");
            })
            .catch((error) => {
                console.error("Firebase Hatası: ", error);
            });
        }

        loadTermDetails(upperQuery);
    });
}
