import UploadImg from '../assets/UploadImg.png';

import './Upload.css';

function Upload() {
  return (
    <div id='UploadFile'>
      <img id='UploadImg' src={UploadImg} />
      <p id='FileUploader'>
        Drag & Drop Here Or <span className='BoldText'>Browse</span>
      </p>
    </div>
  );
}

export default Upload;
