import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import UploadedFile from './UploadedFile';
import Upload from './Upload';

import Icon from '../assets/Icon.png';
import './Modal.css';

// Parent Modal component
function Modal() {
  // Set uploaded files as state
  const [files, setFile] = useState<any>([]);
  // Update state and trigger re-render every time a new file is uploaded
  const handleChange = (newFile: any) => setFile(newFile);

  // Build array of file components from list of uploaded files
  const fileComponents = Object.values(files).map((file: any, i) => (
    <UploadedFile file={file} key={`File-${i}-${file}`} />
  ));

  return (
    <div id='upload-modal'>
      {/* Modal header */}
      <header id='modal-header'>
        <button id='close-button' onClick={() => console.log('Close modal')}>
          X
        </button>
        <div id='header-container'>
          <h1>Document Upload</h1>
          <hr />
        </div>
      </header>
      {/* Modal body */}
      <div id='modal-content'>
        <section id='left-column'>
          {/* Left column */}
          <div id='importNameContainer'>
            <label htmlFor='importName' className='BoldText'>
              Select Import Name:
            </label>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
          <hr />
          <p className='BoldText'>Select a manifest you'd like to import</p>
          <div id='File-upload-container'>
            <FileUploader
              id='FileUploader'
              handleChange={handleChange}
              // label='Drag & Drop Here Or Browse'
              multiple={true}
              children={<Upload />}
            />
            <button id='UploadButton'>Upload Manifest</button>
          </div>
          <div id='filesContainer'>{fileComponents}</div>
          <hr />
          <p className='BoldText'>Elapse Data Checking</p>
          <p className='green'>No Elapsed Dates!</p>
          <hr />
          <p className='BoldText'>Tolerance Window:</p>
          <img className='clockIcon' src={Icon} />
          <p>Toggle ON/OFF | Select Tolerance Level</p>
        </section>
        <section id='right-column'>
          {/* Right column */}
          <div className='form-group'>
            <label className='BoldText'>
              Split schedule using social distancing?
            </label>
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
              <p className='BoldText'>Location Checking:</p>
              <p className='green'>All Available!</p>
              <hr />
              <div id='client-form'>
                <label className='BoldText'>Client:</label>
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
                    <select id='TestingCenter1'>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                    <img className='clockIcon' src={Icon} />
                  </div>
                  <div className='Testing-Center'>
                    <label htmlFor='TestingCenter2'>TestingCenter2</label>
                    <select id='TestingCenter2'>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                    <img className='clockIcon' src={Icon} />
                  </div>
                  <div className='Testing-Center'>
                    <label htmlFor='TestingCenter3'>TestingCenter3</label>
                    <select id='TestingCenter3'>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                    <img className='clockIcon' src={Icon} />
                  </div>
                  <div className='Testing-Center'>
                    <label htmlFor='TestingCenter4'>TestingCenter4</label>
                    <select id='TestingCenter4'>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </select>
                    <img className='clockIcon' src={Icon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer id='modal-footer'>
        <p className='BoldText'>
          Data in the import file is correct. Please press Continue to import.
        </p>
        <button>Continue Import</button>
        <button id='cancel-button'>Cancel</button>
      </footer>
    </div>
  );
}

export default Modal;
