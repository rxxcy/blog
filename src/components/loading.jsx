import React, { Component } from 'react'
import '../style/loading.scss'

export default class loading extends Component {
  render() {
    return (
      <div className="load-container">
        <div className="loader">
          <img src="//cdn.qiniu.rxxcy.com/images/2022/05/627a22d3bb1cf.gif" alt="" />
          <p>正在加载</p>
        </div>
      </div>
    )
  }
}
