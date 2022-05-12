import { Simulator } from "./simulator";

export class StubbedSimulator implements Simulator {
    private winner;
    private simulations = {};
    setWinner(winner) {
        this.winner = winner;
    }
    pickWinner(team1, team2) {
        if(this.winner !== undefined) {
            return this.simulations[team1][team2]
        }
        return this.winner;
    }
    mockSimulation(team1, team2, firstTeamWins = true) {
        let winner = team2
        if( firstTeamWins) {
            winner = team1
        }


        this.simulations[team1] = {}
        this.simulations[team1] = this.simulations[team1] || {}
        this.simulations[team1][team2] = winner
        this.simulations[team2] = {}
        this.simulations[team2] = this.simulations[team2] || {}
        this.simulations[team2][team1] = winner
    }
}
