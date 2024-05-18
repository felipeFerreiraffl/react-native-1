import React from "react";
import * as S from "./styles"
import bell from "../../../assets/bell.png";
import gabigol from "../../../assets/gabigol.png"
import kane from "../../../assets/kane.png"

function CreativeCard(props) {
    return(
        <S.AppView>
            <S.AppTitle>{props.title}</S.AppTitle>
            <S.AppSubTitle>{props.description}</S.AppSubTitle>
            <S.AppImage source={props.image}/>
        </S.AppView>
    )
}

// FC (function component): 
export const CreativeComponent  = () => {
    return (
        <S.AppTotal>
            <CreativeCard title="BELLIGOL" image={bell} imageAlt="belligol" description="O ILUMINADO" />
            <CreativeCard title="GABIGOL" image={gabigol} description="O PREDESTINADO" />
            <CreativeCard title="HARRY KANE" image={kane} description="O SEM TÍTULOS" />
        </S.AppTotal>
    )
}