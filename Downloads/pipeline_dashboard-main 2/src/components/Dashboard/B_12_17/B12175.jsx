import React from 'react'

const trajectoryData = [
    { "MD": 0, "TVD": 0, "HD": 0, "Angle": 0 },
    { "MD": 49.05, "TVD": 49.05, "HD": 0, "Angle": 0 },
    { "MD": 119.05, "TVD": 119.05, "HD": 0, "Angle": 1.479412 },
    { "MD": 149.05, "TVD": 149.04, "HD": 0.7745321, "Angle": 4.149788 },
    { "MD": 175.75, "TVD": 175.67, "HD": 2.706655, "Angle": 6.451835 },
    { "MD": 205.75, "TVD": 205.48, "HD": 6.077694, "Angle": 8.422989 },
    { "MD": 234.49, "TVD": 233.91, "HD": 10.28753, "Angle": 9.474532 },
    { "MD": 263.08, "TVD": 262.11, "HD": 14.9937, "Angle": 10.24703 },
    { "MD": 291.92, "TVD": 290.49, "HD": 20.12412, "Angle": 10.27134 },
    { "MD": 320, "TVD": 318.12, "HD": 25.13107, "Angle": 10.51567 },
    { "MD": 348.58, "TVD": 346.22, "HD": 30.34704, "Angle": 11.2685 },
    { "MD": 385.41, "TVD": 382.34, "HD": 37.54388, "Angle": 12.05761 },
    { "MD": 408.98, "TVD": 405.39, "HD": 42.46754, "Angle": 13.63464 },
    { "MD": 466.11, "TVD": 460.91, "HD": 55.93478, "Angle": 16.08502 },
    { "MD": 495.23, "TVD": 488.89, "HD": 64.00286, "Angle": 18.01093 },
    { "MD": 523.8, "TVD": 516.06, "HD": 72.83666, "Angle": 20.25477 },
    { "MD": 552.1, "TVD": 542.61, "HD": 82.63398, "Angle": 22.43047 },
    { "MD": 580.65, "TVD": 569, "HD": 93.52758, "Angle": 24.27654 },
    { "MD": 609.6, "TVD": 595.39, "HD": 105.4301, "Angle": 26.29779 },
    { "MD": 638.2, "TVD": 621.03, "HD": 118.101, "Angle": 28.23854 },
    { "MD": 667.02, "TVD": 646.42, "HD": 131.737, "Angle": 30.21172 },
    { "MD": 695.88, "TVD": 671.36, "HD": 146.2592, "Angle": 32.2186 },
    { "MD": 724.65, "TVD": 695.7, "HD": 161.598, "Angle": 33.90946 },
    { "MD": 753.46, "TVD": 719.61, "HD": 177.6706, "Angle": 35.72157 },
    { "MD": 781.95, "TVD": 742.74, "HD": 194.3043, "Angle": 38.10829 },
    { "MD": 810.99, "TVD": 765.59, "HD": 212.2264, "Angle": 39.98109 },
    { "MD": 839.44, "TVD": 787.39, "HD": 230.5065, "Angle": 41.53473 },
    { "MD": 868.83, "TVD": 809.39, "HD": 249.9942, "Angle": 43.72728 },
    { "MD": 896.88, "TVD": 829.66, "HD": 269.3831, "Angle": 45.91838 },
    { "MD": 925.6, "TVD": 849.64, "HD": 290.0141, "Angle": 47.94851 },
    { "MD": 954.34, "TVD": 868.89, "HD": 311.3548, "Angle": 49.90947 },
    { "MD": 983.16, "TVD": 887.45, "HD": 333.4029, "Angle": 51.08082 },
    { "MD": 1011.08, "TVD": 904.99, "HD": 355.1256, "Angle": 51.21184 },
    { "MD": 1039.67, "TVD": 922.9, "HD": 377.4106, "Angle": 51.16516 },
    { "MD": 1068.55, "TVD": 941.01, "HD": 399.9069, "Angle": 51.15832 },
    { "MD": 1097.92, "TVD": 959.43, "HD": 422.7826, "Angle": 51.21749 },
    { "MD": 1126.29, "TVD": 977.2, "HD": 444.8979, "Angle": 51.23442 },
    { "MD": 1154.91, "TVD": 995.12, "HD": 467.2133, "Angle": 51.21943 },
    { "MD": 1183.84, "TVD": 1013.24, "HD": 489.7657, "Angle": 51.19881 },
    { "MD": 1212.39, "TVD": 1031.13, "HD": 512.0154, "Angle": 51.17265 },
    { "MD": 1240.86, "TVD": 1048.98, "HD": 534.1946, "Angle": 51.21154 },
    { "MD": 1269.37, "TVD": 1066.84, "HD": 556.4172, "Angle": 51.10758 },
    { "MD": 1299.09, "TVD": 1085.5, "HD": 579.549, "Angle": 51.00346 },
    { "MD": 1327.17, "TVD": 1103.17, "HD": 601.3723, "Angle": 50.99067 },
    { "MD": 1355.56, "TVD": 1121.04, "HD": 623.4326, "Angle": 51.00208 },
    { "MD": 1384.1, "TVD": 1139, "HD": 645.613, "Angle": 51.02002 },
    { "MD": 1413.43, "TVD": 1157.45, "HD": 668.4131, "Angle": 50.97625 },
    { "MD": 1442.24, "TVD": 1175.59, "HD": 690.7952, "Angle": 50.98859 },
    { "MD": 1471.01, "TVD": 1193.7, "HD": 713.1501, "Angle": 50.96369 },
    { "MD": 1499.32, "TVD": 1211.53, "HD": 735.1398, "Angle": 50.89389 },
    { "MD": 1528.19, "TVD": 1229.74, "HD": 757.5423, "Angle": 51.03559 },
    { "MD": 1557.18, "TVD": 1247.97, "HD": 780.0831, "Angle": 51.21777 },
    { "MD": 1585.63, "TVD": 1265.79, "HD": 802.2608, "Angle": 51.10715 },
    { "MD": 1613.98, "TVD": 1283.59, "HD": 824.3262, "Angle": 50.9963 },
    { "MD": 1642.58, "TVD": 1301.59, "HD": 846.5514, "Angle": 51.16777 },
    { "MD": 1671.35, "TVD": 1319.63, "HD": 868.9628, "Angle": 51.26354 },
    { "MD": 1700.1, "TVD": 1337.62, "HD": 891.3888, "Angle": 51.24211 },
    { "MD": 1727.99, "TVD": 1355.08, "HD": 913.1373, "Angle": 51.23646 },
    { "MD": 1757.33, "TVD": 1373.45, "HD": 936.0148, "Angle": 51.15461 },
    { "MD": 1785.47, "TVD": 1391.1, "HD": 957.9314, "Angle": 51.19503 },
    { "MD": 1813.89, "TVD": 1408.91, "HD": 980.0786, "Angle": 51.25178 },
    { "MD": 1843.08, "TVD": 1427.18, "HD": 1002.844, "Angle": 51.22482 },
    { "MD": 1871.71, "TVD": 1445.11, "HD": 1025.164, "Angle": 51.1748 },
    { "MD": 1901.25, "TVD": 1463.63, "HD": 1048.178, "Angle": 51.06497 },
    { "MD": 1929.24, "TVD": 1481.22, "HD": 1069.95, "Angle": 50.96445 },
    { "MD": 1957.09, "TVD": 1498.76, "HD": 1091.583, "Angle": 50.96536 },
    { "MD": 1987.1, "TVD": 1517.66, "HD": 1114.893, "Angle": 50.95748 },
    { "MD": 2016.2, "TVD": 1535.99, "HD": 1137.495, "Angle": 51.00272 },
    { "MD": 2045.09, "TVD": 1554.17, "HD": 1159.947, "Angle": 51.16789 },
    { "MD": 2073.27, "TVD": 1571.84, "HD": 1181.899, "Angle": 51.29504 },
    { "MD": 2089.39, "TVD": 1581.92, "HD": 1194.479, "Angle": 51.22614 },
    { "MD": 2103.41, "TVD": 1590.7, "HD": 1205.409, "Angle": 51.1243 },
    { "MD": 2131.42, "TVD": 1608.28, "HD": 1227.215, "Angle": 51.05227 },
    { "MD": 2160.15, "TVD": 1626.34, "HD": 1249.559, "Angle": 51.07358 },
    { "MD": 2187.62, "TVD": 1643.6, "HD": 1270.93, "Angle": 51.09537 },
    { "MD": 2216.95, "TVD": 1662.02, "HD": 1293.754, "Angle": 51.04775 },
    { "MD": 2245.2, "TVD": 1679.78, "HD": 1315.723, "Angle": 51.0581 },
    { "MD": 2274.22, "TVD": 1698.02, "HD": 1338.294, "Angle": 51.04243 },
    { "MD": 2302.26, "TVD": 1715.65, "HD": 1360.099, "Angle": 51.08512 },
    { "MD": 2331.09, "TVD": 1733.76, "HD": 1382.531, "Angle": 51.08447 },
    { "MD": 2359.84, "TVD": 1751.82, "HD": 1404.9, "Angle": 51.11699 },
    { "MD": 2389.12, "TVD": 1770.2, "HD": 1427.693, "Angle": 51.09989 },
    { "MD": 2417.37, "TVD": 1787.94, "HD": 1449.678, "Angle": 51.08441 },
    { "MD": 2446.9, "TVD": 1806.49, "HD": 1472.654, "Angle": 51.11008 },
    { "MD": 2475.65, "TVD": 1824.54, "HD": 1495.032, "Angle": 51.08955 },
    { "MD": 2503.83, "TVD": 1842.24, "HD": 1516.96, "Angle": 51.10176 },
    { "MD": 2532.75, "TVD": 1860.4, "HD": 1539.467, "Angle": 51.07063 },
    { "MD": 2561.38, "TVD": 1878.39, "HD": 1561.739, "Angle": 51.09104 },
    { "MD": 2590.15, "TVD": 1896.46, "HD": 1584.126, "Angle": 51.06768 },
    { "MD": 2618.81, "TVD": 1914.47, "HD": 1606.421, "Angle": 51.10001 },
    { "MD": 2647.92, "TVD": 1932.75, "HD": 1629.075, "Angle": 51.075 },
    { "MD": 2675.55, "TVD": 1950.11, "HD": 1650.57, "Angle": 51.08912 },
    { "MD": 2704.08, "TVD": 1968.03, "HD": 1672.77, "Angle": 51.09104 },
    { "MD": 2732.85, "TVD": 1986.1, "HD": 1695.158, "Angle": 51.09948 },
    { "MD": 2762.31, "TVD": 2004.6, "HD": 1718.084, "Angle": 51.07429 },
    { "MD": 2789.86, "TVD": 2021.91, "HD": 1739.517, "Angle": 51.08476 },
    { "MD": 2819.04, "TVD": 2040.24, "HD": 1762.222, "Angle": 51.08792 },
    { "MD": 2848.62, "TVD": 2058.82, "HD": 1785.238, "Angle": 51.1084 },
    { "MD": 2876.7, "TVD": 2076.45, "HD": 1807.094, "Angle": 51.12846 },
    { "MD": 2904.84, "TVD": 2094.11, "HD": 1829.002, "Angle": 51.10531 },
    { "MD": 2933.81, "TVD": 2112.3, "HD": 1851.55, "Angle": 51.05298 },
    { "MD": 2962.27, "TVD": 2130.19, "HD": 1873.684, "Angle": 51.10056 },
    { "MD": 2991.03, "TVD": 2148.25, "HD": 1896.066, "Angle": 51.09104 },
    { "MD": 3019.8, "TVD": 2166.32, "HD": 1918.453, "Angle": 51.08319 },
    { "MD": 3047.61, "TVD": 2183.79, "HD": 1940.091, "Angle": 51.10648 },
    { "MD": 3076.74, "TVD": 2202.08, "HD": 1962.764, "Angle": 51.08512 },
    { "MD": 3105.57, "TVD": 2220.19, "HD": 1985.196, "Angle": 51.12399 },
    { "MD": 3134.01, "TVD": 2238.04, "HD": 2007.336, "Angle": 51.12023 },
    { "MD": 3163.77, "TVD": 2256.72, "HD": 2030.503, "Angle": 51.06242 },
    { "MD": 3192.92, "TVD": 2275.04, "HD": 2053.177, "Angle": 51.06783 },
    { "MD": 3221.23, "TVD": 2292.83, "HD": 2075.199, "Angle": 51.07201 },
    { "MD": 3250.02, "TVD": 2310.92, "HD": 2097.596, "Angle": 51.0982 },
    { "MD": 3278.89, "TVD": 2329.05, "HD": 2120.063, "Angle": 51.09873 },
    { "MD": 3307.41, "TVD": 2346.96, "HD": 2142.258, "Angle": 51.11976 },
    { "MD": 3334.78, "TVD": 2364.14, "HD": 2163.565, "Angle": 51.13769 },
    { "MD": 3340.39, "TVD": 2367.66, "HD": 2167.933, "Angle": 51.13894 },
    { "MD": 3363.5, "TVD": 2382.16, "HD": 2185.928, "Angle": 51.12913 },
    { "MD": 3385.41, "TVD": 2395.91, "HD": 2202.987, "Angle": 51.24811 },
    { "MD": 3415.7, "TVD": 2414.87, "HD": 2226.609, "Angle": 51.09624 },
    { "MD": 3443.9, "TVD": 2432.58, "HD": 2248.554, "Angle": 50.68036 },
    { "MD": 3472.67, "TVD": 2450.81, "HD": 2270.811, "Angle": 50.86178 },
    { "MD": 3501.33, "TVD": 2468.9, "HD": 2293.04, "Angle": 50.98291 },
    { "MD": 3525.22, "TVD": 2483.94, "HD": 2311.602, "Angle": 50.75715 },
    { "MD": 3534.42, "TVD": 2489.76, "HD": 2318.727, "Angle": 0 }
];

