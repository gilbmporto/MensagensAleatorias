//Declaração da função fabricante de objetos

function newAuthorQuote(name, quote) {
    return {
        name: name,
        quote: quote
    }
};

const MotMessage1 = newAuthorQuote('Yoda', 'There is no try... Do it, or do not.');
const MotMessage2 = newAuthorQuote('Albert Einstein', 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.');
const MotMessage3 = newAuthorQuote('Jesus Christ', 'A tree is known by its fruits.');
const MotMessage4 = newAuthorQuote('Gilbert K. Chesterton', 'The problem of disbelieving in God is not that a man ends up believing nothing.  Alas, it is much worse.  He ends up believing anything.');
const MotMessage5 = newAuthorQuote('Wayne Dyer', "You'll see it when you believe it.");
const MotMessage6 = newAuthorQuote('Marcus Aurelius', "The more we value things outside our control, the less control we have.");
const MotMessage7 = newAuthorQuote('Seneca', "Life is like a play: it's not the length, but the excellence of the acting that matters.");
const MotMessage8 = newAuthorQuote('Audre Lorde', "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.");
const MotMessage9 = newAuthorQuote('Calvin Coolidge', "No person was ever honored for what he received. Honor has been the reward for what he gave.");
const MotMessage10 = newAuthorQuote('Leonardo da Vinci', "Time stays long enough for anyone who will use it.");


//Declaração de uma função geradora de um Array dos Objetos acima!

const generateArrOfMessages = (Arr, Obj) => {
    Arr.push(Obj);
}

const ArrOfWisdomMessages = [];

generateArrOfMessages(ArrOfWisdomMessages, MotMessage1);
generateArrOfMessages(ArrOfWisdomMessages, MotMessage2);
generateArrOfMessages(ArrOfWisdomMessages, MotMessage3);
generateArrOfMessages(ArrOfWisdomMessages, MotMessage4);
generateArrOfMessages(ArrOfWisdomMessages, MotMessage5);
generateArrOfMessages(ArrOfWisdomMessages, MotMessage6);
generateArrOfMessages(ArrOfWisdomMessages, MotMessage7);
generateArrOfMessages(ArrOfWisdomMessages, MotMessage8);
generateArrOfMessages(ArrOfWisdomMessages, MotMessage9);
generateArrOfMessages(ArrOfWisdomMessages, MotMessage10);

//Declaração de uma função para gerar Mensagens Randômicas em um site:
var contadorMensagensGeradas = 0;

const generateRandomPhrase = (Arr) => {
    contadorMensagensGeradas++;
    let randomNumber = Math.floor(Math.random() * Arr.length);
    let authorName = Arr[randomNumber].name;
    let quoteMessage = Arr[randomNumber].quote;
    return `Wisdom of today: ${quoteMessage} -- ${authorName}`
}

console.log(generateRandomPhrase(ArrOfWisdomMessages));

//Declaração das variáveis dos elementos HTML:
var mensMotiv = document.getElementById('mens-motiv');
const botaoGerarFrase = document.getElementById("gerar-mens");
var contDeMensagens = document.getElementById("contador-de-mensagens");

//Conexão do JavaScript com os elementos HTML

botaoGerarFrase.addEventListener('click', () => {
    return mensMotiv.innerHTML = generateRandomPhrase(ArrOfWisdomMessages);
});
botaoGerarFrase.addEventListener('click', () => {
    return contDeMensagens.innerHTML = `Você já viu ${contadorMensagensGeradas} mensagens hoje.`;
});

