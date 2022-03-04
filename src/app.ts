export class Game {
    private team
    constructor(team1?, team2?) {
        this.team = team1
    }
    run() {
        if(this.team){
            return this.team
        }
        return null
    }
}