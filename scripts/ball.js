function Ball(x, y, color, ballNumber, mainBall) {
    this.x = x
    this.y = y
    this.color = color
    this.ballNumber = ballNumber
    this.mainBall = mainBall
    this.diametter = mainBall === true ? 25 : 23
    this.killed = false
    this.strong = {
        x: 0,
        y: 0
    }
    this.precaution = .013
    this.moving = true
    this.mass = (4 * (3.14) / 3) * Math.pow((this.diametter / 2), 3)

    this.putt = (strong) => {
        this.strong.x = -strong.x
        this.strong.y = -strong.y
    }

    this.pocketed = (roles) => {
        for (let i = 0; i < roles.length; i++) {
            let d = this.distance(this.x, this.y, roles[i].x, roles[i].y)
            let positionPocketed = [2, 4].indexOf(i) ? roles[i].diametter / 4 : 0

            if (d < ((this.diametter / 2) + (positionPocketed))) {
                if(this.killed === false) {
                    score.add(this.ballNumber)
                }
                this.killed = true
                if (this.mainBall === true) {
                    state.setGameOver(true)
                }
            }
        }
    }

    this.strengthPrecaution = () => {
        if(this.strong.x != 0) {
            if (this.strong.x > 0) {
                if (this.strong.x <= .01) {
                    this.strong.x = 0
                } else {
                    this.strong.x -= this.precaution
                }
            } else {
                if (this.strong.x >= -.01) {
                    this.strong.x = 0
                } else {
                    this.strong.x += this.precaution
                }
            }
        }

        if(this.strong.y != 0) {
            if (this.strong.y > 0) {
                if (this.strong.y <= .01) {
                    this.strong.y = 0
                } else {
                    this.strong.y -= this.precaution
                }
            } else {
                if (this.strong.y >= -.01) {
                    this.strong.y = 0
                } else {
                    this.strong.y += this.precaution
                }
            }
        }
    }

    this.display = () => {
        
        if (this.killed === false) {
            noStroke()
            fill(this.color.r, this.color.g, this.color.b)
            circle(this.x, this.y, this.diametter)
    
            if (this.strong.y === 0 && this.strong.x === 0) {
                fill(255)
                text(this.ballNumber, this.x -8, this.y+6)
            }
        } else if (this.mainBall === true) {
            state.setGameOver(true)
            this.moving = false         
        }
    }

    this.move = () => {
        if(this.moving === true) {
            this.x += this.strong.x
            this.y += this.strong.y
        }

        this.strengthPrecaution()
    }

    this.colisionTable = (table) => {
        if((this.x - (this.diametter /2)) < table.x) {
            this.strong.x = (this.strong.x * -1)
        } 
        else if ((this.x + (this.diametter / 2) ) > (table.x + table.width)){
            this.strong.x = (this.strong.x * -1)
        }

        if((this.y - (this.diametter /2)) < table.y) {
            this.strong.y = (this.strong.y * -1)
        } 
        else if ((this.y + (this.diametter / 2) ) > (table.height)){
            this.strong.y = (this.strong.y * -1)
        }
    }

    this.distance = (x1, y1, x2, y2) => {
        let pow = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)   
        return Math.sqrt( pow )
    }
    
    this.colisionBalls = (othersBalls) => {
        for (let i = 0; i < othersBalls.length; i++) {
            if (othersBalls[i].killed === false && this.killed === false) {
                let d = this.distance(this.x, this.y, othersBalls[i].x, othersBalls[i].y)
                if (d < (this.diametter / 2) + (othersBalls[i].diametter / 2))
                    this.colisionBall(othersBalls[i])      
            }      
        }
    }

    this.setPosition = (otherBall) => {
        let xPos = this.x - otherBall.x
        xPos = xPos < 0 ? xPos * -1 : xPos

        let yPos = this.y - otherBall.y
        yPos = yPos < 0 ? yPos * -1 : yPos

        if (xPos < ((this.diametter / 2) + (otherBall.diametter / 2))) {
            if(this.x > otherBall.x)
                this.x ++
            else
                this.x --
        }

        if (yPos < ((this.diametter / 2) + (otherBall.diametter / 2))) {
            if(this.y > otherBall.y)
                this.y ++
            else
                this.y --
        }
    }

    function rotate(velocity, angle) {
        const rotatedVelocities = {
            x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
            y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
        };
    
        return rotatedVelocities;
    }

    this.colisionBall = (otherParticle) => {
        const xVelocityDiff = this.strong.x - otherParticle.strong.x;
        const yVelocityDiff = this.strong.y - otherParticle.strong.y;
    
        const xDist = otherParticle.x - this.x;
        const yDist = otherParticle.y - this.y;
    
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
            const angle = -Math.atan2(otherParticle.y - this.y, otherParticle.x - this.x);
    
            const m1 = this.mass
            const m2 = otherParticle.mass

            const u1 = rotate(this.strong, angle);
            const u2 = rotate(otherParticle.strong, angle);

            const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
            const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
    
            const vFinal1 = rotate(v1, -angle);
            const vFinal2 = rotate(v2, -angle);
    
            this.strong.x = vFinal1.x;
            this.strong.y = vFinal1.y;
    
            otherParticle.strong.x = vFinal2.x;
            otherParticle.strong.y = vFinal2.y;
        }
    }
}
