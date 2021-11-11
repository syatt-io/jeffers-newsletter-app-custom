import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

const LinkNewsletterPreferences = ({ render, intl }:any) => {
  return render([
    {
      name: intl.formatMessage({ id: 'Preferences' }),
      path: '/preferences',
    }
  ])
}

LinkNewsletterPreferences.propTypes = {
  render: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(LinkNewsletterPreferences)
