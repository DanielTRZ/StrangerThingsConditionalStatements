// Efekt spadających cząsteczek
const container = document.getElementById('particles-container');
const liczbaCzastek = 50;
let currentLanguage = 'pl';

for (let i = 0; i < liczbaCzastek; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.animationDuration = (3 + Math.random() * 3) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(particle);
}

// Language switcher logic
document.getElementById('lang-pl').addEventListener('click', () => {
    currentLanguage = 'pl';
    setLanguage(currentLanguage);
    document.getElementById('lang-pl').classList.add('active');
    document.getElementById('lang-en').classList.remove('active');
    clearDynamicContent();
});

document.getElementById('lang-en').addEventListener('click', () => {
    currentLanguage = 'en';
    setLanguage(currentLanguage);
    document.getElementById('lang-en').classList.add('active');
    document.getElementById('lang-pl').classList.remove('active');
    clearDynamicContent();
});

function clearDynamicContent() {
    document.getElementById('wynik').textContent = '';
    document.getElementById('wynik2').textContent = '';
    document.getElementById('wynik3').textContent = '';
    document.getElementById('losowy').textContent = '';
    document.getElementById('wynikGra').textContent = '';
    nowePytanie();
}

// --- Twoje funkcje ---
function sprawdzLiczbe() {
    const liczba = Number(document.getElementById("liczbaInput").value);
    const wynikEl = document.getElementById("wynik");
    if (liczba > 0) {
        wynikEl.textContent = translations[currentLanguage]['number-positive'];
        wynikEl.style.color = "#00ff6a";
    } else if (liczba < 0) {
        wynikEl.textContent = translations[currentLanguage]['number-negative'];
        wynikEl.style.color = "#ff003c";
    } else {
        wynikEl.textContent = translations[currentLanguage]['number-zero'];
        wynikEl.style.color = "#ffae00";
    }
}

function sprawdzDostep() {
    const wiek = Number(document.getElementById("wiek").value);
    const dokument = document.getElementById("dokument").checked;
    const el = document.getElementById("wynik2");
    if (wiek >= 18 && dokument) {
        el.textContent = translations[currentLanguage]['access-granted'];
        el.style.color = "#00ff6a";
    } else {
        el.textContent = translations[currentLanguage]['access-denied'];
        el.style.color = "#ff003c";
    }
}

function sprawdzImie() {
    const imie = document.getElementById("imieInput").value.trim().toLowerCase();
    const el = document.getElementById("wynik3");
    if (imie === "daniel") {
        el.textContent = translations[currentLanguage]['welcome-daniel'];
        el.style.color = "#ff63ff";
    } else {
        el.textContent = translations[currentLanguage]['not-daniel'];
        el.style.color = "#cccccc";
    }
}

function losowyWarunek() {
    const warunki = [
        translations[currentLanguage]['random-condition-1'],
        translations[currentLanguage]['random-condition-2'],
        translations[currentLanguage]['random-condition-3'],
        translations[currentLanguage]['random-condition-4']
    ];
    document.getElementById("losowy").textContent = warunki[Math.floor(Math.random() * warunki.length)];
}

let aktualnePytanie = null;
function nowePytanie() {
    const pytania = [
        { p: translations[currentLanguage]['game-question-1'], o: "tak" },
        { p: translations[currentLanguage]['game-question-2'], o: "nie" },
        { p: translations[currentLanguage]['game-question-3'], o: "tak" },
        { p: translations[currentLanguage]['game-question-4'], o: "nie" }
    ];
    aktualnePytanie = pytania[Math.floor(Math.random() * pytania.length)];
    document.getElementById("pytanie").textContent = aktualnePytanie.p;
}

function sprawdzGreButton(wartosc) {
    const komunikat = document.getElementById("wynikGra");
    if (!aktualnePytanie) nowePytanie();
    const odpowiedz = aktualnePytanie.o === "tak" ? true : false;
    if (wartosc === odpowiedz) {
        komunikat.textContent = translations[currentLanguage]['game-correct'];
        komunikat.style.color = "#00ff6a";
    } else {
        komunikat.textContent = translations[currentLanguage]['game-incorrect'];
        komunikat.style.color = "#ff003c";
    }
    nowePytanie();
}

nowePytanie();
