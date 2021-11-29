import { createStore } from 'vuex';
import actionTypes from './actionTypes';
// import actions from './actions';
// import mutations from './mutations';

const initialState = {
    todos: [{id: 0, text: 'make coffee'}]
};
const store = createStore({
    state: () => initialState,
    mutations: {
        [actionTypes.ADD_TODO](state, todo) {
            state.todos.push(todo);
        }
    },
    actions: {
        addTodo({ commit }, todo) {
            commit(actionTypes.ADD_TODO, todo);
        }
    }
});

export default store;
