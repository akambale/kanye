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
const main = document.getElementsByTagName('main')[0];

let prevOne;

const nextQuoteAndImage = () => {
  const [one, two] = animationOptions();
  if (prevOne === one) {
    nextQuoteAndImage();
    return;
  }
  prevOne = one;
  main.classList.add('fade');
  setTimeout(() => {
    getQuote().then(res => {
      quote.innerText = `"${res}"`;
      image.src = getImage();
      quote.className = '';
      image.className = '';
      main.classList.remove('fade');
      quote.classList.add(one);
      image.classList.add(two);
    });
  }, 1000);
};

const timer = new Timer(() => {
  nextQuoteAndImage();
}, 10000);

const handleClick = () => {
  nextQuoteAndImage();
  timer.reset();
};

// first function call for init
nextQuoteAndImage();
