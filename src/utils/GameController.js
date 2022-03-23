class GameController{
    // SUM OF SQUARE OR ROW/COL MUST BE 45

    constructor(){
        this.score = 0;
        this.board = this.initBoard();
    }
    initBoard(){
        //Initialize empty grid
        const board = [];

        for (let i = 0; i < 9; i ++){
            board.push([0,0,0,0,0,0,0,0,0]);
        }
        return board;
    }
}

export default GameController;