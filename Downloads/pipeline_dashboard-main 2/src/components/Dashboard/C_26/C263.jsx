import React from 'react'


const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 46.84,
    "TVD": 46.84,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 84.94,
    "TVD": 84.94,
    "HD": 0.0,
    "Angle": 1.269821
  },
  {
    "MD": 125.66,
    "TVD": 125.65,
    "HD": 0.9023857,
    "Angle": 1.289773
  },
  {
    "MD": 244.07,
    "TVD": 244.03,
    "HD": 3.567662,
    "Angle": 0.0
  },
  {
    "MD": 265.72,
    "TVD": 265.68,
    "HD": 3.567662,
    "Angle": 1.521589
  },
  {
    "MD": 294.08,
    "TVD": 294.03,
    "HD": 4.320723,
    "Angle": 0.0
  },
  {
    "MD": 322.2,
    "TVD": 322.15,
    "HD": 4.320723,
    "Angle": 0.0
  },
  {
    "MD": 348.01,
    "TVD": 347.96,
    "HD": 4.320723,
    "Angle": 0.0
  },
  {
    "MD": 367.73,
    "TVD": 367.68,
    "HD": 4.320723,
    "Angle": 1.184213
  },
  {
    "MD": 414.55,
    "TVD": 414.49,
    "HD": 5.288349,
    "Angle": 3.034895
  },
  {
    "MD": 443.07,
    "TVD": 442.97,
    "HD": 6.798316,
    "Angle": 5.89032
  },
  {
    "MD": 471.48,
    "TVD": 471.23,
    "HD": 9.713877,
    "Angle": 8.334843
  },
  {
    "MD": 500.83,
    "TVD": 500.27,
    "HD": 13.96839,
    "Angle": 10.06706
  },
  {
    "MD": 527.46,
    "TVD": 526.49,
    "HD": 18.62334,
    "Angle": 11.53203
  },
  {
    "MD": 554.21,
    "TVD": 552.7,
    "HD": 23.97108,
    "Angle": 13.49994
  },
  {
    "MD": 584.25,
    "TVD": 581.91,
    "HD": 30.98375,
    "Angle": 16.0395
  },
  {
    "MD": 612.25,
    "TVD": 608.82,
    "HD": 38.72015,
    "Angle": 18.82615
  },
  {
    "MD": 641.41,
    "TVD": 636.42,
    "HD": 48.13002,
    "Angle": 20.85632
  },
  {
    "MD": 667.66,
    "TVD": 660.95,
    "HD": 57.47569,
    "Angle": 21.57548
  },
  {
    "MD": 694.92,
    "TVD": 686.3,
    "HD": 67.49992,
    "Angle": 21.74526
  },
  {
    "MD": 724.15,
    "TVD": 713.45,
    "HD": 78.32906,
    "Angle": 21.79071
  },
  {
    "MD": 752.28,
    "TVD": 739.57,
    "HD": 88.7714,
    "Angle": 21.77522
  },
  {
    "MD": 780.87,
    "TVD": 766.12,
    "HD": 99.37733,
    "Angle": 21.68752
  },
  {
    "MD": 808.7,
    "TVD": 791.98,
    "HD": 109.6617,
    "Angle": 21.65798
  },
  {
    "MD": 837.03,
    "TVD": 818.31,
    "HD": 120.1174,
    "Angle": 21.70193
  },
  {
    "MD": 865.67,
    "TVD": 844.92,
    "HD": 130.7078,
    "Angle": 21.70151
  },
  {
    "MD": 894.17,
    "TVD": 871.4,
    "HD": 141.2463,
    "Angle": 21.80999
  },
  {
    "MD": 922.67,
    "TVD": 897.86,
    "HD": 151.8349,
    "Angle": 21.81413
  },
  {
    "MD": 950.88,
    "TVD": 924.05,
    "HD": 162.3176,
    "Angle": 21.78679
  },
  {
    "MD": 978.6,
    "TVD": 949.79,
    "HD": 172.606,
    "Angle": 21.71518
  },
  {
    "MD": 1006.36,
    "TVD": 975.58,
    "HD": 182.877,
    "Angle": 21.71084
  },
  {
    "MD": 1033.99,
    "TVD": 1001.25,
    "HD": 193.098,
    "Angle": 21.72342
  },
  {
    "MD": 1061.87,
    "TVD": 1027.15,
    "HD": 203.4171,
    "Angle": 21.69936
  },
  {
    "MD": 1089.67,
    "TVD": 1052.98,
    "HD": 213.6958,
    "Angle": 21.78293
  },
  {
    "MD": 1118.24,
    "TVD": 1079.51,
    "HD": 224.2979,
    "Angle": 21.74381
  },
  {
    "MD": 1146.49,
    "TVD": 1105.75,
    "HD": 234.7633,
    "Angle": 21.56789
  },
  {
    "MD": 1175.34,
    "TVD": 1132.58,
    "HD": 245.3686,
    "Angle": 21.42466
  },
  {
    "MD": 1203.27,
    "TVD": 1158.58,
    "HD": 255.5708,
    "Angle": 21.43213
  },
  {
    "MD": 1231.47,
    "TVD": 1184.83,
    "HD": 265.8751,
    "Angle": 21.47996
  },
  {
    "MD": 1259.69,
    "TVD": 1211.09,
    "HD": 276.2086,
    "Angle": 21.23045
  },
  {
    "MD": 1287.98,
    "TVD": 1237.46,
    "HD": 286.4529,
    "Angle": 21.26868
  },
  {
    "MD": 1316.61,
    "TVD": 1264.14,
    "HD": 296.8382,
    "Angle": 21.43273
  },
  {
    "MD": 1344.23,
    "TVD": 1289.85,
    "HD": 306.9308,
    "Angle": 21.40544
  },
  {
    "MD": 1370.18,
    "TVD": 1314.01,
    "HD": 316.4017,
    "Angle": 21.36081
  },
  {
    "MD": 1400.75,
    "TVD": 1342.48,
    "HD": 327.5365,
    "Angle": 21.33913
  },
  {
    "MD": 1428.61,
    "TVD": 1368.43,
    "HD": 337.6744,
    "Angle": 21.47842
  },
  {
    "MD": 1456.69,
    "TVD": 1394.56,
    "HD": 347.9559,
    "Angle": 21.39132
  },
  {
    "MD": 1483.69,
    "TVD": 1419.7,
    "HD": 357.8038,
    "Angle": 21.3344
  },
  {
    "MD": 1512.0,
    "TVD": 1446.07,
    "HD": 368.1032,
    "Angle": 21.47
  },
  {
    "MD": 1540.39,
    "TVD": 1472.49,
    "HD": 378.4944,
    "Angle": 21.53022
  },
  {
    "MD": 1568.05,
    "TVD": 1498.22,
    "HD": 388.6454,
    "Angle": 21.47173
  },
  {
    "MD": 1597.3,
    "TVD": 1525.44,
    "HD": 399.3521,
    "Angle": 21.55313
  },
  {
    "MD": 1625.76,
    "TVD": 1551.91,
    "HD": 409.8073,
    "Angle": 21.6194
  },
  {
    "MD": 1654.19,
    "TVD": 1578.34,
    "HD": 420.282,
    "Angle": 21.5508
  },
  {
    "MD": 1682.37,
    "TVD": 1604.55,
    "HD": 430.6332,
    "Angle": 21.56129
  },
  {
    "MD": 1710.38,
    "TVD": 1630.6,
    "HD": 440.9268,
    "Angle": 21.54184
  },
  {
    "MD": 1738.44,
    "TVD": 1656.7,
    "HD": 451.2299,
    "Angle": 21.47297
  },
  {
    "MD": 1766.39,
    "TVD": 1682.71,
    "HD": 461.4613,
    "Angle": 21.37314
  },
  {
    "MD": 1782.53,
    "TVD": 1697.74,
    "HD": 467.3434,
    "Angle": 21.38373
  },
  {
    "MD": 1796.33,
    "TVD": 1710.59,
    "HD": 472.3751,
    "Angle": 21.54721
  },
  {
    "MD": 1824.09,
    "TVD": 1736.41,
    "HD": 482.5704,
    "Angle": 21.79517
  },
  {
    "MD": 1850.39,
    "TVD": 1760.83,
    "HD": 492.3353,
    "Angle": 21.80965
  },
  {
    "MD": 1879.31,
    "TVD": 1787.68,
    "HD": 503.0798,
    "Angle": 21.86404
  },
  {
    "MD": 1907.81,
    "TVD": 1814.13,
    "HD": 513.6934,
    "Angle": 21.83444
  },
  {
    "MD": 1935.55,
    "TVD": 1839.88,
    "HD": 524.0106,
    "Angle": 21.79479
  },
  {
    "MD": 1963.11,
    "TVD": 1865.47,
    "HD": 534.2432,
    "Angle": 21.68123
  },
  {
    "MD": 1991.38,
    "TVD": 1891.74,
    "HD": 544.6873,
    "Angle": 21.44798
  },
  {
    "MD": 2019.25,
    "TVD": 1917.68,
    "HD": 554.8781,
    "Angle": 21.33394
  },
  {
    "MD": 2045.81,
    "TVD": 1942.42,
    "HD": 564.5407,
    "Angle": 21.2982
  },
  {
    "MD": 2077.29,
    "TVD": 1971.75,
    "HD": 575.975,
    "Angle": 21.2888
  },
  {
    "MD": 2105.72,
    "TVD": 1998.24,
    "HD": 586.297,
    "Angle": 21.19083
  },
  {
    "MD": 2132.34,
    "TVD": 2023.06,
    "HD": 595.9195,
    "Angle": 21.24962
  },
  {
    "MD": 2159.55,
    "TVD": 2048.42,
    "HD": 605.7813,
    "Angle": 21.56191
  },
  {
    "MD": 2188.13,
    "TVD": 2075.0,
    "HD": 616.2846,
    "Angle": 21.68806
  },
  {
    "MD": 2217.23,
    "TVD": 2102.04,
    "HD": 627.0386,
    "Angle": 21.38413
  },
  {
    "MD": 2245.41,
    "TVD": 2128.28,
    "HD": 637.3136,
    "Angle": 21.19974
  },
  {
    "MD": 2273.19,
    "TVD": 2154.18,
    "HD": 647.3594,
    "Angle": 21.33205
  },
  {
    "MD": 2302.09,
    "TVD": 2181.1,
    "HD": 657.8724,
    "Angle": 21.4072
  },
  {
    "MD": 2330.21,
    "TVD": 2207.28,
    "HD": 668.136,
    "Angle": 21.39327
  },
  {
    "MD": 2357.06,
    "TVD": 2232.28,
    "HD": 677.93,
    "Angle": 21.29127
  },
  {
    "MD": 2385.63,
    "TVD": 2258.9,
    "HD": 688.3041,
    "Angle": 21.44195
  },
  {
    "MD": 2413.66,
    "TVD": 2284.99,
    "HD": 698.5507,
    "Angle": 21.58385
  },
  {
    "MD": 2442.04,
    "TVD": 2311.38,
    "HD": 708.9906,
    "Angle": 21.64427
  },
  {
    "MD": 2469.98,
    "TVD": 2337.35,
    "HD": 719.2961,
    "Angle": 21.54589
  },
  {
    "MD": 2499.89,
    "TVD": 2365.17,
    "HD": 730.2804,
    "Angle": 21.25633
  },
  {
    "MD": 2527.23,
    "TVD": 2390.65,
    "HD": 740.1923,
    "Angle": 20.94528
  },
  {
    "MD": 2555.53,
    "TVD": 2417.08,
    "HD": 750.3088,
    "Angle": 20.93726
  },
  {
    "MD": 2583.7,
    "TVD": 2443.39,
    "HD": 760.3753,
    "Angle": 20.97936
  },
  {
    "MD": 2612.06,
    "TVD": 2469.87,
    "HD": 770.529,
    "Angle": 20.9229
  },
  {
    "MD": 2638.6,
    "TVD": 2494.66,
    "HD": 780.0068,
    "Angle": 21.01547
  },
  {
    "MD": 2656.34,
    "TVD": 2511.22,
    "HD": 786.3687,
    "Angle": 0.0
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
    "TVD": 1986.06,
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
    "Angle": 56.20881
  },
  {
    "MD": 3633.5,
    "TVD": 2391.18,
    "HD": 2434.132,
    "Angle": 0.0
  }
]

const casingData = [
  { section: "Casing", size: '30"',       fromMD: 0,      toMD: 113.02,  ID: 28,     OD: 1,     roughness: 0.001 },
  { section: "Casing", size: '20"',       fromMD: 0,      toMD: 385.02,  ID: 18.73,  OD: 0.635, roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',   fromMD: 0,      toMD: 1944.02, ID: 12.347, OD: 0.514, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',    fromMD: 0,      toMD: 2944.02, ID: 8.681,  OD: 0.472, roughness: 0.001 },
  { section: "Liner",   size: '7"',       fromMD: 2800.02, toMD: 3267.02, ID: 6.184,  OD: 0.408, roughness: 0.001 }
];

const tubingData = [
  { toMD: 3174.78, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 1',  type: 'SSSV', MD: 157.89, enabled: true },
  { name: 'Packer 1',type: 'Pk 1', MD: 3134.44, enabled: true },
  { name: 'NA',      type: 'NA',   MD: 3193.52, enabled: true }
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
  soilTempC: 30,                  // Soil temperature in °C
  chokeGasCoef: null,             // Not specified
  WTDate: "2024-04-03"  
};



function C263() {
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

export default C263
