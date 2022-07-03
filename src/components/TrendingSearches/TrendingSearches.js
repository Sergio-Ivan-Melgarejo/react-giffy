import React, { useState, useEffect } from 'react'
import getTrendingTerms from 'services/getTrendingTermsService'
import Category from 'components/Category'

import "./trends.css";

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingTerms().then(setTrends)
  }, [])

  return <Category className="asd2" name='Tendencias' options={trends} />
}