import React, { Component } from 'react';
import styled from 'styled-components';

class TodoForm extends Component {

    //constructor with state to manage the form 
    constructor(){
        super();
        this.state = {
            newToDo: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            newToDo: e.target.value
        })
    };

    handleAddSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.newToDo);
        this.setState({
            newToDo: ''
        })
    }

    handleClear = () => {
        this.props.completed();
    }

    render(){
        return(
            <>
            <FormStyles onSubmit={this.handleAddSubmit}>
                <InputStyles
                name='newTodo'
                type='text'
                onChange={this.handleChange}
                value={this.state.newToDo}
                 />
                <ButtonAdd className='add-todo'>Add Task</ButtonAdd>
            </FormStyles>
                <div>
                    <Button className='clr-todo' onClick={this.handleClear}>Clear Completed</Button>
                </div>
            </>
        );
    }
}

export default TodoForm;

const ButtonAdd = styled.button`
    font-family: 'IM Fell English SC', serif;
    font-size: 1.15rem;
    margin-left: 1%;
    background-color: ${pr => pr.theme.thirdColor};
    color: ${pr => pr.theme.primaryColor};
    border-radius: 10px;
    padding: 0.75%;
    text-shadow: 1.5px 1.5px 2px #000000;
`;

const Button = styled.button`
    font-family: 'IM Fell English SC', serif;
    font-size: 1.15rem;
    padding-right: 2%;
    padding-left: 2%;
    margin-bottom: 2%;
    margin-top: 10%;
    background-color: ${pr => pr.theme.thirdColor};
    color: ${pr => pr.theme.primaryColor};
    border-radius: 10px;
    padding: 0.75%;
    text-shadow: 1.5px 1.5px 2px #000000;
`;

const FormStyles = styled.form`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
`;

const InputStyles = styled.input`
    padding: 1%;
    font-family: 'IM Fell English SC', serif;
    font-size: 1.5rem;
    margin-left: 11.5%;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;
