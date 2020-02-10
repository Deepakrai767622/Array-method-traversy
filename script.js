const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch Random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json();

    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 10000000)
    }

    addData(newUser)

}


//Add new obj tp data arr

function addData(obj) {
    data.push(obj);

    updateDOM();
}

// Update dom

function updateDOM(providedData = data) {
    //clear the main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';


    providedData.forEach(item => {
        const element = document.createElement('div')
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;
        main.appendChild(element);
    });
}

// Formate number as money
function FormatMoney() {

}