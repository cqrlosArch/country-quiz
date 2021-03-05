import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/Context';

const QuestionStyled = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: var(--colorQuestion);
  margin-top: 2rem;
  @media screen and (min-width: 1400px) {
    font-size: 24px;
  }
`;

const Question = () => {
  const { question, typeQuestion } = useContext(AppContext);

  return (
    <QuestionStyled>
      {typeQuestion === 'capital'
        ? `${question.title} is the capital of`
        : 'Which country does this flag belong to?'}
    </QuestionStyled>
  );
};

export default Question;
