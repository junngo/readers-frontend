// imports

// actions

// action creators

// initial state

// reducer
const initialState = {
    isLoggedIn: localStorage.getItem("jwt") || false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;    
    }
}

// reducer functions

// exports

// export reducer by default

export default reducer;
