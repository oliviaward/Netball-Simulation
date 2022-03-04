export class Game {
    private team
    constructor(team?) {
        this.team = team
    }
    run() {
        if(this.team !== undefined){
            return this.team
        } else {
            return null
        }
    }
}