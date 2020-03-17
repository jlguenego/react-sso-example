export async function post(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  if (response.status >= 400) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export async function get(url = '') {
  const response = await fetch(url);
  if (response.status >= 400) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
