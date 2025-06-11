import React from 'react'


const trajectoryData = [
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 22.38,
        "TVD": 22.38,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 50.38,
        "TVD": 50.38,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 336.49,
        "TVD": 336.49,
        "HD": 0,
        "Angle": 1.463401
    },
    {
        "MD": 367.15,
        "TVD": 367.14,
        "HD": 0.783007,
        "Angle": 2.179766
    },
    {
        "MD": 394.79,
        "TVD": 394.76,
        "HD": 1.834292,
        "Angle": 4.537119
    },
    {
        "MD": 423.51,
        "TVD": 423.39,
        "HD": 4.106185,
        "Angle": 7.530074
    },
    {
        "MD": 451.34,
        "TVD": 450.98,
        "HD": 7.753212,
        "Angle": 9.986551
    },
    {
        "MD": 480.38,
        "TVD": 479.58,
        "HD": 12.78924,
        "Angle": 12.0325
    },
    {
        "MD": 509.51,
        "TVD": 508.07,
        "HD": 18.86187,
        "Angle": 13.68895
    },
    {
        "MD": 538.73,
        "TVD": 536.46,
        "HD": 25.7768,
        "Angle": 15.53362
    },
    {
        "MD": 567.75,
        "TVD": 564.42,
        "HD": 33.54847,
        "Angle": 17.12719
    },
    {
        "MD": 597.29,
        "TVD": 592.65,
        "HD": 42.24782,
        "Angle": 17.58603
    },
    {
        "MD": 625.32,
        "TVD": 619.37,
        "HD": 50.71673,
        "Angle": 18.67494
    },
    {
        "MD": 654.57,
        "TVD": 647.08,
        "HD": 60.08254,
        "Angle": 20.4674
    },
    {
        "MD": 683.4,
        "TVD": 674.09,
        "HD": 70.16365,
        "Angle": 22.27452
    },
    {
        "MD": 711.81,
        "TVD": 700.38,
        "HD": 80.93231,
        "Angle": 24.67448
    },
    {
        "MD": 741.6,
        "TVD": 727.45,
        "HD": 93.36852,
        "Angle": 27.4097
    },
    {
        "MD": 770.55,
        "TVD": 753.15,
        "HD": 106.6957,
        "Angle": 30.03208
    },
    {
        "MD": 800.94,
        "TVD": 779.46,
        "HD": 121.9054,
        "Angle": 30.96356
    },
    {
        "MD": 829.36,
        "TVD": 803.83,
        "HD": 136.5273,
        "Angle": 30.63828
    },
    {
        "MD": 858.73,
        "TVD": 829.1,
        "HD": 151.4947,
        "Angle": 30.51212
    },
    {
        "MD": 886.46,
        "TVD": 852.99,
        "HD": 165.5738,
        "Angle": 30.31283
    },
    {
        "MD": 916.01,
        "TVD": 878.5,
        "HD": 180.4883,
        "Angle": 30.35426
    },
    {
        "MD": 944.46,
        "TVD": 903.05,
        "HD": 194.8654,
        "Angle": 30.5698
    },
    {
        "MD": 974.75,
        "TVD": 929.13,
        "HD": 210.2705,
        "Angle": 30.53178
    },
    {
        "MD": 1002.95,
        "TVD": 953.42,
        "HD": 224.5965,
        "Angle": 30.39858
    },
    {
        "MD": 1031.61,
        "TVD": 978.14,
        "HD": 239.0989,
        "Angle": 30.34651
    },
    {
        "MD": 1060.95,
        "TVD": 1003.46,
        "HD": 253.9223,
        "Angle": 30.33316
    },
    {
        "MD": 1089.95,
        "TVD": 1028.49,
        "HD": 268.568,
        "Angle": 30.51928
    },
    {
        "MD": 1118.75,
        "TVD": 1053.3,
        "HD": 283.1935,
        "Angle": 30.52023
    },
    {
        "MD": 1148.27,
        "TVD": 1078.73,
        "HD": 298.185,
        "Angle": 30.54903
    },
    {
        "MD": 1178.24,
        "TVD": 1104.54,
        "HD": 313.418,
        "Angle": 30.50962
    },
    {
        "MD": 1206.48,
        "TVD": 1128.87,
        "HD": 327.755,
        "Angle": 30.52163
    },
    {
        "MD": 1235.42,
        "TVD": 1153.8,
        "HD": 342.4526,
        "Angle": 30.51084
    },
    {
        "MD": 1264.38,
        "TVD": 1178.75,
        "HD": 357.1556,
        "Angle": 30.53898
    },
    {
        "MD": 1293.36,
        "TVD": 1203.71,
        "HD": 371.881,
        "Angle": 30.51142
    },
    {
        "MD": 1322.68,
        "TVD": 1228.97,
        "HD": 386.7671,
        "Angle": 30.46812
    },
    {
        "MD": 1351.14,
        "TVD": 1253.5,
        "HD": 401.198,
        "Angle": 30.43281
    },
    {
        "MD": 1380.1,
        "TVD": 1278.47,
        "HD": 415.867,
        "Angle": 30.34334
    },
    {
        "MD": 1409.3,
        "TVD": 1303.67,
        "HD": 430.6183,
        "Angle": 30.32096
    },
    {
        "MD": 1437.08,
        "TVD": 1327.65,
        "HD": 444.6429,
        "Angle": 30.32737
    },
    {
        "MD": 1467.26,
        "TVD": 1353.7,
        "HD": 459.882,
        "Angle": 30.52002
    },
    {
        "MD": 1497.43,
        "TVD": 1379.69,
        "HD": 475.2035,
        "Angle": 30.54214
    },
    {
        "MD": 1526.26,
        "TVD": 1404.52,
        "HD": 489.8541,
        "Angle": 30.51742
    },
    {
        "MD": 1555.28,
        "TVD": 1429.52,
        "HD": 504.5904,
        "Angle": 30.57475
    },
    {
        "MD": 1584.05,
        "TVD": 1454.29,
        "HD": 519.2246,
        "Angle": 30.58297
    },
    {
        "MD": 1613.38,
        "TVD": 1479.54,
        "HD": 534.1473,
        "Angle": 30.49052
    },
    {
        "MD": 1642.45,
        "TVD": 1504.59,
        "HD": 548.8973,
        "Angle": 30.45302
    },
    {
        "MD": 1671.3,
        "TVD": 1529.46,
        "HD": 563.5194,
        "Angle": 30.39877
    },
    {
        "MD": 1727.31,
        "TVD": 1577.77,
        "HD": 591.8613,
        "Angle": 30.47163
    },
    {
        "MD": 1756.56,
        "TVD": 1602.98,
        "HD": 606.6943,
        "Angle": 30.50284
    },
    {
        "MD": 1784.74,
        "TVD": 1627.26,
        "HD": 620.998,
        "Angle": 30.46472
    },
    {
        "MD": 1814.51,
        "TVD": 1652.92,
        "HD": 636.0916,
        "Angle": 30.34548
    },
    {
        "MD": 1843.56,
        "TVD": 1677.99,
        "HD": 650.768,
        "Angle": 30.3245
    },
    {
        "MD": 1872.43,
        "TVD": 1702.91,
        "HD": 665.3444,
        "Angle": 30.26731
    },
    {
        "MD": 1901.48,
        "TVD": 1728,
        "HD": 679.9866,
        "Angle": 30.15131
    },
    {
        "MD": 1931.34,
        "TVD": 1753.82,
        "HD": 694.9848,
        "Angle": 30.21775
    },
    {
        "MD": 1959.6,
        "TVD": 1778.24,
        "HD": 709.2078,
        "Angle": 30.54989
    },
    {
        "MD": 1988.92,
        "TVD": 1803.49,
        "HD": 724.1108,
        "Angle": 30.77978
    },
    {
        "MD": 2018.24,
        "TVD": 1828.68,
        "HD": 739.115,
        "Angle": 30.80646
    },
    {
        "MD": 2046.66,
        "TVD": 1853.09,
        "HD": 753.67,
        "Angle": 30.82247
    },
    {
        "MD": 2075.83,
        "TVD": 1878.14,
        "HD": 768.6161,
        "Angle": 30.84034
    },
    {
        "MD": 2106.24,
        "TVD": 1904.25,
        "HD": 784.2057,
        "Angle": 30.86003
    },
    {
        "MD": 2134.14,
        "TVD": 1928.2,
        "HD": 798.5168,
        "Angle": 30.86247
    },
    {
        "MD": 2163.66,
        "TVD": 1953.54,
        "HD": 813.66,
        "Angle": 30.84641
    },
    {
        "MD": 2193.21,
        "TVD": 1978.91,
        "HD": 828.8114,
        "Angle": 30.82313
    },
    {
        "MD": 2221.6,
        "TVD": 2003.29,
        "HD": 843.3581,
        "Angle": 30.80323
    },
    {
        "MD": 2251.16,
        "TVD": 2028.68,
        "HD": 858.4955,
        "Angle": 30.6113
    },
    {
        "MD": 2280.15,
        "TVD": 2053.63,
        "HD": 873.2576,
        "Angle": 30.35618
    },
    {
        "MD": 2309.18,
        "TVD": 2078.68,
        "HD": 887.9286,
        "Angle": 30.26735
    },
    {
        "MD": 2338.45,
        "TVD": 2103.96,
        "HD": 902.6817,
        "Angle": 30.26007
    },
    {
        "MD": 2367.22,
        "TVD": 2128.81,
        "HD": 917.1796,
        "Angle": 30.2982
    },
    {
        "MD": 2397.53,
        "TVD": 2154.98,
        "HD": 932.471,
        "Angle": 30.20225
    },
    {
        "MD": 2425.45,
        "TVD": 2179.11,
        "HD": 946.5163,
        "Angle": 30.25465
    },
    {
        "MD": 2448.43,
        "TVD": 2198.96,
        "HD": 958.0947,
        "Angle": 30.48045
    },
    {
        "MD": 2478.17,
        "TVD": 2224.59,
        "HD": 973.1801,
        "Angle": 30.62563
    },
    {
        "MD": 2506.56,
        "TVD": 2249.02,
        "HD": 987.6427,
        "Angle": 30.5789
    },
    {
        "MD": 2535.61,
        "TVD": 2274.03,
        "HD": 1002.421,
        "Angle": 30.65399
    },
    {
        "MD": 2542.48,
        "TVD": 2279.94,
        "HD": 1005.924,
        "Angle": 30.66354
    },
    {
        "MD": 2553.78,
        "TVD": 2289.66,
        "HD": 1011.687,
        "Angle": 0
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
        "Angle": 0
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
        "TVD": 2525,
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
        "Angle": 0
    }
];

const casingData = [
  { section: "Casing", size: '30"',      fromMD: 0,      toMD: 110.78,   ID: 28,     OD: 1,     roughness: 0.001 },
  { section: "Casing", size: '20"',      fromMD: 0,      toMD: 328.78,   ID: 18.73,  OD: 0.635, roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',  fromMD: 0,      toMD: 1694.78,  ID: 12.347, OD: 0.514, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',   fromMD: 0,      toMD: 2440.78,  ID: 8.681,  OD: 0.472, roughness: 0.001 },
  { section: "Liner",   size: '7"',      fromMD: 2303.78, toMD: 2553.78, ID: 6.184,  OD: 0.408, roughness: 0.001 }
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
  resPressure: 158.9668,
  temperature: 107,
  c: 7.60e-6,
  n: 0.8,
  OGR: '84 sm3/mmsm3',
  WGR: '145 sm3/mmsm3',
  soilTempC: 30,
  chokeGasCoef: null,
  WTDate: "2024-04-02" 
};


function B121_1() {
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

export default B121_1
