import React from 'react'


const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 123.49,
    "TVD": 123.49,
    "HD": 0.0,
    "Angle": 3.962969
  },
  {
    "MD": 236.41,
    "TVD": 236.14,
    "HD": 7.804095,
    "Angle": 10.54549
  },
  {
    "MD": 348.31,
    "TVD": 346.15,
    "HD": 28.28359,
    "Angle": 18.04884
  },
  {
    "MD": 470.04,
    "TVD": 461.89,
    "HD": 65.99891,
    "Angle": 26.47477
  },
  {
    "MD": 580.94,
    "TVD": 561.16,
    "HD": 115.4385,
    "Angle": 34.76944
  },
  {
    "MD": 695.42,
    "TVD": 655.2,
    "HD": 180.7237,
    "Angle": 42.35349
  },
  {
    "MD": 807.49,
    "TVD": 738.02,
    "HD": 256.2256,
    "Angle": 45.9214
  },
  {
    "MD": 920.91,
    "TVD": 816.92,
    "HD": 337.7049,
    "Angle": 45.91246
  },
  {
    "MD": 1033.32,
    "TVD": 895.13,
    "HD": 418.4465,
    "Angle": 45.56512
  },
  {
    "MD": 1145.39,
    "TVD": 973.59,
    "HD": 498.4697,
    "Angle": 45.32906
  },
  {
    "MD": 1258.77,
    "TVD": 1053.3,
    "HD": 579.1006,
    "Angle": 45.33751
  },
  {
    "MD": 1372.11,
    "TVD": 1132.97,
    "HD": 659.7148,
    "Angle": 45.34555
  },
  {
    "MD": 1483.09,
    "TVD": 1210.97,
    "HD": 738.6613,
    "Angle": 45.30094
  },
  {
    "MD": 1596.3,
    "TVD": 1290.6,
    "HD": 819.1323,
    "Angle": 44.88103
  },
  {
    "MD": 1709.09,
    "TVD": 1370.52,
    "HD": 898.7211,
    "Angle": 44.9373
  },
  {
    "MD": 1821.27,
    "TVD": 1449.93,
    "HD": 977.9574,
    "Angle": 45.37626
  },
  {
    "MD": 1929.52,
    "TVD": 1525.97,
    "HD": 1055.003,
    "Angle": 45.40467
  },
  {
    "MD": 2046.94,
    "TVD": 1608.41,
    "HD": 1138.616,
    "Angle": 44.92351
  },
  {
    "MD": 2158.74,
    "TVD": 1687.57,
    "HD": 1217.565,
    "Angle": 45.18759
  },
  {
    "MD": 2272.15,
    "TVD": 1767.5,
    "HD": 1298.02,
    "Angle": 45.19317
  },
  {
    "MD": 2384.89,
    "TVD": 1846.95,
    "HD": 1378.007,
    "Angle": 45.25411
  },
  {
    "MD": 2497.41,
    "TVD": 1926.16,
    "HD": 1457.923,
    "Angle": 45.61866
  },
  {
    "MD": 2611.56,
    "TVD": 2006.0,
    "HD": 1539.506,
    "Angle": 45.26202
  },
  {
    "MD": 2723.57,
    "TVD": 2084.84,
    "HD": 1619.07,
    "Angle": 45.09998
  },
  {
    "MD": 2835.8,
    "TVD": 2164.06,
    "HD": 1698.567,
    "Angle": 45.17012
  },
  {
    "MD": 2932.92,
    "TVD": 2232.53,
    "HD": 1767.445,
    "Angle": 45.14971
  },
  {
    "MD": 3030.7,
    "TVD": 2301.49,
    "HD": 1836.766,
    "Angle": 45.2088
  },
  {
    "MD": 3142.96,
    "TVD": 2380.58,
    "HD": 1916.435,
    "Angle": 45.15889
  },
  {
    "MD": 3237.65,
    "TVD": 2447.35,
    "HD": 1983.576,
    "Angle": 0.0
  },
  {
    "MD": 887.58,
    "TVD": 847.63,
    "HD": 166.5396,
    "Angle": 41.49794
  },
  {
    "MD": 916.98,
    "TVD": 869.65,
    "HD": 186.0199,
    "Angle": 43.41606
  },
  {
    "MD": 945.56,
    "TVD": 890.41,
    "HD": 205.6626,
    "Angle": 45.41226
  },
  {
    "MD": 974.05,
    "TVD": 910.41,
    "HD": 225.9525,
    "Angle": 47.45646
  },
  {
    "MD": 1002.52,
    "TVD": 929.66,
    "HD": 246.9282,
    "Angle": 49.30575
  },
  {
    "MD": 1031.2,
    "TVD": 948.36,
    "HD": 268.6734,
    "Angle": 51.28619
  },
  {
    "MD": 1060.22,
    "TVD": 966.51,
    "HD": 291.3171,
    "Angle": 53.16066
  },
  {
    "MD": 1088.34,
    "TVD": 983.37,
    "HD": 313.8221,
    "Angle": 54.86239
  },
  {
    "MD": 1116.47,
    "TVD": 999.56,
    "HD": 336.826,
    "Angle": 56.51952
  },
  {
    "MD": 1145.51,
    "TVD": 1015.58,
    "HD": 361.0475,
    "Angle": 57.10874
  },
  {
    "MD": 1174.2,
    "TVD": 1031.16,
    "HD": 385.1386,
    "Angle": 56.89243
  },
  {
    "MD": 1202.98,
    "TVD": 1046.88,
    "HD": 409.2461,
    "Angle": 56.9133
  },
  {
    "MD": 1231.08,
    "TVD": 1062.22,
    "HD": 432.7895,
    "Angle": 56.82604
  },
  {
    "MD": 1260.01,
    "TVD": 1078.05,
    "HD": 457.0043,
    "Angle": 56.82335
  },
  {
    "MD": 1288.81,
    "TVD": 1093.81,
    "HD": 481.1095,
    "Angle": 56.93542
  },
  {
    "MD": 1316.89,
    "TVD": 1109.13,
    "HD": 504.6422,
    "Angle": 56.81621
  },
  {
    "MD": 1347.0,
    "TVD": 1125.61,
    "HD": 529.8418,
    "Angle": 56.69886
  },
  {
    "MD": 1376.67,
    "TVD": 1141.9,
    "HD": 554.6399,
    "Angle": 56.7045
  },
  {
    "MD": 1404.96,
    "TVD": 1157.43,
    "HD": 578.2861,
    "Angle": 56.66859
  },
  {
    "MD": 1433.86,
    "TVD": 1173.31,
    "HD": 602.4322,
    "Angle": 56.61269
  },
  {
    "MD": 1462.59,
    "TVD": 1189.12,
    "HD": 626.4209,
    "Angle": 56.66986
  },
  {
    "MD": 1490.49,
    "TVD": 1204.45,
    "HD": 649.7319,
    "Angle": 56.65935
  },
  {
    "MD": 1519.11,
    "TVD": 1220.18,
    "HD": 673.6415,
    "Angle": 56.48442
  },
  {
    "MD": 1548.92,
    "TVD": 1236.64,
    "HD": 698.4952,
    "Angle": 56.34968
  },
  {
    "MD": 1578.39,
    "TVD": 1252.97,
    "HD": 723.027,
    "Angle": 56.29455
  },
  {
    "MD": 1606.52,
    "TVD": 1268.58,
    "HD": 746.4284,
    "Angle": 56.30807
  },
  {
    "MD": 1636.03,
    "TVD": 1284.95,
    "HD": 770.9817,
    "Angle": 56.48108
  },
  {
    "MD": 1664.28,
    "TVD": 1300.55,
    "HD": 794.5338,
    "Angle": 56.74589
  },
  {
    "MD": 1692.82,
    "TVD": 1316.2,
    "HD": 818.4003,
    "Angle": 56.76029
  },
  {
    "MD": 1721.9,
    "TVD": 1332.14,
    "HD": 842.7224,
    "Angle": 56.67336
  },
  {
    "MD": 1749.93,
    "TVD": 1347.54,
    "HD": 866.1429,
    "Angle": 56.8412
  },
  {
    "MD": 1777.08,
    "TVD": 1362.39,
    "HD": 888.8717,
    "Angle": 56.93629
  },
  {
    "MD": 1808.24,
    "TVD": 1379.39,
    "HD": 914.9858,
    "Angle": 56.93545
  },
  {
    "MD": 1836.43,
    "TVD": 1394.77,
    "HD": 938.6106,
    "Angle": 56.97432
  },
  {
    "MD": 1863.31,
    "TVD": 1409.42,
    "HD": 961.1475,
    "Angle": 56.92573
  },
  {
    "MD": 1893.49,
    "TVD": 1425.89,
    "HD": 986.4373,
    "Angle": 56.69929
  },
  {
    "MD": 1922.45,
    "TVD": 1441.79,
    "HD": 1010.642,
    "Angle": 56.49119
  },
  {
    "MD": 1956.83,
    "TVD": 1460.77,
    "HD": 1039.308,
    "Angle": 56.70795
  },
  {
    "MD": 1982.9,
    "TVD": 1475.08,
    "HD": 1061.1,
    "Angle": 56.59655
  },
  {
    "MD": 2012.09,
    "TVD": 1491.15,
    "HD": 1085.468,
    "Angle": 56.31951
  },
  {
    "MD": 2041.14,
    "TVD": 1507.26,
    "HD": 1109.642,
    "Angle": 56.40335
  },
  {
    "MD": 2069.26,
    "TVD": 1522.82,
    "HD": 1133.064,
    "Angle": 56.44533
  },
  {
    "MD": 2097.99,
    "TVD": 1538.7,
    "HD": 1157.007,
    "Angle": 56.45164
  },
  {
    "MD": 2126.96,
    "TVD": 1554.71,
    "HD": 1181.151,
    "Angle": 56.49471
  },
  {
    "MD": 2155.51,
    "TVD": 1570.47,
    "HD": 1204.957,
    "Angle": 56.41326
  },
  {
    "MD": 2184.74,
    "TVD": 1586.64,
    "HD": 1229.307,
    "Angle": 56.40707
  },
  {
    "MD": 2213.17,
    "TVD": 1602.37,
    "HD": 1252.989,
    "Angle": 56.3842
  },
  {
    "MD": 2241.89,
    "TVD": 1618.27,
    "HD": 1276.906,
    "Angle": 56.44028
  },
  {
    "MD": 2270.58,
    "TVD": 1634.13,
    "HD": 1300.814,
    "Angle": 56.39955
  },
  {
    "MD": 2299.42,
    "TVD": 1650.09,
    "HD": 1324.835,
    "Angle": 56.41219
  },
  {
    "MD": 2327.42,
    "TVD": 1665.58,
    "HD": 1348.16,
    "Angle": 56.40795
  },
  {
    "MD": 2357.64,
    "TVD": 1682.3,
    "HD": 1373.333,
    "Angle": 56.34834
  },
  {
    "MD": 2386.73,
    "TVD": 1698.42,
    "HD": 1397.548,
    "Angle": 56.31533
  },
  {
    "MD": 2415.29,
    "TVD": 1714.26,
    "HD": 1421.313,
    "Angle": 56.18944
  },
  {
    "MD": 2443.9,
    "TVD": 1730.18,
    "HD": 1445.085,
    "Angle": 56.02128
  },
  {
    "MD": 2472.6,
    "TVD": 1746.22,
    "HD": 1468.884,
    "Angle": 56.0066
  },
  {
    "MD": 2500.52,
    "TVD": 1761.83,
    "HD": 1492.033,
    "Angle": 55.97796
  },
  {
    "MD": 2530.01,
    "TVD": 1778.33,
    "HD": 1516.475,
    "Angle": 55.95109
  },
  {
    "MD": 2558.14,
    "TVD": 1794.08,
    "HD": 1539.782,
    "Angle": 55.88551
  },
  {
    "MD": 2586.9,
    "TVD": 1810.21,
    "HD": 1563.593,
    "Angle": 55.91461
  },
  {
    "MD": 2614.95,
    "TVD": 1825.93,
    "HD": 1586.824,
    "Angle": 55.92341
  },
  {
    "MD": 2644.22,
    "TVD": 1842.33,
    "HD": 1611.068,
    "Angle": 56.01485
  },
  {
    "MD": 2672.79,
    "TVD": 1858.3,
    "HD": 1634.758,
    "Angle": 56.25619
  },
  {
    "MD": 2702.35,
    "TVD": 1874.72,
    "HD": 1659.338,
    "Angle": 56.35672
  },
  {
    "MD": 2730.58,
    "TVD": 1890.36,
    "HD": 1682.839,
    "Angle": 56.32299
  },
  {
    "MD": 2759.29,
    "TVD": 1906.28,
    "HD": 1706.731,
    "Angle": 56.29885
  },
  {
    "MD": 2788.09,
    "TVD": 1922.26,
    "HD": 1730.691,
    "Angle": 56.33522
  },
  {
    "MD": 2817.17,
    "TVD": 1938.38,
    "HD": 1754.894,
    "Angle": 56.28868
  },
  {
    "MD": 2845.62,
    "TVD": 1954.17,
    "HD": 1778.56,
    "Angle": 56.2803
  },
  {
    "MD": 2874.37,
    "TVD": 1970.13,
    "HD": 1802.473,
    "Angle": 56.27236
  },
  {
    "MD": 2903.06,
    "TVD": 2986.06,
    "HD": 1826.334,
    "Angle": 56.26182
  },
  {
    "MD": 2931.4,
    "TVD": 2001.8,
    "HD": 1849.902,
    "Angle": 56.22716
  },
  {
    "MD": 2960.29,
    "TVD": 2017.86,
    "HD": 1873.916,
    "Angle": 56.33833
  },
  {
    "MD": 2989.21,
    "TVD": 2033.89,
    "HD": 1897.987,
    "Angle": 56.39368
  },
  {
    "MD": 3017.63,
    "TVD": 2049.62,
    "HD": 1921.657,
    "Angle": 56.25902
  },
  {
    "MD": 3046.31,
    "TVD": 2065.55,
    "HD": 1945.506,
    "Angle": 56.27464
  },
  {
    "MD": 3075.47,
    "TVD": 2081.74,
    "HD": 1969.759,
    "Angle": 56.24292
  },
  {
    "MD": 3103.85,
    "TVD": 2097.51,
    "HD": 1993.354,
    "Angle": 56.21953
  },
  {
    "MD": 3133.04,
    "TVD": 2113.74,
    "HD": 2017.616,
    "Angle": 56.28058
  },
  {
    "MD": 3161.52,
    "TVD": 2129.55,
    "HD": 2041.305,
    "Angle": 56.22389
  },
  {
    "MD": 3189.76,
    "TVD": 2145.25,
    "HD": 2064.778,
    "Angle": 56.24833
  },
  {
    "MD": 3218.36,
    "TVD": 2161.14,
    "HD": 2088.558,
    "Angle": 56.34234
  },
  {
    "MD": 3246.85,
    "TVD": 2176.93,
    "HD": 2112.272,
    "Angle": 56.40238
  },
  {
    "MD": 3275.15,
    "TVD": 2192.59,
    "HD": 2135.844,
    "Angle": 56.54883
  },
  {
    "MD": 3304.92,
    "TVD": 2209.0,
    "HD": 2160.683,
    "Angle": 56.59016
  },
  {
    "MD": 3326.55,
    "TVD": 2220.91,
    "HD": 2178.738,
    "Angle": 56.3498
  },
  {
    "MD": 3356.76,
    "TVD": 2237.65,
    "HD": 2203.886,
    "Angle": 56.14606
  },
  {
    "MD": 3385.23,
    "TVD": 2253.51,
    "HD": 2227.53,
    "Angle": 56.03258
  },
  {
    "MD": 3414.01,
    "TVD": 2269.59,
    "HD": 2251.398,
    "Angle": 56.25373
  },
  {
    "MD": 3442.2,
    "TVD": 2285.25,
    "HD": 2274.839,
    "Angle": 56.48718
  },
  {
    "MD": 3470.69,
    "TVD": 2300.98,
    "HD": 2298.592,
    "Angle": 56.50972
  },
  {
    "MD": 3499.65,
    "TVD": 2316.96,
    "HD": 2322.745,
    "Angle": 56.47855
  },
  {
    "MD": 3528.55,
    "TVD": 2332.92,
    "HD": 2346.838,
    "Angle": 56.4234
  },
  {
    "MD": 3557.39,
    "TVD": 2348.87,
    "HD": 2370.866,
    "Angle": 56.31817
  },
  {
    "MD": 3585.88,
    "TVD": 2364.67,
    "HD": 2394.573,
    "Angle": 56.13623
  },
  {
    "MD": 3609.91,
    "TVD": 2378.06,
    "HD": 2414.527,
    "Angle": 0.0
  }
];

const casingData = [
  { section: "Casing", size: '30"',      fromMD: 0,      toMD: 113.02,   ID: 28,     OD: 30,    roughness: 0.001 },
  { section: "Casing", size: '20"',      fromMD: 0,      toMD: 385.02,   ID: 18.73,  OD: 20,    roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',  fromMD: 0,      toMD: 1944.02,  ID: 12.347, OD: 13.375,roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',   fromMD: 0,      toMD: 2944.02,  ID: 8.681,  OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',      fromMD: 2800.02, toMD: 3267.02, ID: 6.184,  OD: 7,     roughness: 0.001 }
];

const tubingData = [
  { toMD: 3174.78, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 1',     type: 'SSSV', MD: 157.89, enabled: true },
  { name: 'Packer 1',   type: 'Pk 1', MD: 3134.44, enabled: true },
  { name: 'NA',         type: 'NA',   MD: 3193.52, enabled: true }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3193.52,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 149.9668,
  temperature: 107,
  c: 6.00e-7,
  n: 0.8,
  OGR: '122.7335 sm3/mmsm3',
  WGR: '63.2076 sm3/mmsm3',
  soilTempC: 30,
  chokeGasCoef: null,
  WTDate: "2024-04-03" 
};


function C262() {
  return (
    <div className="p-6 font-sans text-sm">
      <h1 className="text-2xl font-bold mb-4">Wellbore Data Overview</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Trajectory Data</h2>
        <table className="w-full border-collapse border border-gray-400 text-left">
          <thead>
            <tr>
              <th className="border p-2">MD</th>
              <th className="border p-2">TVD</th>
              <th className="border p-2">Horizontal Distance</th>
              <th className="border p-2">Angle (°)</th>
            </tr>
          </thead>
          <tbody>
            {trajectoryData.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.MD}</td>
                <td className="border p-2">{item.TVD}</td>
                <td className="border p-2">{item.HD}</td>
                <td className="border p-2">{item.Angle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Casing & Liner</h2>
        <table className="w-full border-collapse border border-gray-400 text-left">
          <thead>
            <tr>
              <th className="border p-2">Section</th>
              <th className="border p-2">Size</th>
              <th className="border p-2">From MD</th>
              <th className="border p-2">To MD</th>
              <th className="border p-2">ID</th>
              <th className="border p-2">OD</th>
              <th className="border p-2">Roughness</th>
            </tr>
          </thead>
          <tbody>
            {casingData.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.section}</td>
                <td className="border p-2">{item.size}</td>
                <td className="border p-2">{item.fromMD}</td>
                <td className="border p-2">{item.toMD}</td>
                <td className="border p-2">{item.ID}</td>
                <td className="border p-2">{item.OD}</td>
                <td className="border p-2">{item.roughness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tubing</h2>
        <table className="w-full border-collapse border border-gray-400 text-left">
          <thead>
            <tr>
              <th className="border p-2">From MD</th>
              <th className="border p-2">To MD</th>
              <th className="border p-2">ID</th>
              <th className="border p-2">OD</th>
              <th className="border p-2">Roughness</th>
            </tr>
          </thead>
          <tbody>
            {tubingData.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.fromMD}</td>
                <td className="border p-2">{item.toMD}</td>
                <td className="border p-2">{item.ID}</td>
                <td className="border p-2">{item.OD}</td>
                <td className="border p-2">{item.roughness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Equipment</h2>
        <table className="w-full border-collapse border border-gray-400 text-left">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">MD</th>
            </tr>
          </thead>
          <tbody>
            {equipmentData.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.type}</td>
                <td className="border p-2">{item.MD}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Reservoir Details</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {Object.entries(reservoirData).map(([key, value]) => (
            <div key={key}>
              <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default C262
