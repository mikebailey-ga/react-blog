import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: []
  }

  async componentDidMount(){
    let posts = await fetch('/api/posts').then(res=>res.json());
    this.setState({posts});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>My Fuego Takes</h1>
        </header>
      </div>
    )
    }
}

export default App;
