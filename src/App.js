import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          className='Timer'>
          <Timer />
        </p>
        <a 
          className='App-link'
          href='https://github.com/AntnioB'
          target="_blank"
          rel="noopener noreferrer"
          >
            Github
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/antonio-brejo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkdIn
        </a>
        <a
          className="App-link"
          href="https://twitter.com/the_R3set"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </header>
    </div>
  );
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {seconds: 0};
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount(){
    this.interval = setInterval(()=> this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return(
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}
export default App;
