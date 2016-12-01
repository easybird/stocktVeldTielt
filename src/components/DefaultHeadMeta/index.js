import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
      ] }
      link={ [
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }

      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
      ] }
    />
    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [{
        name: "viewport", content: "width=device-width, initial-scale=1",
      }] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
