<div align="center">

  <img src="public/favicon.png" alt="Invoice Maker Web Logo" width="200" height="auto" />

  # Invoice Maker Web

  **Lekki, prywatny generator faktur VAT działający w przeglądarce (Client-side).**
  <br>
  *Stworzony z myślą o prostocie, druku A4 i bezpieczeństwie danych.*

  <p>
    <a href="https://github.com/MaxPowerPL/invoice-maker-web/releases/tag/v1.0">
      <img src="https://img.shields.io/github/v/tag/MaxPowerPL/invoice-maker-web?label=VERSION&style=for-the-badge&color=238636" alt="Wersja" />
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <img src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <img src="https://img.shields.io/badge/Style-CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white" alt="CSS3" />
    </a>
    <a href="https://github.com/MaxPowerPL/invoice-maker-web/stargazers">
      <img src="https://img.shields.io/github/stars/MaxPowerPL/invoice-maker-web?style=for-the-badge&color=yellow" alt="Stars" />
    </a>
    <a href="https://github.com/MaxPowerPL/invoice-maker-web">
      <img src="https://img.shields.io/github/last-commit/MaxPowerPL/invoice-maker-web?style=for-the-badge" alt="Last Commit" />
    </a>
    <a href="LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
    </a>
  </p>

  <p>
    <a href="#-o-projekcie">📖 O Projekcie</a> •
    <a href="#-funkcjonalności">✨ Funkcjonalności</a> •
    <a href="#-instalacja-i-uruchomienie">🚀 Instalacja</a> •
    <a href="#-struktura-projektu">📂 Struktura</a> •
    <a href="#%EF%B8%8F-roadmapa">🗺️ Roadmapa</a>
  </p>
</div>

---

## 📖 O Projekcie

**Invoice Maker Web** to narzędzie webowe stworzone, aby umożliwić błyskawiczne wystawianie faktur VAT bez konieczności rejestracji w płatnych serwisach czy instalowania ciężkiego oprogramowania. Projekt powstał z potrzeby posiadania prostego, darmowego narzędzia, które szanuje prywatność użytkownika – wszystkie dane wpisywane w formularzu pozostają na Twoim urządzeniu i nie są wysyłane na żaden zewnętrzny serwer.

Aplikacja została zbudowana w oparciu o **Vanilla JavaScript** (bez zbędnych frameworków), co gwarantuje jej szybkość i lekkość. Kluczowym elementem jest zaawansowany arkusz stylów CSS (`@media print`), który sprawia, że po kliknięciu "Drukuj", strona internetowa zamienia się w profesjonalnie sformatowany dokument A4, gotowy do zapisu jako PDF lub fizycznego wydruku.

### 🎯 Aktualna Wersja: `v1.0 (Stable)`
Pierwsza stabilna wersja zawierająca pełną walidację danych (NIP, konta bankowe), dynamiczne przeliczanie stawek VAT oraz dopracowany szablon wydruku.

---

## ✨ Funkcjonalności

Co już działa w tej wersji?

- [x] **Edycja i Obliczenia**:
  - Automatyczne przeliczanie kwot Netto, VAT i Brutto w czasie rzeczywistym.
  - Obsługa różnych stawek VAT (23%, 8%, 5%, 0%, zw) wybieranych z listy.
  - Dynamiczne dodawanie i usuwanie pozycji na fakturze.
- [x] **Walidacja i Formatowanie**:
  - **Auto-formatowanie NIP**: Wymusza format `XXX-XXX-XX-XX` podczas pisania.
  - **Auto-formatowanie Konta**: Grupuje cyfry po 4 (standard IBAN PL) i blokuje litery.
  - **Walidacja Miasta**: Blokuje wpisywanie cyfr i znaków specjalnych w nazwach miast.
  - Walidacja kodu pocztowego (format `XX-XXX`).
