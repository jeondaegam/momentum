const quotes = [
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        korean: "성공으로 가는 길과 실패로 가는 길은 거의 같다.",
        author: "Colin R. Davis",
    },
    {
        quote: "Everything you want is on the other side of fear.",
        korean: "당신이 원하는 모든 것은 두려움의 반대편에 있다.",
        author: "Jack Canfield",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        korean: "성공은 주로 성공을 찾느라 바쁜 사람들에게 찾아온다.",
        author: "Henry David Thoreau",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        korean: "무언가를 시작하려면 말은 멈추고 행동해야 한다.",
        author: "Walt Disney",
    },
    {
        quote: "Success seems to be connected with action. Successful people keep moving.",
        korean: "성공은 행동과 연결되어 있다. 성공적인 사람들은 계속해서 움직인다.",
        author: "Conrad Hilton",
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        korean: "성공하기 위해서, 우리는 먼저 우리 자신이 할 수 있다는 것을 믿어야 한다.",
        author: "Nikos Kazantzakis",
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        korean: "당신이 어려움을 겪고 항복하지 않기로 결정할 때, 그것이 힘이다.",
        author: "Arnold Schwarzenegger",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


// 1. array 안의 element에 어떻게 접근하는가?
// console.log(quotes[0]);

//2. 명언을 랜덤으로 보여주려면?!
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
