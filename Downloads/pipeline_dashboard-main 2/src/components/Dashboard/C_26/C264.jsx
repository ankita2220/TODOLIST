import React from 'react'


const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 21.11,
    "TVD": 0.02111,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 49.11,
    "TVD": 0.04911,
    "HD": 0.0,
    "Angle": 0.4727137
  },
  {
    "MD": 342.93,
    "TVD": 0.34292,
    "HD": 7.953111,
    "Angle": 0.0
  },
  {
    "MD": 370.49,
    "TVD": 0.37048,
    "HD": 7.953111,
    "Angle": 3.707449
  },
  {
    "MD": 399.16,
    "TVD": 0.39909,
    "HD": 14.03533,
    "Angle": 6.447415
  },
  {
    "MD": 427.62,
    "TVD": 0.42737,
    "HD": 24.52027,
    "Angle": 9.768232
  },
  {
    "MD": 455.9,
    "TVD": 0.45524,
    "HD": 40.26198,
    "Angle": 13.21136
  },
  {
    "MD": 483.86,
    "TVD": 0.48246,
    "HD": 61.22683,
    "Angle": 16.23666
  },
  {
    "MD": 511.69,
    "TVD": 0.50918,
    "HD": 86.75642,
    "Angle": 19.09509
  },
  {
    "MD": 539.86,
    "TVD": 0.5358,
    "HD": 116.9908,
    "Angle": 21.92808
  },
  {
    "MD": 567.09,
    "TVD": 0.56106,
    "HD": 150.3532,
    "Angle": 24.73183
  },
  {
    "MD": 596.09,
    "TVD": 0.5874,
    "HD": 190.1589,
    "Angle": 27.52373
  },
  {
    "MD": 624.01,
    "TVD": 0.61216,
    "HD": 232.4892,
    "Angle": 30.30641
  },
  {
    "MD": 653.06,
    "TVD": 0.63724,
    "HD": 280.5841,
    "Angle": 32.42937
  },
  {
    "MD": 680.89,
    "TVD": 0.66073,
    "HD": 329.5477,
    "Angle": 33.06332
  },
  {
    "MD": 709.05,
    "TVD": 0.68433,
    "HD": 379.9517,
    "Angle": 32.97559
  },
  {
    "MD": 737.48,
    "TVD": 0.70818,
    "HD": 430.7191,
    "Angle": 32.8855
  },
  {
    "MD": 765.5,
    "TVD": 0.73171,
    "HD": 480.6332,
    "Angle": 32.88839
  },
  {
    "MD": 793.64,
    "TVD": 0.75534,
    "HD": 530.7649,
    "Angle": 32.96187
  },
  {
    "MD": 822.59,
    "TVD": 0.77963,
    "HD": 582.4418,
    "Angle": 33.15255
  },
  {
    "MD": 850.91,
    "TVD": 0.80334,
    "HD": 633.2534,
    "Angle": 33.1253
  },
  {
    "MD": 878.66,
    "TVD": 0.82658,
    "HD": 683.006,
    "Angle": 32.95945
  },
  {
    "MD": 906.62,
    "TVD": 0.85004,
    "HD": 732.9125,
    "Angle": 32.96203
  },
  {
    "MD": 934.7,
    "TVD": 0.8736,
    "HD": 783.0367,
    "Angle": 32.95812
  },
  {
    "MD": 963.47,
    "TVD": 0.89774,
    "HD": 834.3872,
    "Angle": 32.96679
  },
  {
    "MD": 991.48,
    "TVD": 0.92124,
    "HD": 884.3928,
    "Angle": 33.00071
  },
  {
    "MD": 1019.62,
    "TVD": 0.94484,
    "HD": 934.6764,
    "Angle": 32.90441
  },
  {
    "MD": 1047.11,
    "TVD": 0.96792,
    "HD": 983.6713,
    "Angle": 32.8701
  },
  {
    "MD": 1076.03,
    "TVD": 0.99221,
    "HD": 1035.167,
    "Angle": 32.95728
  },
  {
    "MD": 1104.18,
    "TVD": 1.01583,
    "HD": 1085.41,
    "Angle": 32.97618
  },
  {
    "MD": 1131.74,
    "TVD": 1.03895,
    "HD": 1134.625,
    "Angle": 33.03164
  },
  {
    "MD": 1160.2,
    "TVD": 1.06281,
    "HD": 1185.522,
    "Angle": 32.99831
  },
  {
    "MD": 1188.22,
    "TVD": 1.08631,
    "HD": 1235.588,
    "Angle": 33.05941
  },
  {
    "MD": 1216.51,
    "TVD": 1.11002,
    "HD": 1286.219,
    "Angle": 32.98263
  },
  {
    "MD": 1244.68,
    "TVD": 1.13365,
    "HD": 1336.532,
    "Angle": 32.97745
  },
  {
    "MD": 1272.3,
    "TVD": 1.15682,
    "HD": 1385.856,
    "Angle": 32.9731
  },
  {
    "MD": 1300.61,
    "TVD": 1.18057,
    "HD": 1436.406,
    "Angle": 32.93791
  },
  {
    "MD": 1328.73,
    "TVD": 1.20417,
    "HD": 1486.569,
    "Angle": 32.94525
  },
  {
    "MD": 1356.9,
    "TVD": 1.22781,
    "HD": 1536.831,
    "Angle": 32.65884
  },
  {
    "MD": 1384.92,
    "TVD": 1.2514,
    "HD": 1586.439,
    "Angle": 32.46527
  },
  {
    "MD": 1413.33,
    "TVD": 1.27537,
    "HD": 1636.472,
    "Angle": 32.52114
  },
  {
    "MD": 1441.39,
    "TVD": 1.29903,
    "HD": 1685.965,
    "Angle": 32.54718
  },
  {
    "MD": 1469.47,
    "TVD": 1.3227,
    "HD": 1735.528,
    "Angle": 32.55531
  },
  {
    "MD": 1497.6,
    "TVD": 1.34641,
    "HD": 1785.191,
    "Angle": 32.51663
  },
  {
    "MD": 1525.54,
    "TVD": 1.36997,
    "HD": 1834.465,
    "Angle": 32.42181
  },
  {
    "MD": 1553.96,
    "TVD": 1.39396,
    "HD": 1884.457,
    "Angle": 32.45816
  },
  {
    "MD": 1581.87,
    "TVD": 1.41751,
    "HD": 1933.6,
    "Angle": 32.4808
  },
  {
    "MD": 1609.87,
    "TVD": 1.44113,
    "HD": 1982.932,
    "Angle": 32.42083
  },
  {
    "MD": 1638.42,
    "TVD": 1.46523,
    "HD": 2033.151,
    "Angle": 32.35635
  },
  {
    "MD": 1666.63,
    "TVD": 1.48906,
    "HD": 2082.683,
    "Angle": 32.43834
  },
  {
    "MD": 1695.15,
    "TVD": 1.51313,
    "HD": 2132.873,
    "Angle": 32.47737
  },
  {
    "MD": 1722.9,
    "TVD": 1.53654,
    "HD": 2181.76,
    "Angle": 32.60253
  },
  {
    "MD": 1750.57,
    "TVD": 1.55985,
    "HD": 2230.674,
    "Angle": 32.00748
  },
  {
    "MD": 1773.33,
    "TVD": 1.57915,
    "HD": 2270.252,
    "Angle": 30.77248
  },
  {
    "MD": 1806.57,
    "TVD": 1.60771,
    "HD": 2326.048,
    "Angle": 31.45767
  },
  {
    "MD": 1834.33,
    "TVD": 1.63139,
    "HD": 2373.578,
    "Angle": 32.76625
  },
  {
    "MD": 1863.24,
    "TVD": 1.6557,
    "HD": 2424.911,
    "Angle": 32.93861
  },
  {
    "MD": 1891.11,
    "TVD": 1.67909,
    "HD": 2474.629,
    "Angle": 32.78873
  },
  {
    "MD": 1919.04,
    "TVD": 1.70257,
    "HD": 2524.253,
    "Angle": 32.79861
  },
  {
    "MD": 1947.33,
    "TVD": 1.72635,
    "HD": 2574.53,
    "Angle": 32.84935
  },
  {
    "MD": 1975.41,
    "TVD": 1.74994,
    "HD": 2624.502,
    "Angle": 32.87638
  },
  {
    "MD": 2003.57,
    "TVD": 1.77359,
    "HD": 2674.653,
    "Angle": 32.84226
  },
  {
    "MD": 2032.35,
    "TVD": 1.79777,
    "HD": 2725.861,
    "Angle": 32.8464
  },
  {
    "MD": 2060.56,
    "TVD": 1.82147,
    "HD": 2776.06,
    "Angle": 32.68192
  },
  {
    "MD": 2089.11,
    "TVD": 1.8455,
    "HD": 2826.639,
    "Angle": 32.4389
  },
  {
    "MD": 2116.86,
    "TVD": 1.86892,
    "HD": 2875.474,
    "Angle": 32.31999
  },
  {
    "MD": 2145.39,
    "TVD": 1.89303,
    "HD": 2925.519,
    "Angle": 32.44049
  },
  {
    "MD": 2173.65,
    "TVD": 1.91688,
    "HD": 2975.254,
    "Angle": 32.89297
  },
  {
    "MD": 2201.72,
    "TVD": 1.94045,
    "HD": 3025.267,
    "Angle": 33.0754
  },
  {
    "MD": 2229.86,
    "TVD": 1.96403,
    "HD": 3075.652,
    "Angle": 33.0875
  },
  {
    "MD": 2258.35,
    "TVD": 1.9879,
    "HD": 3126.679,
    "Angle": 33.04576
  },
  {
    "MD": 2286.91,
    "TVD": 2.01184,
    "HD": 3177.775,
    "Angle": 33.02863
  },
  {
    "MD": 2314.88,
    "TVD": 2.03529,
    "HD": 3227.792,
    "Angle": 33.00699
  },
  {
    "MD": 2342.39,
    "TVD": 2.05836,
    "HD": 3276.959,
    "Angle": 33.03981
  },
  {
    "MD": 2370.96,
    "TVD": 2.08231,
    "HD": 3328.064,
    "Angle": 33.04684
  },
  {
    "MD": 2399.58,
    "TVD": 2.1063,
    "HD": 3379.269,
    "Angle": 32.9898
  },
  {
    "MD": 2427.49,
    "TVD": 2.12971,
    "HD": 3429.127,
    "Angle": 33.00071
  },
  {
    "MD": 2455.63,
    "TVD": 2.15331,
    "HD": 3479.41,
    "Angle": 32.89831
  },
  {
    "MD": 2484.19,
    "TVD": 2.17729,
    "HD": 3530.304,
    "Angle": 32.85837
  },
  {
    "MD": 2512.13,
    "TVD": 2.20076,
    "HD": 3580.039,
    "Angle": 32.88855
  },
  {
    "MD": 2541.58,
    "TVD": 2.22549,
    "HD": 3632.505,
    "Angle": 32.90082
  },
  {
    "MD": 2568.39,
    "TVD": 2.248,
    "HD": 3680.283,
    "Angle": 32.93657
  },
  {
    "MD": 2596.45,
    "TVD": 2.27155,
    "HD": 3730.337,
    "Angle": 32.85988
  },
  {
    "MD": 2624.45,
    "TVD": 2.29507,
    "HD": 3780.181,
    "Angle": 32.76804
  },
  {
    "MD": 2652.54,
    "TVD": 2.31869,
    "HD": 3830.061,
    "Angle": 32.899
  },
  {
    "MD": 2680.6,
    "TVD": 2.34225,
    "HD": 3880.064,
    "Angle": 32.84793
  },
  {
    "MD": 2708.87,
    "TVD": 2.366,
    "HD": 3930.373,
    "Angle": 32.53376
  },
  {
    "MD": 2737.1,
    "TVD": 2.3898,
    "HD": 3980.182,
    "Angle": 32.48507
  },
  {
    "MD": 2759.98,
    "TVD": 2.4091,
    "HD": 4020.499,
    "Angle": 31.76538
  },
  {
    "MD": 2797.9,
    "TVD": 2.44134,
    "HD": 4085.993,
    "Angle": 31.1432
  },
  {
    "MD": 2827.25,
    "TVD": 2.46646,
    "HD": 4135.794,
    "Angle": 31.39872
  },
  {
    "MD": 2855.18,
    "TVD": 2.4903,
    "HD": 4183.534,
    "Angle": 31.59138
  },
  {
    "MD": 2863.21,
    "TVD": 2.49714,
    "HD": 4197.335,
    "Angle": 31.50395
  },
  {
    "MD": 2882.41,
    "TVD": 2.51351,
    "HD": 4230.252,
    "Angle": 0.0
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
];

