import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <>
    <footer className="section">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-5">
            <h4 className="title is-3">
              <Link to="/" className="has-no-style">Cereal Concept</Link>
            </h4>
            <h4 className="subtitle is-5">Nous contacter</h4>
            <div className="contact">
              <p>Vous pouvez nous écrire à <a href="mailto:contact@cerealconcept.com">contact@cerealconcept.com</a> ou nous appeler au +336 71 541 553 / +336 58 477 849.</p>
            </div>
          </div>
          <div className="column column-legal">
            <ul>
              <li>
                <Link to="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
