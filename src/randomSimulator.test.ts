import { RandomSimulator } from "./randomSimulator";
import seedrandom from "seedrandom";

describe('when simulating a game', () => {
    it('should pick a winner', () => {
        const teamA = "purple team"
        const teamB = "pink team"
        var myrng = seedrandom("0");
        const simulator = new RandomSimulator(myrng)
        expect(simulator.pickWinner(teamA, teamB)).toBe(teamA);
    })
})

describe('when simulating a game with a different seed', () => {
    it('should pick a different winner', () => {
        const teamA = "purple team"
        const teamB = "pink team"
        var myrng = seedrandom("1");
        const simulator = new RandomSimulator(myrng)
        expect(simulator.pickWinner(teamA, teamB)).toBe(teamB);
    })
})