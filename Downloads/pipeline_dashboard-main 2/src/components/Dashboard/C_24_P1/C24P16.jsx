import React from 'react'

const trajectoryData = [
  { MD: 0, TVD: 0, Horizontal_distance: 0, Angle: 0 },
  { MD: 21.77, TVD: 21.77, Horizontal_distance: 0, Angle: 0 },
  { MD: 77.87, TVD: 77.87, Horizontal_distance: 0, Angle: 2.131713 },
  { MD: 106.77, TVD: 106.75, Horizontal_distance: 1.074988, Angle: 2.131713 },
  { MD: 135.67, TVD: 135.63, Horizontal_distance: 2.149977, Angle: 3.014872 },
  { MD: 164.57, TVD: 164.49, Horizontal_distance: 3.669977, Angle: 3.370826 },
  { MD: 193.47, TVD: 193.34, Horizontal_distance: 5.369241, Angle: 4.264164 },
  { MD: 222.37, TVD: 222.16, Horizontal_distance: 7.518101, Angle: 4.264164 },
  { MD: 251.27, TVD: 250.98, Horizontal_distance: 9.666962, Angle: 3.699069 },
  { MD: 260.87, TVD: 260.56, Horizontal_distance: 10.28632, Angle: 5.377062 },
  { MD: 279.05, TVD: 278.66, Horizontal_distance: 11.98996, Angle: 6.216574 },
  { MD: 307.96, TVD: 307.4, Horizontal_distance: 15.12053, Angle: 8.030943 },
  { MD: 337.53, TVD: 336.68, Horizontal_distance: 19.2517, Angle: 9.408237 },
  { MD: 365.78, TVD: 364.55, Horizontal_distance: 23.86966, Angle: 9.843411 },
  { MD: 394.31, TVD: 392.66, Horizontal_distance: 28.74704, Angle: 9.812429 },
  { MD: 423.02, TVD: 420.95, Horizontal_distance: 33.63989, Angle: 10.13317 },
  { MD: 452.51, TVD: 449.98, Horizontal_distance: 38.82826, Angle: 11.52027 },
  { MD: 481.3, TVD: 478.19, Horizontal_distance: 44.57804, Angle: 13.52206 },
  { MD: 510.16, TVD: 506.25, Horizontal_distance: 51.32608, Angle: 14.05526 },
  { MD: 539.22, TVD: 534.44, Horizontal_distance: 58.38352, Angle: 13.82395 },
  { MD: 568.22, TVD: 562.6, Horizontal_distance: 65.31277, Angle: 13.7961 },
  { MD: 596.99, TVD: 590.54, Horizontal_distance: 72.17347, Angle: 14.37657 },
  { MD: 625.73, TVD: 618.38, Horizontal_distance: 79.30944, Angle: 16.04623 },
  { MD: 654.99, TVD: 646.5, Horizontal_distance: 87.39728, Angle: 18.09485 },
  { MD: 683.5, TVD: 673.6, Horizontal_distance: 96.25223, Angle: 20.28199 },
  { MD: 712.37, TVD: 700.68, Horizontal_distance: 106.2598, Angle: 22.97043 },
  { MD: 741.25, TVD: 727.27, Horizontal_distance: 117.5303, Angle: 25.41611 },
  { MD: 770.18, TVD: 753.4, Horizontal_distance: 129.9468, Angle: 27.62875 },
  { MD: 799.12, TVD: 779.04, Horizontal_distance: 143.3674, Angle: 29.5194 },
  { MD: 827.7, TVD: 803.91, Horizontal_distance: 157.4493, Angle: 31.39462 },
  { MD: 856.73, TVD: 828.69, Horizontal_distance: 172.5719, Angle: 33.0875 },
  { MD: 885.22, TVD: 852.56, Horizontal_distance: 188.1251, Angle: 34.98669 },
  { MD: 914.88, TVD: 876.86, Horizontal_distance: 205.1318, Angle: 37.14917 },
  { MD: 943.51, TVD: 899.68, Horizontal_distance: 222.4212, Angle: 39.07302 },
  { MD: 972.17, TVD: 921.93, Horizontal_distance: 240.4859, Angle: 40.72991 },
  { MD: 1001.36, TVD: 944.05, Horizontal_distance: 259.5322, Angle: 42.29723 },
  { MD: 1029.9, TVD: 965.16, Horizontal_distance: 278.739, Angle: 44.00493 },
  { MD: 1058.79, TVD: 985.94, Horizontal_distance: 298.8094, Angle: 45.9232 },
  { MD: 1087.57, TVD: 1005.96, Horizontal_distance: 319.4852, Angle: 47.91105 },
  { MD: 1116.14, TVD: 1025.11, Horizontal_distance: 340.6872, Angle: 50.18891 },
  { MD: 1145.55, TVD: 1043.94, Horizontal_distance: 363.2787, Angle: 52.904 },
  { MD: 1174.1, TVD: 1061.16, Horizontal_distance: 386.051, Angle: 54.92631 },
  { MD: 1203.11, TVD: 1077.83, Horizontal_distance: 409.7931, Angle: 55.76668 },
  { MD: 1232.28, TVD: 1094.24, Horizontal_distance: 433.9095, Angle: 56.32537 },
  { MD: 1261.1, TVD: 1110.22, Horizontal_distance: 457.8935, Angle: 56.31951 },
  { MD: 1290.15, TVD: 1126.33, Horizontal_distance: 482.0673, Angle: 56.29373 },
  { MD: 1318.82, TVD: 1142.24, Horizontal_distance: 505.9177, Angle: 55.86387 },
  { MD: 1347.76, TVD: 1158.48, Horizontal_distance: 529.8715, Angle: 55.56794 },
  { MD: 1376.57, TVD: 1174.77, Horizontal_distance: 553.6339, Angle: 55.74419 },
  { MD: 1405.51, TVD: 1191.06, Horizontal_distance: 577.5538, Angle: 55.6756 },
  { MD: 1445.43, TVD: 1213.57, Horizontal_distance: 610.522, Angle: 55.82023 },
  { MD: 1463.07, TVD: 1223.48, Horizontal_distance: 625.1152, Angle: 56.2457 },
  { MD: 1491.92, TVD: 1239.51, Horizontal_distance: 649.1019, Angle: 56.2117 },
  { MD: 1521.14, TVD: 1255.76, Horizontal_distance: 673.3866, Angle: 55.95949 },
  { MD: 1550.08, TVD: 1271.96, Horizontal_distance: 697.3675, Angle: 55.72106 },
  { MD: 1578.63, TVD: 1288.04, Horizontal_distance: 720.9585, Angle: 55.63933 },
  { MD: 1607.9, TVD: 1304.56, Horizontal_distance: 745.1209, Angle: 55.57746 },
  { MD: 1637.23, TVD: 1321.14, Horizontal_distance: 769.315, Angle: 55.61167 },
  { MD: 1666.32, TVD: 1337.57, Horizontal_distance: 793.3209, Angle: 55.66625 },
  { MD: 1694.83, TVD: 1353.65, Horizontal_distance: 816.8635, Angle: 55.69061 },
  { MD: 1723.89, TVD: 1370.03, Horizontal_distance: 840.8672, Angle: 55.61278 },
  { MD: 1752.91, TVD: 1386.42, Horizontal_distance: 864.8157, Angle: 55.70025 },
  { MD: 1781.64, TVD: 1402.61, Horizontal_distance: 888.5496, Angle: 55.903 },
  { MD: 1810.52, TVD: 1418.8, Horizontal_distance: 912.4648, Angle: 56.02976 },
  { MD: 1839.28, TVD: 1434.87, Horizontal_distance: 936.3163, Angle: 55.98622 },
  { MD: 1868.24, TVD: 1451.07, Horizontal_distance: 960.3213, Angle: 56.02694 },
  { MD: 1896.98, TVD: 1467.13, Horizontal_distance: 984.1554, Angle: 56.01424 },
  { MD: 1925.8, TVD: 1483.24, Horizontal_distance: 1008.052, Angle: 56.10638 },
  { MD: 1954.94, TVD: 1499.49, Horizontal_distance: 1032.241, Angle: 56.21108 },
  { MD: 1983.71, TVD: 1515.49, Horizontal_distance: 1056.151, Angle: 56.13548 },
  { MD: 2012.89, TVD: 1531.75, Horizontal_distance: 1080.381, Angle: 56.05764 },
  { MD: 2042.62, TVD: 1548.35, Horizontal_distance: 1105.045, Angle: 56.13982 },
  { MD: 2070.87, TVD: 1564.09, Horizontal_distance: 1128.504, Angle: 56.1519 },
  { MD: 2099.47, TVD: 1580.02, Horizontal_distance: 1152.257, Angle: 56.1645 },
  { MD: 2128.69, TVD: 1596.29, Horizontal_distance: 1176.528, Angle: 56.01548 },
  { MD: 2157.01, TVD: 1612.12, Horizontal_distance: 1200.01, Angle: 55.79975 },
  { MD: 2185.76, TVD: 1628.28, Horizontal_distance: 1223.789, Angle: 55.78019 },
  { MD: 2214.46, TVD: 1644.42, Horizontal_distance: 1247.521, Angle: 55.70198 },
  { MD: 2243.28, TVD: 1660.66, Horizontal_distance: 1271.329, Angle: 55.58469 },
  { MD: 2272.35, TVD: 1677.09, Horizontal_distance: 1295.311, Angle: 55.5994 },
  { MD: 2301.13, TVD: 1693.35, Horizontal_distance: 1319.058, Angle: 55.61952 },
  { MD: 2330.58, TVD: 1709.98, Horizontal_distance: 1343.363, Angle: 55.74101 },
  { MD: 2359.34, TVD: 1726.17, Horizontal_distance: 1367.133, Angle: 55.6544 },
  { MD: 2387.93, TVD: 1742.3, Horizontal_distance: 1390.738, Angle: 55.44908 },
  { MD: 2416.9, TVD: 1758.73, Horizontal_distance: 1414.599, Angle: 55.62385 },
  { MD: 2445.45, TVD: 1774.85, Horizontal_distance: 1438.162, Angle: 56.00444 },
  { MD: 2474.37, TVD: 1791.02, Horizontal_distance: 1462.139, Angle: 56.16154 },
  { MD: 2503.48, TVD: 1807.23, Horizontal_distance: 1486.318, Angle: 56.25639 },
  { MD: 2531.96, TVD: 1823.05, Horizontal_distance: 1510, Angle: 56.21924 },
  { MD: 2560.88, TVD: 1839.13, Horizontal_distance: 1534.038, Angle: 56.15221 },
  { MD: 2589.57, TVD: 1855.11, Horizontal_distance: 1557.866, Angle: 56.25101 },
  { MD: 2619, TVD: 1871.46, Horizontal_distance: 1582.336, Angle: 56.33419 },
  { MD: 2647.52, TVD: 1887.27, Horizontal_distance: 1606.073, Angle: 56.28012 },
  { MD: 2676.45, TVD: 1903.33, Horizontal_distance: 1630.136, Angle: 56.27701 },
  { MD: 2705.9, TVD: 1919.68, Horizontal_distance: 1654.63, Angle: 56.08582 },
  { MD: 2734.2, TVD: 1935.47, Horizontal_distance: 1678.116, Angle: 55.80239 },
  { MD: 2763.29, TVD: 1951.82, Horizontal_distance: 1702.176, Angle: 55.65006 },
  { MD: 2791.93, TVD: 1967.98, Horizontal_distance: 1725.821, Angle: 55.6232 },
  { MD: 2820.94, TVD: 1984.36, Horizontal_distance: 1749.765, Angle: 55.58261 },
  { MD: 2849.69, TVD: 2000.61, Horizontal_distance: 1773.482, Angle: 55.60728 },
  { MD: 2879.06, TVD: 2017.2, Horizontal_distance: 1797.717, Angle: 55.59204 },
  { MD: 2907.87, TVD: 2033.48, Horizontal_distance: 1821.487, Angle: 55.61451 },
  { MD: 2937.21, TVD: 2050.05, Horizontal_distance: 1845.7, Angle: 55.59831 },
  { MD: 2966.06, TVD: 2066.35, Horizontal_distance: 1869.504, Angle: 55.60639 },
  { MD: 2995.27, TVD: 2082.85, Horizontal_distance: 1893.607, Angle: 55.81191 },
  { MD: 3023.94, TVD: 2098.96, Horizontal_distance: 1917.323, Angle: 56.05501 },
  { MD: 3052.88, TVD: 2115.12, Horizontal_distance: 1941.331, Angle: 56.1708 },
  { MD: 3081.53, TVD: 2131.07, Horizontal_distance: 1965.13, Angle: 56.23767 },
  { MD: 3110.23, TVD: 2147.02, Horizontal_distance: 1988.99, Angle: 56.28324 },
  { MD: 3138.73, TVD: 2162.84, Horizontal_distance: 2012.696, Angle: 56.23519 },
  { MD: 3167.77, TVD: 2178.98, Horizontal_distance: 2036.838, Angle: 56.27464 },
  { MD: 3196.93, TVD: 2195.17, Horizontal_distance: 2061.09, Angle: 56.20905 },
  { MD: 3226.13, TVD: 2211.41, Horizontal_distance: 2085.358, Angle: 55.84963 },
  { MD: 3254.81, TVD: 2227.51, Horizontal_distance: 2109.092, Angle: 55.74577 },
  { MD: 3283.84, TVD: 2243.85, Horizontal_distance: 2133.087, Angle: 55.74864 },
  { MD: 3312.73, TVD: 2260.11, Horizontal_distance: 2156.967, Angle: 56.86232 },
  { MD: 3341.56, TVD: 2275.87, Horizontal_distance: 2181.108, Angle: 55.5004 },
  { MD: 3375.37, TVD: 2295.02, Horizontal_distance: 2208.972, Angle: 55.89566 },
  { MD: 3403.87, TVD: 2311, Horizontal_distance: 2232.57, Angle: 56.37284 },
  { MD: 3432.13, TVD: 2326.65, Horizontal_distance: 2256.101, Angle: 55.78951 },
  { MD: 3460.41, TVD: 2342.55, Horizontal_distance: 2279.488, Angle: 55.58369 },
  { MD: 3488.4, TVD: 2358.37, Horizontal_distance: 2302.579, Angle: 55.759 },
  { MD: 3516.96, TVD: 2374.44, Horizontal_distance: 2326.189, Angle: 55.85096 },
  { MD: 3545.16, TVD: 2390.27, Horizontal_distance: 2349.526, Angle: 55.89971 },
  { MD: 3573.77, TVD: 2406.31, Horizontal_distance: 2373.217, Angle: 55.87612 },
  { MD: 3602.63, TVD: 2422.5, Horizontal_distance: 2397.108, Angle: 56.19434 },
  { MD: 3631.01, TVD: 2438.29, Horizontal_distance: 2420.69, Angle: 56.24299 },
  { MD: 3659.66, TVD: 2454.21, Horizontal_distance: 2444.51, Angle: 55.91872 },
  { MD: 3688.98, TVD: 2470.64, Horizontal_distance: 2468.794, Angle: 56.15657 },
  { MD: 3716.56, TVD: 2486, Horizontal_distance: 2491.701, Angle: 56.08492 },
  { MD: 3745.63, TVD: 2502.22, Horizontal_distance: 2515.825, Angle: 55.36473 },
  { MD: 3773.94, TVD: 2518.31, Horizontal_distance: 2539.118, Angle: 55.2416 },
  { MD: 3793.55, TVD: 2529.49, Horizontal_distance: 2555.229, Angle: 55.71492 },
  { MD: 3815.9, TVD: 2542.08, Horizontal_distance: 2573.695, Angle: 0 }
];

const casingData = [
  { section: 'Casing', size: '30"', fromMD: 0, toMD: 131.9, ID: 28, OD: 30, roughness: 0.001 },
  { section: 'Casing', size: '20"', fromMD: 0, toMD: 280.9, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: 'Casing', size: '13 3/8"', fromMD: 0, toMD: 1440.9, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: 'Casing', size: '9 5/8"', fromMD: 0, toMD: 3364.9, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: 'Liner', size: '7"', fromMD: 3364.9, toMD: 3813.9, ID: 6.184, OD: 7, roughness: 0.001 }
];

const tubingData = [
  { fromMD: 0, toMD: 3608.04, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 5', type: 'SSSV', MD: 162.18 },
  { name: 'Pk 7', type: 'Packer', MD: 3384.18 },
  { name: 'LN', type: 'Choke', MD: 3396.51 },
  { name: 'NA', type: 'NA', MD: 3621.9 }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3621.9,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 148.9668,
  temperature: 107,
  c: 1.32e-06,
  n: 0.8,
  OGR: '162.037 sm3/mmsm3',
  WGR: '4 sm3/mmsm3'
};

function C24P16() {
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

export default C24P16
