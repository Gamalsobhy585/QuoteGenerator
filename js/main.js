
const  getQuoteBtn = document.getElementById('getQuoteBtn');
getQuoteBtn.addEventListener('click',function(){
   fetch('https://dummyjson.com/quotes')
   .then(res => res.json())
   .then(data => {
     const quotes = data.quotes;
              const quoteText = document.getElementById('quoteText');
              const quoteAuthor = document.getElementById('quoteAuthor');
              
              function getRandomQuote(arr) {
                const fetchedNum = Math.floor(Math.random() * arr.length);
                return arr[fetchedNum];
              }
              
              const randomQuote = getRandomQuote(quotes);
              quoteText.innerHTML = `  “  ${randomQuote.quote} ”`;
              quoteAuthor.innerHTML = randomQuote.author;
        
          })
          .catch(error => console.error('Error fetching quotes:', error));
})



