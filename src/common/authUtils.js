import Carbon from "./carbon"
import StatePersist from "./state"
import { rstrim, lstrim } from "./string"


export const getTokens = () => {
  const tokens = StatePersist.get("__tokens")
  return { access: tokens?.access, refresh: tokens?.refresh, expiry: tokens?.expiry }
}

export const setTokens = (tokens) => {
  const expiry = Carbon.after({ seconds: 86400 })
  StatePersist.set("__tokens", {
    access: tokens?.access, refresh: tokens?.refresh, expiry: expiry
  })
}


export const removeTokens = () => {
  StatePersist.remove("__tokens")
}

export const isAuthenticated = (params) => {
  const { access, refresh, expiry } = params ?? getTokens()
  return access && refresh && expiry ? !Carbon.isExpired(expiry) : false
}


export const canRefresh = (params) => {
  const { access, refresh, expiry } = params ?? getTokens()
  return access && refresh && expiry ? Carbon.isExpired(expiry) : false
}

export const gen_oauth_provider_uri = (providerEndpoint, redirectUri) => {
  const apiUri = rstrim(process.env.REACT_APP_API_URL, "/")
  const appUri = rstrim(window.location.origin, "/")
  redirectUri = lstrim(redirectUri, "/")
  providerEndpoint = lstrim(providerEndpoint, "/")
  return apiUri + "/" + providerEndpoint + "?redirect_uri=" + appUri + "/" + redirectUri
}
