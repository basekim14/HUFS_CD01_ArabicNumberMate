'use strict';

const videoElement = document.querySelector('.camera-box__video');
const cameraBtn = document.querySelector('.camera__btn');
const dollar = '';
const info = '';
const imageBox = document.querySelector('.image-box');
const pseudoCanvas = document.querySelector('.image-box__pseudo-canvas');
const capturedImage = document.querySelector('.image-box__captured-image');
const convertBtn = document.querySelector('.image-box__btn--convert');
const closeBtn = document.querySelector('.image-box__btn--close');
const resultBox = document.querySelector('.result-box');
const canvasElement = document.querySelector('.result-box__canvas');
const resultImage = document.querySelector('.result-box__result-image');
const resultBtn = document.querySelector('.result-box__btn');
const resultValue = document.querySelector('.result-box__value');
const resultValueSort = document.querySelector('.result-box__value--sort');
const resultValueNum = document.querySelector('.result-box__value--number');
const resultValuePronoun = document.querySelector('.result-box__value--pronounciation');

const persianNum = '۰۱۲۳۴۵۶۷۸۹';
const arabicNum = '٠١٢٣٤٥٦٧٨٩';
const arabicPronoun = ['sifr', 'waaHid', 'ithnaan',
                      'thalaatha', 'ʿarbaʿa', 'khamsa',
                      'sitta', 'sabʿa', 'thamaaniya', 'tisʿaʿ'];

const activateCamera = function() {

  // 카메라 옵션
  if ( navigator.platform ) {
    const constraints = { audio: false };

    if ('win16|win32|win64|mac|macintel'.indexOf(navigator.platform.toLowerCase()) < 0) {
      // MOBILE
      constraints.video = {
        facingMode: { exact: 'environment' },
        height: { min: 400, ideal: 640, max: 1200 },
        width: { min: 300, ideal: 480, max: 900 }
      };
    } else {
      // PC
      constraints.video = {
        facingMode: 'user',
      };
    }

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
          videoElement.srcObject = stream;
        })
        .catch(function(error) {
          console.error('[admin] Camera error', error);
        });
    }
  }
}

