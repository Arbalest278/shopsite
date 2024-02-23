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

const DATA = [
  {
    "name" : "Скорпион",
    "cost" : 1000,
    "organization" : "ArbalestInc",
    "image" : "./secret.jpg",
    "description" : "",
    "type": "corvett"
  },
  {
    "name" : "Акула",
    "cost" : 1200,
    "organization" : "Pirate",
    "image" : "",
    "description" : "",
    "type": "corvett"
  },
  {
    "name" : "Орион",
    "cost" : 1700,
    "organization" : "NASA",
    "image" : "",
    "description" : "",
    "type": "aircraftcarrier"
  },
  {
    "name" : "Аврора",
    "cost" : 2000,
    "organization" : "Altera",
    "image" : "https://pm1.aminoapps.com/6931/257bc424e08e51a59cc2cec8863af989ec814bd1r1-1024-512v2_uhq.jpg",
    "description" : "Гигантское трансгосударство «Альтерра» запускает «Аврору» — космический корабль для установки фазовых врат",
    "type": "superdreadnought"
  }
];

outputGoods(DATA);
