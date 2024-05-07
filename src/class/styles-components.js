// Instalar styles-components
// Pode precisar instalar versões do npm
import styled from "styled-components/native";

export const PageContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: azure;
`;

export const PageTitle = styled.Text`
  color: gold;
  font-size: 40px;
  font-weight: 600;
  background-color: grey;
  padding: 20px;
  border-radius: 50px;
`;

export const PageSubTitle = styled.Text`
  color: gold;
  font-size: 30px;
  font-weight: 900;
  background-color: grey;
  padding: 20px;
  border-radius: 50px;
`;

export const PageImage = styled.Image`
  width: 250px;
  height: 350px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: solid 5px gold;
  border-radius: 50px;
`;

export const PageAudio = styled