import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 15px 60px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #273a47;
`;

export const Form = styled.form`
  width: 70%;
  min-width: 500px;
  display: flex;
  flex-direction: column;

  .wrapper-row {
    width: 100%;
    display: flex;
  }

  input {
    font-family: inherit;
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 2px solid transparent;
    margin: 10px;
    font-size: 18px;
    color: #333;
    border-radius: 3px;

    border: ${props => (props.error ? '2px solid #f00' : 'none')};
  }

  button {
    width: 100px;
    height: 55px;
    padding: 0 15px;
    margin: 10px;
    background: #52d89f;
    color: #fff;
    border: none;
    font-size: 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #40c68c;
    }
  }

  span {
    margin: 5px 10px;
    color: #f00;
    font-weight: 500;
  }
`;

export const Pagination = styled.div`
  width: 70%;
  min-width: 500px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
  }

  button {
    margin: 5px 10px;
    height: 35px;
    border-radius: 50%;
    outline: none;
    border: none;
    background: none;
    font-size: 130%;
    font-weight: bold;
    color: #63f5b0;
    cursor: pointer;
  }
`;

export const Lista = styled.ul`
  width: 70%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  color: #222;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background: #40c68c;
    outline: 1px solid slategrey;
  }

  li {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 3px;
    margin: 5px 10px;
    background: #f7f7f7;

    & .wrapper-row {
      display: flex;
      flex-direction: row;
      margin-left: 15px;
    }

    & a {
      font-weight: bold;
      transition: all 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }

    & button {
      margin-left: 20px;
      color: #222;
      font-size: 100%;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})``;
