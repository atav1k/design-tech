import { Button as BaseButton } from 'rebass'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { space, width, fontSize, color } from 'styled-system'
import theme from './theme'

const size = props => {
  switch (props.size) {
    case 'small':
      return {
        fontSize: `${theme.fontSizes[1]}px`,
        padding: `${theme.space[1]}px ${theme.space[2]}px`
      }
    default:
      return {
        fontSize: `${theme.fontSizes[2]}px`,
        padding: `${theme.space[2]}px ${theme.space[3]}px`
      }
  }
}

const variant = props => {
  switch (props.variant) {
    case 'primary':
      return {
          backgroundColor: `${theme.colors.primaryDark}`,
          color: 'white'
      }
    case 'destructive':
      return {
          backgroundColor: 'white',
          color: `${theme.colors.alertDark}`
      }
    case 'link':
      return {
          backgroundColor: 'white',
          color: `${theme.colors.text}`,
          border: 0,
      }
    default:
      return {
        backgroundColor: 'white',
        color: `${theme.colors.text}`
      }
  }
}

const Button = styled(BaseButton)`
  cursor: pointer;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07));
  }
  ${variant}
  ${size}
  ${space}
  ${color}
`

Button.displayName = 'Button'

Button.defaultProps = {
  lineHeight: 1,
  theme: theme,
  as: 'button',
  fontWeight: '600',
  m: 0,
  border: 1,
  borderColor: 'border',
  borderRadius: 4,
}

export default Button
