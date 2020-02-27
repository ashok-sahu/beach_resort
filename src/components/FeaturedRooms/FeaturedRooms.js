import React, { Component } from 'react'
import Loading from '../Loading/Loading'
import Room from '../Room/Room'
import Title from '../Title/Title'
import {RoomContext} from '../../Context_state/context'
 
export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let { loading,featuredRooms:rooms } = this.context//renamed featuredRooms as Rooms
        //console.log(rooms,'rooms from featured rooms component')

        rooms = rooms.map(room=>{
            return <Room key={room.id} room={room} />
        })

        return <section className='featured-rooms'>
            <Title title='featured rooms'/>
            <div className='featured-rooms-center'>
                {loading ? <Loading/> : rooms}
            </div>
        </section>
    }
}
