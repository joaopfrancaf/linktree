import { styled } from '../stitches.config'
import Image from 'next/image'

export const DivStyleContainer = styled('div', {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const DivCard = styled('div', {
    width: '20.375rem',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

export const DivStyleFoto = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    img: {
        borderRadius: '50%',
        border: '5px solid $bodybgcolor',
        outline: '2px solid $purple',

        
    },

    'img:before': {
        
    },

    p: {
        fontWeight: '400',
        marginTop: '1.375rem'
    }
})

export const DivStyleLinkContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    height: 'auto',
    marginTop: '2.063rem',
    marginBottom: '4.25rem'
})

export const DivStyleLink = styled('div', {
    width: '20.375rem',
    height: '3.063rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    border: '2px solid $purple',
    borderColor: '$purple',
    borderRadius: '4px',

    //marginTop: '1rem',
    
    a: {
        textDecoration: 'none',
        fontWeight: '600',
        color: '$purple',
    }
})

export const DivStyleIcons = styled('div', {
    width: 236,
    height: 24,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
})