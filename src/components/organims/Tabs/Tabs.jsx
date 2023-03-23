import React, { useState } from 'react'
import { PerfilTweets } from '../../atoms'

export const Tabs = () => {

    const [Todo, setTodo] = useState(1)

    return (
        <div>

            <div className="Notifications__contentTab">

                <div 
                    className={(Todo===1) ?'active' : ''}
                    onClick={() => setTodo(1)}
                >
                    Tweets
                </div>

                <div
                    className={(Todo===2)?'active' : ''}
                    onClick={() => setTodo(2)}
                >
                    Tweets y respuestas
                </div>

                <div
                    className={(Todo===3)?'active' : ''}
                    onClick={() => setTodo(3)}
                >
                    Fotos y Videos
                </div>

                <div
                    className={(Todo===4)?'active' : ''}
                    onClick={() => setTodo(4)}
                >
                    Me gusta
                </div>

            </div>
            <ElementTab todo={Todo} />

        </div>
    )
}

const ElementTab = ({todo}) => {
    switch (todo) {
        case 1:
            return <PerfilTweets />;
        
        case 2:
            return <PerfilTweets />;

        case 3:
            return <PerfilTweets />;
        
        case 4:
            return <PerfilTweets />;
    
        default:
            return <PerfilTweets />;
    }
}
