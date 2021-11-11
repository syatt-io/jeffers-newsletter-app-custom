import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import NewsletterPreferencesPage from './components/AccountNewsletter/NewsletterPreferences'

const NewsletterPreferences = () => (
  <Fragment>
    <Route path="/preferences" exact component={NewsletterPreferencesPage} />
  </Fragment>
)

export default NewsletterPreferences
