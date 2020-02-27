import React from 'react'
import RoomContainer from '../../components/RoomContainer/RoomContainer'
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import { Link } from 'react-router-dom'

export default function Rooms() {
    return <>
    <Hero hero='roomsHero'>
        <Banner title='our rooms'>
            <Link to='/' className='btn-primary'>
                return home
            </Link>
        </Banner>
    </Hero>
    <RoomContainer/>
    </>
}
