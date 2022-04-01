import { Simulator } from "./simulator";

export class Tournament {
    simulator: Simulator;
    setSimulator(simulator: Simulator) {
        this.simulator = simulator
    }
    teams: string[];
    execute() {
        if(this.teams.length == 0) {
            return new TournamentResult("Inconclusive")
        }
        return new TournamentResult("Completed")
    }
    constructor(teams: string[]) {
        this.teams = teams

    }

}
export class TournamentResult {
    type: ResultType;
    winner: any;
    constructor(resultType: ResultType) {
        this.type = resultType
        
    }
}


export type ResultType = "Inconclusive" | "Completed";
