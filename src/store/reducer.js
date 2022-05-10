const CHANGE_LOADING = "changeLoadin"

const instance = {
  isLoadin: false,
}

export default (state = instance, action) => {
  const { type, value } = action
  let duplicate = { ...state }
  console.log(value)
  switch (type) {
    case CHANGE_LOADING:
      console.log("change")
      duplicate.isLoadin = value
      return duplicate
    default:
  }
  return state
}
