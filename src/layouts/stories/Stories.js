import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import { withTheme } from '@material-ui/core/styles';


class Stories extends Component {

  state = {
    drawerOpen: false,
  }

  toggleDrawer = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  };

  render() {
    return (
      <Paper 
        elevation={4}
        style={{
          background: '#fff',
          padding: '1rem 0 1rem calc(10vw - 28px)',
          borderRadius: 0,
        }}
      >
        <h1 style={{
          margin: 0,
          userSelect: 'none',
        }}>
          STORIES
        </h1>
        <Fab 
          color={this.state.drawerOpen ? 'secondary' : 'primary'} 
          aria-label="Add"
          onClick={this.toggleDrawer}
          style={{
            position: 'fixed',
            top: '2.5rem',
            right: 'calc(10vw - 28px)',
            zIndex: this.state.drawerOpen ? '1301' : '',
            transition: 'all .4s ease-in-out',
            transform: this.state.drawerOpen ? 'rotate(45deg)' : '',
          }}
        >
            <AddIcon style={{ fontSize: 30 }} />
        </Fab>

        <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
            style={{
              width: '90vw',
            }}
          >
          </div>
        </Drawer>
      </Paper>
    )
  }

}

export default withTheme()(Stories);