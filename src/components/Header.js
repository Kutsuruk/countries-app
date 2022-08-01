import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Container} from "./Container";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
  
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`
const Title = styled.a.attrs({
    href: './',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`

const Header = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return(
        <HeaderElement>
            <Container>
                <Wrapper>
                    <Title>
                        Where is the world?
                    </Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonSharp size='14px'/>
                        ) : (<IoMoonOutline size='14px'/>)}
                        <span style={{marginLeft: '0.75rem'}}>{theme} theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderElement>
    )
}

export default Header