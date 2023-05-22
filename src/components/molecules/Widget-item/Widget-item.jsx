import React, { useState } from 'react'
import { Options } from '../../atoms'
import { Icons }from '../../icons'
import { Dropdown } from '../../organims'
import { DropdownItem } from '../DropdownItem/DropdownItem'

import './styles.scss'

export const WidgetItem = ({info}) => {

    const [isOptionsActive, setIsOptionsActive] = useState(false)

    return (
        <div className="widgets-item">
            <div>
                <span className="lighter">Tendencias en Perú</span>
                <Options open={() => setIsOptionsActive(true)} />
                {
                    isOptionsActive &&
                    <Dropdown close={() => setIsOptionsActive(false)}>
                        <DropdownItem text="Esto no me interesa">
                            <Icons.IconEmojiSad />
                        </DropdownItem>
                        <DropdownItem text="Esta tendencia es perjudicial o genera spam">
                            <Icons.IconEmojiSad />
                        </DropdownItem>
                    </Dropdown>
                }
            </div>
            <span className="bold">{info.nombre}</span>
            <span className="lighter">{info.answers}</span>
        </div>
    )
}
