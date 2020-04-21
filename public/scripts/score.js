function Score() {
    this.score = 0

    return {
        getScore: () => {
            return this.score
        },
    
        add: (score) => {
            this.score += score
        },
    
        clear: () => {
            this.score = 0
        },
    
        display: () => {
            fill(0)
            textSize(14);
            text('Score: ' + this.score, width -70, 20)
        }
    }

}