import { Todo } from "../Classes"
import styled from '@emotion/styled'
import DeleteIcon from "../assets/delete.svg"
import ExpandIcon from "../assets/dots-horizontal.svg"
import EditIcon from "../assets/note-edit.svg"
import { useContext } from "react"
import { format } from 'date-fns'
import { TodoListContext, TodoListContextType } from "../TodoListContext"

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 10px;
    padding: 10px;
    border: 2px solid black;
`;

const Image = styled.img`
    width: 30px;
    cursor: pointer;
    &:hover {
        background-color: red;
    }
    &:active {
        background-color: blue;
    }
`

type Props = {
    todo: Todo;
}

const TodoContainer = (props: Props) => {
    const todo = props.todo;
    const { setExpandPopup, projects, setProjects, editInfo, currentProject, allTodos, setTodoPopup, setEditInfo } = useContext(TodoListContext) as TodoListContextType;

    return currentProject.equals(allTodos) ? (
        <Container>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <div>{format(todo.dueDate, 'MM/dd/yyyy')}</div>
            <div>{todo.priority}</div>
        </Container>
    ) : (
        <Container>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <div>{format(todo.dueDate, 'MM/dd/yyyy')}</div>
            <div>{todo.priority}</div>
            <Image src={ExpandIcon} onClick={() => {
                setEditInfo({
                    ...editInfo,
                    todoTitle : todo.title,
                    description : todo.description,
                    date : format(todo.dueDate, 'yyyy-MM-dd'),
                    priority : todo.priority
                })
                setExpandPopup(true);
            }}/>
            <Image src={EditIcon} onClick={() => {
                setEditInfo({
                    ...editInfo,
                    todoTitle : todo.title,
                    description : todo.description,
                    date : format(todo.dueDate, 'yyyy-MM-dd'),
                    priority : todo.priority
                })
                currentProject.removeTodo(todo);
                allTodos.removeTodo(todo);
                setTodoPopup(true);
            }}/>
            <Image src={DeleteIcon} onClick={() => {
                currentProject.removeTodo(todo);
                allTodos.removeTodo(todo);
                setProjects([...projects]);
            }}/>
        </Container>
    );
}

export default TodoContainer;