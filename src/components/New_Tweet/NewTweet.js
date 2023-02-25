import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import Icons from '../icons'


export const NewTweet = ({setArrTweets}) => {

    const [id, setId] = useState(12)

    const [values, handleInputChange, reset] = useForm({
        tweet:''
    })

    const {tweet} = values

    const New_Tweet= {
        id:id,
        answers:0,
        body:tweet,
        likes:0,
        time:'Ahora',
        nombre:"Usuario",
        retweets:0,tweet_nom:"@user",
        url:"/assets/perfil/pexels-ekrulila-4040433.jpg"
    }

    const Addtweet = () => {
        
        reset();

        if(tweet.length > 0){
            setArrTweets(c => [New_Tweet,...c])
            setId(id+1)
        }
    }

    return (
        <div className="newTweet__content__newTweet" id="NewTweet">
            <div className="newTweet__Tweet">
                <div>
                    <div className="newTweet__img_content">
                        <img src={ process.env.PUBLIC_URL +  "/assets/perfil/pexels-ekrulila-4040433.jpg"} alt="img"/>    
                    </div>
                </div>


                <div className="newTweet__Tweet_text">

                    <textarea
                        type="text"
                        id="textarea"
                        value={tweet}
                        name="tweet"
                        maxLength="200"
                        onChange={handleInputChange}
                        placeholder="¿Qué está pasando?"
                        />
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
