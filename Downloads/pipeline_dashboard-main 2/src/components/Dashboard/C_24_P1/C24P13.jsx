import React from 'react'
const trajectoryData = [
  { "MD": 0, "TVD": 0, "Horizontal_distance": 0, "Angle": 0 },
  { "MD": 25.75, "TVD": 25.75, "Horizontal_distance": 0, "Angle": 0 },
  { "MD": 39.75, "TVD": 39.75, "Horizontal_distance": 0, "Angle": 0 },
  { "MD": 54.85, "TVD": 54.85, "Horizontal_distance": 0, "Angle": 3.020102 },
  { "MD": 83.65, "TVD": 83.61, "Horizontal_distance": 1.517366, "Angle": 4.146682 },
  { "MD": 102.75, "TVD": 102.66, "Horizontal_distance": 2.898489, "Angle": 4.461598 },
  { "MD": 112.65, "TVD": 112.53, "Horizontal_distance": 3.668619, "Angle": 5.232183 },
  { "MD": 122.25, "TVD": 122.09, "Horizontal_distance": 4.544061, "Angle": 5.850267 },
  { "MD": 131.85, "TVD": 131.64, "Horizontal_distance": 5.522581, "Angle": 6.376047 },
  { "MD": 141.55, "TVD": 141.28, "Horizontal_distance": 6.599799, "Angle": 6.923334 },
  { "MD": 160.75, "TVD": 160.34, "Horizontal_distance": 8.914189, "Angle": 7.402 },
  { "MD": 170.35, "TVD": 169.86, "Horizontal_distance": 10.15096, "Angle": 7.811049 },
  { "MD": 180.05, "TVD": 179.47, "Horizontal_distance": 11.46925, "Angle": 7.811049 },
  { "MD": 189.75, "TVD": 189.08, "Horizontal_distance": 12.78755, "Angle": 8.277129 },
  { "MD": 199.35, "TVD": 198.58, "Horizontal_distance": 14.16958, "Angle": 8.277129 },
  { "MD": 208.95, "TVD": 208.08, "Horizontal_distance": 15.5516, "Angle": 9.068722 },
  { "MD": 218.55, "TVD": 217.56, "Horizontal_distance": 17.06475, "Angle": 9.068722 },
  { "MD": 228.15, "TVD": 227.04, "Horizontal_distance": 18.57789, "Angle": 9.439848 },
  { "MD": 237.75, "TVD": 236.51, "Horizontal_distance": 20.1524, "Angle": 10.47531 },
  { "MD": 247.35, "TVD": 245.95, "Horizontal_distance": 21.8978, "Angle": 10.42103 },
  { "MD": 257.05, "TVD": 255.49, "Horizontal_distance": 23.65233, "Angle": 11.12856 },
  { "MD": 268.75, "TVD": 266.97, "Horizontal_distance": 25.91056, "Angle": 10.86654 },
  { "MD": 283.25, "TVD": 281.21, "Horizontal_distance": 28.64413, "Angle": 11.29761 },
  { "MD": 312.15, "TVD": 309.55, "Horizontal_distance": 34.30579, "Angle": 12.90531 },
  { "MD": 341.05, "TVD": 337.72, "Horizontal_distance": 40.76033, "Angle": 15.09019 },
  { "MD": 349.75, "TVD": 346.12, "Horizontal_distance": 43.02528, "Angle": 15.7011 },
  { "MD": 369.85, "TVD": 365.47, "Horizontal_distance": 48.46472, "Angle": 16.98105 },
  { "MD": 398.75, "TVD": 393.11, "Horizontal_distance": 56.90513, "Angle": 18.91142 },
  { "MD": 427.65, "TVD": 420.45, "Horizontal_distance": 66.27179, "Angle": 21.58682 },
  { "MD": 456.45, "TVD": 447.23, "Horizontal_distance": 76.86762, "Angle": 23.90949 },
  { "MD": 485.35, "TVD": 473.65, "Horizontal_distance": 88.58059, "Angle": 25.38331 },
  { "MD": 514.25, "TVD": 499.76, "Horizontal_distance": 100.9692, "Angle": 27.26604 },
  { "MD": 543.05, "TVD": 525.36, "Horizontal_distance": 114.1631, "Angle": 29.7937 },
  { "MD": 571.95, "TVD": 550.44, "Horizontal_distance": 128.5229, "Angle": 32.14408 },
  { "MD": 600.85, "TVD": 574.91, "Horizontal_distance": 143.8992, "Angle": 33.71241 },
  { "MD": 629.75, "TVD": 598.95, "Horizontal_distance": 159.9394, "Angle": 35.79913 },
  { "MD": 658.65, "TVD": 622.39, "Horizontal_distance": 176.8443, "Angle": 37.49535 },
  { "MD": 687.45, "TVD": 645.24, "Horizontal_distance": 194.3748, "Angle": 39.43747 },
  { "MD": 716.35, "TVD": 667.56, "Horizontal_distance": 212.7331, "Angle": 41.90179 },
  { "MD": 745.25, "TVD": 689.07, "Horizontal_distance": 232.0341, "Angle": 44.36249 },
  { "MD": 774.05, "TVD": 709.66, "Horizontal_distance": 252.171, "Angle": 46.15311 },
  { "MD": 802.95, "TVD": 729.68, "Horizontal_distance": 273.0135, "Angle": 46.34523 },
  { "MD": 831.85, "TVD": 749.63, "Horizontal_distance": 293.923, "Angle": 47.2968 },
  { "MD": 860.75, "TVD": 769.23, "Horizontal_distance": 315.1609, "Angle": 49.00028 },
  { "MD": 889.65, "TVD": 788.19, "Horizontal_distance": 336.9721, "Angle": 50.09456 },
  { "MD": 918.55, "TVD": 806.73, "Horizontal_distance": 359.1414, "Angle": 49.96521 },
  { "MD": 947.45, "TVD": 825.32, "Horizontal_distance": 381.2688, "Angle": 49.48439 },
  { "MD": 976.45, "TVD": 844.16, "Horizontal_distance": 403.3155, "Angle": 47.91424 },
  { "MD": 1005.35, "TVD": 863.53, "Horizontal_distance": 424.7634, "Angle": 46.70041 },
  { "MD": 1034.25, "TVD": 883.35, "Horizontal_distance": 445.7962, "Angle": 47.2968 },
  { "MD": 1063.15, "TVD": 902.95, "Horizontal_distance": 467.0341, "Angle": 46.39985 },
  { "MD": 1093.79, "TVD": 924.08, "Horizontal_distance": 489.2227, "Angle": 44.49572 },
  { "MD": 1119.95, "TVD": 942.74, "Horizontal_distance": 507.5571, "Angle": 44.10309 },
  { "MD": 1149.25, "TVD": 963.78, "Horizontal_distance": 527.9484, "Angle": 45.6754 },
  { "MD": 1177.43, "TVD": 983.47, "Horizontal_distance": 548.1082, "Angle": 46.87572 },
  { "MD": 1206.79, "TVD": 1003.54, "Horizontal_distance": 569.5373, "Angle": 47.09269 },
  { "MD": 1264.75, "TVD": 1043, "Horizontal_distance": 611.9904, "Angle": 47.09903 },
  { "MD": 1293.66, "TVD": 1062.68, "Horizontal_distance": 633.1679, "Angle": 47.75466 },
  { "MD": 1322.62, "TVD": 1082.15, "Horizontal_distance": 654.6062, "Angle": 48.97062 },
  { "MD": 1351.32, "TVD": 1100.99, "Horizontal_distance": 676.2567, "Angle": 49.3937 },
  { "MD": 1381.05, "TVD": 1120.34, "Horizontal_distance": 698.8277, "Angle": 49.35091 },
  { "MD": 1409.48, "TVD": 1138.86, "Horizontal_distance": 720.3979, "Angle": 49.55377 },
  { "MD": 1437.92, "TVD": 1157.31, "Horizontal_distance": 742.0412, "Angle": 49.80619 },
  { "MD": 1466.57, "TVD": 1175.8, "Horizontal_distance": 763.926, "Angle": 49.87138 },
  { "MD": 1495.6, "TVD": 1194.51, "Horizontal_distance": 786.1223, "Angle": 49.8071 },
  { "MD": 1524.39, "TVD": 1213.09, "Horizontal_distance": 808.1143, "Angle": 49.88627 },
  { "MD": 1553.46, "TVD": 1231.82, "Horizontal_distance": 830.3461, "Angle": 50.00793 },
  { "MD": 1581.95, "TVD": 1250.13, "Horizontal_distance": 852.1732, "Angle": 49.91843 },
  { "MD": 1611.35, "TVD": 1269.06, "Horizontal_distance": 874.668, "Angle": 49.81475 },
  { "MD": 1640.47, "TVD": 1287.85, "Horizontal_distance": 896.9146, "Angle": 49.79465 },
  { "MD": 1668.54, "TVD": 1305.97, "Horizontal_distance": 918.3526, "Angle": 49.72113 },
  { "MD": 1698.47, "TVD": 1325.32, "Horizontal_distance": 941.1864, "Angle": 49.81057 },
  { "MD": 1727.51, "TVD": 1344.06, "Horizontal_distance": 963.3705, "Angle": 49.90863 },
  { "MD": 1756.05, "TVD": 1362.44, "Horizontal_distance": 985.2041, "Angle": 49.82471 },
  { "MD": 1785.3, "TVD": 1381.31, "Horizontal_distance": 1007.553, "Angle": 49.76471 },
  { "MD": 1813.91, "TVD": 1399.79, "Horizontal_distance": 1029.394, "Angle": 49.78208 },
  { "MD": 1842.84, "TVD": 1418.47, "Horizontal_distance": 1051.485, "Angle": 49.84965 },
  { "MD": 1871.95, "TVD": 1437.24, "Horizontal_distance": 1073.735, "Angle": 49.80619 },
  { "MD": 1900.6, "TVD": 1455.73, "Horizontal_distance": 1095.62, "Angle": 49.9177 },
  { "MD": 1929.72, "TVD": 1474.48, "Horizontal_distance": 1117.9, "Angle": 49.91797 },
  { "MD": 1958.25, "TVD": 1492.85, "Horizontal_distance": 1139.729, "Angle": 49.86328 },
  { "MD": 1987.12, "TVD": 1511.46, "Horizontal_distance": 1161.801, "Angle": 49.90068 },
  { "MD": 2016.09, "TVD": 1530.12, "Horizontal_distance": 1183.961, "Angle": 49.83225 },
  { "MD": 2045.05, "TVD": 1548.8, "Horizontal_distance": 1206.091, "Angle": 49.81483 },
  { "MD": 2074.48, "TVD": 1567.79, "Horizontal_distance": 1228.574, "Angle": 49.81704 },
  { "MD": 2102.47, "TVD": 1585.85, "Horizontal_distance": 1249.958, "Angle": 49.81892 },
  { "MD": 2131.67, "TVD": 1604.69, "Horizontal_distance": 1272.267, "Angle": 49.85985 },
  { "MD": 2160.6, "TVD": 1623.34, "Horizontal_distance": 1294.383, "Angle": 49.85985 },
  { "MD": 2189.53, "TVD": 1641.99, "Horizontal_distance": 1316.499, "Angle": 49.86672 },
  { "MD": 2218.34, "TVD": 1660.56, "Horizontal_distance": 1338.526, "Angle": 49.89272 },
  { "MD": 2247.15, "TVD": 1679.12, "Horizontal_distance": 1360.561, "Angle": 50.00035 },
  { "MD": 2276.04, "TVD": 1697.69, "Horizontal_distance": 1382.692, "Angle": 50.2123 },
  { "MD": 2304.98, "TVD": 1716.21, "Horizontal_distance": 1404.93, "Angle": 50.09261 },
  { "MD": 2333.91, "TVD": 1734.77, "Horizontal_distance": 1427.122, "Angle": 49.80306 },
  { "MD": 2362.93, "TVD": 1753.5, "Horizontal_distance": 1449.288, "Angle": 49.77182 },
  { "MD": 2391.73, "TVD": 1772.1, "Horizontal_distance": 1471.277, "Angle": 49.79323 },
  { "MD": 2420.93, "TVD": 1790.95, "Horizontal_distance": 1493.577, "Angle": 49.59934 },
  { "MD": 2449.52, "TVD": 1809.48, "Horizontal_distance": 1515.349, "Angle": 49.5245 },
  { "MD": 2478.59, "TVD": 1828.35, "Horizontal_distance": 1537.462, "Angle": 49.75684 },
  { "MD": 2507.83, "TVD": 1847.24, "Horizontal_distance": 1559.782, "Angle": 49.70943 },
  { "MD": 2536.16, "TVD": 1865.56, "Horizontal_distance": 1581.391, "Angle": 49.75614 },
  { "MD": 2565.09, "TVD": 1884.25, "Horizontal_distance": 1603.473, "Angle": 49.87423 },
  { "MD": 2593.92, "TVD": 1902.83, "Horizontal_distance": 1625.518, "Angle": 49.7772 },
  { "MD": 2622.94, "TVD": 1921.57, "Horizontal_distance": 1647.676, "Angle": 49.78433 },
  { "MD": 2651.67, "TVD": 1940.12, "Horizontal_distance": 1669.614, "Angle": 49.87078 },
  { "MD": 2680.56, "TVD": 1958.74, "Horizontal_distance": 1691.703, "Angle": 49.79486 },
  { "MD": 2709.73, "TVD": 1977.57, "Horizontal_distance": 1713.982, "Angle": 49.64312 },
  { "MD": 2738.67, "TVD": 1996.31, "Horizontal_distance": 1736.035, "Angle": 49.7362 },
  { "MD": 2767.65, "TVD": 2015.04, "Horizontal_distance": 1758.149, "Angle": 49.87831 },
  { "MD": 2796.11, "TVD": 2033.38, "Horizontal_distance": 1779.911, "Angle": 49.79389 },
  { "MD": 2825.14, "TVD": 2052.12, "Horizontal_distance": 1802.082, "Angle": 49.79718 },
  { "MD": 2854.11, "TVD": 2070.82, "Horizontal_distance": 1824.209, "Angle": 49.73778 },
  { "MD": 2883.06, "TVD": 2089.53, "Horizontal_distance": 1846.3, "Angle": 49.33735 },
  { "MD": 2912.05, "TVD": 2108.42, "Horizontal_distance": 1868.291, "Angle": 49.25083 },
  { "MD": 2940.79, "TVD": 2127.18, "Horizontal_distance": 1890.064, "Angle": 49.31805 },
  { "MD": 2969.83, "TVD": 2146.11, "Horizontal_distance": 1912.086, "Angle": 49.25193 },
  { "MD": 2998.54, "TVD": 2164.85, "Horizontal_distance": 1933.836, "Angle": 49.30575 },
  { "MD": 3027.22, "TVD": 2183.55, "Horizontal_distance": 1955.581, "Angle": 49.51677 },
  { "MD": 3056.27, "TVD": 2202.41, "Horizontal_distance": 1977.677, "Angle": 49.42817 },
  { "MD": 3084.96, "TVD": 2221.07, "Horizontal_distance": 1999.469, "Angle": 49.40477 },
  { "MD": 3113.79, "TVD": 2239.83, "Horizontal_distance": 2021.361, "Angle": 49.8441 },
  { "MD": 3142.54, "TVD": 2258.37, "Horizontal_distance": 2043.334, "Angle": 49.84725 },
  { "MD": 3171.54, "TVD": 2277.07, "Horizontal_distance": 2065.499, "Angle": 49.55135 },
  { "MD": 3178.43, "TVD": 2281.54, "Horizontal_distance": 2070.743, "Angle": 0 },
  { "MD": 3178.45, "TVD": 2281.56, "Horizontal_distance": 2070.743, "Angle": 47.40236 },
  { "MD": 3208.25, "TVD": 2301.73, "Horizontal_distance": 2092.679, "Angle": 44.09737 },
  { "MD": 3235.18, "TVD": 2321.07, "Horizontal_distance": 2111.419, "Angle": 42.54385 },
  { "MD": 3254.44, "TVD": 2335.26, "Horizontal_distance": 2124.442, "Angle": 42.58331 },
  { "MD": 3283.26, "TVD": 2356.48, "Horizontal_distance": 2143.943, "Angle": 42.90589 },
  { "MD": 3311.93, "TVD": 2377.48, "Horizontal_distance": 2163.462, "Angle": 43.05467 },
  { "MD": 3340.82, "TVD": 2398.59, "Horizontal_distance": 2183.185, "Angle": 43.46217 },
  { "MD": 3369.78, "TVD": 2419.61, "Horizontal_distance": 2203.106, "Angle": 44.64954 },
  { "MD": 3398.68, "TVD": 2440.17, "Horizontal_distance": 2223.416, "Angle": 45.40086 },
  { "MD": 3427.62, "TVD": 2460.49, "Horizontal_distance": 2244.022, "Angle": 45.22869 },
  { "MD": 3456.6, "TVD": 2480.9, "Horizontal_distance": 2264.596, "Angle": 44.9577 },
  { "MD": 3514.54, "TVD": 2521.9, "Horizontal_distance": 2305.535, "Angle": 44.40724 },
  { "MD": 3543.53, "TVD": 2542.61, "Horizontal_distance": 2325.821, "Angle": 44.29784 },
  { "MD": 3552.5, "TVD": 2549.03, "Horizontal_distance": 2332.086, "Angle": 44.26567 },
  { "MD": 3570.5, "TVD": 2561.92, "Horizontal_distance": 2344.649, "Angle": 0 }
];
const casingData = [
  { section: 'Casing', size: '30"', fromMD: 0, toMD: 118.5, ID: 28, OD: 30, roughness: 0.001 },
  { section: 'Casing', size: '20"', fromMD: 0, toMD: 282.5, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: 'Casing', size: '13 3/8"', fromMD: 0, toMD: 1091.5, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: 'Casing', size: '9 5/8"', fromMD: 0, toMD: 3192.5, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: 'Liner', size: '7"', fromMD: 3038.5, toMD: 3570.5, ID: 6.184, OD: 7, roughness: 0.001 }
];

const tubingData = [
  { fromMD: 0, toMD: 3415.5, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 2', type: 'SSSV', MD: 162.64 },
  { name: 'Pk 2', type: 'Pk', MD: 3332.25 },
  { name: 'LN', type: 'Choke', MD: 3366.75 }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3250.35,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 148.9668,
  temperature: 30, // Updated soil temp
  c: 8.63e-06,
  n: 0.8,
  OGR: '9.4687 sm3/mmsm3',
  WGR: '148 sm3/mmsm3'
};

function C24P13() {
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

export default C24P13
