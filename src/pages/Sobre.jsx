import React from "react"
import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'

export function Sobre() {
    return (
        <>
        <Header text="Sobre mim" image={sobreImg} />
        </>
    )
}