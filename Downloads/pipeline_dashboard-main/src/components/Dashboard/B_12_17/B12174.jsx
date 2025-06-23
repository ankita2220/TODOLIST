import React from 'react'


const trajectoryData = [
    { "MD": 0, "TVD": 0, "HD": 0, "Angle": 0 },
    { "MD": 38.59, "TVD": 38.59, "HD": 0, "Angle": 1.479412 },
    { "MD": 68.59, "TVD": 68.58, "HD": 0.7745321, "Angle": 4.488495 },
    { "MD": 124.02, "TVD": 123.84, "HD": 5.112423, "Angle": 7.548799 },
    { "MD": 154.02, "TVD": 153.58, "HD": 9.05354, "Angle": 10.27026 },
    { "MD": 211.44, "TVD": 210.08, "HD": 19.29104, "Angle": 11.664 },
    { "MD": 240.98, "TVD": 239.01, "HD": 25.2632, "Angle": 11.64591 },
    { "MD": 269.64, "TVD": 267.08, "HD": 31.04859, "Angle": 12.77071 },
    { "MD": 325.83, "TVD": 321.88, "HD": 43.46938, "Angle": 14.29184 },
    { "MD": 354.91, "TVD": 350.06, "HD": 50.6481, "Angle": 15.39316 },
    { "MD": 384.18, "TVD": 378.28, "HD": 58.41756, "Angle": 16.12854 },
    { "MD": 412.89, "TVD": 405.86, "HD": 66.393, "Angle": 17.16286 },
    { "MD": 441.41, "TVD": 433.11, "HD": 74.80893, "Angle": 19.14457 },
    { "MD": 470.34, "TVD": 460.44, "HD": 84.29661, "Angle": 21.23146 },
    { "MD": 498.48, "TVD": 486.67, "HD": 94.48713, "Angle": 23.04525 },
    { "MD": 527.05, "TVD": 512.96, "HD": 105.6711, "Angle": 24.50367 },
    { "MD": 556.14, "TVD": 539.43, "HD": 117.7362, "Angle": 25.8834 },
    { "MD": 584.65, "TVD": 565.08, "HD": 130.182, "Angle": 27.6493 },
    { "MD": 613.11, "TVD": 590.29, "HD": 143.3891, "Angle": 29.58132 },
    { "MD": 641.88, "TVD": 615.31, "HD": 157.5916, "Angle": 30.95325 },
    { "MD": 670.81, "TVD": 640.12, "HD": 172.4715, "Angle": 32.95328 },
    { "MD": 697.91, "TVD": 662.86, "HD": 187.2126, "Angle": 35.48604 },
    { "MD": 727.79, "TVD": 687.19, "HD": 204.5581, "Angle": 37.79263 },
    { "MD": 756.87, "TVD": 710.17, "HD": 222.3785, "Angle": 40.15541 },
    { "MD": 785.72, "TVD": 732.22, "HD": 240.9828, "Angle": 42.0212 },
    { "MD": 814.23, "TVD": 753.4, "HD": 260.0675, "Angle": 43.59378 },
    { "MD": 842.77, "TVD": 774.07, "HD": 279.747, "Angle": 45.12255 },
    { "MD": 871.2, "TVD": 794.13, "HD": 299.893, "Angle": 46.46267 },
    { "MD": 899.93, "TVD": 813.92, "HD": 320.7202, "Angle": 47.32157 },
    { "MD": 928.46, "TVD": 833.26, "HD": 341.6946, "Angle": 47.44975 },
    { "MD": 957.37, "TVD": 852.81, "HD": 362.9921, "Angle": 47.27754 },
    { "MD": 986.23, "TVD": 872.39, "HD": 384.1941, "Angle": 47.19224 },
    { "MD": 1014.97, "TVD": 891.92, "HD": 405.2788, "Angle": 47.25248 },
    { "MD": 1043.89, "TVD": 911.55, "HD": 426.5163, "Angle": 47.39421 },
    { "MD": 1072.09, "TVD": 930.64, "HD": 447.2723, "Angle": 47.5185 },
    { "MD": 1100.49, "TVD": 949.82, "HD": 468.2172, "Angle": 47.29451 },
    { "MD": 1128.74, "TVD": 968.98, "HD": 488.9767, "Angle": 46.93648 },
    { "MD": 1157.65, "TVD": 988.72, "HD": 510.0982, "Angle": 46.81106 },
    { "MD": 1184.52, "TVD": 1007.11, "HD": 529.6892, "Angle": 46.99221 },
    { "MD": 1215.41, "TVD": 1028.18, "HD": 552.2778, "Angle": 47.54853 },
    { "MD": 1244.33, "TVD": 1047.7, "HD": 573.6164, "Angle": 47.95317 },
    { "MD": 1272.55, "TVD": 1066.6, "HD": 594.5725, "Angle": 47.65473 },
    { "MD": 1301.41, "TVD": 1086.04, "HD": 615.9029, "Angle": 47.24635 },
    { "MD": 1329.87, "TVD": 1105.36, "HD": 636.8005, "Angle": 47.09437 },
    { "MD": 1359.13, "TVD": 1125.28, "HD": 658.2328, "Angle": 46.90174 },
    { "MD": 1387.67, "TVD": 1144.78, "HD": 679.0722, "Angle": 46.71444 },
    { "MD": 1416.49, "TVD": 1164.54, "HD": 700.0516, "Angle": 46.95539 },
    { "MD": 1445, "TVD": 1184, "HD": 720.8873, "Angle": 47.41333 },
    { "MD": 1473.89, "TVD": 1203.55, "HD": 742.1577, "Angle": 47.53863 },
    { "MD": 1500.79, "TVD": 1221.71, "HD": 762.0027, "Angle": 47.43996 },
    { "MD": 1530.7, "TVD": 1241.94, "HD": 784.0335, "Angle": 47.43798 },
    { "MD": 1559.16, "TVD": 1261.19, "HD": 804.9956, "Angle": 47.42427 },
    { "MD": 1587.45, "TVD": 1280.33, "HD": 825.8279, "Angle": 47.39139 },
    { "MD": 1616.52, "TVD": 1300.01, "HD": 847.2233, "Angle": 47.44587 },
    { "MD": 1645.28, "TVD": 1319.46, "HD": 868.409, "Angle": 47.49842 },
    { "MD": 1674.35, "TVD": 1339.1, "HD": 889.8411, "Angle": 47.47064 },
    { "MD": 1703.02, "TVD": 1358.48, "HD": 910.9689, "Angle": 47.52345 },
    { "MD": 1731.63, "TVD": 1377.8, "HD": 932.0703, "Angle": 47.32915 },
    { "MD": 1759.81, "TVD": 1396.9, "HD": 952.7899, "Angle": 47.18618 },
    { "MD": 1789.15, "TVD": 1416.84, "HD": 974.3128, "Angle": 47.28623 },
    { "MD": 1818, "TVD": 1436.41, "HD": 995.5104, "Angle": 47.35444 },
    { "MD": 1848.88, "TVD": 1457.33, "HD": 1018.224, "Angle": 47.3779 },
    { "MD": 1877.47, "TVD": 1476.69, "HD": 1039.262, "Angle": 47.35943 },
    { "MD": 1906.36, "TVD": 1496.26, "HD": 1060.514, "Angle": 47.3603 },
    { "MD": 1935.28, "TVD": 1515.85, "HD": 1081.788, "Angle": 47.38465 },
    { "MD": 1966.03, "TVD": 1536.67, "HD": 1104.418, "Angle": 47.34568 },
    { "MD": 1993.23, "TVD": 1555.1, "HD": 1124.422, "Angle": 47.32171 },
    { "MD": 2021.17, "TVD": 1574.04, "HD": 1144.963, "Angle": 47.34277 },
    { "MD": 2049.8, "TVD": 1593.44, "HD": 1166.018, "Angle": 47.35682 },
    { "MD": 2078.6, "TVD": 1612.95, "HD": 1187.203, "Angle": 47.37598 },
    { "MD": 2107.44, "TVD": 1632.48, "HD": 1208.424, "Angle": 47.37084 },
    { "MD": 2136.1, "TVD": 1651.89, "HD": 1229.51, "Angle": 47.30398 },
    { "MD": 2164.65, "TVD": 1671.25, "HD": 1250.493, "Angle": 47.33246 },
    { "MD": 2193.54, "TVD": 1690.83, "HD": 1271.736, "Angle": 47.35154 },
    { "MD": 2222.16, "TVD": 1710.22, "HD": 1292.787, "Angle": 47.34633 },
    { "MD": 2250.91, "TVD": 1729.7, "HD": 1313.931, "Angle": 47.29897 },
    { "MD": 2279.59, "TVD": 1749.15, "HD": 1335.008, "Angle": 47.30084 },
    { "MD": 2308.33, "TVD": 1768.64, "HD": 1356.13, "Angle": 47.37683 },
    { "MD": 2337.2, "TVD": 1788.19, "HD": 1377.373, "Angle": 47.38386 },
    { "MD": 2365.04, "TVD": 1807.04, "HD": 1397.861, "Angle": 47.38413 },
    { "MD": 2394.49, "TVD": 1826.98, "HD": 1419.534, "Angle": 47.38923 },
    { "MD": 2423.16, "TVD": 1846.39, "HD": 1440.634, "Angle": 47.40481 },
    { "MD": 2451.41, "TVD": 1865.51, "HD": 1461.43, "Angle": 47.35423 },
    { "MD": 2480.43, "TVD": 1885.17, "HD": 1482.776, "Angle": 47.35161 },
    { "MD": 2509.36, "TVD": 1904.77, "HD": 1504.055, "Angle": 47.38839 },
    { "MD": 2538, "TVD": 1924.16, "HD": 1525.133, "Angle": 47.35415 },
    { "MD": 2566.4, "TVD": 1943.4, "HD": 1546.022, "Angle": 47.36824 },
    { "MD": 2594.97, "TVD": 1962.75, "HD": 1567.042, "Angle": 47.33938 },
    { "MD": 2623.79, "TVD": 1982.28, "HD": 1588.236, "Angle": 47.4025 },
    { "MD": 2652.94, "TVD": 2002.01, "HD": 1609.694, "Angle": 47.35769 },
    { "MD": 2681.15, "TVD": 2021.12, "HD": 1630.445, "Angle": 47.38722 },
    { "MD": 2710.07, "TVD": 2040.7, "HD": 1651.729, "Angle": 47.39967 },
    { "MD": 2738.79, "TVD": 2060.14, "HD": 1672.869, "Angle": 47.42354 },
    { "MD": 2767.39, "TVD": 2079.49, "HD": 1693.929, "Angle": 47.56702 },
    { "MD": 2788.48, "TVD": 2093.72, "HD": 1709.495, "Angle": 48.73474 },
    { "MD": 2818.44, "TVD": 2113.48, "HD": 1732.015, "Angle": 50.32096 },
    { "MD": 2843.28, "TVD": 2129.34, "HD": 1751.133, "Angle": 50.85623 },
    { "MD": 2873.79, "TVD": 2148.6, "HD": 1774.795, "Angle": 50.72342 },
    { "MD": 2901.07, "TVD": 2165.87, "HD": 1795.913, "Angle": 49.97966 },
    { "MD": 2929.31, "TVD": 2184.03, "HD": 1817.539, "Angle": 49.09992 },
    { "MD": 2958.94, "TVD": 2203.43, "HD": 1839.935, "Angle": 48.98715 },
    { "MD": 2987.68, "TVD": 2222.29, "HD": 1861.621, "Angle": 48.85907 },
    { "MD": 3015.86, "TVD": 2240.83, "HD": 1882.844, "Angle": 49.29085 },
    { "MD": 3044.47, "TVD": 2259.49, "HD": 1904.531, "Angle": 49.52959 },
    { "MD": 3073.05, "TVD": 2278.04, "HD": 1926.273, "Angle": 49.71411 },
    { "MD": 3103.95, "TVD": 2298.02, "HD": 1949.844, "Angle": 49.91683 },
    { "MD": 3132.06, "TVD": 2316.12, "HD": 1971.351, "Angle": 49.5805 },
    { "MD": 3140.08, "TVD": 2321.32, "HD": 1977.457, "Angle": 49.39732 },
    { "MD": 3149.96, "TVD": 2327.75, "HD": 1984.959, "Angle": 0 }
]

const casingData = [
  { section: 'Casing', size: '30"', fromMD: 0, toMD: 110.4, ID: 28, OD: 30, roughness: 0.001 },
  { section: 'Casing', size: '20"', fromMD: 0, toMD: 384.4, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: 'Casing', size: '13 3/8"', fromMD: 0, toMD: 1785.4, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: 'Casing', size: '9 5/8"', fromMD: 0, toMD: 2589.4, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: 'Liner', size: '7"', fromMD: 2447.4, toMD: 2729.4, ID: 6.184, OD: 7, roughness: 0.001 },
];

const tubingData = [
  { fromMD: 0, toMD: 3164.67, ID: 2.992, OD: 0.254, roughness: 0.001 },
];

const equipmentData = [
  { name: 'SSSV', type: 'SSSV', MD: 160.43 },
  { name: 'Packer', type: 'Pk', MD: 3141.42 },
  { name: 'Packer', type: 'NA 2', MD: 3178.67 },
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3178.67,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 195.9668,
  temperature: 107,
  c: 	5.67E-07,
  n: 0.8,
  OGR: '306 sm3/mmsm3',
  WGR: '0 sm3/mmsm3',
};


function B12174() {
 

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

export default B12174
