import './App.css';
import React from 'react';

function App() {
  return(
    <Menu></Menu>
  );
}


class Link extends React.Component{
  render() {
    return <a 
    className="menu-item"
    href={this.props.href}
    target="_blank"
    rel="noopener noreferrer"
    {...this.props}
    >
      {this.props.name}
    </a>;
  }
}

class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pos: '0% 0%',
    };
  }
  handleHover(x){
    this.setState({pos: x});
  }
  render(){
    return(<div id="menu">
    <div id="menu-items">
      <Link href="https://github.com/AntnioB" name="GitHub" onMouseOver={() => this.handleHover('0% -25%')}></Link>
      <Link href="https://www.linkedin.com/in/antonio-brejo/" name="LinkedIn" onMouseOver={() => this.handleHover('0% -50%')}></Link>
      <Link href="https://twitter.com/the_R3set" name="Twitter" onMouseOver={() => this.handleHover('0% -75%')}></Link>
      <Link href="/" name="CV" onMouseOver={() => this.handleHover('0% -100%')}></Link>
    </div>
    <div id="menu-background-pattern" style={{backgroundPosition: this.state.pos}}></div>
  </div>);
  }
}

export default App;