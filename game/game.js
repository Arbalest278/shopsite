var canvac = document.getElementById("game");
var context = canvac.getContext("2d");
var aster=[];
var timer=0;
var ship={x:150,y:150};

//Изображение корабля
var shipimg = new Image();
shipimg.src = "./files/ship.png";

//Изображение астеройда
var asterimg = new Image();
asterimg.src = "./files/aster.png";

//Изображение фона
var fonimg = new Image();
fonimg.src = "./files/fonimg.jpg";

canvac.addEventListener("mousemove", function(event) {
    ship.x=event.offsetX-25;
    ship.y=event.offsetY-13;
});

//Фон игры
fonimg.onload = function () {
    game();
}

//Основной игровой цикл
function game(){
    update();
    render();
    requestAnimFrame(game)
}

function update(){
timer++;
if(timer%10==0){
    aster.push({
        x:Math.random()*600,
        y:-50,
        dx:Math.random()*2-1,
        dy:Math.random()*2+2 });
}
    
    //Физика астеройдов
    for(i in aster){
        //перемещение вдоль оси x
        aster[i].x=aster[i].x+aster[i].dx;
        //перемещение вдоль оси y
        aster[i].y=aster[i].y+aster[i].dy;

        //границы
        if (aster[i].x>=530 || aster[i].x<0) aster[i].dx=-aster[i].dx;
        if (aster[i].y>=530) aster.slice(i, 1);
    }

}

function render() {
    context.drawImage(fonimg, 0, 0, 600, 600);
    context.drawImage(shipimg, ship.x, ship.y, 60, 60);
    for(i in aster){
    context.drawImage(asterimg, aster[i].x, aster[i].y, 100, 100)
    }
}

var requestAnimFrame = (function(){
    return window.requestAnimFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000/20);
        }
})();