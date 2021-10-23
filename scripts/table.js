function Table(x, y, height, width) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.roles = []
    this.PositionRole = {
        top: 80,
        middle: 310,
        down: 550,
        left: 80,
        right: 400
    }

    this.displayRole = (x, y, diametter) => {
        let shadow = (x <= 90) ? -2 : 2
        fill(60, 100, 100)
        circle(x + shadow, y, diametter+1) 
        fill(60, 160, 100)
        circle(x, y, diametter)             
    }
    
    this.displayRoles = () => {
        for (let i = 0; i < this.roles.length; i++) {
            this.displayRole(this.roles[i].x, this.roles[i].y, this.roles[i].diametter)
        }        
    }

    this.createRoles = () => {
        this.roles.push({x: this.PositionRole.left,  y: this.PositionRole.top,    diametter: 25})
        this.roles.push({x: this.PositionRole.left,  y: this.PositionRole.middle, diametter: 25})
        this.roles.push({x: this.PositionRole.left,  y: this.PositionRole.down,   diametter: 25})
        this.roles.push({x: this.PositionRole.right, y: this.PositionRole.top,    diametter: 25})
        this.roles.push({x: this.PositionRole.right, y: this.PositionRole.middle, diametter: 25})
        this.roles.push({x: this.PositionRole.right, y: this.PositionRole.down,   diametter: 25})
    }
    
    this.createObjects = () => {
        this.createRoles()
    }

    this.display = () => {
        noStroke()

        fill(100, 40, 0)
        quad(x-20, y-20, 
             (this.width + x) +20, y-20, 
             (this.width + x) +20, height+20, 
             x-20, height+20)

        fill(60, 250, 100)
        quad(x-10, y-10, 
             (this.width + x) +10, y-10, 
             (this.width + x) +10, height+10, 
             x-10, height+10)
    
        fill(60, 160, 100)
        quad(x, y, 
             (this.width + x), y, 
             (this.width + x), this.height, 
             x, this.height)
            
            this.displayRoles()
    }   

    this.createObjects()
}