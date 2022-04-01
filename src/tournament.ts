export class Tournament {
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
    constructor(resultType: ResultType) {
        this.type = resultType
        
    }
}


export type ResultType = "Inconclusive" | "Completed";
