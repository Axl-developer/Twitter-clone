import React from 'react'

export const ImgsContents = ({idtweet,imgs}) => {

    switch (imgs.length) {
        case 1:
            
            return <SingleImg img={imgs} />
        
        case 2:
            
            return <TwoTmgs imgs={imgs} />
        
        case 3:
            
            return <ThreeTmgs imgs={imgs} />

        case 4:
            
            return <FourTmgs imgs={imgs} />
    
        default:
            return
    }

}


export const SingleImg = ({img}) => {
    return (
        <div className="SingleImg">
            <img key={img[0].id} src={process.env.PUBLIC_URL + img[0].url} atl="img"/>
        </div>
    )
}

export const TwoTmgs = ({imgs}) => {
    return (
        imgs.map(img =>
            <div className="TwoImgs" key={img.id}>
                <img src={process.env.PUBLIC_URL + img.url} atl="img"/>
            </div>
        )
    )
}

export const ThreeTmgs = ({imgs}) => {
    return (
        <div className="ThreeImgs">
            <div className="IndividualImg">
                <img key={imgs[0].id} src={process.env.PUBLIC_URL + imgs[0].url} atl="img"/>
            </div>
            <div className="DoubleImgs">
                <img key={imgs[1].id} src={process.env.PUBLIC_URL + imgs[1].url} atl="img"/>
                <img key={imgs[2].id} src={process.env.PUBLIC_URL + imgs[2].url} atl="img"/>
            </div>
        </div>
    )
}

export const FourTmgs = ({imgs}) => {
    return (
        <div className="FourImgs">
            {
                imgs.map(img =>
                        <img key={img.id} src={process.env.PUBLIC_URL + img.url} atl="img"/>)
            }
        </div>
    )
}