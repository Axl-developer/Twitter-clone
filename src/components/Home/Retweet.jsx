import React from 'react'

//{process.env.PUBLIC_URL + url}

export const Retweet = ({url,name,tweet_name,time,body,imgs}) => {
  return (
    <div className='retweet'>
        <div className="retweet__head">
            <div className='retweet__person'>
                <div className="content-img">
                    <img src={process.env.PUBLIC_URL + url} alt="img"/>
                </div>
                <span className="bold">{name}</span> <span className="lighter">@Google · 1h</span>
            </div>

            <div className="content_Tweet">
                {body}
            </div>
        </div>
    </div>
  )
}
