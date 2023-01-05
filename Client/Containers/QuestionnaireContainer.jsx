import React from "react";
import Questionnaire from '../Components/Questionnaire.jsx';
import UserContext from "./UserContext.jsx";

const QuestionnaireContainer = () => {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
        <Questionnaire setSum={value.setSum} userId={value.user.id} />
        )
      }}
    </UserContext.Consumer>
  )
}

export default QuestionnaireContainer;