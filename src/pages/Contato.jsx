import React from "react"
import { Header } from '../components/Header'
import contatoImg from '../assets/contato.svg'

export function Contato() {
    return (
        <>
        <Header text="Meus contatos" image={contatoImg} />
        </>
    )
}