
function reloadPage() {
    const headerH1 = document.querySelector('.h1__header');

    headerH1.addEventListener('click', () => {
        location.reload();
    });
}
reloadPage()


function changeMode() {
    const body = document.body;
    const svgs = document.querySelectorAll('.audio__div__div-2__div-3')
    if (body.classList.contains('dark-mode')) {
        
        document.documentElement.style.setProperty('--color-brand-1', '#9747ff;');
        document.documentElement.style.setProperty('--color-grey-0', '#15171a');
        document.documentElement.style.setProperty('--color-grey-1', '#212529');
        document.documentElement.style.setProperty('--color-grey-2', '#2b2f33');
        document.documentElement.style.setProperty('--color-grey-3', '#868e96');
        document.documentElement.style.setProperty('--color-grey-4', '#adb5bd');
        document.documentElement.style.setProperty('--color-grey-5', '#ced4da');
        document.documentElement.style.setProperty('--color-grey-6', '#dee2e6');
        document.documentElement.style.setProperty('--color-grey-7', '#f1f3f5');
        document.documentElement.style.setProperty('--color-grey-8', '#f8f9fa');
        document.documentElement.style.setProperty('--color-grey-9', '#fdfeff');
        document.documentElement.style.setProperty('--color-disable-fixed', '#212529');
        document.documentElement.style.setProperty('--color-actived-fixed', '#2b2f33');
        document.documentElement.style.setProperty('--color-white-fixed', '#ffffff');
        document.getElementById("dark-button").src = "src/assets/svg/moon.svg";
        svgs.forEach(svg => {
            svg.src = 'src/assets/svg/play.svg';
        });
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', '0');
    } else {
        
        document.documentElement.style.setProperty('--color-brand-1', '#9747FF;');
        document.documentElement.style.setProperty('--color-grey-0', '#FDFEFF');
        document.documentElement.style.setProperty('--color-grey-1', '#F8F9FA');
        document.documentElement.style.setProperty('--color-grey-2', '#F1F3F5');
        document.documentElement.style.setProperty('--color-grey-3', '#DEE2E6');
        document.documentElement.style.setProperty('--color-grey-4', '#CED4DA');
        document.documentElement.style.setProperty('--color-grey-5', '#ADB5BD');
        document.documentElement.style.setProperty('--color-grey-6', '#2B2F33');
        document.documentElement.style.setProperty('--color-grey-7', '#2B2F33');
        document.documentElement.style.setProperty('--color-grey-8', '#212529');
        document.documentElement.style.setProperty('--color-grey-9', '#1a1d21');
        document.documentElement.style.setProperty('--color-disable-fixed', '#212529');
        document.documentElement.style.setProperty('--color-actived-fixed', '#2b2f33');
        document.documentElement.style.setProperty('--color-white-fixed', '#ffffff');
        document.getElementById("dark-button").src = "src/assets/svg/sun.svg"
        svgs.forEach(svg => {
            svg.src = 'src/assets/svg/play-dark.svg'; 
        });
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', '1');
    }
}


function applyDarkModeFromLocalStorage() {
    const darkMode = localStorage.getItem('darkMode');
    const body = document.body;
    if (darkMode === '1') {
        changeMode()
    } else {
        body.classList.remove('dark-mode');
    }
}
applyDarkModeFromLocalStorage()


function addDarkButton() {
    const button = document.querySelector('#dark-button')
    button.addEventListener('click', changeMode)
}
addDarkButton()


function renderGenreButtons() {
    const divCheckboxs = document.querySelector("#div-checkboxs");

    categories.forEach((category, index) => {
        const input = document.createElement("input");
        input.type = "checkbox";
        input.className = "checkboxs__main";
        input.name = "genreButton";
        input.id = `genreButton_${index}`;
        input.value = category.toLowerCase();

        const label = document.createElement("label");
        label.setAttribute('for', `genreButton_${index}`);
        label.textContent = category;

        divCheckboxs.append(input, label);
    });

    
    const buttons = document.querySelectorAll('.checkboxs__main');
    buttons.forEach(button => {
        if (button.id !== 'genreButton_0') {
            button.addEventListener('click', () => {
                const isAnyCheckboxChecked = Array.from(buttons).some(button => button.checked);
                const genreButton0 = document.querySelector('#genreButton_0');
                if (!isAnyCheckboxChecked) {
                    genreButton0.checked = true;
                } else {
                    genreButton0.checked = false;
                }
            });
        }
    });
}
renderGenreButtons()


