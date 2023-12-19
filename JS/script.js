
let friends = ['Аня', 'Оля', 'Влада', 'Славко', 'Андрій', 'Павло', 'Тетяна', 'Володимир'];
let surprises = ['perfect green book', 'cup', 'ten pen', 'some monitor', 'many money', 'viski', 'flowers', 'girls'];

const anya = document.querySelector('.anya');
const vlada = document.querySelector('.vlada');
const olya = document.querySelector('.olya');
const slava = document.querySelector('.slava');
const andrey = document.querySelector('.andrey');
const pavel = document.querySelector('.pavel');
const tania = document.querySelector('.tania');
const vova = document.querySelector('.vova');
const btns = document.querySelector('.btn-wrapper');

function getRandomFriendAndSurprise(selectedFriend) {
    const friendIndex = friends.indexOf(selectedFriend);
    const filteredFriends = friends.map((friend, index) => (index === friendIndex ? '' : friend)).filter(Boolean);
    const randomIndex = Math.floor(Math.random() * filteredFriends.length);
    const randomFriend = filteredFriends[randomIndex];
    const correspondingSurprise = surprises[friends.indexOf(randomFriend)];
    friends[friends.indexOf(randomFriend)] = ''; // Заменяем выбранного друга пустой строкой
    console.log(friends);
    console.log('Friend:', randomFriend, 'Surprise:', correspondingSurprise);
}

anya.addEventListener("click", () => {
    getRandomFriendAndSurprise('Аня');
});

vlada.addEventListener("click", () => {
    getRandomFriendAndSurprise('Влада');
});

olya.addEventListener("click", () => {
    getRandomFriendAndSurprise('Оля');
});

slava.addEventListener("click", () => {
    getRandomFriendAndSurprise('Славик');
});

andrey.addEventListener("click", () => {
    getRandomFriendAndSurprise('Андрей');
});

pavel.addEventListener("click", () => {
    getRandomFriendAndSurprise('Павло');
});

tania.addEventListener("click", () => {
    getRandomFriendAndSurprise('Тетяна');
});

vova.addEventListener("click", () => {
    getRandomFriendAndSurprise('Володимир');
});


// code for animation and new block

function getRandomFriendAndSurprise(selectedFriend) {
    const loading = document.getElementById('loading');
    const info = document.getElementById('info');
    const friendInfo = document.getElementById('friendInfo');
    const surpriseInfo = document.getElementById('surpriseInfo');
    const title = document.querySelector('h1');

    // Прячем кнопки
    btns.classList.add("invisible");
    title.style.display = 'none';

    // Показываем анимацию загрузки
    loading.style.display = 'block';

    // Задержка перед появлением информации
    setTimeout(() => {
        const friendIndex = friends.indexOf(selectedFriend);
        const filteredFriends = friends.map((friend, index) => (index === friendIndex ? '' : friend)).filter(Boolean);
        const randomIndex = Math.floor(Math.random() * filteredFriends.length);
        const randomFriend = filteredFriends[randomIndex];
        const correspondingSurprise = surprises[friends.indexOf(randomFriend)];
        friends[friends.indexOf(randomFriend)] = ''; // Заменяем выбранного друга пустой строкой

        // Замените адреса fetch на соответствующие эндпоинты на вашем сервере

fetch('http://localhost:3000/saveData', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ friends }),
});

// ...

fetch('http://localhost:3000/getData')
  .then(response => response.json())
  .then(data => {
    friends = data.friends;
  });

        // Прячем анимацию загрузки
        loading.style.display = 'none';
        

        // Показываем блок с информацией
        info.style.display = 'block';
info.style.borderRadius = '25px';
info.style.height = '1000px';
info.style.width = '400px';
info.style.backgroundColor = '#5e0883';
info.style.color = '#fff';
        info.style.display = 'flex';
        info.style.flexDirection = 'column';
info.style.textAlign = 'center';
info.style.alignItems = 'center';
        info.style.justifyContent = 'center';
        info.style.marginBottom = '400px';
        info.style.fontSize = '40px';
        friendInfo.textContent = `${randomFriend}`;
        surpriseInfo.textContent = `${correspondingSurprise}`;

        console.log(friends);
        console.log('Friend:', randomFriend, 'Surprise:', correspondingSurprise);
    }, 2500);
}


// start parallax

document.addEventListener("DOMContentLoaded", function () {
  const parallaxContainer = document.getElementById("parallax");
    const snowmanElement = document.querySelector(".parallax__inner .snowman");


    parallaxContainer.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;


    // Двигаем snowman в направлении мыши
        snowmanElement.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
  });
});


// Добавьте этот код к существующему коду в script.js


document.addEventListener('DOMContentLoaded', () => {
  // ...

  document.getElementById('resetButton').addEventListener('click', () => {
    resetArrayToOriginal();
  });
});

const originalFriendsData = ['Аня', 'Оля', 'Влада', 'Славко', 'Андрій', 'Павло', 'Тетяна', 'Володимир'];

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

let friendsData = ['Аня', 'Оля', 'Влада', 'Славко', 'Андрій', 'Павло', 'Тетяна', 'Володимир'];

app.post('/saveData', (req, res) => {
  friendsData = req.body.friends;
  res.sendStatus(200);
});

app.get('/getData', (req, res) => {
  res.json({ friends: friendsData });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/getOriginalData', (req, res) => {
  res.json({ friends: originalFriendsData });
});