const casingData = [
  { section: 'Casing', size: '30"', fromMD: 0, toMD: 110.42, ID: 28, OD: 1, roughness: 0.001 },
  { section: 'Casing', size: '20"', fromMD: 0, toMD: 385.42, ID: 18.73, OD: 0.635, roughness: 0.001 },
  { section: 'Casing', size: '13 3/8"', fromMD: 0, toMD: 2103.42, ID: 12.347, OD: 0.514, roughness: 0.001 },
  { section: 'Casing', size: '9 5/8"', fromMD: 0, toMD: 3385.42, ID: 8.681, OD: 0.472, roughness: 0.001 },
  { section: 'Liner', size: '7"', fromMD: 3239.42, toMD: 3534.42, ID: 6.184, OD: 0.408, roughness: 0.001 },
];

const tubingData = [
  { fromMD: 0, toMD: 3398.42, ID: 2.992, OD: 0.254, roughness: 0.001 },
];

const equipmentData = [
  { name: 'SSSV', type: 'SSSV 4', MD: 151.75 },
  { name: 'Packer', type: 'Pk 4', MD: 3375.78 },
  { name: 'NA 3', type: 'NA 3', MD: 3416.42 },
];
const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3416.42,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 223.9668,
  temperature: 107,
  c:	2.90E-06,
  n: 0.8,
  OGR: '203 sm3/mmsm3',
  WGR: '0 sm3/mmsm3',
};

export default function B12175() {
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
    </div>
  )
}