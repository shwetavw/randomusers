import React from 'react';
import './App.css';
import { UserCardList } from './components/user-card-list/user-card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      searchValue: ''
    }
  }

  componentDidMount(){
    // const url = 'https://jsonplaceholder.typicode.com/users';
    // fetch(url)
    //   .then(response=> response.json())
    //   .then((users)=> {
    //     this.setState({
    //       monsters: users
    //     })
    //   })
   
    const url = 'https://randomuser.me/api/?results=12';
    fetch(url)
      .then(response=> response.json())
      .then((results)=> {
        this.setState({
          users: results.results
        })
      })
  }

  render(){
    const { users, searchValue } = this.state;
    
    let searchResults;
    if(searchValue === ''){
      searchResults = users;
    }
    else{
      searchResults = users.filter(user => user.name.first.toLowerCase().includes(searchValue.toLowerCase()))
    }
    
    return (
      <div className="App">
        <h1>Random Users</h1>
        <SearchBox
            placeholder="Search user name"
            searchHandler={e=>this.setState({searchValue : e.target.value})}>
        </SearchBox>
         <UserCardList 
            users={searchResults}>        
         </UserCardList>
        
      </div>
    );
  }
}

export default App;
