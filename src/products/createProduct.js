import { Products } from "../services/products.js";

const $ = document;

const form = $.querySelector('[data-form]');

export default function createProduct () {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    const product = Object.fromEntries(formData);

    console.log({product});
    const [error, data] = await Products.create(product)

    console.log({error, data})
  });

}