- [x] **Druk i PDF**:
  - Dedykowany styl `@media print` ukrywający przyciski i interfejs edycji.
  - Ukrywanie ikony kalendarza i placeholderów na wydruku.
  - Pełna responsywność formularza edycji.

---

## 🛠️ Technologie

Projekt został zbudowany przy użyciu:

| Technologia | Opis |
| :--- | :--- |
| **HTML5** | Semantyczna struktura dokumentu i formularzy (HTML5 Validation API). |
| **CSS3** | Stylizacja Flexbox, zmienne CSS (Variables) oraz kluczowe style `@media print`. |
| **Vanilla JS (ES6+)** | Logika obliczeń, obsługa DOM, Event Listeners i wyrażenia regularne (Regex). |
| **Google Fonts** | Wykorzystanie czcionki `Inter` dla nowoczesnego wyglądu. |

---

## 🚀 Instalacja i Uruchomienie

Projekt nie wymaga instalacji Node.js, npm ani żadnego backendu. Jest to statyczna strona internetowa.

### 1. Wymagania
- Dowolna nowoczesna przeglądarka internetowa (Chrome, Firefox, Edge, Safari).
- (Opcjonalnie) Edytor kodu np. VS Code, jeśli chcesz wprowadzać zmiany.

### 2. Klonowanie repozytorium
```bash
git clone https://github.com/MaxPowerPL/invoice-maker-web.git
cd invoice-maker-web
```

### 3. Konfiguracja środowiska

Projekt działa "out of the box". Nie wymaga konfiguracji serwera.

### 4. Instalacja zależności
*(Brak - projekt nie używa zewnętrznych bibliotek ani menedżerów pakietów)*

### 5. Uruchomienie

**Opcja A (Zwykła):**
Po prostu otwórz plik `index.html` w swojej przeglądarce (dwuklik).

**Opcja B (VS Code Live Server):**
Jeśli używasz VS Code, kliknij prawym przyciskiem na `index.html` i wybierz "Open with Live Server".

### 6. Sterowanie
- **Edycja danych**: Kliknij w dowolne pole tekstowe, aby wprowadzić dane firmy/klienta.
- **Dodawanie pozycji**: Użyj przycisku `➕ Dodaj pozycję` w panelu sterowania.
- **Druk/PDF**: Kliknij `🖨️ Drukuj / Zapisz PDF`. Jeśli dane są niepoprawne (np. błędny NIP), system zablokuje druk i podświetli błąd.

---

## 📂 Struktura Projektu

Kod jest podzielony na trzy główne pliki zgodnie z zasadą "Separation of Concerns" (Oddzielenie odpowiedzialności).

```text
📦 invoice-maker-web
┣ 📂 public/
┃ ┣ 📜 favicon.png   # Ikona strony
┃ ┣ 📜 index.html    # Struktura dokumentu i formularze
┃ ┣ 📜 style.css     # Wygląd ekranowy oraz style do druku (@media print)
┃ ┗ 📜 script.js     # Logika biznesowa, walidacja Regex, obsługa tabeli
┣ 📜 LICENSE         # Plik licencji MIT
┗ 📜 README.md       # Dokumentacja projektu
```

### Opis głównych modułów:

#### Główny katalog
| Plik | Opis |
|------|------|
| `script.js` | Zawiera funkcje `calculateTotals()`, `formatNIP()`, `formatBankAccount()` oraz logikę dodawania wierszy. |
| `style.css` | Odpowiada za Flexbox layout formularza oraz ukrywanie elementów `.no-print` podczas generowania PDF. |

---

## ⚙️ Walidacja i Regex

Unikalnym aspektem projektu jest zastosowanie "żywego" formatowania danych wejściowych za pomocą JavaScript i Regular Expressions.

