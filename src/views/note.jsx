import React, { Component } from 'react'
import Filtrate from '../components/note/filtrate'
import '../style/note.scss'

export default class Note extends Component {

  constructor(props) {
    super(props)
    this.state = {
      article_list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    }
  }


  chan(){
    
  }

  render() {
    return (
      <div className='note'>
        <div className="filtrate">
          <Filtrate />
        </div>
        <div className="article-list">
          {
            this.state.article_list.map(item => {
              return (
                <div className='item' key={item}>
                  <h2>Re:无职转生~到了异世界就拿出真本事哦哦哦哦哦哦哦哦~ {item}</h2>
                  <p className='info'>
                    <span className='cate'>
                      代码
                    </span>
                    <span className='time'>
                      2021-12-26
                    </span>
                    <span className='look'>
                      77{item}
                    </span>
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
