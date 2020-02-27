import React from 'react'
import RoomsList from '../RoomsList/RoomsList'
import RoomsFilter from '../RoomsFilter/RoomsFilter'
import {withRoomConsumer} from '../../Context_state/context'
import Loading from '../Loading/Loading'

function RoomContainer({context}){
    const {sortedRooms,loading,rooms} = context
    if(loading){
        return <Loading/>
    }
        return <>
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms={sortedRooms}/>
              </>
                
}
export default withRoomConsumer(RoomContainer)
// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value)=>{
//                     console.log(value,'room container')
//                     const {featuredRooms,sortedRooms,loading,rooms} = value
//                     if(loading){
//                         return <Loading/>
//                     }
//                     return (
//                     <div>
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
//                      )
//                 }
//             }
//         </RoomConsumer>
//     )
// }
