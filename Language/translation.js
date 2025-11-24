const translations = {
    'pl': {
        'title': 'Instrukcje Warunkowe – Stranger Things Edition',
        'main-title': 'Instrukcje Warunkowe',
        'subtitle': 'Stranger Things Edition',
        'basic-instructions': 'Podstawowe Instrukcje',
        'if-title': 'Jeżeli (IF)',
        'if-example': `==========================================
  TERMINAL HAWKINS – UPSIDE DOWN
 ==========================================

# Sprawdzenie temperatury

JEŻELI temperatura jest większa niż 30
    WYŚWIETL: "
        🔥 UWAGA! 🔥
        Gorąco jak w Upside Down...
        Czerwone cienie tańczą wokół Ciebie!
    "

JEŻELI temperatura jest większa lub równa 20 i temperatura jest mniejsza lub równa 30
    WYŚWIETL: "
        🌫️ Normalny świat...
        Ciepło, ale Hawkins jeszcze spokojne.
    "
JEŻELI temperatura jest mniejsza niż 20
    WYŚWIETL: "
        ❄️ Mróz nadchodzi!
        Cienie w Upside Down robią się większe...`,
        'if-else-title': 'Jeżeli – inaczej (IF – ELSE)',
        'if-else-example': `===========================================
  TERMINAL HAWKINS – UPSIDE DOWN
===========================================

# Sprawdzenie logowania użytkownika

JEŻELI użytkownik jest zalogowany
    WYŚWIETL: "
        👋 Witaj w Hawkins!
        Cienie są dziś łagodne...
    "
W PRZECIWNYM RAZIE
    WYŚWIETL: "
        ⛔ Dostęp zabroniony!
        Upside Down zaczyna wkraczać do świata realnego...`,
        'if-else-if-else-title': 'Jeżeli – inaczej jeśli – inaczej (IF – ELSE IF – ELSE)',
        'if-else-if-else-example': `===========================================
  TERMINAL HAWKINS – UPSIDE DOWN
===========================================

# Sprawdzenie znaku liczby

JEŻELI liczba jest mniejsza niż 0
    WYŚWIETL: "
        ❌ Liczba ujemna...
        Cienie w Upside Down stają się gęstsze!
    "
W PRZECIWNYM RAZIE JEŻELI liczba jest większa niż 0
    WYŚWIETL: "
        ✅ Liczba dodatnia!
        Światło Hawkins przebija mrok...
    "
W PRZECIWNYM RAZIE
    WYŚWIETL: "
        0 — Zero...
        Cienie wstrzymują oddech, nic się nie dzieje...
    "`,
        'interactive-exercises': 'Ćwiczenia Interaktywne',
        'check-number': 'Sprawdź liczbę',
        'enter-number': 'Wpisz liczbę',
        'check-button': 'Sprawdź',
        'check-access': 'Sprawdź dostęp',
        'age': 'Wiek',
        'have-document': 'Mam dokument',
        'name': 'Imię',
        'enter-name': 'Podaj imię',
        'random-mode-minigame': 'Tryb Losowy & Mini-gra',
        'random-condition-generator': 'Generator losowego warunku',
        'generate-button': 'Wygeneruj',
        'minigame-guess-if': 'Mini gra: Odgadnij wynik IF',
        'true-button': 'Prawda',
        'false-button': 'Fałsz',
        'randomize-button': 'Losuj',
        'number-positive': 'Liczba jest dodatnia',
        'number-negative': 'Liczba jest ujemna',
        'number-zero': 'Liczba to zero',
        'access-granted': 'Wejście dozwolone',
        'access-denied': 'Brak dostępu',
        'welcome-daniel': 'Witaj Danielu!',
        'not-daniel': 'To nie Daniel.',
        'random-condition-1': 'Jeżeli x większe od 10 wypisz duża liczba',
        'random-condition-2': 'Jeżeli temperatura mniejsza od 0 wypisz mróz',
        'random-condition-3': 'Jeżeli wiek większy lub równy 18 wypisz pełnoletni',
        'random-condition-4': 'Jeżeli imię to Adam wypisz siema Adam',
        'game-question-1': 'x = 5. Czy x większe od 3?',
        'game-question-2': 'x = -2. Czy x dodatni?',
        'game-question-3': 'wiek = 20. Czy pełnoletni?',
        'game-question-4': 'x = 0. Czy x jest większe od 0?',
        'game-correct': 'Dobrze!',
        'game-incorrect': 'Źle!'
    },
    'en': {
        'title': 'Conditional Statements – Stranger Things Edition',
        'main-title': 'Conditional Statements',
        'subtitle': 'Stranger Things Edition',
        'basic-instructions': 'Basic Instructions',
        'if-title': 'If',
        'if-example': `==========================================
  TERMINAL HAWKINS – UPSIDE DOWN
 ==========================================

# Checking the temperature

IF the temperature is greater than 30
    DISPLAY: "
        🔥 WARNING! 🔥
        Hot as in the Upside Down...
        Red shadows are dancing around you!
    "

IF the temperature is greater than or equal to 20 AND the temperature is less than <br>or equal to 30
    DISPLAY: "
        🌫️ Normal world...
        Warm, but Hawkins is still calm.
    "
IF the temperature is less than 20
    DISPLAY: "
        ❄️ Frost is coming!
        The shadows in the Upside Down are getting bigger...`,
        'if-else-title': 'If – Else',
        'if-else-example': `===========================================
  TERMINAL HAWKINS – UPSIDE DOWN
===========================================

# Checking user login

IF the user is logged in
    DISPLAY: "
        👋 Welcome to Hawkins!
        The shadows are gentle today...
    "
ELSE
    DISPLAY: "
        ⛔ Access denied!
        The Upside Down is starting to enter the real world...`,
        'if-else-if-else-title': 'If – Else If – Else',
        'if-else-if-else-example': `===========================================
  TERMINAL HAWKINS – UPSIDE DOWN
===========================================

# Checking the sign of the number

IF the number is less than 0
    DISPLAY: "
        ❌ Negative number...
        The shadows in the Upside Down are getting denser!
    "
ELSE IF the number is greater than 0
    DISPLAY: "
        ✅ Positive number!
        The light of Hawkins pierces the darkness...
    "
ELSE
    DISPLAY: "
        0 — Zero...
        The shadows hold their breath, nothing is happening...
    "`,
        'interactive-exercises': 'Interactive Exercises',
        'check-number': 'Check number',
        'enter-number': 'Enter a number',
        'check-button': 'Check',
        'check-access': 'Check access',
        'age': 'Age',
        'have-document': 'I have a document',
        'name': 'Name',
        'enter-name': 'Enter name',
        'random-mode-minigame': 'Random Mode & Minigame',
        'random-condition-generator': 'Random condition generator',
        'generate-button': 'Generate',
        'minigame-guess-if': 'Minigame: Guess the IF result',
        'true-button': 'True',
        'false-button': 'False',
        'randomize-button': 'Randomize',
        'number-positive': 'The number is positive',
        'number-negative': 'The number is negative',
        'number-zero': 'The number is zero',
        'access-granted': 'Access granted',
        'access-denied': 'Access denied',
        'welcome-daniel': 'Welcome Daniel!',
        'not-daniel': 'This is not Daniel.',
        'random-condition-1': 'If x is greater than 10, print "large number"',
        'random-condition-2': 'If temperature is less than 0, print "frost"',
        'random-condition-3': 'If age is greater than or equal to 18, print "adult"',
        'random-condition-4': 'If name is Adam, print "hi Adam"',
        'game-question-1': 'x = 5. Is x greater than 3?',
        'game-question-2': 'x = -2. Is x positive?',
        'game-question-3': 'age = 20. Is adult?',
        'game-question-4': 'x = 0. Is x greater than 0?',
        'game-correct': 'Correct!',
        'game-incorrect': 'Incorrect!'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}