function renderCard(id, price, category, title, band, year, imgAlbum, sound) {
    const ul = document.querySelector('#ul__main')

    const li = document.createElement('li');
    li.classList.add('li__ul');
    li.setAttribute("id", `card_${id}`);
    li.setAttribute("category", category);

    const divLi = document.createElement('div');
    divLi.classList.add('div__li');

    const divDiv1 = document.createElement('div');
    divDiv1.classList.add('div__div-1');

    const img = document.createElement('img');
    img.src = imgAlbum;
    img.alt = `${title}`;
    img.classList.add('img__div__div-1');

    const divDiv2 = document.createElement('div');
    divDiv2.classList.add('div__div-2');

    const divDiv2Div1 = document.createElement('div');
    divDiv2Div1.classList.add('div__div-2__div-1');

    const p1 = document.createElement('p');
    p1.innerHTML = band;

    const p2 = document.createElement('p');
    p2.innerHTML = year;

    const divDiv2Div2 = document.createElement('div');
    divDiv2Div2.classList.add('div__div-2__div-2');

    const h2 = document.createElement('h2');
    h2.classList.add('h2__div__div-2__div-2');
    h2.innerHTML = title;

    const divDiv2Div3 = document.createElement('div');
    divDiv2Div3.classList.add('div__div-2__div-3');

    const h2Value = document.createElement('h2');
    h2Value.classList.add('h2__div__div-2__div-3');
    const valueFormatted = new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price);
    h2Value.innerHTML = `R$ <span>${valueFormatted}</span>`;

    const button = document.createElement('button');
    button.classList.add('button__div__div-2__div-3');
    button.textContent = 'Comprar';

    const audio = document.createElement('audio');
    audio.src = sound;

    if (sound !== '') {
        const body = document.body;
        const audioPlay = document.createElement('img');
        audioPlay.classList.add('audio__div__div-2__div-3');
        audioPlay.id = `audio_${id}`
        if (body.classList.contains('dark-mode')) {
            audioPlay.src = 'src/assets/svg/play-dark.svg'
        } else {
            audioPlay.src = 'src/assets/svg/play.svg'
        }
        audioPlay.alt = `Prévia de ${title}`

        audioPlay.addEventListener('click', () => {
            if (audio.paused && sound == 'src/assets/audios/megalovania.mp3') {
                li.style.animation = 'mega 0.4s infinite';
                img.style.animation = 'megaLul 0.4s infinite'
                divDiv2.style.backgroundColor = 'var(--color-brand-1)';
                audio.play();
                avoidConflict();
            }
            else if (audio.paused && sound != 'src/assets/audios/megalovania.mp3') {    
                audio.play();
                li.style.animation = 'pulse 1s infinite';
                img.style.transform = 'scale(1.2)';
                divDiv2.style.backgroundColor = 'var(--color-grey-6)';
                avoidConflict()
            } else {
                audio.pause();
                img.style.animation = ''
                li.style.animation = '';
                img.style.transform = '';
                divDiv2.style.backgroundColor = '';
            }
        });

        audio.addEventListener('play', () => {
            if (body.classList.contains('dark-mode')) {
                audioPlay.src = 'src/assets/svg/pause-dark.svg'
            } else {
                audioPlay.src = 'src/assets/svg/pause.svg'
            }
            audio.volume = 0;
            fadeIn(audio);
            fadeOut(audio);
        });
        
        audio.addEventListener('pause', () => {
            audio.currentTime = 0;
            if (body.classList.contains('dark-mode')) {
                audioPlay.src = 'src/assets/svg/play-dark.svg'
            } else {
                audioPlay.src = 'src/assets/svg/play.svg'
            }
            img.style.animation = ''
            li.style.animation = '';
            img.style.transform = '';
            divDiv2.style.backgroundColor = '';
        });
        divDiv2.append(audio, audioPlay)
    }

    divDiv1.appendChild(img);
    divDiv2Div3.append(h2Value, button);
    divDiv2Div2.appendChild(h2);
    divDiv2Div1.append(p1, p2);
    divDiv2.append(divDiv2Div1, divDiv2Div2, divDiv2Div3);
    divLi.append(divDiv1, divDiv2);
    li.appendChild(divLi);
    ul.appendChild(li);
}


