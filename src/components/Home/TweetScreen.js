import React, { useState } from 'react'
import { useParams } from 'react-router'
import { GetTweetById } from '../../helpers/getTweetByid'
import { Header } from '../Headers/Header'
import Icons from '../icons'
import { ImgsContents } from './ImgsContents'
import { Tweet } from './Tweet'
import { Tweets } from './Tweets'

export const TweetScreen = () => {

    const {tweetid} = useParams()

    const info = GetTweetById(Tweets,Number(tweetid))
    const {id,answers,body,likes,nombre,retweets,tweet_nom,url,imgs} = info

    const [Like, setLike] = useState(false)
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

    const comments = [
        {id:1,
        nombre:'Juanjo',
        answers:10,
        likes:478,
        retweets:66,
        tweet_nom:'@juanOr',
        time:'5h',
        body:'Deserunt irure Lorem occaecat aliqua laboris et pariatur.',
        url:"/assets/perfil/pexels-simon-robben-614810.jpg",
        imgs:[]},

        {id:2,
        nombre:'Victor',
        answers:4,
        likes:322,
        retweets:50,
        tweet_nom:'@VicGo',
        time:'7h',
        body:'Deserunt irure Lorem occaecat aliqua laboris et pariatur.',
        url:"/assets/perfil/pexels-stefan-stefancik-91227.jpg",
        imgs:[]},

        {id:3,
        nombre:'William',
        answers:11,
        likes:257,
        retweets:47,
        tweet_nom:'@william',
        time:'8h',
        body:'Deserunt irure Lorem occaecat aliqua laboris et pariatur.',
        url:"/assets/perfil/pexels-stefan-stefancik-91224.jpg",
        imgs:[]},
    ]
    
    return (
        <div>
            <Header title={'Inicio'}/>
            
            <div className="screenTweet__containerTweet">

                <div className="screenTweet__HeadTweet">
                    <div className="content-img">
                        <img src={url} alt="img"/>
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
                            <h1 className="bold">{ContLike}</h1>
                            <span className="lighter">Me gusta</span>   
                        </div>
                    </div>

                <div className="screenTweet__icons">

                    <div>
                        <Icons.IconAswer />
                    </div>
                    
                    <div>
                    <Icons.IconRetweet />
                    </div>

                    <div onClick={UpLike} className={(Like)?"is-active" :null}>
                        {
                            (Like)
                            ?<Icons.IconLike />
                            :<Icons.IconLikeFull />
                        }
                    </div>
                    <div>
                        <Icons.IconShare />
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
