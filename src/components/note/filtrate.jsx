import React, { Component } from 'react'

export default class Filtrate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: [
        { id: 1, name: '全部' },
        { id: 2, name: '日常' },
        { id: 3, name: '代码' },
        { id: 4, name: '后感' }
      ],
      active: 1
    }
  }

  handleChangeCate(id) {
    this.setState({
      active: id
    })
  }

  render() {
    return (
      <>
        <div className='filtrate '>
          {
            this.state.category.map(item => {
              return (
                <button
                  key={item.id}
                  className={item.id == this.state.active ? 'active' : ''}
                  onClick={() => this.handleChangeCate(item.id)}
                >
                  {item.name}
                </button>
              )
            })
          }
        </div>
      </>
    )
  }
}
