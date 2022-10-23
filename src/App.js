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
    class="menu-item"
    href={this.props.href}
    target="_blank"
    rel="noopener noreferrer"
    >
      {this.props.name}
    </a>;
  }
}

class Menu extends React.Component{
  render(){
    return(<div id="menu">
    <div id="menu-items">
      <Link href="https://github.com/AntnioB" name="GitHub"></Link>
      <Link href="https://www.linkedin.com/in/antonio-brejo/" name="LinkedIn"></Link>
      <Link href="https://twitter.com/the_R3set" name="Twitter"></Link>
      <Link href="/" name="GitHub"></Link>
    </div>
    <div id="menu-background-pattern"></div>
  </div>);
  }
}

export default App;