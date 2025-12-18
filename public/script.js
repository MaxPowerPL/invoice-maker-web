document.addEventListener('DOMContentLoaded', () => {
    // 1. Ustaw dzisiejszą datę
    const today = new Date();
    document.getElementById('date-issued').valueAsDate = today;

    // 2. Generuj numer faktury
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const invoiceInput = document.getElementById('invoice-number');

    if (!invoiceInput.value) {
        invoiceInput.value = `FV/${month}/${year}`;
    }

    // 3. Dodaj pierwszy pusty wiersz
    addInvoiceRow();

    // 4. Obsługa przycisków
    document.getElementById('add-row-btn').addEventListener('click', addInvoiceRow);

    // 5. Przeliczanie tabeli
    document.querySelector('#invoice-items').addEventListener('input', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
            calculateTotals();
        }
    });

    // 6. OBSŁUGA FORMATOWANIA I WALIDACJI (NIP, KOD, KONTO, MIASTO)
    document.getElementById('invoice-form').addEventListener('input', (e) => {

        // --- NIP ---
        if (e.target.classList.contains('nip-input')) {
            formatNIP(e.target);
        }

        // --- KOD POCZTOWY ---
        if (e.target.classList.contains('zip-input')) {
            formatZip(e.target);
        }

        // --- KONTO BANKOWE ---
        if (e.target.classList.contains('account-input')) {
            formatBankAccount(e.target);
        }

        // --- MIASTO (NOWOŚĆ: Tylko litery, spacje, myślniki) ---
        if (e.target.classList.contains('city-input')) {
            // Regex zostawia: a-z, A-Z, polskie znaki, spację i myślnik
            e.target.value = e.target.value.replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]/g, '');
        }
    });
});

// --- FUNKCJE FORMATUJĄCE ---

function formatNIP(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.substring(0, 10);
    let formatted = '';

    if (value.length > 0) formatted += value.substring(0, 3);
    if (value.length > 3) formatted += '-' + value.substring(3, 6);
    if (value.length > 6) formatted += '-' + value.substring(6, 8);
    if (value.length > 8) formatted += '-' + value.substring(8, 10);

    input.value = formatted;
}

function formatZip(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.substring(0, 5);

    if (value.length > 2) {
        input.value = value.substring(0, 2) + '-' + value.substring(2, 5);
    } else {
        input.value = value;
    }
}

function formatBankAccount(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.substring(0, 26);
    let formatted = '';

    if (value.length > 0) formatted = value.substring(0, 2);
    if (value.length > 2) {
        const rest = value.substring(2);
        const chunks = rest.match(/.{1,4}/g);
        if (chunks) formatted += ' ' + chunks.join(' ');
    }

    input.value = formatted;
}

// --- FUNKCJE TABELI ---

function addInvoiceRow() {
    const tbody = document.getElementById('invoice-items');
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td><input type="text" placeholder="Nazwa usługi / towaru" required></td>
        <td><input type="number" value="1" min="1" class="qty" required></td>
        <td>
            <select class="unit">
                <option value="szt.">szt.</option>
                <option value="usł.">usł.</option>
                <option value="godz.">godz.</option>
                <option value="kg">kg</option>
                <option value="m2">m2</option>
                <option value="kpl.">kpl.</option>
            </select>
        </td>
        <td><input type="number" value="0.00" min="0" step="0.01" class="price" required></td>
        <td>
            <select class="vat">
                <option value="0.23">23%</option>
                <option value="0.08">8%</option>
                <option value="0.05">5%</option>
                <option value="0.00">0%</option>
                <option value="0.00" data-label="zw">zw</option>
            </select>
        </td>
        <td><input type="text" value="0.00" readonly class="gross-val" tabindex="-1"></td>
        <td class="no-print" style="text-align: center;">
            <button type="button" class="btn-danger" onclick="removeRow(this)">🗑️</button>
        </td>
    `;

    tbody.appendChild(tr);
    calculateTotals();
}

function removeRow(button) {
    const row = button.closest('tr');
    if (document.querySelectorAll('#invoice-items tr').length > 1) {
        row.remove();
        calculateTotals();
    } else {
        alert("Faktura musi zawierać przynajmniej jedną pozycję.");
    }
}

function calculateTotals() {
    let totalNetto = 0;
    let totalVat = 0;
    let totalGross = 0;

    const rows = document.querySelectorAll('#invoice-items tr');

    rows.forEach(row => {
        const qty = parseFloat(row.querySelector('.qty').value) || 0;
        const price = parseFloat(row.querySelector('.price').value) || 0;
        const vatSelect = row.querySelector('.vat');
        const vatRate = parseFloat(vatSelect.value) || 0;

        const netValue = qty * price;
        const vatValue = netValue * vatRate;
        const grossValue = netValue + vatValue;

        row.querySelector('.gross-val').value = grossValue.toFixed(2);

        totalNetto += netValue;
        totalVat += vatValue;
        totalGross += grossValue;
    });

    document.getElementById('total-netto').innerText = totalNetto.toFixed(2) + ' PLN';
    document.getElementById('total-vat').innerText = totalVat.toFixed(2) + ' PLN';
    document.getElementById('total-gross').innerText = totalGross.toFixed(2) + ' PLN';
}

function validateAndPrint() {
    const form = document.getElementById('invoice-form');
    if (form.checkValidity()) {
        window.print();
    } else {
        form.reportValidity();
    }
}