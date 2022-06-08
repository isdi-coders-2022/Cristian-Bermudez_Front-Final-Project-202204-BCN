import { useEffect } from "react";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadUserProjectsThunk } from "../../redux/thunks/projectsThunks/projectsThunks";
import { PageStyles } from "../PageStyles";

const UserProjectsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.projects);
  const username = useAppSelector((state) => state.user.username);
  useEffect(() => {
    dispatch(loadUserProjectsThunk());
  }, [dispatch]);

  return (
    <>
      <PageStyles>
        <h2>
          {username?.toUpperCase()} YOU HAVE {projects.length} PROJECTS
        </h2>
        <ProjectsList projects={projects} />
      </PageStyles>
    </>
  );
};

export default UserProjectsPage;