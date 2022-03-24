import { Simulator } from "./simulator";

export class RandomSimulator implements Simulator{
    private rng
    constructor(rng) {
        this.rng = rng
    }
    pickWinner(team1: any, team2: any) {
        if(this.rng() > 0.5) {
            return team1
        }
         return team2
    }

}