import {
  ADD_LISTS

} from './mutation-types.js'



export default {
	[ADD_LISTS](state,{data}){
    state.lists.push(data)
  }

}
