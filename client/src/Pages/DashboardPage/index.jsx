import React, { Component } from 'react'


import ListingTabs from '../../Components/ListingTabs'
import SearchBar from '../../Components/SearchBar'

export default class DashboardPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: '',
      user: 'User0',
      userLendingListings: {
        available: [1,2,3,4,5],
        loan: [1,2,3,4,5],
      },
      userBorrowing: [1,2,3,4,5],
    }
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    })  
  }

  handleSearch = (e) => {
    if (e.keyCode === 13 && e.target.value !== ''){
      console.log(this.state.search);
      this.setState({
        search: '',
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome back User</h1>

        <SearchBar onChange={this.handleChange}
                   onKeyUp={this.handleSearch}
                   value={this.state.search}/>

        <ListingTabs listingData={{...this.state.userLendingListings,
                                    userBorrowing: this.state.userBorrowing}}/>        
      </div>
    )
  }
}