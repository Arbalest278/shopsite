let uslog = localStorage.getItem("uslog");
let data = JSON.parse(localStorage.getItem(uslog));
const sell = document.getElementById('sell');
let score = localStorage.getItem("score");

window.onload = function(){
    if(uslog){
      logout.textContent = uslog;
      logout.href = "../profile/profile.html";
    }
  };

function outputGoods(goods) {
    if(data !=null){
        document.getElementById('goods').innerHTML = goods.map(n => `
        <div class="single-goods">
          <h3>${n.name}</h3>
          <img width="250" height="120" src="${n.image}">
          <p>Организация ${n.organization}</p>
          <p>Тип корабля: ${n.type}</p>
          <p>Количество: ${n.quantity}</p>
          <button class="button-primary plus" data-id="${n.dataid}"> + </button>
          <button class="button-primary minus" data-id="${n.dataid}"> - </button>
          <p>Цена без скидки: ${n.cost*n.quantity}</p>
          <p>Цена со скидкой: ${n.cost*n.quantity - (score/25)*((n.cost*n.quantity)/100)}</p>
          <div></div>
        </div>
      `).join('');
    }
}

outputGoods(data);

//Поиск товара
document.onclick = event => {
    if(event.target.classList.contains('plus')){
        plusFunction(event.target.dataset.id);
    }
    else if(event.target.classList.contains('minus')){
        minusFunction(event.target.dataset.id);
    }
}

//Увеличение кол-во товара
const plusFunction = id => {
    data[id].quantity++;
    renderCard();
}

//Уменьшение кол-во товара
const minusFunction = id => {
    if(data[id].quantity-1 == 0){
        deleteFunction(id);
        return true;
    }
    data[id].quantity--;
    renderCard();
}

const renderCard = () =>{
    outputGoods(data);
}

const deleteFunction = id => {
    delete data[id];
    renderCard();
}