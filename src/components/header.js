import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Nav from './navigation'

const LinkToHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`

const Header = () => {
    return(
        <header
            css={css`
                background-color: skyblue;
                padding: 1rem
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <LinkToHome
                    to='/'
                ><h1>Tropical Resort</h1></LinkToHome>

                <Nav />
            </div>
        </header>
    )
}  

export default Header