const CatagoryReducer = (state,action) => {
    switch(action.type){
          case 'GET':
              return action.data.data
    }
}

export default CatagoryReducer;