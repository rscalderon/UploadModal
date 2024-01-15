import UploadedImg from '../../assets/UploadedImg.png';
import ProgressBar from '../../assets/ProgressBar.png';

import './UploadedFile.css';

interface Props {
  file: any;
}

function UploadedFile({ file }: Props) {
  // Format input file size to appropriate units
  const sizeCalc = (size: number): string => {
    if (size > 1000000) return Math.round(size / 100000) / 10 + ' MB';
    if (size > 1000) return Math.round(size / 100) / 10 + ' KB';
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
