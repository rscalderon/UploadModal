import UploadedImg from '../../assets/UploadedImg.png';
import ProgressBar from '../../assets/ProgressBar.png';

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
        <div className='Left-Uploaded-File'>
          <img src={UploadedImg} className='Uploaded-File-Logo' />
          <p>{file.name}</p>
        </div>
        <div>
          <p>{fileSize}</p>
        </div>
      </div>
      <img className='Progress-Bar' src={ProgressBar} />
    </>
  );
}

export default UploadedFile;
