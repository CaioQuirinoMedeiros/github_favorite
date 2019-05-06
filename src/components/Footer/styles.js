import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 20px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  position: relative;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 25px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #555;
    }

    i {
      position: absolute;
      top: 10px;
      cursor: pointer;
      opacity: 1;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.5;
      }

      &:first-of-type {
        right: 10px;
      }
      &:last-of-type {
        left: 10px;
      }
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }
      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`;
