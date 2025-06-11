import React from 'react'


const trajectoryData = [
  { MD: 0, TVD: 0, HD: 0, Angle: 0 },
  { MD: 49.61, TVD: 49.61, HD: 0, Angle: 0 },
  { MD: 119.05, TVD: 119.05, HD: 0, Angle: 1.479412 },
  { MD: 149.05, TVD: 149.04, HD: 0.7745321, Angle: 4.923057 },
  { MD: 233.08, TVD: 232.76, HD: 7.985808, Angle: 8.506147 },
  { MD: 263.08, TVD: 262.43, HD: 12.42327, Angle: 10.02644 },
  { MD: 291.89, TVD: 290.8, HD: 17.43917, Angle: 10.72373 },
  { MD: 320.52, TVD: 318.93, HD: 22.76646, Angle: 10.73879 },
  { MD: 349.07, TVD: 346.98, HD: 28.08623, Angle: 11.1187 },
  { MD: 364.52, TVD: 362.14, HD: 31.06564, Angle: 11.50862 },
  { MD: 385.41, TVD: 382.61, HD: 35.23352, Angle: 12.15584 },
  { MD: 409.94, TVD: 406.59, HD: 40.39884, Angle: 14.10326 },
  { MD: 438.14, TVD: 433.94, HD: 47.27034, Angle: 16.54913 },
  { MD: 467.35, TVD: 461.94, HD: 55.59044, Angle: 18.5766 },
  { MD: 496.14, TVD: 489.23, HD: 64.76213, Angle: 20.52221 },
  { MD: 524.03, TVD: 515.35, HD: 74.53954, Angle: 22.40964 },
  { MD: 552.5, TVD: 541.67, HD: 85.39304, Angle: 24.33081 },
  { MD: 580.76, TVD: 567.42, HD: 97.03629, Angle: 26.31846 },
  { MD: 608.93, TVD: 592.67, HD: 109.5257, Angle: 28.31601 },
  { MD: 637.93, TVD: 618.2, HD: 123.2814, Angle: 30.29198 },
  { MD: 667.3, TVD: 643.56, HD: 138.0959, Angle: 32.11292 },
  { MD: 696.32, TVD: 668.14, HD: 153.5226, Angle: 33.80442 },
  { MD: 724.89, TVD: 691.88, HD: 169.4178, Angle: 35.4082 },
  { MD: 753.87, TVD: 715.5, HD: 186.2087, Angle: 37.35089 },
  { MD: 782.3, TVD: 738.1, HD: 203.4571, Angle: 40.08487 },
  { MD: 811.29, TVD: 760.28, HD: 222.1244, Angle: 41.9362 },
  { MD: 839.52, TVD: 781.28, HD: 240.9905, Angle: 43.25018 },
  { MD: 867.72, TVD: 801.82, HD: 260.3128, Angle: 45.33226 },
  { MD: 896.44, TVD: 822.01, HD: 280.7383, Angle: 47.45801 },
  { MD: 924.97, TVD: 841.3, HD: 301.7587, Angle: 49.18905 },
  { MD: 953.72, TVD: 860.09, HD: 323.5187, Angle: 50.07639 },
  { MD: 983.17, TVD: 878.99, HD: 346.1039, Angle: 49.8748 },
  { MD: 1011.69, TVD: 897.37, HD: 367.9114, Angle: 49.21412 },
  { MD: 1041.22, TVD: 916.66, HD: 390.2702, Angle: 49.00989 },
  { MD: 1070.4, TVD: 935.8, HD: 412.296, Angle: 49.07687 },
  { MD: 1097.65, TVD: 953.65, HD: 432.8858, Angle: 49.11053 },
  { MD: 1126.66, TVD: 972.64, HD: 454.8166, Angle: 49.37768 },
  { MD: 1154.23, TVD: 990.59, HD: 475.7427, Angle: 49.34406 },
  { MD: 1183.27, TVD: 1009.51, HD: 497.7735, Angle: 49.05405 },
  { MD: 1210.95, TVD: 1027.65, HD: 518.6809, Angle: 48.94969 },
  { MD: 1240.78, TVD: 1047.24, HD: 541.1767, Angle: 48.87304 },
  { MD: 1269.5, TVD: 1066.13, HD: 562.8102, Angle: 48.83979 },
  { MD: 1298.52, TVD: 1085.23, HD: 584.6585, Angle: 48.65935 },
  { MD: 1327.33, TVD: 1104.26, HD: 606.289, Angle: 48.5048 },
  { MD: 1355.72, TVD: 1123.07, HD: 627.5534, Angle: 48.87639 },
  { MD: 1384.67, TVD: 1142.11, HD: 649.3612, Angle: 49.05326 },
  { MD: 1412.67, TVD: 1160.46, HD: 670.5101, Angle: 48.98145 },
  { MD: 1441.94, TVD: 1179.67, HD: 692.5943, Angle: 48.9263 },
  { MD: 1469.61, TVD: 1197.85, HD: 713.4537, Angle: 49.09871 },
  { MD: 1498.72, TVD: 1216.91, HD: 735.4562, Angle: 49.44149 },
  { MD: 1527.71, TVD: 1235.76, HD: 757.4811, Angle: 49.49016 },
  { MD: 1556.19, TVD: 1254.26, HD: 779.1343, Angle: 49.08514 },
  { MD: 1585.46, TVD: 1273.43, HD: 801.2532, Angle: 48.78661 },
  { MD: 1613.66, TVD: 1292.01, HD: 822.4669, Angle: 48.91228 },
  { MD: 1641.87, TVD: 1310.55, HD: 843.7289, Angle: 48.98236 },
  { MD: 1672.07, TVD: 1330.37, HD: 866.515, Angle: 48.73605 },
  { MD: 1700.09, TVD: 1348.85, HD: 887.5771, Angle: 48.87465 },
  { MD: 1728.37, TVD: 1367.45, HD: 908.8796, Angle: 48.88791 },
  { MD: 1757.57, TVD: 1386.65, HD: 930.8796, Angle: 48.89585 },
  { MD: 1786.44, TVD: 1405.63, HD: 952.6336, Angle: 49.23266 },
  { MD: 1814.71, TVD: 1424.09, HD: 974.0444, Angle: 49.50231 },
  { MD: 1843.89, TVD: 1443.04, HD: 996.2338, Angle: 49.50559 },
  { MD: 1871.84, TVD: 1461.19, HD: 1017.489, Angle: 49.15448 },
  { MD: 1900.31, TVD: 1479.81, HD: 1039.026, Angle: 49.15814 },
  { MD: 1930.51, TVD: 1499.56, HD: 1061.873, Angle: 49.11729 },
  { MD: 1958.21, TVD: 1517.69, HD: 1082.815, Angle: 49.12163 },
  { MD: 1978.41, TVD: 1530.91, HD: 1098.088, Angle: 49.04737 },
  { MD: 1987.61, TVD: 1536.94, HD: 1105.037, Angle: 49.07657 },
  { MD: 2015.73, TVD: 1555.36, HD: 1126.284, Angle: 49.14154 },
  { MD: 2044.59, TVD: 1574.24, HD: 1148.111, Angle: 49.06912 },
  { MD: 2072.95, TVD: 1592.82, HD: 1169.537, Angle: 48.9855 },
  { MD: 2084.47, TVD: 1600.38, HD: 1178.23, Angle: 48.954 },
  { MD: 2101.8, TVD: 1611.76, HD: 1191.3, Angle: 48.90934 },
  { MD: 2130.48, TVD: 1630.61, HD: 1212.915, Angle: 48.89973 },
  { MD: 2159.55, TVD: 1649.72, HD: 1234.821, Angle: 48.93352 },
  { MD: 2188.32, TVD: 1668.62, HD: 1256.512, Angle: 48.91159 },
  { MD: 2216.91, TVD: 1687.41, HD: 1278.06, Angle: 48.93391 },
  { MD: 2244.98, TVD: 1705.85, HD: 1299.224, Angle: 48.96907 },
  { MD: 2272.43, TVD: 1723.87, HD: 1319.931, Angle: 48.92906 },
  { MD: 2301.03, TVD: 1742.66, HD: 1341.492, Angle: 48.92322 },
  { MD: 2332.29, TVD: 1763.2, HD: 1365.057, Angle: 48.94923 },
  { MD: 2359.12, TVD: 1780.82, HD: 1385.29, Angle: 48.93121 },
  { MD: 2387.98, TVD: 1799.78, HD: 1407.048, Angle: 48.93562 },
  { MD: 2417.01, TVD: 1818.85, HD: 1428.936, Angle: 48.92213 },
  { MD: 2446.23, TVD: 1838.05, HD: 1450.963, Angle: 48.93974 },
  { MD: 2474.76, TVD: 1856.79, HD: 1472.475, Angle: 48.93506 },
  { MD: 2503.47, TVD: 1875.65, HD: 1494.121, Angle: 48.94052 },
  { MD: 2531.97, TVD: 1894.37, HD: 1515.611, Angle: 48.94572 },
  { MD: 2560.61, TVD: 1913.18, HD: 1537.208, Angle: 48.96475 },
  { MD: 2589.2, TVD: 1931.95, HD: 1558.774, Angle: 48.96451 },
  { MD: 2617.47, TVD: 1950.51, HD: 1580.098, Angle: 48.94651 },
  { MD: 2646.08, TVD: 1969.3, HD: 1601.673, Angle: 48.94305 },
  { MD: 2675.16, TVD: 1988.4, HD: 1623.601, Angle: 48.91767 },
  { MD: 2703.86, TVD: 2007.26, HD: 1645.234, Angle: 48.95529 },
  { MD: 2732.14, TVD: 2025.83, HD: 1666.562, Angle: 48.92803 },
  { MD: 2761.47, TVD: 2045.1, HD: 1688.674, Angle: 48.9678 },
  { MD: 2789.62, TVD: 2063.58, HD: 1709.909, Angle: 48.96918 },
  { MD: 2818.7, TVD: 2082.67, HD: 1731.845, Angle: 48.9555 },
  { MD: 2847.97, TVD: 2101.89, HD: 1753.921, Angle: 48.93371 },
  { MD: 2876.39, TVD: 2120.56, HD: 1775.348, Angle: 48.97644 },
  { MD: 2905.2, TVD: 2139.47, HD: 1797.083, Angle: 48.96799 },
  { MD: 2933.67, TVD: 2158.16, HD: 1818.559, Angle: 48.95127 },
  { MD: 2962.1, TVD: 2176.83, HD: 1840, Angle: 48.93389 },
  { MD: 2991.54, TVD: 2196.17, HD: 1862.196, Angle: 48.95316 },
  { MD: 3020.9, TVD: 2215.45, HD: 1884.339, Angle: 48.9446 },
  { MD: 3035.41, TVD: 2224.98, HD: 1895.28, Angle: 48.96916 },
  { MD: 3048.48, TVD: 2233.56, HD: 1905.14, Angle: 48.91084 },
  { MD: 3077.1, TVD: 2252.37, HD: 1926.71, Angle: 48.90796 },
  { MD: 3106.19, TVD: 2271.49, HD: 1948.634, Angle: 48.9076 },
  { MD: 3134.23, TVD: 2289.92, HD: 1969.767, Angle: 48.95169 },
  { MD: 3155.29, TVD: 2303.75, HD: 1985.649, Angle: 48.95451 },
  { MD: 3162.95, TVD: 2308.78, HD: 1991.426, Angle: 49.20661 },
  { MD: 3205.7, TVD: 2336.71, HD: 2023.791, Angle: 49.64508 },
  { MD: 3233.73, TVD: 2354.86, HD: 2045.151, Angle: 49.46498 },
  { MD: 3262.38, TVD: 2373.48, HD: 2066.925, Angle: 49.61711 },
  { MD: 3289.9, TVD: 2391.31, HD: 2087.888, Angle: 49.93985 },
  { MD: 3304.49, TVD: 2400.7, HD: 2099.055, Angle: 50.06073 },
  { MD: 3306.11, TVD: 2401.74, HD: 2100.297, Angle: 49.53773 },
  { MD: 3335.08, TVD: 2420.54, HD: 2122.338, Angle: 49.41049 },
  { MD: 3346.1, TVD: 2427.71, HD: 2130.707, Angle: 49.7651 },
  { MD: 3355.42, TVD: 2433.73, HD: 2137.822, Angle: 0 },
];


