import { createStore } from 'vuex'

import referidosStore from "./referidosStore/index.js";

const store = createStore({
    modules:{
        referidosStore
    }
})


export default store