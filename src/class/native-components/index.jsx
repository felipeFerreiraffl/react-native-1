import React from "react";
import * as S from "./styles"

function CreativeCard(props) {
    return(
        <S.AppView>
            <S.AppTitle>{props.title}</S.AppTitle>
            <S.AppSubTitle>{props.description}</S.AppSubTitle>
        </S.AppView>
    )
}

// FC (function component): 
export const CreativeComponent  = () => {
    return (
        <S.AppTotal>
            <CreativeCard title="BELLIGOL" description="O ILUMINADO" />
            <CreativeCard title="GABIGOL" description="O PREDESTINADO" />
            <CreativeCard title="HARRY KANE" description="O SEM TÍTULOS" />
        </S.AppTotal>
    )
}