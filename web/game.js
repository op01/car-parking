const WIDTH = 900
const HEIGHT = 450

Crafty.init(WIDTH,HEIGHT, document.getElementById('game'))
Crafty.e('2D, DOM, Color').attr({x: 0, y: 440, w: WIDTH, h: 10}).color('#F00');
Crafty.sprite('pink-car.png', {car:[0,0,297,600]})
const yourCar= Crafty.e('2D, DOM, AngularMotion, car')
.attr({w: 99, h: 200,x: 350, y: 0})
.origin('center')

function callback(disL,disR){
    console.log(Date.now())
    disL = disL /29 /2
    disR = disR /29 /2
    console.log(disL,disR)
    document.querySelector('#dLeft').innerHTML = disL.toFixed(1)+'cm'
    document.querySelector('#dRight').innerHTML = disR.toFixed(1)+'cm'
    
    const carWidth = 25
    const alpha = Math.atan(Math.abs(disL-disR)/carWidth)*180/Math.PI
    const beta = 90-alpha
    console.log('alpha',alpha)
    yourCar.rotation = disL>disR?alpha:360-alpha
    let dis = Math.sin(beta*Math.PI/180)*(disL + disR)/2
    dis*=5
    yourCar.y = 240-dis
}

// const myCar = Crafty.e('2D, DOM, AngularMotion, car').attr({w: 99, h: 200, x: 100, y: 225})
// myCar.origin(250,0)
// myCar.vrotation = 30