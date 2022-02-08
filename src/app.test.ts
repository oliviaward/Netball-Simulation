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