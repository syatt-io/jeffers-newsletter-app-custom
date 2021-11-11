import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import NewsletterApp from '../NewsletterApp';
import SubmitData from './SubmitData'

const EmailSignup = () => {

  const CSS_HANDLES = [
		'emailSignup__enterEmail',
		'emailSignup__enterEmailHeading',
  ] as const;
  const handles = useCssHandles(CSS_HANDLES)

  let email = '';
  if(typeof localStorage !== "undefined"){
    try{
        email = JSON.parse(localStorage?.getItem('emailNewsletter') || "");
    }catch(error){
        console.log("e-> ", error);
    }
  }

  return(
    <>
    {
      email !== ''
      ?
      <SubmitData email={email} />
      :
      <div className={handles.emailSignup__enterEmail}>
        <h1 className={handles.emailSignup__enterEmailHeading}>Enter your email address </h1>
        <NewsletterApp />
      </div>
    }
    </>
  )
}

export default EmailSignup
