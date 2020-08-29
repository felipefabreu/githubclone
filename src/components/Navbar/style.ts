import styled from 'styled-components';

export const Container = styled.nav`
  margin: 0 15px;
  max-width: 304px;
  min-width: 250px;

  a{
    font-weight: 600;
    color: #fff;

    :hover{
      color: hsla(0,0%,100%,.7);
    }

    margin-right: 15px;
  }
`;
