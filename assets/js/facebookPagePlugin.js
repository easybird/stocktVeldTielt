let loadFacebook = function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v2.8&appId=255820274875535";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk');
window.loadFacebook = loadFacebook;
