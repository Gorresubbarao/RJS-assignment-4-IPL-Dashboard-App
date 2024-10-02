// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDeatails} = props
  const {teamImageUrl, id, name} = teamDeatails

  return (
    <Link className="link" to={`team-matches/${id}`}>
      <li className="teamitem">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="team-name-text">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
