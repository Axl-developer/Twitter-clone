import React from 'react'

export const ImgContent = ({imgs}) => {

    const length = imgs.length

    const getContent = () => {
        switch (length) {
            case 1:
                return 'is-single';
            case 2:
                return 'is-double';
            case 3:
                return 'is-triple'
            default:
                return 'is-multiple';
        }
    }

    const getSize = (index) => {
        switch (length) {
            case 1:
                return 'is-full';
        
            case 2:
                return 'is-large';
            case 3:
                if(index === 0){
                    return 'is-large'
                }else{
                    return 'is-short'
                }
            default:
                return 'is-short';
        }
    }

  return (
    <div className={`img-content ${getContent()}`}>
        {
            imgs.map( (img,index) =>
                <div className={getSize(index)} key={index} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + img.url})` }}>
                </div>
            )
        }
    </div>
  )
}
