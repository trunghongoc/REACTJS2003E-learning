import React from 'react'

class List extends React.Component {
  constructor() {
    super()
    this.state = {
      students: [
        { id: 1, name: 'Hoa', age: 12 },
        { id: 2, name: 'Nam', age: 16 },
        { id: 3, name: 'Minh', age: 9 }
      ]
    }
  }

  li = () => {
    return this.state.students.map(
      (student, index) => <li key={index}>{student.name}</li>
    )
  }

  render() {
    return (
      <div>
        <ul>{this.li()}</ul>
      </div>
    );
  }
}

export default List
