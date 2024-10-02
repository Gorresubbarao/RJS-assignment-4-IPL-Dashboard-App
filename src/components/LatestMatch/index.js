// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  console.log(competingTeamLogo, 'competingTeamLogo')

  return (
    <div className="latest-match-container">
      <div className="latest-match-details-1">
        <p className="team-name">{competingTeam}</p>
        <p className="venue">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-logo"
      />
      <div className="latest-match-details-1">
        <p className="venue">First Innings</p>
        <p className="venue">{firstInnings}</p>
        <p className="venue">Second Innings</p>
        <p className="venue">{secondInnings}</p>
        <p className="venue">man Of The Match</p>
        <p className="venue">{manOfTheMatch}</p>
        <p className="venue">Umpires</p>
        <p className="venue">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
