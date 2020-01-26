var whiteBall
var stick
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, 
    ball9, ball10, ball11, ball12, ball13, ball14, ball5

var currentBalls = []

var showStick = true
var gameOver = false

var points = 0

function rgb(r, g, b) {
    return { r: r, g: g, b: b }
}

function setup() {
    createCanvas(640, 640)
    createTable()
    createBalls()
    createStick()
}

function createTable() {
    mainTable = new Table(80, 80, 550, 320)
    mainTable.createObjects()
}

function createBalls() {
    currentBalls = []
    currentBalls.push( new Ball(250, 450, rgb(255, 255, 255), 0, true) ) // whiteBall
    currentBalls.push( new Ball(250, 250, rgb(250, 200, 0), 1, false) )
    currentBalls.push( new Ball(235, 230, rgb(10, 0, 230), 2, false)     )
    currentBalls.push( new Ball(265, 230, rgb(200, 50, 20), 3, false) )
    currentBalls.push( new Ball(220, 210, rgb(100, 100, 250), 4, false) )
    currentBalls.push( new Ball(250, 210, rgb(250, 130, 20), 5, false) )
    currentBalls.push( new Ball(280, 210, rgb(0, 100, 20), 6, false) )
    currentBalls.push( new Ball(205, 190, rgb(150, 20, 20), 7, false) )
    currentBalls.push( new Ball(235, 190, rgb(0, 0, 0), 8, false) )
    currentBalls.push( new Ball(265, 190, rgb(240, 170, 0), 9, false) )
    currentBalls.push( new Ball(295, 190, rgb(20, 90, 250), 10, false) )
    currentBalls.push( new Ball(190, 170, rgb(230, 50, 20), 11, false) )
    currentBalls.push( new Ball(220, 170, rgb(100, 100, 250), 12, false) )
    currentBalls.push( new Ball(250, 170, rgb(220, 100, 20), 13, false) )
    currentBalls.push( new Ball(280, 170, rgb(10, 120, 20), 14, false) )
    currentBalls.push( new Ball(310, 170, rgb(120, 50, 20), 15, false) )

}

function otherBalls(indexMainBall, listOfBalls) {
    let ballsReturn = []
    for (let i = 0; i < listOfBalls.length; i++) {
        if (i !== indexMainBall)
            ballsReturn.push(listOfBalls[i])
    }

    return ballsReturn
}

function loadActionsBalls(balls) {
    for (let i = 0; i < balls.length; i++) {
        loadActionsBall(balls[i], otherBalls(i, balls))
    }
}

function loadActionsBall(ball, others) {
    ball.move() 
    ball.display()
    ball.colisionTable(mainTable)
    ball.colisionBalls(others)
    ball.pocketed(mainTable.roles)
}

function createStick() {
    stick = new Stick(300, 300)
}

function stickVisible() {
    let showBall = true
    for (let i = 0; i < currentBalls.length; i++) {
        if (currentBalls[i].killed === false) {
            if(currentBalls[i].strong.x !== 0 || currentBalls[i].strong.y !== 0)
            showBall = false
        }
    }

    showStick = showBall
}

function updatePoints() {
    fill(0)
    textSize(14);
    text('Score: ' + points, width -70, 20)
}

function draw() {
    stickVisible()
    background(200)
    mainTable.display()
    if (gameOver === false) {
        stick.display()
        loadActionsBalls(currentBalls)                                 
        stick.update(currentBalls[0].x, currentBalls[0].y, showStick)
        updatePoints()
    } else {
        fill(0)
        textSize(24)
        text('Game Over', 190, 250)

        textSize(12);
        text('press Key to restart', 200, width /3)
    }
}


function mouseClicked() {
    if (showStick === true) {
        currentBalls[0].strong.x = -stick.strong.x
        currentBalls[0].strong.y = -stick.strong.y
        showStick = false
    } else if (gameOver === true){
        showStick = true
        gameOver = false
        setup()
    }
}
