import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

async function SearchBooksAPI(value) {
  const { data: items } = await axios(`${BASE_URL}?q=${value}&maxResults=10`)
  try {
    return items
  }
  catch (err) {
    console.log(err);
  }
}

// export async function CategoriesAPI({ value, filter }) {
//   const res = await axios(`${BASE_URL}?q=${value}&filter=${filter}`)
//   const result = res.data.items
//   return result
// }

export async function SortigAPI({ value, sorting }) {
  console.log(sorting, 'sorting');
  const { data } = await axios(`${BASE_URL}?q=${value}&orderBy=${sorting}&maxResults=10`)

  const { items, totalItems, kind } = data

  return {
    items: items,
    totalItems: totalItems,
    kind: kind
  }
}

export async function LoadMoreAPI({ value, sorting, startIndex }) {
  console.log(startIndex);
  const res = await axios(`${BASE_URL}?q=${value}&orderBy=${sorting}&startIndex=${startIndex}&maxResults=30`)

  return {
    items: res.data.items,
    totalItems: res.data.totalItems,
    kind: res.data.kind
  }
}


export default SearchBooksAPI