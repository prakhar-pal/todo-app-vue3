import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';

const initialState = {
    todos: []
};
const store = createStore({
    state: () => initialState,
    mutations,
    actions
});

export default store;
