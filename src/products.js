import {Products} from './services/products.js';
const $ = document;
const productsContainer = $.querySelector('[data-product-container]');

const ProductCard = ({name, image, price}) => {
  const template =  /*html*/`
    <img class="product-card__image" src="${image}" alt="${name}">
    <div class="product-card__info">
      <h3 class="product-card__info--title">${name}</h3>
      <div class="product-card__info--actions">
        <span class="product-price">$ ${price}</span>
        <button class="product-delete-btn">
          <img src="./src/assets/icons/delete-trash-icon.svg" alt="icono de eliminar producto">
        </button>
      </div>
    </div>
  `

  const card = $.createElement('article');
  card.classList.add('section__products--card');
  card.innerHTML = template;

  return card;
}

export async function renderProducts () {
  const [error, products] = await Products.getAll();

  if (error) return console.log(error);

  const productsElements = products.map(product => ProductCard(product))

  productsContainer.append(...productsElements);
}