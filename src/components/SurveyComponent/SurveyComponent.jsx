import surveyData from "../../data/surveyData.json";
import "survey-react/survey.css";
import * as Survey from "survey-react";

const SurveyComponent = ({ onComplete }) => {
  var model = new Survey.Model(surveyData);

  return (
    <Survey.Survey
      model={model}
      showCompletedPage={false}
      onComplete={onComplete}
    />
  );
};

export default SurveyComponent;
