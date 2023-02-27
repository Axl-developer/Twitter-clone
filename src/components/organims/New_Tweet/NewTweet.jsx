import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TextArea } from '../../atoms'
import { Retweet } from '../../molecules'
import Icons from '../../icons'

import { useForm } from '../../../hooks/useForm'
import { addTweet } from '../../../features/tweet/tweetsSlice'
import { toogleModal } from '../../../features/modal/modalSlice'

import './styles.scss';
import { cleanResponse } from '../../../features/response/responseSlice'

const retweet ={
    id:0,
    body:"From learning Navigation with Compose and Lists to creating designs that were fully functional Compose, you earned it @blundell_apps! #AndroidDevChallenge",
    time:'6h',
    name:"Android Developers",
    tweet_name:"@AndroidDev",
    url:"/assets/perfil/VRtfrDXq_x96.png",
    imgs:[{id:2,url:'/assets/imgs/pexels-mihis-alex-21022.jpg'},{id:3,url:'/assets/imgs/pexels-thorn-yang-441794.jpg'}]
}

const NewTweet = ({isModalTweet = false, variant='',}) => {

   console.log('creo que esto es un template xd')
    const dispatch = useDispatch()
    const dataTweet = useSelector((state) => state.response)


    const [values, handleInputChange, reset] = useForm({
        tweet:''
    })
    const {tweet} = values

    const id = Date.now()

    const initialTweet= {
        id:id,
        answers:0,
        body:tweet,
        likes:0,
        time:'Ahora',
        nombre:"Usuario",
        retweets:0,
        tweet_nom:"@user",
        url:"/assets/perfil/pexels-ekrulila-4040433.jpg"
    }

    const newTweet = {
        ...initialTweet,
        ...( dataTweet.type === 'retweet' && {retweet:dataTweet.tweet} ),
        ...( dataTweet.type === 'response' && {response:dataTweet.tweet})
    }

    console.log(newTweet)

    const Addtweet = () => {
        (tweet) &&
            dispatch(addTweet(newTweet))
            dispatch(toogleModal(false))
            dispatch(cleanResponse())
            reset();
    }


    return (
        <div className={`newTweet__content ${variant}`} id="NewTweet">
            <div className="newTweet__Tweet">
                <div>
                    <div className="newTweet__img_content">
                        <img src={ process.env.PUBLIC_URL +  "/assets/perfil/pexels-ekrulila-4040433.jpg"} alt="img"/>    
                    </div>
                </div>


                <div className="newTweet__Tweet_text">

                    <TextArea onChange={handleInputChange} value={tweet} />

                    {
                        newTweet.retweet && isModalTweet && <Retweet {...newTweet.retweet}/>
                    }

                    <div className="newTweet__config">
                        <div className="newTweet__icon_content is-single">
                            <Icons.IconWorld/>
                        </div>
                        <span>Cualquier persona puede responder</span>
                    </div>

                    <div className="newTweet__btns_content">
                        <div className="newTweet__icons_content">
                            <div className="newTweet__icon_content">
                                <Icons.IconImage />
                            </div>
                            <div className="newTweet__icon_content">
                                <Icons.IconGif />
                            </div>
                            <div className="newTweet__icon_content">
                                <Icons.IconBars />
                            </div>
                            <div className="newTweet__icon_content">
                                <Icons.IconEmoji />
                            </div>
                            <div className="newTweet__icon_content">
                                <Icons.IconCalendar />
                            </div>

                            <div className="newTweet__icon_content">
                                <div className="loadLength">
                                    <Icons.IconCircle id="circle"/>
                                </div>
                            </div>

                        </div>

                        <div className="newTweet__contentBtn">
                            <button onClick={Addtweet} className="btn btn_secondary">Tweetear</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewTweet;