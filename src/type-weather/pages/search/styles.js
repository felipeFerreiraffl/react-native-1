import styled from "styled-components/native";

export const Container = styled.ImageBackground`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const HeaderContainer = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 186px;
    height: 32px;
    margin: auto;
    margin-top: 48px;
    gap: 9.6px;
`;

export const HeaderImg = styled.Image`
    width: 36.4px;
    height: 24px;
`;

export const HeaderTitle = styled.Text`
    font-size: 20px;
    color: #FAFAFA;
    font-weight: bold;
`;

export const MainContainer = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 400px;
    gap: 32px;
`;

export const MainTitleContainer = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 192px;
    gap: 4px;
`;

export const MainTitle = styled.Text`
    font-size: 20px;
    color: #FAFAFA; 
    font-weight: bold;
`;

export const MainColoredTitle = styled.Text`
    font-size: 20px;
    color: #8FB2F5;
    font-weight: bold;    
`;

export const MainSubTitle = styled.Text`
    font-size: 14px;
    color: #BFBFD4;
    font-weight: normal;
`;

export const MainInputText = styled.TextInput`
    background-color: #1E1E29;
    width: 311px;
    height: 56px;
    border-radius: 8px;
    font-size: 16px;    
    font-weight: normal;        
    color: #7F7F98;
    padding-left: 20px;
`;