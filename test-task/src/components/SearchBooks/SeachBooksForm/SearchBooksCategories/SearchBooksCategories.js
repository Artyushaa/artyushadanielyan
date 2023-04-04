import { useDispatch } from "react-redux";

const SearchBooksCategories = () => {

  const dispatch = useDispatch()

  return (
    <>
      <span className="search-books__categories-text">Categories</span>
      <select className="search-books__categories" onClick={(e) => {
        dispatch({
          type: 'set-categories-value',
          payload: {
            categoriesValue: e.target.value
          }
        })
      }}>
        <option>all</option>
        <option>art</option>
        <option>biography</option>
        <option>computers</option>
        <option>history</option>
        <option>medical</option>
        <option>poetry</option>
      </select>
    </>
  )
}

export default SearchBooksCategories