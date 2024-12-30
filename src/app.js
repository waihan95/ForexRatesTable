import { fetchForexData } from './api.js';
import { renderTable } from './renderer.js';

class App {
  constructor() {
    this.apiKey = '9sOx2d1gWYZrKY0uD4hCbOMIQzLcL4KQ';
    this.apiUrl = 'https://api.apilayer.com/fixer/latest';
  }

  async init() {
    const rates = await fetchForexData(this.apiUrl, this.apiKey);
    const modifiedRates = this.modifyRates(rates);
    renderTable(rates, modifiedRates);
  }

  modifyRates(rates) {
    return Object.fromEntries(
      Object.entries(rates).map(([currency, value]) => [currency, value + 10.0002])
    );
  }
}

new App().init();

