const filters = document.querySelector('#filters');
const logout = document.getElementById('logout');
const bak = document.getElementById('bak');

let data = [];
let uslog = localStorage.getItem("uslog");
let dataconf = [];

window.onload = function(){
  if(uslog){
    logout.textContent = uslog;
    logout.href = "../profile/profile.html";
    bak.href = "../basket/basket.html"
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
      <btn class="batton btn-pr basket" data-id="${n.dataid}">Купить<span></span></btn>
    </div>
  `).join('');
}

  outputGoods(data);

document.onclick = event => {
    if(event.target.classList.contains('basket')){
      sending(event.target.dataset.id);
    }
}

const sending = id => {
  if (localStorage.getItem(uslog) == null){
    dataconf = JSON.parse(localStorage.getItem(uslog));
    dataconf =[data[id]];
    console.log("Создана ячейка");
  }
  else{
    var check = true;
    console.log("Найдена ячейка ячейка");
    dataconf = JSON.parse(localStorage.getItem(uslog));
    for(let i = 0; i != dataconf.length; i++){
      if(dataconf[i].name == data[id].name){
        console.log("Равны");
        dataconf[i].quantity++;
        console.log(dataconf[i].quantity);
        check = false;
        break;
      }
    }
    if(check==true){
      let info = [data[id]];
      console.log(info);
      dataconf.push(...info);
    }
  }
  
  let jsonData = JSON.stringify(dataconf); // Преобразуем объект в JSON строку
  localStorage.setItem(uslog, jsonData); // Сохраняем в localStorage
}
