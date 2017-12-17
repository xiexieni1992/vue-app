import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// Modules
import account from './account'
import auth from './auth'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    /**
     * Assign the modules to the store
     */
    modules: {
        account,
        auth
    },

    /**
     * If strict mode should be enabled
     */
    strict: debug,

    /**
     * Plugins used in the store
     */
    plugins: debug ? [createLogger()] : []
})