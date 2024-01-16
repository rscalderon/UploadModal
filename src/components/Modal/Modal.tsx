import { FormEvent, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

import UploadedFile from '../UploadedFile/UploadedFile';
import Upload from '../Upload/Upload';
import ToggleSwitch from '../Switch/Switch';
import BasicSelect from '../Select/Select';
import RadioButtons from '../RadioButton/RadioButtons';

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
    <>
      <hr />
      <UploadedFile file={file} key={`File-${i}-${file}`} />
      {i + 1 === Object.values(files).length ? <hr /> : ''}
    </>
  ));

  // handle submission data
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form id='upload-modal' onSubmit={handleSubmit}>
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
          <BasicSelect label='Select Import Name:' />
          <hr />
          <p className='bold-text'>Select a manifest you'd like to import</p>
          <div id='file-upload-container'>
            <FileUploader
              id='file-uploader'
              handleChange={handleChange}
              multiple={true}
              children={<Upload />}
            />
            <button id='upload-button'>Upload Manifest</button>
          </div>
          <div id='files-container'>{fileComponents}</div>
          <hr />
          <p className='bold-text'>Elapse Data Checking</p>
          <p className='green'>No Elapsed Dates!</p>
          <hr />
          <p className='bold-text' id='tolerance-window'>
            Tolerance Window:
          </p>
          <div className='testing-center'>
            <ToggleSwitch toggle={toggle} setToggle={setToggle} />
            <div className='vl'></div>
            <img className='clock-icon' src={Icon} />
            <p> Select Tolerance Level</p>
          </div>
        </section>
        <section id='right-column'>
          {/* Right column */}
          <div className='form-group'>
            <label className='bold-text'>
              Split schedule using social distancing?
            </label>
            <div className='radio-buttons'>
              <RadioButtons
                groupLabel='split-schedule-using-social-distancing'
                labels={['Yes', 'No']}
              />
              <hr />
              <p className='bold-text'>Location Checking:</p>
              <p className='green'>All Available!</p>
              <hr />
              <div id='client-form'>
                <label className='bold-text'>Client:</label>
                <div className='radio-buttons'>
                  <RadioButtons
                    groupLabel='Client'
                    labels={['Single', 'Multiple']}
                  />
                  <div className='testing-center'>
                    <label htmlFor='TestingCenter1'>Testing Center 1</label>
                    <div className='testing-center-right'>
                      <BasicSelect maxWidth={115} label='Select Client' />
                      <img className='clock-icon' src={Icon} />
                    </div>
                  </div>
                  <div className='testing-center'>
                    <label htmlFor='TestingCenter2'>Testing Center 2</label>
                    <div className='testing-center-right'>
                      <BasicSelect maxWidth={115} label='Select Client' />
                      <img className='clock-icon' src={Icon} />
                    </div>
                  </div>
                  <div className='testing-center'>
                    <label htmlFor='TestingCenter3'>Testing Center 3</label>
                    <div className='testing-center-right'>
                      <BasicSelect maxWidth={115} label='Select Client' />
                      <img className='clock-icon' src={Icon} />
                    </div>
                  </div>
                  <div className='testing-center'>
                    <label htmlFor='TestingCenter4'>Testing Center 4</label>
                    <div className='testing-center-right'>
                      <BasicSelect maxWidth={115} label='Select Client' />
                      <img className='clock-icon' src={Icon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer id='modal-footer'>
        <p className='bold-text'>
          Data in the import file is correct. Please press Continue to import.
        </p>
        <button onClick={() => console.log('Continue import')} type='submit'>
          Continue Import
        </button>
        <button id='cancel-button' onClick={() => console.log('Close modal')}>
          Cancel
        </button>
      </footer>
    </form>
  );
}

export default Modal;
