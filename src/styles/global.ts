import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: linear-gradient(162.46deg, #0fb1f5 0%, #3A7BD5 100%);
}

::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 100px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
 
  background: #ddd;

}

    html{
        @media (max-width: 400px) {
            font-size: 90%;
        }

        @media (max-width: 330px) {
            font-size: 80%;
        }
    }

    html,body {
        height: calc(100vh + 20px) ;
    }

    body{
        background: linear-gradient(162.46deg, #00D2FF 0%, #3A7BD5 100%);
    }
`
