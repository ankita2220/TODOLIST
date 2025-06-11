import React from 'react'


const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 50.38,
    "TVD": 50.38,
    "HD": 0.0,
    "Angle": 0.4790239
  },
  {
    "MD": 336.51,
    "TVD": 336.5,
    "HD": 7.848342,
    "Angle": 1.530247
  },
  {
    "MD": 364.55,
    "TVD": 364.53,
    "HD": 10.30503,
    "Angle": 4.221989
  },
  {
    "MD": 394.03,
    "TVD": 393.93,
    "HD": 17.42559,
    "Angle": 6.423734
  },
  {
    "MD": 422.7,
    "TVD": 422.42,
    "HD": 27.94926,
    "Angle": 7.445621
  },
  {
    "MD": 452.35,
    "TVD": 451.82,
    "HD": 40.55491,
    "Angle": 8.455473
  },
  {
    "MD": 480.87,
    "TVD": 480.03,
    "HD": 54.31344,
    "Angle": 10.20278
  },
  {
    "MD": 509.96,
    "TVD": 508.66,
    "HD": 71.21891,
    "Angle": 12.31871
  },
  {
    "MD": 539.06,
    "TVD": 537.09,
    "HD": 91.5879,
    "Angle": 14.16294
  },
  {
    "MD": 568.34,
    "TVD": 565.48,
    "HD": 115.0926,
    "Angle": 15.19387
  },
  {
    "MD": 597.52,
    "TVD": 593.64,
    "HD": 140.1834,
    "Angle": 15.22667
  },
  {
    "MD": 626.86,
    "TVD": 621.95,
    "HD": 165.4649,
    "Angle": 15.24008
  },
  {
    "MD": 655.58,
    "TVD": 649.66,
    "HD": 190.2335,
    "Angle": 15.40954
  },
  {
    "MD": 684.51,
    "TVD": 677.55,
    "HD": 215.4539,
    "Angle": 15.68039
  },
  {
    "MD": 713.53,
    "TVD": 705.49,
    "HD": 241.1864,
    "Angle": 15.71312
  },
  {
    "MD": 742.43,
    "TVD": 733.31,
    "HD": 266.8646,
    "Angle": 15.65869
  },
  {
    "MD": 771.53,
    "TVD": 761.33,
    "HD": 292.6332,
    "Angle": 15.68856
  },
  {
    "MD": 800.52,
    "TVD": 789.24,
    "HD": 318.3522,
    "Angle": 15.78211
  },
  {
    "MD": 829.7,
    "TVD": 817.32,
    "HD": 344.3901,
    "Angle": 15.69893
  },
  {
    "MD": 858.92,
    "TVD": 845.45,
    "HD": 370.3298,
    "Angle": 15.62887
  },
  {
    "MD": 887.86,
    "TVD": 873.32,
    "HD": 395.9092,
    "Angle": 15.70914
  },
  {
    "MD": 917.31,
    "TVD": 901.67,
    "HD": 422.0696,
    "Angle": 15.67526
  },
  {
    "MD": 946.08,
    "TVD": 929.37,
    "HD": 447.5723,
    "Angle": 15.52059
  },
  {
    "MD": 974.6,
    "TVD": 956.85,
    "HD": 472.6101,
    "Angle": 15.59411
  },
  {
    "MD": 1003.94,
    "TVD": 985.11,
    "HD": 498.4867,
    "Angle": 15.61504
  },
  {
    "MD": 1032.66,
    "TVD": 1012.77,
    "HD": 523.8497,
    "Angle": 15.63975
  },
  {
    "MD": 1061.56,
    "TVD": 1040.6,
    "HD": 549.4111,
    "Angle": 15.63713
  },
  {
    "MD": 1091.01,
    "TVD": 1068.96,
    "HD": 575.4546,
    "Angle": 15.5563
  },
  {
    "MD": 1119.4,
    "TVD": 1096.31,
    "HD": 600.4342,
    "Angle": 15.67937
  },
  {
    "MD": 1149.23,
    "TVD": 1125.03,
    "HD": 626.8832,
    "Angle": 15.53632
  },
  {
    "MD": 1178.24,
    "TVD": 1152.98,
    "HD": 652.3763,
    "Angle": 15.7721
  },
  {
    "MD": 1206.66,
    "TVD": 1180.33,
    "HD": 677.7205,
    "Angle": 15.967
  },
  {
    "MD": 1235.95,
    "TVD": 1208.49,
    "HD": 704.1548,
    "Angle": 15.93959
  },
  {
    "MD": 1264.82,
    "TVD": 1236.25,
    "HD": 730.1666,
    "Angle": 16.07229
  },
  {
    "MD": 1293.73,
    "TVD": 1264.03,
    "HD": 756.4256,
    "Angle": 16.08163
  },
  {
    "MD": 1321.84,
    "TVD": 1291.04,
    "HD": 781.9723,
    "Angle": 16.14048
  },
  {
    "MD": 1352.03,
    "TVD": 1320.04,
    "HD": 809.5072,
    "Angle": 16.02878
  },
  {
    "MD": 1379.81,
    "TVD": 1346.74,
    "HD": 834.6733,
    "Angle": 15.99006
  },
  {
    "MD": 1410.05,
    "TVD": 1375.81,
    "HD": 862.0034,
    "Angle": 16.05474
  },
  {
    "MD": 1438.51,
    "TVD": 1403.16,
    "HD": 887.8262,
    "Angle": 16.00555
  },
  {
    "MD": 1467.66,
    "TVD": 1431.18,
    "HD": 914.196,
    "Angle": 15.99902
  },
  {
    "MD": 1497.35,
    "TVD": 1459.72,
    "HD": 941.0438,
    "Angle": 16.00555
  },
  {
    "MD": 1526.5,
    "TVD": 1487.74,
    "HD": 967.4137,
    "Angle": 15.97553
  },
  {
    "MD": 1555.5,
    "TVD": 1515.62,
    "HD": 993.5999,
    "Angle": 16.11183
  },
  {
    "MD": 1583.76,
    "TVD": 1542.77,
    "HD": 1019.33,
    "Angle": 16.2602
  },
  {
    "MD": 1612.26,
    "TVD": 1570.13,
    "HD": 1045.511,
    "Angle": 16.28826
  },
  {
    "MD": 1641.41,
    "TVD": 1598.11,
    "HD": 1072.334,
    "Angle": 16.14934
  },
  {
    "MD": 1670.3,
    "TVD": 1625.86,
    "HD": 1098.698,
    "Angle": 15.96186
  },
  {
    "MD": 1699.09,
    "TVD": 1653.54,
    "HD": 1124.673,
    "Angle": 15.7631
  },
  {
    "MD": 1728.34,
    "TVD": 1681.69,
    "HD": 1150.742,
    "Angle": 15.81925
  },
  {
    "MD": 1757.12,
    "TVD": 1709.38,
    "HD": 1176.482,
    "Angle": 15.70976
  },
  {
    "MD": 1786.3,
    "TVD": 1737.47,
    "HD": 1202.404,
    "Angle": 15.63148
  },
  {
    "MD": 1814.96,
    "TVD": 1765.07,
    "HD": 1227.74,
    "Angle": 15.69478
  },
  {
    "MD": 1845.0,
    "TVD": 1793.99,
    "HD": 1254.401,
    "Angle": 15.6717
  },
  {
    "MD": 1874.59,
    "TVD": 1822.48,
    "HD": 1280.624,
    "Angle": 15.61478
  },
  {
    "MD": 1903.04,
    "TVD": 1849.88,
    "HD": 1305.748,
    "Angle": 15.92615
  },
  {
    "MD": 1932.74,
    "TVD": 1878.44,
    "HD": 1332.486,
    "Angle": 16.19455
  },
  {
    "MD": 1961.47,
    "TVD": 1906.03,
    "HD": 1358.775,
    "Angle": 16.11029
  },
  {
    "MD": 1989.99,
    "TVD": 1933.43,
    "HD": 1384.739,
    "Angle": 16.16426
  },
  {
    "MD": 2019.08,
    "TVD": 1961.37,
    "HD": 1411.309,
    "Angle": 16.26595
  },
  {
    "MD": 2047.56,
    "TVD": 1988.71,
    "HD": 1437.48,
    "Angle": 16.17414
  },
  {
    "MD": 2077.12,
    "TVD": 2017.1,
    "HD": 1464.495,
    "Angle": 16.20356
  },
  {
    "MD": 2106.07,
    "TVD": 2044.9,
    "HD": 1491.0,
    "Angle": 15.99826
  },
  {
    "MD": 2134.73,
    "TVD": 2072.45,
    "HD": 1516.915,
    "Angle": 15.72796
  },
  {
    "MD": 2164.11,
    "TVD": 2100.73,
    "HD": 1543.044,
    "Angle": 15.73315
  },
  {
    "MD": 2192.67,
    "TVD": 2128.22,
    "HD": 1568.451,
    "Angle": 15.72378
  },
  {
    "MD": 2222.6,
    "TVD": 2157.03,
    "HD": 1595.062,
    "Angle": 15.65915
  },
  {
    "MD": 2241.46,
    "TVD": 2175.19,
    "HD": 1611.764,
    "Angle": 15.63878
  },
  {
    "MD": 2262.8,
    "TVD": 2195.74,
    "HD": 1630.637,
    "Angle": 15.83683
  },
  {
    "MD": 2291.78,
    "TVD": 2223.62,
    "HD": 1656.584,
    "Angle": 16.10879
  },
  {
    "MD": 2320.56,
    "TVD": 2251.27,
    "HD": 1682.783,
    "Angle": 16.24611
  },
  {
    "MD": 2349.61,
    "TVD": 2279.16,
    "HD": 1709.447,
    "Angle": 16.065
  },
  {
    "MD": 2356.78,
    "TVD": 2286.05,
    "HD": 1715.956,
    "Angle": 16.16693
  },
  {
    "MD": 2378.78,
    "TVD": 2307.18,
    "HD": 1736.053,
    "Angle": 0.0
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
  { section: "Casing", size: '13 3/8"',   fromMD: 0,      toMD: 1694.78,  ID: 12.347, OD: 0.514, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',    fromMD: 0,      toMD: 2440.78,  ID: 8.681,  OD: 0.472, roughness: 0.001 },
  { section: "Liner",   size: '7"',       fromMD: 2303.78, toMD: 2553.78, ID: 6.184,  OD: 0.408, roughness: 0.001 }
];

const tubingData = [
  { toMD: 2494.28, ID: 2.992, OD: 0.254, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV',   type: 'SSSV', MD: 162.95, enabled: true },
  { name: 'Packer', type: 'Pk',   MD: 2413.52, enabled: true },
  { name: 'NA',     type: 'NA',   MD: 2480.581, enabled: true }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2480.53,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 158.9668,  // Adjusted to ~160 ksc to match correlations
  temperature: 107,
  c: 7.60e-6,
  n: 0.8,
  OGR: '84 sm3/mmsm3',
  WGR: '145 sm3/mmsm3',
  soilTempC: 30,
  chokeGasCoef: null,
  WTDate: "2024-04-02"
};



function B121_2() {
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

export default B121_2
