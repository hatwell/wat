import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper'
import MenuItem from 'material-ui/MenuItem';
import QuizRequestHelper from '../services/QuizRequestHelper'
import FlatButton from 'material-ui/FlatButton'

//adds support for touchTap
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class CategorySelector extends React.Component {


  constructor(props){
    var helper = new QuizRequestHelper()
    super(props)
    this.state = {
      categories: helper.categories,
      selectedIndex: ""
    }

    // this.handleChange = this.handleChange.bind(this)
  }

//   render(){
//
//     return (
//       <BoxComp selIndex={this.state.selectedIndex}   />
//
//
//
//     )
//
// --- in file of component
//
// constructor
// super(props)
//
//
//
// const index = this.props.selIndex
//
//   }













  buildOptions() {
       var arr = this.state.categories.map(function(category, index){
         return <MenuItem key={index} value={index+9} primaryText={category}/>
       })
       return arr;
   }

   handleChange(event){
     //TODO this seems messy
     var category = event.target.innerText
    const index = this.state.categories.indexOf(category) + 9
    console.log(index, category)
    this.setState({ selectedIndex: index});

}


  render(){
    // console.log(this.state)
    return (

      <Paper zDepth={1}>

          <SelectField
            onChange={this.handleChange}
            autoWidth={true}
            maxHeight={200}
            floatingLabelText="Select a Quiz Category!">

            {
              this.buildOptions()
          }

          </SelectField>

          <FlatButton label="select" onClick={this.props.handleSelectButtonClick}/>

      </Paper>
    )
  }

}

export default CategorySelector;
