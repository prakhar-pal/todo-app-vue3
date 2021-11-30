import { createStore } from 'vuex';
import actionTypes from './actionTypes';
// import actions from './actions';
// import mutations from './mutations';

const initialState = {
    todos: []
};
const store = createStore({
    state: () => initialState,
    mutations: {
        [actionTypes.ADD_TODO](state, todo) {
            state.todos.push(todo);
        },
        [actionTypes.UPDATE_TODO](state, {id, text}){
            const todo = state.todos.find(todo => todo.id === id);
            todo.text = text;
        }
    },
    actions: {
        addTodo({ commit }, todo) {
            commit(actionTypes.ADD_TODO, todo);
        },
        updateTodo({ commit }, payload){
            commit(actionTypes.UPDATE_TODO, payload);
        }
    }
});

export default store;
