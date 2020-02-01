function State () {
    this.gameOver = false
    this.showStick = true

    this.setGameOver = (stateGame) => {
        this.gameOver = stateGame
    }

    this.getGameOver = () => {
        return this.gameOver
    }

    this.setShowStick = (stateStick) => {
        this.showStick = stateStick
    }

    this.getShowStick = () => {
        return this.showStick
    }
}