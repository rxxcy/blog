import React, { Component } from 'react'
import '../style/project.scss'


export default class Project extends Component {

  constructor(props) {
    super(props)
    this.state = {
      project: [
        { id: 1, name: 'Re: 从零开始的徒手撸博客', icon: '', description: '造轮子' },
        { id: 2, name: 'Re: 从零开始的徒手撸博客', icon: '', description: '造轮子' },
        { id: 3, name: 'Re: 从零开始的徒手撸博客', icon: '', description: '造轮子' },
        { id: 4, name: 'Re: 从零开始的徒手撸博客', icon: '', description: '造轮子' },
        { id: 5, name: 'Re: 从零开始的徒手撸博客', icon: '', description: '造轮子' },
        { id: 6, name: 'Re: 从零开始的徒手撸博客', icon: '', description: '造轮子' },
      ],
      defaultIcon: '//cdn.u1.huluxia.com/g4/M03/33/AB/rBAAdmHFdY-AWa29AAAJ3PU1_YA130.png'
    }
  }

  render() {
    return (
      <div className='project'>
        <div className="container">
          {
            this.state.project.map(item => {
              return (
                <div key={item.id} className="item">
                  <img src={this.state.defaultIcon} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
