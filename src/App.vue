<template>
  <div
    ref="el"
    :header-data="arrivedStateVal"
    class="app-inner relative overflow-y overflow-x-hidden"
  >
    <router-view></router-view>
    <div class="stars-wrapper">
      <svg class="stars" width="100%" height="100%" preserveAspectRatio="none">
        <circle class="star" cx="96.55%" cy="29.88%" r="1.1" />
        <circle class="star" cx="14.86%" cy="46.5%" r="1.2" />
        <circle class="star" cx="10.24%" cy="86.22%" r="0.6" />
        <circle class="star" cx="38.74%" cy="25.38%" r="1.3" />
        <circle class="star" cx="49.72%" cy="21.25%" r="1.4" />
        <circle class="star" cx="18.22%" cy="3.72%" r="1.3" />
        <circle class="star" cx="75.09%" cy="61.02%" r="0.7" />
        <circle class="star" cx="70.59%" cy="99.15%" r="1.2" />
        <circle class="star" cx="80.82%" cy="74.77%" r="0.6" />
        <circle class="star" cx="37.95%" cy="42.02%" r="0.9" />
        <circle class="star" cx="82.1%" cy="43.04%" r="1.5" />
        <circle class="star" cx="99.59%" cy="7.86%" r="1.1" />
        <circle class="star" cx="12.13%" cy="7.54%" r="0.8" />
        <circle class="star" cx="62.04%" cy="27.35%" r="1.5" />
        <circle class="star" cx="43.4%" cy="30.43%" r="1.1" />
        <circle class="star" cx="84.51%" cy="28.44%" r="0.6" />
        <circle class="star" cx="17.22%" cy="97.41%" r="0.5" />
        <circle class="star" cx="59.11%" cy="71.44%" r="1.2" />
        <circle class="star" cx="82.29%" cy="52.45%" r="0.8" />
        <circle class="star" cx="72.9%" cy="66.34%" r="1.3" />
        <circle class="star" cx="20.17%" cy="28.03%" r="1" />
        <circle class="star" cx="16.79%" cy="66.7%" r="1.2" />
        <circle class="star" cx="64.22%" cy="23.65%" r="0.7" />
        <circle class="star" cx="98.48%" cy="35.5%" r="1.2" />
        <circle class="star" cx="2.22%" cy="43.94%" r="0.9" />
        <circle class="star" cx="89.87%" cy="31.93%" r="1.1" />
        <circle class="star" cx="58.59%" cy="55.44%" r="0.9" />
        <circle class="star" cx="35.2%" cy="94.47%" r="1.2" />
        <circle class="star" cx="76.03%" cy="6.84%" r="0.6" />
        <circle class="star" cx="72.44%" cy="17.05%" r="1" />
        <circle class="star" cx="67.9%" cy="28.06%" r="1.3" />
        <circle class="star" cx="62.77%" cy="45.2%" r="0.9" />
        <circle class="star" cx="6.68%" cy="23.64%" r="1.4" />
        <circle class="star" cx="29.15%" cy="42.21%" r="1.4" />
        <circle class="star" cx="78.74%" cy="94.18%" r="0.9" />
        <circle class="star" cx="14.69%" cy="78.72%" r="1.1" />
        <circle class="star" cx="69.79%" cy="3.82%" r="0.7" />
        <circle class="star" cx="27.4%" cy="75.43%" r="1.3" />
        <circle class="star" cx="73.98%" cy="83.17%" r="0.6" />
        <circle class="star" cx="71.74%" cy="24.43%" r="0.9" />
        <circle class="star" cx="86.02%" cy="34.15%" r="0.7" />
        <circle class="star" cx="51.69%" cy="86.69%" r="0.6" />
        <circle class="star" cx="98.75%" cy="28.57%" r="1.1" />
        <circle class="star" cx="57.57%" cy="42.05%" r="1.5" />
        <circle class="star" cx="34.97%" cy="31.03%" r="1" />
        <circle class="star" cx="49.89%" cy="47.13%" r="0.9" />
        <circle class="star" cx="93.52%" cy="61.47%" r="1.4" />
        <circle class="star" cx="21.41%" cy="68.76%" r="1" />
        <circle class="star" cx="53.57%" cy="3.31%" r="0.7" />
        <circle class="star" cx="41.56%" cy="36.31%" r="0.6" />
        <circle class="star" cx="51.6%" cy="29.95%" r="1.4" />
        <circle class="star" cx="22.86%" cy="32.49%" r="0.7" />
        <circle class="star" cx="17.34%" cy="62.52%" r="1.3" />
        <circle class="star" cx="11.74%" cy="7.98%" r="1.3" />
        <circle class="star" cx="6.38%" cy="30%" r="0.6" />
        <circle class="star" cx="83.96%" cy="68.23%" r="1.4" />
        <circle class="star" cx="80.96%" cy="53.84%" r="0.9" />
        <circle class="star" cx="72.38%" cy="53.01%" r="0.8" />
        <circle class="star" cx="53.83%" cy="60.78%" r="0.6" />
        <circle class="star" cx="85.62%" cy="53.55%" r="1.4" />
        <circle class="star" cx="25.59%" cy="68.74%" r="0.9" />
        <circle class="star" cx="69.72%" cy="28.88%" r="1.2" />
        <circle class="star" cx="15.99%" cy="59.54%" r="0.8" />
        <circle class="star" cx="29.6%" cy="64.06%" r="1.5" />
        <circle class="star" cx="98.96%" cy="79.18%" r="0.7" />
        <circle class="star" cx="58.69%" cy="76.74%" r="0.7" />
        <circle class="star" cx="26.91%" cy="46.09%" r="1.3" />
        <circle class="star" cx="53.27%" cy="40.93%" r="1.4" />
        <circle class="star" cx="13.45%" cy="89.91%" r="0.5" />
        <circle class="star" cx="68.13%" cy="14.35%" r="1.1" />
        <circle class="star" cx="90.48%" cy="9.18%" r="0.9" />
        <circle class="star" cx="32.97%" cy="38.25%" r="0.8" />
        <circle class="star" cx="77.04%" cy="47.92%" r="1.1" />
        <circle class="star" cx="39.69%" cy="98.58%" r="0.6" />
        <circle class="star" cx="19.86%" cy="36.07%" r="1.1" />
        <circle class="star" cx="99.5%" cy="76.01%" r="1.4" />
        <circle class="star" cx="82.76%" cy="75.21%" r="1.2" />
        <circle class="star" cx="7.57%" cy="29.03%" r="1.2" />
        <circle class="star" cx="80.92%" cy="93.78%" r="0.8" />
        <circle class="star" cx="96.54%" cy="66.3%" r="0.7" />
        <circle class="star" cx="14.9%" cy="65.23%" r="1.3" />
        <circle class="star" cx="64.65%" cy="14.44%" r="0.5" />
        <circle class="star" cx="64.71%" cy="90.64%" r="0.6" />
        <circle class="star" cx="67.63%" cy="63.98%" r="0.8" />
        <circle class="star" cx="95.24%" cy="3.12%" r="1" />
        <circle class="star" cx="80.03%" cy="22.09%" r="0.9" />
        <circle class="star" cx="17.5%" cy="80.04%" r="0.9" />
        <circle class="star" cx="53.14%" cy="31.46%" r="0.9" />
        <circle class="star" cx="53.89%" cy="56.9%" r="1.3" />
        <circle class="star" cx="66.54%" cy="82.63%" r="1" />
        <circle class="star" cx="44.68%" cy="58.59%" r="0.8" />
        <circle class="star" cx="53.23%" cy="0.84%" r="0.8" />
        <circle class="star" cx="57.77%" cy="56.66%" r="0.8" />
        <circle class="star" cx="31.85%" cy="19.54%" r="0.8" />
        <circle class="star" cx="3.82%" cy="73.54%" r="0.7" />
        <circle class="star" cx="84.83%" cy="90.06%" r="1.1" />
        <circle class="star" cx="34.11%" cy="79.41%" r="1.4" />
        <circle class="star" cx="39.51%" cy="38.2%" r="0.8" />
        <circle class="star" cx="40.28%" cy="9.16%" r="0.5" />
        <circle class="star" cx="86.4%" cy="13.05%" r="0.9" />
        <circle class="star" cx="68.11%" cy="38.04%" r="1" />
        <circle class="star" cx="70.55%" cy="42.82%" r="1.3" />
        <circle class="star" cx="63.06%" cy="47.35%" r="1.2" />
        <circle class="star" cx="56.52%" cy="14.27%" r="1.1" />
        <circle class="star" cx="78.81%" cy="55.47%" r="0.7" />
        <circle class="star" cx="58.57%" cy="80.2%" r="0.8" />
        <circle class="star" cx="66.77%" cy="8.21%" r="1.4" />
        <circle class="star" cx="67.21%" cy="39.27%" r="0.6" />
        <circle class="star" cx="8.68%" cy="91%" r="0.6" />
        <circle class="star" cx="63.17%" cy="69.59%" r="0.7" />
        <circle class="star" cx="3.4%" cy="83.99%" r="1.4" />
        <circle class="star" cx="32.14%" cy="97.75%" r="1.3" />
        <circle class="star" cx="78.33%" cy="21.94%" r="0.7" />
        <circle class="star" cx="96.69%" cy="94.65%" r="1.4" />
        <circle class="star" cx="20.17%" cy="70.63%" r="1" />
        <circle class="star" cx="82.43%" cy="42.74%" r="1.3" />
        <circle class="star" cx="80.1%" cy="54.17%" r="1.4" />
        <circle class="star" cx="36.91%" cy="8.2%" r="1.3" />
        <circle class="star" cx="40.97%" cy="31.58%" r="1.2" />
        <circle class="star" cx="90.62%" cy="44.18%" r="0.6" />
        <circle class="star" cx="3.77%" cy="74.91%" r="1.2" />
        <circle class="star" cx="69.1%" cy="80.56%" r="0.7" />
        <circle class="star" cx="19.67%" cy="75.15%" r="1" />
        <circle class="star" cx="52.83%" cy="87.8%" r="0.8" />
        <circle class="star" cx="95.06%" cy="50.14%" r="0.7" />
        <circle class="star" cx="51.79%" cy="13.12%" r="0.9" />
        <circle class="star" cx="21.24%" cy="54.58%" r="0.8" />
        <circle class="star" cx="82.66%" cy="43.57%" r="1.1" />
        <circle class="star" cx="53.54%" cy="30.53%" r="0.9" />
        <circle class="star" cx="52.22%" cy="0.6%" r="0.6" />
        <circle class="star" cx="3.37%" cy="11.35%" r="1.2" />
        <circle class="star" cx="46.19%" cy="9.64%" r="0.6" />
        <circle class="star" cx="28.01%" cy="91.22%" r="1.2" />
        <circle class="star" cx="47.17%" cy="99.96%" r="0.8" />
        <circle class="star" cx="61.11%" cy="2.54%" r="0.9" />
        <circle class="star" cx="74.71%" cy="95.98%" r="0.8" />
        <circle class="star" cx="58.58%" cy="45.26%" r="0.7" />
        <circle class="star" cx="70.27%" cy="99.17%" r="0.7" />
        <circle class="star" cx="72.82%" cy="22.9%" r="1" />
        <circle class="star" cx="50.34%" cy="46.24%" r="0.7" />
        <circle class="star" cx="76.77%" cy="43.98%" r="0.8" />
        <circle class="star" cx="29.32%" cy="18.05%" r="1.1" />
        <circle class="star" cx="60.48%" cy="12.12%" r="1.2" />
        <circle class="star" cx="59.42%" cy="96.72%" r="1.4" />
        <circle class="star" cx="18.5%" cy="95.09%" r="1.1" />
        <circle class="star" cx="93.46%" cy="91.33%" r="1.2" />
        <circle class="star" cx="22.6%" cy="27.94%" r="0.6" />
        <circle class="star" cx="95.06%" cy="18.4%" r="1.4" />
        <circle class="star" cx="12.68%" cy="4.86%" r="1" />
        <circle class="star" cx="50.27%" cy="48.41%" r="0.7" />
        <circle class="star" cx="91.2%" cy="34.98%" r="0.5" />
        <circle class="star" cx="98.25%" cy="40.63%" r="0.8" />
        <circle class="star" cx="75.54%" cy="74.54%" r="1.5" />
        <circle class="star" cx="46.45%" cy="12.74%" r="0.9" />
        <circle class="star" cx="51.22%" cy="17.94%" r="0.6" />
        <circle class="star" cx="5.24%" cy="82.42%" r="0.6" />
        <circle class="star" cx="19.54%" cy="51.96%" r="1.3" />
        <circle class="star" cx="53.41%" cy="86.14%" r="0.7" />
        <circle class="star" cx="11.83%" cy="79.92%" r="0.6" />
        <circle class="star" cx="86%" cy="90.4%" r="0.5" />
        <circle class="star" cx="96.1%" cy="77%" r="1.5" />
        <circle class="star" cx="25.36%" cy="69.74%" r="1.2" />
        <circle class="star" cx="99.63%" cy="38.8%" r="1.1" />
        <circle class="star" cx="95.64%" cy="44.43%" r="0.6" />
        <circle class="star" cx="26.71%" cy="87.24%" r="0.9" />
        <circle class="star" cx="82.75%" cy="57.5%" r="0.7" />
        <circle class="star" cx="25.34%" cy="99.81%" r="0.9" />
        <circle class="star" cx="95.66%" cy="60.32%" r="1.3" />
        <circle class="star" cx="70.28%" cy="0.9%" r="0.9" />
        <circle class="star" cx="57.75%" cy="53.14%" r="1.4" />
        <circle class="star" cx="33.59%" cy="16.65%" r="1" />
        <circle class="star" cx="87.45%" cy="12.02%" r="1" />
        <circle class="star" cx="5.8%" cy="68.11%" r="0.5" />
        <circle class="star" cx="15.09%" cy="46.08%" r="1.2" />
        <circle class="star" cx="68.04%" cy="18.79%" r="1.3" />
        <circle class="star" cx="35.66%" cy="9.36%" r="1" />
        <circle class="star" cx="6.4%" cy="77.4%" r="1.5" />
        <circle class="star" cx="81.72%" cy="1.91%" r="0.9" />
        <circle class="star" cx="88.21%" cy="1.24%" r="0.9" />
        <circle class="star" cx="52.43%" cy="91.81%" r="0.7" />
        <circle class="star" cx="94.01%" cy="65.21%" r="1.1" />
        <circle class="star" cx="31.97%" cy="0.85%" r="1.1" />
        <circle class="star" cx="45.34%" cy="36.44%" r="1.3" />
        <circle class="star" cx="46.21%" cy="51.38%" r="1.2" />
        <circle class="star" cx="80.11%" cy="27.06%" r="1" />
        <circle class="star" cx="85.3%" cy="11.09%" r="0.9" />
        <circle class="star" cx="61.33%" cy="72.23%" r="0.6" />
        <circle class="star" cx="75.33%" cy="85.57%" r="0.9" />
        <circle class="star" cx="51%" cy="96.09%" r="0.8" />
        <circle class="star" cx="83.45%" cy="34.55%" r="0.7" />
        <circle class="star" cx="76.2%" cy="70.81%" r="1.1" />
        <circle class="star" cx="59.93%" cy="67.19%" r="1.3" />
        <circle class="star" cx="73.92%" cy="68.69%" r="0.7" />
        <circle class="star" cx="87.03%" cy="78.17%" r="1" />
        <circle class="star" cx="50.1%" cy="19.89%" r="0.9" />
        <circle class="star" cx="6.43%" cy="26.21%" r="0.7" />
        <circle class="star" cx="67.26%" cy="82.43%" r="0.6" />
        <circle class="star" cx="99.58%" cy="31.8%" r="1.5" />
        <circle class="star" cx="86.62%" cy="33.93%" r="1" />
        <circle class="star" cx="99.19%" cy="15.45%" r="0.9" />
      </svg>
      <svg class="stars" width="100%" height="100%" preserveAspectRatio="none">
        <circle class="star" cx="22.33%" cy="53.11%" r="1.2" />
        <circle class="star" cx="27.26%" cy="6.19%" r="1.5" />
        <circle class="star" cx="73.95%" cy="84.53%" r="1.3" />
        <circle class="star" cx="78.15%" cy="19.27%" r="1.2" />
        <circle class="star" cx="17.22%" cy="91.8%" r="0.7" />
        <circle class="star" cx="86.01%" cy="27.81%" r="0.6" />
        <circle class="star" cx="3.92%" cy="6.57%" r="0.7" />
        <circle class="star" cx="5.57%" cy="39.73%" r="1.2" />
        <circle class="star" cx="22.22%" cy="18.28%" r="1" />
        <circle class="star" cx="27.72%" cy="96.63%" r="0.9" />
        <circle class="star" cx="6.5%" cy="79.76%" r="0.7" />
        <circle class="star" cx="46.93%" cy="80.89%" r="0.5" />
        <circle class="star" cx="78.56%" cy="2.25%" r="0.8" />
        <circle class="star" cx="8.05%" cy="93.96%" r="0.6" />
        <circle class="star" cx="41.31%" cy="72.98%" r="0.9" />
        <circle class="star" cx="98.25%" cy="3.31%" r="1.2" />
        <circle class="star" cx="75.11%" cy="22.81%" r="1.2" />
        <circle class="star" cx="43.23%" cy="90.09%" r="1.2" />
        <circle class="star" cx="41.69%" cy="61.22%" r="0.6" />
        <circle class="star" cx="90.55%" cy="48.59%" r="0.7" />
        <circle class="star" cx="45.09%" cy="51.82%" r="1.4" />
        <circle class="star" cx="14.11%" cy="34.63%" r="0.6" />
        <circle class="star" cx="87.16%" cy="41.36%" r="0.6" />
        <circle class="star" cx="72.83%" cy="51.3%" r="0.6" />
        <circle class="star" cx="85.21%" cy="87.84%" r="1" />
        <circle class="star" cx="60.88%" cy="56.88%" r="0.6" />
        <circle class="star" cx="87.54%" cy="14.69%" r="1" />
        <circle class="star" cx="85.7%" cy="96.07%" r="1" />
        <circle class="star" cx="25.23%" cy="50.9%" r="0.6" />
        <circle class="star" cx="45.86%" cy="27.57%" r="1.2" />
        <circle class="star" cx="62.01%" cy="59.81%" r="1" />
        <circle class="star" cx="4.59%" cy="91.31%" r="1.1" />
        <circle class="star" cx="94.9%" cy="77.32%" r="1.2" />
        <circle class="star" cx="97.93%" cy="22.26%" r="1" />
        <circle class="star" cx="8.5%" cy="11.54%" r="0.9" />
        <circle class="star" cx="14.11%" cy="33.65%" r="1.5" />
        <circle class="star" cx="56.38%" cy="88.82%" r="0.8" />
        <circle class="star" cx="93.18%" cy="94.27%" r="0.6" />
        <circle class="star" cx="69.06%" cy="54.16%" r="0.9" />
        <circle class="star" cx="91.87%" cy="75.06%" r="0.7" />
        <circle class="star" cx="18.61%" cy="35.53%" r="0.6" />
        <circle class="star" cx="12.07%" cy="28.31%" r="0.9" />
        <circle class="star" cx="29.1%" cy="67.22%" r="0.9" />
        <circle class="star" cx="78.99%" cy="20.53%" r="0.7" />
        <circle class="star" cx="62.45%" cy="94.62%" r="1.3" />
        <circle class="star" cx="50.62%" cy="12.89%" r="1.4" />
        <circle class="star" cx="29.32%" cy="34.94%" r="0.7" />
        <circle class="star" cx="45.41%" cy="45.35%" r="1.3" />
        <circle class="star" cx="95.02%" cy="20.39%" r="0.9" />
        <circle class="star" cx="11.74%" cy="87%" r="1" />
        <circle class="star" cx="99.09%" cy="70.82%" r="0.7" />
        <circle class="star" cx="100%" cy="6.07%" r="1.2" />
        <circle class="star" cx="50.57%" cy="6.38%" r="1.2" />
        <circle class="star" cx="1.42%" cy="31.46%" r="0.6" />
        <circle class="star" cx="12.07%" cy="96.41%" r="0.9" />
        <circle class="star" cx="4.77%" cy="76.96%" r="1.4" />
        <circle class="star" cx="3.17%" cy="94.6%" r="0.6" />
        <circle class="star" cx="43.8%" cy="2.8%" r="0.6" />
        <circle class="star" cx="50.85%" cy="97.34%" r="1.3" />
        <circle class="star" cx="31.02%" cy="2.87%" r="1.4" />
        <circle class="star" cx="26.61%" cy="49.91%" r="1.4" />
        <circle class="star" cx="44.9%" cy="62.85%" r="1.5" />
        <circle class="star" cx="18.75%" cy="93.8%" r="0.9" />
        <circle class="star" cx="69.92%" cy="61.98%" r="1.1" />
        <circle class="star" cx="74.78%" cy="36.14%" r="1" />
        <circle class="star" cx="65.1%" cy="23.45%" r="1.2" />
        <circle class="star" cx="62.84%" cy="55.31%" r="1.1" />
        <circle class="star" cx="5.17%" cy="66.48%" r="1.5" />
        <circle class="star" cx="1.79%" cy="43.38%" r="0.7" />
        <circle class="star" cx="63.66%" cy="1.99%" r="0.9" />
        <circle class="star" cx="48.79%" cy="70.39%" r="1" />
        <circle class="star" cx="87.93%" cy="40.97%" r="1.1" />
        <circle class="star" cx="66.4%" cy="73.99%" r="0.5" />
        <circle class="star" cx="27.91%" cy="43.59%" r="1" />
        <circle class="star" cx="81.52%" cy="70.69%" r="1" />
        <circle class="star" cx="87.9%" cy="98.16%" r="0.5" />
        <circle class="star" cx="85.62%" cy="57.59%" r="1.4" />
        <circle class="star" cx="35.64%" cy="93.53%" r="1.2" />
        <circle class="star" cx="34.34%" cy="71.8%" r="0.6" />
        <circle class="star" cx="34.84%" cy="55.36%" r="0.5" />
        <circle class="star" cx="84.15%" cy="26.17%" r="1.3" />
        <circle class="star" cx="82.26%" cy="5.83%" r="1.4" />
        <circle class="star" cx="31.17%" cy="89.34%" r="1.1" />
        <circle class="star" cx="35.33%" cy="74.23%" r="0.9" />
        <circle class="star" cx="57.54%" cy="96.05%" r="0.8" />
        <circle class="star" cx="59.56%" cy="97.89%" r="0.5" />
        <circle class="star" cx="7.21%" cy="24.86%" r="0.9" />
        <circle class="star" cx="17.19%" cy="4.62%" r="1.4" />
        <circle class="star" cx="66.58%" cy="70.46%" r="0.9" />
        <circle class="star" cx="15.71%" cy="17.57%" r="1" />
        <circle class="star" cx="79.17%" cy="30.47%" r="1.3" />
        <circle class="star" cx="11.04%" cy="34.44%" r="0.5" />
        <circle class="star" cx="27.39%" cy="41.22%" r="1.2" />
        <circle class="star" cx="15.46%" cy="18.29%" r="0.5" />
        <circle class="star" cx="55.69%" cy="77.22%" r="0.7" />
        <circle class="star" cx="51.11%" cy="49.46%" r="0.6" />
        <circle class="star" cx="77.41%" cy="49.22%" r="1.4" />
        <circle class="star" cx="70.56%" cy="40.02%" r="1" />
        <circle class="star" cx="18.93%" cy="96.95%" r="1.1" />
        <circle class="star" cx="5.28%" cy="33%" r="0.7" />
        <circle class="star" cx="72.81%" cy="35.36%" r="0.8" />
        <circle class="star" cx="4.83%" cy="82.82%" r="1.3" />
        <circle class="star" cx="17.08%" cy="83.89%" r="0.6" />
        <circle class="star" cx="36.23%" cy="24.3%" r="0.6" />
        <circle class="star" cx="36.74%" cy="67.78%" r="0.9" />
        <circle class="star" cx="50.31%" cy="55.71%" r="0.8" />
        <circle class="star" cx="96.95%" cy="58.57%" r="0.8" />
        <circle class="star" cx="36.2%" cy="90.72%" r="0.8" />
        <circle class="star" cx="3.19%" cy="35.35%" r="1.2" />
        <circle class="star" cx="45.45%" cy="68.8%" r="0.7" />
        <circle class="star" cx="44.39%" cy="8.27%" r="1" />
        <circle class="star" cx="84.1%" cy="65.91%" r="0.5" />
        <circle class="star" cx="48.95%" cy="97.92%" r="1.2" />
        <circle class="star" cx="56.4%" cy="12.07%" r="0.7" />
        <circle class="star" cx="59.44%" cy="45.64%" r="1" />
        <circle class="star" cx="65.51%" cy="55.19%" r="1.4" />
        <circle class="star" cx="21.77%" cy="31.16%" r="1.1" />
        <circle class="star" cx="60.57%" cy="67.21%" r="1.3" />
        <circle class="star" cx="36.65%" cy="5.46%" r="1" />
        <circle class="star" cx="79.96%" cy="65.66%" r="1.5" />
        <circle class="star" cx="64.94%" cy="27.45%" r="1.3" />
        <circle class="star" cx="74.78%" cy="25.66%" r="1.2" />
        <circle class="star" cx="1.16%" cy="72.4%" r="0.6" />
        <circle class="star" cx="57.61%" cy="93.41%" r="0.8" />
        <circle class="star" cx="60.35%" cy="29.6%" r="1.4" />
        <circle class="star" cx="98.31%" cy="61.29%" r="0.6" />
        <circle class="star" cx="41.17%" cy="15.03%" r="0.8" />
        <circle class="star" cx="86.42%" cy="19.95%" r="0.9" />
        <circle class="star" cx="61.17%" cy="12.81%" r="1.4" />
        <circle class="star" cx="60.04%" cy="67.45%" r="0.8" />
        <circle class="star" cx="10.28%" cy="1.5%" r="0.6" />
        <circle class="star" cx="52.34%" cy="57.19%" r="1" />
        <circle class="star" cx="25%" cy="94.24%" r="0.6" />
        <circle class="star" cx="38.66%" cy="5.77%" r="1.3" />
        <circle class="star" cx="50.96%" cy="23.79%" r="0.9" />
        <circle class="star" cx="88.09%" cy="85.23%" r="1.1" />
        <circle class="star" cx="12.76%" cy="41.01%" r="1.2" />
        <circle class="star" cx="11.89%" cy="13.02%" r="0.5" />
        <circle class="star" cx="36.89%" cy="63.5%" r="1.2" />
        <circle class="star" cx="87.65%" cy="26.86%" r="1.3" />
        <circle class="star" cx="28.9%" cy="39.61%" r="0.8" />
        <circle class="star" cx="41.9%" cy="21.55%" r="1.4" />
        <circle class="star" cx="82.56%" cy="13.59%" r="1.2" />
        <circle class="star" cx="88.29%" cy="31.95%" r="0.9" />
        <circle class="star" cx="14.67%" cy="53.4%" r="1.2" />
        <circle class="star" cx="42.16%" cy="0.31%" r="0.7" />
        <circle class="star" cx="55.94%" cy="13.99%" r="0.5" />
        <circle class="star" cx="23.5%" cy="95.78%" r="1.2" />
        <circle class="star" cx="73.82%" cy="62.19%" r="1.1" />
        <circle class="star" cx="71.41%" cy="94.92%" r="0.7" />
        <circle class="star" cx="22.41%" cy="18.82%" r="0.9" />
        <circle class="star" cx="22.45%" cy="84.82%" r="1.2" />
        <circle class="star" cx="88.15%" cy="86.26%" r="1.3" />
        <circle class="star" cx="49.01%" cy="89.99%" r="1.3" />
        <circle class="star" cx="60%" cy="56.81%" r="1" />
        <circle class="star" cx="64.01%" cy="41.65%" r="0.7" />
        <circle class="star" cx="14.37%" cy="78.16%" r="0.8" />
        <circle class="star" cx="43.52%" cy="97.06%" r="1.1" />
        <circle class="star" cx="57.8%" cy="80.02%" r="0.8" />
        <circle class="star" cx="49.79%" cy="27.31%" r="1.2" />
        <circle class="star" cx="34.75%" cy="65.24%" r="1.4" />
        <circle class="star" cx="81.91%" cy="19.38%" r="1.3" />
        <circle class="star" cx="42.93%" cy="4.5%" r="1.2" />
        <circle class="star" cx="7.32%" cy="84.05%" r="0.8" />
        <circle class="star" cx="68.57%" cy="17.92%" r="1.4" />
        <circle class="star" cx="3.39%" cy="31.85%" r="1.1" />
        <circle class="star" cx="72.28%" cy="93.42%" r="0.7" />
        <circle class="star" cx="61.28%" cy="23.81%" r="1.2" />
        <circle class="star" cx="12.03%" cy="9.27%" r="0.5" />
        <circle class="star" cx="68.86%" cy="4.16%" r="1.4" />
        <circle class="star" cx="16.05%" cy="35.94%" r="1.3" />
        <circle class="star" cx="14.16%" cy="76.89%" r="1.5" />
        <circle class="star" cx="1.06%" cy="48.16%" r="1.3" />
        <circle class="star" cx="51.48%" cy="97.96%" r="0.7" />
        <circle class="star" cx="2.17%" cy="31.87%" r="1" />
        <circle class="star" cx="30.58%" cy="44.06%" r="0.9" />
        <circle class="star" cx="26.59%" cy="28.8%" r="0.9" />
        <circle class="star" cx="61.61%" cy="76.83%" r="1" />
        <circle class="star" cx="92.18%" cy="96.28%" r="0.8" />
        <circle class="star" cx="29.22%" cy="25.44%" r="1" />
        <circle class="star" cx="89.58%" cy="3.1%" r="1.4" />
        <circle class="star" cx="89.15%" cy="70.33%" r="0.8" />
        <circle class="star" cx="21.39%" cy="43.71%" r="0.6" />
        <circle class="star" cx="35.88%" cy="4.25%" r="0.8" />
        <circle class="star" cx="5.03%" cy="67.75%" r="1" />
        <circle class="star" cx="77.07%" cy="36.81%" r="1.2" />
        <circle class="star" cx="13.28%" cy="47.81%" r="1.2" />
        <circle class="star" cx="5.43%" cy="73.23%" r="1.2" />
        <circle class="star" cx="67.92%" cy="56.05%" r="0.8" />
        <circle class="star" cx="43.44%" cy="47.66%" r="1" />
        <circle class="star" cx="31.29%" cy="3.14%" r="0.7" />
        <circle class="star" cx="69.17%" cy="11.58%" r="1" />
        <circle class="star" cx="5.7%" cy="14.96%" r="1.1" />
        <circle class="star" cx="18.91%" cy="87.53%" r="1.2" />
        <circle class="star" cx="55.11%" cy="1.22%" r="0.7" />
        <circle class="star" cx="3.61%" cy="54.76%" r="1.5" />
        <circle class="star" cx="27.2%" cy="1.53%" r="1.3" />
        <circle class="star" cx="22.38%" cy="46.74%" r="0.5" />
        <circle class="star" cx="14.51%" cy="18.83%" r="1.1" />
        <circle class="star" cx="64.76%" cy="77.87%" r="1.1" />
      </svg>
      <svg class="stars" width="100%" height="100%" preserveAspectRatio="none">
        <circle class="star" cx="46.76%" cy="39.36%" r="1.2" />
        <circle class="star" cx="33.28%" cy="87.66%" r="0.9" />
        <circle class="star" cx="87.22%" cy="71.34%" r="0.5" />
        <circle class="star" cx="92.7%" cy="28.08%" r="0.6" />
        <circle class="star" cx="3.27%" cy="57.95%" r="0.8" />
        <circle class="star" cx="23.4%" cy="89.87%" r="1.5" />
        <circle class="star" cx="97.93%" cy="10.44%" r="0.6" />
        <circle class="star" cx="95.65%" cy="61.28%" r="0.6" />
        <circle class="star" cx="17.91%" cy="66.83%" r="1.4" />
        <circle class="star" cx="40.28%" cy="39.92%" r="1.4" />
        <circle class="star" cx="97.73%" cy="31.58%" r="1.5" />
        <circle class="star" cx="73.32%" cy="31.83%" r="0.6" />
        <circle class="star" cx="43.02%" cy="25.31%" r="1" />
        <circle class="star" cx="82.2%" cy="59.96%" r="0.6" />
        <circle class="star" cx="16.21%" cy="82.94%" r="0.5" />
        <circle class="star" cx="18.99%" cy="25.29%" r="1" />
        <circle class="star" cx="85.48%" cy="51.94%" r="1.2" />
        <circle class="star" cx="72.54%" cy="73.71%" r="0.6" />
        <circle class="star" cx="26.29%" cy="98.59%" r="0.8" />
        <circle class="star" cx="32.92%" cy="73.97%" r="0.8" />
        <circle class="star" cx="5.16%" cy="77.45%" r="0.7" />
        <circle class="star" cx="43.15%" cy="53.05%" r="1.4" />
        <circle class="star" cx="1.98%" cy="96.28%" r="0.9" />
        <circle class="star" cx="91.21%" cy="9.76%" r="0.9" />
        <circle class="star" cx="1.22%" cy="21.93%" r="1.1" />
        <circle class="star" cx="87.09%" cy="12.41%" r="1.2" />
        <circle class="star" cx="54.05%" cy="11.86%" r="1.1" />
        <circle class="star" cx="64.46%" cy="60.86%" r="1.2" />
        <circle class="star" cx="64.44%" cy="67.73%" r="0.7" />
        <circle class="star" cx="95.36%" cy="94.91%" r="0.8" />
        <circle class="star" cx="2.88%" cy="64.93%" r="1.2" />
        <circle class="star" cx="77.61%" cy="41.11%" r="1" />
        <circle class="star" cx="90.25%" cy="92.97%" r="0.6" />
        <circle class="star" cx="37.73%" cy="72.38%" r="0.7" />
        <circle class="star" cx="63.99%" cy="96.2%" r="1" />
        <circle class="star" cx="36.85%" cy="82.21%" r="0.8" />
        <circle class="star" cx="10.81%" cy="57.57%" r="1" />
        <circle class="star" cx="71.22%" cy="78.07%" r="1" />
        <circle class="star" cx="93.47%" cy="50.89%" r="1.2" />
        <circle class="star" cx="96.07%" cy="11.27%" r="1.3" />
        <circle class="star" cx="69.16%" cy="48.86%" r="0.9" />
        <circle class="star" cx="48.24%" cy="57.58%" r="1.4" />
        <circle class="star" cx="40.43%" cy="56.61%" r="1.3" />
        <circle class="star" cx="34.64%" cy="17.98%" r="1.4" />
        <circle class="star" cx="52.76%" cy="0.42%" r="0.9" />
        <circle class="star" cx="73.48%" cy="88.74%" r="1.1" />
        <circle class="star" cx="25.17%" cy="62.57%" r="0.9" />
        <circle class="star" cx="13.72%" cy="99.55%" r="0.8" />
        <circle class="star" cx="44.98%" cy="33.18%" r="1.5" />
        <circle class="star" cx="26.64%" cy="24.68%" r="0.7" />
        <circle class="star" cx="63.24%" cy="82.99%" r="0.8" />
        <circle class="star" cx="28.78%" cy="50.16%" r="0.8" />
        <circle class="star" cx="62.2%" cy="25.69%" r="0.7" />
        <circle class="star" cx="19.27%" cy="28%" r="1.5" />
        <circle class="star" cx="70.73%" cy="72.59%" r="0.9" />
        <circle class="star" cx="83.94%" cy="10.75%" r="1.3" />
        <circle class="star" cx="21.11%" cy="42.33%" r="0.6" />
        <circle class="star" cx="76.86%" cy="89.95%" r="1.1" />
        <circle class="star" cx="11.7%" cy="36.39%" r="0.9" />
        <circle class="star" cx="20.73%" cy="4.45%" r="1.5" />
        <circle class="star" cx="98.37%" cy="46.82%" r="1.1" />
        <circle class="star" cx="66.73%" cy="22.55%" r="0.9" />
        <circle class="star" cx="33.45%" cy="44.56%" r="0.8" />
        <circle class="star" cx="86.12%" cy="55.99%" r="1.1" />
        <circle class="star" cx="76.2%" cy="25%" r="0.8" />
        <circle class="star" cx="59.3%" cy="87.9%" r="1.1" />
        <circle class="star" cx="27.07%" cy="51.76%" r="0.7" />
        <circle class="star" cx="16.68%" cy="23.87%" r="1.2" />
        <circle class="star" cx="4.16%" cy="59.39%" r="0.6" />
        <circle class="star" cx="27.95%" cy="70.49%" r="0.8" />
        <circle class="star" cx="61.09%" cy="4.59%" r="0.6" />
        <circle class="star" cx="36.19%" cy="63.76%" r="1.1" />
        <circle class="star" cx="75.09%" cy="50.92%" r="0.9" />
        <circle class="star" cx="27.99%" cy="26.42%" r="1.3" />
        <circle class="star" cx="81.28%" cy="31.59%" r="1.2" />
        <circle class="star" cx="83.27%" cy="5.15%" r="1.2" />
        <circle class="star" cx="72.98%" cy="35.93%" r="0.5" />
        <circle class="star" cx="18.63%" cy="55.13%" r="0.8" />
        <circle class="star" cx="0.67%" cy="13.57%" r="1.5" />
        <circle class="star" cx="33.98%" cy="91.59%" r="1.2" />
        <circle class="star" cx="11.53%" cy="39.75%" r="0.8" />
        <circle class="star" cx="37.28%" cy="41.13%" r="1.5" />
        <circle class="star" cx="7.98%" cy="31.28%" r="1.2" />
        <circle class="star" cx="25.47%" cy="5.75%" r="0.5" />
        <circle class="star" cx="54.68%" cy="84.08%" r="0.6" />
        <circle class="star" cx="13.93%" cy="55.88%" r="1.3" />
        <circle class="star" cx="50.86%" cy="51.89%" r="1.1" />
        <circle class="star" cx="48.43%" cy="91.25%" r="1.1" />
        <circle class="star" cx="15.54%" cy="46.27%" r="1.4" />
        <circle class="star" cx="56.64%" cy="29.88%" r="0.6" />
        <circle class="star" cx="90.77%" cy="79.05%" r="1.4" />
        <circle class="star" cx="95.79%" cy="71.34%" r="1.2" />
        <circle class="star" cx="92.05%" cy="81.96%" r="1" />
        <circle class="star" cx="52.04%" cy="49.58%" r="1.4" />
        <circle class="star" cx="43.48%" cy="80.67%" r="1.3" />
        <circle class="star" cx="74.56%" cy="88.38%" r="0.7" />
        <circle class="star" cx="2.86%" cy="10.41%" r="1.4" />
        <circle class="star" cx="28.83%" cy="57.95%" r="0.7" />
        <circle class="star" cx="44.96%" cy="27.05%" r="0.8" />
        <circle class="star" cx="54.57%" cy="36.14%" r="0.9" />
        <circle class="star" cx="55.38%" cy="32.67%" r="0.5" />
        <circle class="star" cx="26.47%" cy="61.65%" r="0.5" />
        <circle class="star" cx="73.85%" cy="59.02%" r="0.7" />
        <circle class="star" cx="93.94%" cy="3.86%" r="1.1" />
        <circle class="star" cx="44.48%" cy="32.78%" r="1.3" />
        <circle class="star" cx="73.66%" cy="99.39%" r="1.3" />
        <circle class="star" cx="83.29%" cy="10.34%" r="0.7" />
        <circle class="star" cx="70.46%" cy="27.85%" r="0.9" />
        <circle class="star" cx="58.16%" cy="92.05%" r="1.1" />
        <circle class="star" cx="61.39%" cy="99.76%" r="1.1" />
        <circle class="star" cx="36.91%" cy="16.39%" r="1.3" />
        <circle class="star" cx="66.12%" cy="43.05%" r="0.8" />
        <circle class="star" cx="10.65%" cy="39.13%" r="0.5" />
        <circle class="star" cx="54.39%" cy="28.76%" r="1.5" />
        <circle class="star" cx="74.83%" cy="11.15%" r="1.5" />
        <circle class="star" cx="72.73%" cy="5.94%" r="1.2" />
        <circle class="star" cx="26.27%" cy="99.16%" r="1.4" />
        <circle class="star" cx="99.15%" cy="81.96%" r="1.5" />
        <circle class="star" cx="59.31%" cy="86.87%" r="0.9" />
        <circle class="star" cx="19.04%" cy="12.28%" r="1.1" />
        <circle class="star" cx="74.45%" cy="84.03%" r="1.4" />
        <circle class="star" cx="48.72%" cy="50.85%" r="0.9" />
        <circle class="star" cx="60.04%" cy="62.3%" r="1.5" />
        <circle class="star" cx="39.86%" cy="9.35%" r="1.5" />
        <circle class="star" cx="26.36%" cy="34.79%" r="0.9" />
        <circle class="star" cx="9.67%" cy="5.2%" r="1.1" />
        <circle class="star" cx="32.76%" cy="32%" r="0.7" />
        <circle class="star" cx="86.62%" cy="10.07%" r="1.3" />
        <circle class="star" cx="62.06%" cy="64.42%" r="1.1" />
        <circle class="star" cx="70.54%" cy="84.24%" r="0.8" />
        <circle class="star" cx="93.85%" cy="68.92%" r="0.7" />
        <circle class="star" cx="76.57%" cy="88.34%" r="1.4" />
        <circle class="star" cx="29.66%" cy="4.37%" r="1.1" />
        <circle class="star" cx="72.15%" cy="20.64%" r="1.1" />
        <circle class="star" cx="34.67%" cy="65.33%" r="0.6" />
        <circle class="star" cx="29.69%" cy="56.23%" r="0.9" />
        <circle class="star" cx="73.63%" cy="18.35%" r="1.4" />
        <circle class="star" cx="36.13%" cy="71.08%" r="0.6" />
        <circle class="star" cx="73.02%" cy="53.84%" r="0.7" />
        <circle class="star" cx="61.87%" cy="97.85%" r="1.3" />
        <circle class="star" cx="8.19%" cy="33.39%" r="1" />
        <circle class="star" cx="84.9%" cy="31.06%" r="0.6" />
        <circle class="star" cx="43.78%" cy="51.62%" r="0.9" />
        <circle class="star" cx="54.86%" cy="42.32%" r="0.8" />
        <circle class="star" cx="72.34%" cy="10.42%" r="1.2" />
        <circle class="star" cx="71.89%" cy="50.77%" r="1.2" />
        <circle class="star" cx="74.53%" cy="14.49%" r="1.4" />
        <circle class="star" cx="27.06%" cy="47.99%" r="0.9" />
        <circle class="star" cx="9.57%" cy="77.46%" r="1.3" />
        <circle class="star" cx="11.79%" cy="50.59%" r="0.8" />
        <circle class="star" cx="80.91%" cy="33.68%" r="1.4" />
        <circle class="star" cx="64.81%" cy="25.06%" r="1.1" />
        <circle class="star" cx="0.89%" cy="64.43%" r="1.2" />
        <circle class="star" cx="49.59%" cy="33.91%" r="1" />
        <circle class="star" cx="67.9%" cy="93.89%" r="1.1" />
        <circle class="star" cx="38.97%" cy="80.89%" r="1.3" />
        <circle class="star" cx="68.1%" cy="40.38%" r="1.1" />
        <circle class="star" cx="44.38%" cy="75.95%" r="1.3" />
        <circle class="star" cx="94.29%" cy="72.8%" r="0.7" />
        <circle class="star" cx="15.55%" cy="62.23%" r="1.2" />
        <circle class="star" cx="40.63%" cy="92.42%" r="0.7" />
        <circle class="star" cx="28.54%" cy="98.29%" r="0.6" />
        <circle class="star" cx="95.44%" cy="43.2%" r="1" />
        <circle class="star" cx="79.43%" cy="51.68%" r="0.9" />
        <circle class="star" cx="60.94%" cy="10.36%" r="1.4" />
        <circle class="star" cx="59.05%" cy="68.5%" r="1" />
        <circle class="star" cx="74.46%" cy="37.83%" r="1.1" />
        <circle class="star" cx="65.61%" cy="75.26%" r="0.5" />
        <circle class="star" cx="48.09%" cy="58.41%" r="0.6" />
        <circle class="star" cx="78.68%" cy="76.41%" r="1.5" />
        <circle class="star" cx="1.9%" cy="83.1%" r="0.8" />
        <circle class="star" cx="74.72%" cy="97.38%" r="1.2" />
        <circle class="star" cx="24.28%" cy="65.75%" r="1.5" />
        <circle class="star" cx="49.59%" cy="72.18%" r="1" />
        <circle class="star" cx="81.25%" cy="12.59%" r="0.9" />
        <circle class="star" cx="86.64%" cy="92.6%" r="0.9" />
        <circle class="star" cx="63.46%" cy="2.37%" r="0.5" />
        <circle class="star" cx="56.99%" cy="45.89%" r="0.9" />
        <circle class="star" cx="58.81%" cy="66.69%" r="0.5" />
        <circle class="star" cx="66.65%" cy="71.35%" r="0.7" />
        <circle class="star" cx="86.37%" cy="73.07%" r="0.7" />
        <circle class="star" cx="57.42%" cy="34.49%" r="1.3" />
        <circle class="star" cx="46.26%" cy="83.39%" r="1.3" />
        <circle class="star" cx="52.49%" cy="89.76%" r="0.9" />
        <circle class="star" cx="19.6%" cy="86.22%" r="0.9" />
        <circle class="star" cx="80.43%" cy="60.21%" r="1.3" />
        <circle class="star" cx="68.47%" cy="80.14%" r="0.9" />
        <circle class="star" cx="63.62%" cy="66.97%" r="1.2" />
        <circle class="star" cx="61.34%" cy="94.13%" r="0.8" />
        <circle class="star" cx="42.82%" cy="40.91%" r="0.5" />
        <circle class="star" cx="23.79%" cy="76.66%" r="1.4" />
        <circle class="star" cx="18.4%" cy="91.77%" r="1.4" />
        <circle class="star" cx="91.38%" cy="71.97%" r="1.2" />
        <circle class="star" cx="3.14%" cy="87.29%" r="1" />
        <circle class="star" cx="84.24%" cy="28.43%" r="1" />
        <circle class="star" cx="43.24%" cy="10.17%" r="1.4" />
        <circle class="star" cx="97.9%" cy="37.89%" r="0.8" />
        <circle class="star" cx="93.05%" cy="69.48%" r="1.4" />
        <circle class="star" cx="91.21%" cy="64.09%" r="1.3" />
        <circle class="star" cx="54.65%" cy="46.23%" r="0.8" />
      </svg>
      <svg class="extras" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stop-color="rgba(255,255,255,.8)" />
            <stop offset="100%" stop-color="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <g transform="rotate(-135)">
          <ellipse class="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2" />
        </g>
        <g transform="rotate(20)">
          <ellipse
            class="comet comet-b"
            fill="url(#comet-gradient)"
            cx="100%"
            cy="0"
            rx="150"
            ry="2"
          />
        </g>
        <g transform="rotate(300)">
          <ellipse
            class="comet comet-c"
            fill="url(#comet-gradient)"
            cx="40%"
            cy="100%"
            rx="150"
            ry="2"
          />
        </g>
      </svg>
    </div>
  </div>
  <Loading v-show="getLoading === true"></Loading>
  <Enter></Enter>
