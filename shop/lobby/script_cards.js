const filters = document.querySelector('#filters');
const logout = document.getElementById('logout');

let data = [];

window.onload = function(){
  let uslog = localStorage.getItem("uslog");
  
  if(uslog){
    logout.textContent = uslog;
    logout.href = "../profile/profile.html";
  }
};

let response = await fetch('../database/cards.json');
if (response.ok) { 
  data = await response.json();
}

filters.addEventListener('input', filterGoods);

function filterGoods() {
  const
    organization = filters.querySelector('#organization').value,
    types = [...filters.querySelectorAll('#type input:checked')].map(n => n.value),
    priceMin = document.querySelector('#price-min').value,
    priceMax = document.querySelector('#price-max').value;

  outputGoods(data.filter(n => (
    (!organization || n.organization === organization) &&
    (!types.length || types.includes(n.type)) &&
    (!priceMin || priceMin <= n.cost) &&
    (!priceMax || priceMax >= n.cost)
  )));
}

function outputGoods(goods) {
  document.getElementById('goods').innerHTML = goods.map(n => `
    <div class="single-goods">
      <h3>${n.name}</h3>
      <img width="250" height="120" src="${n.image}">
      <p>Организация ${n.organization}</p>
      <p>Тип корабля: ${n.type}</p>
      <p>Цена: ${n.cost}</p>
      <div></div>
      <a class="batton"><span></span>Купить</a>
    </div>
  `).join('');
}

  outputGoods(data);

