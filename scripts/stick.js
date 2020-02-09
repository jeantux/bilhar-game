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
            stroke(100, 50, 42)
            strokeWeight(6)
            
            let size = 180

            let posX = mouseX - this.x
            let posY = mouseY - this.y

            let angle = Math.atan2(posY, posX) + Math.PI
            let dx = size * cos(angle) 
            let dy = size * sin(angle) 

            line(this.x + (dx/9), this.y + (dy / 9), this.x + dx, this.y+ dy)

            this.strong.x = dx / 360 * this.strongCollision
            this.strong.y = dy / 360 * this.strongCollision

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