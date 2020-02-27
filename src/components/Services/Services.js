import React, { Component } from 'react'
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa'
import Title from '../Title/Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info:'lorem ipsom'
            },
            {
                icon:<FaHiking/>,
                title:'endless hiking',
                info:'lorem ipsom'
            },
            {
                icon:<FaShuttleVan/>,
                title:'free shuttle',
                info:'lorem ipsom'
            },
            {
                icon:<FaBeer/>,
                title:'strongest beer',
                info:'lorem ipsom'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services'/>
                <div className='services-center'>
                    {
                        this.state.services.map((item,index)=>{
                            return <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })
                    }
                </div>    
            </section>
        )
    }
}
