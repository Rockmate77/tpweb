import * as msal from '@azure/msal-browser'
let lastuser=null;
/**
 * List the requested scopes (aka. the requested permissions)
 */
const requestedScopes = {
    scopes: ["User.Read"]
}

const msalInstance = new msal.PublicClientApplication({
    auth: {
        clientId: process.env.VUE_APP_OAUTH_CLIENT_ID
    },
    cache: {
        cacheLocation: "sessionStorage"
    }
})
export function getLastUser(){return lastuser;}
export async function signInAndGetUser () {
    try {
        await msalInstance.initialize();
        const authResult = await msalInstance.loginPopup(requestedScopes);

        // Check if the authentication result contains an account
        if (authResult.account) {
            msalInstance.setActiveAccount(authResult.account);
            lastuser=authResult.account;
            // Use Microsoft Graph or other APIs to get user information here
            // Example: const userDetails = await getUserInfoFromGraphAPI();

            return authResult.account;
        } else {
            console.error('No user account found.');
        }
    } catch (error) {
        console.error('Error during sign-in:', error);
    }
}