const casingData = [
  { section: "Casing", size: '30"',      fromMD: 0,     toMD: 101.41, ID: 28,     OD: 1,     roughness: 0.001 },
  { section: "Casing", size: '20"',      fromMD: 0,     toMD: 332.41, ID: 18.73,  OD: 0.635, roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',  fromMD: 0,     toMD: 1786.41,ID: 12.347, OD: 0.514, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',   fromMD: 0,     toMD: 2754.41,ID: 8.681,  OD: 0.472, roughness: 0.001 },
  { section: "Liner",   size: '7"',      fromMD: 2625.41,toMD: 2882.41,ID: 6.184,  OD: 0.408, roughness: 0.001 }
];

const tubingData = [
  { toMD: 2787.41, ID: 2.992, OD: 0.254, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 3',    type: 'SSSV',        MD: 163.11,   enabled: true },
  { name: 'Packer 3',  type: 'Pk 3',        MD: 2754.35,  enabled: true },
  { name: 'NA',        type: 'NA',          MD: 2787.41,  enabled: true }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2787.41,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 148.9668,
  temperature: 107,
  c: 9.60e-6,
  n: 0.8,
  OGR: '87.1226 sm3/mmsm3',
  WGR: '31.3976 sm3/mmsm3',
  soilTempC: 30,              
  chokeGasCoef: null,          
  WTDate: "2024-05-06"  
};


function C264() {
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

export default C264
