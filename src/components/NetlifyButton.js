import React from "react"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"


const NetlifyButton = () => {
  const identity = useIdentityContext() // see https://github.com/sw-yx/react-netlify-identity for api of this identity object
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
        <button className="button menu-button" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
        </button>
      <IdentityModal className="put-on-top" showDialog={dialog} onCloseDialog={() => setDialog(false)} />
    </>
  )
}

export default NetlifyButton