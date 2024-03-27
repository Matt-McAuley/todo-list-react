import { Button } from '@mui/material'
import styled from '@emotion/styled'
import { useContext } from 'react';
import ProjectSelect from '../components/ProjectSelect'
import {TodoListContext, TodoListContextType} from '../TodoListContext';

const Container = styled.div`
  grid-column: 1 \ 2;
  grid-row: 1 / 3;
  background-color: red;
  display:flex;
  flex-direction:column;
  justify-content:start;
  align-items:center;
`;

const Sidebar = () => {
  const { allTodos, setTodos, projects, setCurrentProject, addNewProject, setTodoPopupDisplayed, currentProject  } = useContext(TodoListContext) as TodoListContextType;

  return (
    <Container>
      <Button variant='outlined'
        onClick={() => {
          setCurrentProject(allTodos);
          setTodos([...currentProject.todos]);
        }}
      >All Todos
      </Button>
      <Button variant="outlined" 
        onClick={() => {
          if (currentProject.equals(allTodos)) {
            alert("Please select a project");
            return false;
          }
          setTodoPopupDisplayed(true)
        }}
      >Add Todo
      </Button>
      <ProjectSelect projects={projects} setCurrentProject={setCurrentProject} setTodos={setTodos}/>
      <Button variant='outlined'
        onClick={() => {addNewProject("hi")}}
      >Add Project
      </Button>
    </Container>
  );
}

export default Sidebar