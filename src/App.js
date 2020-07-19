import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
const uuid = require('uuid');



class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Make bed clean and tidy',
        completed: true
      },
      {
        id: 3,
        title: 'Clean living room',
        completed: false
      },
      {
        id: 4,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: 5,
        title: 'Meeting with boss',
        completed: false
      },

    ]
  }

 //Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
  });
  }

  //Delete item
  delTodo = (id) => {
    this.setState({ todos: [... this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [... this.state.todos, newTodo]});
  }

  render(){    
    
    return (
      <div className="App">
        <div className="cotainer">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete}  delTodo={this.delTodo}/>
            </React.Fragment>
          )}/>

          <Route path="/about" component={About} />
          
        </div>
        
        
      </div>
    );
  }
  
}

export default App;
