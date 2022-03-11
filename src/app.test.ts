import { Game } from "./app"

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
describe('When simulating a game where the second team wins', () => {
    it('Should return the second team as the winner', () => {
        const losingTeam = "green team"
        const winningTeam = "yellow team"
        const game = new Game(losingTeam, winningTeam)
        const winner = game.run()
        expect(winner).toBe(winningTeam)
    })
})
describe('When simulating a game where the first team wins', () => {
    it('Should return the first team as the winner', () => {
        const winningTeam = "yellow team"
        const losingTeam = "green team"
        const game = new Game(winningTeam, losingTeam)
        const winner = game.run()
        expect(winner).toBe(winningTeam)
    })
})

//When simulating a game where a random team wins
//When simulating a game where the better team wins
//Adding WLD to team data after result is returned
//Creating an agenda so all teams play against eachother
//Ranking team against opponent
//Ranking team against external leaderboard
//Determining a quarter final
//Determining a semi final based of quarter results
//Determinging a final based off semi results
//Publishing end of season league results
