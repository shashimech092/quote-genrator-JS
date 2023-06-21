
// Array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

// Function to generate a random quote
function generateQuote() {
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Get the quote at the random index
  const randomQuote = quotes[randomIndex];

  // Display the quote on the page
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = randomQuote;
}
