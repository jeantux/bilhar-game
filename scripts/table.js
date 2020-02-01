function Table(x, y, height, width) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.roles = []

    this.displayRole = (x, y, diametter) => {
        let shadow
        if (x <= 90)
            shadow = -2
        else    
            shadow = 2

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
        this.roles.push({x: 80, y: 80, diametter: 25})// top, left 
        this.roles.push({x: 80, y: 310, diametter: 25})// middle, left
        this.roles.push({x: 80, y: 550, diametter: 25})// down, left
        this.roles.push({x: 400, y: 80, diametter: 25})// top, right
        this.roles.push({x: 400, y: 310, diametter: 25})// middle, right
        this.roles.push({x: 400, y: 550, diametter: 25})// down, right
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
}