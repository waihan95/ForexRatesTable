export async function fetchForexData(apiUrl, apiKey) {
  try {
    const response = await fetch(apiUrl, {
      headers: { apikey: apiKey },
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error('Error fetching forex data:', error);
    throw error;
  }
}