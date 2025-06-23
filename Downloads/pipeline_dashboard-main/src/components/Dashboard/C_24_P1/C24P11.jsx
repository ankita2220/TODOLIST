import React from 'react'

const trajectoryData = [
  { "MD": 0, "TVD": 0, "Horizontal_distance": 0, "Angle": 0 },
  { "MD": 19.02, "TVD": 19.02, "Horizontal_distance": 0, "Angle": 0 },
  { "MD": 44.02, "TVD": 44.02, "Horizontal_distance": 0, "Angle": 1.412702 },
  { "MD": 76.92, "TVD": 76.91, "Horizontal_distance": 0.8111104, "Angle": 1.854129 },
  { "MD": 96.02, "TVD": 96, "Horizontal_distance": 1.429091, "Angle": 3.661116 },
  { "MD": 105.82, "TVD": 105.78, "Horizontal_distance": 2.05487, "Angle": 3.679946 },
  { "MD": 115.52, "TVD": 115.46, "Horizontal_distance": 2.677446, "Angle": 4.125131 },
  { "MD": 134.82, "TVD": 134.71, "Horizontal_distance": 4.06579, "Angle": 5.232183 },
  { "MD": 144.42, "TVD": 144.27, "Horizontal_distance": 4.941233, "Angle": 6.409204 },
  { "MD": 154.02, "TVD": 153.81, "Horizontal_distance": 6.012867, "Angle": 6.409204 },
  { "MD": 163.62, "TVD": 163.35, "Horizontal_distance": 7.084501, "Angle": 7.363693 },
  { "MD": 173.32, "TVD": 172.97, "Horizontal_distance": 8.327723, "Angle": 7.382772 },
  { "MD": 192.62, "TVD": 192.11, "Horizontal_distance": 10.80772, "Angle": 8.277129 },
  { "MD": 211.82, "TVD": 211.11, "Horizontal_distance": 13.57178, "Angle": 9.068722 },
  { "MD": 221.42, "TVD": 220.59, "Horizontal_distance": 15.08492, "Angle": 9.797048 },
  { "MD": 240.62, "TVD": 239.51, "Horizontal_distance": 18.35197, "Angle": 11.05508 },
  { "MD": 250.32, "TVD": 249.03, "Horizontal_distance": 20.21197, "Angle": 11.3873 },
  { "MD": 263.02, "TVD": 261.48, "Horizontal_distance": 22.71946, "Angle": 11.80764 },
  { "MD": 275.78, "TVD": 273.97, "Horizontal_distance": 25.33049, "Angle": 12.9983 },
  { "MD": 304.66, "TVD": 302.11, "Horizontal_distance": 31.82624, "Angle": 14.06987 },
  { "MD": 333.66, "TVD": 330.24, "Horizontal_distance": 38.87629, "Angle": 15.23712 },
  { "MD": 362.96, "TVD": 358.51, "Horizontal_distance": 46.57675, "Angle": 17.71391 },
  { "MD": 392.91, "TVD": 387.04, "Horizontal_distance": 55.68946, "Angle": 19.74314 },
  { "MD": 422.34, "TVD": 414.74, "Horizontal_distance": 65.63104, "Angle": 21.34542 },
  { "MD": 451.35, "TVD": 441.76, "Horizontal_distance": 76.19038, "Angle": 22.80226 },
  { "MD": 480.14, "TVD": 468.3, "Horizontal_distance": 87.348, "Angle": 24.31611 },
  { "MD": 509.11, "TVD": 494.7, "Horizontal_distance": 99.27699, "Angle": 25.77254 },
  { "MD": 537.56, "TVD": 520.32, "Horizontal_distance": 111.647, "Angle": 27.33301 },
  { "MD": 566.58, "TVD": 546.1, "Horizontal_distance": 124.9719, "Angle": 28.79825 },
  { "MD": 594.96, "TVD": 570.97, "Horizontal_distance": 138.6433, "Angle": 30.27991 },
  { "MD": 623.4, "TVD": 595.53, "Horizontal_distance": 152.9835, "Angle": 31.87338 },
  { "MD": 652.78, "TVD": 620.48, "Horizontal_distance": 168.4974, "Angle": 34.02428 },
  { "MD": 681.46, "TVD": 644.25, "Horizontal_distance": 184.5451, "Angle": 36.71592 },
  { "MD": 710.04, "TVD": 667.16, "Horizontal_distance": 201.6316, "Angle": 38.77152 },
  { "MD": 739.13, "TVD": 689.84, "Horizontal_distance": 219.8483, "Angle": 40.8568 },
  { "MD": 767.49, "TVD": 711.29, "Horizontal_distance": 238.4005, "Angle": 44.05039 },
  { "MD": 796.75, "TVD": 732.32, "Horizontal_distance": 258.7447, "Angle": 46.42602 },
  { "MD": 826.07, "TVD": 752.53, "Horizontal_distance": 279.9866, "Angle": 47.19818 },
  { "MD": 854.46, "TVD": 771.82, "Horizontal_distance": 300.8166, "Angle": 47.17714 },
  { "MD": 883.03, "TVD": 791.24, "Horizontal_distance": 321.7715, "Angle": 46.85241 },
  { "MD": 911.69, "TVD": 810.84, "Horizontal_distance": 342.6817, "Angle": 46.05087 },
  { "MD": 940.45, "TVD": 830.8, "Horizontal_distance": 363.3877, "Angle": 46.03531 },
  { "MD": 969.49, "TVD": 850.96, "Horizontal_distance": 384.2897, "Angle": 46.0655 },
  { "MD": 998.69, "TVD": 871.22, "Horizontal_distance": 405.3176, "Angle": 45.62633 },
  { "MD": 1027.26, "TVD": 891.2, "Horizontal_distance": 425.7393, "Angle": 45.5396 },
  { "MD": 1056.1, "TVD": 911.4, "Horizontal_distance": 446.3234, "Angle": 45.49224 },
  { "MD": 1084.93, "TVD": 931.61, "Horizontal_distance": 466.8837, "Angle": 45.573 },
  { "MD": 1113.93, "TVD": 951.91, "Horizontal_distance": 487.5938, "Angle": 45.41083 },
  { "MD": 1143.16, "TVD": 972.43, "Horizontal_distance": 508.4102, "Angle": 45.24432 },
  { "MD": 1172.29, "TVD": 992.94, "Horizontal_distance": 529.0959, "Angle": 45.07577 },
  { "MD": 1200.81, "TVD": 1013.08, "Horizontal_distance": 549.2892, "Angle": 45.18522 },
  { "MD": 1230.08, "TVD": 1033.71, "Horizontal_distance": 570.053, "Angle": 45.41041 },
  { "MD": 1258.74, "TVD": 1053.83, "Horizontal_distance": 590.4633, "Angle": 45.39729 },
  { "MD": 1287.55, "TVD": 1074.06, "Horizontal_distance": 610.9758, "Angle": 45.3894 },
  { "MD": 1316, "TVD": 1094.04, "Horizontal_distance": 631.2293, "Angle": 45.46511 },
  { "MD": 1345.03, "TVD": 1114.4, "Horizontal_distance": 651.9226, "Angle": 45.3422 },
  { "MD": 1373.94, "TVD": 1134.72, "Horizontal_distance": 672.4867, "Angle": 45.14535 },
  { "MD": 1402.75, "TVD": 1155.04, "Horizontal_distance": 692.9101, "Angle": 45.38548 },
  { "MD": 1420.32, "TVD": 1167.38, "Horizontal_distance": 705.4173, "Angle": 45.25139 },
  { "MD": 1451.84, "TVD": 1189.57, "Horizontal_distance": 727.8029, "Angle": 45.06938 },
  { "MD": 1461.44, "TVD": 1196.35, "Horizontal_distance": 734.5993, "Angle": 45.33614 },
  { "MD": 1490.29, "TVD": 1216.63, "Horizontal_distance": 755.1187, "Angle": 45.37767 },
  { "MD": 1519.09, "TVD": 1236.86, "Horizontal_distance": 775.6171, "Angle": 45.1533 },
  { "MD": 1548.06, "TVD": 1257.29, "Horizontal_distance": 796.1567, "Angle": 45.01366 },
  { "MD": 1577.03, "TVD": 1277.77, "Horizontal_distance": 816.6465, "Angle": 44.94101 },
  { "MD": 1606.26, "TVD": 1298.46, "Horizontal_distance": 837.294, "Angle": 45.0609 },
  { "MD": 1634.9, "TVD": 1318.69, "Horizontal_distance": 857.567, "Angle": 45.41558 },
  { "MD": 1663.99, "TVD": 1339.11, "Horizontal_distance": 878.2854, "Angle": 45.50107 },
  { "MD": 1693.01, "TVD": 1359.45, "Horizontal_distance": 898.9843, "Angle": 45.54252 },
  { "MD": 1721.98, "TVD": 1379.74, "Horizontal_distance": 919.6622, "Angle": 45.59548 },
  { "MD": 1750.52, "TVD": 1399.71, "Horizontal_distance": 940.0517, "Angle": 45.46871 },
  { "MD": 1779.78, "TVD": 1420.23, "Horizontal_distance": 960.9102, "Angle": 45.34971 },
  { "MD": 1808.58, "TVD": 1440.47, "Horizontal_distance": 981.3988, "Angle": 45.38365 },
  { "MD": 1837.44, "TVD": 1460.74, "Horizontal_distance": 1001.942, "Angle": 45.39721 },
  { "MD": 1865.78, "TVD": 1480.64, "Horizontal_distance": 1022.12, "Angle": 45.5506 },
  { "MD": 1894.44, "TVD": 1500.71, "Horizontal_distance": 1042.579, "Angle": 45.81892 },
  { "MD": 1923.74, "TVD": 1521.13, "Horizontal_distance": 1063.592, "Angle": 46.01704 },
  { "MD": 1952.9, "TVD": 1541.38, "Horizontal_distance": 1084.574, "Angle": 46.0542 },
  { "MD": 1981.46, "TVD": 1561.2, "Horizontal_distance": 1105.137, "Angle": 45.99491 },
  { "MD": 2010.45, "TVD": 1581.34, "Horizontal_distance": 1125.989, "Angle": 45.98 },
  { "MD": 2039.72, "TVD": 1601.68, "Horizontal_distance": 1147.037, "Angle": 46.09015 },
  { "MD": 2068.14, "TVD": 1621.39, "Horizontal_distance": 1167.511, "Angle": 46.04595 },
  { "MD": 2097.2, "TVD": 1641.56, "Horizontal_distance": 1188.431, "Angle": 45.80718 },
  { "MD": 2125.92, "TVD": 1661.58, "Horizontal_distance": 1209.024, "Angle": 45.55904 },
  { "MD": 2154.67, "TVD": 1681.71, "Horizontal_distance": 1229.55, "Angle": 45.48328 },
  { "MD": 2183.31, "TVD": 1701.79, "Horizontal_distance": 1249.972, "Angle": 45.573 },
  { "MD": 2212.41, "TVD": 1722.16, "Horizontal_distance": 1270.754, "Angle": 45.45395 },
  { "MD": 2241.42, "TVD": 1742.51, "Horizontal_distance": 1291.429, "Angle": 45.18119 },
  { "MD": 2270.39, "TVD": 1762.93, "Horizontal_distance": 1311.978, "Angle": 45.22481 },
  { "MD": 2299.51, "TVD": 1783.44, "Horizontal_distance": 1332.65, "Angle": 45.30759 },
  { "MD": 2327.99, "TVD": 1803.47, "Horizontal_distance": 1352.896, "Angle": 45.30299 },
  { "MD": 2356.88, "TVD": 1823.79, "Horizontal_distance": 1373.432, "Angle": 45.20212 },
  { "MD": 2385.96, "TVD": 1844.28, "Horizontal_distance": 1394.067, "Angle": 45.21239 },
  { "MD": 2414.08, "TVD": 1864.09, "Horizontal_distance": 1414.024, "Angle": 45.42433 },
  { "MD": 2443.26, "TVD": 1884.57, "Horizontal_distance": 1434.81, "Angle": 45.71558 },
  { "MD": 2471.36, "TVD": 1904.19, "Horizontal_distance": 1454.926, "Angle": 45.70579 },
  { "MD": 2500.93, "TVD": 1924.84, "Horizontal_distance": 1476.092, "Angle": 45.7126 },
  { "MD": 2529.63, "TVD": 1944.88, "Horizontal_distance": 1496.636, "Angle": 45.68394 },
  { "MD": 2558.53, "TVD": 1965.07, "Horizontal_distance": 1517.314, "Angle": 45.62488 },
  { "MD": 2587.9, "TVD": 1985.61, "Horizontal_distance": 1538.307, "Angle": 45.6067 },
  { "MD": 2616.46, "TVD": 2005.59, "Horizontal_distance": 1558.715, "Angle": 45.57022 },
  { "MD": 2645.33, "TVD": 2025.8, "Horizontal_distance": 1579.331, "Angle": 45.61999 },
  { "MD": 2674.34, "TVD": 2046.09, "Horizontal_distance": 1600.065, "Angle": 45.56749 },
  { "MD": 2703.48, "TVD": 2066.49, "Horizontal_distance": 1620.873, "Angle": 45.53949 },
  { "MD": 2732.22, "TVD": 2086.62, "Horizontal_distance": 1641.386, "Angle": 45.53691 },
  { "MD": 2761.13, "TVD": 2106.87, "Horizontal_distance": 1662.019, "Angle": 45.55349 },
  { "MD": 2789.92, "TVD": 2127.03, "Horizontal_distance": 1682.572, "Angle": 45.63661 },
  { "MD": 2818.91, "TVD": 2147.3, "Horizontal_distance": 1703.298, "Angle": 45.71624 },
  { "MD": 2847.44, "TVD": 2167.22, "Horizontal_distance": 1723.722, "Angle": 45.75611 },
  { "MD": 2876.75, "TVD": 2187.67, "Horizontal_distance": 1744.719, "Angle": 45.74429 },
  { "MD": 2905.28, "TVD": 2207.58, "Horizontal_distance": 1765.153, "Angle": 45.65509 },
  { "MD": 2934.58, "TVD": 2228.06, "Horizontal_distance": 1786.107, "Angle": 45.62305 },
  { "MD": 2963.42, "TVD": 2248.23, "Horizontal_distance": 1806.721, "Angle": 45.61774 },
  { "MD": 2992.1, "TVD": 2268.29, "Horizontal_distance": 1827.218, "Angle": 45.70731 },
  { "MD": 3006.42, "TVD": 2278.29, "Horizontal_distance": 1837.468, "Angle": 45.61422 },
  { "MD": 3031.71, "TVD": 2295.98, "Horizontal_distance": 1855.541, "Angle": 45.48006 },
  { "MD": 3060.22, "TVD": 2315.97, "Horizontal_distance": 1875.869, "Angle": 45.36648 },
  { "MD": 3088.63, "TVD": 2335.93, "Horizontal_distance": 1896.086, "Angle": 45.59564 },
  { "MD": 3116.97, "TVD": 2355.76, "Horizontal_distance": 1916.333, "Angle": 45.73754 },
  { "MD": 3145.21, "TVD": 2375.47, "Horizontal_distance": 1936.557, "Angle": 45.48697 },
  { "MD": 3173.21, "TVD": 2395.1, "Horizontal_distance": 1956.523, "Angle": 45.55899 },
  { "MD": 3201.86, "TVD": 2415.16, "Horizontal_distance": 1976.979, "Angle": 45.71239 },
  { "MD": 3230.03, "TVD": 2434.83, "Horizontal_distance": 1997.144, "Angle": 46.3388 },
  { "MD": 3258.55, "TVD": 2454.52, "Horizontal_distance": 2017.776, "Angle": 46.41139 },
  { "MD": 3287.34, "TVD": 2474.37, "Horizontal_distance": 2038.629, "Angle": 45.85132 },
  { "MD": 3315.81, "TVD": 2494.2, "Horizontal_distance": 2059.057, "Angle": 45.4158 },
  { "MD": 3344.43, "TVD": 2514.29, "Horizontal_distance": 2079.441, "Angle": 45.40444 },
  { "MD": 3373.03, "TVD": 2534.37, "Horizontal_distance": 2099.807, "Angle": 45.59605 },
  { "MD": 3400.87, "TVD": 2553.85, "Horizontal_distance": 2119.696, "Angle": 45.41434 },
  { "MD": 3423.15, "TVD": 2569.49, "Horizontal_distance": 2135.564, "Angle": 0 }
];



const casingData = [

  { section: 'Casing', size: '30"', fromMD: 0, toMD: 126.15, ID: 28, OD: 30, roughness: 0.001 },
  { section: 'Casing', size: '20"', fromMD: 0, toMD: 280.15, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: 'Casing', size: '13 3/8"', fromMD: 0, toMD: 1438.15, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: 'Casing', size: '9 5/8"', fromMD: 0, toMD: 3025.15, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: 'Liner', size: '7"', fromMD: 2869.15, toMD: 3327.665, ID: 6.184, OD: 7, roughness: 0.001 }
];
const tubingData = [
  { fromMD: 0, toMD: 3279.65, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV', type: 'SSSV', MD: 156.15 },
  { name: 'Packer', type: 'Pk', MD: 3132 },
  { name: 'Choke', type: 'LN', MD: 3144.29 },
  { name: 'NA', type: 'NA', MD: 3250.401 }
];


const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3250.35,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 148.9668,
  temperature: 107,
  c: 8.63e-06,
  n: 0.8,
  OGR: '9.4687 sm3/mmsm3',
  WGR: '148 sm3/mmsm3'
};


function C24P11() {
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

export default C24P11
