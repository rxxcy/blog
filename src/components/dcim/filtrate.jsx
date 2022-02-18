import React, { Component } from 'react'

export default class Filtrate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: [
        { id: 1, name: '全部' },
        { id: 2, name: '星标' },
        { id: 3, name: '人像' },
        { id: 4, name: '风景' },
        { id: 5, name: '阔撕' },
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
