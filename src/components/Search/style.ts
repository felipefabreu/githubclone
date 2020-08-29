import styled from 'styled-components';

export const Container = styled.div`
  background: hsla(0,0%,100%,.125);
  border-radius: 6px;
  border: 0px;
  
  height: 28px;
  width: 250px;
  display: flex;
  align-items: center;
  flex-direction: row;
  
  padding: 0 10px;

  svg{
    width: 14px;
    line-height: 20px;
    color: #cecece;
  }

  input{
    background: transparent;
    border: 0;
    width: 100%;
    color: #fff;

    &::placeholder {
      color: #fff;
      margin-left: 10px;
    }
  }
 
`;
