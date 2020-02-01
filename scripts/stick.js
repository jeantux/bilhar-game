function Stick(x, y) {
    this.x = x
    this.y = y
    this.show = true
    this.strong = {
        x: 0,
        y: 0
    }
    this.strongCollision = 5
    this.positionY = 160
    this.directionTop = true

    this.update = (x, y) => {
        this.x = x
        this.y = y
        this.show = state.getShowStick()
    }

    this.moveStrong = () => {  
        fill(200, 20, 50)

        if (this.positionY < 160)
            this.directionTop = false
        else if (this.positionY > 400)
            this.directionTop = true

        this.positionY += this.directionTop === true ? -2 : 2;
        
        let div = this.positionY < 250 ? 40 : 15
        this.strongCollision = this.positionY / div

        circle(485, this.positionY, 30)   
    }

    this.display = () => {
        if (this.show == true) {
            let r = 180
            let angle = map(mouseX, 0, width, 50, 75)
            let dx = r * cos(angle)
            let dy = r * sin(angle)
            
            this.strong.x = dx / 360 * this.strongCollision
            this.strong.y = dy / 360 * this.strongCollision

            stroke(100, 50, 42)
            strokeWeight(6)
            line(this.x, this.y, this.x + dx, this.y+ dy)

            // strong bar
            fill(120)
            noStroke()
            quad(480, 160, 
                 480, 400, 
                 490, 400, 
                 490, 160)

            text('Min',510, 160)
            text('Max',510, 410)
                 
            this.moveStrong()
        }

    }
}