import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import Stocktveld from "./layouts/Stocktveld"
import StocktveldPage from "./layouts/StocktveldPage"
import StocktveldWieZijnWij from "./layouts/custom/StocktveldWieZijnWij"
import StocktveldAanbod from "./layouts/custom/StocktveldAanbod"
import StocktveldContact from "./layouts/custom/StocktveldContact"
import StocktveldLocatie from "./layouts/custom/StocktveldLocatie"
import StocktveldEmbedded from "./layouts/custom/StocktveldEmbedded"
import Post from "./layouts/Post"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      Stocktveld,
      StocktveldPage,
      StocktveldWieZijnWij,
      StocktveldAanbod,
      StocktveldContact,
      StocktveldLocatie,
      StocktveldEmbedded,
      Post,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
