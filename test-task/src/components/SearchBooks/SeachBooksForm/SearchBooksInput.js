import { useDispatch, useSelector } from "react-redux";
import { SortigAPI } from "../../../request/BooksAPI";
import SearchBooksCategories from "./SearchBooksCategories/SearchBooksCategories";
import SearchBooksSorted from "./SearchBooksSorted/SearchBooksSorted";
import SearchBooksTypingField from "./SearchBooksTypingField";

const SearchBooksInput = () => {

  const dispatch = useDispatch()

  const value = useSelector(state => state.searchBooksText);
  // const categories = useSelector(state => state.categoriesValue);
  const sorting = useSelector(state => state.sortingValue)

  async function submitHandler(e) {
    e.preventDefault()
    const result = await SortigAPI({ value, sorting })
    // const result = await CategoriesAPI({ value, filter: categories })

    dispatch({
      type: 'has-page',
      payload: {
        hasPage: true
      }
    })

    dispatch({
      type: 'set-items',
      payload: {
        searchBooksItems: result
      }
    })

    dispatch({
      type: 'set-input-value',
      payload: {
        searchBooksValue: ''
      }
    })
  }

  return (
    <div>
      <form onSubmit={submitHandler} className='search-books__form'>
        <SearchBooksTypingField />
        <SearchBooksCategories />
        <SearchBooksSorted />
      </form>
    </div>
  )
}

export default SearchBooksInput