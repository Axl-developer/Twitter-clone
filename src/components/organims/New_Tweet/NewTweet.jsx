import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TextArea } from '../../atoms'
import { Retweet,BodyTweet } from '../../molecules'
import Icons from '../../icons'

import { useForm } from '../../../hooks/useForm'
import { toogleModal } from '../../../redux/slices/modalSlice'
import { cleanResponse } from '../../../redux/slices/responseSlice'
import { addTweet } from '../../../redux/slices/tweetsSlice'

import './styles.scss';

export const NewTweet = ({isModalTweet = false, variant='',}) => {

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

    const Addtweet = () => {
        (tweet) &&
            dispatch(addTweet(newTweet))
            dispatch(toogleModal(false))
            dispatch(cleanResponse())
            reset();
    }

    return (
        <div className={`newTweet__content ${variant}`} id="NewTweet">
            {
                (newTweet.response && isModalTweet) && 
                <>
                    <BodyTweet info={{...newTweet.response}} isModalResponse={true} variant="is-inModal" />
                </>
            }
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
                                <Icons.IconEmojiHappy />
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
                            <button onClick={Addtweet} className="btn btn_secondary">Twittear</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}