const activateBtn = function() {
  cameraBtn.addEventListener('click', () => {
    pseudoCanvas.width = videoElement.videoWidth;   // 640
    pseudoCanvas.height = videoElement.videoHeight; // 480

    pseudoCanvas.getContext('2d').drawImage(videoElement, 0, 0);

    const imageUrl = pseudoCanvas.toDataURL('image/webp');
    capturedImage.src = imageUrl;
    resultImage.src = imageUrl;

    imageBox.classList.remove('image-box--closed');
  });

  closeBtn.addEventListener('click', () => {
    imageBox.classList.add('image-box--closed');
  });

  convertBtn.addEventListener('click', () => {
    resultValueNum.innerText = '';
    resultValuePronoun.innerText = '인식된 글자 영역을 터치해주세요.';
    if (DEBUG) {
      console.log('[DUBUG]');
      const res =  {
      	"responses": [
      		{
      			"textAnnotations": [
      				{
      					"locale": "en",
      					"description": "EGYPT\nط و ۱۱۰\n",
      					"boundingPoly": {
      						"vertices": [
      							{
      								"x": 59,
      								"y": 29
      							},
      							{
      								"x": 524,
      								"y": 29
      							},
      							{
      								"x": 524,
      								"y": 301
      							},
      							{
      								"x": 59,
      								"y": 301
      							}
      						]
      					}
      				},
      				{
      					"description": "EGYPT",
      					"boundingPoly": {
      						"vertices": [
      							{
      								"x": 66,
      								"y": 29
      							},
      							{
      								"x": 277,
      								"y": 29
      							},
      							{
      								"x": 277,
      								"y": 99
      							},
      							{
      								"x": 66,
      								"y": 99
      							}
      						]
      					}
      				},
      				{
      					"description": "ط",
      					"boundingPoly": {
      						"vertices": [
      							{
      								"x": 481,
      								"y": 154
      							},
      							{
      								"x": 524,
      								"y": 154
      							},
      							{
      								"x": 523,
      								"y": 301
      							},
      							{
      								"x": 480,
      								"y": 301
      							}
      						]
      					}
      				},
      				{
      					"description": "و",
      					"boundingPoly": {
      						"vertices": [
      							{
      								"x": 394,
      								"y": 153
      							},
      							{
      								"x": 437,
      								"y": 153
      							},
      							{
      								"x": 436,
      								"y": 300
      							},
      							{
      								"x": 393,
      								"y": 300
      							}
      						]
      					}
      				},
      				{
      					"description": "۱۱۰",
      					"boundingPoly": {
      						"vertices": [
      							{
      								"x": 56,
      								"y": 223
      							},
      							{
      								"x": 255,
      								"y": 224
      							},
      							{
      								"x": 254,
      								"y": 372
      							},
      							{
      								"x": 55,
      								"y": 371
      							}
      						]
      					}
      				}
      			],
      			"fullTextAnnotation": {
      				"pages": [
      					{
      						"property": {
      							"detectedLanguages": [
      								{
      									"languageCode": "en",
      									"confidence": 0.5
      								},
      								{
      									"languageCode": "fa",
      									"confidence": 0.5
      								}
      							]
      						},
      						"width": 669,
      						"height": 325,
      						"blocks": [
      							{
      								"property": {
      									"detectedLanguages": [
      										{
      											"languageCode": "en",
      											"confidence": 1
      										}
      									]
      								},
      								"boundingBox": {
      									"vertices": [
      										{
      											"x": 66,
      											"y": 29
      										},
      										{
      											"x": 277,
      											"y": 29
      										},
      										{
      											"x": 277,
      											"y": 99
      										},
      										{
      											"x": 66,
      											"y": 99
      										}
      									]
      								},
      								"paragraphs": [
      									{
      										"property": {
      											"detectedLanguages": [
      												{
      													"languageCode": "en",
      													"confidence": 1
      												}
      											]
      										},
      										"boundingBox": {
      											"vertices": [
      												{
      													"x": 66,
      													"y": 29
      												},
      												{
      													"x": 277,
      													"y": 29
      												},
      												{
      													"x": 277,
      													"y": 99
      												},
      												{
      													"x": 66,
      													"y": 99
      												}
      											]
      										},
      										"words": [
      											{
      												"property": {
      													"detectedLanguages": [
      														{
      															"languageCode": "en"
      														}
      													]
      												},
      												"boundingBox": {
      													"vertices": [
      														{
      															"x": 66,
      															"y": 29
      														},
      														{
      															"x": 277,
      															"y": 29
      														},
      														{
      															"x": 277,
      															"y": 99
      														},
      														{
      															"x": 66,
      															"y": 99
      														}
      													]
      												},
      												"symbols": [
      													{
      														"property": {
      															"detectedLanguages": [
      																{
      																	"languageCode": "en"
      																}
      															]
      														},
      														"boundingBox": {
      															"vertices": [
      																{
      																	"x": 66,
      																	"y": 29
      																},
      																{
      																	"x": 97,
      																	"y": 29
      																},
      																{
      																	"x": 97,
      																	"y": 99
      																},
      																{
      																	"x": 66,
      																	"y": 99
      																}
      															]
      														},
      														"text": "E",
      														"confidence": 0.99
      													},
      													{
      														"property": {
      															"detectedLanguages": [
      																{
      																	"languageCode": "en"
      																}
      															]
      														},
      														"boundingBox": {
      															"vertices": [
      																{
      																	"x": 107,
      																	"y": 29
      																},
      																{
      																	"x": 139,
      																	"y": 29
      																},
      																{
      																	"x": 139,
      																	"y": 99
      																},
      																{
      																	"x": 107,
      																	"y": 99
      																}
      															]
      														},
      														"text": "G",
      														"confidence": 0.99
      													},
      													{
      														"property": {
      															"detectedLanguages": [
      																{
      																	"languageCode": "en"
      																}
      															]
      														},
      														"boundingBox": {
      															"vertices": [
      																{
      																	"x": 157,
      																	"y": 29
      																},
      																{
      																	"x": 189,
      																	"y": 29
      																},
      																{
      																	"x": 189,
      																	"y": 99
      																},
      																{
      																	"x": 157,
      																	"y": 99
      																}
      															]
      														},
      														"text": "Y",
      														"confidence": 0.99
      													},
      													{
      														"property": {
      															"detectedLanguages": [
      																{
      																	"languageCode": "en"
      																}
      															]
      														},
      														"boundingBox": {
      															"vertices": [
      																{
      																	"x": 199,
      																	"y": 29
      																},
      																{
      																	"x": 231,
      																	"y": 29
      																},
      																{
      																	"x": 231,
      																	"y": 99
      																},
      																{
      																	"x": 199,
      																	"y": 99
      																}
      															]
      														},
      														"text": "P",
      														"confidence": 0.99
      													},
      													{
      														"property": {
      															"detectedLanguages": [
      																{
      																	"languageCode": "en"
      																}
      															],
      															"detectedBreak": {
      																"type": "LINE_BREAK"
      															}
      														},
      														"boundingBox": {
      															"vertices": [
      																{
      																	"x": 250,
      																	"y": 29
      																},
      																{
      																	"x": 277,
      																	"y": 29
      																},
      																{
      																	"x": 277,
      																	"y": 99
      																},
      																{
      																	"x": 250,
      																	"y": 99
      																}
      															]
      														},
      														"text": "T",
      														"confidence": 1
      													}
      												],
      												"confidence": 0.99
      											}
      										],
      										"confidence": 0.99
      									}
      								],
      								"blockType": "TEXT",
      								"confidence": 0.99
      							},
      							{
      								"property": {
      									"detectedLanguages": [
      										{
      											"languageCode": "fa",
      											"confidence": 1
      										}
      									]
      								},
      								"boundingBox": {
      									"vertices": [
      										{
      											"x": 60,
      											"y": 151
      										},
      										{
      											"x": 524,
      											"y": 153
      										},
      										{
      											"x": 523,
      											"y": 301
      										},
      										{
      											"x": 59,
      											"y": 299
      										}
      									]
      								},
      								"paragraphs": [
      									{
      										"property": {
      											"detectedLanguages": [
      												{
      													"languageCode": "fa",
      													"confidence": 1
      												}
      											]
      										},
      										"boundingBox": {
      											"vertices": [
      												{
      													"x": 60,
      													"y": 151
      												},
      												{
      													"x": 524,
      													"y": 153
      												},
      												{
      													"x": 523,
      													"y": 301
      												},
      												{
      													"x": 59,
      													"y": 299
      												}
      											]
      										},
      										"words": [
      											{
      												"property": {
      													"detectedLanguages": [
      														{
      															"languageCode": "fa"
      														}
      													]
      												},
      												"boundingBox": {
      													"vertices": [
      														{
      															"x": 481,
      															"y": 154
      														},
      														{
      															"x": 524,
      															"y": 154
      														},
      														{
      															"x": 523,
      															"y": 301
      														},
      														{
      															"x": 480,
      															"y": 301
      														}
      													]
      												},
      												"symbols": [
      													{
      														"property": {
      															"detectedLanguages": [
      																{
      																	"languageCode": "fa"
      																}
      															],
      															"detectedBreak": {
      																"type": "SPACE"
      															}
      														},
      														"boundingBox": {
      															"vertices": [
      																{
      																	"x": 481,
      																	"y": 154
      																},
      																{
      																	"x": 524,
      																	"y": 154
      																},
      																{
      																	"x": 523,
      																	"y": 301
      																},
      																{
      																	"x": 480,
      																	"y": 301
      																}
      															]
      														},
      														"text": "ط",
      														"confidence": 0.85
      													}
      												],
      												"confidence": 0.85
      											},
      											{
      												"property": {
      													"detectedLanguages": [
      														{
      															"languageCode": "fa"
      														}
      													]
      												},
      												"boundingBox": {
      													"vertices": [
      														{
      															"x": 394,
      															"y": 153
      														},
      														{
      															"x": 437,
      															"y": 153
      														},
      														{
      															"x": 436,
      															"y": 300
      														},
      														{
      															"x": 393,
      															"y": 300
      														}
      													]
      												},
      												"symbols": [
      													{
      														"property": {
      															"detectedLanguages": [
      																{
      																	"languageCode": "fa"
      																}
      															],
      															"detectedBreak": {
      																"type": "SPACE"
      															}
      														},
      														"boundingBox": {
      															"vertices": [
      																{
      																	"x": 394,
      																	"y": 153
      																},
      																{
      																	"x": 437,
      																	"y": 153
      																},
      																{
      																	"x": 436,
      																	"y": 300
      																},
      																{
      																	"x": 393,
      																	"y": 300
      																}
      															]
      														},
      														"text": "و",
      														"confidence": 0.87
      													}
      												],
      												"confidence": 0.87
      											},
      											{
      												"property": {
      													"detectedLanguages": [
      														{
      															"languageCode": "fa"
      														}
      													]
      												},
      												"boundingBox": {
      													"vertices": [
      														{
      															"x": 60,
      															"y": 152
      														},
      														{
      															"x": 267,
      															"y": 153
      														},
      														{
      															"x": 266,
      															"y": 300
      														},
      														{
      															"x": 59,
      															"y": 299
      														}
      													]
      												},
      												"symbols": [
      													{
      														"property": {
      															"detectedLanguages": [
      																{
      																	"languageCode": "fa"
      																}
      															]
      														},
      														"boundingBox": {
      															"vertices": [
      																{
      																	"x": 216,
      																	"y": 152
      																},
      																{
      																	"x": 267,
      																	"y": 152
      																},
      																{
      																	"x": 266,
      																	"y": 299
      																},
      																{
      																	"x": 215,
      																	"y": 299
      																}
      															]
      														},
      														"text": "۱",
      														"confidence": 0.7
      													},
      													{
      														"property": {
      															"detectedLanguages": [
      																{
      																	"languageCode": "fa"
      																}
      															]
      														},
      														"boundingBox": {
      															"vertices": [
      																{
      																	"x": 144,
      																	"y": 152
      																},
      																{
      																	"x": 175,
      																	"y": 152
      																},
      																{
      																	"x": 174,
      																	"y": 299
      																},
      																{
      																	"x": 143,
      																	"y": 299
      																}
      															]
      														},
      														"text": "۱",
      														"confidence": 0.94
      													},
      													{
      														"property": {
      															"detectedLanguages": [
      																{
      																	"languageCode": "fa"
      																}
      															],
      															"detectedBreak": {
      																"type": "LINE_BREAK"
      															}
      														},
      														"boundingBox": {
      															"vertices": [
      																{
      																	"x": 60,
      																	"y": 152
      																},
      																{
      																	"x": 119,
      																	"y": 152
      																},
      																{
      																	"x": 118,
      																	"y": 299
      																},
      																{
      																	"x": 59,
      																	"y": 299
      																}
      															]
      														},
      														"text": "۰",
      														"confidence": 0.37
      													}
      												],
      												"confidence": 0.67
      											}
      										],
      										"confidence": 0.74
      									}
      								],
      								"blockType": "TEXT",
      								"confidence": 0.74
      							}
      						]
      					}
      				],
      				"text": "EGYPT\nط و ۱۱۰\n"
      			}
      		}
      	]
      };
      const blocks = res.responses[0].textAnnotations;
      blocks.shift();

      imageBox.classList.add('image-box--under');
      resultBox.classList.remove('result-box--closed');

      markRect(blocks);
    } else {
      callAPI(capturedImage.src).then(res => {
        const blocks = res.responses[0].textAnnotations;
        blocks.shift();
        imageBox.classList.add('image-box--under');
        resultBox.classList.remove('result-box--closed');

        markRect(blocks);
      });
    }

  });

  resultBtn.addEventListener('click', () => {
    imageBox.classList.replace('image-box--under', 'image-box--closed');
    resultBox.classList.add('result-box--closed');
  });
}

