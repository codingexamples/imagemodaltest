import React from 'react'
import * as ImagemodalStyles from './imagemodal.module.css'
import { Modal } from 'react-bootstrap'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function Imagemodal() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/mytestimage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Modal
        show={true}
        centered
        className={ImagemodalStyles.imageModal}
        dialogClassName={ImagemodalStyles.imageModalDialog}
        onHide={(e) => console.log(e)}
      >
        <Modal.Header closeButton />
        <Modal.Body className={ImagemodalStyles.imageModalBody}>
          <h1>TestInhalt</h1>
          <Img fluid={data.file.childImageSharp.fluid} />
        </Modal.Body>
      </Modal>
    </div>
  )
}
