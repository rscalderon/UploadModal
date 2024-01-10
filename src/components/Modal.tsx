import './Modal.css';
import { FileUploader } from 'react-drag-drop-files';

function Modal() {
  return (
    <div id='upload-modal'>
      {/* Modal header */}
      <header id='modal-header'>
        <button id='close-button'>X</button>
        <div id='header-container'>
          <h1>Document Upload</h1>
          <hr />
        </div>
      </header>
      {/* Modal body */}
      <div id='modal-content'>
        <section id='left-column'>
          {/* <h2>LEFT</h2> */}
          <div id='importName'>
            <label htmlFor='importName'>Select Import Name:</label>
            <select></select>
          </div>
          <hr />
          <p>Select a manifest you'd like to import</p>
          <div id='File-upload-container'>
            <FileUploader
              id='FileUploader'
              label='Drag & Drop Here Or Browse'
            />
            <button>Upload Manifest</button>
          </div>
          <hr />
          <p>Elapse Data Checking</p>
          <p className='green'>No Elapsed Dates!</p>
          <hr />
          <p>Tolerance Window:</p>
          <p>Toggle ON/OFF | Select Tolerance Level</p>
        </section>
        <section id='right-column'>
          {/* <h2>RIGHT</h2> */}
          <div className='form-group'>
            <label>Split schedule using social distancing?</label>
            <div className='radio-buttons'>
              <input
                type='radio'
                id='yes'
                name='socialDistancing'
                value='yes'
              />
              <label htmlFor='yes'>Yes</label>
              <input type='radio' id='no' name='socialDistancing' value='no' />
              <label htmlFor='no'>No</label>
              <hr />
              <p>Location Checking:</p>
              <p className='green'>All Available!</p>
              <hr />
              <div id='client-form'>
                <label>Client:</label>
                <div className='radio-buttons'>
                  <input
                    type='radio'
                    id='yes'
                    name='socialDistancing'
                    value='yes'
                  />
                  <label htmlFor='Single'>Single</label>
                  <input
                    type='radio'
                    id='Single'
                    name='socialDistancing'
                    value='Single'
                  />
                  <label htmlFor='Multiple'>Multiple</label>
                  <input
                    type='radio'
                    id='Multiple'
                    name='socialDistancing'
                    value='Multiple'
                  />
                  <div className='Testing-Center'>
                    <label htmlFor='TestingCenter1'>TestingCenter1</label>
                    <select id='TestingCenter1'></select>
                  </div>
                  <div className='Testing-Center'>
                    <label htmlFor='TestingCenter2'>TestingCenter2</label>
                    <select id='TestingCenter2'></select>
                  </div>
                  <div className='Testing-Center'>
                    <label htmlFor='TestingCenter3'>TestingCenter3</label>
                    <select id='TestingCenter3'></select>
                  </div>
                  <div className='Testing-Center'>
                    <label htmlFor='TestingCenter4'>TestingCenter4</label>
                    <select id='TestingCenter4'></select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer id='modal-footer'>
        <p>
          Data in the import file is correct. Please press Continue to import.
        </p>
        <button>Continue Import</button>
        <button id='cancel-button'>Cancel</button>
      </footer>
    </div>
  );
}

export default Modal;
