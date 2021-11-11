import React, { useState, useEffect } from 'react';
import { Input, Button  } from 'vtex.styleguide';
import { useCssHandles } from 'vtex.css-handles';
import { useRuntime } from 'vtex.render-runtime'

const NewsletterApp = () =>{
  const [invalidEmail, useInvalidEmail] = useState(false)
  const [email, useEmail] = useState('')
  const [submit, useSubmit] = useState(false)

  const CSS_HANDLES = [
		'newsletter__form',
		'newsletter__input',
		'newsletter__inputError',
		'newsletter__button',
		'newsletter__error'
  ] as const;

  const handles = useCssHandles(CSS_HANDLES)

  const { navigate } = useRuntime()

  const redirect = () => {
    navigate({
      to: `/email_signup`,
    })
  }

  const handleEmail = (e:any) => {
    if(e.target.value === ''){
      useInvalidEmail(true)
    } else {
      useInvalidEmail(false)
      useEmail(e.target.value)
    }
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    useSubmit(true)
    redirect()
  }


  useEffect(()=>{
    if(typeof localStorage !== "undefined"){
      try{
        if(email !== ''){
          localStorage?.setItem("emailNewsletter", JSON.stringify(email));
        }
      } catch(error) {
        console.log("e-> ", error);
      }
    }
  },[submit])

  return (
    <form className={`${handles.newsletter__form} ${invalidEmail ? handles.newsletter__inputError : ''}`} onSubmit={handleSubmit}>

      <Input
        className={handles.newsletter__input}
        id="newsletter-input-email"
        type="email"
        name="newsletter"
        onChange={handleEmail}
        label={invalidEmail ? 'This Field Is Required.' : ''}
        placeholder='Enter Your Email Address'
        required={true}
      />

      <Button className={handles.newsletter__button} type="submit"></Button>

    </form>
  )
}

export default NewsletterApp
