'use strict';

const exchangeRate = {
  usdusd: 0, usdkrw: 1110.68, usdeur: 0.8219257, usdegp: 15.69056, usdsar: 3.750252, usdjod: 0.709, usdaed: 3.6731, usdqar: 3.641, usdmxn: 19.96425, usdlbp: 1527.5, usdomr: 0.3849982, krwusd: 0.00090034933, krwkrw: 0, krweur: 0.0007400202533, krwegp: 0.01412698518, krwsar: 0.003376536875, krwjod: 0.0006383476749, krwaed: 0.003307073124, krwqar: 0.00327817191, krwmxn: 0.01797479911, krwlbp: 1.375283601, krwomr: 0.0003466328714, eurusd: 1.216654, eurkrw: 1351.313264, eureur: 0, euregp: 19.08998258, eursar: 4.562759096, eurjod: 0.862607686, euraed: 4.468891807, eurqar: 4.429837214, eurmxn: 24.28958461, eurlbp: 1858.438985, euromr: 0.4684096, egpusd: 0.063732588, egpkrw: 70.78651083, egpeur: 0.052383452, egpegp: 0, egpsar: 0.2390132656, egpjod: 0.04518640489, egpaed: 0.2340961689, egpqar: 0.2320503529, egpmxn: 1.272373319, egplbp: 97.35152817, egpomr: 0.02453693166, sarusd: 0.26664874, sarkrw: 296.1614225, sareur: 0.2191654522, saregp: 4.183868053, sarsar: 0, sarjod: 0.1890539566, saraed: 0.9794274868, sarqar: 0.9708680623, sarmxn: 5.323442107, sarlbp: 407.3059503, saromr: 0.1026592849, jodusd: 1.410455, jodkrw: 1566.564159, jodeur: 1.159289213, jodegp: 22.1308288, jodsar: 5.289561684, jodjod: 0, jodaed: 5.18074226, jodqar: 5.135466655, jodmxn: 28.15867623, jodlbp: 2154.470012, jodomr: 0.5430226361, aedusd: 0.27224959, aedkrw: 302.3821857, aedeur: 0.223768943, aedegp: 4.271748683, aedsar: 1.021004606, aedjod: 0.1930249664, aedaed: 0, aedqar: 0.9912607936, aedmxn: 5.435259076, aedlbp: 415.861264, aedomr: 0.1048156021, qarusd: 0.2746498, qarkrw: 305.0480398, qareur: 0.2257417291, qaregp: 4.309409165, qarsar: 1.030005961, qarjod: 0.1947267082, qaraed: 1.00881618, qarqar: 0, qarmxn: 5.483177269, qarlbp: 419.5275695, qaromr: 0.1057396786, mxnusd: 0.050089535, mxnkrw: 55.63344473, mxneur: 0.04116987611, mxnegp: 0.7859328542, mxnsar: 0.1878483788, mxnjod: 0.03551348031, mxnaed: 0.183983871, mxnqar: 0.1823759969, mxnmxn: 0, mxnlbp: 76.51176471, mxnomr: 0.01928438081, lbpusd: 0.0006634897, lbpkrw: 0.7369247399, lbpeur: 0.0005453392361, lbpegp: 0.01041052494, lbpsar: 0.002488253574, lbpjod: 0.0004704141973, lbpaed: 0.002437064017, lbpqar: 0.002415765997, lbpmxn: 0.01324607424, lbplbp: 0, lbpomr: 0.0002554423402, omrusd: 2.597441, omrkrw: 2884.925769, omreur: 2.134903512, omregp: 40.75530385, omrsar: 9.741058305, omrjod: 1.841585669, omraed: 9.541, omrqar: 9.457282681, omrmxn: 51.85596148, omrlbp: 3967.591127, omromr: 0,
}

const stateContainer = document.querySelector('.top-content__container--state');
const stateImg = document.querySelector('.state__img');
const stateIso = document.querySelector('.state__iso');
const valueInput = document.querySelector('.value__input');
const valueIso = document.querySelector('.value__iso');
const searchBtn = document.querySelector('.top-content__btn');
const krw = document.querySelector('.value__result--krw');
const usd = document.querySelector('.value__result--usd');
const eur = document.querySelector('.value__result--eur');

const statePopup = document.querySelector('.state-container');
const states = document.querySelectorAll('.state');
const isoObj = { egp: 'EGYPT', sar: 'SAUDI ARABIA', aed: 'ARAB EMIRATES',
                 qar: 'QATAR', mxn: 'MOROCCO', lbp: 'LEBANON', omr: 'OMAN'};
const egp = document.querySelector('.state--egp');
const sar = document.querySelector('.state--sar');
const aed = document.querySelector('.state--aed');
const qar = document.querySelector('.state--qar');
const mxn = document.querySelector('.state--mxn');
const lbp = document.querySelector('.state--lbp');
const omr = document.querySelector('.state--omr');

const changeState = function() {
  stateContainer.addEventListener('click', () => {
    statePopup.classList.toggle('state-container--closed');
  });

  for (let state of states) {
    state.addEventListener('click', () => {
      let iso = state.classList[1].split('--')[1];
      stateImg.src = `/statics/images/app/${iso}.png`;
      stateIso.innerText = isoObj[iso];
      valueInput.value = '';
      valueIso.innerText = iso.toUpperCase();
      krw.innerText = '';
      usd.innerText = '';
      eur.innerText = '';
      statePopup.classList.add('state-container--closed');
    });
  }

}

const activateSearchBtn = function() {
  searchBtn.addEventListener('click', () => {
    statePopup.classList.add('state-container--closed');

    if (/^\d+$/.test(valueInput.value)) {
      let iso = valueIso.innerText.toLowerCase();
      krw.innerText = (valueInput.value * exchangeRate[iso+"krw"]).toFixed(2);
      usd.innerText = (valueInput.value * exchangeRate[iso+"usd"]).toFixed(2)
      eur.innerText = (valueInput.value * exchangeRate[iso+"eur"]).toFixed(2);
    } else {
      alert('올바른 숫자를 입력해주세요.')
    }
  });
}


window.addEventListener('load', function() {
  changeState();
  activateSearchBtn();

});
