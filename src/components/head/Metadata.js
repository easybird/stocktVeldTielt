import React, { PropTypes } from "react";
import Helmet from "react-helmet";
import invariant from "invariant";
import { joinUri } from "phenomic";

const Metadata = ({ __filename, __url, head }, { metadata: { pkg } }) => {
  invariant(
    typeof head.title === "string",
    `Your page '${__filename}' needs a title`
  );

  const metaTitle = head.metaTitle ? head.metaTitle : head.title;

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url)
    },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${pkg.twitter}` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
    { name: "theme-color", content: "#ffffff" },
    {
      name: "google-site-verification",
      content: "XziH1JxX5-LwQmmxWANw-B1WtvUBUaJJOqerfQ3QSxU"
    },
    { name: "p:domain_verify", content: "2ba475aad55941b7b7bfa5bf743fa44a" }
  ];

  const favicons = [
    // created by realfavicongenerator.net
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/assets/img/favicon/apple-touch-icon.png"
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/assets/img/favicon/favicon-32x32.png",
      sizes: "32x32"
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/assets/img/favicon/favicon-16x16.png",
      sizes: "16x16"
    },
    { rel: "manifest", href: "/assets/img/favicon/manifest.json" },
    {
      rel: "mask-icon",
      href: "/assets/img/favicon/safari-pinned-tab.svg",
      color: "#5bbad5"
    }
  ];

  return (
    <Helmet>
      {meta.map(metaItem => <meta {...metaItem} />)}
      {favicons.map(favicon => <link {...favicon} />)}
      <title>{metaTitle}</title>
      <script type="text/javascript">{`
        if(typeof fbq === 'undefined') {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '370749923365650');
  fbq('track', 'PageView');
  }
`}</script>
      <noscript>{`
  <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=370749923365650&ev=PageView&noscript=1"
/>
`}</noscript>
    </Helmet>
  );
};

Metadata.propTypes = {
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired
};

Metadata.contextTypes = {
  metadata: PropTypes.object.isRequired
};

export default Metadata;
