
const initialState ={
    users:{},
    isAuthenticated: false,
    currentUser:{}
}
const reducer =(state = initialState, action)=>{
    //const newState = Object.assign({}, state);
    switch(action.type){
        case "SET_USER":
            console.log("INSIDE SET_USER "+action.value.isAuthenticated)
            let newState =Object.assign({},state,{
                currentUser:action.value.user,
                isAuthenticated : action.value.isAuthenticated    
            });
            console.log(newState)
            return newState;
        case "FETCH_USERS":
            console.log("INSIDE FETCH USERS"+action.value);
            return Object.assign({},state,{
                users:action.value
            })
        default:
            return state;
    }
    
};
export default reducer;