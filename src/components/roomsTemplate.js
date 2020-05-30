import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import Layout from '../components/layout'

export const query = graphql`
    query ($slug: String!) {
        allDatoCmsRoom(filter: { slug: { eq: $slug } }) {
            nodes {
                title
                content
                image {
                    fluid(maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`

const RoomsTemplate = ({ data }) => {

    const dataResult = data.allDatoCmsRoom.nodes

    const { title, content, image } = dataResult[0]

    return (
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 85%;            
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                    `}
                >{title}</h1>
                <p>{content}</p>
                <Image 
                    fluid={image.fluid}
                />
            </main>
        </Layout>
    )
}

export default RoomsTemplate