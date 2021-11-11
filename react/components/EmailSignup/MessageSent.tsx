import React from 'react'
import { useCssHandles } from 'vtex.css-handles';

const MessageSent = () => {

  const CSS_HANDLES = [
		'preference__container',
		'preference__content',
		'preference__text'
  ] as const;

  const handles = useCssHandles(CSS_HANDLES)

  return(
    <div className={handles.preference__container}>
      <div className={handles.preference__content}>
        <p className={handles.preference__text}>YOUR MESSAGE HAS BEEN SENT, THANKYOU!</p>
      </div>
    </div>
  )
}

export default MessageSent
