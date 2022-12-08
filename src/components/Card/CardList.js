import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Card2 from "./Card2";
import CardTailwind from "./CardTailwind";
const StyleCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px 30px;
  padding: 30px;
`;
export default function CardList(props) {
  return (
    <StyleCardList>
      {/* <Card secondary={true}></Card>*/}
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card2 secondary={true} fontSize={"18px"} />
      <CardTailwind />
    </StyleCardList>
  );
}
