import styled from 'styled-components';
import List from './List';
import Question from './Question';
import { AppContext } from '../context/Context';
import Loading from './Loading';
import { useContext } from 'react';
import CardCompleted from './CardCompleted';
import Flag from './Flag';

const CardStyled = styled.div`
  background-color: var(--white);
  max-width: 350px;
  min-height: 415px;
  border-radius: 24px;
  position: relative;
  padding: 1rem;
  &::before {
    content: 'COUNTRY QUIZ';
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    color: var(--white);
    font-weight: 700;
    font-size: 1.75rem;
    color: var(--title);
    @media screen and (min-width: 1400px) {
      font-size: 2.25rem;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%);
    width: 120px;
    height: 100px;
    background: ${({ resultShow }) =>
      !resultShow && 'url("./images/undraw_adventure_4hum 1.svg") no-repeat'};
    background-size: 100%;
    @media screen and (min-width: 1400px) {
      transform: translateY(-65%);
      width: 150px;
    }
  }

  @media screen and (min-width: 1400px) {
    width: 464px;
    height: 515px;
  }
`;

const CardQuestion = () => {
  const { isLoading, resultShow, typeQuestion } = useContext(AppContext);
  return (
    <CardStyled resultShow={resultShow}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!resultShow && typeQuestion === 'flag' && <Flag />}
          {!resultShow && <Question />}
          {!resultShow && <List />}
          {resultShow && <CardCompleted />}
        </>
      )}
    </CardStyled>
  );
};

export default CardQuestion;
