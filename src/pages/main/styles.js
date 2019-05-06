import styled from "styled-components";

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 10%;
  position: relative;

  .wrapper-row {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: none;
    margin: 5px 10px;
    font-size: 18px;
    color: #333;
    border-radius: 3px;

    border: ${props => (props.withError ? "2px solid #f00" : "none")};
  }

  button {
    width: 120px;
    height: 55px;
    padding: 0 20px;
    margin: 5px 10px;
    background: #63f5b0;
    color: #fff;
    border: none;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #52d89f;
    }
  }

  span {
    padding: 10px 0 0 10px;
    color: #fff;
    font-size: 120%;
    font-weight: 500;
  }
`;

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
  list-style: none;

  li {
    padding: 0 10px;

    button {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      outline: none;
      border: none;
      background: none;
      font-size: 130%;
      font-weight: bold;
      color: #63f5b0;
      cursor: pointer;
    }

    .active {
      background-color: #52d89f;
      color: #fff;
    }
  }
`;

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  color: #222;

  .wrapper-row {
    display: flex;
    flex-direction: row;
    margin-left: 15px;
  }
  .wrapper-column {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    p {
      padding: 8px 0;
    }
  }

  li {
    height: 80px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 3px;
    margin: 5px 10px;
    background: #fff;
  }

  li a,
  li button {
    background: none;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    text-decoration: none;
    outline: none;
    padding: 3px;
    margin: 0 3px;
    color: #222;
    font-size: 100%;
  }
`;
