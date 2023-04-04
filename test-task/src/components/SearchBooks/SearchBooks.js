import { useDispatch, useSelector } from "react-redux";
// import Link from 'next-link';
import { LoadMoreAPI } from "../../request/BooksAPI";
import SearchBooksInput from "./SeachBooksForm/SearchBooksInput";



const SearchBooks = () => {

  const dispatch = useDispatch()

  let text = useSelector(state => state.searchBooksItems);
  const value = useSelector(state => state.searchBooksText);
  const sorting = useSelector(state => state.sortingValue);
  const hasPage = useSelector(state => state.hasPage)
  // console.log(hasPage, 'page');
  // console.log(text.totalItems, 'text');
  const items = text.items

  async function loadingHandler({ value, sorting, startIndex }) {
    // console.log(text.totalItems, ':total', startIndex, ':length');
    if (text.totalItems - items.length < 30) {
      console.log('mtav');
      startIndex = text.totalItems - items.length
      dispatch({
        type: 'has-page',
        payload: {
          hasPage: false
        }
      })
      console.log('helav');
    }

    const result = await LoadMoreAPI({ value, sorting, startIndex });

    dispatch({
      type: 'set-items',
      payload: {
        searchBooksItems: {
          totalItems: text?.totalItems,
          items: [
            ...items,
            ...result?.items
          ]
        }
      }
    })
  }


  return (
    <div>
      <div className="search-books">
        <h1 className="search-books__title">Search for books</h1>
        <SearchBooksInput />
      </div>
      {items ? <p className="search-books__total-items">Found {text.totalItems} results</p> : ''}
      <div className="search-books__books-container">
        {text ? text?.items?.map((item) => {
          const volumeInfo = item?.volumeInfo
          return <div key={item.id} className="search-books__books">
            <div className="search-books__img-container">
              <img src={volumeInfo?.imageLinks?.smallThumbnail} alt={volumeInfo?.title} className="search-books__books-pictured" />
            </div>
            <div className="search-books__description-container">
              <p className="search-books__books-categories-text">{volumeInfo?.categories?.length > 0 ? volumeInfo?.categories[0] : volumeInfo?.categories}</p>
              <p className="search-books__books-title">{volumeInfo?.title}</p>
              <p className="search-books__books-author-name">{volumeInfo?.authors}</p>
            </div>
          </div>
        }) : ''}
      </div>
      <div className="search-books__footer">
        {hasPage ? <button className="search-books__loading-btn" onClick={() => {
          loadingHandler({ value, sorting, startIndex: items.length })
        }}>Load More</button> : ''}
      </div>

    </div>
  )
}

export default SearchBooks