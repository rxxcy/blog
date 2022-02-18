import React, { Component } from 'react'
import '../style/dcim.scss'
import Filtrate from '../components/dcim/filtrate'
import DcimItem from '../components/dcim/pic'

export default class Dcim extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dcimList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      defaultPic: {
        start: 7,
        cover: '//cdn.u1.huluxia.com/g4/M03/33/AE/rBAAdmHFeFOATxHmAACP5hulx7U405.jpg',
        title: '吹响！悠风号圣巡',
        create_time: '2021-12-24'
      }
    }
  }

  render() {
    return (
      <div className='dcim'>
        <div className="container">
          <Filtrate />
          <div className="dcim-container">
            {
              this.state.dcimList.map((item, index) => {
                return <DcimItem key={index} pic={this.state.defaultPic} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
