function State () {
    this.gameOver = false
    this.showStick = true

    return {
        setGameOver: (stateGame) => {
            this.gameOver = stateGame
        },
    
        getGameOver: () => {
            return this.gameOver
        },
    
        setShowStick: (stateStick) => {
            this.showStick = stateStick
        },
    
        getShowStick: () => {
            return this.showStick
        }
    }
}