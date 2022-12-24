import {configureStore} from '@reduxjs/toolkit'
import {userReducer , postOfFollowingReducer} from './Reducers/userReducer'



const store = configureStore({
    reducer: {
        // Add reducers here
        user: userReducer,
        // postofFollwoing: postOfFollowingReducer,
    }

})

export default store