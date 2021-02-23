import { useContext } from 'react'
import { Context } from './state/Store'

export default function usePagination (data, itemsPerPage) {
  const [state, dispatch] = useContext(Context)

  function currentData (page) {
    const begin = ((page - 1) * itemsPerPage)
    const end = begin + itemsPerPage
    dispatch({ type: 'SET_FIRST_DATA_POINT', firstData: begin })
    dispatch({ type: 'SET_LAST_DATA_POINT', lastData: end })
  }

  function next () {
    const currentPage = Math.min(state.page + 1, state.maxPage)
    dispatch({ type: 'SET_PAGE', page: currentPage })
  }

  function prev () {
    const currentPage = Math.max(state.page - 1, 1)
    dispatch({ type: 'SET_PAGE', page: currentPage })
  }

  function jump (page) {
    const pageNumber = page <= state.maxPage ? Math.max(1, page) : Math.min(page, state.maxPage)
    dispatch({ type: 'SET_PAGE', page: pageNumber })
  }

  return { next, prev, jump, currentData }
}
