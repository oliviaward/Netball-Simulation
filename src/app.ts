export class Game {
    private team
    constructor(team?) {
        this.team = team
    }
    run() {
        if(this.team){
            return this.team
        }
        return null
    }
}