import React from 'react'


const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 41.8,
    "TVD": 41.8,
    "HD": 0.0,
    "Angle": 3.418487
  },
  {
    "MD": 47.42,
    "TVD": 47.41,
    "HD": 0.3351119,
    "Angle": 1.474261
  },
  {
    "MD": 77.63,
    "TVD": 77.61,
    "HD": 1.112351,
    "Angle": 2.299972
  },
  {
    "MD": 114.87,
    "TVD": 114.82,
    "HD": 2.606841,
    "Angle": 2.591667
  },
  {
    "MD": 144.2,
    "TVD": 144.12,
    "HD": 3.933076,
    "Angle": 3.777972
  },
  {
    "MD": 171.81,
    "TVD": 171.67,
    "HD": 5.752306,
    "Angle": 4.234944
  },
  {
    "MD": 201.11,
    "TVD": 200.89,
    "HD": 7.916007,
    "Angle": 4.818062
  },
  {
    "MD": 229.41,
    "TVD": 229.09,
    "HD": 10.29298,
    "Angle": 5.008419
  },
  {
    "MD": 258.22,
    "TVD": 257.79,
    "HD": 12.80815,
    "Angle": 5.061435
  },
  {
    "MD": 286.43,
    "TVD": 285.89,
    "HD": 15.29695,
    "Angle": 5.188203
  },
  {
    "MD": 315.72,
    "TVD": 315.06,
    "HD": 17.94557,
    "Angle": 5.274505
  },
  {
    "MD": 344.06,
    "TVD": 343.28,
    "HD": 20.5508,
    "Angle": 5.133254
  },
  {
    "MD": 366.5,
    "TVD": 365.63,
    "HD": 22.55856,
    "Angle": 5.627957
  },
  {
    "MD": 389.32,
    "TVD": 388.34,
    "HD": 24.79648,
    "Angle": 7.37767
  },
  {
    "MD": 418.31,
    "TVD": 417.09,
    "HD": 28.51906,
    "Angle": 9.88408
  },
  {
    "MD": 447.28,
    "TVD": 445.63,
    "HD": 33.49192,
    "Angle": 12.50657
  },
  {
    "MD": 476.78,
    "TVD": 474.43,
    "HD": 39.88019,
    "Angle": 14.91869
  },
  {
    "MD": 503.48,
    "TVD": 500.23,
    "HD": 46.75405,
    "Angle": 17.56028
  },
  {
    "MD": 532.45,
    "TVD": 527.85,
    "HD": 55.49456,
    "Angle": 19.93004
  },
  {
    "MD": 561.67,
    "TVD": 555.32,
    "HD": 65.45485,
    "Angle": 20.36765
  },
  {
    "MD": 590.94,
    "TVD": 582.76,
    "HD": 75.64207,
    "Angle": 20.64983
  },
  {
    "MD": 618.49,
    "TVD": 608.54,
    "HD": 85.35773,
    "Angle": 23.43608
  },
  {
    "MD": 647.34,
    "TVD": 635.01,
    "HD": 96.83212,
    "Angle": 26.66141
  },
  {
    "MD": 673.58,
    "TVD": 658.46,
    "HD": 108.6065,
    "Angle": 28.05745
  },
  {
    "MD": 702.17,
    "TVD": 683.69,
    "HD": 122.054,
    "Angle": 27.98761
  },
  {
    "MD": 730.9,
    "TVD": 709.06,
    "HD": 135.5364,
    "Angle": 28.01715
  },
  {
    "MD": 759.4,
    "TVD": 734.22,
    "HD": 148.9239,
    "Angle": 27.90957
  },
  {
    "MD": 787.17,
    "TVD": 758.76,
    "HD": 161.9224,
    "Angle": 28.00682
  },
  {
    "MD": 817.74,
    "TVD": 785.75,
    "HD": 176.2773,
    "Angle": 28.26217
  },
  {
    "MD": 847.1,
    "TVD": 811.61,
    "HD": 190.1795,
    "Angle": 28.45614
  },
  {
    "MD": 874.0,
    "TVD": 835.26,
    "HD": 202.997,
    "Angle": 28.41572
  },
  {
    "MD": 908.86,
    "TVD": 865.92,
    "HD": 219.5856,
    "Angle": 28.29352
  },
  {
    "MD": 931.46,
    "TVD": 885.82,
    "HD": 230.2978,
    "Angle": 28.17872
  },
  {
    "MD": 960.4,
    "TVD": 911.33,
    "HD": 243.9639,
    "Angle": 28.13215
  },
  {
    "MD": 989.18,
    "TVD": 936.71,
    "HD": 257.5339,
    "Angle": 28.18518
  },
  {
    "MD": 1018.36,
    "TVD": 962.43,
    "HD": 271.3163,
    "Angle": 28.12782
  },
  {
    "MD": 1046.81,
    "TVD": 987.52,
    "HD": 284.7287,
    "Angle": 27.9035
  },
  {
    "MD": 1075.71,
    "TVD": 1013.06,
    "HD": 298.2535,
    "Angle": 28.01682
  },
  {
    "MD": 1104.04,
    "TVD": 1038.07,
    "HD": 311.5609,
    "Angle": 28.06021
  },
  {
    "MD": 1133.22,
    "TVD": 1063.82,
    "HD": 325.2872,
    "Angle": 28.1711
  },
  {
    "MD": 1161.5,
    "TVD": 1088.75,
    "HD": 338.6383,
    "Angle": 28.20088
  },
  {
    "MD": 1189.89,
    "TVD": 1113.77,
    "HD": 352.0544,
    "Angle": 28.20448
  },
  {
    "MD": 1220.21,
    "TVD": 1140.49,
    "HD": 366.3843,
    "Angle": 28.00751
  },
  {
    "MD": 1248.9,
    "TVD": 1165.82,
    "HD": 379.8567,
    "Angle": 28.07497
  },
  {
    "MD": 1277.71,
    "TVD": 1191.24,
    "HD": 393.4155,
    "Angle": 28.09955
  },
  {
    "MD": 1306.81,
    "TVD": 1216.91,
    "HD": 407.1217,
    "Angle": 28.00494
  },
  {
    "MD": 1336.53,
    "TVD": 1243.15,
    "HD": 421.0767,
    "Angle": 27.99295
  },
  {
    "MD": 1364.48,
    "TVD": 1267.83,
    "HD": 434.1954,
    "Angle": 27.97768
  },
  {
    "MD": 1393.23,
    "TVD": 1293.22,
    "HD": 447.6828,
    "Angle": 27.86111
  },
  {
    "MD": 1422.13,
    "TVD": 1318.77,
    "HD": 461.1886,
    "Angle": 28.01853
  },
  {
    "MD": 1450.03,
    "TVD": 1343.4,
    "HD": 474.2949,
    "Angle": 28.22429
  },
  {
    "MD": 1472.15,
    "TVD": 1362.89,
    "HD": 484.7559,
    "Angle": 28.11289
  },
  {
    "MD": 1507.58,
    "TVD": 1394.14,
    "HD": 501.4509,
    "Angle": 28.01616
  },
  {
    "MD": 1536.85,
    "TVD": 1419.98,
    "HD": 515.1996,
    "Angle": 27.95218
  },
  {
    "MD": 1565.48,
    "TVD": 1445.27,
    "HD": 528.6195,
    "Angle": 27.98106
  },
  {
    "MD": 1592.94,
    "TVD": 1469.52,
    "HD": 541.5032,
    "Angle": 27.97933
  },
  {
    "MD": 1622.2,
    "TVD": 1495.36,
    "HD": 555.2306,
    "Angle": 28.03315
  },
  {
    "MD": 1651.35,
    "TVD": 1521.09,
    "HD": 568.9306,
    "Angle": 28.01378
  },
  {
    "MD": 1683.1,
    "TVD": 1549.12,
    "HD": 583.843,
    "Angle": 27.94908
  },
  {
    "MD": 1709.85,
    "TVD": 1572.75,
    "HD": 596.3804,
    "Angle": 28.03744
  },
  {
    "MD": 1738.48,
    "TVD": 1598.02,
    "HD": 609.8379,
    "Angle": 28.01104
  },
  {
    "MD": 1766.48,
    "TVD": 1622.74,
    "HD": 622.9879,
    "Angle": 27.97614
  },
  {
    "MD": 1796.26,
    "TVD": 1649.04,
    "HD": 636.9578,
    "Angle": 28.03765
  },
  {
    "MD": 1825.06,
    "TVD": 1674.46,
    "HD": 650.4953,
    "Angle": 28.01389
  },
  {
    "MD": 1854.42,
    "TVD": 1700.38,
    "HD": 664.2852,
    "Angle": 27.98328
  },
  {
    "MD": 1882.56,
    "TVD": 1725.23,
    "HD": 677.4889,
    "Angle": 28.07497
  },
  {
    "MD": 1911.37,
    "TVD": 1750.65,
    "HD": 691.0477,
    "Angle": 28.02013
  },
  {
    "MD": 1940.12,
    "TVD": 1776.03,
    "HD": 704.5539,
    "Angle": 27.91429
  },
  {
    "MD": 1969.17,
    "TVD": 1801.7,
    "HD": 718.1537,
    "Angle": 27.99197
  },
  {
    "MD": 1996.78,
    "TVD": 1826.08,
    "HD": 731.1123,
    "Angle": 28.0455
  },
  {
    "MD": 2025.99,
    "TVD": 1851.86,
    "HD": 744.8461,
    "Angle": 27.8871
  },
  {
    "MD": 2055.44,
    "TVD": 1877.89,
    "HD": 758.6208,
    "Angle": 27.93608
  },
  {
    "MD": 2083.33,
    "TVD": 1902.53,
    "HD": 771.6868,
    "Angle": 28.22718
  },
  {
    "MD": 2111.5,
    "TVD": 1927.35,
    "HD": 785.0104,
    "Angle": 28.43863
  },
  {
    "MD": 2141.25,
    "TVD": 1953.51,
    "HD": 799.1778,
    "Angle": 28.49604
  },
  {
    "MD": 2170.47,
    "TVD": 1979.19,
    "HD": 813.1186,
    "Angle": 28.48168
  },
  {
    "MD": 2198.81,
    "TVD": 2004.1,
    "HD": 826.6334,
    "Angle": 28.3492
  },
  {
    "MD": 2227.41,
    "TVD": 2029.27,
    "HD": 840.2139,
    "Angle": 27.8956
  },
  {
    "MD": 2256.24,
    "TVD": 2054.75,
    "HD": 853.7023,
    "Angle": 27.23295
  },
  {
    "MD": 2285.65,
    "TVD": 2080.9,
    "HD": 867.1606,
    "Angle": 26.9748
  },
  {
    "MD": 2314.42,
    "TVD": 2106.54,
    "HD": 880.2107,
    "Angle": 27.06027
  },
  {
    "MD": 2343.56,
    "TVD": 2132.49,
    "HD": 893.4673,
    "Angle": 26.95461
  },
  {
    "MD": 2371.82,
    "TVD": 2157.68,
    "HD": 906.2771,
    "Angle": 27.01308
  },
  {
    "MD": 2401.06,
    "TVD": 2183.73,
    "HD": 919.5577,
    "Angle": 26.99087
  },
  {
    "MD": 2429.98,
    "TVD": 2209.5,
    "HD": 932.683,
    "Angle": 26.96333
  },
  {
    "MD": 2459.05,
    "TVD": 2235.41,
    "HD": 945.8639,
    "Angle": 26.87596
  },
  {
    "MD": 2487.38,
    "TVD": 2260.68,
    "HD": 958.6708,
    "Angle": 26.8987
  },
  {
    "MD": 2516.31,
    "TVD": 2286.48,
    "HD": 971.7592,
    "Angle": 26.85705
  },
  {
    "MD": 2545.05,
    "TVD": 2312.12,
    "HD": 984.7429,
    "Angle": 26.91181
  },
  {
    "MD": 2573.86,
    "TVD": 2337.81,
    "HD": 997.7829,
    "Angle": 26.94417
  },
  {
    "MD": 2602.51,
    "TVD": 2363.35,
    "HD": 1010.765,
    "Angle": 26.81756
  },
  {
    "MD": 2627.8,
    "TVD": 2385.92,
    "HD": 1022.174,
    "Angle": 26.90826
  },
  {
    "MD": 2643.04,
    "TVD": 2399.51,
    "HD": 1029.071,
    "Angle": 26.92812
  },
  {
    "MD": 2669.51,
    "TVD": 2423.11,
    "HD": 1041.059,
    "Angle": 27.21488
  },
  {
    "MD": 2699.41,
    "TVD": 2449.7,
    "HD": 1054.733,
    "Angle": 27.6464
  },
  {
    "MD": 2729.54,
    "TVD": 2476.39,
    "HD": 1068.714,
    "Angle": 27.53586
  },
  {
    "MD": 2756.2,
    "TVD": 2500.03,
    "HD": 1081.039,
    "Angle": 27.67346
  },
  {
    "MD": 2772.46,
    "TVD": 2514.43,
    "HD": 1088.591,
    "Angle": 27.84912
  },
  {
    "MD": 2793.7,
    "TVD": 2533.21,
    "HD": 1098.513,
    "Angle": 0.0
  },
  {
    "MD": 2881.23,
    "TVD": 2122.99,
    "HD": 1813.43,
    "Angle": 47.56075
  },
  {
    "MD": 2909.89,
    "TVD": 2142.33,
    "HD": 1834.581,
    "Angle": 47.55395
  },
  {
    "MD": 2938.65,
    "TVD": 2161.74,
    "HD": 1855.804,
    "Angle": 47.57345
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
  { section: "Casing", size: '30"',      fromMD: 0,      toMD: 108.7,   ID: 28,     OD: 30,     roughness: 0.001 },
  { section: "Casing", size: '20"',      fromMD: 0,      toMD: 384.7,   ID: 18.73,  OD: 20,     roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',  fromMD: 0,      toMD: 1487.7,  ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',   fromMD: 0,      toMD: 2642.7,  ID: 8.681,  OD: 9.625,  roughness: 0.001 },
  { section: "Liner",  size: '7"',       fromMD: 2503.7, toMD: 2793.7,  ID: 6.184,  OD: 7,      roughness: 0.001 }
];

const tubingData = [
  { toMD: 2647.46, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 3',        type: 'SSSV',         MD: 153.85,  enabled: true },
  { name: 'Packer Pk 3',   type: 'Packer',       MD: 2582.35, enabled: true },
  { name: 'Sliding sleeve',type: 'Sleeve 2',     MD: 2612.05, enabled: false },
  { name: 'Choke LN',      type: 'Choke',        MD: 2618.35, enabled: true },
  { name: 'Packer GP',     type: 'Packer',       MD: 2645.01, enabled: true }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2700.2,
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
  WTDate: "2020-08-10"
};

// const injectionData = [
//   { name: "MMG (dummy)", MD: 1068.95, injectionGasRate: "mmsm3/d" }
// ];


function C24P34() {
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

export default C24P34
