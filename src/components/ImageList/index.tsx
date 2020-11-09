import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview } from "./styles";

interface ImageListProps {
  files: Array<{
    file: File;
    id: string;
    name: string;
    size: string;
    extension: string;
    type: string;
    preview: string;
    progress: number;
    uploaded: boolean;
    error: boolean;
    url: string | null;
  }>;
}
// ADNI_003_S_1059_MR_MPRAGE_br_raw_20081224065743160_102_S61129_I132187
const ImageList: React.FC<ImageListProps> = ({ files }) => {
  return (
    <Container>
      {files.map((uploadedFile) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src={uploadedFile.preview} />
            <div>
              <strong>
                {
                  uploadedFile.name.length >= 30
                    ? `${uploadedFile.name.substring(0,15)} ... ${uploadedFile.name.slice(-10)}`
                    : uploadedFile.name
                }
              </strong>
              <span>
                <span>{uploadedFile.extension}</span>
                {uploadedFile.size}
                {!!uploadedFile.url && (
                  <button onClick={() => {}}>Remover</button>
                )}
              </span>
            </div>
          </FileInfo>
          <div>
            {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar
                value={uploadedFile.progress}
                styles={{
                  root: { width: 24 },
                  path: { stroke: "#7159c1" },
                }}
                strokeWidth={10}
              />
            )}

            {uploadedFile.url && (
              <a
                href={uploadedFile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}

            {uploadedFile.uploaded && (
              <MdCheckCircle size={24} color="#399117" />
            )}

            {uploadedFile.error && <MdError size={24} color="#CC2B21" />}
          </div>
        </li>
      ))}
    </Container>
  );
};

export default ImageList;
