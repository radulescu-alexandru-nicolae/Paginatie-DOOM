const ul = document.querySelector('ul');
const li = ul.children;
const carduri = document.querySelector('main.container').children;
const vector = [];
const container = document.querySelector('main.container');
const input = document.querySelector('input');
const search = document.getElementById('search');


function addButoane() {
    let maxButoane = Math.ceil(data.length / 9);
    let nr = 0;
    nr += nr;
    let ul = document.querySelector('ul.butoane');
    for (let i = 0; i < maxButoane; i++) {
        nr++;
        let li = document.createElement('li');
        li.textContent = nr;
        ul.appendChild(li);
    }
}

function nrButtonae(numar) {

    let nr = 0;
    nr += nr;
    for (let i = 0; i < numar; i++) {
        let li = document.createElement('li');
        nr++;
        li.textContent = nr;
        ul.appendChild(li);
    }
}


function createCarduri(numar) {

    for (let i = 0; i < carduri.length; i++) {
        carduri[i].style.display = "none";
    }
    let nr = 0;
    nr += nr;
    if (numar !== 1) {
        numar = (numar - 1) * 9;
        for (let i = numar; i < (numar + 9); i++) {
            vector[nr++] = data[i];

        }
    } else if (numar === 1) {
        for (let i = 0; i < 9; i++) {
            vector[nr++] = data[i];
        }
    }
    return vector;
}

createCarduri(1);
createAllCards();
addButoane();




function createCard(vect) {
    let div = document.createElement('div');
    div.className = "persoana";
    let img = document.createElement('img');

    img.setAttribute('src', vect.picture.large);
    div.appendChild(img);

    let h2 = document.createElement('h2');
    h2.textContent = vect.name.first + " " + vect.name.last;
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.textContent = vect.email;
    div.appendChild(h3);

    let p = document.createElement('p');
    p.textContent = "Joined " + vect.registered.data;
    div.appendChild(p);
    container.appendChild(div);


}

function createAllCards() {

    for (let i = 0; i < vector.length; i++) {
        createCard(vector[i]);
    }


}

function deleteFromMain() {
    for (let i = 0; i < carduri.length; i++) {
        carduri[i].parentElement.style.display = "none";
    }
}
ul.addEventListener('click', (e) => {
    if (e.target.tagName = 'li') {
        let numar = Number(e.target.textContent);
        createCarduri(numar);
        createAllCards();
    }
})

search.addEventListener('click', (e) => {

    for (let i = 0; i < carduri.length; i++) {
        carduri[i].style.display = "none";
    }
    for (let i = 0; i < ul.children.length; i++) {

        ul.removeChild(ul.children[i]);
        i--;

    }

    let text = input.value;
    let nr = 0;
    nr += nr;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.first.includes(text)) {
            nr++;
            if (nr <= 9) {
                createCard(data[i]);
            }
        }
    }

    nr = Math.ceil(nr / 9);
    nrButtonae(nr);
})