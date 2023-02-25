import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { updateTweet } from '../../features/counter/tweetsSlice'

import Icons from '../icons'
import { ImgContent } from './ImgsContents'
import { Retweet } from './Retweet'

export const Tweet = ({info}) => {
    
    const dispatch = useDispatch();

    const {id,answers,body,likes,isLikeMe,time,name,retweets,tweet_name,url,imgs,retweet} = info

    const UpLike = () => {

        let upLike;
        let isUp;

        if(isLikeMe){
            upLike = false
            isUp = likes -1
        }else {
            upLike = true
            isUp = likes + 1
        }

        dispatch(updateTweet({...info,isLikeMe:upLike,likes:isUp}))
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
                    <span className="bold">{name}</span> <span className="lighter">{tweet_name} · {time}</span>
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
                
                {
                    retweet && <Retweet {...retweet}/>
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

                    <div onClick={UpLike} className={(isLikeMe)?"is-active" :null}>
                        {
                            (isLikeMe)
                            ?<Icons.IconLike />
                            :<Icons.IconLikeFull />
                        }
                        <span className="lighter">{likes}</span>
                    </div>
                    <div>
                        <Icons.IconShare />
                    </div>

                </div>
            </div>

        </div>
    )
}
