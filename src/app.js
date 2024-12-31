import { fetchForexData } from './api.js';
import { renderTable, animateContainer } from './renderer.js';

class App {
  async init() {
    try {
      animateContainer();
      const rates = await fetchForexData();
      const modifiedRates = this.modifyRates(rates);
      renderTable(rates, modifiedRates);
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  }

  modifyRates(rates) {
    return Object.fromEntries(
      Object.entries(rates).map(([currency, value]) => [currency, value + 10.0002])
    );
  }
}

new App().init();