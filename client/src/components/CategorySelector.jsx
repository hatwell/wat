import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper'
import MenuItem from 'material-ui/MenuItem';
import QuizRequestHelper from '../services/QuizRequestHelper'

//adds support for touchTap
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const style = {

}



class CategorySelector extends React.Component {


  constructor(props){
    var helper = new QuizRequestHelper()
    console.log(helper);
    super(props)
    this.state = {
      categories: helper.categories
    }
  }

  buildOptions() {
       var arr = [];

       for (let i = 0; i < this.state.categories.length; i++) {
         console.log("i", i, this.state.categories[i])
           arr.push(<MenuItem value={i+9} primaryText={this.state.categories[i]}></MenuItem>)

       }

       return arr;
   }


  render(){
    console.log(this.state)
    return (

      <Paper zDepth={1}>

          <SelectField
            autoWidth={true}
            maxHeight={200}
            style = {style}
            floatingLabelText="Select a Quiz Category!">

            {
              this.buildOptions()
          }

          </SelectField>

      </Paper>
    )
  }

}

export default CategorySelector;
