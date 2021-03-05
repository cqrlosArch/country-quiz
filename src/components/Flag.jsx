import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/Context';
const FlagStyled = styled.div`
  width: 75px;
  height:max-content;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.5);
`;

const FlagImg = styled.img`
  display: block;
  
  object-fit: cover;
  max-width: 100%;
`;

const Flag = () => {
  const { question } = useContext(AppContext);
  return (
    <FlagStyled>
      <FlagImg src={question.title} alt="flag" />
    </FlagStyled>
  );
};

export default Flag;
