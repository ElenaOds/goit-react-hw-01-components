import styled from '@emotion/styled';

 export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-bottom: 50px;
    border-radius: 2px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    width: 320px;
    padding: 10px;
    margin-bottom: 15px;
    background-color: #fff;
    box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.12), 
    1px 3px 4px rgba(0, 0, 0, 0.14), 
    0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
`;


export const Status = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 20px;
    background-color: ${props => {
        return props.online ? 'green' : 'red';
      }};
  `;

  export const Avatar = styled.img `
    width: 100px;
    margin-right: 10px;
    border-radius: 20px;
    background-color: #c0d6e4;
  `;

  export const Name = styled.p`
    font-weight: 500;
    font-size: 30px;
    color: #212121;
  `;