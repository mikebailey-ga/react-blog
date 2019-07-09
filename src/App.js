import React, {Component} from 'react';
import PostContainer from './components/PostContainer';
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
          <button>New Post</button>
        </header>
        <PostContainer posts={this.state.posts} />
      </div>
    )
    }
}

export default App;
