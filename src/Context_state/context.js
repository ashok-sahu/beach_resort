import React, { Component } from 'react'
import items from '../utils/modals/data'

const RoomContext = React.createContext()

class RoomProvider extends Component {
    state={
        rooms:[],
        featuredRooms:[],
        sortedRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }
    componentDidMount(){
        let rooms = this.formatData(items);
        //console.log(rooms,'rooms')

        let featuredRooms = rooms.filter(room=>room.featured === true)
        //console.log(featuredRooms,'featured rooms')

        let maxPrice = Math.max(...rooms.map(item=>item.price))
        let maxSize = Math.max(...rooms.map(item=>item.size))

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms, 
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        })
    }
    formatData(items){
        //console.log(items)
        let tempItems = items.map(item => {
           // debugger
            //console.log(item,'item')
            let id = item.sys.id
            //console.log(id,'id')
            let images = item.fields.images.map(image=>image.fields.file.url)
            //console.log(images)
            let room = {...item.fields,images,id}
            //console.log(room)
            return room
        })
        return tempItems
    }
    getRoom = slug =>{
        let tempRooms = [...this.state.rooms]
        const room =tempRooms.find(room=>room.slug===slug)
        return room
    }
    handleChange = event => {
        // const type = event.target.type
        // const name = event.target.name
        // const value = event.target.value
        // console.log(`this is type : ${type},this is name : ${name}, this is value : ${value}`)
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked:target.value
        const name = event.target.name
        this.setState({
            [name]:value
        },this.filterRooms)
    }
    filterRooms = () =>{
        let {rooms,type,capacity,price,breakfast,pets,minSize,maxSize} = this.state
        let tempRooms = [...rooms]
        capacity = parseInt(capacity)
        price = parseInt(price)
        tempRooms = tempRooms.filter(room=>room.price<=price)
        tempRooms = tempRooms.filter(room=>room.size >= minSize && room.size <= maxSize)
        if(capacity !==1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        }
        if(type!=='all'){
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        this.setState({
            sortedRooms:tempRooms
        })
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value=><Component {...props} context={value}/>}
        </RoomConsumer>
    }
}
export {RoomProvider,RoomConsumer,RoomContext}