import actionTypes from "./actionTypes";

const actions = {
    addTodo({ commit }, todo) {
        commit(actionTypes.ADD_TODO, todo);
    },
    updateTodo({ commit }, payload) {
        commit(actionTypes.UPDATE_TODO, payload);
    },
    deleteTodo({ commit }, id) {
        commit(actionTypes.DELETE_TODO, id);
    }
}

export default actions;
