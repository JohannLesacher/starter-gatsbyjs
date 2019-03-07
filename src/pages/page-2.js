import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <section className="section">
    <div className="columns is-centered">
      <div className="column is-5 has-text-centered">
        <h1 className="title is-1">Bienvenue sur la page 2</h1>
        <h3 className="subtitle is-3">Une belle page</h3>
        <Link to="/">
          <button data-target="#contact-modal" className="button is-rounded is-medium is-info to-reveal modal-button">Retour !</button>
          </Link>
      </div>
    </div>
    </section>
  </Layout>
)

export default SecondPage
