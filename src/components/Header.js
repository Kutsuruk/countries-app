import React, {useState, useEffect} from "react";
import {Container} from "./Container";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import {HeaderElement} from "../styledComponents/HeaderElement";
import {Wrapper} from "../styledComponents/Wrapper";
import {ModeSwitcher} from "../styledComponents/ModeSwitcher";
import {Title} from "../styledComponents/Title";

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