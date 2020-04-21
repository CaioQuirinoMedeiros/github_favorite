import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #1a2730;

  h1 {
    color: #f5f5f5;
    margin: 0 10px;
    text-align: center;
    font-size: 250%;
    flex: 5;
  }
`;

export const Link = styled(NavLink).attrs({
  exact: true,
})`
  color: #63f5b0;
  font-size: 120%;
  opacity: 0.7;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }
`;
