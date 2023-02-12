import React from 'react'
import Icons from '../icons'
import { SingleWidget } from './SingleWidget'
import { TendenciasPeru,QuienSeguir } from './Tendencias'

export const Widgets = () => {

    return (
        <div className="Widgets__content">
            <form>
                <div>
                    <Icons.IconSchear />
                </div>
                <input type="text" placeholder="Buscar en Twitter" />
            </form>

            <div style={{position:'relative'}}>
                <SingleWidget title={'Tendencias'} items={TendenciasPeru}/>

                <SingleWidget title={'A quién seguir'} items={QuienSeguir}/>
            </div>
        </div>
    )
}
