const btn=document.getElementById("btn")
const quote=document.getElementById("quote")
const arrayOfQuotes = [
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
    "Life isn’t about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Live life as if everything is rigged in your favor. - Rumi",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "It is not length of life, but depth of life. - Ralph Waldo Emerson",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away. - Unknown",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Live in the sunshine, swim the sea, drink the wild air. - Ralph Waldo Emerson",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Don't count the days, make the days count. - Muhammad Ali"
];

const arraylength=arrayOfQuotes.length


btn.addEventListener("click",function(){
    var quotevalue=Math.floor(Math.random()*arraylength)
    quote.textContent=arrayOfQuotes[quotevalue]
})