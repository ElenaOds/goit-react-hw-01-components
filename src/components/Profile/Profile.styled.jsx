import styled from '@emotion/styled';

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 320px;
padding: 0 0 0 0;
background-color: #fff;
box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.12), 
1px 3px 3px rgba(0, 0, 0, 0.14), 
0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 0 0 4px 4px;
`;

export const Description = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 20px 0 20px;
`;

export const Avatar = styled.img`
  max-width: 200px;
  margin: 0 0 15px;
  border-radius: 50%;
  padding: 20px 10px 0px 10px;
  background-color: #c0d6e4;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin: 0 0 15px;
  color: #212121;
`;

export const Tag = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin: 0 0 15px;
  color: #757575;
`;

export const Location = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 0 0 15px;
  color: #757575;
`;

export const Stats = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #f6f7f8
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    min-width: 80px;
    padding: 7px 0;
`;

export const Label = styled.span`
  font-size: 20px;
  color: #757575;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
    font-weight: 700;
    font-size: 20px;
    color: #212121;
`;