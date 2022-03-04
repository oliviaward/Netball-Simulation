export class Game {
    private team1
    private team2
    constructor(team1?, team2?) {
        this.team1 = team1
        this.team2 = team2
    }
    run() {
        if(this.team2) {
            return this.team2
        }
        if(this.team1){
            return this.team1
        }
        return null
    }
}