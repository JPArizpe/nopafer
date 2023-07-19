"use client";
import React from 'react';
import styled from 'styled-components'

import Link from "next/link"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #569644;
  transform: ${({ open = false }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  height: 100vh;
  text-align: left;
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
    color: white !important;
    text-decoration: none;
    transition: color 0.3s linear;

    font-size: 1.5rem;
    text-align: center;

    &:hover {
      color: white;
    }
  }
`

const Menu = ({ open }) => {
  
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
  left: 47%;
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
  margin-top: 17px;
  
  @media only screen and (min-width: 768px) {
    display: none;
  }

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

    &.first {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &.middle {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    &.last {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div className="first"/>
      <div className="middle"/>
      <div className="last"/>
    </StyledBurger>
  )
}

export { Menu, Burger };