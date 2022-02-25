import actionTypes from './actionTypes';

const mutations = {
    [actionTypes.ADD_TODO](state, todo) {
        state.todos.push(todo);
    },
    [actionTypes.UPDATE_TODO](state, {id, text}){
        const todo = state.todos.find(todo => todo.id === id);
        todo.text = text;
    },
    [actionTypes.DELETE_TODO](state, id) {
        const index = state.todos.findIndex(todo => todo.id === id);
        if(index>=0){
            state.todos.splice(index,1);
        }
    }
}

export default mutations;
