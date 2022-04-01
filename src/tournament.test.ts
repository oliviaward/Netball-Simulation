import { ResultType, Tournament } from "./tournament"

describe('When simulating a tournament with no teams', () => {
    it('should return an inconclusive result', () => {
        //Arrange
        const tournament = new Tournament([])
        //Act
        var result = tournament.execute()
        //Assert
        expect(result.type).toBe("Inconclusive")
    })
})

describe('When simulating a tournament with only one team', () => {
    it('Should return the only team as the winner', () => {
        //Arrange
        const theOnlyTeam = "Red team"
        const tournament = new Tournament([theOnlyTeam])
        //Act
        var result = tournament.execute()
        //Assert
        expect(result.type).toBe("Completed")
    })
})