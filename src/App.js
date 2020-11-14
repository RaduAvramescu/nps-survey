import React, { Component } from "react";
import "./App.css";
import { SurveyComponent, FinalPage } from "./components";

export default class App extends Component {
  state = {};

  handleComplete = () => {
    this.setState({ isCompleted: true });
  };

  render() {
    const { isCompleted } = this.state;
    var showSurvey = !isCompleted && (
      <SurveyComponent onComplete={this.handleComplete} />
    );

    var showFinalPage = isCompleted && <FinalPage />;

    return (
      <React.Fragment>
        {showSurvey}
        {showFinalPage}
      </React.Fragment>
    );
  }
}
