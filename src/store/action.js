import {
ADD_LISTS
} from './mutation-types.js'

export function addOne ({commit, dispatch, state}, data) {
  commit(ADD_LISTS, {
    data: data
  })
}
