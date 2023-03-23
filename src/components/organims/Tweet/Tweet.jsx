import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Icons from '../../icons'
import { DropdownItem, Retweet } from '../../molecules'

import { getResponse } from '../../../redux/slices/responseSlice'
import { toogleModal } from '../../../redux/slices/modalSlice'
import { ImgContent } from '../../molecules/Imgs-content/ImgsContents'
import { Dropdown } from '../Dropdown/Dropdown'
import { updateTweet } from '../../../redux/slices/tweetsSlice'

export const Tweet = ({info}) => {
    
    const dispatch = useDispatch();

    const {id,answers,body,likes,isLikeMe,time,name,retweets,tweet_name,url,imgs,retweet} = info

    const [isretweet, setIsretweet] = useState(false);

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

    const activeNewTweet = (type) => {
        dispatch(toogleModal(true))
        dispatch(getResponse({
            tweet:info,
            type:type
        }))
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
                    <div className='content_action is-blue' onClick={()=>activeNewTweet('response')}>
                        <div className='hover-icon'>
                            <Icons.IconAswer />
                        </div>
                        <span className="lighter">{answers}</span>
                    </div>
                    
                    
                    <div>
                        <div className='content_action is-green' onClick={()=>setIsretweet(true)}>
                            <div className="hover-icon">
                                <Icons.IconRetweet />
                            </div>
                            <span className="lighter">{retweets}</span>
                        </div>
                        {
                            isretweet &&
                            <Dropdown close={()=> setIsretweet(false)}>
                                <DropdownItem
                                    text='Retwittear'
                                    onclick={(e)=>console.log(e)}
                                >
                                    <Icons.IconRetweet/>
                                </DropdownItem>
                                <DropdownItem
                                    text='Citar Tweet'
                                    onclick={()=>activeNewTweet('retweet')}
                                >
                                    <Icons.IconRetweet/>
                                </DropdownItem>
                            </Dropdown>
                        }
                    </div>

                    <div onClick={UpLike} className={`content_action is-coral ${(isLikeMe)?"is-active" :null}`}>
                        <div className="hover-icon">
                            {
                                (isLikeMe)
                                ?<Icons.IconLike />
                                :<Icons.IconLikeFull />
                            }
                        </div>
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
