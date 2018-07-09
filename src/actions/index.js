import axios from "axios";

export function loadData() {
  return (dispatch) => {
    axios.get("https://5b3c87c1e7659e0014969661.mockapi.io/Data")
      .then((response) => {
        response.data.map((item) => {
          item.mail = `${item.name.replace(/ /g, '')}@gmail.com`,
          item.checked = false
        })
        dispatch(getData(response))
      });
  }
}

export function getData(response) {
  return {
    type: "GET_DATA",
    payload: response.data
  }
}

let nextPersonId = 51
export const addPerson = (mail, name) => ({
  type: 'ADD_PERSON',
  id: nextPersonId++,
  mail,
  name
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const togglePerson = id => ({
  type: 'TOGGLE_PERSON',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const deleteItems = arrayId => ({
  type: 'DELETE',
  payload: arrayId
})

export const deleteActions = {
  DELETE: "DELETE"
}

export const toggleChecked = (id) => ({
  type: "TOGGLE_CHECKED",
  payload: id
})
