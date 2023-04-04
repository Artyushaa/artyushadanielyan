import { createStore } from 'redux'
import { SET_ITEMS } from './type'

const store = createStore(function (state, action) {

  if (action.type === 'set-value') {
    return {
      ...state,
      searchBooksText: action.payload.searchBooksText
    }
  }

  if (action.type === SET_ITEMS) {
    return {
      ...state,
      searchBooksItems: action.payload.searchBooksItems
    }
  }

  if (action.type === 'set-categories-value') {
    return {
      ...state,
      categoriesValue: action.payload.categoriesValue
    }
  }

  if (action.type === 'set-input-value') {
    return {
      ...state,
      searchBooksValue: action.payload.searchBooksValue
    }
  }

  if (action.type === 'has-page') {
    return {
      ...state,
      hasPage: action.payload.hasPage
    }
  }

  return state
}, {
  searchBooksValue: '',
  searchBooksText: '',
  searchBooksItems: [],
  categoriesValue: 'all',
  sortingValue: 'relevance',
  hasPage: false
})

export default store