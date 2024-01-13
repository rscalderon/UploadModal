import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import UploadedFile from '../UploadedFile/UploadedFile';
import Upload from '../Upload/Upload';
import ToggleSwitch from '../Switch/Switch';
import BasicSelect from '../Select/Select';

import Icon from '../../assets/Icon.png';
import CloseButton from '../../assets/CloseButton.png';
import './Modal.css';

// Parent Modal component
function Modal() {
  const [toggle, setToggle] = useState('ON');
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
          <img src={CloseButton} />
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
          {/* <div id='importNameContainer'> */}
          {/* <label htmlFor='importName' className='BoldText'></label> */}
          <BasicSelect label='Select Import Name:' />
          {/* </div> */}
          <hr />
          <p className='BoldText'>Select a manifest you'd like to import</p>
          <div id='File-upload-container'>
            <FileUploader
              id='FileUploader'
              handleChange={handleChange}
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
          <p className='BoldText' id='tolerance-window'>
            Tolerance Window:
          </p>
          <div className='Testing-Center'>
            <ToggleSwitch toggle={toggle} setToggle={setToggle} />
            <div className='vl'></div>
            <img className='clockIcon' src={Icon} />
            <p> Select Tolerance Level</p>
          </div>
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
                    id='Single'
                    name='socialDistancing'
                    value='Single'
                  />
                  <label htmlFor='Single'>Single</label>
                  <input
                    type='radio'
                    id='Multiple'
                    name='socialDistancing'
                    value='Multiple'
                  />
                  <label htmlFor='Multiple'>Multiple</label>
                  <div className='Testing-Center'>
                    <label htmlFor='TestingCenter1'>Testing Center 1</label>
                    <div className='Testing-Center-Right'>
                      <BasicSelect label='Select Client' />
                      <img className='clockIcon' src={Icon} />
                    </div>
                  </div>
                  <div className='Testing-Center'>
                    <label htmlFor='TestingCenter2'>Testing Center 2</label>
                    <div className='Testing-Center-Right'>
                      <BasicSelect label='Select Client' />
                      <img className='clockIcon' src={Icon} />
                    </div>
                  </div>
                  <div className='Testing-Center'>
                    <label htmlFor='TestingCenter3'>Testing Center 3</label>
                    <div className='Testing-Center-Right'>
                      <BasicSelect label='Select Client' />
                      <img className='clockIcon' src={Icon} />
                    </div>
                  </div>
                  <div className='Testing-Center'>
                    <label htmlFor='TestingCenter4'>Testing Center 4</label>
                    <div className='Testing-Center-Right'>
                      <BasicSelect label='Select Client' />
                      <img className='clockIcon' src={Icon} />
                    </div>
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
        <button onClick={() => console.log('Continue import')}>
          Continue Import
        </button>
        <button id='cancel-button' onClick={() => console.log('Close modal')}>
          Cancel
        </button>
      </footer>
    </div>
  );
}

export default Modal;
