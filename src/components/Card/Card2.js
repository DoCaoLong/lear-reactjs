import React from "react";
import styled, { css } from "styled-components";
const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    width: calc(100% - 76px);
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }
  .user-name {
    font-weight: 300;
    font-size: 16px;
    color: #333;
  }
  .card-meta {
    display: flex;
    align-items: center;
    gap: 0 12px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-title {
    font-size: 18px;
    font-weight: 500;
    align-items: center;
    margin: 0;
  }
  /* scp */
  .card-amount {
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
  }
`;
export default function Card2(props) {
  return (
    <StyledCard secondary={props.secondary} fontSize={props.fontSize}>
      <div className="card-image">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user ">
            <img
              className="user-avatar"
              src="https://source.unsplash.com/random"
              alt=""
            />
            <span className="user-name">@LongDev</span>
          </div>
          <div className="card-meta ">
            <img src="/heart.svg" alt="heart" />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Card Style Component Class</h3>
          <span className="card-amount">12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
}
