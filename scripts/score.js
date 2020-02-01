function Score() {
    this.score = 0

    this.getScore = () => {
        return this.score
    }

    this.add = (score) => {
        this.score += score
    }

    this.clear = () => {
        this.score = 0
    }

    this.display = () => {
        fill(0)
        textSize(14);
        text('Score: ' + this.score, width -70, 20)
    }

}