const markRect = function(blocks) {
  canvasElement.width = resultImage.width;
  canvasElement.height= resultImage.height;

  const ctx = canvasElement.getContext('2d');
  const sw = window.innerWidth / 100
  ctx.lineWidth = sw;
  ctx.strokeStyle = '#1aff0097';
  ctx.fillStyle = '#1aff0097';
  ctx.font = '20pt serif';

  const scale = resultImage.width / 640;
  let count = 1;
  const areaInfoArr = [];

  for (const block of blocks) {
    const word = block['description'];
    if (/^[a-zA-Z]+$/.test(word) || /^\d+$/.test(word) || /^[\u0621-\u064A]+$/.test(word)) {
      continue;
    } else {
      const result = word.replace(/ /g, '')
                         .replace(/\d/g, '□')
                         .replace(/[.~!@#$%^&*()_+|<>?:{}]/g, '')
                         .replace(/[a-zA-Z]/g, '□')
                         .replace(/[\u0621-\u064A]/g, '□')
                         .replace(/[۰-۹]/g, num => arabicNum[persianNum.indexOf(num)])
                         .replace(/[٠-٩]/g, num => arabicNum.indexOf(num));

      if (result && !result.includes('□')) {
        const vertices = block['boundingPoly']['vertices'];
        const x = vertices[0]['x'];
        const y = vertices[0]['y'];
        const width = vertices[1]['x'] - vertices[0]['x'];
        const height = vertices[2]['y'] - vertices[1]['y'];
        const areaInfo = { x: (x-(sw*2))*scale,
                           y: (y-(sw*2))*scale,
                           width: (width+(sw*4))*scale,
                           height: (height+(sw*4))*scale };

        ctx.fillText(`${count}`, x*scale, (y-(sw*8))*scale);
        ctx.strokeRect(areaInfo.x, areaInfo.y, areaInfo.width, areaInfo.height);
        areaInfo.result = result;
        areaInfo.count = count;
        areaInfoArr.push(areaInfo);

        count++;
      }
    }
  }

  canvasElement.addEventListener('click', e => {
    for (const areaInfo of areaInfoArr) {
      if ((areaInfo.x <= e.layerX && e.layerX <= areaInfo.x + areaInfo.width)
       && (areaInfo.y <= e.layerY && e.layerY <= areaInfo.y + areaInfo.height)) {
         console.log(areaInfo.result);
         resultValueSort.innerText = `[${areaInfo.count}번]`;
         resultValueNum.innerText = areaInfo.result;
         resultValuePronoun.innerText = areaInfo.result.split('').join(' ').replace(/\d/g, num => arabicPronoun[num]);
       }
    }
  });
}
