import React from "react";
import styled, { css } from "styled-components";
const StyledCard = styled.div`
  position: relative;
`;
const StyledImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  width: calc(100% - 76px);
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const UserAvater = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  align-items: center;
  margin: 0;
`;
/* scp */
const CardAmount = styled.span`
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: bold;

  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `};
  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;
export default function Card(props) {
  console.log(props);
  return (
    <StyledCard>
      <StyledImage>
        <CardImg src="https://source.unsplash.com/random" alt="" />
      </StyledImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvater src="https://source.unsplash.com/random" alt="" />
            <UserName>@LongDev</UserName>
          </CardUser>
          <CardMeta>
            <img src="/heart.svg" alt="heart" />
            <div>256</div>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary} fontSize={"18px"}>
            12,000 PSL
          </CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
}
