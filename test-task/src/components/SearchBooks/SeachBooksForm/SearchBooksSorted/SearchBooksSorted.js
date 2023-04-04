import { useDispatch } from "react-redux";

const SearchBooksSorted = () => {

  const dispatch = useDispatch()

  return (
    <>
      <span className="search-books__sorting-text">Sorting by</span>
      <select className="search-books__sorting" onClick={(e) => {
        dispatch({
          type: 'set-sorting-value',
          payload: {
            sortingValue: e.target.value
          }
        })
      }}>
        <option>relevance</option>
        <option>newest</option>
      </select>
    </>
  )
}

export default SearchBooksSorted