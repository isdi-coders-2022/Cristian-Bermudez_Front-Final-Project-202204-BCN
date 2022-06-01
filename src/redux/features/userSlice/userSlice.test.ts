import { UserState } from "../../../interfaces/UserInterfaces";
import userReducer, { userLoginUserActionCreator } from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When its invoked with a userLogInAction and a user", () => {
    test("Then it should return the user loggedIn", () => {
      const userInitialState: UserState = {
        id: "1",
        name: "user",
        username: "user89",
        logged: false,
      };
      const userLoggedState: UserState = {
        id: "1",
        name: "user",
        username: "user89",
        logged: true,
      };

      const userLogInAction = userLoginUserActionCreator(userInitialState);
      const userLogged = userReducer(userInitialState, userLogInAction);

      expect(userLogged).toEqual(userLoggedState);
    });
  });
});
