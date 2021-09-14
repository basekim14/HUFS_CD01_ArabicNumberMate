'use strict';

const callAPI = function(imageUrl) {
  const APIKEY = '';
  return fetch(`https://vision.googleapis.com/v1/images:annotate?key=${APIKEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'requests': [
          {
            'image': {
              'content': imageUrl.split(',')[1]
            },
            'features': [
              {
                'type': 'DOCUMENT_TEXT_DETECTION'
              }
            ],
            "imageContext": {
              "languageHints": [
                "ar"
              ]
            }
          }
        ]
      }),
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch(err => {
    console.log('Fetch Error', err);
  });
}
