export async function fetchForexData() {
  try {
    const response = await fetch('/api/forex');
    
    if (!response.ok) {
      const errorDetails = await response.text();
      console.error(`API Error: ${response.status} - ${response.statusText}`);
      console.error(`API Response Details: ${errorDetails}`);
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error('Error fetching forex data:', error.message);
    console.error('Stack Trace:', error.stack);
    throw error;
  }
}