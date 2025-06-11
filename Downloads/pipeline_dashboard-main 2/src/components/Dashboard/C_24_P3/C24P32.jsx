import React from 'react'


const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "Horizontal_distance": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 41.71,
    "TVD": 41.71,
    "Horizontal_distance": 0.0,
    "Angle": 1.678228
  },
  {
    "MD": 111.65,
    "TVD": 111.62,
    "Horizontal_distance": 2.048292,
    "Angle": 2.585942
  },
  {
    "MD": 131.29,
    "TVD": 131.24,
    "Horizontal_distance": 2.934407,
    "Angle": 4.791873
  },
  {
    "MD": 159.9,
    "TVD": 159.75,
    "Horizontal_distance": 5.324386,
    "Angle": 6.739905
  },
  {
    "MD": 188.84,
    "TVD": 188.49,
    "Horizontal_distance": 8.720855,
    "Angle": 9.198883
  },
  {
    "MD": 217.61,
    "TVD": 216.89,
    "Horizontal_distance": 13.32008,
    "Angle": 11.02117
  },
  {
    "MD": 244.72,
    "TVD": 243.5,
    "Horizontal_distance": 18.50275,
    "Angle": 12.84311
  },
  {
    "MD": 273.1,
    "TVD": 271.17,
    "Horizontal_distance": 24.81111,
    "Angle": 15.1056
  },
  {
    "MD": 302.62,
    "TVD": 299.67,
    "Horizontal_distance": 32.50399,
    "Angle": 17.54964
  },
  {
    "MD": 331.41,
    "TVD": 327.12,
    "Horizontal_distance": 41.1851,
    "Angle": 20.18071
  },
  {
    "MD": 365.78,
    "TVD": 359.38,
    "Horizontal_distance": 53.04214,
    "Angle": 21.58079
  },
  {
    "MD": 386.75,
    "TVD": 378.88,
    "Horizontal_distance": 60.75517,
    "Angle": 22.90809
  },
  {
    "MD": 417.18,
    "TVD": 406.91,
    "Horizontal_distance": 72.60017,
    "Angle": 24.55138
  },
  {
    "MD": 442.73,
    "TVD": 430.15,
    "Horizontal_distance": 83.21643,
    "Angle": 25.00934
  },
  {
    "MD": 470.78,
    "TVD": 455.57,
    "Horizontal_distance": 95.07501,
    "Angle": 24.87271
  },
  {
    "MD": 500.32,
    "TVD": 482.37,
    "Horizontal_distance": 107.4996,
    "Angle": 24.99399
  },
  {
    "MD": 527.87,
    "TVD": 507.34,
    "Horizontal_distance": 119.1402,
    "Angle": 25.16264
  },
  {
    "MD": 557.06,
    "TVD": 533.76,
    "Horizontal_distance": 131.5514,
    "Angle": 25.08073
  },
  {
    "MD": 586.65,
    "TVD": 560.56,
    "Horizontal_distance": 144.0945,
    "Angle": 24.46112
  },
  {
    "MD": 614.28,
    "TVD": 585.71,
    "Horizontal_distance": 155.5354,
    "Angle": 24.50752
  },
  {
    "MD": 643.25,
    "TVD": 612.07,
    "Horizontal_distance": 167.5525,
    "Angle": 25.08224
  },
  {
    "MD": 671.67,
    "TVD": 637.81,
    "Horizontal_distance": 179.6003,
    "Angle": 24.91239
  },
  {
    "MD": 701.01,
    "TVD": 664.42,
    "Horizontal_distance": 191.9592,
    "Angle": 24.96044
  },
  {
    "MD": 728.74,
    "TVD": 689.56,
    "Horizontal_distance": 203.6611,
    "Angle": 25.03624
  },
  {
    "MD": 757.05,
    "TVD": 715.21,
    "Horizontal_distance": 215.6416,
    "Angle": 24.95254
  },
  {
    "MD": 786.19,
    "TVD": 741.63,
    "Horizontal_distance": 227.9349,
    "Angle": 24.98719
  },
  {
    "MD": 814.93,
    "TVD": 767.68,
    "Horizontal_distance": 240.0751,
    "Angle": 24.97505
  },
  {
    "MD": 844.66,
    "TVD": 794.63,
    "Horizontal_distance": 252.6278,
    "Angle": 24.96239
  },
  {
    "MD": 870.78,
    "TVD": 818.31,
    "Horizontal_distance": 263.651,
    "Angle": 24.97046
  },
  {
    "MD": 899.13,
    "TVD": 844.01,
    "Horizontal_distance": 275.619,
    "Angle": 24.9294
  },
  {
    "MD": 927.25,
    "TVD": 869.51,
    "Horizontal_distance": 287.4716,
    "Angle": 24.99901
  },
  {
    "MD": 956.07,
    "TVD": 895.63,
    "Horizontal_distance": 299.651,
    "Angle": 24.90608
  },
  {
    "MD": 986.93,
    "TVD": 923.62,
    "Horizontal_distance": 312.6472,
    "Angle": 24.916
  },
  {
    "MD": 1014.65,
    "TVD": 948.76,
    "Horizontal_distance": 324.3253,
    "Angle": 24.94008
  },
  {
    "MD": 1045.32,
    "TVD": 976.57,
    "Horizontal_distance": 337.2579,
    "Angle": 24.89239
  },
  {
    "MD": 1073.63,
    "TVD": 1002.25,
    "Horizontal_distance": 349.174,
    "Angle": 24.87495
  },
  {
    "MD": 1100.47,
    "TVD": 1026.6,
    "Horizontal_distance": 360.464,
    "Angle": 24.8351
  },
  {
    "MD": 1129.99,
    "TVD": 1053.39,
    "Horizontal_distance": 372.8626,
    "Angle": 24.65912
  },
  {
    "MD": 1158.72,
    "TVD": 1079.5,
    "Horizontal_distance": 384.8493,
    "Angle": 24.61127
  },
  {
    "MD": 1187.45,
    "TVD": 1105.62,
    "Horizontal_distance": 396.8142,
    "Angle": 24.59737
  },
  {
    "MD": 1215.11,
    "TVD": 1130.77,
    "Horizontal_distance": 408.3274,
    "Angle": 24.68582
  },
  {
    "MD": 1243.56,
    "TVD": 1156.62,
    "Horizontal_distance": 420.2093,
    "Angle": 24.65206
  },
  {
    "MD": 1274.72,
    "TVD": 1184.94,
    "Horizontal_distance": 433.2064,
    "Angle": 24.64153
  },
  {
    "MD": 1303.71,
    "TVD": 1211.29,
    "Horizontal_distance": 445.2934,
    "Angle": 24.30093
  },
  {
    "MD": 1334.07,
    "TVD": 1238.96,
    "Horizontal_distance": 457.7875,
    "Angle": 23.83319
  },
  {
    "MD": 1360.69,
    "TVD": 1263.31,
    "Horizontal_distance": 468.5439,
    "Angle": 23.50547
  },
  {
    "MD": 1391.18,
    "TVD": 1291.27,
    "Horizontal_distance": 480.7045,
    "Angle": 23.16227
  },
  {
    "MD": 1419.59,
    "TVD": 1317.39,
    "Horizontal_distance": 491.8792,
    "Angle": 23.13641
  },
  {
    "MD": 1448.56,
    "TVD": 1344.03,
    "Horizontal_distance": 503.2621,
    "Angle": 23.19632
  },
  {
    "MD": 1477.63,
    "TVD": 1370.75,
    "Horizontal_distance": 514.7123,
    "Angle": 23.19177
  },
  {
    "MD": 1506.34,
    "TVD": 1397.14,
    "Horizontal_distance": 526.0186,
    "Angle": 23.24823
  },
  {
    "MD": 1534.42,
    "TVD": 1422.94,
    "Horizontal_distance": 537.1022,
    "Angle": 23.20257
  },
  {
    "MD": 1560.26,
    "TVD": 1446.69,
    "Horizontal_distance": 547.2827,
    "Angle": 23.23796
  },
  {
    "MD": 1596.5,
    "TVD": 1479.99,
    "Horizontal_distance": 561.5812,
    "Angle": 23.00149
  },
  {
    "MD": 1624.8,
    "TVD": 1506.04,
    "Horizontal_distance": 572.6396,
    "Angle": 23.0988
  },
  {
    "MD": 1652.99,
    "TVD": 1531.97,
    "Horizontal_distance": 583.699,
    "Angle": 23.54821
  },
  {
    "MD": 1681.93,
    "TVD": 1558.5,
    "Horizontal_distance": 595.2611,
    "Angle": 23.84078
  },
  {
    "MD": 1710.76,
    "TVD": 1584.87,
    "Horizontal_distance": 606.9141,
    "Angle": 23.81575
  },
  {
    "MD": 1739.18,
    "TVD": 1610.87,
    "Horizontal_distance": 618.39,
    "Angle": 23.70642
  },
  {
    "MD": 1768.57,
    "TVD": 1637.78,
    "Horizontal_distance": 630.2063,
    "Angle": 23.51692
  },
  {
    "MD": 1795.78,
    "TVD": 1662.73,
    "Horizontal_distance": 641.0636,
    "Angle": 23.42455
  },
  {
    "MD": 1823.93,
    "TVD": 1688.56,
    "Horizontal_distance": 652.2544,
    "Angle": 23.30526
  },
  {
    "MD": 1852.61,
    "TVD": 1714.9,
    "Horizontal_distance": 663.6011,
    "Angle": 23.16963
  },
  {
    "MD": 1882.49,
    "TVD": 1742.37,
    "Horizontal_distance": 675.3575,
    "Angle": 22.99843
  },
  {
    "MD": 1910.42,
    "TVD": 1768.08,
    "Horizontal_distance": 686.2699,
    "Angle": 23.03425
  },
  {
    "MD": 1941.4,
    "TVD": 1796.59,
    "Horizontal_distance": 698.3918,
    "Angle": 23.31252
  },
  {
    "MD": 1968.96,
    "TVD": 1821.9,
    "Horizontal_distance": 709.2986,
    "Angle": 23.39994
  },
  {
    "MD": 1997.29,
    "TVD": 1847.9,
    "Horizontal_distance": 720.5497,
    "Angle": 23.13187
  },
  {
    "MD": 2026.52,
    "TVD": 1874.78,
    "Horizontal_distance": 732.0327,
    "Angle": 23.23796
  },
  {
    "MD": 2056.72,
    "TVD": 1902.53,
    "Horizontal_distance": 743.9481,
    "Angle": 23.3281
  },
  {
    "MD": 2085.1,
    "TVD": 1928.59,
    "Horizontal_distance": 755.1865,
    "Angle": 23.38521
  },
  {
    "MD": 2113.1,
    "TVD": 1954.29,
    "Horizontal_distance": 766.3,
    "Angle": 23.45753
  },
  {
    "MD": 2140.93,
    "TVD": 1979.82,
    "Horizontal_distance": 777.3783,
    "Angle": 23.3356
  },
  {
    "MD": 2170.27,
    "TVD": 2006.76,
    "Horizontal_distance": 789.0003,
    "Angle": 23.35192
  },
  {
    "MD": 2200.18,
    "TVD": 2034.22,
    "Horizontal_distance": 800.856,
    "Angle": 23.53954
  },
  {
    "MD": 2228.42,
    "TVD": 2060.11,
    "Horizontal_distance": 812.1345,
    "Angle": 23.64215
  },
  {
    "MD": 2259.04,
    "TVD": 2088.16,
    "Horizontal_distance": 824.4138,
    "Angle": 23.70982
  },
  {
    "MD": 2287.0,
    "TVD": 2113.76,
    "Horizontal_distance": 835.6567,
    "Angle": 23.63952
  },
  {
    "MD": 2315.72,
    "TVD": 2140.07,
    "Horizontal_distance": 847.1729,
    "Angle": 23.77994
  },
  {
    "MD": 2344.46,
    "TVD": 2166.37,
    "Horizontal_distance": 858.7615,
    "Angle": 23.59242
  },
  {
    "MD": 2371.02,
    "TVD": 2190.71,
    "Horizontal_distance": 869.3916,
    "Angle": 23.30237
  },
  {
    "MD": 2400.32,
    "TVD": 2217.62,
    "Horizontal_distance": 880.9822,
    "Angle": 23.2327
  },
  {
    "MD": 2431.89,
    "TVD": 2246.63,
    "Horizontal_distance": 893.4355,
    "Angle": 23.21618
  },
  {
    "MD": 2460.17,
    "TVD": 2272.62,
    "Horizontal_distance": 904.5835,
    "Angle": 23.31042
  },
  {
    "MD": 2488.96,
    "TVD": 2299.06,
    "Horizontal_distance": 915.9761,
    "Angle": 23.42591
  },
  {
    "MD": 2518.32,
    "TVD": 2326.0,
    "Horizontal_distance": 927.6485,
    "Angle": 23.51639
  },
  {
    "MD": 2545.17,
    "TVD": 2350.62,
    "Horizontal_distance": 938.362,
    "Angle": 23.53141
  },
  {
    "MD": 2573.79,
    "TVD": 2376.86,
    "Horizontal_distance": 949.7886,
    "Angle": 23.14182
  },
  {
    "MD": 2616.79,
    "TVD": 2416.4,
    "Horizontal_distance": 966.6879,
    "Angle": 23.25955
  },
  {
    "MD": 2644.72,
    "TVD": 2442.06,
    "Horizontal_distance": 977.7174,
    "Angle": 23.72417
  },
  {
    "MD": 2673.12,
    "TVD": 2468.06,
    "Horizontal_distance": 989.1437,
    "Angle": 23.57343
  },
  {
    "MD": 2701.28,
    "TVD": 2493.87,
    "Horizontal_distance": 1000.406,
    "Angle": 23.63463
  },
  {
    "MD": 2731.8,
    "TVD": 2521.83,
    "Horizontal_distance": 1012.641,
    "Angle": 23.69456
  },
  {
    "MD": 2760.27,
    "TVD": 2547.9,
    "Horizontal_distance": 1024.082,
    "Angle": 23.73548
  },
  {
    "MD": 2765.59,
    "TVD": 2552.77,
    "Horizontal_distance": 1026.223,
    "Angle": 23.75814
  },
  {
    "MD": 2788.6,
    "TVD": 2573.83,
    "Horizontal_distance": 1035.494,
    "Angle": 0.0
  },
  {
    "MD": 2794.56,
    "TVD": 2064.53,
    "Horizontal_distance": 1749.445,
    "Angle": 47.60037
  },
  {
    "MD": 2823.39,
    "TVD": 2083.97,
    "Horizontal_distance": 1770.735,
    "Angle": 47.59472
  },
  {
    "MD": 2852.38,
    "TVD": 2103.52,
    "Horizontal_distance": 1792.141,
    "Angle": 47.55594
  },
  {
    "MD": 2881.23,
    "TVD": 2122.99,
    "Horizontal_distance": 1813.43,
    "Angle": 47.56075
  },
  {
    "MD": 2909.89,
    "TVD": 2142.33,
    "Horizontal_distance": 1834.581,
    "Angle": 47.55395
  },
  {
    "MD": 2938.65,
    "TVD": 2161.74,
    "Horizontal_distance": 1855.804,
    "Angle": 47.57345
  },
  {
    "MD": 2967.48,
    "TVD": 2181.19,
    "Horizontal_distance": 1877.084,
    "Angle": 47.62266
  },
  {
    "MD": 2996.53,
    "TVD": 2200.77,
    "Horizontal_distance": 1898.544,
    "Angle": 47.65417
  },
  {
    "MD": 3025.36,
    "TVD": 2220.19,
    "Horizontal_distance": 1919.852,
    "Angle": 47.65585
  },
  {
    "MD": 3047.05,
    "TVD": 2234.8,
    "Horizontal_distance": 1935.883,
    "Angle": 47.42105
  },
  {
    "MD": 3090.65,
    "TVD": 2264.3,
    "Horizontal_distance": 1967.988,
    "Angle": 47.41575
  },
  {
    "MD": 3119.63,
    "TVD": 2283.91,
    "Horizontal_distance": 1989.326,
    "Angle": 47.64023
  },
  {
    "MD": 3148.2,
    "TVD": 2303.16,
    "Horizontal_distance": 2010.437,
    "Angle": 47.61649
  },
  {
    "MD": 3176.49,
    "TVD": 2322.23,
    "Horizontal_distance": 2031.333,
    "Angle": 47.6331
  },
  {
    "MD": 3205.62,
    "TVD": 2341.86,
    "Horizontal_distance": 2052.856,
    "Angle": 47.43627
  },
  {
    "MD": 3234.7,
    "TVD": 2361.53,
    "Horizontal_distance": 2074.274,
    "Angle": 47.55792
  },
  {
    "MD": 3263.64,
    "TVD": 2381.06,
    "Horizontal_distance": 2095.631,
    "Angle": 47.89784
  },
  {
    "MD": 3291.8,
    "TVD": 2399.94,
    "Horizontal_distance": 2116.524,
    "Angle": 47.95101
  },
  {
    "MD": 3320.84,
    "TVD": 2419.39,
    "Horizontal_distance": 2138.088,
    "Angle": 47.92154
  },
  {
    "MD": 3348.61,
    "TVD": 2438.0,
    "Horizontal_distance": 2158.7,
    "Angle": 48.12804
  },
  {
    "MD": 3377.72,
    "TVD": 2457.43,
    "Horizontal_distance": 2180.376,
    "Angle": 48.021
  },
  {
    "MD": 3406.62,
    "TVD": 2476.76,
    "Horizontal_distance": 2201.86,
    "Angle": 47.5851
  },
  {
    "MD": 3421.95,
    "TVD": 2487.1,
    "Horizontal_distance": 2213.178,
    "Angle": 47.44676
  },
  {
    "MD": 3444.5,
    "TVD": 2502.35,
    "Horizontal_distance": 2229.789,
    "Angle": 0.0
  }
];
const casingData = [
  { section: "Casing", size: '30"',       fromMD: 0,      toMD: 108.83,  ID: 28,     OD: 30,    roughness: 0.001 },
  { section: "Casing", size: '20"',       fromMD: 0,      toMD: 370.83,  ID: 18.73,  OD: 20,    roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',   fromMD: 0,      toMD: 1628.83, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',    fromMD: 0,      toMD: 2933.83, ID: 8.681,  OD: 9.625,  roughness: 0.001 },
  { section: "Liner",   size: '7"',       fromMD: 2777.83, toMD: 3187.83, ID: 6.184,  OD: 7,     roughness: 0.001 }
];

const tubingData = [
  { toMD: 2982.18, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 2',         type: 'SSSV',         MD: 153.51, enabled: true },
  { name: 'Packer 2',       type: 'Pk 2',         MD: 2914.38, enabled: true },
  { name: 'Choke LN',       type: 'Choke',        MD: 2927.53, enabled: true },
  { name: 'Sliding sleeve', type: 'Sleeve 1',     MD: 2955.24, enabled: true }
];

const reservoirData = {
  name: 'S-35 PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2990.83,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 170.9668,
  temperature: 107,
  c: 8.50e-7,
  n: 0.8,
  OGR: '7 sm3/mmsm3',
  WGR: '59 sm3/mmsm3',
  soilTempC: 30,
  chokeGasCoef: null,
  WTDate: null  
};


// const notes = `
//   • Well test at middle MD 2990.83 ft (S-35 PAY).  
//   • Reservoir pressure: 170.97 ksc; OGR = 7, WGR = 59 sm3/mmsm3.  
//   • Data is organized with depth-ordered arrays and camelCase keys. ISO 8601 dates recommended for clarity :contentReference[oaicite:1]{index=1}.
// `;


function C24P32() {
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
                <td className="border p-2">{item.Horizontal_distance}</td>
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

export default C24P32
