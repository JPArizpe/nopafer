"use client";
import React from 'react';
import styled from 'styled-components'

import Link from "next/link"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open = false }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #569644;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open = false }) => {
  return (
    <StyledMenu open={open}>
      <Link href={{ pathname: "/", hash: 'head' }} legacyBehavior scroll={true}>Home</Link>
      <Link href={{ pathname: "/inicio", hash: 'head' }} legacyBehavior scroll={true}>Inicio</Link>
      <Link href={{ pathname: "/acerca", hash: 'head' }} legacyBehavior scroll={true}>Acerca de</Link>
      <Link href={{ pathname: "/productos", hash: 'head' }} legacyBehavior scroll={true}>Productos</Link>
      <Link href={{ pathname: "/avisos", hash: 'head' }} legacyBehavior scroll={true}>Avisos importantes</Link>
      <Link href={{ pathname: "/cotizacion", hash: 'head' }} legacyBehavior scroll={true}>Cotización de Maquinaria</Link>
      <Link href={{ pathname: "/contacto", hash: 'head' }} legacyBehavior scroll={true}>Contacto</Link>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open = false, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export { Menu, Burger };