import React from 'react'

const trajectoryData = [
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 46.5,
        "TVD": 46.5,
        "HD": 0,
        "Angle": 1.061412
    },
    {
        "MD": 104.78,
        "TVD": 104.77,
        "HD": 1.079583,
        "Angle": 2.237593
    },
    {
        "MD": 131.01,
        "TVD": 130.98,
        "HD": 2.103693,
        "Angle": 3.365008
    },
    {
        "MD": 160.01,
        "TVD": 159.93,
        "HD": 3.805897,
        "Angle": 6.096577
    },
    {
        "MD": 188.3,
        "TVD": 188.06,
        "HD": 6.810427,
        "Angle": 8.601603
    },
    {
        "MD": 216.75,
        "TVD": 216.19,
        "HD": 11.06549,
        "Angle": 10.34912
    },
    {
        "MD": 245.64,
        "TVD": 244.61,
        "HD": 16.25546,
        "Angle": 11.93102
    },
    {
        "MD": 274.34,
        "TVD": 272.69,
        "HD": 22.18872,
        "Angle": 14.27859
    },
    {
        "MD": 303.15,
        "TVD": 300.61,
        "HD": 29.29433,
        "Angle": 15.98143
    },
    {
        "MD": 331.87,
        "TVD": 328.22,
        "HD": 37.20169,
        "Angle": 16.99849
    },
    {
        "MD": 358.88,
        "TVD": 354.05,
        "HD": 45.09796,
        "Angle": 18.07935
    },
    {
        "MD": 370.83,
        "TVD": 365.41,
        "HD": 48.80645,
        "Angle": 18.44458
    },
    {
        "MD": 388.35,
        "TVD": 382.03,
        "HD": 54.34956,
        "Angle": 19.54564
    },
    {
        "MD": 416.81,
        "TVD": 408.85,
        "HD": 63.87107,
        "Angle": 21.58284
    },
    {
        "MD": 445.05,
        "TVD": 435.11,
        "HD": 74.25904,
        "Angle": 23.29898
    },
    {
        "MD": 473.5,
        "TVD": 461.24,
        "HD": 85.51185,
        "Angle": 25.08938
    },
    {
        "MD": 502.54,
        "TVD": 487.54,
        "HD": 97.82573,
        "Angle": 26.96142
    },
    {
        "MD": 530.97,
        "TVD": 512.88,
        "HD": 110.7156,
        "Angle": 28.67544
    },
    {
        "MD": 559.67,
        "TVD": 538.06,
        "HD": 124.4872,
        "Angle": 30.10291
    },
    {
        "MD": 588.66,
        "TVD": 563.14,
        "HD": 139.0273,
        "Angle": 31.28905
    },
    {
        "MD": 617.4,
        "TVD": 587.7,
        "HD": 153.9536,
        "Angle": 31.58062
    },
    {
        "MD": 645.76,
        "TVD": 611.86,
        "HD": 168.8057,
        "Angle": 31.08673
    },
    {
        "MD": 674.1,
        "TVD": 636.13,
        "HD": 183.4386,
        "Angle": 30.47938
    },
    {
        "MD": 702.25,
        "TVD": 660.39,
        "HD": 197.7171,
        "Angle": 30.20929
    },
    {
        "MD": 730.82,
        "TVD": 685.08,
        "HD": 212.0924,
        "Angle": 30.16652
    },
    {
        "MD": 759.1,
        "TVD": 709.53,
        "HD": 226.3035,
        "Angle": 30.2635
    },
    {
        "MD": 787.35,
        "TVD": 733.93,
        "HD": 240.5408,
        "Angle": 30.28507
    },
    {
        "MD": 816.44,
        "TVD": 759.05,
        "HD": 255.211,
        "Angle": 30.28904
    },
    {
        "MD": 844.79,
        "TVD": 783.53,
        "HD": 269.5097,
        "Angle": 30.20046
    },
    {
        "MD": 873.45,
        "TVD": 808.3,
        "HD": 283.9264,
        "Angle": 30.25065
    },
    {
        "MD": 901.65,
        "TVD": 832.66,
        "HD": 298.1331,
        "Angle": 30.22012
    },
    {
        "MD": 930.2,
        "TVD": 857.33,
        "HD": 312.503,
        "Angle": 30.23881
    },
    {
        "MD": 959.23,
        "TVD": 882.41,
        "HD": 327.1227,
        "Angle": 30.2138
    },
    {
        "MD": 987.35,
        "TVD": 906.71,
        "HD": 341.2735,
        "Angle": 30.21818
    },
    {
        "MD": 1015.83,
        "TVD": 931.32,
        "HD": 355.6073,
        "Angle": 30.26364
    },
    {
        "MD": 1044.52,
        "TVD": 956.1,
        "HD": 370.0664,
        "Angle": 30.22676
    },
    {
        "MD": 1072.69,
        "TVD": 980.44,
        "HD": 384.2479,
        "Angle": 30.23378
    },
    {
        "MD": 1101.95,
        "TVD": 1005.72,
        "HD": 398.9812,
        "Angle": 30.22971
    },
    {
        "MD": 1130.85,
        "TVD": 1030.69,
        "HD": 413.5314,
        "Angle": 30.24436
    },
    {
        "MD": 1160.09,
        "TVD": 1055.95,
        "HD": 428.2592,
        "Angle": 30.26026
    },
    {
        "MD": 1189.3,
        "TVD": 1081.18,
        "HD": 442.979,
        "Angle": 30.25099
    },
    {
        "MD": 1217.94,
        "TVD": 1105.92,
        "HD": 457.4075,
        "Angle": 30.31343
    },
    {
        "MD": 1247.05,
        "TVD": 1131.05,
        "HD": 472.1002,
        "Angle": 30.34493
    },
    {
        "MD": 1276.32,
        "TVD": 1156.31,
        "HD": 486.8875,
        "Angle": 30.30693
    },
    {
        "MD": 1304.93,
        "TVD": 1181.01,
        "HD": 501.3251,
        "Angle": 30.2482
    },
    {
        "MD": 1334.53,
        "TVD": 1206.58,
        "HD": 516.236,
        "Angle": 30.26364
    },
    {
        "MD": 1363.22,
        "TVD": 1231.36,
        "HD": 530.6951,
        "Angle": 30.22971
    },
    {
        "MD": 1392.12,
        "TVD": 1256.33,
        "HD": 545.2454,
        "Angle": 30.09315
    },
    {
        "MD": 1420.98,
        "TVD": 1281.3,
        "HD": 559.716,
        "Angle": 30.12745
    },
    {
        "MD": 1450.22,
        "TVD": 1306.59,
        "HD": 574.3923,
        "Angle": 30.21454
    },
    {
        "MD": 1460.01,
        "TVD": 1315.05,
        "HD": 579.319,
        "Angle": 30.07335
    },
    {
        "MD": 1479.25,
        "TVD": 1331.7,
        "HD": 588.9603,
        "Angle": 30.28332
    },
    {
        "MD": 1508.27,
        "TVD": 1356.76,
        "HD": 603.5944,
        "Angle": 30.53359
    },
    {
        "MD": 1537.26,
        "TVD": 1381.73,
        "HD": 618.3226,
        "Angle": 30.43967
    },
    {
        "MD": 1566.57,
        "TVD": 1407,
        "HD": 633.1719,
        "Angle": 30.43022
    },
    {
        "MD": 1595.68,
        "TVD": 1432.1,
        "HD": 647.9158,
        "Angle": 30.44344
    },
    {
        "MD": 1624.04,
        "TVD": 1456.55,
        "HD": 662.2855,
        "Angle": 30.45834
    },
    {
        "MD": 1653.17,
        "TVD": 1481.66,
        "HD": 677.0518,
        "Angle": 30.55088
    },
    {
        "MD": 1682.2,
        "TVD": 1506.66,
        "HD": 691.8079,
        "Angle": 30.45834
    },
    {
        "MD": 1711.33,
        "TVD": 1531.77,
        "HD": 706.5742,
        "Angle": 30.67878
    },
    {
        "MD": 1740.41,
        "TVD": 1556.78,
        "HD": 721.4115,
        "Angle": 30.8923
    },
    {
        "MD": 1769.24,
        "TVD": 1581.52,
        "HD": 736.2136,
        "Angle": 30.92605
    },
    {
        "MD": 1798.29,
        "TVD": 1606.44,
        "HD": 751.1433,
        "Angle": 30.84377
    },
    {
        "MD": 1827.35,
        "TVD": 1631.39,
        "HD": 766.0423,
        "Angle": 30.87381
    },
    {
        "MD": 1856.99,
        "TVD": 1656.83,
        "HD": 781.2521,
        "Angle": 30.94803
    },
    {
        "MD": 1886.07,
        "TVD": 1681.77,
        "HD": 796.2068,
        "Angle": 31.01914
    },
    {
        "MD": 1915.09,
        "TVD": 1706.64,
        "HD": 811.1615,
        "Angle": 30.87768
    },
    {
        "MD": 1943.1,
        "TVD": 1730.68,
        "HD": 825.5364,
        "Angle": 30.85492
    },
    {
        "MD": 1973.27,
        "TVD": 1756.58,
        "HD": 841.0096,
        "Angle": 30.92993
    },
    {
        "MD": 2001.68,
        "TVD": 1780.95,
        "HD": 855.612,
        "Angle": 30.88653
    },
    {
        "MD": 2030.45,
        "TVD": 1805.64,
        "HD": 870.3808,
        "Angle": 30.90902
    },
    {
        "MD": 2059.32,
        "TVD": 1830.41,
        "HD": 885.2106,
        "Angle": 30.6228
    },
    {
        "MD": 2087.5,
        "TVD": 1854.66,
        "HD": 899.5651,
        "Angle": 30.48851
    },
    {
        "MD": 2117.08,
        "TVD": 1880.15,
        "HD": 914.5729,
        "Angle": 30.40448
    },
    {
        "MD": 2146.02,
        "TVD": 1905.11,
        "HD": 929.2195,
        "Angle": 30.36021
    },
    {
        "MD": 2175.48,
        "TVD": 1930.53,
        "HD": 944.1096,
        "Angle": 30.38835
    },
    {
        "MD": 2204.45,
        "TVD": 1955.52,
        "HD": 958.7643,
        "Angle": 30.31054
    },
    {
        "MD": 2215.35,
        "TVD": 1964.93,
        "HD": 964.2654,
        "Angle": 30.0273
    },
    {
        "MD": 2237.33,
        "TVD": 1983.96,
        "HD": 975.2645,
        "Angle": 30.14919
    },
    {
        "MD": 2265.42,
        "TVD": 2008.25,
        "HD": 989.3728,
        "Angle": 30.21025
    },
    {
        "MD": 2294.43,
        "TVD": 2033.32,
        "HD": 1003.97,
        "Angle": 30.4071
    },
    {
        "MD": 2337.76,
        "TVD": 2070.69,
        "HD": 1025.901,
        "Angle": 30.80624
    },
    {
        "MD": 2352.36,
        "TVD": 2083.23,
        "HD": 1033.378,
        "Angle": 30.77348
    },
    {
        "MD": 2372.53,
        "TVD": 2100.56,
        "HD": 1043.698,
        "Angle": 30.88983
    },
    {
        "MD": 2382.4,
        "TVD": 2109.03,
        "HD": 1048.765,
        "Angle": 30.93985
    },
    {
        "MD": 2392.52,
        "TVD": 2117.71,
        "HD": 1053.968,
        "Angle": 31.44785
    },
    {
        "MD": 2441.47,
        "TVD": 2159.47,
        "HD": 1079.507,
        "Angle": 30.55293
    },
    {
        "MD": 2469.92,
        "TVD": 2183.97,
        "HD": 1093.969,
        "Angle": 28.1908
    },
    {
        "MD": 2498.92,
        "TVD": 2209.53,
        "HD": 1107.669,
        "Angle": 27.55793
    },
    {
        "MD": 2529.24,
        "TVD": 2236.41,
        "HD": 1121.696,
        "Angle": 28.96542
    },
    {
        "MD": 2557.7,
        "TVD": 2261.31,
        "HD": 1135.479,
        "Angle": 29.95643
    },
    {
        "MD": 2585.77,
        "TVD": 2285.63,
        "HD": 1149.495,
        "Angle": 29.7731
    },
    {
        "MD": 2616.3,
        "TVD": 2312.13,
        "HD": 1164.655,
        "Angle": 29.49602
    },
    {
        "MD": 2644.77,
        "TVD": 2336.91,
        "HD": 1178.673,
        "Angle": 29.34663
    },
    {
        "MD": 2673.68,
        "TVD": 2362.11,
        "HD": 1192.841,
        "Angle": 29.08323
    },
    {
        "MD": 2702.47,
        "TVD": 2387.27,
        "HD": 1206.836,
        "Angle": 29.05124
    },
    {
        "MD": 2731.64,
        "TVD": 2412.77,
        "HD": 1221,
        "Angle": 29.2024
    },
    {
        "MD": 2760.83,
        "TVD": 2438.25,
        "HD": 1235.242,
        "Angle": 29.87341
    },
    {
        "MD": 2789.73,
        "TVD": 2463.31,
        "HD": 1249.637,
        "Angle": 29.99866
    },
    {
        "MD": 2818.32,
        "TVD": 2488.07,
        "HD": 1263.931,
        "Angle": 29.48249
    },
    {
        "MD": 2846.97,
        "TVD": 2513.01,
        "HD": 1278.031,
        "Angle": 29.34836
    },
    {
        "MD": 2876.5,
        "TVD": 2538.75,
        "HD": 1292.505,
        "Angle": 0
    },
    {
        "MD": 2944.26,
        "TVD": 2187.34,
        "HD": 1862.548,
        "Angle": 46.60889
    },
    {
        "MD": 2972.82,
        "TVD": 2206.96,
        "HD": 1883.302,
        "Angle": 47.37638
    },
    {
        "MD": 3001.04,
        "TVD": 2226.07,
        "HD": 1904.067,
        "Angle": 47.8222
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
  { section: "Casing", size: '30"',         fromMD: 0,     toMD: 116.35,   ID: 28,    OD: 30, roughness: 0.001 },
  { section: "Casing", size: '20"',         fromMD: 0,     toMD: 386.35,   ID: 18.73, OD: 20, roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',     fromMD: 0,     toMD: 1474.35,  ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',      fromMD: 0,     toMD: 2698.35,  ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',         fromMD: 2074.35, toMD: 2906.35, ID: 6.184, OD: 7, roughness: 0.001 }
];

const tubingData = [
  { toMD: 2749.95, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 1',       type: 'SSSV',  MD: 153.68, enabled: true },
  { name: 'Packer 1',     type: 'Pk 1',  MD: 2670.59, enabled: true },
  { name: 'Packer GP',    type: 'GP',    MD: 2704.02, enabled: true },
  { name: 'Sleeve 1',     type: 'Sleeve',MD: 2705.7, enabled: false },
  { name: 'NA',           type: 'NA',    MD: 2764.6, enabled: true }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2764.6,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 128.9668,
  temperature: 107,
  c: 5.40e-7,
  n: 0.8,
  OGR: '128 sm3/mmsm3',
  WGR: '85 sm3/mmsm3',
  soilTempC: 30,                  // °C
  chokeGasCoef: 0.85,
  WTDate: "2024-06-16"    
};

// const meta = {
//   soilTempC: 30,                  // °C
//   chokeGasCoef: 0.85,
//   WTDate: "2024-06-16"            // ISO 8601 date
// };

// const notes = `
//   - Choke gas coefficient applied: 0.85  
//   - Well test performed on 16 June 2024
// `;

function C24P42() {
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

export default C24P42
