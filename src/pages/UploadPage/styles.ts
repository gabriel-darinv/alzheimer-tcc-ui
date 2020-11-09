import styled, { css } from 'styled-components';



export const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`;

export const Container = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  top: 0;
  background: #FFFFFF;
  border: 2px solid #D3E2E5;
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const InputContainer = styled.div`
  position:absolute;
  width:50%;
  height:100%;
  left:0;
  top:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

export const ImageWrapper = styled.div`
  width:80%;
  padding:3rem;

  border-radius:0.5rem;
  background: #fefefe;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

export const Title = styled.h1`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:5rem;
  padding:0 2rem;

  font-size: 3rem;

  display:flex;
  align-items:center;
`;

export const ButtonsContainer = styled.div`
  /* position:absolute;
  left:0;
  bottom:0; */
  width:100%;
  height:5rem;

  margin-top:3rem;

  display:flex;
  align-items:center;
  justify-content:space-around;
  border:1px solid red;
`;