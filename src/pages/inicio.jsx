import React from "react"
import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'

export function Inicio() {
    return (
        <>
        <Header text="Meu portfólio em React" image={homeImg} />
        </>
    )
}