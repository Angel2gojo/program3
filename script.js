async function getQuote() {
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = 'Fetching...';

  try {
    const response = await fetch('https://animechan.xyz/api/random');
    const data = await response.json();
    quoteElement.textContent = `"${data.quote}" — ${data.character} (${data.anime})`;
  } catch (error) {
    quoteElement.textContent = 'Failed to fetch quote 😢';
  }
}
