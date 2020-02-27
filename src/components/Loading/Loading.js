import React, { Component } from 'react'
import loadingImg from '../../assets/images/gif/loading-arrow.gif'

export default class Loading extends Component {
    render() {
        return (
            <div className='loading'>
                <h4>room data loading</h4>
                <img src={loadingImg} alt=''/>
            </div>
        )
    }
}
