import { createGlobalStyle } from 'styled-components';
import { AppContextProvider } from './context/Context';
import CardQuestion from './components/CardQuestion';

const GlobalStyled = createGlobalStyle`
  html{
    font-size:16px;
    box-sizing:border-box;
    background: url('./images/background.png') no-repeat;
    background-size:cover;
   }

   :root{
     --white:#fff;
     --title:#f2f2f2;
     --colorQuestion:#2F527B;
     --border:rgba(96, 102, 208, 0.7);
     --bgHover:#F9A826;
   }

   *,
   *::after,
   *::before{
     box-sizing:inherit
   }

  body{
    margin:0;
    min-height:100vh;
    font-family: 'Poppins', sans-serif;
    display:grid;
    place-items:center;
    position: relative;
    
  }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <AppContextProvider>
        <CardQuestion />
      </AppContextProvider>
    </>
  );
}

export default App;
