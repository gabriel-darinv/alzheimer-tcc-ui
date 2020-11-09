import styled from 'styled-components';

export const Container = styled.ul`
  margin-top:2rem;
  width:100%;

  li {
    display:flex;
    justify-content: space-between;
    align-items:center;
    color: #444;

    & + li {
      margin-top:1.5rem;
    }
  }
`;

export const FileInfo = styled.div`
  display:flex;
  align-items:center;
  max-width:50%;

  div {
    display:flex;
    flex-direction:column;

    strong {
      font-weight:700;
      font-size:1.5rem;
    }

    > span {
      font-size: 1.5rem;;
      color:#999;
      margin-top:0.5rem; 
      display:flex;
      align-items:center;

      > span {
        width:2.5rem;
        height:2.5rem;

        display:flex;
        align-items:center;
        justify-content:center;

        background:#999;
        color:#FFF;
        font-size:1.2rem;
        border-radius:0.5rem;
        margin-right:1rem;
      } 

      button {
        border:0;
        background:transparent;
        color: #CC2B21;
        margin-left: 0.5rem;
        cursor: pointer;
      }
    }


  }
`;

interface PreviewProps {
  src: string;
}

export const Preview = styled.div<PreviewProps>`
  width:3.6rem;
  height:3.6rem;
  border-radius: 0.4rem;
  background-image: url(${props => props.src });
  background-repeat: no-repeat;
  background-size:cover;
  background-position: 50% 50%;
  margin-right:1rem;
`;
