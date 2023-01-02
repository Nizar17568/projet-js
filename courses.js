const menu = [{
    image: './images/i/javascriptDef.png',
    title: 'what is javascript?',
    category: 'JS',
    price: '9'
  },

  {
    image: './images/i/htmlBasics.png',
    title: 'basics of HTML',
    category: 'HTML',
    price: '5'
  },
  {
    image: './images/i/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: '9'
  },
  {
    image: './images/i/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: '69' 
   },
  {
    image: './images/i/javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price: '19'  
  },
  {
    image: './images/i/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: '29'  
  },
  {
    image: './images/i/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: '19'
  },
  {
    image: './images/i/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: '29'
  },
  {
    image: './images/i/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: '39'
  },
  {
    image: './images/i/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: '19'
  },
  {
    image: './images/i/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: '19'
  },
  {
    image: './images/i/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: '29'
  },
  {
    image: './images/i/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: '59'
  },
  {
    image: './images/i/cssColors.png',
    title: 'css colors',
    category: 'CSS',
    price: '29'
  },
  {
    image: './images/i/phpBasics.png',
    title: 'getting started with php',
    category: 'PHP',
    price: '15'
  },
  {
    image: 'images/i/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: '19'
  },
  {
    image: './images/i/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: '29'
  },
  {
    image: './images/i/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'PHP',
    price: '45'
  },
  {
    image: './images/i/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: '23'
  }];

var content2 = document.querySelector('.content2');

function creationCours(image, title,category, price) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    let img = document.createElement('img');
    //img.setAttribute('src',image)
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-text');
    p.appendChild(document.createTextNode(title));
    
    let label = document.createElement('p');
    label.setAttribute('class', 'card-cat');
    label.appendChild(document.createTextNode(category));

  
    let span = document.createElement('p');
    span.setAttribute('class', 'card-text');
    span.appendChild(document.createTextNode(price + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(label);
    div.appendChild(span);
    content2.append(div);
}

menu.forEach((el) => {
    creationCours(el.image,el.title, el.category, el.price);
})

const searchinput = document.getElementById("search")

searchinput.addEventListener("keyup", function (e) {
    const value = e.target.value

    content2.innerHTML = ''

    menu.filter(el => {
        return el.title.toLowerCase().includes(value.toLowerCase())
    }).forEach((el) => {
        creationCours(el.image, el.title,el.category, el.price);
    })
})

const pricefilter = document.getElementById("price-filter")

pricefilter.addEventListener("change", function (e) {
    const value = parseFloat(e.target.value)

    content2.innerHTML = ''

    document.querySelector('.selected-price').innerHTML = value.toString()

    menu.filter(el => {
        return el.price <= value
    }).forEach((el) => { creationCours(el.image, el.title,el.category, el.price) })
})
const btnContainer = document.querySelector(".list-group");
window.addEventListener("DOMContentLoaded", function () {
    displayMenuButtons();
  });
function displayMenuButtons() {
  
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
          
        }
        return values;
      },
      ["all"]
    );
    console.log(categories);
    const categoryBtns = categories
      .map(function (category) {
        return `<li class="list-group-item category-item" data-value="${category}">${category}</li>`
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".category-item");
document.querySelectorAll('.category-item').forEach(function (category) {
    category.addEventListener('click', function (e) {
        e.preventDefault()

        const categoryname = category.dataset.value
        content2.innerHTML = '';

        menu.filter(el => {
            if (categoryname == 'all') return true
            return el.category.toLowerCase() == categoryname.toLowerCase()
        }).forEach((el) => { creationCours(el.image, el.title,el.category, el.price) })
    })
})}