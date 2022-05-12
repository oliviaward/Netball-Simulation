import { ResultType, Tournament } from "./tournament"
import { StubbedSimulator } from "./stubbedSimulator"


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

describe('When simulating a tournament with two teams', () => {
    it('Should pick the winner picked by the simulator', () => {
        //Arrange
        const winningTeam = "black team"
        const losingTeam = "orange team"
        const tournament = new Tournament([winningTeam, losingTeam])
        const simulator = new StubbedSimulator()
        simulator.setWinner(winningTeam)
        tournament.setSimulator(simulator)
        //Act
        var result = tournament.execute()
        //Assert
        expect(result.type).toBe("Completed")
        expect(result.winner).toBe(winningTeam)
    })
})

describe('When simulating a tournament with three teams', () => {
    it('Pick a winner picked by the simulator', () => {
        //Arrange
        const winningTeam = "winning team"
        const otherTeam = "middle team"
        const otherOtherTeam = "losing team"
        const tournament = new Tournament([otherTeam, otherOtherTeam, winningTeam])
        const simulator = new StubbedSimulator()
        simulator.mockSimulation(otherTeam, otherOtherTeam, true)
        simulator.mockSimulation(otherTeam, winningTeam, false)
        simulator.mockSimulation(winningTeam, otherOtherTeam, true)
        tournament.setSimulator(simulator)
        //Act
        var result = tournament.execute()
        //Assert
        expect(result.type).toBe("Completed")
        expect(result.winner).toBe(winningTeam)
    })
})