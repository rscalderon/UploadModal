import './Modal.css';

function Modal() {
  return (
    <div id='upload-modal'>
      <h1>Document Upload</h1>
      <hr />
      <p>
        Data in the import file is correct. Please press Continue to import.
      </p>
      <button>Continue Import</button>
      <button>Cancel</button>
    </div>
  );
}

export default Modal;
