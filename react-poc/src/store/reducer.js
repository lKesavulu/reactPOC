
const initialState ={
    users:{},
    isAuthenticated: false,
    currentUser:{}
}
const reducer =(state = initialState, action)=>{
    const newState = Object.assign({}, state);
    switch(action.type){
        case "SET_USER":
            return{
                currentUser:action.value.user,
                isAuthenticated : action.value.isAuthenticated    
            }
        default:
            return newState;
    }
    
};
export default reducer;