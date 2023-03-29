import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { toogleModal } from "../../../redux/slices/modalSlice";
import { getResponse } from "../../../redux/slices/responseSlice";
import { updateTweet } from "../../../redux/slices/tweetsSlice";


import Icons from "../../icons";
import { Dropdown } from "../../organims";
import { DropdownItem } from "../DropdownItem/DropdownItem";
import './styles.scss'

export const Actions = ({info}) => {

    const dispatch = useDispatch();

    const {answers,likes,isLikeMe,retweets} = info

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
    <div className="actions">
      <div
        className="action is-blue"
        onClick={() => activeNewTweet("response")}
      >
        <div className="hover-icon">
          <Icons.IconAswer />
        </div>
        <span className="lighter">{answers}</span>
      </div>

      <div>
        <div
          className="action is-green"
          onClick={() => setIsretweet(true)}
        >
          <div className="hover-icon">
            <Icons.IconRetweet />
          </div>
          <span className="lighter">{retweets}</span>
        </div>
        {isretweet && (
          <Dropdown close={() => setIsretweet(false)}>
            <DropdownItem text="Retwittear" onclick={(e) => console.log(e)}>
              <Icons.IconRetweet />
            </DropdownItem>
            <DropdownItem
              text="Citar Tweet"
              onclick={() => activeNewTweet("retweet")}
            >
              <Icons.IconPencil />
            </DropdownItem>
          </Dropdown>
        )}
      </div>

      <div
        onClick={UpLike}
        className={`action is-coral ${isLikeMe ? "is-active" : null}`}
      >
        <div className="hover-icon">
          {isLikeMe ? <Icons.IconLike /> : <Icons.IconLikeFull />}
        </div>
        <span className="lighter">{likes}</span>
      </div>
      <div>
        <Icons.IconShare />
      </div>
    </div>
  );
};
