'use strict';

const assets = `${__dirname}/src/assets`;
const svg = `${assets}/svg`;

module.exports = {
  icons: {
    logoIcon: `${assets}/logo.svg`,
    homeIcon: `${svg}/home.svg`,
    reportIcon: `${svg}/archive.svg`,
    chartIcon: `${svg}/line-graph.svg`,
    cycleIcon: `${svg}/cycle.svg`,
    settingsIcon: `${svg}/cog.svg`,
    chevronDownIcon: `${svg}/chevron-small-down.svg`,
    circlePlusIcon: `${svg}/circle-with-plus.svg`,
    pinIcon: `${svg}/pin.svg`,
    linkIcon: `${svg}/link.svg`,
    crossIcon: `${svg}/cross.svg`,
    userIcon: `${svg}/user.svg`,
    lockIcon: `${svg}/lock.svg`,
    mailIcon: `${svg}/mail.svg`
  },
  fonts: {
    fontFamily: '"Roboto"'
  },
  colors: {
    firstColor: '#121231',
    secondColor: '#212141',
    thirdColor: '#3e3c5f',
    fontColor: '#fff',
    googleColor: '#44b759',
    yandexColor: '#fc0',
    confirmColor: '#44b759',
    cancelColor: '#ab0149',
    disabledColor: '#787878'
  },
  other: {
    cardSmWidth: '400px',
    cardSmMinWidth: '400px',
    cardMdWidth: '900px',
    cardMdMinWidth: '650px',
    cardLgWidth: '1350px',
    cardLgMinWidth: '850px',
    cardXlWidth: '1800px',
    cardXlMinWidth: '1100px'
  }
};
