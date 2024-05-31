import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #13131A;
`;

export const HeaderContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #16161F;
    width: 359px;
    height: 396px;
    border-radius: 12px;
    margin-top: 8px;
    gap: 12px;
`;

export const HeaderIconInputContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const HeaderIconContainer= styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    background-color: #1E1E29;
    border-radius: 8px;
`;

export const HeaderIcon = styled.Image`
    width: 30px;
    height: 20px;
`;

export const HeaderInput = styled.TextInput`
    background-color: #1E1E29;
    width: 271px;
    height: 56px;
    color: #7F7F98;
    padding-left: 20px;
    border-radius: 8px;
`;

export const NightImage = styled.ImageBackground`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 335px;
    height: 304px;
    border-radius: 12px;
`;

export const NightTitleContainer = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 295px;
    height: 41px;
    margin-top: 20px;
    gap: 72px;
`;

export const NightLocalDateContainer = styled.View`
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 191px;
    gap: 2px;
`;

export const NightLocal = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FAFAFA;
`;

export const NightDate = styled.Text`
    font-size: 12px;
    font-weight: normal;
    color: #FAFAFA;
`;

export const NightHour = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #FAFAFA;
`;

export const NightWeatherContainer = styled.View`
    display: flex;
    justify-content: left;
    align-items: left;
    margin-right: 198px;
    margin-top: 115px;
    gap: 8px;
`;

export const NightWeatherDegrees = styled.Text`
    font-size: 48px;
    font-weight: bolder;
    color: #FAFAFA;
`;

export const NightWeatherDescription = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 94px;
`;

export const NightWeatherMaxMin = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FAFAFA;
`;

export const NightWeatherState = styled.Text`
    font-size: 14px;
    font-weight: normal;
    color: #FAFAFA;
`;

export const NightWeatherIconContainer = styled.View`
    display: flex;
    justify-content: right;
    align-items: right;
    margin-left: 175px;
    margin-top: -144px;
`;

export const NightWeatherIcon = styled.Image`
    width: 160px;
    height: 160px;
`;

export const DescContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #16161F;
    width: 359px;
    height: 292px;
    border-radius: 12px;
    margin-top: 8px;
`;

export const DescInfoConteiner = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 327px;
    height: 284px;
    margin-top: 4px;
`;