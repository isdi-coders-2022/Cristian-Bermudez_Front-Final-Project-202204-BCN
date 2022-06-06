import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  mockUserLogged,
  mockUserNotLogged,
} from "../../mocks/mockUsers/mockUsers";
import store from "../../redux/store";
import { UserState } from "../../types/UserTypes";
import PrivateRoute from "./PrivateRoute";

let mockuserState: UserState;

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => mockuserState.logged,
}));
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a PrivateRoute component", () => {
  describe("When its invoked and the user is not logged in", () => {
    test("Then it should call the navigate function with tue route '/login'", () => {
      mockuserState = mockUserNotLogged;
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PrivateRoute>
              <div>Children</div>
            </PrivateRoute>
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
  });

  describe("When its invoked and the user is logged in", () => {
    test("Then it should render it's children whit a 'children' heading", () => {
      mockuserState = mockUserLogged;
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PrivateRoute>
              <h1>Children</h1>
            </PrivateRoute>
          </BrowserRouter>
        </Provider>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: /children/i,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
