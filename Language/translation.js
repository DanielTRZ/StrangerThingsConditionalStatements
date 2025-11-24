const translations = {
    'pl': {
        'title': 'Instrukcje Warunkowe – Stranger Things Edition',
        'main-title': 'Instrukcje Warunkowe',
        'subtitle': 'Stranger Things Edition',
        'basic-instructions': 'Podstawowe Instrukcje',
        'if-title': 'Jeżeli (IF)',
        'if-example': `JEŻELI temperatura większa od 30
    wypisz: jest gorąco`,
        'if-else-title': 'Jeżeli – inaczej (IF – ELSE)',
        'if-else-example': `JEŻELI użytkownik zalogowany
    wyświetl: witaj
W PRZECIWNYM RAZIE
    wyświetl: dostęp zabroniony`,
        'if-else-if-else-title': 'Jeżeli – inaczej jeśli – inaczej (IF – ELSE IF – ELSE)',
        'if-else-if-else-example': `JEŻELI liczba mniejsza od 0
    wypisz: ujemna
W PRZECIWNYM RAZIE JEŻELI liczba większa od 0
    wypisz: dodatnia
W PRZECIWNYM RAZIE
    wypisz: zero`,
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
        'if-example': `IF temperature is greater than 30
    print: it's hot`,
        'if-else-title': 'If – Else',
        'if-else-example': `IF user is logged in
    display: welcome
ELSE
    display: access denied`,
        'if-else-if-else-title': 'If – Else If – Else',
        'if-else-if-else-example': `IF number is less than 0
    print: negative
ELSE IF number is greater than 0
    print: positive
ELSE
    print: zero`,
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
