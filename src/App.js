import React, {Component} from 'react';
import PostContainer from './components/PostContainer';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    newPost: {

    }
  }

  async componentDidMount(){
    let posts = await fetch('/api/posts').then(res=>res.json());
    this.setState({posts});
  }

  handleChange = (e) => {
    let newPost = {...this.state.newPost};
    newPost[e.target.name] = e.target.value;

    this.setState({
      newPost: {
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/posts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.newPost)
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>My Fuego Takes</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='field-wrapper'>
              <label>Title</label>
              <input 
              type='text'
              onChange={this.handleChange} 
              name='title' 
              value={this.state.newPost.title}></input>
            </div>
            <div className='field-wrapper'>
              <label>Author</label>
              <input 
              type='text'
              onChange={this.handleChange} 
              name='author'
               value={this.state.newPost.author}></input>
            </div>
            <div ty
            pe='text'
            onChange={this.handleChange} 
            className='fi
            eld-wrapper'>
              <label>Body</label>
              <input type='text' name='body' value={this.state.newPost.body}></input>
            </div>

            <input type='submit' value='submit'></input>
          </form>
          
        </header>
        {
          this.state.posts.length
          ? <PostContainer posts={this.state.posts} />
          : <h3 style={{ textAlign: 'center' }}>Loading...</h3>
        }
      </div>
    )
    }
}

export default App;
