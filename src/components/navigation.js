import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const NavStyled = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`

const NavLink = styled(Link)`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0;
    }
    &.actual-page {
        border-bottom: 2px solid #FFF
    }
`

const Navigation = () => {
    return(
        <NavStyled>
            <NavLink 
                to={'/'}
                activeClassName="actual-page"
            >Inicio</NavLink>
            <NavLink 
                to={'/about-us'}
                activeClassName="actual-page"
            >About Us</NavLink>
        </NavStyled>
    )
}

export default Navigation