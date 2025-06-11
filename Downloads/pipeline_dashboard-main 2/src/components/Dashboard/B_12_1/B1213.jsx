import React from 'react'


const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 22.38,
    "TVD": 22.38,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 132.69,
    "TVD": 132.69,
    "HD": 0.0,
    "Angle": 1.479412
  },
  {
    "MD": 162.69,
    "TVD": 162.68,
    "HD": 0.7745321,
    "Angle": 2.603681
  },
  {
    "MD": 191.75,
    "TVD": 191.71,
    "HD": 2.094646,
    "Angle": 3.961315
  },
  {
    "MD": 221.05,
    "TVD": 220.94,
    "HD": 4.118775,
    "Angle": 5.586116
  },
  {
    "MD": 250.53,
    "TVD": 250.28,
    "HD": 6.988409,
    "Angle": 7.966644
  },
  {
    "MD": 277.47,
    "TVD": 276.96,
    "HD": 10.7222,
    "Angle": 10.15365
  },
  {
    "MD": 307.48,
    "TVD": 306.5,
    "HD": 16.01262,
    "Angle": 12.41495
  },
  {
    "MD": 336.56,
    "TVD": 334.9,
    "HD": 22.26453,
    "Angle": 14.55201
  },
  {
    "MD": 365.55,
    "TVD": 362.96,
    "HD": 29.54852,
    "Angle": 15.59739
  },
  {
    "MD": 393.52,
    "TVD": 389.9,
    "HD": 37.06898,
    "Angle": 17.01764
  },
  {
    "MD": 421.84,
    "TVD": 416.98,
    "HD": 45.35728,
    "Angle": 19.73029
  },
  {
    "MD": 452.33,
    "TVD": 445.68,
    "HD": 55.65049,
    "Angle": 22.19161
  },
  {
    "MD": 480.95,
    "TVD": 472.18,
    "HD": 66.46041,
    "Angle": 24.71021
  },
  {
    "MD": 510.0,
    "TVD": 498.57,
    "HD": 78.60415,
    "Angle": 27.34545
  },
  {
    "MD": 539.71,
    "TVD": 524.96,
    "HD": 92.25157,
    "Angle": 29.78089
  },
  {
    "MD": 568.18,
    "TVD": 549.67,
    "HD": 106.3922,
    "Angle": 32.2726
  },
  {
    "MD": 597.18,
    "TVD": 574.19,
    "HD": 121.8767,
    "Angle": 34.77071
  },
  {
    "MD": 626.19,
    "TVD": 598.02,
    "HD": 138.4209,
    "Angle": 36.40316
  },
  {
    "MD": 654.99,
    "TVD": 621.2,
    "HD": 155.5126,
    "Angle": 37.12157
  },
  {
    "MD": 684.5,
    "TVD": 644.73,
    "HD": 173.3222,
    "Angle": 37.46427
  },
  {
    "MD": 713.54,
    "TVD": 667.78,
    "HD": 190.9862,
    "Angle": 37.39644
  },
  {
    "MD": 741.66,
    "TVD": 690.12,
    "HD": 208.0642,
    "Angle": 37.08215
  },
  {
    "MD": 771.28,
    "TVD": 713.75,
    "HD": 225.9239,
    "Angle": 37.03065
  },
  {
    "MD": 799.74,
    "TVD": 736.47,
    "HD": 243.0637,
    "Angle": 37.07329
  },
  {
    "MD": 828.78,
    "TVD": 759.64,
    "HD": 260.5701,
    "Angle": 37.04127
  },
  {
    "MD": 858.81,
    "TVD": 783.61,
    "HD": 278.6599,
    "Angle": 37.13916
  },
  {
    "MD": 887.8,
    "TVD": 806.72,
    "HD": 296.1627,
    "Angle": 37.07364
  },
  {
    "MD": 916.79,
    "TVD": 829.85,
    "HD": 313.639,
    "Angle": 37.06238
  },
  {
    "MD": 946.49,
    "TVD": 853.55,
    "HD": 331.5387,
    "Angle": 37.08661
  },
  {
    "MD": 974.62,
    "TVD": 875.99,
    "HD": 348.5017,
    "Angle": 37.09509
  },
  {
    "MD": 1003.38,
    "TVD": 898.93,
    "HD": 365.848,
    "Angle": 37.08136
  },
  {
    "MD": 1032.21,
    "TVD": 921.93,
    "HD": 383.231,
    "Angle": 36.83098
  },
  {
    "MD": 1061.67,
    "TVD": 945.51,
    "HD": 400.891,
    "Angle": 36.63173
  },
  {
    "MD": 1089.01,
    "TVD": 967.45,
    "HD": 417.204,
    "Angle": 36.63308
  },
  {
    "MD": 1119.74,
    "TVD": 992.11,
    "HD": 435.5402,
    "Angle": 36.6183
  },
  {
    "MD": 1148.67,
    "TVD": 1015.33,
    "HD": 452.7964,
    "Angle": 36.53855
  },
  {
    "MD": 1178.18,
    "TVD": 1039.04,
    "HD": 470.3656,
    "Angle": 36.56727
  },
  {
    "MD": 1206.68,
    "TVD": 1061.93,
    "HD": 487.3449,
    "Angle": 36.54048
  },
  {
    "MD": 1235.78,
    "TVD": 1085.31,
    "HD": 504.6708,
    "Angle": 36.51451
  },
  {
    "MD": 1264.92,
    "TVD": 1108.73,
    "HD": 522.0098,
    "Angle": 36.54949
  },
  {
    "MD": 1293.04,
    "TVD": 1131.32,
    "HD": 538.7558,
    "Angle": 36.65484
  },
  {
    "MD": 1322.42,
    "TVD": 1154.89,
    "HD": 556.2954,
    "Angle": 36.58399
  },
  {
    "MD": 1351.91,
    "TVD": 1178.57,
    "HD": 573.8715,
    "Angle": 36.55225
  },
  {
    "MD": 1379.67,
    "TVD": 1200.87,
    "HD": 590.4041,
    "Angle": 36.58519
  },
  {
    "MD": 1410.63,
    "TVD": 1225.73,
    "HD": 608.8568,
    "Angle": 36.63686
  },
  {
    "MD": 1438.57,
    "TVD": 1248.15,
    "HD": 625.5297,
    "Angle": 36.6772
  },
  {
    "MD": 1468.37,
    "TVD": 1272.05,
    "HD": 643.3295,
    "Angle": 36.64876
  },
  {
    "MD": 1497.81,
    "TVD": 1295.67,
    "HD": 660.9024,
    "Angle": 36.59497
  },
  {
    "MD": 1527.08,
    "TVD": 1319.17,
    "HD": 678.3519,
    "Angle": 36.59814
  },
  {
    "MD": 1555.28,
    "TVD": 1341.81,
    "HD": 695.1647,
    "Angle": 36.65914
  },
  {
    "MD": 1584.35,
    "TVD": 1365.13,
    "HD": 712.521,
    "Angle": 36.7319
  },
  {
    "MD": 1613.46,
    "TVD": 1388.46,
    "HD": 729.9309,
    "Angle": 36.68529
  },
  {
    "MD": 1642.49,
    "TVD": 1411.74,
    "HD": 747.274,
    "Angle": 36.66979
  },
  {
    "MD": 1671.19,
    "TVD": 1434.76,
    "HD": 764.4137,
    "Angle": 36.5957
  },
  {
    "MD": 1699.14,
    "TVD": 1457.2,
    "HD": 781.0765,
    "Angle": 36.58197
  },
  {
    "MD": 1729.09,
    "TVD": 1481.25,
    "HD": 798.9258,
    "Angle": 36.61264
  },
  {
    "MD": 1758.13,
    "TVD": 1504.56,
    "HD": 816.2453,
    "Angle": 36.65187
  },
  {
    "MD": 1787.11,
    "TVD": 1527.81,
    "HD": 833.545,
    "Angle": 36.55704
  },
  {
    "MD": 1844.09,
    "TVD": 1573.58,
    "HD": 867.4836,
    "Angle": 36.37309
  },
  {
    "MD": 1873.09,
    "TVD": 1596.93,
    "HD": 884.6818,
    "Angle": 36.60282
  },
  {
    "MD": 1902.5,
    "TVD": 1620.54,
    "HD": 902.2179,
    "Angle": 36.85022
  },
  {
    "MD": 1931.63,
    "TVD": 1643.85,
    "HD": 919.6879,
    "Angle": 36.89595
  },
  {
    "MD": 1960.94,
    "TVD": 1667.29,
    "HD": 937.2846,
    "Angle": 36.8164
  },
  {
    "MD": 1989.52,
    "TVD": 1690.17,
    "HD": 954.4112,
    "Angle": 36.86347
  },
  {
    "MD": 2019.23,
    "TVD": 1713.94,
    "HD": 972.2345,
    "Angle": 36.86317
  },
  {
    "MD": 2047.64,
    "TVD": 1736.67,
    "HD": 989.2779,
    "Angle": 36.79112
  },
  {
    "MD": 2076.76,
    "TVD": 1759.99,
    "HD": 1006.718,
    "Angle": 36.76388
  },
  {
    "MD": 2105.62,
    "TVD": 1783.11,
    "HD": 1023.991,
    "Angle": 36.83051
  },
  {
    "MD": 2134.73,
    "TVD": 1806.41,
    "HD": 1041.441,
    "Angle": 36.85669
  },
  {
    "MD": 2163.65,
    "TVD": 1829.55,
    "HD": 1058.788,
    "Angle": 36.83072
  },
  {
    "MD": 2192.91,
    "TVD": 1852.97,
    "HD": 1076.328,
    "Angle": 36.71258
  },
  {
    "MD": 2222.1,
    "TVD": 1876.37,
    "HD": 1093.778,
    "Angle": 36.64532
  },
  {
    "MD": 2251.09,
    "TVD": 1899.63,
    "HD": 1111.08,
    "Angle": 36.73046
  },
  {
    "MD": 2279.9,
    "TVD": 1922.72,
    "HD": 1128.31,
    "Angle": 36.67973
  },
  {
    "MD": 2309.09,
    "TVD": 1946.13,
    "HD": 1145.747,
    "Angle": 36.47943
  },
  {
    "MD": 2338.08,
    "TVD": 1969.44,
    "HD": 1162.982,
    "Angle": 36.31029
  },
  {
    "MD": 2367.28,
    "TVD": 1992.97,
    "HD": 1180.273,
    "Angle": 36.30543
  },
  {
    "MD": 2396.23,
    "TVD": 2016.3,
    "HD": 1197.414,
    "Angle": 36.27433
  },
  {
    "MD": 2424.97,
    "TVD": 2039.47,
    "HD": 1214.418,
    "Angle": 36.28781
  },
  {
    "MD": 2453.38,
    "TVD": 2062.37,
    "HD": 1231.233,
    "Angle": 36.38101
  },
  {
    "MD": 2483.24,
    "TVD": 2086.41,
    "HD": 1248.944,
    "Angle": 36.38322
  },
  {
    "MD": 2512.84,
    "TVD": 2110.24,
    "HD": 1266.502,
    "Angle": 36.58409
  },
  {
    "MD": 2541.67,
    "TVD": 2133.39,
    "HD": 1283.685,
    "Angle": 36.77117
  },
  {
    "MD": 2570.72,
    "TVD": 2156.66,
    "HD": 1301.075,
    "Angle": 36.8234
  },
  {
    "MD": 2599.49,
    "TVD": 2179.69,
    "HD": 1318.318,
    "Angle": 36.70859
  },
  {
    "MD": 2624.4,
    "TVD": 2199.66,
    "HD": 1333.208,
    "Angle": 36.58154
  },
  {
    "MD": 2653.64,
    "TVD": 2223.14,
    "HD": 1350.634,
    "Angle": 36.60474
  },
  {
    "MD": 2682.54,
    "TVD": 2246.34,
    "HD": 1367.867,
    "Angle": 36.61873
  },
  {
    "MD": 2711.52,
    "TVD": 2269.6,
    "HD": 1385.153,
    "Angle": 36.58459
  },
  {
    "MD": 2740.4,
    "TVD": 2292.79,
    "HD": 1402.366,
    "Angle": 36.66136
  },
  {
    "MD": 2768.86,
    "TVD": 2315.62,
    "HD": 1419.359,
    "Angle": 36.65951
  },
  {
    "MD": 2779.78,
    "TVD": 2324.38,
    "HD": 1425.879,
    "Angle": 0.0
  },
  {
    "MD": 2573.35,
    "TVD": 2347.62,
    "HD": 3329.32,
    "Angle": 24.92701
  },
  {
    "MD": 2601.69,
    "TVD": 2373.32,
    "HD": 3368.507,
    "Angle": 24.98278
  },
  {
    "MD": 2630.44,
    "TVD": 2399.38,
    "HD": 3408.344,
    "Angle": 25.08142
  },
  {
    "MD": 2659.18,
    "TVD": 2425.41,
    "HD": 3448.315,
    "Angle": 25.03435
  },
  {
    "MD": 2687.92,
    "TVD": 2451.45,
    "HD": 3488.215,
    "Angle": 24.95944
  },
  {
    "MD": 2716.83,
    "TVD": 2477.66,
    "HD": 3528.239,
    "Angle": 25.02992
  },
  {
    "MD": 2745.58,
    "TVD": 2503.71,
    "HD": 3568.147,
    "Angle": 25.14467
  },
  {
    "MD": 2774.6,
    "TVD": 2529.98,
    "HD": 3608.602,
    "Angle": 25.1844
  },
  {
    "MD": 2803.53,
    "TVD": 2556.16,
    "HD": 3648.992,
    "Angle": 25.12078
  },
  {
    "MD": 2831.97,
    "TVD": 2581.91,
    "HD": 3688.603,
    "Angle": 25.27683
  },
  {
    "MD": 2841.37,
    "TVD": 2590.41,
    "HD": 3701.772,
    "Angle": 0.0
  },
  {
    "MD": 3029.71,
    "TVD": 2245.32,
    "HD": 1925.313,
    "Angle": 47.67405
  },
  {
    "MD": 3058.15,
    "TVD": 2264.47,
    "HD": 1946.339,
    "Angle": 47.34366
  },
  {
    "MD": 3086.81,
    "TVD": 2283.89,
    "HD": 1967.417,
    "Angle": 47.14648
  },
  {
    "MD": 3115.29,
    "TVD": 2303.26,
    "HD": 1988.295,
    "Angle": 47.15306
  },
  {
    "MD": 3143.7,
    "TVD": 2322.58,
    "HD": 2009.125,
    "Angle": 46.97574
  },
  {
    "MD": 3172.47,
    "TVD": 2342.21,
    "HD": 2030.157,
    "Angle": 46.87004
  },
  {
    "MD": 3200.92,
    "TVD": 2361.66,
    "HD": 2050.92,
    "Angle": 46.89487
  },
  {
    "MD": 3229.31,
    "TVD": 2381.06,
    "HD": 2071.648,
    "Angle": 46.83938
  },
  {
    "MD": 3258.08,
    "TVD": 2400.74,
    "HD": 2092.634,
    "Angle": 47.2318
  },
  {
    "MD": 3286.65,
    "TVD": 2420.14,
    "HD": 2113.607,
    "Angle": 47.62277
  },
  {
    "MD": 3300.27,
    "TVD": 2429.32,
    "HD": 2123.669,
    "Angle": 47.46256
  },
  {
    "MD": 3327.56,
    "TVD": 2447.77,
    "HD": 2143.777,
    "Angle": 47.28385
  },
  {
    "MD": 3355.48,
    "TVD": 2466.71,
    "HD": 2164.291,
    "Angle": 47.26401
  },
  {
    "MD": 3384.2,
    "TVD": 2486.2,
    "HD": 2185.385,
    "Angle": 47.25903
  },
  {
    "MD": 3412.49,
    "TVD": 2505.4,
    "HD": 2206.162,
    "Angle": 47.26017
  },
  {
    "MD": 3441.37,
    "TVD": 2525.0,
    "HD": 2227.373,
    "Angle": 47.2592
  },
  {
    "MD": 3470.22,
    "TVD": 2544.58,
    "HD": 2248.561,
    "Angle": 47.26299
  },
  {
    "MD": 3498.63,
    "TVD": 2563.86,
    "HD": 2269.428,
    "Angle": 0.0
  }
];

