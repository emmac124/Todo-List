import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css";
import styled from 'styled-components';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos: []
    }
  }

  toggleTodo = (clickedTodoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedTodoId){
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  }

  addTodo = (todo) => {
    const newTodo = {
      task: todo,
      id: new Date(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  handleCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    })
    }

  render() {
    return (
      <MainContain>
        <Title>
          <h2>Todo List</h2>
        </Title>
        <DivContainer>
          <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
          <TodoForm addTodo={this.addTodo} completed={this.handleCompleted} />
        </DivContainer>
      </MainContain>
    );
  }
}

export default App;

const MainContain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const DivContainer = styled.div`
  background-color: ${pr => pr.theme.primaryColor};
  width: 50%;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2%;
  padding-top: 2%;
  border: 4px solid ${pr => pr.theme.thirdColor};
  @media (max-width: 500px) {
        width: 75%;
    }
`;

const Title = styled.div`
  font-family: 'Kalam', cursive;
  margin: 0 auto;
  text-shadow: 1.5px 1.5px 2px #000000;
  font-size: 2rem;
`;


