import styled from 'styled-components';

export const Container = styled.div`
  background-color: #24292e;
  height: 53px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;



  >svg{
    color: #fff;
    /* color: hsla(0,0%,100%,.7); */
    cursor: pointer;

    :hover{
      color: hsla(0,0%,100%,.7);
    }
    
    font-size: 32px;
    margin: 0 15px;
    
  }

`;

