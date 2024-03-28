import { Project } from "../Classes"
import styled from '@emotion/styled'
import { Button } from '@mui/material'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:start;
  align-items:center;
  overflow: scroll;
  width: 70%;
  height: 60%;
  background-color:pink;
`;

type Props = {
    projects: Project[];
    setCurrentProject: React.Dispatch<React.SetStateAction<Project>>;
}

const ProjectSelect = (props: Props) => {
    const {projects, setCurrentProject} = {...props};

    return (
        <Container>
            {projects.map((project) => (
                <Button key={project.title} onClick={() => {
                        setCurrentProject(project)
                    }
                }> {project.title}</Button>
            ))}
        </Container>
    );
}

export default ProjectSelect;