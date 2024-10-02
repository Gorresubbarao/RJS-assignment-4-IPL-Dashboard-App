// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const teamsUrl = 'https://apis.ccbp.in/ipl'
    const response = await fetch(teamsUrl)
    const data = await response.json()
    // console.log(data,"data")

    const updatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({
      teamsData: updatedData,
      isLoading: false,
    })
  }

  teamCardView = () => {
    const {teamsData} = this.state
    return (
      <ul className="teams-list">
        {teamsData.map(eachTeam => (
          <TeamCard teamDeatails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  homeRouteView = () => (
    <div className="content-container">
      <div className="ipl-logo-and-heding-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="logo-img"
        />
        <h1 className="ipl-heading">IPL Dashboard</h1>
      </div>
      {this.teamCardView()}
    </div>
  )

  loadingView = () => (
    <div className="loader-rr">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? this.loadingView() : this.homeRouteView()}
      </div>
    )
  }
}

export default Home
