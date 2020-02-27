import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import Services from '../../components/Services/Services'
import FeaturedRooms from '../../components/FeaturedRooms/FeaturedRooms'

export default function Home () {
    return(
    <>
     <Hero>
        <Banner title='luxurious rooms' subtitle='duluxe rooms starting at $299'>
            <Link to='/rooms' className='btn-primary'>
                Our Rooms
            </Link>
        </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
    </>
    )
}
