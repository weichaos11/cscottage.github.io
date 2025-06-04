const auth0 = new Auth0Client({
  domain: 'dev-eti8tkamidugxj82.us.auth0.com',
  client_id: 'nOpiOiRosRMR5qphTqIYFcdvDlCRwsWj',
  redirect_uri: window.location.origin
});

async function checkAuth() {
  if (!await auth0.isAuthenticated()) {
    await auth0.loginWithRedirect();
  }
}
