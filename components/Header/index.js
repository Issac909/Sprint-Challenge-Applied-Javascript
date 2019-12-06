// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function createHeader() {
    //PARENT
    const header = document.createElement('div');
    header.classList.add('header');

    //DATE
    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019';
    header.append(date);

    //TITLE
    const h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';
    header.append(h1);

    //TEMPERATURE
    const temperature = document.createElement('span');
    temperature.classList.add('temp');
    temperature.textContent = '98°';
    header.append(temperature);

    return header;
}

//MAIN PARENT
const headerContainer = document.querySelector('.header-container');
headerContainer.append(createHeader());


