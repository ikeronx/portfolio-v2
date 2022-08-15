import React from 'react'
import {data} from '../data/cardData'

const Card = (props) => {
    console.log(data)

    return (
        <article className="card">
            <aside className="card__aside">
                <figure className="card__figure">
                    <img className="card__image" src={props.imageUrl} alt="An image of a girl smiling while wearing a swimming cap" />
                </figure>
            </aside>
            <header className="card__header card-textbox">
                <div className="card-textbox__location-box">
                    <div className="card-textbox__country">
                        <p className="card__location--country">{props.location}</p>  
                        <div>
                            <a className="card__location--link card__location--link--pad" href={props.googleMapsUrl} target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                            <a className="card__location--link" href={props.googleMapsUrl} target="_blank"><ion-icon name="open-outline"></ion-icon></a>
                        </div>
                    </div>
                </div>
                <h3 className="card__title">{props.title}</h3>
                <div className="card__body">
                    {/* <p className="card__date">{props.startDate} - {props.endDate}</p> */}
                    <p className="card__description">{props.description}</p>
                    <div className='projects__tools-list'>
                        <div className='projects__tools-item projects__tools-item--one'>{props.tools[0]}</div>&nbsp;&nbsp;
                        <div className='projects__tools-item'>{props.tools[1]}</div>&nbsp;&nbsp;
                        <div className='projects__tools-item'>{props.tools[2]}</div>&nbsp;&nbsp;
                        <div className='projects__tools-item'>{props.tools[3]}</div>&nbsp;&nbsp;
                    </div>
                </div>
            </header>
        </article>
    )

}

export default Card;