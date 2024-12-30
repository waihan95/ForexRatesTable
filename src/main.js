import axios from 'axios';

const API_URL = 'https://api.apilayer.com/fixer/latest';
const API_KEY = 'YOUR_API_KEY';

// Function to check if a number is even
function isEven(value) {
    return value % 2 === 0;
}

// Fetch and manipulate data
async function fetchForexData() {
    try {
        const response = await axios.get(API_URL, {
            headers: { apikey: API_KEY },
        });

        const rates = response.data.rates;
        const modifiedRates = Object.fromEntries(
            Object.entries(rates).map(([currency, value]) => [currency, value + 10.0002])
        );

        renderTable(rates, modifiedRates);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Render table dynamically
function renderTable(originalRates, modifiedRates) {
    const tableBody = document.getElementById('rates-table');
    tableBody.innerHTML = '';

    Object.entries(originalRates).forEach(([currency, value]) => {
        const modifiedValue = modifiedRates[currency];

        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${currency}</td>
      <td class="${isEven(value) ? 'even' : ''} ${currency === 'HKD' ? 'hkd' : ''}">${value.toFixed(4)}</td>
      <td class="${isEven(modifiedValue) ? 'even' : ''} ${currency === 'HKD' ? 'hkd' : ''}">${modifiedValue.toFixed(4)}</td>
    `;
        tableBody.appendChild(row);
    });
}

// Initialize app
fetchForexData();
