import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'

import GifsContext from '../context/GifsContext'
import { Context } from "../context/LanguageContext";

const INITIAL_PAGE = 0

export function useGifs ({ keyword, rating, home } = { keyword: null}) {
  const {language} = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContext)

  // recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword')

  useEffect(function () {
    setLoading(true)

    getGifs({ keyword: keywordToUse || 'random', rating, language })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos la keyword en el localStorage
        if (gifs.length > 0 && keyword !== undefined) localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUse, setGifs, rating, language])

  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, page, rating, language })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, setGifs, rating, language])

  return {loading, loadingNextPage, gifs, page, setPage}
}