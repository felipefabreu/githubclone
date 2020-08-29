import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  
  svg{
      color: #fff;
      font-size: 16px;
    }
  
  div{
    margin-right: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

`;

export const Notification = styled.div`
  cursor: pointer;
  display:flex;
  
`;

export const UnreadNotificationSign = styled.span`
  margin-top: -15px;
  margin-right: -20px;
  z-index: 2;
  width: 14px;
  height: 14px;
  color: #fff;
  background-image: linear-gradient(#54a3ff,#006eed);
  background-clip: padding-box;
  border: 2px solid #24292e;
  border-radius: 50%;
`;

export const Summary = styled.div`
  cursor: pointer;
`;

export const Details = styled.div`

  cursor: pointer;

  img{
    border-radius: 50px;
    width:20px;
  }

`;

export const Dropdowncaret = styled.span`
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
  color: #fff;
  margin-left: 5px;
`;
