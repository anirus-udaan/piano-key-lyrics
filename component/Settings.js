import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

export default class Settings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      metronome: 1000,
      bpm: 60,
      bpmValidationText: "Enter valid bpm"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({
      metronome: 60000 / e.target.value,
      bpm: e.target.value
    });
  }

  getValidationState() {
    return 'success';
  }

  isSubmitDisabled() {
    if (isNaN(this.state.bpm)) {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit(e) {
    console.log("submitting")
    console.log(e.value);
  }

  render () {
    var bpmValidationText = "Enter valid bpm";
    if (isNaN(this.state.bpm)) {
      bpmValidationText = "Valid bpm should be a number";
    } else {
      bpmValidationText = "";
    }
    
    return(
      <div className="settings">
        <form onSubmit={this.handleSubmit}>
          <h2>Settings</h2>
          <FormGroup 
          controlId="formBasicText"
          validationState={this.getValidationState()}>
            <ControlLabel>Beats/Min (bpm)</ControlLabel>
            <FormControl type="text"
            value={this.state.bpm}
            placeholder={this.state.bpm}
            onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>
              {this.state.metronome} {bpmValidationText}  {this.getValidationState()}
            </HelpBlock>
          </FormGroup>
          <FormGroup>
            <Button type="submit" disabled={this.isSubmitDisabled()}>
            Confirm
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
