import { Simulator } from "./simulator"

export class Game {
    private team1
    private team2
    private simulator: Simulator
    constructor(team1?, team2?, simulator?: Simulator) {
        this.team1 = team1
        this.team2 = team2
        this.simulator = simulator
    

    }
    run() {
        if(!this.team1 && !this.team2) {
            return null 
        }
        if(!this.team2){
            return this.team1
        }
        return this.simulator.pickWinner(this.team1, this.team2)
    }
}

