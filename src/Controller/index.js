// import { toast } from "react-toastify";
// import API from "../core/serveces";
// import { CONTROLLERS, METHODS } from "../core/serveces/constants";
// import store from "../store";
// import {
//   authorizedOut,
//   saveCurrencies,
//   saveUser,
//   setLoading
// } from "../store/action-creators/app";
// import {
//   userAuthorizedSelector
// } from "../store/selectors/app";

// const AppController = {};
// // 
// AppController.getPlayers = async (body) => {
//   store.dispatch(setLoading())
//   const res = await API.POST(
//     null,
//     CONTROLLERS.CLIENT,
//     METHODS.GET_PLAYERS,
//     body
//   );
//   store.dispatch(setLoading())

//   if (res.hasError) {
//     toast(res.errorMessage);
//     return null;
//   }
//   return res.body;
// };

// AppController.checkUser = async () => {
//   const userAuthorized = userAuthorizedSelector(store.getState());
//   if (userAuthorized) return;
//   const Session = await localStorage.getItem("Session");
//   if (!Session) return;
//   store.dispatch(setLoading());

//   const res = await API.POST(
//     null,
//     CONTROLLERS.CLIENT,
//     METHODS.CHECK_CLIENT,
//     {},
//     {},
//     { AccessToken: Session }
//   );
 
//   if (res.hasError) {
//     // handle error
//     localStorage.clear();
//     store.dispatch(setLoading());

//     return;
//   }

//   store.dispatch(saveUser(res.body));
//   return res;
// };

// AppController.login = async (body) => {
//   store.dispatch(setLoading());
//   const res = await API.POST(null, CONTROLLERS.AUTH, METHODS.LOGIN, body);
 
//   if (res.hasError) {
//     // handle error
//     store.dispatch(setLoading());
//     return toast(res.errorMessage);
//   }

//   store.dispatch(saveUser(res.body));
//   localStorage.setItem("Session", res.body.AccessToken?.Session);
// };

// // vvvvvvvvvvvvvvvvvvvvv
// AppController.logOut = async () => {
//   store.dispatch(setLoading());
//   const res = await API.POST(null, CONTROLLERS.CLIENT, METHODS.LOGOUT);
 
//   if (res.hasError) {
//     // handle error
//     store.dispatch(setLoading());
//     return toast(res.errorMessage);
//   }
  

//   store.dispatch(authorizedOut(false));
// };

// AppController.getCurrencies = async () => {
//   store.dispatch(setLoading());
//   const Session = await localStorage.getItem("Session");
//   const res = await API.POST(null, CONTROLLERS.CLIENT, METHODS.GET_CURRENCIES, {
//     AccessToken: Session,
//   });

//   if (res.hasError) {
//     // handle error
//     store.dispatch(setLoading());
//     return toast(res.errorMessage);
//   }
//   store.dispatch(setLoading());

//   store.dispatch(saveCurrencies(res.body));
// };
// AppController.GetPartners = async (page, name) => {
//   const body = {
//     Name: name,
//     Page: page,
//     RowCount: 20,
//   };
//   const res = await API.POST(
//     null,
//     CONTROLLERS.CLIENT,
//     METHODS.GET_PARTNERS,
//     body
//   );
 
//   if (res.hasError) {
//     toast(res.errorMessage);
//     return false;
//   }
//   return res.body;
// };
// AppController.init = async () => {
//   await AppController.checkUser();
// };

// export default AppController;
