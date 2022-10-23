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
      posBg: '0% 0%',
      posImg: 'center 20%'
    };
  }
  handleHover(x, y){
    this.setState({posBg: x, posImg: y});
  }
  render(){
    return(<div id="menu">
    <div id="menu-items">
      <Link href="https://github.com/AntnioB" name="GitHub" onMouseOver={() => this.handleHover('0% -25%','center 20%')}></Link>
      <Link href="https://www.linkedin.com/in/antonio-brejo/" name="LinkedIn" onMouseOver={() => this.handleHover('0% -50%', 'center 40%')}></Link>
      <Link href="https://twitter.com/the_R3set" name="Twitter" onMouseOver={() => this.handleHover('0% -75%', 'center 60%')}></Link>
      <Link href="/" name="CV" onMouseOver={() => this.handleHover('0% -100%', 'center 80%')}></Link>
    </div>
    <div id="menu-background-pattern" style={{backgroundPosition: this.state.posBg}}></div>
    <div id="menu-background-image"style={{backgroundPosition: this.state.posImg}}></div>
  </div>);
  }
}

export default App;