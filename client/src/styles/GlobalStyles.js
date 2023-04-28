import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/variables';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  img{
    display: block;
    max-width: 100%;
  }
  body{
    display: grid;
	place-items: center;
	min-height: 100vh;
    margin: 0;
    font-family: sans-serif;
background-color: ${COLORS.bgColor};
font-family:'Outfit', sans-serif;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;

export { GlobalStyles };
