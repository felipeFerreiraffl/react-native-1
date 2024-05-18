import styled from "styled-components/native";

export const AppTotal = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    gap: 20px;
`;

export const AppView = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 220px;
    padding: 10px;
    border: 3px gold;
    border-radius: 20px;
    background-color: black;
`;

export const AppTitle = styled.Text`
    align-items: center;
    font-size: 23px;
    font-weight: 900;
    color: gold;
`;

export const AppSubTitle = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: gold;
`;

export const AppImage = styled.Image`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100px;
    height: 120px;
    border-radius: 15px;
`;