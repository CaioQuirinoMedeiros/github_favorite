import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0;

  .wrapper-column {
    display: inline-block;
  }

  h1 {
    color: #f5f5f5;
    font-size: 250%;
    display: inline;
  }

  .wrapper-row {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px 30px;
  }

  a {
    text-decoration: none;
    color: #63f5b0;
    font-weight: bold;
    font-size: 120%;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`