const casingData = [
  { section: "Casing", size: '30"',       fromMD: 0,      toMD: 110.78,   ID: 28,     OD: 1,     roughness: 0.001 },
  { section: "Casing", size: '20"',       fromMD: 0,      toMD: 328.78,   ID: 18.73,  OD: 0.635, roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',   fromMD: 0,      toMD: 1814.78,  ID: 12.347, OD: 0.514, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',    fromMD: 0,      toMD: 2617.78,  ID: 8.681,  OD: 0.472, roughness: 0.001 },
  { section: "Liner",   size: '7"',       fromMD: 2468.78, toMD: 2779.78, ID: 6.184,  OD: 0.408, roughness: 0.001 }
];

const tubingData = [
  { toMD: 2734.23, ID: 2.992, OD: 0.254, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 2', type: 'SSSV', MD: 163.34, enabled: true },
  { name: 'Packer 3', type: 'Pk 3', MD: 2633.70, enabled: true },
  { name: 'NA 1', type: 'NA 1', MD: 2695.331, enabled: true },
  { name: 'MMG Dummy', type: 'MMG Dummy', MD: 1187.72, enabled: true }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2695.28,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 150.9668,  // Returned pressure after increasing from 142→160 ksc to match correlation
  temperature: 107,
  c: 4.78e-7,
  n: 0.8,
  OGR: '92 sm3/mmsm3',
  WGR: '136 sm3/mmsm3',
  soilTempC: 30,
  chokeGasCoef: null,
  WTDate: "2024-04-02"
};


// const notes = `
//   • Reservoir pressure was raised from 142 ksc to 160 ksc to align with IPR correlations.
//   • Well test conducted on 2 April 2024.
//   • Tubing used: Tubing_3.5 at 2734.23 ft.
//   • MMG Dummy equipment included at 1187.72 ft.
// `;


function B121_3() {
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

export default B121_3
