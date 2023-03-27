import React from 'react'
import { NavLink } from 'react-router-dom'
import { Actions } from '../Actions/Actions';
import { ImgContent } from '../Imgs-content/ImgsContents';
import { Response } from '../Response/Response';
import { Retweet } from '../Retweet/Retweet';

import './styles.scss';

export const BodyTweet = ({info}) => {

const {id,url,nombre,body,time,tweet_nom,imgs,retweet,response,isResponse,isModalResponse,isHilo = false, actions = false} = info
console.log(info)

  return (
    <div className={`bodyTweet ${isResponse && 'is-response'}`}>
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
            
            {
                response && <Response tweet_nom={response.tweet_nom}/>
            }

            <div className="content_Tweet">
                {body}
            </div>
            
            {
                (imgs && !isModalResponse) &&
                <NavLink to={`/home/${id}`}>
                    <ImgContent imgs={imgs}/>
                </NavLink>
            }

            {
                retweet && <Retweet {...retweet} isResponse={isModalResponse}/>
            }

            {
                isModalResponse && <Response tweet_nom={tweet_nom}/>
            }
            
            {
                actions && <Actions info={info} />
            }
        </div>
    </div>
  )
}
