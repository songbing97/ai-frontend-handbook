function parseUrlParams(url) {
  const params = {};
  const queryString = url.split('?')[1];

  if (queryString) {
    const searchParams = new URLSearchParams(queryString);
    for (const [key, value] of searchParams) {
      params[key] = value;
    }
  }

  return params;
}

// Test
const url = 'https://example.com/?name=John&age=25&gender=male';
const params = parseUrlParams(url);
console.log(params); // 输出 { name: 'John', age: '25', gender: 'male' }
