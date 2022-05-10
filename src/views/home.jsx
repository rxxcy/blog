import React, { Component } from 'react'
import '../style/home.scss'
import { getHomeData } from '../api'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      avatar: '//dingyue.ws.126.net/2021/1224/674c9894j00r4lvxy0029d000qo00qnp.jpg',
      nickname: '若许闲乘月',
      personal: '前端练习生',
    }
  }

  async componentDidMount() {
    const res = await getHomeData()
  }

  render() {
    return (
      <div className='home'>
        <div className="me-info">
          <img src={this.state.avatar} alt="avatar" />
          <h1 className="nickname">
            {this.state.nickname}
          </h1>
          <p className="sk">
            {this.state.personal}
          </p>
        </div>
        <div className="me-summary">
          <p>九零后，云南，现居昆明。</p>
          <p>一九年毕业，云南财经大学，计算机科学与技术。 <small className='del'>精通JavaScript,Rust,Golang,PHP,Python,Java等编程语言名称单词拼写</small></p>
          {/* <p>一手中单达摩,上杀黄金II下屠白银IV,高了排不到也打不赢,低了也没排到过.</p> */}
          <p>那河畔的金柳，是夕阳中的新娘；波光里的艳影，在我的心头荡漾。软泥上的青荇，油油的在水底招摇；在康河的柔波里，我甘心做一条水草！</p>
          <img src="//cdn.u1.huluxia.com/g4/M02/33/94/rBAAdmHFYfiAAEqcAAADyCKHgEI329.png" alt="🐥" />
          <p>瓦楞上许多枯草的断茎当风抖着，正在说明这老屋难免易主的原因。几房的本家大约已经搬走了，所以很寂静。我到了自家的房外，我的母亲早已迎着出来了，接着便飞出了八岁的侄儿宏儿。</p>
          <img src="//tucang.cc/api/image/show/7f6ae1b192f3c64433b09b91e439177f" alt="✨" />
          <p>找到我 <a href="#">QQ</a> <a href="#">邮箱</a></p>
        </div>
      </div>
    )
  }
}
