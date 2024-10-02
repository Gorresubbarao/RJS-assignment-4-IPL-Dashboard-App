// Write your code here

import './index.css'

const MatchCard = props => {
  const {teamDeatails} = props
  const {matchStatus, competingTeam, result, competingTeamLogo} = teamDeatails

  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-img"
      />
      <h1 className="team-name-text">{competingTeam}</h1>
      <p className="result-text">{result}</p>
      <p className="result-text">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
