import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 15px 60px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

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
`;

export const Repository = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex-shrink: 0;

  background: #fff;
  border-radius: 3px;
  transition: all 0.15s;

  &:hover {
    transform: scale(1.01);
  }
`;

export const ButtonsWrapper = styled.div`
  padding: 8px 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button.attrs({ type: 'button' })`
  i {
    transition: color 0.2s;
    font-size: 110%;

    &:hover {
      color: #40c68c;
    }
  }
`;

export const Header = styled.a`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1a2730;

  img {
    width: 60px;
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
`;

export const Infos = styled.ul`
  list-style: none;
  padding: 20px 0 0;
`;

export const Info = styled.li`
  padding: 10px 20px;

  &:nth-child(2n - 1) {
    background: #f5f5f5;
  }

  span {
    font-weight: bold;
    margin-right: 5px;
  }

  small {
    font-size: 12px;
    color: #999;
    font-style: italic;
  }
`;
