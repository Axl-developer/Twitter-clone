import React, { useState } from 'react'
import { useParams } from 'react-router'
import { GetTweetById } from '../../helpers/getTweetByid'
import { Header } from '../Headers/Header'
import { ImgsContents } from './ImgsContents'
import { Tweet } from './Tweet'
import { Tweets } from './Tweets'

export const TweetScreen = () => {

    const {tweetid} = useParams()

    const info = GetTweetById(Tweets,Number(tweetid))
    const {id,answers,body,likes,time,nombre,retweets,tweet_nom,url,imgs} = info

    const [Like, setLike] = useState(false)

    

    const comments = [
        {id:1,
        nombre:'name',
        answers:10,
        likes:478,
        retweets:66,
        tweet_nom:'@name',
        time:'5h',
        body:'Deserunt irure Lorem occaecat aliqua laboris et pariatur.',
        url:"https://pbs.twimg.com/profile_images/988272404915875840/lE7ZkrO-_400x400.jpg",
        imgs:[]},

        {id:2,
        nombre:'name',
        answers:10,
        likes:478,
        retweets:66,
        tweet_nom:'@name',
        time:'5h',
        body:'Deserunt irure Lorem occaecat aliqua laboris et pariatur.',
        url:"https://pbs.twimg.com/profile_images/988272404915875840/lE7ZkrO-_400x400.jpg",
        imgs:[]},

        {id:3,
        nombre:'name',
        answers:10,
        likes:478,
        retweets:66,
        tweet_nom:'@name',
        time:'5h',
        body:'Deserunt irure Lorem occaecat aliqua laboris et pariatur.',
        url:"https://pbs.twimg.com/profile_images/988272404915875840/lE7ZkrO-_400x400.jpg",
        imgs:[]},
    ]
    
    return (
        <div>
            <Header title={'Inicio'}/>
            
            <div className="screenTweet__containerTweet">

                <div className="screenTweet__HeadTweet">
                    <div className="content-img">
                        <img src="https://pbs.twimg.com/profile_images/1278376724900786182/zXbHm9d-_x96.jpg" atl="img"/>
                    </div>
                    <div className="screenTweet__names">
                        <h1 className="bold">{nombre}</h1>
                        <span className="lighter">{tweet_nom}</span>
                    </div>
                </div>

                <div className="screenTweet__tweet">
                    <div className="screenTweet__content">
                    {body}
                    </div>
                    
                    {(imgs.length >= 1)
                    ?
                        <div className={(imgs.length === 1)?"img-content":"imgs-content"}>
                            
                            {
                                (imgs.length >= 1)
                                ?<ImgsContents idtweet={id} imgs={imgs} />
                                : null
                            }
                            
                        </div>
                    :''
                }

                    <div className="screenTweet__times">
                        <span className="lighter">9:14 p.m - 15 abr 2021 Twitter for iPhone</span>
                    </div>

                </div>

                <div className="screenTweet__datas">
                        <div className="screenTweet__data">
                            <h1 className="bold">{retweets}</h1>
                            <span className="lighter">Retweets</span>
                            <h1 className="bold">{answers}</h1>
                            <span className="lighter">Citar Tweet</span>
                            <h1 className="bold">{likes}</h1>
                            <span className="lighter">Me gusta</span>   
                        </div>
                    </div>

                <div className="screenTweet__icons">

                    <div>
                        <svg viewBox="0 0 24 24"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                    </div>
                    
                    <div>
                        <svg viewBox="0 0 24 24"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
                    </div>

                    <div onClick={() => setLike(!Like)} className={(Like)?"like" :null}>
                        {
                            (Like)
                            ?<svg viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path></g></svg>
                            :<svg viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
                        }
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24"><g><path d="M18.466 14.928c-1.118 0-2.106.525-2.765 1.328l-6.587-3.358c.066-.27.11-.55.11-.842 0-.287-.042-.562-.106-.83l6.575-3.32c.658.81 1.65 1.34 2.774 1.34 1.978 0 3.586-1.606 3.586-3.58s-1.608-3.58-3.586-3.58-3.586 1.606-3.586 3.58c0 .314.054.614.13.904L8.463 9.876c-.656-.846-1.672-1.4-2.824-1.4-1.98 0-3.588 1.606-3.588 3.58s1.61 3.58 3.587 3.58c1.146 0 2.158-.55 2.815-1.39l6.56 3.343c-.08.294-.135.598-.135.918 0 1.974 1.608 3.58 3.586 3.58s3.586-1.606 3.586-3.58-1.61-3.58-3.586-3.58zm0-11.34c1.15 0 2.086.932 2.086 2.078s-.936 2.08-2.086 2.08-2.086-.934-2.086-2.08.935-2.08 2.086-2.08zM5.64 14.134c-1.15 0-2.088-.933-2.088-2.08s.937-2.08 2.087-2.08 2.085.935 2.085 2.08-.936 2.08-2.086 2.08zm12.826 6.452c-1.15 0-2.086-.933-2.086-2.08s.936-2.08 2.086-2.08 2.086.935 2.086 2.08-.936 2.08-2.086 2.08z"></path></g></svg>
                    </div>

                </div>

            </div>
            
            <div className="screenTweet__comments">
                {
                    comments.map( comment => 
                        <div className="screenTweet__comment" key={comment.id}>

                           <Tweet info={comment}/>

                        </div>
                    )
                }
            </div>

        </div>
    )
}