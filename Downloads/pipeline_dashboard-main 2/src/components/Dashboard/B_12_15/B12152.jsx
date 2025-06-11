import React from 'react'

const trajectoryData = [
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 20.63,
        "TVD": 20.63,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 45.63,
        "TVD": 45.63,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 47.51,
        "TVD": 47.51,
        "HD": 0,
        "Angle": 2.162233
    },
    {
        "MD": 75.6,
        "TVD": 75.58,
        "HD": 1.059811,
        "Angle": 1.778021
    },
    {
        "MD": 96.37,
        "TVD": 96.34,
        "HD": 1.704249,
        "Angle": 0
    },
    {
        "MD": 112.56,
        "TVD": 112.53,
        "HD": 1.704249,
        "Angle": 2.15002
    },
    {
        "MD": 140.97,
        "TVD": 140.92,
        "HD": 2.770082,
        "Angle": 3.397388
    },
    {
        "MD": 169.42,
        "TVD": 169.32,
        "HD": 4.456054,
        "Angle": 4.299284
    },
    {
        "MD": 197.85,
        "TVD": 197.67,
        "HD": 6.587344,
        "Angle": 5.039141
    },
    {
        "MD": 226.31,
        "TVD": 226.02,
        "HD": 9.087164,
        "Angle": 5.906992
    },
    {
        "MD": 254.56,
        "TVD": 254.12,
        "HD": 11.99448,
        "Angle": 7.007725
    },
    {
        "MD": 284.01,
        "TVD": 283.35,
        "HD": 15.58748,
        "Angle": 8.936363
    },
    {
        "MD": 312.02,
        "TVD": 311.02,
        "HD": 19.93848,
        "Angle": 11.44917
    },
    {
        "MD": 341.67,
        "TVD": 340.08,
        "HD": 25.82396,
        "Angle": 13.87421
    },
    {
        "MD": 365.32,
        "TVD": 363.04,
        "HD": 31.49502,
        "Angle": 17.31403
    },
    {
        "MD": 400.41,
        "TVD": 396.54,
        "HD": 41.9381,
        "Angle": 21.1636
    },
    {
        "MD": 429.47,
        "TVD": 423.64,
        "HD": 52.4297,
        "Angle": 24.2235
    },
    {
        "MD": 457.75,
        "TVD": 449.43,
        "HD": 64.0329,
        "Angle": 26.56228
    },
    {
        "MD": 483.33,
        "TVD": 472.31,
        "HD": 75.47152,
        "Angle": 28.95502
    },
    {
        "MD": 516.85,
        "TVD": 501.64,
        "HD": 91.69932,
        "Angle": 30.99029
    },
    {
        "MD": 542.42,
        "TVD": 523.56,
        "HD": 104.8651,
        "Angle": 32.73408
    },
    {
        "MD": 570,
        "TVD": 546.76,
        "HD": 119.7788,
        "Angle": 34.97078
    },
    {
        "MD": 598.8,
        "TVD": 570.36,
        "HD": 136.2857,
        "Angle": 37.65441
    },
    {
        "MD": 627.75,
        "TVD": 593.28,
        "HD": 153.9712,
        "Angle": 40.34668
    },
    {
        "MD": 655.96,
        "TVD": 614.78,
        "HD": 172.2347,
        "Angle": 42.89427
    },
    {
        "MD": 684.57,
        "TVD": 635.74,
        "HD": 191.708,
        "Angle": 44.90411
    },
    {
        "MD": 712.92,
        "TVD": 655.82,
        "HD": 211.7209,
        "Angle": 46.89578
    },
    {
        "MD": 741.53,
        "TVD": 675.37,
        "HD": 232.6094,
        "Angle": 49.33805
    },
    {
        "MD": 770.06,
        "TVD": 693.96,
        "HD": 254.2513,
        "Angle": 50.31015
    },
    {
        "MD": 798.12,
        "TVD": 711.88,
        "HD": 275.8438,
        "Angle": 49.99293
    },
    {
        "MD": 826.71,
        "TVD": 730.26,
        "HD": 297.7428,
        "Angle": 49.91196
    },
    {
        "MD": 854.46,
        "TVD": 748.13,
        "HD": 318.9731,
        "Angle": 49.92298
    },
    {
        "MD": 883.49,
        "TVD": 766.82,
        "HD": 341.1863,
        "Angle": 49.89018
    },
    {
        "MD": 911.6,
        "TVD": 784.93,
        "HD": 362.6851,
        "Angle": 49.85607
    },
    {
        "MD": 940.9,
        "TVD": 803.82,
        "HD": 385.0828,
        "Angle": 49.78349
    },
    {
        "MD": 969.01,
        "TVD": 821.97,
        "HD": 406.5479,
        "Angle": 49.75498
    },
    {
        "MD": 997.8,
        "TVD": 840.57,
        "HD": 428.523,
        "Angle": 49.79062
    },
    {
        "MD": 1026.89,
        "TVD": 859.35,
        "HD": 450.7387,
        "Angle": 49.8154
    },
    {
        "MD": 1055.22,
        "TVD": 877.63,
        "HD": 472.382,
        "Angle": 49.78208
    },
    {
        "MD": 1084.15,
        "TVD": 896.31,
        "HD": 494.4728,
        "Angle": 49.76128
    },
    {
        "MD": 1112.34,
        "TVD": 914.52,
        "HD": 515.9919,
        "Angle": 49.76856
    },
    {
        "MD": 1141.2,
        "TVD": 933.16,
        "HD": 538.0248,
        "Angle": 49.83406
    },
    {
        "MD": 1169.82,
        "TVD": 951.62,
        "HD": 559.8956,
        "Angle": 49.82563
    },
    {
        "MD": 1198.28,
        "TVD": 969.98,
        "HD": 581.6415,
        "Angle": 49.80694
    },
    {
        "MD": 1226.76,
        "TVD": 988.36,
        "HD": 603.3966,
        "Angle": 49.79663
    },
    {
        "MD": 1255.11,
        "TVD": 1006.66,
        "HD": 625.0491,
        "Angle": 49.82391
    },
    {
        "MD": 1283.91,
        "TVD": 1025.24,
        "HD": 647.0542,
        "Angle": 49.85024
    },
    {
        "MD": 1312.4,
        "TVD": 1043.61,
        "HD": 668.8309,
        "Angle": 49.72656
    },
    {
        "MD": 1340.74,
        "TVD": 1061.93,
        "HD": 690.4534,
        "Angle": 49.75057
    },
    {
        "MD": 1369.45,
        "TVD": 1080.48,
        "HD": 712.366,
        "Angle": 49.8409
    },
    {
        "MD": 1397.95,
        "TVD": 1098.86,
        "HD": 734.1473,
        "Angle": 49.88238
    },
    {
        "MD": 1426.49,
        "TVD": 1117.25,
        "HD": 755.9725,
        "Angle": 49.80786
    },
    {
        "MD": 1455.11,
        "TVD": 1135.72,
        "HD": 777.8349,
        "Angle": 49.87364
    },
    {
        "MD": 1483.8,
        "TVD": 1154.21,
        "HD": 799.772,
        "Angle": 49.88944
    },
    {
        "MD": 1512.22,
        "TVD": 1172.52,
        "HD": 821.5077,
        "Angle": 49.8468
    },
    {
        "MD": 1540.77,
        "TVD": 1190.93,
        "HD": 843.3291,
        "Angle": 49.85613
    },
    {
        "MD": 1569.31,
        "TVD": 1209.33,
        "HD": 865.1459,
        "Angle": 49.88468
    },
    {
        "MD": 1597.96,
        "TVD": 1227.79,
        "HD": 887.0559,
        "Angle": 49.8424
    },
    {
        "MD": 1626.74,
        "TVD": 1246.35,
        "HD": 909.0517,
        "Angle": 49.7604
    },
    {
        "MD": 1654.14,
        "TVD": 1264.05,
        "HD": 929.9675,
        "Angle": 49.33236
    },
    {
        "MD": 1683.48,
        "TVD": 1283.17,
        "HD": 952.222,
        "Angle": 48.79647
    },
    {
        "MD": 1711.64,
        "TVD": 1301.72,
        "HD": 973.4088,
        "Angle": 48.58146
    },
    {
        "MD": 1740.33,
        "TVD": 1320.7,
        "HD": 994.9234,
        "Angle": 48.04557
    },
    {
        "MD": 1768.81,
        "TVD": 1339.74,
        "HD": 1016.103,
        "Angle": 47.64944
    },
    {
        "MD": 1790.72,
        "TVD": 1354.5,
        "HD": 1032.296,
        "Angle": 48.027
    },
    {
        "MD": 1817.53,
        "TVD": 1372.43,
        "HD": 1052.228,
        "Angle": 48.37821
    },
    {
        "MD": 1846.03,
        "TVD": 1391.36,
        "HD": 1073.533,
        "Angle": 48.09937
    },
    {
        "MD": 1874.42,
        "TVD": 1410.32,
        "HD": 1094.664,
        "Angle": 48.0004
    },
    {
        "MD": 1902.89,
        "TVD": 1429.37,
        "HD": 1115.821,
        "Angle": 47.81334
    },
    {
        "MD": 1931.57,
        "TVD": 1448.63,
        "HD": 1137.072,
        "Angle": 47.29897
    },
    {
        "MD": 1960.25,
        "TVD": 1468.08,
        "HD": 1158.149,
        "Angle": 46.95062
    },
    {
        "MD": 1988.86,
        "TVD": 1487.61,
        "HD": 1179.056,
        "Angle": 47.00058
    },
    {
        "MD": 2017.79,
        "TVD": 1507.34,
        "HD": 1200.214,
        "Angle": 47.0243
    },
    {
        "MD": 2045.75,
        "TVD": 1526.4,
        "HD": 1220.671,
        "Angle": 47.04822
    },
    {
        "MD": 2074.97,
        "TVD": 1546.31,
        "HD": 1242.058,
        "Angle": 46.96069
    },
    {
        "MD": 2102.97,
        "TVD": 1565.42,
        "HD": 1262.523,
        "Angle": 47.03969
    },
    {
        "MD": 2132.2,
        "TVD": 1585.34,
        "HD": 1283.914,
        "Angle": 47.06894
    },
    {
        "MD": 2160.11,
        "TVD": 1604.35,
        "HD": 1304.349,
        "Angle": 47.0796
    },
    {
        "MD": 2189.45,
        "TVD": 1624.33,
        "HD": 1325.835,
        "Angle": 47.07668
    },
    {
        "MD": 2217.32,
        "TVD": 1643.31,
        "HD": 1346.243,
        "Angle": 47.07197
    },
    {
        "MD": 2246.23,
        "TVD": 1663,
        "HD": 1367.411,
        "Angle": 47.06245
    },
    {
        "MD": 2274.21,
        "TVD": 1682.06,
        "HD": 1387.895,
        "Angle": 47.02142
    },
    {
        "MD": 2303.43,
        "TVD": 1701.98,
        "HD": 1409.273,
        "Angle": 46.97745
    },
    {
        "MD": 2331.6,
        "TVD": 1721.2,
        "HD": 1429.867,
        "Angle": 47.17376
    },
    {
        "MD": 2360.33,
        "TVD": 1740.73,
        "HD": 1450.939,
        "Angle": 47.3976
    },
    {
        "MD": 2388.65,
        "TVD": 1759.9,
        "HD": 1471.784,
        "Angle": 47.44273
    },
    {
        "MD": 2417.29,
        "TVD": 1779.27,
        "HD": 1492.88,
        "Angle": 47.47365
    },
    {
        "MD": 2446.08,
        "TVD": 1798.73,
        "HD": 1514.098,
        "Angle": 47.49559
    },
    {
        "MD": 2474.29,
        "TVD": 1817.79,
        "HD": 1534.895,
        "Angle": 47.51958
    },
    {
        "MD": 2503.12,
        "TVD": 1837.26,
        "HD": 1556.157,
        "Angle": 47.52925
    },
    {
        "MD": 2531.2,
        "TVD": 1856.22,
        "HD": 1576.869,
        "Angle": 47.54184
    },
    {
        "MD": 2560.22,
        "TVD": 1875.81,
        "HD": 1598.28,
        "Angle": 47.5676
    },
    {
        "MD": 2588.78,
        "TVD": 1895.08,
        "HD": 1619.359,
        "Angle": 47.56075
    },
    {
        "MD": 2617.44,
        "TVD": 1914.42,
        "HD": 1640.51,
        "Angle": 47.5152
    },
    {
        "MD": 2645.32,
        "TVD": 1933.25,
        "HD": 1661.07,
        "Angle": 47.58484
    },
    {
        "MD": 2674.69,
        "TVD": 1953.06,
        "HD": 1682.753,
        "Angle": 47.52712
    },
    {
        "MD": 2702.68,
        "TVD": 1971.96,
        "HD": 1703.399,
        "Angle": 47.49969
    },
    {
        "MD": 2732.55,
        "TVD": 1992.14,
        "HD": 1725.421,
        "Angle": 47.4677
    },
    {
        "MD": 2760.39,
        "TVD": 2010.96,
        "HD": 1745.936,
        "Angle": 47.44939
    },
    {
        "MD": 2788.59,
        "TVD": 2030.03,
        "HD": 1766.711,
        "Angle": 47.53418
    },
    {
        "MD": 2816.88,
        "TVD": 2049.13,
        "HD": 1787.58,
        "Angle": 47.3717
    },
    {
        "MD": 2845.57,
        "TVD": 2068.56,
        "HD": 1808.689,
        "Angle": 47.11483
    },
    {
        "MD": 2874.18,
        "TVD": 2088.03,
        "HD": 1829.652,
        "Angle": 46.9493
    },
    {
        "MD": 2902.76,
        "TVD": 2107.54,
        "HD": 1850.537,
        "Angle": 47.21893
    },
    {
        "MD": 2931.22,
        "TVD": 2126.87,
        "HD": 1871.425,
        "Angle": 47.48415
    },
    {
        "MD": 2958.61,
        "TVD": 2145.38,
        "HD": 1891.614,
        "Angle": 47.43768
    },
    {
        "MD": 2988.43,
        "TVD": 2165.55,
        "HD": 1913.578,
        "Angle": 47.24057
    },
    {
        "MD": 3016.99,
        "TVD": 2184.94,
        "HD": 1934.547,
        "Angle": 46.9381
    },
    {
        "MD": 3045.11,
        "TVD": 2204.14,
        "HD": 1955.091,
        "Angle": 47.01042
    },
    {
        "MD": 3074.06,
        "TVD": 2223.88,
        "HD": 1976.268,
        "Angle": 47.04149
    },
    {
        "MD": 3102.66,
        "TVD": 2243.37,
        "HD": 1997.199,
        "Angle": 47.05654
    },
    {
        "MD": 3131.18,
        "TVD": 2262.8,
        "HD": 2018.076,
        "Angle": 47.26692
    },
    {
        "MD": 3159.99,
        "TVD": 2282.35,
        "HD": 2039.238,
        "Angle": 47.45878
    },
    {
        "MD": 3188.55,
        "TVD": 2301.66,
        "HD": 2060.28,
        "Angle": 47.48816
    },
    {
        "MD": 3216.83,
        "TVD": 2320.77,
        "HD": 2081.127,
        "Angle": 47.5411
    },
    {
        "MD": 3245.42,
        "TVD": 2340.07,
        "HD": 2102.219,
        "Angle": 47.58337
    },
    {
        "MD": 3273.87,
        "TVD": 2359.26,
        "HD": 2123.223,
        "Angle": 47.40449
    },
    {
        "MD": 3301.78,
        "TVD": 2378.15,
        "HD": 2143.769,
        "Angle": 47.34362
    },
    {
        "MD": 3351.78,
        "TVD": 2412.03,
        "HD": 2180.54,
        "Angle": 47.35115
    },
    {
        "MD": 3374.85,
        "TVD": 2427.66,
        "HD": 2197.509,
        "Angle": 47.5138
    },
    {
        "MD": 3398.48,
        "TVD": 2443.62,
        "HD": 2214.934,
        "Angle": 47.57709
    },
    {
        "MD": 3427.06,
        "TVD": 2462.9,
        "HD": 2236.032,
        "Angle": 47.52783
    },
    {
        "MD": 3441.07,
        "TVD": 2472.36,
        "HD": 2246.366,
        "Angle": 47.62415
    },
    {
        "MD": 3463.37,
        "TVD": 2487.39,
        "HD": 2262.839,
        "Angle": 0
    }
];

const casingData = [
  { section: "Casing", size: '30"', fromMD: 0, toMD: 109.02, ID: 28, OD: 30, roughness: 0.001 },
  { section: "Casing", size: '20"', fromMD: 0, toMD: 385.02, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: "Casing", size: '13 3/8"', fromMD: 0, toMD: 1806.02, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"', fromMD: 0, toMD: 3335.02, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: "Liner", size: '7"', fromMD: 3197.02, toMD: 3463.02, ID: 6.184, OD: 7, roughness: 0.001 }
];

const tubingData = [
  { toMD: 3392.95, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV', type: 'SSSV', MD: 153.88 },
  { name: 'Packer', type: 'Pk', MD: null },       // MD not provided
  { name: 'NA', type: 'NA', MD: 3383.571 }
];

const reservoirData = {
  name: 'S-40PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3383.52,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 130.9668,
  temperature: 107,
  c: 1.85e-6,
  n: 0.8,
  OGR: '70 sm3/mmsm3',
  WGR: '17 sm3/mmsm3'
};

// const notes = `
//   Soil temp: 30 °C.
//   Well test: July 7, 2024.
// `;


function B12152() {
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

export default B12152
