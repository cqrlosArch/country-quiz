import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../context/Context';

const ItemStyled = styled.li`
  border: none;
  outline: none;
  color: var(--border);
  border: 2px solid var(--border);
  box-sizing: border-box;
  border-radius: 12px;
  margin-bottom: 1rem;
  min-height: 42px;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  align-items: center;
  align-content: center;
  cursor: pointer;
  ${({ showIcon }) =>
    showIcon &&
    css`
      background-color: ${({ state }) => (state ? '#60bf88' : '#ea8282')};
      border: none;
      color: var(--white);
      pointer-events: none;
    `};
  &:hover {
    border: none;
    background-color: var(--bgHover);
    color: var(--white);
  }
  @media screen and (min-width: 1400px) {
    min-height: 56px;
  }
`;

const ItemNumber = styled.span`
  justify-self: center;

  font-size: 20px;
  @media screen and (min-width: 1400px) {
    font-size: 24px;
  }
`;
const ItemAnswer = styled.p`
  margin: 0;
  margin-left: 2rem;
`;
const ItemCheckIcon = styled.span.attrs(() => ({
  className: 'material-icons',
}))`
  align-items: center;
`;

const Answer = React.memo(({ answer }) => {
  const [state, setState] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const { handleResultQuestion } = useContext(AppContext);

  const handleAnswer = (answer) => {
    setShowIcon(true);
    setState(handleResultQuestion(answer));
  };

  return (
    <ItemStyled
      onClick={() => handleAnswer(answer)}
      state={state}
      showIcon={showIcon}
    >
      <ItemNumber>{answer.index}</ItemNumber>
      <ItemAnswer>{answer.name}</ItemAnswer>
      {showIcon && (
        <ItemCheckIcon>
          {state ? 'check_circle_outline' : 'highlight_off'}
        </ItemCheckIcon>
      )}
    </ItemStyled>
  );
});

export default Answer;
