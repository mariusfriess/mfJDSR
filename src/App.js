import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

import Home from './components/Home/Home';
import Tasks from './components/Tasks/Tasks';
import Events from './components/Events/Events';
import Account from './components/Account/Account';
import BottomNav from './components/Nav/BottomNav';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import firebase from './firebase';

class App extends Component {

  state = {
    open: false
  }

  openDialog(){
    this.setState({open: true})
  }

  closeDialog(){
    this.setState({open: false})
  }

  componentWillMount(){
    console.log(firebase.auth().currentUser);
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <span onClick={this.openDialog.bind(this)} className="beta">Beta</span>
            <div className="appContent">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tasks" component={Tasks} />
                <Route path="/events" component={Events} />
                <Route path="/account" component={Account} />
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </div>
            <BottomNav />

            <Dialog
              open={this.state.open}
              onClose={this.closeDialog.bind(this)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Aktuell in der Beta-Phase</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Dieses Feature befindet sich noch in der Beta-Phase und wird aktuell getestet. Dies bedeutet, dass eventuell
                  noch nicht alle Funktionen verfügbar sind oder Fehler beim ausführen verschiedener Funktionen auftreten können.
                  <br></br><br></br>Voraussichtliche Fertigstellung: Q2, 2019
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.closeDialog.bind(this)} color="primary">
                  Schließen
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
