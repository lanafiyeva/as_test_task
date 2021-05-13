import React from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { Select } from 'antd'
import GenerateStrArray from './GenerateStrArray.js'
import LetterMatcher from './LetterMatcher/index.js'

const { Option } = Select

class App extends React.Component {
  state = {
    value: 1,
    strArray: GenerateStrArray(),
  }

  onChange = (value) => {
    this.setState({
      value: value,
    })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <Select onChange={this.onChange} value={value} style={{ width: 120 }}>
          {this.state.strArray.map((item, index) => (
            <Option value={item} key={index}>
              {item}
            </Option>
          ))}
        </Select>

        <LetterMatcher value={this.state.value} />
      </div>
    )
  }
}

export default App
