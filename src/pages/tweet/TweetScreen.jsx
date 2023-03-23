import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { GetTweetById } from '../../helpers/getTweetByid'
import { Header } from '../../components/Headers/Header'
import Icons from '../../components/icons'
import { Retweet } from '../../components/molecules'
import { ImgContent } from '../../components/molecules/Imgs-content/ImgsContents'
import { Tweet } from '../../components/organims/Tweet/Tweet'

export const TweetScreen = () => {

    const {tweetid} = useParams()

    const tweets = useSelector((state) => state.tweets)
    const comments = useSelector((state) => state.comments)
    const info = GetTweetById(tweets,Number(tweetid))
    const {id,answers,body,retweet,likes,name,retweets,tweet_name,url,imgs} = info

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

    
    return (
        <div>
            <Header title={'Inicio'}/>
            
            <div className="screenTweet__containerTweet">

                <div className="screenTweet__HeadTweet">
                    <div className="content-img">
                        <img src={url} alt="img"/>
                    </div>
                    <div className="screenTweet__names">
                        <h1 className="bold">{name}</h1>
                        <span className="lighter">{tweet_name}</span>
                    </div>
                </div>

                <div className="screenTweet__tweet">
                    <div className="screenTweet__content">
                    {body}
                    </div>
                    
                    {imgs && <ImgContent imgs={imgs}/>}

                    {
                        retweet && <Retweet {...retweet}/>
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
