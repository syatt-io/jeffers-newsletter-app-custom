import React, { useState } from 'react';
import { useCssHandles } from 'vtex.css-handles';

const PreferenceMessage = () => {

  const [showMessage, useShowMessage] = useState(true)

  const CSS_HANDLES = [
		'preference__container',
		'preference__content',
		'preference__text',
		'preference__close'
  ] as const;

  const handles = useCssHandles(CSS_HANDLES)

  const handleShowMessage = () => {
    useShowMessage(false)
  }

  return(
    <>
    {
      showMessage ?
      <div className={handles.preference__container}>
        <div className={handles.preference__content}>
          <p className={handles.preference__text}>SELECT YOUR PREFERENCES FOR 10% OFF PROMO CODE.</p>
          <span className={handles.preference__close} onClick={handleShowMessage}></span>
        </div>
      </div>
      :
      null
    }
    </>
  )
}

export default PreferenceMessage