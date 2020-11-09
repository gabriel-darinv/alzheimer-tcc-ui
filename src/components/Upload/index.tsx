import React from 'react';
import Dropzone from "react-dropzone";


import {
  DropContainer,
  UploadMessage,
} from "./styles";

interface UploadProps {
  onUpload: (files:File[]) => void;
}

const Upload: React.FC<UploadProps> = ({ onUpload }) => {

  function handleMessage(isDragActive: boolean, isDragReject: boolean) {
    if(isDragActive && !isDragReject){
    return <UploadMessage color="#399117">Pode soltar :)</UploadMessage>
    } else if (isDragReject){
      return <UploadMessage color="#CC2B21">Arquivo não suportado!</UploadMessage>
    } else {
      return <UploadMessage color="#777">Arraste o arquivo .nii para cá...</UploadMessage>
    }

  }

  // arquivo rar/zip application/x-zip-compressed
  return (
    <Dropzone accept="" multiple={false} onDropAccepted={onUpload}> 
    {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
      <DropContainer
        {...getRootProps()}
        isDragActive={isDragActive}
        isDragReject={isDragReject}
      >
        <input {...getInputProps()} type="file" />
        {handleMessage(isDragActive, isDragReject)}
      </DropContainer>
    )}
  </Dropzone>
  );
}

export default Upload;