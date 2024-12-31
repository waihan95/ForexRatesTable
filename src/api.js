export async function fetchForexData() {
  try {
    const response = await fetch('/api/forex');

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.rates;
  }
   catch (error) {
    throw error;
  }
}