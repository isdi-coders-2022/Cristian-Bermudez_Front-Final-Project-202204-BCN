import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProject, PaginatedProjects } from "../../../types/ProjectsTypes";

const initialState: PaginatedProjects = {
  results: [],
  details: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    loadProjects: (
      state: PaginatedProjects,
      action: PayloadAction<PaginatedProjects>
    ): PaginatedProjects => ({ ...action.payload }),
    projectDetails: (
      state: PaginatedProjects,
      action: PayloadAction<IProject>
    ): PaginatedProjects => ({ ...state, details: [action.payload] }),
    deleteProject: (
      state: PaginatedProjects,
      action: PayloadAction<string>
    ): PaginatedProjects => ({
      ...state,
      results: state.results.filter((result) => result.id !== action.payload),
    }),
    createProject: (
      state: PaginatedProjects,
      action: PayloadAction<IProject>
    ): PaginatedProjects => ({
      ...state,
      results: [...state.results, action.payload],
    }),
    setRoleFilter: (
      state: PaginatedProjects,
      action: PayloadAction<string>
    ): PaginatedProjects => ({ ...state, filter: { role: action.payload } }),
    setGenreFilter: (
      state: PaginatedProjects,
      action: PayloadAction<string>
    ): PaginatedProjects => ({ ...state, filter: { genre: action.payload } }),
  },
});

export const {
  loadProjects: loadProjectsActionCreator,
  projectDetails: projectDetailsActionCreator,
  deleteProject: deleteProjectActionCreator,
  createProject: createProjectActionCreator,
  setRoleFilter: setRoleFilterActionCreator,
  setGenreFilter: setGenreFilterActionCreator,
} = projectsSlice.actions;

export default projectsSlice.reducer;
