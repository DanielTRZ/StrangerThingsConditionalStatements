// Efekt spadających cząsteczek
const container = document.getElementById('particles-container');
const liczbaCzastek = 50;

for (let i = 0; i < liczbaCzastek; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.animationDuration = (3 + Math.random() * 3) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(particle);
}

// --- Twoje funkcje ---
function sprawdzLiczbe() {
    const liczba = Number(document.getElementById("liczbaInput").value);
    const wynikEl = document.getElementById("wynik");
    if (liczba > 0) { wynikEl.textContent = "Liczba jest dodatnia"; wynikEl.style.color = "#00ff6a"; }
    else if (liczba < 0) { wynikEl.textContent = "Liczba jest ujemna"; wynikEl.style.color = "#ff003c"; }
    else { wynikEl.textContent = "Liczba to zero"; wynikEl.style.color = "#ffae00"; }
}

function sprawdzDostep() {
    const wiek = Number(document.getElementById("wiek").value);
    const dokument = document.getElementById("dokument").checked;
    const el = document.getElementById("wynik2");
    if (wiek >= 18 && dokument) { el.textContent = "Wejście dozwolone"; el.style.color = "#00ff6a"; }
    else { el.textContent = "Brak dostępu"; el.style.color = "#ff003c"; }
}

function sprawdzImie() {
    const imie = document.getElementById("imieInput").value.trim().toLowerCase();
    const el = document.getElementById("wynik3");
    if (imie === "daniel") { el.textContent = "Witaj Danielu!"; el.style.color = "#ff63ff"; }
    else { el.textContent = "To nie Daniel."; el.style.color = "#cccccc"; }
}

function losowyWarunek() {
    const warunki = [
        "Jeżeli x większe od 10 wypisz duża liczba",
        "Jeżeli temperatura mniejsza od 0 wypisz mróz",
        "Jeżeli wiek większy lub równy 18 wypisz pełnoletni",
        "Jeżeli imię to Adam wypisz siema Adam"
    ];
    document.getElementById("losowy").textContent = warunki[Math.floor(Math.random() * warunki.length)];
}

let aktualnePytanie = null;
function nowePytanie() {
    const pytania = [
        { p: "x = 5. Czy x większe od 3?", o: "tak" },
        { p: "x = -2. Czy x dodatni?", o: "nie" },
        { p: "wiek = 20. Czy pełnoletni?", o: "tak" },
        { p: "x = 0. Czy x jest większe od 0?", o: "nie" }
    ];
    aktualnePytanie = pytania[Math.floor(Math.random() * pytania.length)];
    document.getElementById("pytanie").textContent = aktualnePytanie.p;
}

function sprawdzGreButton(wartosc) {
    const komunikat = document.getElementById("wynikGra");
    if (!aktualnePytanie) nowePytanie();
    const odpowiedz = aktualnePytanie.o === "tak" ? true : false;
    if (wartosc === odpowiedz) { komunikat.textContent = "Dobrze!"; komunikat.style.color = "#00ff6a"; }
    else { komunikat.textContent = "Źle!"; komunikat.style.color = "#ff003c"; }
    nowePytanie();
}

nowePytanie();
