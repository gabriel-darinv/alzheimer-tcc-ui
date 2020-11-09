import React, { useState } from "react";
import { uniqueId } from "lodash";
import fileSize from "filesize";

import ImageList from "../../components/ImageList";
import Upload from "../../components/Upload";

import { Container, ImageWrapper, InputContainer, Page } from "./styles";

interface UploadingImagesData {
  file: File;
  id: string;
  name: string;
  size: string;
  extension:string;
  type:string;
  preview: string;
  progress: number;
  uploaded: boolean;
  error: boolean;
  url: string | null;
}

const UploadPage: React.FC = () => {
  // const [draggedFiles, setDraggedFiles] = useState<File[]>([])
  const [uploadFiles, setUploadFiles] = useState<UploadingImagesData[]>([])

  const handleUpload = (files: File[]) => {
    files.map((file) => {
        const parsedFile = handleParseFileToObject(file)
        const fileList = [...uploadFiles, parsedFile]
        setUploadFiles(fileList)
    });
  };

  function handleParseFileToObject(file: File):UploadingImagesData{
    return {
      file,
      id:uniqueId(),
      name: file.name.split(".")[0],
      size:fileSize(file.size),
      extension:file.name.split(".")[1],
      type:file.type,
      preview:URL.createObjectURL(file),
      progress:0,
      uploaded:false,
      error:false,
      url:null,
    }
  }

  return (
    <Page>
      <InputContainer>
        {/* <Title>Insira seu arquivo .nii</Title> */}
        <ImageWrapper>
          <Upload onUpload={handleUpload} />
          { !!uploadFiles.length && <ImageList files={uploadFiles} />}
        </ImageWrapper>
      </InputContainer>
      <Container></Container>
    </Page>
  );
};

export default UploadPage;
