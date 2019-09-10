import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import IconSearch from '../icon/Search'

const propTypes = {
  /** Determine if the option should have a rounded bottom */
  roundedBottom: PropTypes.bool,
  /** Option icon */
  icon: PropTypes.node,
  /** Search term used to highlight it into the label */
  searchTerm: PropTypes.string.isRequired,
  /** Option title */
  value: PropTypes.string.isRequired,
  /** Option key used in the list */
  key: PropTypes.string.isRequired,
  /** Determine if an option is selected and should be highlighted */
  selected: PropTypes.bool.isRequired,
  /** Click handler */
  onClick: PropTypes.func.isRequired,
}

const Option: React.FunctionComponent<
  PropTypes.InferProps<typeof propTypes>
> = props => {
  const {
    icon,
    selected,
    roundedBottom,
    searchTerm,
    value,
    key,
    onClick,
  } = props
  const [highlightOption, setHighlightOption] = useState(false)

  const renderOptionValue = (): string | React.ReactElement => {
    const index = value.toLowerCase().indexOf(searchTerm.toLowerCase())
    if (index === -1) {
      return value
    }
    const prefix = value.substring(0, index)
    const match = value.substr(index, searchTerm.length)
    const suffix = value.substring(index + match.length)
    return (
      <span className="truncate">
        <span className="fw7">{prefix}</span>
        {match}
        <span className="fw7">{suffix}</span>
      </span>
    )
  }

  const buttonClasses = classnames('bn  w-100 tl pointer pa4 f6', {
    'br2 br--bottom': roundedBottom,
    'bg-muted-5': highlightOption || selected,
    'bg-base': !highlightOption && !selected,
  })

  return (
    <button
      key={key}
      className={buttonClasses}
      onFocus={() => setHighlightOption(true)}
      onMouseEnter={() => setHighlightOption(true)}
      onMouseLeave={() => setHighlightOption(false)}
      onClick={onClick}>
      <span className="h1 flex items-center">
        <span className="mr3 c-muted-2 flex pt1">
          {icon || <IconSearch size={14} />}
        </span>
        {renderOptionValue()}
      </span>
    </button>
  )
}

Option.propTypes = propTypes

export default Option
