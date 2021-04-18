import React, { useState } from 'react'
import { Perfil_Tweets } from './Perfil_Tweets'

export const Tabs = () => {
    const Items = [1,2,3,4,5]

    const [Todo, setTodo] = useState(1)
    return (
        <div>

            <div className="Notifications__contentTab">

                <div 
                    className={(Todo==1) ?'active' : ''}
                    onClick={() => setTodo(1)}
                >
                    Tweets
                </div>

                <div
                    className={(Todo==2)?'active' : ''}
                    onClick={() => setTodo(2)}
                >
                    Tweets y respuestas
                </div>

                <div
                    className={(Todo==3)?'active' : ''}
                    onClick={() => setTodo(3)}
                >
                    Fotos y Videos
                </div>

                <div
                    className={(Todo==4)?'active' : ''}
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
            return <Perfil_Tweets />;
        
        case 2:
            return <h1>case 2</h1>;

        case 3:
            return <h1>case 3</h1>;
        
        case 4:
            return <h1>case 4</h1>;
    
        default:
            return <Perfil_Tweets />;
    }
}