### Formatery (Input Listeners):
1. **NIP (`formatNIP`)** - Automatycznie dodaje myślniki po 3, 6 i 8 cyfrze. Usuwa litery.
2. **Konto Bankowe (`formatBankAccount`)** - Formatuje ciąg 26 cyfr w bloki po 4 (standard czytelności).
3. **Miasto (`city-input`)** - `replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]/g, '')` - pozwala tylko na polskie litery i myślniki.

---

## 🗺️ Roadmapa

Plany rozwoju projektu:

### Faza 1: MVP i Walidacja (Ukończone)
- [x] Podstawowa struktura HTML/CSS
- [x] Logika przeliczania VAT i Brutto
- [x] Formatowanie pod wydruk (A4)
- [x] Walidacja NIP i Konta Bankowego

### Faza 2: Funkcje Użyteczności (Planowane)
- [ ] Zapisywanie danych "Sprzedawcy" w `localStorage` (zapamiętywanie firmy).
- [ ] Możliwość zmiany waluty (EUR, USD).
- [ ] Eksport/Import całej faktury do pliku JSON.

### Faza 3: Rozwój UI
- [ ] Tryb ciemny (Dark Mode) dla edytora.

---

## 🐛 Znane Problemy i Rozwiązania

### ✅ Naprawione w v1.0:
- **Formatowanie daty**: Naprawiono problem z wyrównaniem etykiety "Data wystawienia" względem innych pól (zastosowano `flex-shrink: 0`).
- **Input Miasta**: Zablokowano możliwość wpisywania cyfr w polu miasta.
- **Ikona Kalendarza**: Ikona wyboru daty jest teraz poprawnie ukrywana na wydruku PDF.

### 🔧 Do poprawy:
- [ ] Widok mobilny jest funkcjonalny, ale tabela może wymagać przewijania na bardzo małych ekranach.

---

## 📝 Changelog

### v1.0 (Initial Release)
**NEW FEATURES:**
- Kompletny generator faktur z podglądem na żywo.
- System walidacji polskich formatów danych (NIP, Kod pocztowy, IBAN).
- Responsywny design z dedykowanym stylem druku.

**Zmiany techniczne:**
- Zastosowanie czcionki `Inter` z Google Fonts.
- Implementacja `HTML5 Form Validation API` przed wywołaniem okna drukowania.

---

## 📜 Licencja

Ten projekt jest udostępniony na licencji **MIT**.

### Co MOŻESZ robić:
- ✅ Używać tego generatora do wystawiania prawdziwych faktur w swojej firmie.
- ✅ Modyfikować kod źródłowy i dostosowywać go do swoich potrzeb.
- ✅ Udostępniać go dalej (z zachowaniem informacji o autorze).

### Czego NIE MOŻESZ robić bez zgody:
- ❌ Usuwać informacji o prawach autorskich z kodu źródłowego przy dalszej dystrybucji.

### Użytek komercyjny
Projekt jest w pełni darmowy (Open Source) i może być wykorzystywany w celach komercyjnych (wystawianie faktur).

Zobacz pełne warunki prawne w pliku [LICENSE](LICENSE).

---

<div align="center">

### ⭐ Jeśli podoba Ci się ten projekt, zostaw gwiazdkę na GitHubie! ⭐

☕ Stworzono używając czystego HTML, CSS i JS.
<br>
<sub>Projekt nie przechowuje żadnych danych w chmurze. Wszystko dzieje się w Twojej przeglądarce.</sub>
<br>
<sub>**MIT License** - Copyright (c) 2025 MaxPowerPL. Zobacz [LICENSE](LICENSE) po szczegóły.</sub>

<p>
  <a href="https://github.com/MaxPowerPL/invoice-maker-web/issues/new">🐛 Zgłoś Bug</a> •
  <a href="https://github.com/MaxPowerPL/invoice-maker-web/issues/new">💡 Zaproponuj Funkcję</a>
</p>

![Status](https://img.shields.io/badge/Status-STABLE-brightgreen?style=for-the-badge&logo=statuspage&logoColor=white)

</div>