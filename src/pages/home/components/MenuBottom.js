import React, { Component } from 'react';
import './MenuBottom.css';

class MenuBottom extends Component {

  state = {
    menuToggled: false,
  }

  toggleMenu = () => {
    if (this.state.menuToggled) {
      this.menuItem1.style.transform = 'translate3d(0, 0 ,0)';
      this.menuItem2.style.transform = 'translate3d(0, 0 ,0)';
      this.menuItem3.style.transform = 'translate3d(0, 0 ,0)';
      this.menuButton.style.transform = 'scale(1.0,1.0)';
    } else {
      setTimeout(() => {
        this.menuItem1.style.transform = 'translate3d(-115px, 0 ,0)'
        this.menuItem2.style.transform = 'translate3d(-115px, 0 ,0)'
        this.menuItem3.style.transform = 'translate3d(-115px, 0 ,0)'
      }, 0);
      setTimeout(() => {
        this.menuItem1.style.transform = 'translate3d(-85px, -85px ,0)'
        this.menuItem2.style.transform = 'translate3d(-85px, -85px ,0)'
      }, 100)
      setTimeout(() => this.menuItem2.style.transform = 'translate3d(0, -115px ,0)', 200);
      this.menuButton.style.transform = 'scale(0.8,0.8)';
    }
    this.setState({ menuToggled: !this.state.menuToggled })
  }


  render() {
    const classForMenuIcon = this.state.menuToggled ? 'hamburger-menu animate' : 'hamburger-menu';

    return (
      <div style={{ height: '700px' }}>
        <nav className="menu" style={{ height: '700px', width: '100vw' }}>
          <div 
            id="item" 
            className="goo-menu"
            ref={(ele) => this.menuItem1 = ele}
          >
          </div>    
          <div 
            id="item2"
            className="goo-menu"
            ref={(ele) => this.menuItem2 = ele}
          >
          </div>    
          <div
            id="item3"
            className="goo-menu"
            ref={(ele) => this.menuItem3 = ele}
          >
          </div>    

          <div id="button" className="goo-menu" onClick={this.toggleMenu} ref={(ele) => this.menuButton = ele}>
            <div className="menu-wrapper">
              <div id="hamburger-menu" className={classForMenuIcon}></div>	  
            </div>
          </div>    
        
        </nav>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="shadowed-goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feGaussianBlur in="goo" stdDeviation="5" result="shadow" />
                  <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                  <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                  <feBlend in2="shadow" in="goo" result="goo" />
                  <feBlend in2="goo" in="SourceGraphic" result="mix" />
              </filter>
              <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feBlend in2="goo" in="SourceGraphic" result="mix" />
              </filter>
            </defs>
        </svg>
      </div>
    )
  }
}

export default MenuBottom;