import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { GetTweetById } from '../../helpers/getTweetByid'
import { Title } from '../../components/atoms'
import { Retweet, ImgContent, Header } from '../../components/molecules'
import { Tweet } from '../../components/organims'
import { ScreenActions } from './components/molecules/ScreenActions/ScreenActions'

export const TweetScreen = () => {

    
    const {tweetid} = useParams()

    const tweets = useSelector((state) => state.tweets)
    const comments = useSelector((state) => state.comments)
    const info = GetTweetById(tweets,Number(tweetid))
    const { answers,body,retweet,likes,nombre,retweets,tweet_nom,url,imgs } = info
    
    const [ContLike, setContLike] = useState(likes)

    return (
        <div>
            <Header title={'Inicio'}/>
            
            <div className="screenTweet-containerTweet">

                <div className="screenTweet-HeadTweet">
                    <div className="content-img">
                        <img src={url} alt="img"/>
                    </div>
                    <div className="screenTweet-names">
                        <Title text={nombre} variant="fz17 bold"/>
                        <Title text={tweet_nom} variant="grey"/>
                    </div>
                </div>

                <div className="screenTweet-tweet">
                    <div className="screenTweet-content">
                        {body}
                    </div>
                    
                    {imgs && <ImgContent imgs={imgs}/>}

                    {
                        retweet && <Retweet {...retweet}/>
                    }
                    <div className="screenTweet-times">
                        <span className="lighter">9:14 p.m - 15 abr 2021 Twitter for iPhone</span>
                    </div>

                </div>

                <div className="screenTweet-datas">
                    <div className="screenTweet-data">
                        <h1 className="bold">{retweets}</h1>
                        <span className="lighter">Retweets</span>
                        <h1 className="bold">{answers}</h1>
                        <span className="lighter">Citas</span>
                        <h1 className="bold">{ContLike}</h1>
                        <span className="lighter">Me gusta</span>   
                    </div>
                </div>

                <ScreenActions info={info}/>

            </div>
            
            <div className="screenTweet-comments">
                {
                    comments.map( comment => 
                        <div className="screenTweet-comment" key={comment.id}>
                           <Tweet info={comment}/>
                        </div>
                    )
                }
            </div>

        </div>
    )
}
