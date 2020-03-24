
function Hero(image, top, left, width,height){
    this.image = image;
    this.top = top;
    this.left = left;
    this.width =width;
    this.height =height;


    this.getHeroElement = function(){
        return '<img width="'+ this.width + '"' +
            ' height="'+ this.height+ '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }

}

var hero = new Hero( "imgC.jpg", 20, 30, 100,100);

function start(){
    if(hero.left < window.innerWidth - hero.width){
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();