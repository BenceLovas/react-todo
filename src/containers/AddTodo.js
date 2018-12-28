import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Slide from '@material-ui/core/Slide';

class AddTodo extends Component {

  state = {
    title: '',
    open: false,
    lastAdded: '',
  }
  
  handleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={700}>
          <form
            onSubmit={e => {
              e.preventDefault()
              if (!this.state.title.trim()) {
                return
              }
              this.props.dispatch(addTodo(this.state.title))
              this.setState({ 
                title: '',
                open: true,
                lastAdded: this.state.title,
              })
            }}

            style={{
              display: 'flex',
              alignItems: 'baseline',
            }}
          >
            <TextField
              label="TITLE"
              value={this.state.title}
              onChange={this.handleChange}
              margin="normal"
            />
    
            <Button variant="contained" color="primary" type="submit" style={{
              position: 'relative',
              bottom: '0.2rem',
              left: '0.2rem',
              borderRadius: 0,
            }}>
              CREATE PROJECT
            </Button>
          </form>
        </Slide>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Project: <b>{this.state.lastAdded}</b>, created.</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />  

      </div>
    )
  }
}

export default connect()(AddTodo)