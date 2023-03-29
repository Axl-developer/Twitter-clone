import React from 'react'
import { ImgContent } from '../Imgs-content/ImgsContents';

import './styles.scss';

export const Retweet = ({url,name,body,imgs,isModalResponse = false}) => {
  return (
    <div className='retweet'>
        <div className="retweet__head">
            <div className='retweet__person'>
                <div className="content-img">
                    <img src={process.env.PUBLIC_URL + url} alt="img"/>
                </div>
                <span className="bold">{name}</span> <span className="lighter">@Google · 1h</span>
            </div>

            <div className="content_Tweet">
                {body}
            </div>
        </div>
            {(imgs && !isModalResponse) && <ImgContent imgs={imgs}/>}
    </div>
  )
}