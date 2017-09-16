import React from "react";

const thisIsMyCopy = `<!-- Google Code for WebsiteBezoekenConversie Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 835664949;
var google_conversion_language = "en";
var google_conversion_format = "3";
var google_conversion_color = "ffffff";
var google_conversion_label = "KSoyCNGeinUQtfi8jgM";
var google_remarketing_only = false;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/835664949/?label=KSoyCNGeinUQtfi8jgM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>';`;

const GoogleConversionHtml = () =>
  <div
    className="googleConversionScript"
    dangerouslySetInnerHTML={{ __html: thisIsMyCopy }}
  />;

export default GoogleConversionHtml;
