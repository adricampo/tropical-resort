import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Footer = ({title}) => {

    const year = new Date().getFullYear()

    return(
            <p
                css={css`
                    text-align: center;
                    color: #fff;
                    background-color: rgba(44, 62, 80, .85);
                    margin: 0;
                    padding: 4rem;
                `}

            >
                {title}. All rights reserved {year} &copy;
            </p>
    )
}  

export default Footer