const casingData = [
  { section: 'Casing', size: '30"', fromMD: 0, toMD: 113.42, ID: 28, OD: 1, roughness: 0.001 },
  { section: 'Casing', size: '20"', fromMD: 0, toMD: 386.42, ID: 18.73, OD: 0.635, roughness: 0.001 },
  { section: 'Casing', size: '13 3/8"', fromMD: 0, toMD: 1973.42, ID: 12.347, OD: 0.514, roughness: 0.001 },
  { section: 'Casing', size: '9 5/8"', fromMD: 0, toMD: 3180.42, ID: 8.681, OD: 0.472, roughness: 0.001 },
  { section: 'Liner', size: '7"', fromMD: 3036.42, toMD: 3355.42, ID: 6.184, OD: 0.408, roughness: 0.001 },
];


const tubingData = [
  { fromMD: 0, toMD: 3164.67, ID: 2.992, OD: 0.254, roughness: 0.001 },
];

const equipmentData = [
  { name: 'SSSV', type: 'SSSV 5', MD: 148.64 },
  { name: 'Packer', type: 'Pk 5', MD: 3180.44 },
  { name: '', type: 'NA 4', MD: 3214.42 },
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3214.42,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 223.9668,
  temperature: 107,
  c:4.79E-06,
  n: 0.8,
  OGR: '177 sm3/mmsm3',
  WGR: '0 sm3/mmsm3',
};

function B12176() {
  return (
    <div>



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

     
    </div>
    </div>

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

export default B12176
