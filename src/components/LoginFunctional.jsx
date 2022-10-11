import React, { useEffect, useState } from 'react';

export async function handleCallback(response, setItems) {
  let k = await fetch('https://worker.nti-johanneberg.workers.dev/jsondata', {
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
function GoogleLogin() {
  /* global google */
  console.log('banana');
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
}
export default GoogleLogin;
