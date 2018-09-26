import {Component} from 'react'
import Worker from './index.worker.js'

export default class extends Component {
  state = {
    gotResponse: false
  }

  componentDidMount () {
    new Worker()
      .onmessage = e => {
      console.log(e)
      this.setState({ gotResponse: true })
    }
  }

  render () {
    return this.state.gotResponse ? 'success' : 'waiting'
  }
}
