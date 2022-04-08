import { Simulator } from "./simulator";
import { Game } from "./game"

export class Tournament {
    simulator: Simulator; //This is our copy of the rule set
    teams: string[]; //This is our copy of the teams
    constructor(teams: string[]) { //Someone has asked a tournamnet to be run with these teams 
        this.teams = teams //Copy down those teams in our own notes

    }

    setSimulator(simulator: Simulator) { //Ref has specified the rule set
        this.simulator = simulator //We copy down the rule set in our notes
    }
    execute() { //The tournamnet begins
        if(this.teams.length == 0) { //Checks if there are any teams in the tournamnet
            return new TournamentResult("Inconclusive", null) //If there are no teams, the result is inconclusive
        }
        if(this.teams.length == 1) {
            return new TournamentResult("Completed", this.teams[0]) //If there is 1 or more teams, the tournament can go ahead
        } 
        //We wan to figure out a rosta so every team can play eachother
        const game = new Game(this.teams[0], this.teams[1], this.simulator)
        //We then want those games to actually be simualted
        const winner = game.run()
        //We want to produce a result for these games (winner & loser)
        return new TournamentResult("Completed", winner)
        //Then store this result on a league table
        //Return league table
    }
    
}
export class TournamentResult {
    type: ResultType;
    winner: string;
    constructor(resultType: ResultType, winner: string) { //Emailing the person that asked for the tournament to be run, we are telling them if the tournamnet was finished and the winner. 
        this.type = resultType
        this.winner = winner
        
    }
}


export type ResultType = "Inconclusive" | "Completed";
