import React from "react";
import * as S from "./styles"
import *  as A from "../../../assets"

function CreativeCard(props) {
    return(
        <S.AppView>
            <S.AppTitle>{props.title}</S.AppTitle>
            <S.AppSubTitle>{props.description}</S.AppSubTitle>
            <S.AppImage>{props.image}</S.AppImage>
        </S.AppView>
    )
}

// FC (function component): 
export const CreativeComponent  = () => {
    return (
        <S.AppTotal>
            <CreativeCard title="BELLIGOL" image={require(A.bell.png)} description="O ILUMINADO" />
            <CreativeCard title="GABIGOL" image={require(A.gabigol.png)} description="O PREDESTINADO" />
            <CreativeCard title="HARRY KANE" image={require(A.kane.png)} description="O SEM TÍTULOS" />
        </S.AppTotal>
    )
}