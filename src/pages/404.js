import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Erreur 404 : Page Introuvable" />
    <section className="section section-404">
      <div className="columns is-centered">
        <div className="column is-narrow has-text-centered">
          <h1 className="title is-1">Erreur 404 / Introuvable</h1>
          <h3 className="subtitle is-3">La page que vous souhaitiez visiter n'existe plus <span role="img" aria-label="smiley triste">😞</span></h3>
          <Link to="/" className="button is-info is-rounded">Retour à l'accueil</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
