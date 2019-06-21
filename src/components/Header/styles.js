import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #1a2730;

  h1 {
    color: #f5f5f5;
    text-align: center;
    font-size: 250%;
    flex: 5;
  }

  div {
    flex: 3;
    display: flex;
    justify-content: flex-end;
    justify-self: flex-end;
  }

  a {
    cursor: pointer;
    border: none;
    margin-left: 20px;
    text-decoration: none;
    color: #63f5b0;
    font-weight: bold;
    font-size: 120%;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
