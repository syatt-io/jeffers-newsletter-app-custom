import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { DisclosureLayout, DisclosureTrigger, DisclosureContent } from 'vtex.disclosure-layout'


const PreferencesForm = ({email, onSubmit, handleChange}:any) => {

  const CSS_HANDLES = [
		'form__heading',
		'form__column',
		'form__columnEquine',
		'form__row',
		'form__button',
    "form__inputContainer",
    "form__input",
    "form__inputLabel",
  ] as const;
  const handles = useCssHandles(CSS_HANDLES)

  return(
      <form onSubmit={onSubmit}>
        <h1 className={handles.form__heading}>Select your interests</h1>
        <input type='hidden' id ='email' name='email' value={email} readOnly/>

        <DisclosureLayout>
          <DisclosureTrigger>
            <div className={handles.form__inputContainer}>
              <input type='checkbox' id='Pet' className={handles.form__input} name='petInterest' onChange={handleChange} />
              <label className={handles.form__inputLabel} htmlFor='Pet'>Pet</label>
            </div>
          </DisclosureTrigger>

          <DisclosureContent>
            <div className={handles.form__column}>
            <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Dog' name='dogInterest' onChange={handleChange} />
                <label className={handles.form__inputLabel} htmlFor='Dog'>Dog</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Cat' name='catInterest' onChange={handleChange} />
                <label className={handles.form__inputLabel} htmlFor='Cat'>Cat</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Bird' name='birdInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Bird'>Bird</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Pot Bellied Pig' name='potBelliedPigInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Pot Bellied Pig'>Pot Bellied Pig</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Ferret' name='ferretInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Ferret'>Ferret</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Wildlife' name='wildlifeInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Wildlife'>Wildlife</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Exotic/Zoo' name='exoticInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Exotic/Zoo'>Exotic/Zoo</label>
              </div>
            </div>
          </DisclosureContent>
        </DisclosureLayout>

        <DisclosureLayout>
          <DisclosureTrigger>
          <div className={handles.form__inputContainer}>
              <input className={handles.form__input} type='checkbox' id='Equine' name='equineInterest' onChange={handleChange}/>
              <label className={handles.form__inputLabel} htmlFor='Equine'>Equine</label>
            </div>
          </DisclosureTrigger>

          <DisclosureContent>

            <div className={`${handles.form__column} ${handles.form__columnEquine}`}>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Horse - English' name='horseEnglishInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Horse - English'>Horse - English</label>
              </div>
              <div className={handles.form__row}>
              <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Hunter/Jumper' name='hunterJumperInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Hunter/Jumper'>Hunter/Jumper</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Dressage' name='dressageInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Dressage'>Dressage</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Eventing' name='eventingInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Eventing'>Eventing</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Pleasure' name='pleasureInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Pleasure'>Pleasure</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Pony Club' name='ponyClubInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Pony Club'>Pony Club</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Other-Horse-English' name='otherHorseEnglishInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Other-Horse-English'>Other</label>
                </div>
              </div>
            </div>

            <div className={`${handles.form__column} ${handles.form__columnEquine}`}>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Horse - Western' name='horseWesternInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Horse - Western'>Horse - Western</label>
              </div>
              <div className={handles.form__row}>
              <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Western Pleasure' name='westernPleasureInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Western Pleasure'>Western Pleasure</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Trail' name='trailInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Trail'>Trail</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Cowboy Mounted Shooting' name='cowboyMountedShootingInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Cowboy Mounted Shooting'>Cowboy Mounted Shooting</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Barrel Racing' name='barrelRacingInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Barrel Racing'>Barrel Racing</label>
                </div>
                <div className={handles.form__inputContainer}>
                  <input className={handles.form__input} type='checkbox' id='Other-Horse-Western' name='otherHorseWesternInterest' onChange={handleChange}/>
                  <label className={handles.form__inputLabel} htmlFor='Other-Horse-Western'>Other</label>
                </div>
              </div>
            </div>

            <div className={handles.form__column}>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Draft' name='draftInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Draft'>Draft</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Miniature' name='miniatureInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Miniature'>Miniature</label>
              </div>
            </div>

          </DisclosureContent>
        </DisclosureLayout>

        <DisclosureLayout>
          <DisclosureTrigger>
          <div className={handles.form__inputContainer}>
              <input className={handles.form__input} type='checkbox' id='Livestock' name='livestockInterest' onChange={handleChange}/>
              <label className={handles.form__inputLabel} htmlFor='Livestock'>Livestock</label>
            </div>
          </DisclosureTrigger>

          <DisclosureContent>
            <div className={handles.form__column}>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Cattle' name='cattleInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Cattle'>Cattle</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Swine' name='swineInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Swine'>Swine</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Sheep' name='sheepInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Sheep'>Sheep</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Poultry' name='poultryInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Poultry'>Poultry</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Goat' name='goatInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Goat'>Goat</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Rabbit' name='rabbitInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Rabbit'>Rabbit</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Deer' name='deerInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Deer'>Deer</label>
              </div>
              <div className={handles.form__inputContainer}>
                <input className={handles.form__input} type='checkbox' id='Llamas-Alpacas' name='llamasAlpacasInterest' onChange={handleChange}/>
                <label className={handles.form__inputLabel} htmlFor='Llamas-Alpacas'>Llamas &amp; Alpacas</label>
              </div>
            </div>
          </DisclosureContent>
        </DisclosureLayout>

        <button type='submit' className={handles.form__button}>EMAIL MY CODE</button>

      </form>
  )
}

export default PreferencesForm
