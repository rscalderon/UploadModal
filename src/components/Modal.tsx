import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

import './Modal.css';

function Modal() {
  return (
    <div id='upload-modal'>
      <h1>Document Upload</h1>
      <hr />
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <p>
        Data in the import file is correct. Please press Continue to import.
      </p>
      <button>Continue Import</button>
      <button>Cancel</button>
    </div>
  );
}

export default Modal;
