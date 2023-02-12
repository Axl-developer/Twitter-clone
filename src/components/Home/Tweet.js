import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Icons from '../icons'
import { ImgsContents } from './ImgsContents'

export const Tweet = ({info}) => {
    
    const [Like, setLike] = useState(false)
    const {id,answers,body,likes,time,nombre,retweets,tweet_nom,url,imgs} = info

    const [ContLike, setContLike] = useState(likes)
    const UpLike = () => {
        if(Like)
            {
                setLike(!Like)
                setContLike(ContLike-1)
            }
        else{
                setLike(!Like)
                setContLike(ContLike+1)
            }
    }

    return (
        <div className="tweet__card">

            <div className="right">
                <div className="content-img">
                    <img src={process.env.PUBLIC_URL + url} alt="img"/>
                </div>
            </div>

            <div className="left">
                <div>
                    <span className="bold">{nombre}</span> <span className="lighter">{tweet_nom} · {time}</span>
                </div>

                <div className="content_Tweet">
                    {body}
                </div>
                {(imgs.length >= 1)
                    ?<NavLink to={`/home/${id}`}>
                        <div className={(imgs.length === 1)?"img-content":"imgs-content"}>
                            
                            {
                                (imgs.length >= 1)
                                ?<ImgsContents idtweet={id} imgs={imgs} />
                                : null
                            }
                            
                        </div>
                    </NavLink>
                    :''
                }
                <div className="content_actions">
                    <div>
                        <Icons.IconAswer />
                        <span className="lighter">{answers}</span>
                    </div>
                    
                    <div>
                        <Icons.IconRetweet />
                        <span className="lighter">{retweets}</span>
                    </div>

                    <div onClick={UpLike} className={(Like)?"is-active" :null}>
                        {
                            (Like)
                            ?<Icons.IconLike />
                            :<Icons.IconLikeFull />
                        }
                        <span className="lighter">{ContLike}</span>
                    </div>
                    <div>
                        <Icons.IconShare />
                    </div>

                </div>
            </div>

        </div>
    )
}
