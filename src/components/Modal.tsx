import './Modal.css';

function Modal() {
  return (
    <div id='upload-modal'>
      <div id='modal-header'>
        <button className='close-button'>X</button>
        <h1>Document Upload</h1>
        <hr />
      </div>
      {/* Modal body */}
      <div id='modal-content'>
        <div id='left-column'>
          {/* <h2>LEFT</h2> */}
          <label htmlFor='importName'>Select Import Name:</label>
          <select id='importName'></select>
          <hr />
          <p>Select a manifest you'd like to import</p>
          <h1>INSERT DOC UPLOAD COMPONENT HERE</h1>
          <hr />
          <p>Elapse Data Checking</p>
          <p>No Elapsed Dates!</p>
          <hr />
          <p>Tolerance Window:</p>
        </div>
        <div id='right-column'>
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
              <p>All Available!</p>
              <hr />
              <div className='form-group'>
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
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div id='modal-footer'>
            <p>
              Data in the import file is correct. Please press Continue to
              import.
            </p>
            <button>Continue Import</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
