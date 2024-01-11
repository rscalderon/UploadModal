import UploadedImg from '../assets/UploadedImg.png';

import './UploadedFile.css';

interface Props {
  file: any;
}

function UploadedFile({ file }: Props) {
  const sizeCalc = (size: number): string => {
    if (size > 1000000) return size / 1000000 + ' MB';
    if (size > 1000) return size / 1000 + ' KB';
    return size + ' bytes';
  };
  const fileSize = sizeCalc(file.size);
  return (
    <>
      <hr />
      <div className='UploadedFile'>
        <img src={UploadedImg} className='Uploaded-File-Logo' />
        <div>
          <p>
            {file.name} {'  '}
            {fileSize}
          </p>
        </div>
      </div>
    </>
  );
}

export default UploadedFile;
