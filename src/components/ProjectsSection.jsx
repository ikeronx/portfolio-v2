import React from 'react'
import Card from './Card'
import { data } from '../data/cardData'

const ProjectsSection = () => {

    const cardElements = data.map(cardItem => (
        <Card
            key={cardItem.id}
            {...cardItem} />
    ))
  return (
      <section id= 'projects' className="container projects-sec sec--pad">
          <h2 className="heading-sec">Projects</h2>
          {cardElements}
      </section>
  )
}

export default ProjectsSection