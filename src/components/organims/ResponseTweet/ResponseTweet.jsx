import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImgContent, Response, Retweet } from '../../molecules';

import './styles.scss'

export const ResponseTweet = ({id,url,nombre,body,time,tweet_nom,imgs,retweet,response,isModalResponse,isHilo = false}) => {
  return (
    <div className='responseTweet'>
        <div className="right">
            <div className="content-img">
                <img src={process.env.PUBLIC_URL + url} alt="img"/>
            </div>

            {
                (isModalResponse || isHilo) && <div className="border-hilo"></div>
            }
        </div>

        <div className="left">
            <div>
                <span className="bold">{nombre}</span> <span className="lighter">{tweet_nom} · {time}</span>
            </div>

            <div className="content_Tweet">
                {body}
            </div>
            
            {
                imgs &&
                <NavLink to={`/home/${id}`}>
                    <ImgContent imgs={imgs}/>
                </NavLink>
            }
        </div>
    </div>
  )
}
