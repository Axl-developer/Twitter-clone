import React from 'react'
import { Title } from '../../atoms'

import './styles.scss'

export const Response = ({tweet_nom}) => {
  return (
    <div className='response'>Respondiendo a <Title text={tweet_nom} variant={'blue'} /></div>
  )
}
