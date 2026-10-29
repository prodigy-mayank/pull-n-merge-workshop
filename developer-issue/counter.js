// Workshop bug: this function should add one attendee per click, but currently adds two.
function incrementCount(currentCount) {
  return currentCount + 2;
}

// Keep the same simple function usable in the browser and in the optional Node.js test.
if (typeof window !== 'undefined') {
  window.incrementCount = incrementCount;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { incrementCount };
}
abcd
