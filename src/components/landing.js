import React from 'react'
import { Link } from 'gatsby'

import ImageHandler from './imageHandler'

const Landing = ({ data, parametres }) => {
  var image = data.file
  return (
    <section className="landing">
      <div className="container">
        <div className="columns is-mobile is-multiline is-vcentered">
          <div className="column is-4">
            <h1 className="title is-1">Titre !</h1>
            <h3  className="subtitle is-3">Welcome to your new Gatsby site.</h3>
            <div className="buttons">
              <Link to="/page-2/">
                <button data-target="#contact-modal" className="button is-rounded is-medium is-primary to-reveal modal-button">Voir l'autre page</button>
              </Link>
            </div>
          </div>
          <div className="column is-8">
            <ImageHandler image={image} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
