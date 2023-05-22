import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toogleModal } from '../../../../../redux/slices/modalSlice';
import { getResponse } from '../../../../../redux/slices/responseSlice';
import { Dropdown } from '../../../../../components/organims';
import { DropdownItem } from '../../../../../components/molecules';

import './styles.scss'
import { Icons }from '../../../../../components/icons';
import { updateTweet } from '../../../../../redux/slices/tweetsSlice';

export const ScreenActions = ({info}) => {

    const { likes,isLikeMe } = info
    const dispatch = useDispatch();

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

    const [isretweet, setIsretweet] = useState(false);

  return (
    <div className="screenActions">

        <div className="action is-blue"
            onClick={() => activeNewTweet("response")}
        >
            <div className='hover-icon'>
                <Icons.IconAswer />
            </div>
        </div>
        
        <div>
            <div className="action is-green hover-icon"
                onClick={() => setIsretweet(true)}>
                <div className="hover-icon">
                    <Icons.IconRetweet />
                </div>
            </div>
            {isretweet && (
            <Dropdown close={() => setIsretweet(false)}>
                <DropdownItem text="Retwittear" onclick={(e) => console.log(e)}>
                    <Icons.IconRetweet />
                </DropdownItem>
                <DropdownItem text="Citar Tweet" onclick={() => activeNewTweet("retweet")}>
                    <Icons.IconPencil />
                </DropdownItem>
            </Dropdown>
            )}
        </div>

        <div onClick={UpLike} className={`action is-coral hover-icon ${isLikeMe ? "is-active" : ''}`}>
            <div className='hover-icon'>
                {
                    isLikeMe ?<Icons.IconLike /> :<Icons.IconLikeFull />
                }
            </div>
        </div>
        <div className="action is-blue">
            <div className="hover-icon">
                <Icons.IconBookmarks />
            </div>
        </div>
        <div className="action is-blue">
            <div className="hover-icon">
                <Icons.IconUp />
            </div>
        </div>

    </div>
  )
}
