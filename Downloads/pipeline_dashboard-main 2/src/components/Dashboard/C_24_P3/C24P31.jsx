import React from 'react'


const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 1.251215
  },
  {
    "MD": 41.94,
    "TVD": 41.93,
    "HD": 0.9158057,
    "Angle": 2.053933
  },
  {
    "MD": 73.07,
    "TVD": 73.04,
    "HD": 2.031512,
    "Angle": 3.581569
  },
  {
    "MD": 93.55,
    "TVD": 93.48,
    "HD": 3.310887,
    "Angle": 3.470772
  },
  {
    "MD": 120.81,
    "TVD": 120.69,
    "HD": 4.96119,
    "Angle": 4.866856
  },
  {
    "MD": 159.64,
    "TVD": 159.38,
    "HD": 8.255548,
    "Angle": 7.124963
  },
  {
    "MD": 188.13,
    "TVD": 187.65,
    "HD": 11.78927,
    "Angle": 8.894041
  },
  {
    "MD": 218.07,
    "TVD": 217.23,
    "HD": 16.41822,
    "Angle": 10.92104
  },
  {
    "MD": 246.23,
    "TVD": 244.88,
    "HD": 21.75331,
    "Angle": 12.02388
  },
  {
    "MD": 274.49,
    "TVD": 272.52,
    "HD": 27.64041,
    "Angle": 14.83511
  },
  {
    "MD": 329.39,
    "TVD": 325.59,
    "HD": 41.69691,
    "Angle": 17.89061
  },
  {
    "MD": 359.79,
    "TVD": 354.52,
    "HD": 51.03581,
    "Angle": 19.0693
  },
  {
    "MD": 388.4,
    "TVD": 381.56,
    "HD": 60.38303,
    "Angle": 20.15666
  },
  {
    "MD": 416.81,
    "TVD": 408.23,
    "HD": 70.17278,
    "Angle": 22.37686
  },
  {
    "MD": 444.3,
    "TVD": 433.65,
    "HD": 80.63814,
    "Angle": 26.17521
  },
  {
    "MD": 501.54,
    "TVD": 485.02,
    "HD": 105.8877,
    "Angle": 29.9368
  },
  {
    "MD": 531.07,
    "TVD": 510.61,
    "HD": 120.6245,
    "Angle": 32.48416
  },
  {
    "MD": 557.85,
    "TVD": 533.2,
    "HD": 135.0071,
    "Angle": 35.00844
  },
  {
    "MD": 586.59,
    "TVD": 556.74,
    "HD": 151.4952,
    "Angle": 36.13158
  },
  {
    "MD": 614.77,
    "TVD": 579.5,
    "HD": 168.1113,
    "Angle": 37.75533
  },
  {
    "MD": 671.99,
    "TVD": 624.74,
    "HD": 203.1466,
    "Angle": 39.7932
  },
  {
    "MD": 699.36,
    "TVD": 645.77,
    "HD": 220.6639,
    "Angle": 39.70299
  },
  {
    "MD": 727.76,
    "TVD": 667.62,
    "HD": 238.806,
    "Angle": 39.67473
  },
  {
    "MD": 758.5,
    "TVD": 691.28,
    "HD": 258.4313,
    "Angle": 39.71253
  },
  {
    "MD": 784.98,
    "TVD": 711.65,
    "HD": 275.3503,
    "Angle": 39.69854
  },
  {
    "MD": 843.18,
    "TVD": 756.43,
    "HD": 312.5255,
    "Angle": 39.72053
  },
  {
    "MD": 868.74,
    "TVD": 776.09,
    "HD": 328.8594,
    "Angle": 39.70848
  },
  {
    "MD": 899.82,
    "TVD": 800.0,
    "HD": 348.7159,
    "Angle": 39.71287
  },
  {
    "MD": 930.2,
    "TVD": 823.37,
    "HD": 368.1269,
    "Angle": 39.77023
  },
  {
    "MD": 957.73,
    "TVD": 844.53,
    "HD": 385.7381,
    "Angle": 39.76853
  },
  {
    "MD": 988.72,
    "TVD": 868.35,
    "HD": 405.562,
    "Angle": 39.71747
  },
  {
    "MD": 1018.27,
    "TVD": 891.08,
    "HD": 424.4446,
    "Angle": 39.60299
  },
  {
    "MD": 1045.98,
    "TVD": 912.43,
    "HD": 442.1087,
    "Angle": 39.6729
  },
  {
    "MD": 1072.12,
    "TVD": 932.55,
    "HD": 458.7966,
    "Angle": 39.722
  },
  {
    "MD": 1102.27,
    "TVD": 955.74,
    "HD": 478.0643,
    "Angle": 39.35532
  },
  {
    "MD": 1134.02,
    "TVD": 980.29,
    "HD": 498.1979,
    "Angle": 38.80204
  },
  {
    "MD": 1160.03,
    "TVD": 1000.56,
    "HD": 514.4966,
    "Angle": 38.55507
  },
  {
    "MD": 1187.6,
    "TVD": 1022.12,
    "HD": 531.68,
    "Angle": 38.2799
  },
  {
    "MD": 1219.32,
    "TVD": 1047.02,
    "HD": 551.3307,
    "Angle": 38.0039
  },
  {
    "MD": 1246.25,
    "TVD": 1068.24,
    "HD": 567.9119,
    "Angle": 38.02231
  },
  {
    "MD": 1277.16,
    "TVD": 1092.59,
    "HD": 586.9515,
    "Angle": 38.00655
  },
  {
    "MD": 1306.68,
    "TVD": 1115.85,
    "HD": 605.1285,
    "Angle": 37.98512
  },
  {
    "MD": 1335.76,
    "TVD": 1138.77,
    "HD": 623.0259,
    "Angle": 37.92259
  },
  {
    "MD": 1364.08,
    "TVD": 1161.11,
    "HD": 640.4313,
    "Angle": 37.96613
  },
  {
    "MD": 1392.81,
    "TVD": 1183.76,
    "HD": 658.1059,
    "Angle": 38.00346
  },
  {
    "MD": 1421.58,
    "TVD": 1206.43,
    "HD": 675.8198,
    "Angle": 37.93837
  },
  {
    "MD": 1449.83,
    "TVD": 1228.71,
    "HD": 693.1883,
    "Angle": 37.97157
  },
  {
    "MD": 1478.93,
    "TVD": 1251.65,
    "HD": 711.0927,
    "Angle": 37.95928
  },
  {
    "MD": 1507.67,
    "TVD": 1274.31,
    "HD": 728.7707,
    "Angle": 37.99094
  },
  {
    "MD": 1535.42,
    "TVD": 1296.18,
    "HD": 745.8518,
    "Angle": 38.02924
  },
  {
    "MD": 1565.33,
    "TVD": 1319.74,
    "HD": 764.2783,
    "Angle": 37.95661
  },
  {
    "MD": 1590.67,
    "TVD": 1339.72,
    "HD": 779.864,
    "Angle": 37.8677
  },
  {
    "MD": 1614.89,
    "TVD": 1358.84,
    "HD": 794.7312,
    "Angle": 37.89185
  },
  {
    "MD": 1651.46,
    "TVD": 1387.7,
    "HD": 817.1915,
    "Angle": 37.8432
  },
  {
    "MD": 1682.7,
    "TVD": 1412.37,
    "HD": 836.3574,
    "Angle": 37.73107
  },
  {
    "MD": 1709.05,
    "TVD": 1433.21,
    "HD": 852.4824,
    "Angle": 37.67454
  },
  {
    "MD": 1738.21,
    "TVD": 1456.29,
    "HD": 870.3043,
    "Angle": 37.74545
  },
  {
    "MD": 1766.93,
    "TVD": 1479.0,
    "HD": 887.8854,
    "Angle": 37.71725
  },
  {
    "MD": 1794.83,
    "TVD": 1501.07,
    "HD": 904.9536,
    "Angle": 37.73148
  },
  {
    "MD": 1824.24,
    "TVD": 1524.33,
    "HD": 922.9514,
    "Angle": 37.76657
  },
  {
    "MD": 1853.12,
    "TVD": 1547.16,
    "HD": 940.6388,
    "Angle": 37.77372
  },
  {
    "MD": 1881.56,
    "TVD": 1569.64,
    "HD": 958.0596,
    "Angle": 37.71577
  },
  {
    "MD": 1910.18,
    "TVD": 1592.28,
    "HD": 975.5677,
    "Angle": 37.73916
  },
  {
    "MD": 1938.24,
    "TVD": 1614.47,
    "HD": 992.7424,
    "Angle": 37.80712
  },
  {
    "MD": 1968.68,
    "TVD": 1638.52,
    "HD": 1011.402,
    "Angle": 37.77215
  },
  {
    "MD": 1997.17,
    "TVD": 1661.04,
    "HD": 1028.853,
    "Angle": 37.73565
  },
  {
    "MD": 2026.0,
    "TVD": 1683.84,
    "HD": 1046.498,
    "Angle": 37.91316
  },
  {
    "MD": 2054.76,
    "TVD": 1706.53,
    "HD": 1064.17,
    "Angle": 38.13773
  },
  {
    "MD": 2083.71,
    "TVD": 1729.3,
    "HD": 1082.048,
    "Angle": 38.16869
  },
  {
    "MD": 2111.96,
    "TVD": 1751.51,
    "HD": 1099.506,
    "Angle": 38.15207
  },
  {
    "MD": 2169.35,
    "TVD": 1796.64,
    "HD": 1134.958,
    "Angle": 38.10565
  },
  {
    "MD": 2198.91,
    "TVD": 1819.9,
    "HD": 1153.2,
    "Angle": 38.13548
  },
  {
    "MD": 2227.02,
    "TVD": 1842.01,
    "HD": 1170.559,
    "Angle": 38.14163
  },
  {
    "MD": 2256.62,
    "TVD": 1865.29,
    "HD": 1188.84,
    "Angle": 37.88463
  },
  {
    "MD": 2284.71,
    "TVD": 1887.46,
    "HD": 1206.089,
    "Angle": 37.69367
  },
  {
    "MD": 2343.5,
    "TVD": 1933.98,
    "HD": 1242.036,
    "Angle": 37.62447
  },
  {
    "MD": 2371.1,
    "TVD": 1955.84,
    "HD": 1258.885,
    "Angle": 37.59732
  },
  {
    "MD": 2400.52,
    "TVD": 1979.15,
    "HD": 1276.835,
    "Angle": 37.59081
  },
  {
    "MD": 2429.42,
    "TVD": 2002.05,
    "HD": 1294.464,
    "Angle": 37.81384
  },
  {
    "MD": 2458.04,
    "TVD": 2024.66,
    "HD": 1312.011,
    "Angle": 38.01326
  },
  {
    "MD": 2515.74,
    "TVD": 2070.12,
    "HD": 1347.545,
    "Angle": 38.02469
  },
  {
    "MD": 2545.28,
    "TVD": 2093.39,
    "HD": 1365.742,
    "Angle": 38.04667
  },
  {
    "MD": 2573.14,
    "TVD": 2115.33,
    "HD": 1382.912,
    "Angle": 38.03263
  },
  {
    "MD": 2603.61,
    "TVD": 2139.33,
    "HD": 1401.685,
    "Angle": 38.07809
  },
  {
    "MD": 2630.58,
    "TVD": 2160.56,
    "HD": 1418.318,
    "Angle": 38.05218
  },
  {
    "MD": 2687.79,
    "TVD": 2205.61,
    "HD": 1453.581,
    "Angle": 38.03467
  },
  {
    "MD": 2716.75,
    "TVD": 2228.42,
    "HD": 1471.425,
    "Angle": 37.98221
  },
  {
    "MD": 2744.89,
    "TVD": 2250.6,
    "HD": 1488.742,
    "Angle": 37.99402
  },
  {
    "MD": 2774.24,
    "TVD": 2273.73,
    "HD": 1506.81,
    "Angle": 37.9791
  },
  {
    "MD": 2802.29,
    "TVD": 2295.84,
    "HD": 1524.071,
    "Angle": 38.06033
  },
  {
    "MD": 2862.11,
    "TVD": 2342.94,
    "HD": 1560.949,
    "Angle": 38.0463
  },
  {
    "MD": 2891.1,
    "TVD": 2365.77,
    "HD": 1578.816,
    "Angle": 37.72731
  },
  {
    "MD": 2918.89,
    "TVD": 2387.75,
    "HD": 1595.821,
    "Angle": 37.68334
  },
  {
    "MD": 2937.73,
    "TVD": 2402.66,
    "HD": 1607.338,
    "Angle": 37.74107
  },
  {
    "MD": 2967.03,
    "TVD": 2425.83,
    "HD": 1625.272,
    "Angle": 37.79413
  },
  {
    "MD": 2993.2,
    "TVD": 2446.51,
    "HD": 1641.31,
    "Angle": 37.90249
  },
  {
    "MD": 3023.54,
    "TVD": 2470.45,
    "HD": 1659.948,
    "Angle": 38.06009
  },
  {
    "MD": 3051.24,
    "TVD": 2492.26,
    "HD": 1677.025,
    "Angle": 38.15663
  },
  {
    "MD": 3081.66,
    "TVD": 2516.18,
    "HD": 1695.819,
    "Angle": 38.08393
  },
  {
    "MD": 3110.36,
    "TVD": 2538.77,
    "HD": 1713.521,
    "Angle": 38.14181
  },
  {
    "MD": 3138.18,
    "TVD": 2560.65,
    "HD": 1730.703,
    "Angle": 38.19278
  },
  {
    "MD": 3167.33,
    "TVD": 2583.56,
    "HD": 1748.727,
    "Angle": 38.06538
  },
  {
    "MD": 3193.33,
    "TVD": 2604.03,
    "HD": 1764.757,
    "Angle": 0.0
  },
  {
    "MD": 2967.48,
    "TVD": 2181.19,
    "HD": 1877.084,
    "Angle": 47.62266
  },
  {
    "MD": 2996.53,
    "TVD": 2200.77,
    "HD": 1898.544,
    "Angle": 47.65417
  },
  {
    "MD": 3025.36,
    "TVD": 2220.19,
    "HD": 1919.852,
    "Angle": 47.65585
  },
  {
    "MD": 3047.05,
    "TVD": 2234.8,
    "HD": 1935.883,
    "Angle": 47.42105
  },
  {
    "MD": 3090.65,
    "TVD": 2264.3,
    "HD": 1967.988,
    "Angle": 47.41575
  },
  {
    "MD": 3119.63,
    "TVD": 2283.91,
    "HD": 1989.326,
    "Angle": 47.64023
  },
  {
    "MD": 3148.2,
    "TVD": 2303.16,
    "HD": 2010.437,
    "Angle": 47.61649
  },
  {
    "MD": 3176.49,
    "TVD": 2322.23,
    "HD": 2031.333,
    "Angle": 47.6331
  },
  {
    "MD": 3205.62,
    "TVD": 2341.86,
    "HD": 2052.856,
    "Angle": 47.43627
  },
  {
    "MD": 3234.7,
    "TVD": 2361.53,
    "HD": 2074.274,
    "Angle": 47.55792
  },
  {
    "MD": 3263.64,
    "TVD": 2381.06,
    "HD": 2095.631,
    "Angle": 47.89784
  },
  {
    "MD": 3291.8,
    "TVD": 2399.94,
    "HD": 2116.524,
    "Angle": 47.95101
  },
  {
    "MD": 3320.84,
    "TVD": 2419.39,
    "HD": 2138.088,
    "Angle": 47.92154
  },
  {
    "MD": 3348.61,
    "TVD": 2438.0,
    "HD": 2158.7,
    "Angle": 48.12804
  },
  {
    "MD": 3377.72,
    "TVD": 2457.43,
    "HD": 2180.376,
    "Angle": 48.021
  },
  {
    "MD": 3406.62,
    "TVD": 2476.76,
    "HD": 2201.86,
    "Angle": 47.5851
  },
  {
    "MD": 3421.95,
    "TVD": 2487.1,
    "HD": 2213.178,
    "Angle": 47.44676
  },
  {
    "MD": 3444.5,
    "TVD": 2502.35,
    "HD": 2229.789,
    "Angle": 0.0
  }
];

const casingData = [
  { section: "Casing", size: '30"',      fromMD: 0,      toMD: 108.83,   ID: 28,     OD: 30,    roughness: 0.001 },
  { section: "Casing", size: '20"',      fromMD: 0,      toMD: 370.83,   ID: 18.73,  OD: 20,    roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',  fromMD: 0,      toMD: 1628.83,  ID: 12.347, OD: 13.375,roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',   fromMD: 0,      toMD: 2933.83,  ID: 8.681,  OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',      fromMD: 2777.83, toMD: 3187.83, ID: 6.184,  OD: 7,     roughness: 0.001 }
];

const tubingData = [
  { toMD: 2982.18, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 2',         type: 'SSSV',         MD: 153.51,  enabled: true },
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
  chokeGasCoef: null,  // not specified
  WTDate: "2024-??-??"
};


// const notes = `
//   • Well test for S‑35 PAY at middle MD 2990.83 ft.  
//   • JSON follows depth‑ordered arrays and ISO 8601 date best practices :contentReference[oaicite:1]{index=1}.
// `;

function C24P31() {
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

export default C24P31
