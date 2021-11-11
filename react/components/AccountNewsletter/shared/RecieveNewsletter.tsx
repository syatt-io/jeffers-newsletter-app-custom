import React from 'react';

import { useCssHandles } from 'vtex.css-handles';

const RecieveNewsletter = ({checked, onChange}:any) => {

  const CSS_HANDLES = [
    "receiveNS__container",
    "receiveNS__content",
    "receiveNS__heading",
    "receiveNS__paragraph",
    "receiveNS__input",
    "receiveNS__label",
  ] as const;
  const handles = useCssHandles(CSS_HANDLES)

  return(
    <>
      <div className={handles.receiveNS__container}>
        <div className={handles.receiveNS__content}>
          <h3 className={handles.receiveNS__heading}>Newsletter</h3>
          <p className={handles.receiveNS__paragraph}>Do you want to receive promotional emails?</p>
          <div>
            <input className={handles.receiveNS__input} type='checkbox' name='receiveNewsletter' checked={checked} onChange={onChange} id='receiveNewsletter' />
            <label className={handles.receiveNS__label}>I want to receive the newsletter.</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecieveNewsletter
