import React from 'react'

const trajectoryData = [
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 1.187897
    },
    {
        "MD": 46.53,
        "TVD": 46.52,
        "HD": 0.9646243,
        "Angle": 3.039963
    },
    {
        "MD": 103.38,
        "TVD": 103.29,
        "HD": 3.979521,
        "Angle": 4.821473
    },
    {
        "MD": 131.64,
        "TVD": 131.45,
        "HD": 6.35481,
        "Angle": 5.752567
    },
    {
        "MD": 159.44,
        "TVD": 159.11,
        "HD": 9.141277,
        "Angle": 7.539141
    },
    {
        "MD": 188.36,
        "TVD": 187.78,
        "HD": 12.93568,
        "Angle": 9.353641
    },
    {
        "MD": 216.94,
        "TVD": 215.98,
        "HD": 17.58072,
        "Angle": 10.14919
    },
    {
        "MD": 244.42,
        "TVD": 243.03,
        "HD": 22.42302,
        "Angle": 11.28782
    },
    {
        "MD": 273.37,
        "TVD": 271.42,
        "HD": 28.08963,
        "Angle": 12.69984
    },
    {
        "MD": 302.8,
        "TVD": 300.13,
        "HD": 34.55962,
        "Angle": 13.61823
    },
    {
        "MD": 330.9,
        "TVD": 327.44,
        "HD": 41.17581,
        "Angle": 14.57697
    },
    {
        "MD": 359.17,
        "TVD": 354.8,
        "HD": 48.29081,
        "Angle": 15.73764
    },
    {
        "MD": 368.24,
        "TVD": 363.53,
        "HD": 50.75089,
        "Angle": 16.72895
    },
    {
        "MD": 388.56,
        "TVD": 382.99,
        "HD": 56.59989,
        "Angle": 17.85947
    },
    {
        "MD": 416.16,
        "TVD": 409.26,
        "HD": 65.06435,
        "Angle": 19.54218
    },
    {
        "MD": 444.63,
        "TVD": 436.09,
        "HD": 74.58759,
        "Angle": 21.44875
    },
    {
        "MD": 473.22,
        "TVD": 462.7,
        "HD": 85.04206,
        "Angle": 23.54792
    },
    {
        "MD": 501.2,
        "TVD": 488.35,
        "HD": 96.22052,
        "Angle": 25.75902
    },
    {
        "MD": 529.78,
        "TVD": 514.09,
        "HD": 108.641,
        "Angle": 27.88043
    },
    {
        "MD": 558.21,
        "TVD": 539.22,
        "HD": 121.9357,
        "Angle": 29.77861
    },
    {
        "MD": 586.76,
        "TVD": 564,
        "HD": 136.115,
        "Angle": 31.65355
    },
    {
        "MD": 616.27,
        "TVD": 589.12,
        "HD": 151.6013,
        "Angle": 33.62377
    },
    {
        "MD": 644.84,
        "TVD": 612.91,
        "HD": 167.4216,
        "Angle": 35.45287
    },
    {
        "MD": 673.21,
        "TVD": 636.02,
        "HD": 183.8771,
        "Angle": 36.97721
    },
    {
        "MD": 701.65,
        "TVD": 658.74,
        "HD": 200.9837,
        "Angle": 38.84247
    },
    {
        "MD": 730.05,
        "TVD": 680.86,
        "HD": 218.7957,
        "Angle": 40.93744
    },
    {
        "MD": 759.08,
        "TVD": 702.79,
        "HD": 237.8171,
        "Angle": 43.06841
    },
    {
        "MD": 787.47,
        "TVD": 723.53,
        "HD": 257.2038,
        "Angle": 45.46244
    },
    {
        "MD": 815.8,
        "TVD": 743.4,
        "HD": 277.3972,
        "Angle": 47.7533
    },
    {
        "MD": 844.67,
        "TVD": 762.81,
        "HD": 298.7684,
        "Angle": 49.8137
    },
    {
        "MD": 873.03,
        "TVD": 781.11,
        "HD": 320.4341,
        "Angle": 51.13033
    },
    {
        "MD": 900.47,
        "TVD": 798.33,
        "HD": 341.7982,
        "Angle": 51.44954
    },
    {
        "MD": 929,
        "TVD": 816.11,
        "HD": 364.1103,
        "Angle": 51.25363
    },
    {
        "MD": 957.6,
        "TVD": 834.01,
        "HD": 386.4162,
        "Angle": 51.13769
    },
    {
        "MD": 986.16,
        "TVD": 851.93,
        "HD": 408.6546,
        "Angle": 51.19606
    },
    {
        "MD": 1014.82,
        "TVD": 869.89,
        "HD": 430.9892,
        "Angle": 51.29524
    },
    {
        "MD": 1043.27,
        "TVD": 887.68,
        "HD": 453.1909,
        "Angle": 51.30183
    },
    {
        "MD": 1071.98,
        "TVD": 905.63,
        "HD": 475.5977,
        "Angle": 51.25104
    },
    {
        "MD": 1100.85,
        "TVD": 923.7,
        "HD": 498.1133,
        "Angle": 51.23602
    },
    {
        "MD": 1130.03,
        "TVD": 941.97,
        "HD": 520.8658,
        "Angle": 51.13472
    },
    {
        "MD": 1159.13,
        "TVD": 960.23,
        "HD": 543.5238,
        "Angle": 51.09708
    },
    {
        "MD": 1188.27,
        "TVD": 978.53,
        "HD": 566.2008,
        "Angle": 51.09647
    },
    {
        "MD": 1217.33,
        "TVD": 996.78,
        "HD": 588.8155,
        "Angle": 51.14522
    },
    {
        "MD": 1246.07,
        "TVD": 1014.81,
        "HD": 611.1964,
        "Angle": 51.10295
    },
    {
        "MD": 1275.15,
        "TVD": 1033.07,
        "HD": 633.8287,
        "Angle": 51.03637
    },
    {
        "MD": 1304.22,
        "TVD": 1051.35,
        "HD": 656.4319,
        "Angle": 51.0523
    },
    {
        "MD": 1333.3,
        "TVD": 1069.63,
        "HD": 679.048,
        "Angle": 51.07697
    },
    {
        "MD": 1362.3,
        "TVD": 1087.85,
        "HD": 701.6097,
        "Angle": 51.04112
    },
    {
        "MD": 1392.2,
        "TVD": 1106.65,
        "HD": 724.8599,
        "Angle": 51.00956
    },
    {
        "MD": 1421.73,
        "TVD": 1125.23,
        "HD": 747.8121,
        "Angle": 51.00788
    },
    {
        "MD": 1449.32,
        "TVD": 1142.59,
        "HD": 769.256,
        "Angle": 50.92003
    },
    {
        "MD": 1478,
        "TVD": 1160.67,
        "HD": 791.5193,
        "Angle": 50.97442
    },
    {
        "MD": 1507.46,
        "TVD": 1179.22,
        "HD": 814.4057,
        "Angle": 51.03962
    },
    {
        "MD": 1537.2,
        "TVD": 1197.92,
        "HD": 837.531,
        "Angle": 51.0574
    },
    {
        "MD": 1565.79,
        "TVD": 1215.89,
        "HD": 859.7676,
        "Angle": 50.99752
    },
    {
        "MD": 1595.36,
        "TVD": 1234.5,
        "HD": 882.747,
        "Angle": 50.99918
    },
    {
        "MD": 1623.93,
        "TVD": 1252.48,
        "HD": 904.9498,
        "Angle": 51.00139
    },
    {
        "MD": 1653.28,
        "TVD": 1270.95,
        "HD": 927.7595,
        "Angle": 51.01017
    },
    {
        "MD": 1682.27,
        "TVD": 1289.19,
        "HD": 950.2922,
        "Angle": 51.0279
    },
    {
        "MD": 1710.81,
        "TVD": 1307.14,
        "HD": 972.4807,
        "Angle": 51.00359
    },
    {
        "MD": 1739.78,
        "TVD": 1325.37,
        "HD": 994.9957,
        "Angle": 51.01506
    },
    {
        "MD": 1768.63,
        "TVD": 1343.52,
        "HD": 1017.421,
        "Angle": 51.01719
    },
    {
        "MD": 1797.99,
        "TVD": 1361.99,
        "HD": 1040.244,
        "Angle": 51.06149
    },
    {
        "MD": 1808.03,
        "TVD": 1368.3,
        "HD": 1048.053,
        "Angle": 51.2528
    },
    {
        "MD": 1823.56,
        "TVD": 1378.02,
        "HD": 1060.165,
        "Angle": 51.6618
    },
    {
        "MD": 1852.03,
        "TVD": 1395.68,
        "HD": 1082.496,
        "Angle": 51.51398
    },
    {
        "MD": 1880.52,
        "TVD": 1413.41,
        "HD": 1104.797,
        "Angle": 51.3658
    },
    {
        "MD": 1909.19,
        "TVD": 1431.31,
        "HD": 1127.192,
        "Angle": 51.28876
    },
    {
        "MD": 1937.62,
        "TVD": 1449.09,
        "HD": 1149.376,
        "Angle": 51.22035
    },
    {
        "MD": 1965.88,
        "TVD": 1466.79,
        "HD": 1171.407,
        "Angle": 51.42415
    },
    {
        "MD": 1994.33,
        "TVD": 1484.53,
        "HD": 1193.649,
        "Angle": 51.6003
    },
    {
        "MD": 2020.91,
        "TVD": 1501.04,
        "HD": 1214.479,
        "Angle": 51.81187
    },
    {
        "MD": 2049.41,
        "TVD": 1518.66,
        "HD": 1236.88,
        "Angle": 51.8804
    },
    {
        "MD": 2078.65,
        "TVD": 1536.71,
        "HD": 1259.884,
        "Angle": 51.83726
    },
    {
        "MD": 2108.04,
        "TVD": 1554.87,
        "HD": 1282.992,
        "Angle": 51.90432
    },
    {
        "MD": 2136.55,
        "TVD": 1572.46,
        "HD": 1305.429,
        "Angle": 52.50161
    },
    {
        "MD": 2166.53,
        "TVD": 1590.71,
        "HD": 1329.214,
        "Angle": 53.15946
    },
    {
        "MD": 2195.8,
        "TVD": 1608.26,
        "HD": 1352.639,
        "Angle": 53.19393
    },
    {
        "MD": 2224.96,
        "TVD": 1625.73,
        "HD": 1375.986,
        "Angle": 53.02748
    },
    {
        "MD": 2254.29,
        "TVD": 1643.37,
        "HD": 1399.419,
        "Angle": 52.89215
    },
    {
        "MD": 2283.23,
        "TVD": 1660.83,
        "HD": 1422.498,
        "Angle": 52.95613
    },
    {
        "MD": 2312.08,
        "TVD": 1678.21,
        "HD": 1445.526,
        "Angle": 53.10129
    },
    {
        "MD": 2341.91,
        "TVD": 1696.12,
        "HD": 1469.381,
        "Angle": 53.13995
    },
    {
        "MD": 2371,
        "TVD": 1713.57,
        "HD": 1492.656,
        "Angle": 53.19372
    },
    {
        "MD": 2400.26,
        "TVD": 1731.1,
        "HD": 1516.083,
        "Angle": 53.19999
    },
    {
        "MD": 2428.94,
        "TVD": 1748.28,
        "HD": 1539.048,
        "Angle": 52.99281
    },
    {
        "MD": 2458.18,
        "TVD": 1765.88,
        "HD": 1562.398,
        "Angle": 52.95318
    },
    {
        "MD": 2487.36,
        "TVD": 1783.46,
        "HD": 1585.688,
        "Angle": 53.06144
    },
    {
        "MD": 2516.58,
        "TVD": 1801.02,
        "HD": 1609.043,
        "Angle": 53.00841
    },
    {
        "MD": 2546.03,
        "TVD": 1818.74,
        "HD": 1632.565,
        "Angle": 52.9103
    },
    {
        "MD": 2573.44,
        "TVD": 1835.27,
        "HD": 1654.43,
        "Angle": 52.89075
    },
    {
        "MD": 2602.81,
        "TVD": 1852.99,
        "HD": 1677.852,
        "Angle": 52.94688
    },
    {
        "MD": 2631.77,
        "TVD": 1870.44,
        "HD": 1700.965,
        "Angle": 52.97485
    },
    {
        "MD": 2660.4,
        "TVD": 1887.68,
        "HD": 1723.822,
        "Angle": 52.96937
    },
    {
        "MD": 2689.84,
        "TVD": 1905.41,
        "HD": 1747.324,
        "Angle": 52.9153
    },
    {
        "MD": 2719.89,
        "TVD": 1923.53,
        "HD": 1771.297,
        "Angle": 52.72241
    },
    {
        "MD": 2749.13,
        "TVD": 1941.24,
        "HD": 1794.563,
        "Angle": 52.50042
    },
    {
        "MD": 2778.14,
        "TVD": 1958.9,
        "HD": 1817.578,
        "Angle": 52.34014
    },
    {
        "MD": 2806.21,
        "TVD": 1976.05,
        "HD": 1839.8,
        "Angle": 52.37642
    },
    {
        "MD": 2834.86,
        "TVD": 1993.54,
        "HD": 1862.492,
        "Angle": 52.34249
    },
    {
        "MD": 2864.11,
        "TVD": 2011.41,
        "HD": 1885.649,
        "Angle": 52.30277
    },
    {
        "MD": 2893.53,
        "TVD": 2029.4,
        "HD": 1908.927,
        "Angle": 52.23692
    },
    {
        "MD": 2922.89,
        "TVD": 2047.38,
        "HD": 1932.138,
        "Angle": 52.25056
    },
    {
        "MD": 2951.72,
        "TVD": 2065.03,
        "HD": 1954.933,
        "Angle": 52.38167
    },
    {
        "MD": 2980.57,
        "TVD": 2082.64,
        "HD": 1977.785,
        "Angle": 52.41298
    },
    {
        "MD": 3009.67,
        "TVD": 2100.39,
        "HD": 2000.845,
        "Angle": 52.58784
    },
    {
        "MD": 3037.24,
        "TVD": 2117.14,
        "HD": 2022.744,
        "Angle": 52.85376
    },
    {
        "MD": 3066.32,
        "TVD": 2134.7,
        "HD": 2045.923,
        "Angle": 52.91697
    },
    {
        "MD": 3095.26,
        "TVD": 2152.15,
        "HD": 2069.01,
        "Angle": 52.87673
    },
    {
        "MD": 3124.14,
        "TVD": 2169.58,
        "HD": 2092.037,
        "Angle": 52.84521
    },
    {
        "MD": 3153.86,
        "TVD": 2187.53,
        "HD": 2115.725,
        "Angle": 52.8962
    },
    {
        "MD": 3183.3,
        "TVD": 2205.29,
        "HD": 2139.204,
        "Angle": 53.0214
    },
    {
        "MD": 3212.31,
        "TVD": 2222.74,
        "HD": 2162.379,
        "Angle": 53.04553
    },
    {
        "MD": 3241.12,
        "TVD": 2240.06,
        "HD": 2185.402,
        "Angle": 52.89913
    },
    {
        "MD": 3269.07,
        "TVD": 2256.92,
        "HD": 2207.694,
        "Angle": 52.61955
    },
    {
        "MD": 3297.22,
        "TVD": 2274.01,
        "HD": 2230.062,
        "Angle": 52.61071
    },
    {
        "MD": 3326.83,
        "TVD": 2291.99,
        "HD": 2253.588,
        "Angle": 52.63011
    },
    {
        "MD": 3355.86,
        "TVD": 2309.61,
        "HD": 2276.66,
        "Angle": 52.3894
    },
    {
        "MD": 3386.37,
        "TVD": 2328.23,
        "HD": 2300.829,
        "Angle": 52.08932
    },
    {
        "MD": 3414.64,
        "TVD": 2345.6,
        "HD": 2323.133,
        "Angle": 51.96184
    },
    {
        "MD": 3443.43,
        "TVD": 2363.34,
        "HD": 2345.808,
        "Angle": 52.0472
    },
    {
        "MD": 3472.34,
        "TVD": 2381.12,
        "HD": 2368.604,
        "Angle": 52.26374
    },
    {
        "MD": 3491.13,
        "TVD": 2392.62,
        "HD": 2383.464,
        "Angle": 52.37501
    },
    {
        "MD": 3520.68,
        "TVD": 2410.66,
        "HD": 2406.868,
        "Angle": 52.23104
    },
    {
        "MD": 3550.33,
        "TVD": 2428.82,
        "HD": 2430.306,
        "Angle": 52.36275
    },
    {
        "MD": 3578.66,
        "TVD": 2446.12,
        "HD": 2452.74,
        "Angle": 52.71146
    },
    {
        "MD": 3607.48,
        "TVD": 2463.58,
        "HD": 2475.669,
        "Angle": 52.92325
    },
    {
        "MD": 3635.91,
        "TVD": 2480.72,
        "HD": 2498.352,
        "Angle": 52.90396
    },
    {
        "MD": 3665.09,
        "TVD": 2498.32,
        "HD": 2521.626,
        "Angle": 52.88466
    },
    {
        "MD": 3684.38,
        "TVD": 2509.96,
        "HD": 2537.009,
        "Angle": 0
    }
];

