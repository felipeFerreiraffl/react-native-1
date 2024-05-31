import React from "react";
import * as S from "./styles"
import cloud from "../../assets/cloud-icon.svg"
import night from "../../assets/background-night.png"
import moon from "../../assets/icon-moon.svg"

export default function Dash() {
    return (
        <S.Container>
            <S.HeaderContainer>
                <S.HeaderIconInputContainer>
                    <S.HeaderIconContainer>
                        <S.HeaderIcon source={cloud}></S.HeaderIcon>
                    </S.HeaderIconContainer>
                    <S.HeaderInput>Buscar local</S.HeaderInput>
                </S.HeaderIconInputContainer>
                <S.NightImage source={night}>
                    <S.NightTitleContainer>
                        <S.NightLocalDateContainer>
                            <S.NightLocal>Porto Alegre, RS</S.NightLocal>
                            <S.NightDate>Segunda-feira, 15 de maio de 2023</S.NightDate>
                        </S.NightLocalDateContainer>
                        <S.NightHour>21:35</S.NightHour>
                    </S.NightTitleContainer>
                    <S.NightWeatherContainer>
                        <S.NightWeatherDegrees>28°C</S.NightWeatherDegrees>
                        <S.NightWeatherDescription>
                            <S.NightWeatherMaxMin>26°c / 32°c</S.NightWeatherMaxMin>
                            <S.NightWeatherState>Poucas nuvens</S.NightWeatherState>
                        </S.NightWeatherDescription>
                    </S.NightWeatherContainer>
                    <S.NightWeatherIconContainer>
                        <S.NightWeatherIcon source={moon}></S.NightWeatherIcon>
                    </S.NightWeatherIconContainer>
                </S.NightImage>
            </S.HeaderContainer>
            <S.DescContainer>
                <S.DescInfoConteiner>
                    
                </S.DescInfoConteiner>
            </S.DescContainer>
        </S.Container>
    )
} 