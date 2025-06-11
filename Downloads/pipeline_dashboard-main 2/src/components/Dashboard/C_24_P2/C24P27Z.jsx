import React from 'react'


const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 20.57,
    "TVD": 20.57,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 42.21,
    "TVD": 42.21,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 42.57,
    "TVD": 42.57,
    "HD": 0.0,
    "Angle": 1.479412
  },
  {
    "MD": 72.57,
    "TVD": 72.56,
    "HD": 2.541116,
    "Angle": 1.50835
  },
  {
    "MD": 101.43,
    "TVD": 101.41,
    "HD": 5.033475,
    "Angle": 3.302931
  },
  {
    "MD": 107.45,
    "TVD": 107.42,
    "HD": 6.171411,
    "Angle": 0.0
  },
  {
    "MD": 111.29,
    "TVD": 111.26,
    "HD": 6.171411,
    "Angle": 4.293244
  },
  {
    "MD": 139.8,
    "TVD": 139.69,
    "HD": 13.17368,
    "Angle": 6.746911
  },
  {
    "MD": 168.68,
    "TVD": 168.37,
    "HD": 24.30535,
    "Angle": 9.343816
  },
  {
    "MD": 197.32,
    "TVD": 196.63,
    "HD": 39.56108,
    "Angle": 11.73017
  },
  {
    "MD": 226.05,
    "TVD": 224.76,
    "HD": 58.72411,
    "Angle": 14.01754
  },
  {
    "MD": 254.93,
    "TVD": 252.78,
    "HD": 81.67451,
    "Angle": 16.10315
  },
  {
    "MD": 283.73,
    "TVD": 280.45,
    "HD": 107.8825,
    "Angle": 18.09308
  },
  {
    "MD": 312.65,
    "TVD": 307.94,
    "HD": 137.3491,
    "Angle": 20.22309
  },
  {
    "MD": 341.2,
    "TVD": 334.73,
    "HD": 169.728,
    "Angle": 22.42091
  },
  {
    "MD": 366.07,
    "TVD": 357.72,
    "HD": 200.8487,
    "Angle": 23.66718
  },
  {
    "MD": 385.45,
    "TVD": 375.47,
    "HD": 226.3723,
    "Angle": 23.6542
  },
  {
    "MD": 395.21,
    "TVD": 384.41,
    "HD": 239.2196,
    "Angle": 24.03145
  },
  {
    "MD": 424.86,
    "TVD": 411.49,
    "HD": 278.8345,
    "Angle": 24.73099
  },
  {
    "MD": 454.08,
    "TVD": 438.03,
    "HD": 318.9409,
    "Angle": 25.70111
  },
  {
    "MD": 483.09,
    "TVD": 464.17,
    "HD": 360.217,
    "Angle": 26.34264
  },
  {
    "MD": 512.75,
    "TVD": 490.75,
    "HD": 403.397,
    "Angle": 26.65252
  },
  {
    "MD": 541.36,
    "TVD": 516.32,
    "HD": 445.5028,
    "Angle": 26.73691
  },
  {
    "MD": 569.98,
    "TVD": 541.88,
    "HD": 487.7468,
    "Angle": 26.60676
  },
  {
    "MD": 598.97,
    "TVD": 567.8,
    "HD": 530.3439,
    "Angle": 26.49224
  },
  {
    "MD": 627.54,
    "TVD": 593.37,
    "HD": 572.1563,
    "Angle": 26.38802
  },
  {
    "MD": 656.62,
    "TVD": 619.42,
    "HD": 614.5596,
    "Angle": 26.2427
  },
  {
    "MD": 684.95,
    "TVD": 644.83,
    "HD": 655.6581,
    "Angle": 26.14263
  },
  {
    "MD": 714.08,
    "TVD": 670.98,
    "HD": 697.7673,
    "Angle": 26.09023
  },
  {
    "MD": 742.54,
    "TVD": 696.54,
    "HD": 738.8313,
    "Angle": 26.40494
  },
  {
    "MD": 771.2,
    "TVD": 722.21,
    "HD": 780.6471,
    "Angle": 26.68
  },
  {
    "MD": 799.94,
    "TVD": 747.89,
    "HD": 822.9846,
    "Angle": 26.57384
  },
  {
    "MD": 827.77,
    "TVD": 772.78,
    "HD": 863.8303,
    "Angle": 26.23853
  },
  {
    "MD": 856.4,
    "TVD": 798.46,
    "HD": 905.3578,
    "Angle": 26.04907
  },
  {
    "MD": 884.85,
    "TVD": 824.02,
    "HD": 946.3471,
    "Angle": 25.86898
  },
  {
    "MD": 913.99,
    "TVD": 850.24,
    "HD": 988.0604,
    "Angle": 25.95028
  },
  {
    "MD": 943.05,
    "TVD": 876.37,
    "HD": 1029.781,
    "Angle": 26.06229
  },
  {
    "MD": 971.57,
    "TVD": 901.99,
    "HD": 1070.89,
    "Angle": 26.14208
  },
  {
    "MD": 1001.19,
    "TVD": 928.58,
    "HD": 1113.707,
    "Angle": 26.11574
  },
  {
    "MD": 1028.42,
    "TVD": 953.03,
    "HD": 1153.032,
    "Angle": 26.20481
  },
  {
    "MD": 1058.29,
    "TVD": 979.83,
    "HD": 1196.307,
    "Angle": 26.60049
  },
  {
    "MD": 1087.01,
    "TVD": 1005.51,
    "HD": 1238.498,
    "Angle": 26.09668
  },
  {
    "MD": 1115.26,
    "TVD": 1030.88,
    "HD": 1279.268,
    "Angle": 26.1758
  },
  {
    "MD": 1144.22,
    "TVD": 1056.87,
    "HD": 1321.181,
    "Angle": 26.38998
  },
  {
    "MD": 1172.72,
    "TVD": 1082.4,
    "HD": 1362.741,
    "Angle": 25.74074
  },
  {
    "MD": 1202.65,
    "TVD": 1109.36,
    "HD": 1405.388,
    "Angle": 25.31738
  },
  {
    "MD": 1231.49,
    "TVD": 1135.43,
    "HD": 1445.85,
    "Angle": 23.96335
  },
  {
    "MD": 1259.45,
    "TVD": 1160.98,
    "HD": 1483.107,
    "Angle": 22.49555
  },
  {
    "MD": 1288.1,
    "TVD": 1187.45,
    "HD": 1519.071,
    "Angle": 22.82235
  },
  {
    "MD": 1316.84,
    "TVD": 1213.94,
    "HD": 1555.645,
    "Angle": 24.45251
  },
  {
    "MD": 1346.05,
    "TVD": 1240.53,
    "HD": 1595.314,
    "Angle": 26.18157
  },
  {
    "MD": 1374.9,
    "TVD": 1266.42,
    "HD": 1637.076,
    "Angle": 26.97407
  },
  {
    "MD": 1403.12,
    "TVD": 1291.57,
    "HD": 1679.071,
    "Angle": 27.22218
  },
  {
    "MD": 1431.65,
    "TVD": 1316.94,
    "HD": 1721.889,
    "Angle": 26.75765
  },
  {
    "MD": 1460.6,
    "TVD": 1342.79,
    "HD": 1764.651,
    "Angle": 26.34175
  },
  {
    "MD": 1489.01,
    "TVD": 1368.25,
    "HD": 1806.01,
    "Angle": 26.686
  },
  {
    "MD": 1518.77,
    "TVD": 1394.84,
    "HD": 1849.859,
    "Angle": 27.35936
  },
  {
    "MD": 1547.02,
    "TVD": 1419.93,
    "HD": 1892.454,
    "Angle": 27.53521
  },
  {
    "MD": 1575.8,
    "TVD": 1445.45,
    "HD": 1936.105,
    "Angle": 27.55747
  },
  {
    "MD": 1604.27,
    "TVD": 1470.69,
    "HD": 1979.318,
    "Angle": 27.47818
  },
  {
    "MD": 1632.99,
    "TVD": 1496.17,
    "HD": 2022.794,
    "Angle": 27.41316
  },
  {
    "MD": 1662.2,
    "TVD": 1522.1,
    "HD": 2066.916,
    "Angle": 27.39436
  },
  {
    "MD": 1680.57,
    "TVD": 1538.41,
    "HD": 2094.647,
    "Angle": 29.00245
  },
  {
    "MD": 1714.86,
    "TVD": 1568.4,
    "HD": 2149.192,
    "Angle": 29.49742
  },
  {
    "MD": 1739.47,
    "TVD": 1589.82,
    "HD": 2188.948,
    "Angle": 28.1616
  },
  {
    "MD": 1771.57,
    "TVD": 1618.12,
    "HD": 2238.652,
    "Angle": 27.38748
  },
  {
    "MD": 1794.41,
    "TVD": 1638.4,
    "HD": 2273.123,
    "Angle": 25.69106
  },
  {
    "MD": 1823.24,
    "TVD": 1664.38,
    "HD": 2314.128,
    "Angle": 24.04093
  },
  {
    "MD": 1852.06,
    "TVD": 1690.7,
    "HD": 2352.648,
    "Angle": 23.01085
  },
  {
    "MD": 1880.84,
    "TVD": 1717.19,
    "HD": 2389.558,
    "Angle": 23.05766
  },
  {
    "MD": 1909.63,
    "TVD": 1743.68,
    "HD": 2426.552,
    "Angle": 23.05361
  },
  {
    "MD": 1938.43,
    "TVD": 1770.18,
    "HD": 2463.553,
    "Angle": 22.912
  },
  {
    "MD": 1969.23,
    "TVD": 1798.55,
    "HD": 2502.894,
    "Angle": 23.23009
  },
  {
    "MD": 1997.97,
    "TVD": 1824.96,
    "HD": 2540.084,
    "Angle": 23.73191
  },
  {
    "MD": 2026.47,
    "TVD": 1851.05,
    "HD": 2577.716,
    "Angle": 24.19746
  },
  {
    "MD": 2054.81,
    "TVD": 1876.9,
    "HD": 2615.826,
    "Angle": 24.51729
  },
  {
    "MD": 2082.87,
    "TVD": 1902.43,
    "HD": 2654.028,
    "Angle": 24.57071
  },
  {
    "MD": 2110.81,
    "TVD": 1927.84,
    "HD": 2692.145,
    "Angle": 24.47211
  },
  {
    "MD": 2139.64,
    "TVD": 1954.08,
    "HD": 2731.327,
    "Angle": 24.09392
  },
  {
    "MD": 2168.45,
    "TVD": 1980.38,
    "HD": 2769.914,
    "Angle": 24.13834
  },
  {
    "MD": 2197.27,
    "TVD": 2006.68,
    "HD": 2808.581,
    "Angle": 24.35783
  },
  {
    "MD": 2226.03,
    "TVD": 2032.88,
    "HD": 2847.497,
    "Angle": 24.41979
  },
  {
    "MD": 2254.87,
    "TVD": 2059.14,
    "HD": 2886.614,
    "Angle": 24.69378
  },
  {
    "MD": 2283.63,
    "TVD": 2085.27,
    "HD": 2926.034,
    "Angle": 24.95761
  },
  {
    "MD": 2312.33,
    "TVD": 2111.29,
    "HD": 2965.764,
    "Angle": 25.28872
  },
  {
    "MD": 2341.13,
    "TVD": 2137.33,
    "HD": 3006.128,
    "Angle": 25.25548
  },
  {
    "MD": 2369.9,
    "TVD": 2163.35,
    "HD": 3046.4,
    "Angle": 25.07967
  },
  {
    "MD": 2398.75,
    "TVD": 2189.48,
    "HD": 3086.521,
    "Angle": 25.22214
  },
  {
    "MD": 2427.49,
    "TVD": 2215.48,
    "HD": 3126.701,
    "Angle": 25.22223
  },
  {
    "MD": 2456.02,
    "TVD": 2241.29,
    "HD": 3166.588,
    "Angle": 24.98719
  },
  {
    "MD": 2484.76,
    "TVD": 2267.34,
    "HD": 3206.418,
    "Angle": 25.14217
  },
  {
    "MD": 2500.17,
    "TVD": 2281.29,
    "HD": 3227.898,
    "Angle": 25.12001
  },
  {
    "MD": 2526.92,
    "TVD": 2305.51,
    "HD": 3265.155,
    "Angle": 24.90915
  },
  {
    "MD": 2544.12,
    "TVD": 2321.11,
    "HD": 3288.922,
    "Angle": 24.91348
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
  }
];

