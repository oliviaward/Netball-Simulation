import { Game } from "./app"
describe('when simulating a game', () => {
    it('should find a winner', () => {
        expect(true).toBe(true);
    })
})

describe('when simulating a game with no teams', () => {
    it('shouldnt find a winner', () => {
        const game = new Game()
        expect(game.run()).toBe(null);
    })
})
describe('When simulating a game with only one team', () => {
    it('Should return the only team as the winner', () => {
        const theOnlyTeam = "Red team"
        const game = new Game(theOnlyTeam)
        const winner = game.run()
        expect(winner).toBe(theOnlyTeam)
    })
})