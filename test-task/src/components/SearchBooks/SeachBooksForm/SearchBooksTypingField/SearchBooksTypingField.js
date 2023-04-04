import { useDispatch, useSelector } from "react-redux"

const SearchBooksTypingField = () => {

  const dispatch = useDispatch()
  const inputValue = useSelector(state => state.searchBooksValue);

  return (
    <>
      <input type='text' value={inputValue} onChange={(e) => {

        dispatch({
          type: 'set-value',
          payload: {
            searchBooksText: e.target.value
          }
        })

        dispatch({
          type: 'set-input-value',
          payload: {
            searchBooksValue: e.target.value
          }
        })

      }} className='search-books__text-field' />
      <button className="search-books__btn">Search</button>
    </>
  )
}

export default SearchBooksTypingField