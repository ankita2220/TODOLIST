import React from 'react'


const trajectoryData = [
  { "MD": 0, "TVD": 0, "Horizontal_distance": 0, "Angle": 0 },
  { "MD": 24.48, "TVD": 24.48, "Horizontal_distance": 0, "Angle": 0 },
  { "MD": 49.98, "TVD": 49.98, "Horizontal_distance": 0, "Angle": 5.1264 },
  { "MD": 52.48, "TVD": 52.47, "Horizontal_distance": 0.2233831, "Angle": 2.181345 },
  { "MD": 80.08, "TVD": 80.05, "Horizontal_distance": 1.273907, "Angle": 2.61541 },
  { "MD": 89.68, "TVD": 89.64, "Horizontal_distance": 1.711971, "Angle": 3.661116 },
  { "MD": 99.48, "TVD": 99.42, "Horizontal_distance": 2.33775, "Angle": 3.738228 },
  { "MD": 108.88, "TVD": 108.8, "Horizontal_distance": 2.950612, "Angle": 3.679946 },
  { "MD": 118.58, "TVD": 118.48, "Horizontal_distance": 3.573188, "Angle": 4.53081 },
  { "MD": 128.18, "TVD": 128.05, "Horizontal_distance": 4.331541, "Angle": 4.53081 },
  { "MD": 137.78, "TVD": 137.62, "Horizontal_distance": 5.089895, "Angle": 5.835078 },
  { "MD": 157.08, "TVD": 156.82, "Horizontal_distance": 7.052036, "Angle": 6.923334 },
  { "MD": 166.68, "TVD": 166.35, "Horizontal_distance": 8.209231, "Angle": 7.541753 },
  { "MD": 195.58, "TVD": 195, "Horizontal_distance": 12.00232, "Angle": 8.277129 },
  { "MD": 205.18, "TVD": 204.5, "Horizontal_distance": 13.38434, "Angle": 8.63693 },
  { "MD": 214.88, "TVD": 214.09, "Horizontal_distance": 14.84102, "Angle": 8.300786 },
  { "MD": 225.38, "TVD": 224.48, "Horizontal_distance": 16.3569, "Angle": 9.120801 },
  { "MD": 234.08, "TVD": 233.07, "Horizontal_distance": 17.736, "Angle": 9.390953 },
  { "MD": 243.78, "TVD": 242.64, "Horizontal_distance": 19.31875, "Angle": 10.08924 },
  { "MD": 253.48, "TVD": 252.19, "Horizontal_distance": 21.01801, "Angle": 10.79865 },
  { "MD": 263.08, "TVD": 261.62, "Horizontal_distance": 22.81665, "Angle": 10.80892 },
  { "MD": 275.48, "TVD": 273.8, "Horizontal_distance": 25.14207, "Angle": 11.37623 },
  { "MD": 310.6, "TVD": 308.23, "Horizontal_distance": 32.06952, "Angle": 12.78373 },
  { "MD": 340.05, "TVD": 336.95, "Horizontal_distance": 38.58597, "Angle": 15.2147 },
  { "MD": 368.58, "TVD": 364.48, "Horizontal_distance": 46.07329, "Angle": 17.81847 },
  { "MD": 397.14, "TVD": 391.67, "Horizontal_distance": 54.81271, "Angle": 19.9554 },
  { "MD": 426.12, "TVD": 418.91, "Horizontal_distance": 64.70325, "Angle": 21.79437 },
  { "MD": 455.22, "TVD": 445.93, "Horizontal_distance": 75.5074, "Angle": 23.41019 },
  { "MD": 483.89, "TVD": 472.24, "Horizontal_distance": 86.89831, "Angle": 24.83563 },
  { "MD": 512.76, "TVD": 498.44, "Horizontal_distance": 99.02419, "Angle": 26.28694 },
  { "MD": 541.77, "TVD": 524.45, "Horizontal_distance": 111.8718, "Angle": 28.01019 },
  { "MD": 570.54, "TVD": 549.85, "Horizontal_distance": 125.383, "Angle": 30.07863 },
  { "MD": 599.65, "TVD": 575.04, "Horizontal_distance": 139.9726, "Angle": 32.18975 },
  { "MD": 628.21, "TVD": 599.21, "Horizontal_distance": 155.1872, "Angle": 34.03354 },
  { "MD": 657.05, "TVD": 623.11, "Horizontal_distance": 171.3283, "Angle": 35.72929 },
  { "MD": 685.9, "TVD": 646.53, "Horizontal_distance": 188.1754, "Angle": 37.6854 },
  { "MD": 714.9, "TVD": 669.48, "Horizontal_distance": 205.9039, "Angle": 40.13912 },
  { "MD": 743.73, "TVD": 691.52, "Horizontal_distance": 224.489, "Angle": 42.70139 },
  { "MD": 772.7, "TVD": 712.81, "Horizontal_distance": 244.1358, "Angle": 45.17616 },
  { "MD": 801.71, "TVD": 733.26, "Horizontal_distance": 264.7119, "Angle": 47.4897 },
  { "MD": 830.42, "TVD": 752.66, "Horizontal_distance": 285.8757, "Angle": 49.38576 },
  { "MD": 859.5, "TVD": 771.59, "Horizontal_distance": 307.9506, "Angle": 51.17881 },
  { "MD": 887.91, "TVD": 789.4, "Horizontal_distance": 330.085, "Angle": 52.99621 },
  { "MD": 916.82, "TVD": 806.8, "Horizontal_distance": 353.1724, "Angle": 54.70238 },
  { "MD": 945.86, "TVD": 823.58, "Horizontal_distance": 376.8737, "Angle": 56.42247 },
  { "MD": 974.41, "TVD": 839.37, "Horizontal_distance": 400.6598, "Angle": 58.19646 },
  { "MD": 1003.29, "TVD": 854.59, "Horizontal_distance": 425.2038, "Angle": 60.06786 },
  { "MD": 1032.53, "TVD": 869.18, "Horizontal_distance": 450.5437, "Angle": 60.94656 },
  { "MD": 1061.4, "TVD": 883.2, "Horizontal_distance": 475.7809, "Angle": 60.69748 },
  { "MD": 1090.23, "TVD": 897.31, "Horizontal_distance": 500.922, "Angle": 60.67563 },
  { "MD": 1119.02, "TVD": 911.41, "Horizontal_distance": 526.0229, "Angle": 60.03427 },
  { "MD": 1147.97, "TVD": 925.87, "Horizontal_distance": 551.103, "Angle": 59.28033 },
  { "MD": 1175.65, "TVD": 940.01, "Horizontal_distance": 574.8988, "Angle": 59.19041 },
  { "MD": 1204.37, "TVD": 954.72, "Horizontal_distance": 599.5657, "Angle": 59.4668 },
  { "MD": 1234.23, "TVD": 969.89, "Horizontal_distance": 625.2852, "Angle": 59.78496 },
  { "MD": 1261.95, "TVD": 983.84, "Horizontal_distance": 649.2392, "Angle": 59.97853 },
  { "MD": 1292.77, "TVD": 999.26, "Horizontal_distance": 675.9243, "Angle": 60.03385 },
  { "MD": 1322.08, "TVD": 1013.9, "Horizontal_distance": 701.3162, "Angle": 60.03633 },
  { "MD": 1349.39, "TVD": 1027.54, "Horizontal_distance": 724.976, "Angle": 60.05788 },
  { "MD": 1377.96, "TVD": 1041.8, "Horizontal_distance": 749.7328, "Angle": 60.07698 },
  { "MD": 1408.03, "TVD": 1056.8, "Horizontal_distance": 775.7943, "Angle": 59.9173 },
  { "MD": 1436.04, "TVD": 1070.84, "Horizontal_distance": 800.0315, "Angle": 59.58661 },
  { "MD": 1465.71, "TVD": 1085.86, "Horizontal_distance": 825.6187, "Angle": 59.37952 },
  { "MD": 1494.59, "TVD": 1100.57, "Horizontal_distance": 850.4717, "Angle": 59.44542 },
  { "MD": 1523.9, "TVD": 1115.47, "Horizontal_distance": 875.7119, "Angle": 59.6849 },
  { "MD": 1552.29, "TVD": 1129.8, "Horizontal_distance": 900.2199, "Angle": 59.81754 },
  { "MD": 1583.14, "TVD": 1145.31, "Horizontal_distance": 926.8875, "Angle": 59.87603 },
  { "MD": 1609.84, "TVD": 1158.71, "Horizontal_distance": 949.9815, "Angle": 60.20511 },
  { "MD": 1638.84, "TVD": 1173.12, "Horizontal_distance": 975.1479, "Angle": 60.34399 },
  { "MD": 1667.64, "TVD": 1187.37, "Horizontal_distance": 1000.175, "Angle": 60.45807 },
  { "MD": 1696.46, "TVD": 1201.58, "Horizontal_distance": 1025.249, "Angle": 60.47931 },
  { "MD": 1724, "TVD": 1215.15, "Horizontal_distance": 1049.213, "Angle": 59.93689 },
  { "MD": 1755.46, "TVD": 1230.91, "Horizontal_distance": 1076.441, "Angle": 59.6927 },
  { "MD": 1784.57, "TVD": 1245.6, "Horizontal_distance": 1101.573, "Angle": 59.73427 },
  { "MD": 1813.24, "TVD": 1260.05, "Horizontal_distance": 1126.335, "Angle": 59.64217 },
  { "MD": 1841.95, "TVD": 1274.56, "Horizontal_distance": 1151.108, "Angle": 59.6338 },
  { "MD": 1870.91, "TVD": 1289.2, "Horizontal_distance": 1176.096, "Angle": 59.81464 },
  { "MD": 1899.49, "TVD": 1303.57, "Horizontal_distance": 1200.8, "Angle": 60.08853 },
  { "MD": 1929.37, "TVD": 1318.47, "Horizontal_distance": 1226.7, "Angle": 60.15232 },
  { "MD": 1957.58, "TVD": 1332.51, "Horizontal_distance": 1251.168, "Angle": 60.24133 },
  { "MD": 1986.33, "TVD": 1346.78, "Horizontal_distance": 1276.127, "Angle": 60.34233 },
  { "MD": 2015.27, "TVD": 1361.1, "Horizontal_distance": 1301.275, "Angle": 60.31976 },
  { "MD": 2044.19, "TVD": 1375.42, "Horizontal_distance": 1326.401, "Angle": 60.27605 },
  { "MD": 2072.91, "TVD": 1389.66, "Horizontal_distance": 1351.342, "Angle": 60.26067 },
  { "MD": 2102.06, "TVD": 1404.12, "Horizontal_distance": 1376.653, "Angle": 60.241 },
  { "MD": 2130.85, "TVD": 1418.41, "Horizontal_distance": 1401.646, "Angle": 60.27358 },
  { "MD": 2159.83, "TVD": 1432.78, "Horizontal_distance": 1426.812, "Angle": 60.36335 },
  { "MD": 2188.91, "TVD": 1447.16, "Horizontal_distance": 1452.088, "Angle": 60.18373 },
  { "MD": 2217.69, "TVD": 1461.47, "Horizontal_distance": 1477.058, "Angle": 59.9073 },
  { "MD": 2246.25, "TVD": 1475.79, "Horizontal_distance": 1501.769, "Angle": 59.79517 },
  { "MD": 2275.35, "TVD": 1490.43, "Horizontal_distance": 1526.918, "Angle": 59.80583 },
  { "MD": 2304.34, "TVD": 1505.01, "Horizontal_distance": 1551.975, "Angle": 59.80461 },
  { "MD": 2333.15, "TVD": 1519.5, "Horizontal_distance": 1576.876, "Angle": 59.77001 },
  { "MD": 2361.95, "TVD": 1534, "Horizontal_distance": 1601.759, "Angle": 59.79559 },
  { "MD": 2391.11, "TVD": 1548.67, "Horizontal_distance": 1626.961, "Angle": 59.81631 },
  { "MD": 2419.95, "TVD": 1563.17, "Horizontal_distance": 1651.89, "Angle": 59.66483 },
  { "MD": 2448.62, "TVD": 1577.65, "Horizontal_distance": 1676.635, "Angle": 59.6871 },
  { "MD": 2477.21, "TVD": 1592.08, "Horizontal_distance": 1701.316, "Angle": 59.79129 },
  { "MD": 2505.77, "TVD": 1606.45, "Horizontal_distance": 1725.998, "Angle": 59.76124 },
  { "MD": 2534.9, "TVD": 1621.12, "Horizontal_distance": 1751.164, "Angle": 59.75925 },
  { "MD": 2563.79, "TVD": 1635.67, "Horizontal_distance": 1776.123, "Angle": 59.81567 },
  { "MD": 2592.53, "TVD": 1650.12, "Horizontal_distance": 1800.966, "Angle": 60.05704 },
  { "MD": 2621.52, "TVD": 1664.59, "Horizontal_distance": 1826.086, "Angle": 60.14864 },
  { "MD": 2650.43, "TVD": 1678.98, "Horizontal_distance": 1851.161, "Angle": 60.17292 },
  { "MD": 2679.1, "TVD": 1693.24, "Horizontal_distance": 1876.033, "Angle": 60.29053 },
  { "MD": 2708.66, "TVD": 1707.89, "Horizontal_distance": 1901.707, "Angle": 60.23367 },
  { "MD": 2736.94, "TVD": 1721.93, "Horizontal_distance": 1926.256, "Angle": 60.14854 },
  { "MD": 2765.87, "TVD": 1736.33, "Horizontal_distance": 1951.347, "Angle": 60.22946 },
  { "MD": 2794.67, "TVD": 1750.63, "Horizontal_distance": 1976.346, "Angle": 60.29634 },
  { "MD": 2823.65, "TVD": 1764.99, "Horizontal_distance": 2001.518, "Angle": 60.16236 },
  { "MD": 2852.15, "TVD": 1779.17, "Horizontal_distance": 2026.24, "Angle": 60.20894 },
  { "MD": 2882.2, "TVD": 1794.1, "Horizontal_distance": 2052.319, "Angle": 60.28486 },
  { "MD": 2911.19, "TVD": 1808.47, "Horizontal_distance": 2077.497, "Angle": 60.12613 },
  { "MD": 2940.02, "TVD": 1822.83, "Horizontal_distance": 2102.496, "Angle": 59.79795 },
  { "MD": 2969.52, "TVD": 1837.67, "Horizontal_distance": 2127.992, "Angle": 59.56824 },
  { "MD": 2997.93, "TVD": 1852.06, "Horizontal_distance": 2152.488, "Angle": 59.63202 },
  { "MD": 3026.75, "TVD": 1866.63, "Horizontal_distance": 2177.353, "Angle": 59.78236 },
  { "MD": 3055.66, "TVD": 1881.18, "Horizontal_distance": 2202.335, "Angle": 59.61744 },
  { "MD": 3084.25, "TVD": 1895.64, "Horizontal_distance": 2226.999, "Angle": 59.74977 },
  { "MD": 3113.37, "TVD": 1910.31, "Horizontal_distance": 2252.154, "Angle": 60.18502 },
  { "MD": 3141.95, "TVD": 1924.52, "Horizontal_distance": 2276.951, "Angle": 60.22601 },
  { "MD": 3171.19, "TVD": 1939.04, "Horizontal_distance": 2302.331, "Angle": 60.1942 },
  { "MD": 3200.12, "TVD": 1953.42, "Horizontal_distance": 2327.434, "Angle": 60.21421 },
  { "MD": 3229.43, "TVD": 1967.98, "Horizontal_distance": 2352.871, "Angle": 60.19473 },
  { "MD": 3258.28, "TVD": 1982.32, "Horizontal_distance": 2377.905, "Angle": 60.14915 },
  { "MD": 3287.09, "TVD": 1996.66, "Horizontal_distance": 2402.893, "Angle": 60.23122 },
  { "MD": 3315.67, "TVD": 2010.85, "Horizontal_distance": 2427.701, "Angle": 60.27395 },
  { "MD": 3344.61, "TVD": 2025.2, "Horizontal_distance": 2452.833, "Angle": 60.22961 },
  { "MD": 3373.39, "TVD": 2039.49, "Horizontal_distance": 2477.815, "Angle": 60.0688 },
  { "MD": 3402.23, "TVD": 2053.88, "Horizontal_distance": 2502.808, "Angle": 59.704 },
  { "MD": 3431.33, "TVD": 2068.56, "Horizontal_distance": 2527.934, "Angle": 59.47352 },
  { "MD": 3460.31, "TVD": 2083.28, "Horizontal_distance": 2552.897, "Angle": 60.02648 },
  { "MD": 3485.29, "TVD": 2095.76, "Horizontal_distance": 2574.536, "Angle": 59.40689 },
  { "MD": 3513.82, "TVD": 2110.28, "Horizontal_distance": 2599.095, "Angle": 57.14362 },
  { "MD": 3543.09, "TVD": 2126.16, "Horizontal_distance": 2623.683, "Angle": 54.73023 },
  { "MD": 3572.86, "TVD": 2143.35, "Horizontal_distance": 2647.988, "Angle": 53.5911 },
  { "MD": 3601.67, "TVD": 2160.45, "Horizontal_distance": 2671.175, "Angle": 55.06728 },
  { "MD": 3630.59, "TVD": 2177.01, "Horizontal_distance": 2694.884, "Angle": 56.43775 },
  { "MD": 3659.26, "TVD": 2192.86, "Horizontal_distance": 2718.774, "Angle": 56.89002 },
  { "MD": 3687.91, "TVD": 2208.51, "Horizontal_distance": 2742.772, "Angle": 57.2486 },
  { "MD": 3716.45, "TVD": 2223.95, "Horizontal_distance": 2766.775, "Angle": 56.14563 },
  { "MD": 3745.53, "TVD": 2240.15, "Horizontal_distance": 2790.925, "Angle": 54.19461 },
  { "MD": 3774.93, "TVD": 2257.35, "Horizontal_distance": 2814.768, "Angle": 51.72726 },
  { "MD": 3804.2, "TVD": 2275.48, "Horizontal_distance": 2837.747, "Angle": 48.49411 },
  { "MD": 3832.75, "TVD": 2294.4, "Horizontal_distance": 2859.128, "Angle": 45.84405 },
  { "MD": 3861.69, "TVD": 2314.56, "Horizontal_distance": 2879.891, "Angle": 43.40683 },
  { "MD": 3890.83, "TVD": 2335.73, "Horizontal_distance": 2899.915, "Angle": 41.73713 },
  { "MD": 3919.83, "TVD": 2357.37, "Horizontal_distance": 2919.221, "Angle": 41.34815 },
  { "MD": 3948.03, "TVD": 2378.54, "Horizontal_distance": 2937.851, "Angle": 41.25622 },
  { "MD": 3977.72, "TVD": 2400.86, "Horizontal_distance": 2957.429, "Angle": 41.35745 },
  { "MD": 4006.79, "TVD": 2422.68, "Horizontal_distance": 2976.637, "Angle": 41.61275 },
  { "MD": 4028.07, "TVD": 2438.59, "Horizontal_distance": 2990.769, "Angle": 41.55307 },
  { "MD": 4052.19, "TVD": 2456.64, "Horizontal_distance": 3006.768, "Angle": 41.57822 },
  { "MD": 4068.86, "TVD": 2469.11, "Horizontal_distance": 3017.831, "Angle": 41.90731 },
  { "MD": 4086.18, "TVD": 2482, "Horizontal_distance": 3029.4, "Angle": 0 }
];
const casingData = [
  { section: 'Casing', size: '30"', fromMD: 0, toMD: 130.18, ID: 28, OD: 30, roughness: 0.001 },
  { section: 'Casing', size: '20"', fromMD: 0, toMD: 289.18, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: 'Casing', size: '13 3/8"', fromMD: 0, toMD: 1738.18, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: 'Casing', size: '9 5/8"', fromMD: 0, toMD: 3840.18, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: 'Liner', size: '7"', fromMD: 3333.18, toMD: 4050.18, ID: 6.184, OD: 7, roughness: 0.001 },
  { section: 'Open hole', size: '6"', fromMD: 4050.18, toMD: 4086.179, ID: 6, OD: 6, roughness: null } // Assuming OD is same as ID for open hole and roughness is null/not applicable
];

const tubingData = [
  { fromMD: 0, toMD: 4046.97, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 3', type: 'SSSV', MD: 156.84 },
  { name: 'Pk 3', type: 'Pk', MD: 3976.36 },
  { name: 'LN', type: 'Choke', MD: 3988.74 },
  { name: 'NA 5', type: 'NA', MD: 4068.18 } 
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

function C24P14() {
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

export default C24P14
