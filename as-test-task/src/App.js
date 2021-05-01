import React from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { Radio, Input, Space } from 'antd'
import GenerateStrArray from './GenerateStrArray.js'
import LetterMatcher from './LetterMatcher/index.js'

class App extends React.Component {
  state = {
    value: 1,
    strArray: GenerateStrArray(),
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    console.log('test', this.state.strArray)
    const { value } = this.state
    return (
      <div>
        <Radio.Group onChange={this.onChange} value={value}>
          <Space direction="vertical">
            {this.state.strArray.map((item, index) => (
              <Radio value={item} key={index}>
                {item}
              </Radio>
            ))}
          </Space>
        </Radio.Group>

        <LetterMatcher value={this.state.value} />
      </div>
    )
  }
}

export default App
