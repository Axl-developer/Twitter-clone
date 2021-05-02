import React from 'react'

export const Topicality = ({single}) => {
    return (
        <div className="Explore__content_item Explore__content_Topicality">
            <div>
                <div>
                    <span className="bold">{single.nombre}</span> <span className="lighter">. Hace 1 hora</span>
                </div>
                <span className="bold">{single.question}</span>
            </div>

            <div className="Explore__img_content">
                <img src={process.env.PUBLIC_URL + single.url} atl="img"/>    
            </div>
        </div>
    )
}
