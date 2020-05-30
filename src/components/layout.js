import React from 'react'
import { Helmet } from 'react-helmet'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled';
// hooks
import useSeo from '../hooks/use-seo'
// components
import Header from './header'
import Footer from './footer'


const Main = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
`

const Layout = (props) => {

    const seo = useSeo()
   
    const { fallbackSeo: { description, title } } = seo

    return (
        <>
            <Global 
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                        height: 100%;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                        height: 100%; 
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5
                    }
                    h1, h2 {
                        font-family: 'Roboto', sans-serif
                    }
                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0
                    }
                `}
            />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
                <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
            </Helmet>

            <Main>
                <Header />
                <div>
                    {props.children}
                </div>
                <Footer title={title} />
            </Main>
        </>
    )

} 

export default Layout 