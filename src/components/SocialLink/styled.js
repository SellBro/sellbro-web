import styled from 'styled-components';

export const LinkContainer = styled.a`
  color: inherit;
  text-decoration: none;

  img {
    width: 40px;
    height: 40px;
    padding: 8px;
    margin: 5px;
    cursor: pointer;
    border: 1px solid rgb(54, 54, 73);

    :hover {
      filter: invert(100%);
      background-color: black;
      transition: 0.3s;
    }
  }
`;
