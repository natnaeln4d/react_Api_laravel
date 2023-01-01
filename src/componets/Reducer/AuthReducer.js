const AuthReducer = (state,action) => {
    switch(action.type){
          case 'GET':
              return action.auth
          case 'LOGIN':
              return {auth: action.auth} 
          case 'LOGOUT':
              return {auth: !state.auth} 
          case 'LOG':
              return {auth: !state.auth} 
    }
}

export default AuthReducer;