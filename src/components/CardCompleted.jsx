import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/Context';

const CardCompletedStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardCompletedImg = styled.img`
  max-width: 70%;
`;
const CardCompletedH2 = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 38px;
  line-height: 72px;
  color: var(--colorQuestion);
  margin-bottom: 0;
`;
const CardCompletedText = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
  color: #1d355d;
  & span {
    color: #6fcf97;
    font-weight: 700;
    font-size: 30px;
    margin: 0 0.3rem;
  }
`;
const CardCompletedButton = styled.button`
  outline: none;
  border: none;
  border: 2px solid #1d355d;
  box-sizing: border-box;
  border-radius: 12px;
  width:200px;
  background-color:transparent;
  padding:.8rem 2rem;
  font-size: 1.2rem;
  text-align: center;
  color: #1d355d;
  font-weight:700;
  cursor: pointer;
  &:hover{
    border: none;
    background-color: var(--bgHover);
    color: var(--white);
  }
`;

const CardCompleted = () => {
  const { resultCounter,resetQuiz } = useContext(AppContext);
  return (
    <CardCompletedStyled>
      <CardCompletedImg src="./images/undraw_winners_ao2o 2.svg" alt="winner" />
      <CardCompletedH2>Results</CardCompletedH2>
      <CardCompletedText>
        You got <span>{resultCounter}</span>correct answer
      </CardCompletedText>
      <CardCompletedButton onClick={resetQuiz}>Try again</CardCompletedButton>
    </CardCompletedStyled>
  );
};

export default CardCompleted;
