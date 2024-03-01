const filters = document.querySelector('#filters');

filters.addEventListener('input', filterGoods);

function filterGoods() {
  const
  organization = filters.querySelector('#organization').value,
    type = [...filters.querySelectorAll('#type input:checked')].map(n => n.value),
    priceMin = document.querySelector('#price-min').value,
    priceMax = document.querySelector('#price-max').value;

  outputGoods(DATA.filter(n => (
    (!organization || n.organization === organization) &&
    (!type.length || type.includes(n.type)) &&
    (!priceMin || priceMin <= n.cost) &&
    (!priceMax || priceMax >= n.cost)
  )));
}

function outputGoods(goods) {
  document.getElementById('goods').innerHTML = goods.map(n => `
    <div class="single-goods">
      <h3>${n.name}</h3>
      <h4>${n.organization}</h4>
      <img src="${n.image}">
      <h4>${n.description}</h4>
      <p>Цена: ${n.cost} <button class="add-to-cart" data-art="${n.name}">Купить</button></p>
    </div>
  `).join('');
}
fetch('../database/cards.json') //Вытаскиваем данные из файла cards.json
.then(response => response.json())
.then(user => {outputGoods(user)});
