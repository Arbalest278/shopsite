let card = {
    // 'sdsfsd' : 2,
    // 'dslvlkk2' : 2,
}

let uslog = localStorage.getItem("uslog");
let data = JSON.parse(localStorage.getItem(uslog));

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
          <p>Цена: ${n.cost*n.quantity}</p>
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
    card[id]++;
    renderCard();
}

//Уменьшение кол-во товара
const minusFunction = id => {
    if(card[id]-1 == 0){
        deleteFunction(id);
        return true;
    }
    card[id]--;
    renderCard();
}

const renderCard = () =>{
    console.log(card);
}

const deleteFunction = id => {
    delete card[id];
    renderCard();
}