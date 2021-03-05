import React, { useContext } from 'react';
import styled from 'styled-components';
import Answer from './Answer';
import { AppContext } from '../context/Context';

const ListStyled = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 1.3rem;
`;

const List = () => {
  const { listAnswers } = useContext(AppContext);
  return (
    <ListStyled>
      {listAnswers.map((answer) => (
        <Answer answer={answer} key={answer.id} />
      ))}
    </ListStyled>
  );
};

export default List;
