import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Options } from '../../atoms';
import { Icons }from '../../icons';
import { Dropdown } from '../../organims';
import { Actions } from '../Actions/Actions';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import { ImgContent } from '../Imgs-content/ImgsContents';
import { Response } from '../Response/Response';
import { Retweet } from '../Retweet/Retweet';

import './styles.scss';

export const BodyTweet = ({info,variant,actions = false,isModalResponse}) => {

    const {id,url,nombre,body,time,tweet_nom,imgs,retweet,response} = info
    
    const [isTweetOptions, setIsTweetOptions] = useState(false)

  return (
    <div className={`bodyTweet ${variant}`}>
        <div className="right">
            <div className="content-img">
                <img src={process.env.PUBLIC_URL + url} alt="img"/>
            </div>
        </div>

        <div className="left">
            <div className='left-head'>
                <div>
                    <span className="bold">{nombre}</span> <span className="lighter">{tweet_nom} · {time}</span>
                </div>
                
                <div className="left-content">
                    <Options open={() => setIsTweetOptions(true)} />
                    {
                        isTweetOptions &&
                        <Dropdown close={() => setIsTweetOptions(false)}>
                            <DropdownItem text="No me interesa Con base en tus me gustas">
                                <Icons.IconAswerDislike />
                            </DropdownItem>
                            <DropdownItem text="No me interesa este Tweet">
                                <Icons.IconEmojiSad />
                            </DropdownItem>
                            <DropdownItem text={`Seguir a ${tweet_nom}`}>
                                <Icons.IconPersonAdd />
                            </DropdownItem>
                            <DropdownItem text={`Agregar/eliminar a ${tweet_nom} en Listas`}>
                                <Icons.IconListAdd />
                            </DropdownItem>
                            <DropdownItem text={`Silenciar a ${tweet_nom}`}>
                                <Icons.IconMute />
                            </DropdownItem>
                            <DropdownItem text={`Bloquear a ${tweet_nom}`}>
                                <Icons.IconBlook />
                            </DropdownItem>
                            <DropdownItem text="Insertar Tweet">
                                <Icons.IconCode />
                            </DropdownItem>
                            <DropdownItem text="Denunciar el Tweet">
                                <Icons.IconFlag />
                            </DropdownItem>
                        </Dropdown>
                    }
                </div>
            </div>
            
            {
                (response && !isModalResponse) && <Response tweet_nom={response.tweet_nom}/>
            }

            <div className="content_Tweet">
                {body}
            </div>
            
            {
                (imgs && !isModalResponse) &&
                <NavLink to={`/home/${id}`}>
                    <ImgContent imgs={imgs}/>
                </NavLink>
            }

            {
                retweet && <Retweet {...retweet} isModalResponse={isModalResponse}/>
            }

            {
                isModalResponse && <Response tweet_nom={tweet_nom}/>
            }
            
            {
                actions && <Actions info={info} />
            }
        </div>
    </div>
  )
}
