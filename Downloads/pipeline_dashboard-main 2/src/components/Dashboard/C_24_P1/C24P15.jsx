import React from 'react'
const trajectoryData = [
  { "MD": 0, "TVD": 0, "Horizontal_distance": 0, "Angle": 0 },
  { "MD": 18.31, "TVD": 18.31, "Horizontal_distance": 0, "Angle": 1.548582 },
  { "MD": 45.69, "TVD": 45.68, "Horizontal_distance": 0.7399324, "Angle": 1.540723 },
  { "MD": 73.35, "TVD": 73.33, "Horizontal_distance": 1.483639, "Angle": 1.507827 },
  { "MD": 102.23, "TVD": 102.2, "Horizontal_distance": 2.243574, "Angle": 0 },
  { "MD": 131.15, "TVD": 131.12, "Horizontal_distance": 2.243574, "Angle": 1.507305 },
  { "MD": 160.05, "TVD": 160.01, "Horizontal_distance": 3.003771, "Angle": 0 },
  { "MD": 188.94, "TVD": 188.9, "Horizontal_distance": 3.003771, "Angle": 0 },
  { "MD": 217.28, "TVD": 217.24, "Horizontal_distance": 3.003771, "Angle": 0 },
  { "MD": 227.12, "TVD": 227.08, "Horizontal_distance": 3.003771, "Angle": 0 },
  { "MD": 264.87, "TVD": 264.83, "Horizontal_distance": 3.003771, "Angle": 2.611784 },
  { "MD": 293.75, "TVD": 293.68, "Horizontal_distance": 4.319788, "Angle": 4.769408 },
  { "MD": 322.63, "TVD": 322.46, "Horizontal_distance": 6.721037, "Angle": 6.036015 },
  { "MD": 351.49, "TVD": 351.16, "Horizontal_distance": 9.75577, "Angle": 6.749251 },
  { "MD": 380.35, "TVD": 379.82, "Horizontal_distance": 13.14752, "Angle": 8.540171 },
  { "MD": 409.21, "TVD": 408.36, "Horizontal_distance": 17.43331, "Angle": 10.01599 },
  { "MD": 438.08, "TVD": 436.79, "Horizontal_distance": 22.45447, "Angle": 12.27487 },
  { "MD": 466.95, "TVD": 465, "Horizontal_distance": 28.59229, "Angle": 14.17796 },
  { "MD": 495.84, "TVD": 493.01, "Horizontal_distance": 35.66844, "Angle": 15.42833 },
  { "MD": 524.7, "TVD": 520.83, "Horizontal_distance": 43.34615, "Angle": 17.0607 },
  { "MD": 553.56, "TVD": 548.42, "Horizontal_distance": 51.81324, "Angle": 18.79198 },
  { "MD": 582.45, "TVD": 575.77, "Horizontal_distance": 61.11966, "Angle": 21.00262 },
  { "MD": 611.35, "TVD": 602.75, "Horizontal_distance": 71.47773, "Angle": 22.82946 },
  { "MD": 640.2, "TVD": 629.34, "Horizontal_distance": 82.67123, "Angle": 24.29359 },
  { "MD": 669.11, "TVD": 655.69, "Horizontal_distance": 94.56516, "Angle": 26.30236 },
  { "MD": 697.99, "TVD": 681.58, "Horizontal_distance": 107.3621, "Angle": 27.88573 },
  { "MD": 726.84, "TVD": 707.08, "Horizontal_distance": 120.8556, "Angle": 29.49381 },
  { "MD": 755.7, "TVD": 732.2, "Horizontal_distance": 135.0642, "Angle": 31.01922 },
  { "MD": 784.58, "TVD": 756.95, "Horizontal_distance": 149.9468, "Angle": 32.74709 },
  { "MD": 813.46, "TVD": 781.24, "Horizontal_distance": 165.5689, "Angle": 34.98375 },
  { "MD": 842.35, "TVD": 804.91, "Horizontal_distance": 182.1328, "Angle": 36.96229 },
  { "MD": 871.26, "TVD": 828.01, "Horizontal_distance": 199.5161, "Angle": 38.94594 },
  { "MD": 900.19, "TVD": 850.51, "Horizontal_distance": 217.7011, "Angle": 41.1542 },
  { "MD": 929.09, "TVD": 872.27, "Horizontal_distance": 236.7198, "Angle": 43.04125 },
  { "MD": 957.96, "TVD": 893.37, "Horizontal_distance": 256.4243, "Angle": 43.91123 },
  { "MD": 986.86, "TVD": 914.19, "Horizontal_distance": 276.4677, "Angle": 43.8919 },
  { "MD": 1015.82, "TVD": 935.06, "Horizontal_distance": 296.5457, "Angle": 43.73629 },
  { "MD": 1044.76, "TVD": 955.97, "Horizontal_distance": 316.5531, "Angle": 43.81743 },
  { "MD": 1073.67, "TVD": 976.83, "Horizontal_distance": 336.5693, "Angle": 44.13508 },
  { "MD": 1102.54, "TVD": 997.55, "Horizontal_distance": 356.673, "Angle": 44.11023 },
  { "MD": 1121.76, "TVD": 1011.35, "Horizontal_distance": 370.0509, "Angle": 41.40962 },
  { "MD": 1121.8, "TVD": 1011.38, "Horizontal_distance": 370.0773, "Angle": 43.98287 },
  { "MD": 1159.81, "TVD": 1038.73, "Horizontal_distance": 396.4731, "Angle": 44.19368 },
  { "MD": 1189.42, "TVD": 1059.96, "Horizontal_distance": 417.1138, "Angle": 44.42362 },
  { "MD": 1217.55, "TVD": 1080.05, "Horizontal_distance": 436.8037, "Angle": 44.41531 },
  { "MD": 1246.46, "TVD": 1100.7, "Horizontal_distance": 457.0364, "Angle": 44.11683 },
  { "MD": 1275.14, "TVD": 1121.29, "Horizontal_distance": 477.0013, "Angle": 43.86139 },
  { "MD": 1304.21, "TVD": 1142.25, "Horizontal_distance": 497.1443, "Angle": 43.79655 },
  { "MD": 1333.29, "TVD": 1163.24, "Horizontal_distance": 517.2706, "Angle": 43.74577 },
  { "MD": 1362.11, "TVD": 1184.06, "Horizontal_distance": 537.1985, "Angle": 43.77929 },
  { "MD": 1390.96, "TVD": 1204.89, "Horizontal_distance": 557.1593, "Angle": 43.8214 },
  { "MD": 1420.26, "TVD": 1226.03, "Horizontal_distance": 577.447, "Angle": 43.77617 },
  { "MD": 1448.97, "TVD": 1246.76, "Horizontal_distance": 597.3098, "Angle": 43.70592 },
  { "MD": 1477.84, "TVD": 1267.63, "Horizontal_distance": 617.2577, "Angle": 43.69445 },
  { "MD": 1506.58, "TVD": 1288.41, "Horizontal_distance": 637.1116, "Angle": 43.74272 },
  { "MD": 1535.62, "TVD": 1309.39, "Horizontal_distance": 657.1905, "Angle": 43.78743 },
  { "MD": 1564.28, "TVD": 1330.08, "Horizontal_distance": 677.0228, "Angle": 43.77125 },
  { "MD": 1593.32, "TVD": 1351.05, "Horizontal_distance": 697.1121, "Angle": 43.69395 },
  { "MD": 1622.53, "TVD": 1372.17, "Horizontal_distance": 717.2906, "Angle": 43.68467 },
  { "MD": 1651.21, "TVD": 1392.91, "Horizontal_distance": 737.0995, "Angle": 43.68177 },
  { "MD": 1680.58, "TVD": 1414.15, "Horizontal_distance": 757.384, "Angle": 43.78419 },
  { "MD": 1709.28, "TVD": 1434.87, "Horizontal_distance": 777.2428, "Angle": 43.73809 },
  { "MD": 1738.47, "TVD": 1455.96, "Horizontal_distance": 797.4237, "Angle": 43.63558 },
  { "MD": 1767.32, "TVD": 1476.84, "Horizontal_distance": 817.3322, "Angle": 43.71044 },
  { "MD": 1796.04, "TVD": 1497.6, "Horizontal_distance": 837.1781, "Angle": 43.74587 },
  { "MD": 1825.04, "TVD": 1518.55, "Horizontal_distance": 857.2304, "Angle": 43.74895 },
  { "MD": 1853.82, "TVD": 1539.34, "Horizontal_distance": 877.1318, "Angle": 43.7649 },
  { "MD": 1882.94, "TVD": 1560.37, "Horizontal_distance": 897.2741, "Angle": 43.7649 },
  { "MD": 1912.06, "TVD": 1581.4, "Horizontal_distance": 917.4165, "Angle": 43.74722 },
  { "MD": 1940.59, "TVD": 1602.01, "Horizontal_distance": 937.1443, "Angle": 43.75541 },
  { "MD": 1969.65, "TVD": 1623, "Horizontal_distance": 957.2417, "Angle": 43.67412 },
  { "MD": 1998.56, "TVD": 1643.91, "Horizontal_distance": 977.2057, "Angle": 43.33649 },
  { "MD": 2027.35, "TVD": 1664.85, "Horizontal_distance": 996.9637, "Angle": 43.22037 },
  { "MD": 2056.14, "TVD": 1685.83, "Horizontal_distance": 1016.679, "Angle": 43.07564 },
  { "MD": 2085.3, "TVD": 1707.13, "Horizontal_distance": 1036.594, "Angle": 43.07051 },
  { "MD": 2113.91, "TVD": 1728.03, "Horizontal_distance": 1056.132, "Angle": 43.70449 },
  { "MD": 2142.06, "TVD": 1748.38, "Horizontal_distance": 1075.582, "Angle": 44.1507 },
  { "MD": 2171.3, "TVD": 1769.36, "Horizontal_distance": 1095.949, "Angle": 43.9785 },
  { "MD": 2200.33, "TVD": 1790.25, "Horizontal_distance": 1116.107, "Angle": 43.95814 },
  { "MD": 2229.1, "TVD": 1810.96, "Horizontal_distance": 1136.077, "Angle": 44.1157 },
  { "MD": 2287.42, "TVD": 1852.83, "Horizontal_distance": 1176.675, "Angle": 44.14313 },
  { "MD": 2316.28, "TVD": 1873.54, "Horizontal_distance": 1196.774, "Angle": 44.07279 },
  { "MD": 2345.05, "TVD": 1894.21, "Horizontal_distance": 1216.786, "Angle": 44.01744 },
  { "MD": 2373.96, "TVD": 1915, "Horizontal_distance": 1236.875, "Angle": 43.77452 },
  { "MD": 2402.78, "TVD": 1935.81, "Horizontal_distance": 1256.813, "Angle": 43.58576 },
  { "MD": 2431.33, "TVD": 1956.49, "Horizontal_distance": 1276.497, "Angle": 43.53115 },
  { "MD": 2460.13, "TVD": 1977.37, "Horizontal_distance": 1296.333, "Angle": 43.48869 },
  { "MD": 2489.53, "TVD": 1998.7, "Horizontal_distance": 1316.566, "Angle": 43.48076 },
  { "MD": 2518.43, "TVD": 2019.67, "Horizontal_distance": 1336.452, "Angle": 43.44756 },
  { "MD": 2547.81, "TVD": 2041, "Horizontal_distance": 1356.657, "Angle": 43.49036 },
  { "MD": 2576.37, "TVD": 2061.72, "Horizontal_distance": 1376.313, "Angle": 43.5195 },
  { "MD": 2604.93, "TVD": 2082.43, "Horizontal_distance": 1395.979, "Angle": 43.64915 },
  { "MD": 2633.98, "TVD": 2103.45, "Horizontal_distance": 1416.031, "Angle": 43.62376 },
  { "MD": 2662.7, "TVD": 2124.24, "Horizontal_distance": 1435.845, "Angle": 43.38887 },
  { "MD": 2691.68, "TVD": 2145.3, "Horizontal_distance": 1455.753, "Angle": 43.49374 },
  { "MD": 2720.6, "TVD": 2166.28, "Horizontal_distance": 1475.658, "Angle": 43.47847 },
  { "MD": 2749.43, "TVD": 2187.2, "Horizontal_distance": 1495.495, "Angle": 43.34438 },
  { "MD": 2778.43, "TVD": 2208.29, "Horizontal_distance": 1515.4, "Angle": 43.3865 },
  { "MD": 2793.69, "TVD": 2219.38, "Horizontal_distance": 1525.882, "Angle": 43.53535 },
  { "MD": 2808.56, "TVD": 2230.16, "Horizontal_distance": 1536.125, "Angle": 43.35786 },
  { "MD": 2832.12, "TVD": 2247.29, "Horizontal_distance": 1552.3, "Angle": 43.20216 },
  { "MD": 2860.97, "TVD": 2268.32, "Horizontal_distance": 1572.05, "Angle": 43.14959 },
  { "MD": 2889.85, "TVD": 2289.39, "Horizontal_distance": 1591.801, "Angle": 42.13873 },
  { "MD": 2918.75, "TVD": 2310.82, "Horizontal_distance": 1611.191, "Angle": 41.26113 },
  { "MD": 2946.5, "TVD": 2331.68, "Horizontal_distance": 1629.492, "Angle": 41.14733 },
  { "MD": 2976.3, "TVD": 2354.12, "Horizontal_distance": 1649.1, "Angle": 42.09204 },
  { "MD": 3005.3, "TVD": 2375.64, "Horizontal_distance": 1668.54, "Angle": 43.33651 },
  { "MD": 3034.2, "TVD": 2396.66, "Horizontal_distance": 1688.373, "Angle": 43.36805 },
  { "MD": 3063.06, "TVD": 2417.64, "Horizontal_distance": 1708.191, "Angle": 42.85321 },
  { "MD": 3091.46, "TVD": 2438.46, "Horizontal_distance": 1727.506, "Angle": 42.09204 },
  { "MD": 3120.46, "TVD": 2459.98, "Horizontal_distance": 1746.946, "Angle": 41.48652 },
  { "MD": 3148.6, "TVD": 2481.06, "Horizontal_distance": 1765.587, "Angle": 41.01218 },
  { "MD": 3178.14, "TVD": 2503.35, "Horizontal_distance": 1784.972, "Angle": 40.69588 },
  { "MD": 3207.17, "TVD": 2525.36, "Horizontal_distance": 1803.901, "Angle": 40.34621 },
  { "MD": 3234.75, "TVD": 2546.38, "Horizontal_distance": 1821.756, "Angle": 0 },
  { "MD": 3326.55, "TVD": 2220.91, "Horizontal_distance": 2178.738, "Angle": 56.3498 },
  { "MD": 3356.76, "TVD": 2237.65, "Horizontal_distance": 2203.886, "Angle": 56.14606 },
  { "MD": 3385.23, "TVD": 2253.51, "Horizontal_distance": 2227.53, "Angle": 56.03258 },
  { "MD": 3414.01, "TVD": 2269.59, "Horizontal_distance": 2251.398, "Angle": 56.25373 },
  { "MD": 3442.2, "TVD": 2285.25, "Horizontal_distance": 2274.839, "Angle": 56.48718 },
  { "MD": 3470.69, "TVD": 2300.98, "Horizontal_distance": 2298.592, "Angle": 56.50972 },
  { "MD": 3499.65, "TVD": 2316.96, "Horizontal_distance": 2322.745, "Angle": 56.47855 },
  { "MD": 3528.55, "TVD": 2332.92, "Horizontal_distance": 2346.838, "Angle": 56.4234 },
  { "MD": 3557.39, "TVD": 2348.87, "Horizontal_distance": 2370.866, "Angle": 56.31817 },
  { "MD": 3585.88, "TVD": 2364.67, "Horizontal_distance": 2394.573, "Angle": 56.13623 },
  { "MD": 3609.91, "TVD": 2378.06, "Horizontal_distance": 2414.527, "Angle": 56.20881 },
  { "MD": 3633.5, "TVD": 2391.18, "Horizontal_distance": 2434.132, "Angle": 0 }
];

