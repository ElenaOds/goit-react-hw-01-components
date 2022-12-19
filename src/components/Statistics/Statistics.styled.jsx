import styled from '@emotion/styled';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    padding: 0;
    margin-bottom: 50px;
    background-color: #fff;
    box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.12), 
    1px 3px 4px rgba(0, 0, 0, 0.14), 
    0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
`;

 export const Name = styled.h2`
    font-weight: 500;
    font-size: 25px;
    color: #808080;
 `;

 export const Stats = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 2px;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
    padding: 10px 0 15px 0;

    background-color: ${props => {
        const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

    return color;
    }}
`;

export const Label = styled.span`
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 7px;
`;

export const Percentage = styled.span`
    color: #fff;
    font-weight: 500;
    font-size: 20px;
`;



