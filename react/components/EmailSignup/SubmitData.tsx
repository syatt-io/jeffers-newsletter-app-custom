import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from "react-apollo";
import singupDataFields from '../AccountNewsletter/data/singupFields'
import MessageSent from '../EmailSignup/MessageSent'
import PreferencesForm from '../EmailSignup/PreferencesForm'

import NEWSLETTER_INTEREST from '../../graphql/getNewsletterInterestEmail.gql'
import UPDATE_NEWSLETTER_INTEREST from '../../graphql/setNewsletterInterest.gql'
import CREATEDOCUMENT from '../../graphql/createDocument.gql'

const SubmitData = ({email}:any) => {

  const [fields, setFields] = useState(singupDataFields);
  const [existRegister, setExistRegister] = useState(false);
  const [showMessage, useShowMessage] = useState(false)
  const [id, setId] = useState('');

  const [updateNewsletter] = useMutation(UPDATE_NEWSLETTER_INTEREST)
  const [createDocument] = useMutation(CREATEDOCUMENT)
  const { data: newsletterInterest } = useQuery(NEWSLETTER_INTEREST, {
    variables: {
      fields: 'id',
      acronym: "NS",
      where: `email=${email}`
    }
  }
  )

  const verificateEmail = () => {
    if(newsletterInterest){
      try{
        if(newsletterInterest.documents[0].fields !== undefined){
          setExistRegister(true)
          setId(newsletterInterest.documents[0].fields[0].value)
        } else {
          setExistRegister(false)
        }
      } catch(e){
        console.log('error', e)
      }
    }
  }

  useEffect(() => {
    let documentIdNewsletter:any
    if(typeof localStorage !== "undefined"){
      try{
          documentIdNewsletter = localStorage?.getItem('documentIdNewsletter');
      }catch(error){
          console.log("Error");
      }

      if(!documentIdNewsletter && id && id !== ""){
        if(typeof localStorage !== "undefined"){
          try{
              localStorage?.setItem("documentIdNewsletter", id);
          }catch(error){
              console.log("** ", error);
          }
        }
      }

    }
  }, [id])


  useEffect(() => {
    setFields({
      ...fields,
      ['email']: email
    })
    verificateEmail()
  },[newsletterInterest])

  const handleChange = (e:any) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.checked
    })
  }

  const onSubmit = async (e:any) => {
    e.preventDefault()
    if(existRegister && id !== ''){
      try{
        updateNewsletter(
          {
            variables: {
              acronym: 'NS',
              document: {
                fields: [
                  {
                    key : 'id',
                    value : id
                  },
                  {
                    key : "barrelRacingInterest",
                    value : fields.barrelRacingInterest
                  },
                  {
                    key :"birdInterest",
                    value : fields.birdInterest
                  },
                  {
                    key :"catInterest",
                    value : fields.catInterest
                  },
                  {
                    key :"cattleInterest",
                    value : fields.cattleInterest
                  },
                  {
                    key :"cowboyMountedShootingInterest",
                    value : fields.cowboyMountedShootingInterest
                  },
                  {
                    key :"deerInterest",
                    value : fields.deerInterest
                  },
                  {
                    key :"dogInterest",
                    value : fields.dogInterest
                  },
                  {
                    key :"draftInterest",
                    value : fields.draftInterest
                  },
                  {
                    key :"dressageInterest",
                    value : fields.dressageInterest
                  },
                  {
                    key :"equineInterest",
                    value : fields.equineInterest
                  },
                  {
                    key :"eventingInterest",
                    value : fields.eventingInterest
                  },
                  {
                    key :"exoticInterest",
                    value : fields.exoticInterest
                  },
                  {
                    key :"ferretInterest",
                    value : fields.ferretInterest
                  },
                  {
                    key :"goatInterest",
                    value : fields.goatInterest
                  },
                  {
                    key :"horseEnglishInterest",
                    value : fields.horseEnglishInterest
                  },
                  {
                    key :"horseWesternInterest",
                    value : fields.horseWesternInterest
                  },
                  {
                    key :"hunterJumperInterest",
                    value : fields.hunterJumperInterest
                  },
                  {
                    key :"livestockInterest",
                    value : fields.livestockInterest
                  },
                  {
                    key :"llamasAlpacasInterest",
                    value : fields.llamasAlpacasInterest
                  },
                  {
                    key :"miniatureInterest",
                    value : fields.miniatureInterest
                  },
                  {
                    key :"otherHorseEnglishInterest",
                    value : fields.otherHorseEnglishInterest
                  },
                  {
                    key :"otherHorseWesternInterest",
                    value : fields.otherHorseWesternInterest
                  },
                  {
                    key :"petInterest",
                    value : fields.petInterest
                  },
                  {
                    key :"pleasureInterest",
                    value : fields.pleasureInterest
                  },
                  {
                    key :"ponyClubInterest",
                    value : fields.ponyClubInterest
                  },
                  {
                    key :"potBelliedPigInterest",
                    value : fields.potBelliedPigInterest
                  },
                  {
                    key :"poultryInterest",
                    value : fields.poultryInterest
                  },
                  {
                    key :"rabbitInterest",
                    value : fields.rabbitInterest
                  },
                  {
                    key :"receiveNewsletter",
                    value : true
                  },
                  {
                    key :"sheepInterest",
                    value : fields.sheepInterest
                  },
                  {
                    key :"swineInterest",
                    value : fields.swineInterest
                  },
                  {
                    key :"trailInterest",
                    value : fields.trailInterest
                  },
                  {
                    key :"westernPleasureInterest",
                    value : fields.westernPleasureInterest
                  },
                  {
                    key :"wildlifeInterest",
                    value : fields.wildlifeInterest
                  }
                ],
              }
            }
          }
        )
        useShowMessage(true)
      } catch (e){
        console.log('error', e)
      }
    } else {
      try {
        const returnValueCreateDocument = await createDocument(
          {
            variables: {
              acronym: 'NS',
              document: {
                fields: [
                  {
                    key: 'email',
                    value: email,
                  },
                  {
                    key : "barrelRacingInterest",
                    value : fields.barrelRacingInterest
                  },
                  {
                    key :"birdInterest",
                    value : fields.birdInterest
                  },
                  {
                    key :"catInterest",
                    value : fields.catInterest
                  },
                  {
                    key :"cattleInterest",
                    value : fields.cattleInterest
                  },
                  {
                    key :"cowboyMountedShootingInterest",
                    value : fields.cowboyMountedShootingInterest
                  },
                  {
                    key :"deerInterest",
                    value : fields.deerInterest
                  },
                  {
                    key :"dogInterest",
                    value : fields.dogInterest
                  },
                  {
                    key :"draftInterest",
                    value : fields.draftInterest
                  },
                  {
                    key :"dressageInterest",
                    value : fields.dressageInterest
                  },
                  {
                    key :"equineInterest",
                    value : fields.equineInterest
                  },
                  {
                    key :"eventingInterest",
                    value : fields.eventingInterest
                  },
                  {
                    key :"exoticInterest",
                    value : fields.exoticInterest
                  },
                  {
                    key :"ferretInterest",
                    value : fields.ferretInterest
                  },
                  {
                    key :"goatInterest",
                    value : fields.goatInterest
                  },
                  {
                    key :"horseEnglishInterest",
                    value : fields.horseEnglishInterest
                  },
                  {
                    key :"horseWesternInterest",
                    value : fields.horseWesternInterest
                  },
                  {
                    key :"hunterJumperInterest",
                    value : fields.hunterJumperInterest
                  },
                  {
                    key :"livestockInterest",
                    value : fields.livestockInterest
                  },
                  {
                    key :"llamasAlpacasInterest",
                    value : fields.llamasAlpacasInterest
                  },
                  {
                    key :"miniatureInterest",
                    value : fields.miniatureInterest
                  },
                  {
                    key :"otherHorseEnglishInterest",
                    value : fields.otherHorseEnglishInterest
                  },
                  {
                    key :"otherHorseWesternInterest",
                    value : fields.otherHorseWesternInterest
                  },
                  {
                    key :"petInterest",
                    value : fields.petInterest
                  },
                  {
                    key :"pleasureInterest",
                    value : fields.pleasureInterest
                  },
                  {
                    key :"ponyClubInterest",
                    value : fields.ponyClubInterest
                  },
                  {
                    key :"potBelliedPigInterest",
                    value : fields.potBelliedPigInterest
                  },
                  {
                    key :"poultryInterest",
                    value : fields.poultryInterest
                  },
                  {
                    key :"rabbitInterest",
                    value : fields.rabbitInterest
                  },
                  {
                    key :"receiveNewsletter",
                    value : true
                  },
                  {
                    key :"sheepInterest",
                    value : fields.sheepInterest
                  },
                  {
                    key :"swineInterest",
                    value : fields.swineInterest
                  },
                  {
                    key :"trailInterest",
                    value : fields.trailInterest
                  },
                  {
                    key :"westernPleasureInterest",
                    value : fields.westernPleasureInterest
                  },
                  {
                    key :"wildlifeInterest",
                    value : fields.wildlifeInterest
                  }
                ],
              }
            }
          }
        )
        setId(returnValueCreateDocument.data.createDocument.documentId)
        useShowMessage(true)
      } catch (e) {
        console.log('error', e)
      }
    }
  }

  return(
    <>
    {
      !showMessage ?
      <PreferencesForm email={email} onSubmit={onSubmit} handleChange={handleChange} />
      :
      <MessageSent/>
    }
    </>
  )
}

export default SubmitData
