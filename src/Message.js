import styled, { css } from 'styled-components'
import { space, width } from 'styled-system'
import theme from './theme'

const messageBase = css`
  border-radius: 4px;
  font-size: ${theme.fontSize[2]};
  padding: 16px 32px;
  margin: 20px;
  :hover {
    cursor: pointer;
  }
`;

const Message = styled.div`
  ${messageBase};
`
