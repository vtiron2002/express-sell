import React from "react";

function GoBackBtn({ history }) {
  return (
    <button onClick={() => history.goBack()} className='go-back'>
      <i className='fas fa-chevron-left'></i>go back
    </button>
  );
}

export default GoBackBtn;
