import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStory } from '../../store/actions';
import { withTheme } from '@material-ui/core/styles';

import StoryList from './components/StoryList';

import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';

class Stories extends Component {

  state = {
    drawerOpen: false,
    title: '',
    type: 'feature',
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };


  toggleDrawer = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  };

  render() {
    return (
      <div>
        <Paper 
          elevation={4}
          style={{
            background: '#fff',
            padding: '1rem 0 1rem 4vw',
            borderRadius: 0,
          }}
        >
          <Slide direction="down" in={true} timeout={500}>
            <h1 style={{
              margin: 0,
              userSelect: 'none',
            }}>
              STORIES
            </h1>
          </Slide>
          <Zoom in={true} timeout={500}>
            <div style={{
                position: 'fixed',
                top: '2.5rem',
                right: 'calc(10vw - 28px)',
                zIndex: this.state.drawerOpen ? '1301' : '',
              }}
            >
              <Fab 
                color={this.state.drawerOpen ? 'secondary' : 'primary'} 
                aria-label="Add"
                onClick={this.toggleDrawer}
                style={{
                  transition: 'all .4s ease-in-out',
                  transform: this.state.drawerOpen ? 'rotate(45deg)' : '',
                }}
              >
                  <AddIcon style={{ fontSize: 30 }} />
              </Fab>
            </div>
          </Zoom>

          <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer}>
            <div
              style={{
                width: '90vw',
                display: 'flex'
              }}
            >
              <form
                autoComplete="off"
                onSubmit={e => {
                  e.preventDefault()
                  if (!this.state.title.trim()) {
                    return
                  }
                  this.props.dispatch(addStory(this.state.title))
                  this.setState({ 
                    title: '',
                    type: 'feature',
                    drawerOpen: false,
                  })
                }}

                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  width: '75vw',
                  marginLeft: '6vw'
                }}
              >
                <Slide direction="right" in={true} timeout={700}>
                  <TextField
                    label="TITLE"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                </Slide>    
        
                <FormControl>
                  <InputLabel htmlFor="type">TYPE</InputLabel>
                  <Select
                    value={this.state.type}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'type',
                      id: 'type',
                    }}
                  >
                    <MenuItem value={'feature'}>FEATURE</MenuItem>
                    <MenuItem value={'bug'}>BUG</MenuItem>
                    <MenuItem value={'miscellaneous'}>MISCELLANOUS</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="contained" color="primary" type="submit" style={{
                  position: 'relative',
                  bottom: '0.2rem',
                  left: '0.2rem',
                  borderRadius: 0,
                  marginTop: '3rem',
                }}>
                  CREATE STORY
                </Button>
              </form>
            </div>
          </Drawer>
        </Paper>
        <div style={{ margin: '2.5rem 3vw 2rem 3vw' }}>
          <StoryList stories={this.props.stories} />
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  stories: state.stories
})

export default connect(mapStateToProps)(withTheme()(Stories));