// Anılar dizisi
const memories = [
    {
        image: "images/image-1.jpg",
        message: "Sütaş plaza'da güzel bi gün",
        date: "tarihini bulamadim ama az çok belli asklşdjasd"
    },

    {
        image: "images/image-2.jpg",
        message: "Uzun süreler benim bile profil resmi yaptığım o güzel resim. Keşke o kardan adamı alabilsem geçmişe gidip.",
        date: "24.01.2020"
    },

    {
        image: "images/image-3.jpg",
        message: "İlk yıldönümüz. Pizzadan kıl çıkmıştı. Ama sanırım bu fotoğraf öncesine ait. ps: seni böyle yemek istiyorm",
        date: "16.02.2020"
    },

    {
        image: "images/image-4.jpg",
        message: "Bu fotoğrafı buldum ama nerdeyiz ne yapıyoruz hatırlayamadım. Tombul yanaklarını öpmek istiyorum sadece yüzlerce güzel anımızdan sadece biri. ",
        date: "23.05.2023"
    },

    {
        image: "images/image-5.jpg",
        message: "Fenasal şekilde baddieye dönüşmeye başladığın zamanlar. Ben hala çocuk kalmışım, o zamanlar çok gurur duyuyordum senin gibi bi manitaylayım diye. Hala duyuyorum orası ayrı 😎",
        date: "22.07.2021"
    },

    {
        image: "images/image-6.jpg",
        message: "Birlikte 2. sevgililer günümüz. Senin tarzına her zaman özeniyorum ben aşkım, o zamanlar nude renkler ve kahverengi tonlarını kullanıyodun, ben de senden çaldım heheh. Şimdi ikimiz de tarzları değiştiridk ama hala birbirimize aitiz o değişmedi :)",
        date: "23.05.2023"
    },

    {
        image: "images/image-7.jpg",
        message: "Bizi ayıracak olan sınava çalışıyoruz. Yeteri kadar çalıştık mı, elimizden gelen bu muydu yoksa? Soru işaretleri bu konuda hep olacak ama sana olan sevgim konusunda asla bebisim.",
        date: "27.03.2024"
    },

    {
        image: "images/image-8.jpg",
        message: "Sınav çalışmaları bittikten sonra gezmelere çıkmışız. Farklı şehirlere gideceğimizi biliyoruz ama yine de ask keyfs yapıyoruz. Ben meth bağımlısına benziyorum sen ise hala baddiesin. Damn sana sahip olduğum için çok şanslıyım. ",
        date: "23.08.2024"
    },

    {
        image: "images/image-9.jpg",
        message: "Birlikte ilk tatilimizden bi kare. İlk başlarda hiç memnun değildin ve ben de çok sorumlu hissediyodum seni mutlu edemediğim için. Ama bence ikimiz de tatilin tadını çıkardık sonunda. Hem çoğu çift böyle bi şeyi hayal bile edemez yani dimi + buz pateni sevdalısı karım var FYI",
        date: "ORJINAL RESİM YOK, BANA ATTIĞIN KLON VAR TARİHİ YANLIŞ."
    },

    {
        image: "images/image-10.jpg",
        message: "İlk tatilimizin deniz-kum-güneş faslından bi kare. Şemsiyeyi soğukkanlılıkla aldığım için hala gurur duyuyorum. Seni en pahalı beach'e götüremedim belki ama migros mezeleri yemiştik, bence gayet okeydi. Çok romantik foto btw. ",
        date: "03.09.2024"
    },

    {
        image: "images/image-11.jpg",
        message: "IKEA date'i. Valla sonradan benim aklıma gelmişti falan diyip üstüne yatmaya çalıştın, mesajlardan bulduk sonra da ben sana diyodum ordan aklına geldi falan dedin ama ben yaptım. Sen mi yapacaksın dediler valla ben yaptım asdlkşaskld. Bu gün çok ateşliydin aşkım ya aklım gizliden gizliye hep insanlar sana bakıyo mu bakmasınlar diye düşünerek geçti lütfen bu kadar ateşli olma. Olucaksan evde ol yani yerm ",
        date: "28.01.2025"
    },

    {
        image: "images/image-12.jpg",
        message: "Bu ağız açma olayı sende bu kadar hoş ve çekici dururken ben niye andavala benziyom amk ya. Sonuç olarak güzelliğine hayran kalmalık başka bi foto. ",
        date: "ORJINAL RESİM YOK, BANA ATTIĞIN KLON VAR TARİHİ YANLIŞ."
    },

    {
        image: "images/image-13.jpg",
        message: "Emrah Sefa Gürkan'dan sigara istediğim andan bi kaç dakika sonrası. Valla ne yalan söyleyeyim ikonik bi haraket yaptım orda hala havalı hissediyorum. Yeni kavramının tarihini anlatıyodu hoca konferansta, seni biraz sıkılmış hatırlıyorum ama hiç lafını yapmadın ve dinledin teşekkür ederim bana saygı duyduğun için. (Aslında sıkılmadıysan ve 'beni niye böyle kalıplara koyuyosun ya' diyorsan burnumu ısırma izni pass'i veriyorum sana ",
        date: "07.09.2024"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.getElementById('giftBox');
    const messageCard = document.getElementById('messageCard');
    const memoryImage = document.getElementById('memoryImage');
    const memoryMessage = document.getElementById('memoryMessage');
    const memoryDate = document.getElementById('memoryDate');
    const shuffleButton = document.getElementById('shuffleButton');
    const stars = document.querySelector('.stars');
    const startOverlay = document.getElementById('startOverlay');
    const startHeart = document.getElementById('startHeart');
    const memoryLayout = document.querySelector('.memory-layout');
    const bgMusic = document.getElementById('bgMusic');

    // Başlangıçta memory-layout gizli
    memoryLayout.style.display = 'none';

    // Fisher-Yates ile karıştırma fonksiyonu
    function shuffleArray(array) {
        let arr = array.slice();
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    let shuffledMemories = shuffleArray(memories);
    let currentIndex = 0;

    function showNextMemory() {
        currentMemory = shuffledMemories[currentIndex];
        showMemory(currentMemory);
        currentIndex++;
        if (currentIndex >= shuffledMemories.length) {
            shuffledMemories = shuffleArray(memories);
            currentIndex = 0;
        }
    }

    // Anıyı gösterme fonksiyonu
    function showMemory(memory) {
        memoryImage.style.opacity = '0';
        memoryImage.style.transform = 'scale(0.95)';
        setTimeout(() => {
            memoryImage.src = memory.image;
            memoryMessage.textContent = memory.message;
            memoryDate.textContent = memory.date;
            memoryImage.style.opacity = '1';
            memoryImage.style.transform = 'scale(1)';
        }, 300);
    }

    // Sürekli arka plan renk geçişi (HSL ile yumuşak geçiş)
    let hue = 340; // Pembe tonuna yakın başlat
    function cycleBackgroundSmooth() {
        const color1 = `hsl(${hue}, 80%, 90%)`;
        const color2 = `hsl(${(hue + 30) % 360}, 80%, 85%)`;
        document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
        hue = (hue + 0.12) % 360; // Daha yavaş geçiş için küçük artır
        requestAnimationFrame(cycleBackgroundSmooth);
    }
    cycleBackgroundSmooth();

    // Arka plan ve kalp animasyonu fonksiyonu
    function animateBackgroundAndHeartsWithPop(popTargets = []) {
        // Renk geçiş adımları
        const steps = [
            '#FFE4E1', // Başlangıç
            '#FFD1DC',
            '#FFB6C1',
            '#FF8DA1', // En pembe
        ];
        const original = document.body.style.background;
        let i = 0;
        function stepForward() {
            if (i < steps.length) {
                document.body.style.background = steps[i];
                i++;
                setTimeout(stepForward, 80);
            } else {
                // Pop efekti
                popTargets.forEach(el => {
                    el.classList.add('pop-effect');
                    setTimeout(() => el.classList.remove('pop-effect'), 350);
                });
                setTimeout(stepBackward, 350);
            }
        }
        function stepBackward() {
            if (i > 0) {
                i--;
                document.body.style.background = steps[i];
                setTimeout(stepBackward, 80);
            } else {
                document.body.style.background = '';
            }
        }
        stepForward();
        // Sağ ve sol kalp
        for (let side of ['left', 'right']) {
            const heart = document.createElement('div');
            heart.className = 'rising-heart';
            heart.textContent = '❤️';
            heart.style[side] = '10vw';
            heart.style.bottom = '40px';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1200);
        }
    }

    // İlk tıklama
    startHeart.addEventListener('click', () => {
        startOverlay.classList.add('hide');
        memoryLayout.style.display = 'flex';
        animateBackgroundAndHeartsWithPop([
            document.querySelector('.memory-image-box'),
            document.querySelector('.memory-message-box')
        ]);
        showNextMemory();
        if (bgMusic) {
            bgMusic.volume = 0.5;
            bgMusic.play();
        }
    });

    // Yeni Anı butonuna basılma sayacı ve easter egg
    let shuffleCount = 0;
    const shuffleMessages = {
        3: "Lütfen bana daha fazla tıklama, elimdeki resimler biticek",
        4: "Şşhh tıklama diyorum aloo",
        5: "OLM KİME DİYOM LA NOLUR TIKLAMAYIN",
        6: "Şakaydıııı, Fisher-Yates algoirtması ile karıştılırmış resimler içeriyorum. Elimde şuana kadar gördüğünden bi fazla resim var. Yani %50'ye geldin, iyi değerlendir"
    };
    let shuffleMsgTimeout = null;

    shuffleButton.addEventListener('click', () => {
        shuffleCount++;
        // Daha fazla ve uzun süreli kalp animasyonu
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                for (let side of ['left', 'right']) {
                    const heart = document.createElement('div');
                    heart.className = 'rising-heart';
                    heart.textContent = '❤️';
                    heart.style[side] = (10 + Math.random()*10) + 'vw';
                    heart.style.bottom = (40 + Math.random()*40) + 'px';
                    heart.style.fontSize = (2 + Math.random()*1.5) + 'rem';
                    heart.style.animationDuration = '2.5s';
                    document.body.appendChild(heart);
                    setTimeout(() => heart.remove(), 2500);
                }
            }, i*120);
        }
        // Easter egg: buton konuşuyor (bubble olarak)
        const prevBubble = document.querySelector('.shuffle-bubble');
        if (prevBubble) prevBubble.remove();
        if (shuffleMessages[shuffleCount]) {
            const bubble = document.createElement('div');
            bubble.className = 'shuffle-bubble';
            bubble.textContent = shuffleMessages[shuffleCount];
            document.body.appendChild(bubble);
        }
        showNextMemory();
    });

    // Yıldızları oluştur
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = '#fff';
        star.style.borderRadius = '50%';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        stars.appendChild(star);
    }

    // Yıldız parıltı animasyonu
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Chat popup açma/kapama
    const chatBtn = document.getElementById('chatBtn');
    const chatPopup = document.getElementById('chatPopup');
    const closeChat = document.getElementById('closeChat');
    const popupContent = chatPopup.querySelector('.popup-content');
    chatBtn.addEventListener('click', () => {
        chatPopup.classList.add('active');
        // Metin fade-in için önce sıfırla sonra tetikle
        popupContent.style.opacity = '0';
        setTimeout(() => {
            popupContent.style.opacity = '1';
        }, 100);
    });
    closeChat.addEventListener('click', () => {
        chatPopup.classList.remove('active');
        popupContent.style.opacity = '0';
    });
}); 