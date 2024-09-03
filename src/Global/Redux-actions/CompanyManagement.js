import { createSlice } from "@reduxjs/toolkit";

// const setUserType = (usertype) => {
//     localStorage.setItem('TypeofUser', usertype)
// }

// const user = localStorage.getItem('TypeofUser')

// const setUserDatas = (userdatas) => {
//     localStorage.setItem('datas', JSON.stringify(userdatas))
// }

// const datas = JSON.parse(localStorage.getItem('datas'))

// setUser("visitor")
const initialState = {
    NavBarvisibilty: undefined,
    UserData :undefined,
    UserDatas :undefined,
    employees:undefined,
    addEmployee: false,
    addTask: false,

}


// famousfotune123@gmail.com
// aaa1$Aaa


export const CompanyManagementSlice = createSlice({
    name: "CompanyManagement",
    initialState,
    reducers: {
        setNavigationBar: (state) => {
            state.NavBarvisibilty = !state.NavBarvisibilty; 
        },
        closeNavigationBar: (state) => {
            state.NavBarvisibilty = false; 
        },
        setUserData: (state, {payload}) => {
            state.UserData = payload; 
            state.NavBarvisibilty = false
        },
        setUserDatas: (state, {payload}) => {
            state.UserDatas = payload; 
        },
        setEmployeesDatas: (state, {payload}) => {
            state.employees = payload; 
        },
        setAddEmployeeForm: (state) => {
            state.addEmployee = !state.addEmployee; 
        },
        setAddTask: (state) => {
            state.addTask = !state.addTask; 
        },
        logOutUser: (state) => {
            state.UserData = undefined; 
        },

    }
});

export const { setNavigationBar,  closeNavigationBar, setUserData,
     logOutUser, setEmployeesDatas, setAddEmployeeForm,
     setAddTask, setUserDatas
    } = CompanyManagementSlice.actions;
export default CompanyManagementSlice.reducer;




