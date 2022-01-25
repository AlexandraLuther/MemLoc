import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo({ todo, index, markTodo, removeTodo }) {
  console.log("train");
  console.log(todo);
  return (
    <div
      className="todo"
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <span >{todo.locationi}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");
  const [locatio, setLocation] = React.useState("");
  console.log("forming of todo:");
  console.log(locatio);
  console.log(value);

  const handleSubmit = e => {
    console.log("forming of todo: crate");
  console.log(locatio);
  console.log(value);
    e.preventDefault();
    
    if (!value) return;
    if (!locatio){
      
      addTodo(value, "locatiotrss");
      setValue("");
      setLocation("");
    
    } else{
      addTodo(value, locatio);
      setValue("");
      setLocation("");
    }
  };
//see what form of location will make the most sense to add to the search bar
  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>
      <p></p>
      <b>ToDo:</b>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo hehe" />
      <b>Where: </b>
      <Form.Control type="text" className="input" value={locatio} onChange={e => setLocation(e.target.value)} placeholder="Add best location" /> 
      
    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Pick up dog",
      locationi:"Goomer",
      isDone: false
    }
  ]);

  const addTodo = (text,locationi) => {
    const newTodos = [...todos, { text, locationi }];
    console.log("here: ");
    console.log(newTodos);

    //newTodos.location = "grow";
    setTodos(newTodos);
  } ;
  

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
//the spacing is temporary I want to figuer it out difinitavly after all of the sections are filled
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>

          <p> &nbsp;&nbsp;&nbsp;Todo  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       Where</p>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                
                <Todo
                
                key={index}
                index={index}

                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;