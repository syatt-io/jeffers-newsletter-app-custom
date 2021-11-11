import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from "react-apollo";
import { pathOr } from 'ramda'
import ProfileLoading from '../loaders/ProfileLoading';
import PreferencesForm from './PreferencesForm'

import GET_PROFILE from '../../../graphql/getProfile.gql'
import NEWSLETTER_INTEREST from '../../../graphql/getNewsletterInterest.gql'
import UPDATE_NEWSLETTER_INTEREST from '../../../graphql/setNewsletterInterest.gql'
import CREATEDOCUMENT from '../../../graphql/createDocument.gql'

import dataFields from '../data/fields'
import dataVariables from '../data/variables'

const AccountPreferencesForm = () => {
  const [inputEdit, setInputEdit] = useState(false)
  const [fields, setFields] = useState(dataFields);

  const { data: profileData } = useQuery(GET_PROFILE)
  const [updateNewsletter] = useMutation(UPDATE_NEWSLETTER_INTEREST)
  const { email } = pathOr([], ["profile"], profileData)
  const [createDocument] = useMutation(CREATEDOCUMENT)


  const { data: newsletterInterest } = useQuery(NEWSLETTER_INTEREST, {
    variables: {
      fields: dataVariables,
      acronym: "NS",
      where: `email=${email}`
    }
  }
  )

  useEffect(() => {
    if (newsletterInterest) {
      try{
        if(newsletterInterest.documents[0].fields !== undefined){
          setInputEdit(true)
        } else {
          setInputEdit(false)
        }
      } catch (e){
        console.log('error', e)
      }

      if (inputEdit) {
        const returnValues:any = []
        newsletterInterest.documents[0].fields.map((e:any) => {
          let value = e.value;
          if(value === 'null' || value === 'false'){
            value = false
            returnValues.push(value)
          } else if (value === 'true') {
            value = true
            returnValues.push(value)
          } else {
            returnValues.push(value)
          }
        })
        const initalFields = {
          "barrelRacingInterest": returnValues[0],
          "birdInterest": returnValues[1],
          "catInterest": returnValues[2],
          "cattleInterest": returnValues[3],
          "cowboyMountedShootingInterest": returnValues[4],
          "deerInterest": returnValues[5],
          "dogInterest": returnValues[6],
          "draftInterest": returnValues[7],
          "dressageInterest": returnValues[8],
          "equineInterest": returnValues[9],
          "eventingInterest": returnValues[10],
          "exoticInterest": returnValues[11],
          "ferretInterest": returnValues[12],
          "goatInterest": returnValues[13],
          "horseEnglishInterest": returnValues[14],
          "horseWesternInterest": returnValues[15],
          "hunterJumperInterest": returnValues[16],
          "livestockInterest": returnValues[17],
          "llamasAlpacasInterest": returnValues[18],
          "miniatureInterest": returnValues[19],
          "otherHorseEnglishInterest": returnValues[20],
          "otherHorseWesternInterest": returnValues[21],
          "petInterest": returnValues[22],
          "pleasureInterest": returnValues[23],
          "ponyClubInterest": returnValues[24],
          "potBelliedPigInterest": returnValues[25],
          "poultryInterest": returnValues[26],
          "rabbitInterest": returnValues[27],
          "receiveNewsletter": returnValues[28],
          "sheepInterest": returnValues[29],
          "swineInterest": returnValues[30],
          "trailInterest": returnValues[31],
          "westernPleasureInterest": returnValues[32],
          "wildlifeInterest" : returnValues[33],
          "id" : returnValues[34],
        }
        setFields(initalFields)
      }
    }
  }, [newsletterInterest, inputEdit])

  const setNewValues = (e:any) => {
    e.preventDefault()
    setFields({
      ...fields,
      [e.target.name]: e.target.checked
    })
  }

  const editNewsletter = async (e:any) => {
    try {
      if(inputEdit){
        updateNewsletter(
          {
            variables: {
              acronym: 'NS',
              document: {
                fields: [
                  {
                    key : 'id',
                    value : fields.id
                  },
                  {
                    key : e.target.name,
                    value : e.target.checked
                  }
                ],
              }
            }
          }
        )
      } else {
        createDocument(
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
                    key : e.target.name,
                    value : e.target.checked,
                  }
                ],
              }
            }
          }
        )
        // setInputEdit(true)
      }
    }
    catch (error) {
      console.log('error', error);
    }
  }

  const handleChange = (e:any) => {
    setNewValues(e)
    editNewsletter(e)
  }

  return(
    <>
    {
      profileData ?
      <PreferencesForm handleChange={handleChange} fields={fields}/>
      :
      <ProfileLoading />
    }
    </>
  )
}

export default AccountPreferencesForm
