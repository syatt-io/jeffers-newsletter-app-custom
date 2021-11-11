import React from 'react';
import RecieveNewsletter from './RecieveNewsletter'

import { useCssHandles } from 'vtex.css-handles';

const PreferencesForm = ({handleChange, fields}:any) => {

  const CSS_HANDLES = [
		'form__preferences',
		'form__receiveNewsletter',
		'form__container',
		'form__content',
		'form__itemHeading',
		'form__column',
		'form__columnEquine',
		'form__row',
    "form__inputContainer",
    "form__input",
    "form__inputLabel",
    "form__selectPreferences"
  ] as const;
  const handles = useCssHandles(CSS_HANDLES)

  return(
      <>
      <div className={handles.form__preferences}>
        <p className={handles.form__selectPreferences}>Select your preferences to receive personalized promotions</p>
        <div className={handles.form__container}>
          <div className={handles.form__itemHeading}>
            <div className={handles.form__inputContainer}>
              <input type='checkbox' id='Pet' className={handles.form__input} checked={fields.petInterest} name='petInterest' onChange={handleChange} />
              <label className={handles.form__inputLabel} htmlFor='Pet'>Pet</label>
            </div>
          </div>

          <div className={handles.form__content}>
            <div className={handles.form__column}>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Dog' checked={fields.dogInterest} name='dogInterest' onChange={handleChange} />
                <label className={handles.form__inputLabel} htmlFor='Dog'>Dog</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Cat' checked={fields.catInterest} name='catInterest' onChange={handleChange} />
                <label className={handles.form__inputLabel} htmlFor='Cat'>Cat</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Bird' checked={fields.birdInterest} name='birdInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Bird'>Bird</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Pot Bellied Pig' checked={fields.potBelliedPigInterest} name='potBelliedPigInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Pot Bellied Pig'>Pot Bellied Pig</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Ferret' checked={fields.ferretInterest} name='ferretInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Ferret'>Ferret</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Wildlife' checked={fields.wildlifeInterest} name='wildlifeInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Wildlife'>Wildlife</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Exotic/Zoo' checked={fields.exoticInterest} name='exoticInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Exotic/Zoo'>Exotic/Zoo</label>
              </div>
            </div>
          </div>
        </div>

        <div className={handles.form__container}>
          <div className={handles.form__itemHeading}>
            <div className={handles.form__inputContainer}>
              <input className={handles.form__input} type='checkbox' id='Equine' checked={fields.equineInterest} name='equineInterest' onChange={handleChange}/>
              <label className={handles.form__inputLabel} htmlFor='Equine'>Equine</label>
            </div>
          </div>

          <div className={handles.form__content}>

            <div className={`${handles.form__column} ${handles.form__columnEquine}`}>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Horse - English' checked={fields.horseEnglishInterest} name='horseEnglishInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Horse - English'>Horse - English</label>
              </div>
              <div className={handles.form__row}>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Hunter/Jumper' checked={fields.hunterJumperInterest} name='hunterJumperInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Hunter/Jumper'>Hunter/Jumper</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Dressage' checked={fields.dressageInterest} name='dressageInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Dressage'>Dressage</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Eventing' checked={fields.eventingInterest} name='eventingInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Eventing'>Eventing</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Pleasure' checked={fields.pleasureInterest} name='pleasureInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Pleasure'>Pleasure</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Pony Club' checked={fields.ponyClubInterest} name='ponyClubInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Pony Club'>Pony Club</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Other-Horse-English' checked={fields.otherHorseEnglishInterest} name='otherHorseEnglishInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Other-Horse-English'>Other</label>
                </div>
              </div>
            </div>

            <div className={`${handles.form__column} ${handles.form__columnEquine}`}>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Horse - Western' checked={fields.horseWesternInterest} name='horseWesternInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Horse - Western'>Horse - Western</label>
              </div>
              <div className={handles.form__row}>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Western Pleasure' checked={fields.westernPleasureInterest} name='westernPleasureInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Western Pleasure'>Western Pleasure</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Trail' checked={fields.trailInterest} name='trailInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Trail'>Trail</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Cowboy Mounted Shooting' checked={fields.cowboyMountedShootingInterest} name='cowboyMountedShootingInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Cowboy Mounted Shooting'>Cowboy Mounted Shooting</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Barrel Racing' checked={fields.barrelRacingInterest} name='barrelRacingInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Barrel Racing'>Barrel Racing</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Other-Horse-Western' checked={fields.otherHorseWesternInterest} name='otherHorseWesternInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Other-Horse-Western'>Other</label>
                </div>
              </div>
            </div>

            <div className={handles.form__column}>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Draft' checked={fields.draftInterest} name='draftInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Draft'>Draft</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Miniature' checked={fields.miniatureInterest} name='miniatureInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Miniature'>Miniature</label>
              </div>
            </div>

          </div>
        </div>

        <div className={handles.form__container}>
          <div className={handles.form__itemHeading}>
            <div className={handles.form__inputContainer}>
              <input className={handles.form__input} type='checkbox' id='Livestock' checked={fields.livestockInterest} name='livestockInterest' onChange={handleChange}/>
              <label className={handles.form__inputLabel} htmlFor='Livestock'>Livestock</label>
            </div>
          </div>

          <div className={handles.form__content}>
            <div className={handles.form__column}>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Cattle' checked={fields.cattleInterest} name='cattleInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Cattle'>Cattle</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Swine' checked={fields.swineInterest} name='swineInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Swine'>Swine</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Sheep' checked={fields.sheepInterest} name='sheepInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Sheep'>Sheep</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Poultry' checked={fields.poultryInterest} name='poultryInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Poultry'>Poultry</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Goat' checked={fields.goatInterest} name='goatInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Goat'>Goat</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Rabbit' checked={fields.rabbitInterest} name='rabbitInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Rabbit'>Rabbit</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Deer' checked={fields.deerInterest} name='deerInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Deer'>Deer</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Llamas-Alpacas' checked={fields.llamasAlpacasInterest} name='llamasAlpacasInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Llamas-Alpacas'>Llamas &amp; Alpacas</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={handles.form__receiveNewsletter}>
        <RecieveNewsletter checked={fields.receiveNewsletter} onChange={handleChange} />
      </div>
      </>
  )
}

export default PreferencesForm
