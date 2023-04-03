'use strict'

const dogBtn = document.querySelector('.dog-btn');
const dogContainer = document.querySelector('.dog-container');
const result = document.querySelector('.result');

const renderError = function(msg) {
    dogContainer.insertAdjacentElement('afterend', msg)
}
const getJSON = function(dogImageUrl, errorMsg = "Something went wrong. The dogs are hiding...") {
    return fetch(dogImageUrl)
        .then(res => {
        if (!res.ok) throw new Error(
            `🐶Doggo is currently sleeping. Try again. (${res.status})`)
        return res.json();
    });
};

const getRandomDog = function(dogImageUrl) {
    getJSON(dogImageUrl, 'Doggo is missing... Try again.')
    .then(dogData => {
        console.log(dogData);
        const img = document.createElement("img");
        img.src = dogData.message;
        result.insertAdjacentElement('afterend', img);
    })
    .catch(err => {
        console.error(`${err}`);
        renderError(`Doggo 🐶 is busy right now. ${err.message} Try again`);
        })
}

dogBtn.addEventListener('click', function() {
getRandomDog('https://dog.ceo/api/breeds/image/random')
});
