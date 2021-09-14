'use strict';

const toggleBtn = document.querySelector('.top-content__container--toggle');
const value = document.querySelector('.top-content__container--value');
const searchBtn = document.querySelector('.top-content__btn');
const result = document.querySelector('.bottom-content__result');
const arabicNum = '٠١٢٣٤٥٦٧٨٩';
let isToggle = false;

const activateToggleBtn = function() {
  toggleBtn.addEventListener('click', () => {
    isToggle = !isToggle;
    value.value = '';
    if (isToggle) {
      toggleBtn.innerHTML = '123<br />▲<br />١٢٣';
    } else {
      toggleBtn.innerHTML = '123<br />▼<br />١٢٣';
    }
  });
}

const activateSearchBtn = function() {
  searchBtn.addEventListener('click', () => {
    if (isToggle) {
      if (/^[٠-٩]+$/.test(value.value)) {
        result.innerText = value.value.replace(/[٠-٩]/g, num => arabicNum.indexOf(num));
      } else {
        window.alert('아랍 숫자를 입력해주세요.');
      }
    } else {
      if (/^\d+$/.test(value.value)) {
        result.innerText = value.value.replace(/\d/g, num => arabicNum[num]);
      } else {
        window.alert('일반 숫자를 입력해주세요.');
      }
    }
  });
}

window.addEventListener('load', function() {
  activateToggleBtn();
  activateSearchBtn();
});
