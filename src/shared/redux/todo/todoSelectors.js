import sortBy from 'lodash/sortBy';

import { isAuthenticated } from 'redux/auth/authSelectors';

export const isEditable = (state) => isAuthenticated(state);

export const getTodos = (state) => state.todos;

export const getTodo = (state, id) => getTodos(state)[id];

export const computeTodos = (state) => sortBy(getTodos(state), 'dateCreated');