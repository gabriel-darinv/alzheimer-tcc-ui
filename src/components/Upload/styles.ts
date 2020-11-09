import styled, { css } from 'styled-components';

interface DropContainerProps {
  isDragActive: boolean;
  isDragReject: boolean;
}

const dragActive = css`
  border-color:#399117;
  background-color:#F2FCEE88;
`;

const dragReject = css`
  border-color:#CC2B21;
  background-color:#FCEFEE88;
`;

export const DropContainer = styled.div<DropContainerProps>` //div.attrs({className:"dropzone"})
  border: 2px dashed #ddd;
  border-radius:4px;
  cursor:pointer;
  width:100%;
  
  transition: height 0.2 ease;

  ${props => props.isDragActive && dragActive }
  ${props => props.isDragReject && dragReject }
`;

interface UploadMessageProps {
  color?:string;
}

export const UploadMessage = styled.p<UploadMessageProps>`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:1.5rem 0;

  color: ${props => props.color}
`;