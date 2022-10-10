import React, { useEffect, useState } from 'react';

export async function handleCallback(response, setItems) {
  let k = await fetch('http://127.0.0.1:8787/jsondata', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ credential: response.credential }),
  }); /*
    .then((response) => {
      console.log(response.headers.get('Set-Cookie'));
      response.json();
    })
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });*/
  localStorage.setItem('uuid', await k.json());
  window.location.reload(false);
}
const GoogleLogin = () => {
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '1058252294256-0ej4mt1vgmktaelhcgkt2bl7r9emd2pm.apps.googleusercontent.com',
      callback: handleCallback,
    });

    google.accounts.id.renderButton(document.getElementById('google_sign_in'), {
      theme: 'filled_black',
      size: 'large',
      shape: 'pill',
    });
  });

  return (
    <>
      <div id="google_sign_in" />
    </>
  );
};
export default GoogleLogin;
