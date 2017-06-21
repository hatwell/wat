import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Info from 'material-ui/svg-icons/action/info';
import FontIcon from 'material-ui/FontIcon';
import {white} from 'material-ui/styles/colors';

  const style = {
    marginRight: 20,
    float: "right"
  };

class HeaderDialog extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      open:false

    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }


  handleOpen() {
    console.log("dialog opened");
    this.setState({open: true});
  };

  handleClose() {
    console.log("cancel clicked")
    this.setState({open: false});
  }

  render() {
    const infoStyle = {
      marginTop: 15
    }

    const actions = [

      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />

    ];

    return (
      <div>
        <Info style={infoStyle} color={white} onClick={this.handleOpen}/>

        <Dialog
          title="about wat"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div className="new-poll-form">
            <p>This is a simple quiz game app created using</p>
            <ul>
              <a href="http://www.material-ui.com/"><li>Material UI</li></a>
              <a href="https://opentdb.com/api_config.php"><li>The Open Trivia Database API</li></a>
              <a href="https://facebook.github.io/react/"><li>React</li></a>
            </ul>
        </div>

        </Dialog>
      </div>
    );
  }
}

export default HeaderDialog;