function renderAllProducts(array) {
    const ul = document.getElementById("ul__main");
    ul.innerHTML = "";
    array.sort((a, b) => a.price - b.price);
    array.forEach(item => {
        renderCard(item.id, item.price, item.category, item.title, item.band, item.year, item.img, item.audio);
    });
}


function filterProducts() {
    const buttons = document.querySelectorAll('.checkboxs__main');
    const range = document.querySelector('#input-range');
    buttons[0].checked = true;

    const handleFilterChange = (event) => {
        const checkedButtons = Array.from(buttons).filter(button => button.checked);
        const rangeValue = parseFloat(range.value);

        if (checkedButtons.length === 0) {
            const genreButton0 = document.querySelector('#genreButton_0');
            genreButton0.checked = true;
        }

        if (event.target.id === 'genreButton_0' && event.target.checked) {
            buttons.forEach(button => {
                if (button !== event.target && button.checked) {
                    button.checked = false;
                }
            })
        } else {
            const genreButton0 = document.querySelector('#genreButton_0');
            if (event.target.type === 'checkbox') {
                genreButton0.checked = false;
            }
        }

        const filteredProducts = products.filter(item => {
            if (checkedButtons.length === 0 || checkedButtons.some(button => button.id === 'genreButton_0')) {
                return item.price <= rangeValue;
            } else {
                const buttonId = `genreButton_${item.category}`;
                return checkedButtons.some(button => buttonId === button.id) && item.price <= rangeValue;
            }
        })
        const ul = document.getElementById("ul__main");
        ul.innerHTML = "";
        renderAllProducts(filteredProducts);
        const minPrice = Math.min(...filteredProducts.map(item => item.price));
        const noResultsMessage = document.getElementsByClassName('emptyProducts')[0];

        if (rangeValue < minPrice) {
            noResultsMessage.style.display = 'flex';
        } else {
            noResultsMessage.style.display = 'none';
        }

        const isAnyCheckboxChecked = Array.from(buttons).some(button => button.checked);

        
        if (!isAnyCheckboxChecked) {
            const genreButton0 = document.querySelector('#genreButton_0');
            genreButton0.checked = true;
            renderAllProducts(filteredProducts);
        }
    };

    buttons.forEach(button => {
        button.addEventListener("change", handleFilterChange);
    });
    range.addEventListener("input", handleFilterChange);
}
filterProducts()


function changePriceInHTML() {
    const priceHTML = document.querySelector("#price-range");
    const inputRange = document.querySelector("#input-range");
    const inputRangeFormatted = new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(inputRange.value);
    priceHTML.textContent = inputRangeFormatted;
    inputRange.addEventListener("input", changePriceInHTML);
}
changePriceInHTML()


function inputRangeCustomize() {
    const slider = document.getElementById("input-range");
    const start_value = slider.getAttribute("value");

    let x = start_value;
    let color = 'var(--color-grey-6)';
    slider.style.background = color;

    slider.addEventListener("mousemove", function () {
        x = slider.value;
        console.log(x)
        color = 'linear-gradient(90deg, var(--color-brand-1)' + x * 0.5 + '% , var(--color-grey-6)' + 0 + '%)';
        slider.style.background = color;
    });
}
inputRangeCustomize()