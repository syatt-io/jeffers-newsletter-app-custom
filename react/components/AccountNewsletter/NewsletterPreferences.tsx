import React from 'react';
import AccountPreferencesForm from  './shared/AccountPreferences';
import { useRuntime } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles';

const NewsletterPreferencesPage = () =>{

  const { navigate } = useRuntime()

  const CSS_HANDLES = [
		'preferences__container',
		'preferences__content',
		'preferences__back',
		'preferences__heading',
    'preferences_formContainer'
  ] as const;
  const handles = useCssHandles(CSS_HANDLES)

  const handleClick = () => {
    navigate({
      to: '/account/#/profile'
    })
  }

  return (
    <div className={handles.preferences__container}>
      <main className={`flex flex-column-s ${handles.preferences__content}`}>
        <button onClick={handleClick} className={handles.preferences__back}>Return</button>
        <h1 className={handles.preferences__heading}>MY PREFERENCES</h1>
        <div className={handles.preferences_formContainer}>
          <AccountPreferencesForm />
        </div>
      </main>
    </div>
  )
}

export default NewsletterPreferencesPage
