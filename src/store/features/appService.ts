import API from '../../api';
import { setTodoList } from './appSlice';

export const fetchUsers = () => async (dispatch: any) => {
  const response = await API.get('/user');
  dispatch(setTodoList(response.data));
};
