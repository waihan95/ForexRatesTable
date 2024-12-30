import { isEven } from './utils.js';

export function renderTable(originalRates, modifiedRates) {
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
