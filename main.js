const apiUrl = `https://api.pexels.com/v1/search?query=people`
// const apiUrl2 = `https://api.pexels.com/v1/search?query=CONSTurl`
const apiKey = `LsokcZdd6bLKorWPCpJhcVrSAuvLhDKlBF4dn69nZPcRY3QLmiYdsilH`




let risultato = null;

function fetchData() {
    fetch(apiUrl, {
        headers: {
            Authorization: apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        risultato = data;
        console.log(risultato);
        
        // SOSTITUZIONE IMG:
        changeImg();
        
        // INSERISCI IMMAGINI
        insertImg();
    });
}

function changeImg() {
    // code for changing image goes here
}

// function fetchData2() {
//     fetch(apiUrl2, {
//         headers: {
//             Authorization: apiKey
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         risultato = data;
//         console.log(risultato);
        
//         // SOSTITUZIONE IMG:
//         changeImg();function fetchData() {
//             fetch(apiUrl2, {
//                 headers: {
//                     Authorization: apiKey
//                 }
//             })
//             .then(response => response.json())
//             .then(data => {
//                 risultato = data;
//                 console.log(risultato);
                
//                 // SOSTITUZIONE IMG:
//                 changeImg();
        
        
//                 // INSERISCI IMMAGINI
//                 insertLandscape()
//             })
//         }


//         // INSERISCI IMMAGINI
//         insertImg()
//     })
// }

function changeImg() {
    const main = document.querySelector('main')
    const svgs = main.querySelectorAll('svg')
    svgs.forEach(svg => {
        let img = document.createElement('img')
        svg.parentNode.replaceChild(img, svg)
    })
}

function insertImg() {
    let imgs = document.querySelectorAll('img')
    imgs.forEach((img, i) => {
        img.setAttribute('src', risultato.photos[i].src.portrait)
    })
    let smalls = document.querySelectorAll('small')
    smalls.forEach((small, i) => {
        small.innerHTML = risultato.photos[i].id
    })
}

// function insertLandscape() {
//     let imgs = document.querySelectorAll('img')
//     imgs.forEach((img, i) => {
//         img.setAttribute('src', risultato.photos[i].src.landscape)
//     })
// }

// Cambia il bottone “Edit” in “Nascondi”
function changeBtnHide () {
    let editBtn = document.querySelectorAll('.btn-outline-secondary:nth-of-type(2)')
    editBtn.forEach((elem)=>{
        elem.innerHTML = `Hide`;
        elem.addEventListener(`click`, function (e) {
            let card = e.target.parentNode.parentNode.parentNode.parentNode
            card.remove()
        })
    })
}



// 5. Cambia la dicitura “9 mins” nell’angolo della card con l’id dell’immagine





// 6. Aggiungi un input di testo nel “jumbotron” e usalo per chiamare l’API e cercare altre immagini basandoti sul contenuto dell’input
function addInput() {
    
let jumbotron = document.querySelector('#jumbo');
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'inserisci parola chiave');
input.setAttribute('id', 'input-key');
jumbotron.appendChild(input)
}

function insertKeyWord() {
    let kword = document.getElementById('input-key').value
    if(!kword){
        alert('Inserisci keyword')
    } else{
        const apiUrl3 = `https://api.pexels.com/v1/search?query=${kword}`
        fetch(apiUrl3, {
            headers: {
                Authorization: apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            risultato = data;
            console.log(risultato);
            
            // SOSTITUZIONE IMG:
            changeImg();
            
            // INSERISCI IMMAGINI
            insertImg();
        });
    }
    
}

window.onload = function () {
    changeBtnHide()
    addInput()
}