const casingData = [
  { section: "Casing", size: '30"',       fromMD: 0,     toMD: 108.31,   ID: 28,    OD: 30,   roughness: 0.001 },
  { section: "Casing", size: '20"',       fromMD: 0,     toMD: 384.31,   ID: 18.73, OD: 20,   roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',   fromMD: 0,     toMD: 1822.31,  ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',    fromMD: 0,     toMD: 3502.31,  ID: 8.681,  OD: 9.625,  roughness: 0.001 },
  { section: "Liner",   size: '7"',       fromMD: 3326.31, toMD: 3658.31, ID: 6.184,  OD: 7,     roughness: 0.001 }
];

const tubingData = [
  { toMD: 3601.22, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV',           type: 'SSSV',          MD: 147.37, enabled: true },
  { name: 'Packer',         type: 'Pk',            MD: 3493.49, enabled: true },
  { name: 'Sliding sleeve', type: 'Sleeve',        MD: 3579.442, enabled: false },
  { name: 'NA',             type: 'NA',            MD: 3607.81, enabled: true },
  { name: 'MMG (dummy)',    type: 'MMG',           MD: 1182.9, enabled: false }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3607.81,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 128.9668,
  temperature: 107,
  c: 6.70e-7,
  n: 0.8,
  OGR: '110 sm3/mmsm3',
  WGR: '19 sm3/mmsm3',
  soilTemperature: 30,             // in °C
  chokeGasCoefficient: 0.95,
  WTDate: "2024-06-16" 
};

// const meta = {
//   soilTemperature: 30,             // in °C
//   chokeGasCoefficient: 0.95,
//   WTDate: "2024-06-16"            // ISO 8601 format
// };

// const notes = `
//   Well test on June 16, 2024.
// `;


function C24P41() {
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

export default C24P41
