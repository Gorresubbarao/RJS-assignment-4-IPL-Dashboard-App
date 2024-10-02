// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

import './index.css'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {
    letestMatchData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getMatcheData()
  }

  fechedataConvertedToCamalCase = object => ({
    umpires: object.umpires,
    result: object.result,
    manOfTheMatch: object.man_of_the_match,
    id: object.id,
    date: object.date,
    venue: object.venue,
    competingTeam: object.competing_team,
    competingTeamLogo: object.competing_team_logo,
    firstInnings: object.first_innings,
    secondInnings: object.second_innings,
    matchStatus: object.match_status,
  })

  getMatcheData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`${teamMatchesApiUrl}${id}`)
    const fetchedData = await response.json()

    const formattedData = {
      teamBannerURL: fetchedData.team_banner_url,
      latestMatch: this.fechedataConvertedToCamalCase(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.fechedataConvertedToCamalCase(eachMatch),
      ),
    }

    this.setState({
      letestMatchData: formattedData,
      isLoading: false,
    })
  }

  matchCardView = () => {
    const {letestMatchData} = this.state

    const {recentMatches} = letestMatchData
    console.log(recentMatches, 'recentMatches')
    return (
      <ul className="match-card-list">
        {recentMatches.map(eachTeam => (
          <MatchCard teamDeatails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  teamRouteView = () => {
    const {letestMatchData} = this.state
    const {teamBannerURL, latestMatch} = letestMatchData

    return (
      <div className="team-route-content-container">
        <img
          src={teamBannerURL}
          alt="team banner"
          className="team-banner-img"
        />
        <p className="letest-matches-text">Letest Matches</p>
        <LatestMatch latestMatchDetails={latestMatch} />
        {this.matchCardView()}
      </div>
    )
  }

  loadingView = () => (
    <div className="loader" data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="team-matches-container">
        {isLoading ? this.loadingView() : this.teamRouteView()}
      </div>
    )
  }
}

export default TeamMatches
