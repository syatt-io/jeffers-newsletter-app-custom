import React, { useState, useEffect } from 'react';
import { useLazyQuery, useQuery, useMutation } from "react-apollo";
import { pathOr } from 'ramda'
import ProfileLoading from '../loaders/ProfileLoading';
import PreferencesForm from './PreferencesForm'

import GET_PROFILE from '../../../graphql/getProfile.gql'
import NEWSLETTER_INTEREST from '../../../graphql/getNewsletterInterest.gql'
import NEWSLETTER_INTEREST_EMAIL from '../../../graphql/getNewsletterInterestEmail.gql'
import UPDATE_NEWSLETTER_INTEREST from '../../../graphql/setNewsletterInterest.gql'
import CREATEDOCUMENT from '../../../graphql/createDocument.gql'

import dataFields from '../data/fields'
import dataVariables from '../data/variables'

const AccountPreferencesForm = () => {
  const [inputEdit, setInputEdit] = useState(false)
  const [fields, setFields] = useState(dataFields);
  const [documentId, setDocumentId] = useState('');
  const { data: profileData } = useQuery(GET_PROFILE)
  const [updateNewsletter] = useMutation(UPDATE_NEWSLETTER_INTEREST)
  const { email } = pathOr([], ["profile"], profileData)
  const [createDocument] = useMutation(CREATEDOCUMENT)

  const { data: newsletterInterestEmail } = useQuery(NEWSLETTER_INTEREST_EMAIL, {
    fetchPolicy: 'no-cache',
    variables: {
      fields: 'id',
      acronym: "NS",
      where: `email=${email}`
    }
  }
  )

  useEffect(() => {
    if (newsletterInterestEmail && newsletterInterestEmail?.documents[0]?.fields[0]?.value && newsletterInterestEmail?.documents[0]?.fields[0]?.value !== "undefined") {
      setDocumentId(newsletterInterestEmail?.documents[0]?.fields[0]?.value)
      if (typeof localStorage !== "undefined") {
        try {
          localStorage?.setItem("documentIdNewsletter", newsletterInterestEmail?.documents[0]?.fields[0]?.value);
        } catch (error) {
          console.log("** ", error);
        }
      }
    } else {
      let documentIdNewsletter: any
      if (typeof localStorage !== "undefined") {
        try {
          documentIdNewsletter = localStorage?.getItem('documentIdNewsletter');
        } catch (error) {
          console.log("Error");
        }

        if (!documentIdNewsletter && documentId && documentId !== "") {
          if (typeof localStorage !== "undefined") {
            try {
              localStorage?.setItem("documentIdNewsletter", documentId);
            } catch (error) {
              console.log("** ", error);
            }
          }
        } else {
          setDocumentId(documentIdNewsletter)
        }
      }
    }
  }, [documentId, newsletterInterestEmail])

  const { data: newsletterInterest } = useQuery(NEWSLETTER_INTEREST, {
    fetchPolicy: 'no-cache',
    variables: {
      fields: dataVariables,
      acronym: "NS",
      id: documentId
    }
  }
  )

  const [getInterest] = useLazyQuery(NEWSLETTER_INTEREST, {
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    if (newsletterInterest) {
      try {
        if (newsletterInterest.document?.fields !== undefined) {
          setInputEdit(true)
        } else {
          setInputEdit(false)
        }
      } catch (e) {
        console.log('error', e)
      }

      if (inputEdit) {
        const returnValues: any = []
        newsletterInterest.document?.fields.map((e: any) => {
          let value = e.value;
          if (value === 'null' || value === 'false') {
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
          "wildlifeInterest": returnValues[33],
          "id": returnValues[34],
        }
        setFields(initalFields)
      }
    }
  }, [newsletterInterest, inputEdit])

  const setNewValues = (e: any) => {
    e.preventDefault()
    setFields({
      ...fields,
      [e.target.name]: e.target.checked
    })
  }

  const editNewsletter = async (e: any) => {
    try {
      if (inputEdit) {
        await updateNewsletter(
          {
            variables: {
              acronym: 'NS',
              document: {
                fields: [
                  {
                    key: 'id',
                    value: fields.id
                  },
                  {
                    key: e.target.name,
                    value: e.target.checked
                  }
                ],
              }
            }
          }
        )

        getInterest({
          variables: {
            fields: dataVariables,
            acronym: "NS",
            id: documentId
          }
        })

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
                      key: e.target.name,
                      value: e.target.checked,
                    },
                    {
                      key: "receiveNewsletter",
                      value: "true"
                    }
                  ],
                }
              }
            }
          )

          setDocumentId(returnValueCreateDocument.data.createDocument.documentId)

        } catch (e) {
          console.error(e)
        }

        setInputEdit(true)
      }
    }
    catch (error) {
      console.log('error', error);
    }
  }

  const handleChange = (e: any) => {
    setNewValues(e)
    editNewsletter(e)
  }

  return (
    <>
      {
        profileData ?
          <PreferencesForm handleChange={handleChange} fields={fields} />
          :
          <ProfileLoading />
      }
    </>
  )
}

export default AccountPreferencesForm
