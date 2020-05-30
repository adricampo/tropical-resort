import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`

const ImageText = styled.div`
    background-image: linear-gradient( to top, rgba(0,49,63,.5), rgba(30,20,63,.5));
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4rem;
        margin-top: 6%;
        margin-bottom: 0;

        @media (min-width: 992px) {
            font-size: 5.8rem
        }
    }

    p {
        font-size: 2.3rem;

        @media (min-width: 992px) {
            font-size: 2.8rem
        }
    }
`

const HotelPicture = () => {

    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "1.jpg" } ) {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `);

    return (
        <ImageBackground tag='section' fluid={image.sharp.fluid} fadeIn='soft'>
            <ImageText>
                <h1>Welcome to Tropical Resort</h1>
                <p>A paradise on Earth</p>
            </ImageText>
        </ImageBackground>
    )
}

export default HotelPicture