const casingData = [
  { section: 'Casing', size: '30"', fromMD: 0, toMD: 115, ID: 28, OD: 30, roughness: 0.001 },
  { section: 'Casing', size: '20"', fromMD: 0, toMD: 279, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: 'Casing', size: '13 3/8"', fromMD: 0, toMD: 1182, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: 'Casing', size: '9 5/8"', fromMD: 0, toMD: 2851, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: 'Liner', size: '7"', fromMD: 2694, toMD: 4050.18, ID: 6.184, OD: 7, roughness: 0.001 },
  { section: 'Open hole', size: '6"', fromMD: 4050.18, toMD: 4086.179, ID: 6, OD: 6, roughness: null }
];

const tubingData = [
  { fromMD: 0, toMD: 3183.5, ID: 2.992, OD: 0.254, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 4', type: 'SSSV', MD: 142 },
  { name: 'Pk 4', type: 'Packer', MD: 3022.53 },
  { name: 'LN', type: 'Choke', MD: 3035.96 },
  { name: 'Pk 5', type: 'Packer', MD: 3037.61 },
  { name: 'Pk 6', type: 'Packer', MD: 3134.52 },
  { name: 'LN2', type: 'Choke', MD: 3153.13 }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 4068.18,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 98.9668,
  temperature: 30,
  c: 7.50e-07,
  n: 0.8,
  OGR: '9.4687 sm3/mmsm3',
  WGR: '148 sm3/mmsm3'
};
function C24P15() {
  return (

       <div>
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

    </div>
  
  )
}

export default C24P15
