const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'

export default function register ({ username, password }) {
  return fetch(`${ENDPOINT}/register`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password})
  }).then(res => {
    if (res.status === 409) throw new Error(409)
    if (!res.ok) throw new Error('Response is NOT ok')
    return true
  })
}