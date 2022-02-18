import React, { Component } from 'react'
// import { message } from 'antd'
// import 'antd/dist/antd.css'

export default class Pic extends Component {
  constructor(props){
    super(props)
    this.state = {...props.pic}
  }

  handleGotoPicItem(){
    console.log('还没写好')
    // message.success('等等就来')
  }

  render() {
    return (
      <div className='item' onClick={() => this.handleGotoPicItem()}>
        <div className="cover">
          <div className="start">
          {this.state.start ? '⭐': ''}
          </div>

            <img src={this.state.cover} alt={this.state.title} />

          <i className='look'>{this.state.start}</i>
        </div>
        <div className="info">
          <h2>{this.state.title}</h2>
          <time className='time'>{this.state.create_time}</time>
        </div>
      </div>
    )
  }
}
