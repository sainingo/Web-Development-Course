const menuButton = document.querySelector('.toggle-btn');
const toggleMenu = document.querySelector('.toggle-nav');
const mainContainer = document.querySelector('.main-container');
const closeMenu = document.querySelector('.close-menu');

menuButton.addEventListener('click', () => {
  toggleMenu.classList.toggle('show');
  mainContainer.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  toggleMenu.classList.remove('show');
  mainContainer.classList.remove('show');
});

// data dynamically
const speakers = [
  {
    id: 1,
    potraitImage: './images/speakers/potrait01.jpg',
    potraitDescription: 'Speaker Potrait Picture',
    name: 'Yochai Benkler',
    instituition: 'Masinde Muliro University of Science & technology',
    description: 'Benkler studies commons based peer production and published his first book.',
  },
  {
    id: 2,
    potraitImage: './images/speakers/potrait01.jpg',
    potraitDescription: 'Speaker Potrait Picture',
    name: 'Yochai Benkler',
    instituition: 'Masinde Muliro University of Science & technology',
    description: 'Benkler studies commons based peer production and published his first book.',
  },
  {
    id: 3,
    potraitImage: './images/speakers/potrait01.jpg',
    potraitDescription: 'Speaker Potrait Picture',
    name: 'Kantush Nick',
    instituition: 'Masinde Muliro University of Science & technology',
    description: 'Benkler studies commons based peer production and published his first book.',
  },
  {
    id: 4,
    potraitImage: './images/speakers/potrait01.jpg',
    potraitDescription: 'Speaker Potrait Picture',
    name: 'Yochai Benkler',
    instituition: 'Masinde Muliro University of Science & technology',
    description: 'Benkler studies commons based peer production and published his first book.',
  },
  {
    id: 5,
    potraitImage: './images/speakers/potrait01.jpg',
    potraitDescription: 'Speaker Potrait Picture',
    name: 'Loser Emito',
    instituition: 'Masinde Muliro University of Science & technology',
    description: 'Benkler studies commons based peer production and published his first book.',
  },
  {
    id: 6,
    potraitImage: './images/speakers/potrait01.jpg',
    potraitDescription: 'Speaker Potrait Picture',
    name: 'Olivia Senipae',
    instituition: 'Masinde Muliro University of Science & technology',
    description: 'Benkler studies commons based peer production and published his first book.',
  },
];

const speakerContainer = document.querySelector('.speakers-container');

const speakerElement = speakers.map((speaker) => ` <div class="speaker-details">
<div class="speaker-image">
  <img src="${speaker.potraitImage}" alt="speakers picture" width="110" height="100"/>
</div>
<div class="speaker-desc">
    <h4>${speaker.name}</h4>
    <p>${speaker.potraitDescription}</p>
    <span>${speaker.description}</span>
</div>
</div>`).join('');

speakerContainer.innerHTML += speakerElement;
