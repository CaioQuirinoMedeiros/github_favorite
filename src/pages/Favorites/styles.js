import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px 60px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const RepositoriesContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const LinkRepository = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Repository = styled.div`
  width: 280px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  position: relative;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    opacity: 0.98;
    transform: scale(1.01);
  }

  header {
    padding: 30px 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1a2730;

    img {
      width: 84px;
    }

    strong {
      font-size: 18px;
      height: 46px;
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      overflow: hidden;
      margin: 10px 0;
    }

    small {
      font-size: 14px;
      color: #555;
    }

    i {
      position: absolute;
      top: 0px;
      cursor: pointer;
      padding: 10px 10px 15px;
      opacity: 1;
      transition: color 0.2s;

      &:hover {
        color: #40c68c;
      }

      &:first-of-type {
        right: 0px;
      }
      &:last-of-type {
        left: 0px;
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