</template>
<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import Loading from './components/Loading.vue'
const store = useStore();
const el = ref<HTMLElement | null>(null)
const { arrivedState } = useScroll(el) // , { throttle: 300 }
const arrivedStateVal = computed(() => {
  store.updateHeaderState(arrivedState.top);
  return arrivedState.top
})

const getLoading = computed(() => store.get_loading);

//---------------------------------------------
</script>
<style>
:root {
  --twinkle-duration: 4s;
}

.stop-star-wrapper {
  z-index: -1;
  position: fixed;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  left: 0;
  top: 0;
  animation: bgEnterAnim 5s ease-in-out;
}

@keyframes bgEnterAnim {
  0% {
    background: #16161d;
    opacity: 1;
  }
  50% {
    background: #1f1f3a;
  }
  80% {
    background: #3b2f4a;
    opacity: 1;
  }
  100% {
    background: linear-gradient(#16161d, #1f1f3a, #3b2f4a);
    opacity: 0;
  }
}

.stars-wrapper {
  z-index: -1;
  position: fixed;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#16161d, #1f1f3a, #3b2f4a);
  overflow: hidden;
  left: 0;
  top: 0;
}
.stars {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: twinkle var(--twinkle-duration) ease-in-out infinite;
}
.stars:nth-child(2) {
  animation-delay: calc(var(--twinkle-duration) * -0.33);
}
.stars:nth-child(3) {
  animation-delay: calc(var(--twinkle-duration) * -0.66);
}
@keyframes twinkle {
  25% {
    opacity: 0;
  }
}
.star {
  fill: white;
}
.star:nth-child(3n) {
  opacity: 0.8;
}
.star:nth-child(7n) {
  opacity: 0.6;
}
.star:nth-child(13n) {
  opacity: 0.4;
}
.star:nth-child(19n) {
  opacity: 0.2;
}
.comet {
  transform-origin: center center;
  animation: comet 10s linear infinite;
}
@keyframes comet {
  0%,
  40% {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  60%,
  100% {
    transform: translateX(-100vmax);
    opacity: 0;
  }
}
.comet-b {
  animation-delay: -3.3s;
}
.comet-c {
  animation-delay: -5s;
}
</style>