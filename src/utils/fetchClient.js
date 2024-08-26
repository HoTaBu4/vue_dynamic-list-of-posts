const BASE_URL = 'https://mate.academy/students-api';

function wait(delay) {
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  }
  
  async function request(
    url,
    method = 'GET',
    data, // we can send any data to the server
  ) {
    const options = { method };
  
    if (data) {
      // We add body and Content-Type only for the requests with data
      options.body = JSON.stringify(data);
      options.headers = {
        'Content-Type': 'application/json; charset=UTF-8',
      };
    }
  
    // for a demo purpose we emulate a delay to see if Loaders work
    await wait(300);
      const response = await fetch(BASE_URL + url, options);
      return await response.json();
  }

  export const client = {
    get: (url) => request(url),
    post: (url, data) => request(url, 'POST', data),
    patch: (url, data) => request(url, 'PATCH', data),
    delete: (url) => request(url, 'DELETE'),
  };