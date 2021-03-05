import styled from 'styled-components';
import Loader from 'react-loader-spinner';
const LoadingStyled = styled(Loader)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = () => {
  return <LoadingStyled type="ThreeDots" color="#2F527B"></LoadingStyled>;
};

export default Loading;
