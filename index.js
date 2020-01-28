const getQuote = async () => {
  const response = await fetch('https://api.kanye.rest', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Origin: 'https://api.kanye.rest',
    },
  }).then(res => res.json());
  return response.quote;
};

const getImage = () => {
  const index = Math.floor(Math.random() * 99);
  return images[index];
};

const animationOptions = () => {
  const options = [
    ['up', 'down'],
    ['down', 'up'],
    ['left', 'right'],
    ['right', 'left'],
  ];
  const index = Math.floor(Math.random() * 4);
  return options[index];
};

const quote = document.getElementById('quote');
const image = document.getElementById('image');

const nextQuoteAndImage = () => {
  const [one, two] = animationOptions();
  quote.className = '';
  image.className = '';
  getQuote().then(res => {
    quote.innerText = `"${res}"`;
    image.src = getImage();
    quote.classList.add(one);
    image.classList.add(two);
  });
};

// first function call for init
nextQuoteAndImage();
