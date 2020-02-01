function Stick(x, y) {
    this.x = x
    this.y = y
    this.show = true
    this.strong = {
        x: 0,
        y: 0
    }

    this.update = (x, y, showStick) => {
        this.x = x
        this.y = y
        this.show = showStick
    }

    this.display = () => {
        if (this.show == true) {
            let r = 180
            let angle = map(mouseX, 0, width, 50, 75)
            let dx = r * cos(angle)
            let dy = r * sin(angle)
            
            this.strong.x = dx / 360 * 15
            this.strong.y = dy / 360 * 15

            stroke(100, 50, 42)
            strokeWeight(6)
            line(this.x, this.y, this.x + dx, this.y+ dy)
        }

    }
}