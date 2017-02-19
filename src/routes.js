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

// GOOGLE Analytics, part 1/2
const GOOGLE_ANALYTICS_UA = "UA-92201074-1";
if (typeof window !== "undefined") {
  /* eslint-disable import/newline-after-import */
  /* eslint-disable import/max-dependencies */

  // eslint-disable-next-line
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  /* global ga: true */
  // ga comes from google-analytics script injected below
  ga("create", GOOGLE_ANALYTICS_UA, "auto")

  // autotrack
  // https://github.com/googleanalytics/autotrack

  // most important plugin for phenomic
  require("autotrack/lib/plugins/url-change-tracker")
  ga("require", "urlChangeTracker")

  // some plugins you might like
  require("autotrack/lib/plugins/clean-url-tracker")
  ga("require", "cleanUrlTracker")
  require("autotrack/lib/plugins/outbound-form-tracker")
  ga("require", "outboundFormTracker")
  require("autotrack/lib/plugins/outbound-link-tracker")
  ga("require", "outboundLinkTracker")
}

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
