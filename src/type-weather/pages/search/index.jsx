import React from "react";
import * as S from "./styles";
import background from "../../assets/background.png";
import cloud from "../../assets/cloud-icon.svg";

export default function Search() {
    return (
        <S.Container source={background} resizeMode="cover">
            <S.HeaderContainer>
                <S.HeaderImg source={cloud}></S.HeaderImg>
                <S.MainTitle>TypeWeather</S.MainTitle>
            </S.HeaderContainer>
            <S.MainContainer>
                <S.MainTitleContainer>
                    <S.MainTitle>Bem vindas ao <S.MainColoredTitle>TypeWeather</S.MainColoredTitle></S.MainTitle>
                    <S.MainSubTitle>Escolha um local para ver a previsão do tempo</S.MainSubTitle>
                </S.MainTitleContainer>
                <S.MainInputText>Buscar local</S.MainInputText>
            </S.MainContainer>
        </S.Container>
    )
}