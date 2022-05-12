import { Simulator } from "./simulator";
import { Game } from "./game"

export class Tournament {
    simulator: Simulator; 
    teams: string[];
    constructor(teams: string[]) { 
        this.teams = teams 

    }

    setSimulator(simulator: Simulator) { 
        this.simulator = simulator 
    }
    execute() { 
        if(this.teams.length == 0) {
            return new TournamentResult("Inconclusive", null) 
        }
        if(this.teams.length == 1) {
            return new TournamentResult("Completed", this.teams[0]) 
        } 
        const game = new Game(this.teams[0], this.teams[1], this.simulator)
        const winner = game.run()
        return new TournamentResult("Completed", winner)
    }
    
}
export class TournamentResult {
    type: ResultType;
    winner: string;
    constructor(resultType: ResultType, winner: string) { 
        this.type = resultType
        this.winner = winner
        
    }
}


export type ResultType = "Inconclusive" | "Completed";
