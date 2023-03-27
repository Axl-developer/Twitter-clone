import React from 'react'
import { Span } from '../../atoms'

import './styles.scss'

export const Response = ({tweet_nom}) => {
  return (
    <div className='response'>Respondiendo a <Span text={tweet_nom} variant={'blue'} /></div>
  )
}
