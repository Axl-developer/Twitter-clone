import React from 'react'
import { Title } from '../../atoms'

import './styles.scss'

export const Tab = ({tabs,change,select,variant}) => {
  return (
    <div className='tab'>
      <div className='tab-content'>
        {
          tabs.map( tab =>
            <div className={`tab-item ${(select === tab.id) && 'active'} ${variant}`} key={tab.text} onClick={()=>change(tab.id)}>
              <div className='tab-item-content'>
                <Title text={tab.text} variant={`fz15 ${(select !== tab.id)?'grey':'bold'}`}/>
                <div className="border-bottom"></div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