const casingData = [
  { section: "Casing", size: '30"',       fromMD: 0,      toMD: 117.37,   ID: 28,    OD: 30,   roughness: 0.001 },
  { section: "Casing", size: '20"',       fromMD: 0,      toMD: 387.37,   ID: 18.73, OD: 20,   roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',   fromMD: 0,      toMD: 1680.87,  ID: 12.347,OD: 13.375,roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',    fromMD: 0,      toMD: 2509.37,  ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',       fromMD: 2356.37, toMD: 2841.37, ID: 6.184,  OD: 7,    roughness: 0.001 }
];

const tubingData = [
  { toMD: 2781.04, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 2',         type: 'SSSV',          MD: 146.46,  enabled: true },
  { name: 'Choke LN',       type: 'Choke',         MD: 2741.41, enabled: true },
  { name: 'Packer 2',       type: 'Pk 2',          MD: 2754.60, enabled: true },
  { name: 'Sliding sleeve', type: 'Sleeve 1',      MD: 2758.14, enabled: false },
  { name: 'NA',             type: 'NA',            MD: 2786.87, enabled: true }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2786.87,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 188.9668,
  temperature: 107,
  c: 1e-5, // 1.00E‑05
  n: 0.8,
  OGR: null,
  WGR: null,
  soilTempC: 30,                 // °C
  chokeGasCoef: null,            // not specified
  WTDate: "2024-07-04" 
};

// const meta = {
//   soilTempC: 30,                 // °C
//   chokeGasCoef: null,            // not specified
//   WTDate: "2024-07-04" 
// };


function C24P27Z() {
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

export default C24P27Z
