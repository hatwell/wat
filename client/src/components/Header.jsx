import React from 'react';
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

class Header extends React.Component {

  render(){
      return (
        <Toolbar className = "color-highlight header-bar">
          <ToolbarGroup>
          <ToolbarTitle className="app-title" text="w  a  t"/>
          <FontIcon className="muidocs-icon-custom-sort" onClick={this.props.openDialog} />
      </ToolbarGroup>
       </Toolbar>
    )
  }

}

export default Header
