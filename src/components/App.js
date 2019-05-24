import React, { Component } from 'react';
import { v4 } from 'uuid';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: []
    }
    this.addColor = this.addColor.bind(this);
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState(colors);
  }

  render() {
    const { addColor } = this;
    const { colors } = this.state;

    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors} />
      </div>
    );
  }
}

export default App;