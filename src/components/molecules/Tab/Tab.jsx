import React from 'react'

import './styles.scss'
import { Title } from '../../atoms'

export const Tab = ({tabs,change,select}) => {
  return (
    <div className='tab'>
      {
        tabs.map( tab =>
          <div className={`${(select === tab.id) && 'active'} tab-item`} key={tab.text} onClick={()=>change(tab.id)}>
            <div className='tab-item-content'>
              <Title text={tab.text} variant={`fz15 ${(select !== tab.id)?'grey':'bold'}`}/>
              <div className="border-bottom"></div>
            </div>
          </div>
      )
      }
    </div>
  )
}
