import React from 'react'

const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 22.12,
    "TVD": 22.12,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 44.12,
    "TVD": 44.12,
    "HD": 0.0,
    "Angle": 1.341775
  },
  {
    "MD": 117.06,
    "TVD": 117.04,
    "HD": 1.707981,
    "Angle": 2.774633
  },
  {
    "MD": 134.12,
    "TVD": 134.08,
    "HD": 2.533814,
    "Angle": 4.279749
  },
  {
    "MD": 162.81,
    "TVD": 162.69,
    "HD": 4.674842,
    "Angle": 6.763343
  },
  {
    "MD": 191.55,
    "TVD": 191.23,
    "HD": 8.059513,
    "Angle": 9.096436
  },
  {
    "MD": 219.38,
    "TVD": 218.71,
    "HD": 12.45934,
    "Angle": 11.83613
  },
  {
    "MD": 248.07,
    "TVD": 246.79,
    "HD": 18.34404,
    "Angle": 14.37909
  },
  {
    "MD": 276.8,
    "TVD": 274.62,
    "HD": 25.47875,
    "Angle": 16.93272
  },
  {
    "MD": 304.48,
    "TVD": 301.1,
    "HD": 33.54051,
    "Angle": 19.08978
  },
  {
    "MD": 332.12,
    "TVD": 327.22,
    "HD": 42.58015,
    "Angle": 21.82545
  },
  {
    "MD": 372.02,
    "TVD": 364.26,
    "HD": 57.41418,
    "Angle": 24.02986
  },
  {
    "MD": 381.02,
    "TVD": 372.48,
    "HD": 61.0791,
    "Angle": 24.51729
  },
  {
    "MD": 387.12,
    "TVD": 378.03,
    "HD": 63.6104,
    "Angle": 26.33402
  },
  {
    "MD": 416.51,
    "TVD": 404.37,
    "HD": 76.64791,
    "Angle": 28.96479
  },
  {
    "MD": 446.81,
    "TVD": 430.88,
    "HD": 91.32135,
    "Angle": 31.42719
  },
  {
    "MD": 473.6,
    "TVD": 453.74,
    "HD": 105.29,
    "Angle": 33.6602
  },
  {
    "MD": 503.78,
    "TVD": 478.86,
    "HD": 122.0178,
    "Angle": 35.81351
  },
  {
    "MD": 531.97,
    "TVD": 501.72,
    "HD": 138.5132,
    "Angle": 37.86194
  },
  {
    "MD": 560.71,
    "TVD": 524.41,
    "HD": 156.1526,
    "Angle": 39.69847
  },
  {
    "MD": 589.68,
    "TVD": 546.7,
    "HD": 174.6571,
    "Angle": 40.95562
  },
  {
    "MD": 617.95,
    "TVD": 568.05,
    "HD": 193.1874,
    "Angle": 41.10508
  },
  {
    "MD": 648.62,
    "TVD": 591.16,
    "HD": 213.3512,
    "Angle": 41.46769
  },
  {
    "MD": 674.71,
    "TVD": 610.71,
    "HD": 230.6279,
    "Angle": 42.57877
  },
  {
    "MD": 703.46,
    "TVD": 631.88,
    "HD": 250.0802,
    "Angle": 43.24498
  },
  {
    "MD": 730.93,
    "TVD": 651.89,
    "HD": 268.9005,
    "Angle": 43.5964
  },
  {
    "MD": 757.69,
    "TVD": 671.27,
    "HD": 287.3535,
    "Angle": 44.01109
  },
  {
    "MD": 787.89,
    "TVD": 692.99,
    "HD": 308.3363,
    "Angle": 44.40706
  },
  {
    "MD": 816.25,
    "TVD": 713.25,
    "HD": 328.1813,
    "Angle": 44.96507
  },
  {
    "MD": 846.1,
    "TVD": 734.37,
    "HD": 349.2756,
    "Angle": 45.34875
  },
  {
    "MD": 874.06,
    "TVD": 754.02,
    "HD": 369.1662,
    "Angle": 45.46977
  },
  {
    "MD": 903.62,
    "TVD": 774.75,
    "HD": 390.239,
    "Angle": 45.42279
  },
  {
    "MD": 932.5,
    "TVD": 795.02,
    "HD": 410.8104,
    "Angle": 45.60066
  },
  {
    "MD": 961.5,
    "TVD": 815.31,
    "HD": 431.5303,
    "Angle": 45.88108
  },
  {
    "MD": 990.33,
    "TVD": 835.38,
    "HD": 452.2273,
    "Angle": 45.88569
  },
  {
    "MD": 1018.99,
    "TVD": 855.33,
    "HD": 472.8038,
    "Angle": 45.94055
  },
  {
    "MD": 1047.06,
    "TVD": 874.85,
    "HD": 492.9754,
    "Angle": 45.93372
  },
  {
    "MD": 1076.55,
    "TVD": 895.36,
    "HD": 514.165,
    "Angle": 45.86919
  },
  {
    "MD": 1105.46,
    "TVD": 915.49,
    "HD": 534.9152,
    "Angle": 45.69166
  },
  {
    "MD": 1135.18,
    "TVD": 936.25,
    "HD": 556.1826,
    "Angle": 45.38098
  },
  {
    "MD": 1163.64,
    "TVD": 956.24,
    "HD": 576.4402,
    "Angle": 45.25487
  },
  {
    "MD": 1191.71,
    "TVD": 976.0,
    "HD": 596.3768,
    "Angle": 45.33475
  },
  {
    "MD": 1220.73,
    "TVD": 996.4,
    "HD": 617.0166,
    "Angle": 45.38496
  },
  {
    "MD": 1249.79,
    "TVD": 1016.81,
    "HD": 637.7027,
    "Angle": 45.61038
  },
  {
    "MD": 1277.68,
    "TVD": 1036.32,
    "HD": 657.6329,
    "Angle": 45.77579
  },
  {
    "MD": 1308.09,
    "TVD": 1057.53,
    "HD": 679.4252,
    "Angle": 45.85834
  },
  {
    "MD": 1336.98,
    "TVD": 1077.65,
    "HD": 700.1572,
    "Angle": 45.81561
  },
  {
    "MD": 1363.71,
    "TVD": 1096.28,
    "HD": 719.3253,
    "Angle": 45.849
  },
  {
    "MD": 1394.16,
    "TVD": 1117.49,
    "HD": 741.1734,
    "Angle": 45.83659
  },
  {
    "MD": 1423.01,
    "TVD": 1137.59,
    "HD": 761.8691,
    "Angle": 45.77537
  },
  {
    "MD": 1451.9,
    "TVD": 1157.74,
    "HD": 782.572,
    "Angle": 45.80162
  },
  {
    "MD": 1481.32,
    "TVD": 1178.25,
    "HD": 803.6641,
    "Angle": 45.63048
  },
  {
    "MD": 1509.22,
    "TVD": 1197.76,
    "HD": 823.6083,
    "Angle": 45.28012
  },
  {
    "MD": 1538.88,
    "TVD": 1218.63,
    "HD": 844.6833,
    "Angle": 45.29375
  },
  {
    "MD": 1567.68,
    "TVD": 1238.89,
    "HD": 865.1521,
    "Angle": 45.43788
  },
  {
    "MD": 1596.81,
    "TVD": 1259.33,
    "HD": 885.907,
    "Angle": 45.65466
  },
  {
    "MD": 1625.28,
    "TVD": 1279.23,
    "HD": 906.267,
    "Angle": 45.93172
  },
  {
    "MD": 1653.82,
    "TVD": 1299.08,
    "HD": 926.7733,
    "Angle": 45.85634
  },
  {
    "MD": 1682.35,
    "TVD": 1318.95,
    "HD": 947.2463,
    "Angle": 45.64024
  },
  {
    "MD": 1710.97,
    "TVD": 1338.96,
    "HD": 967.7086,
    "Angle": 45.44268
  },
  {
    "MD": 1736.24,
    "TVD": 1356.69,
    "HD": 985.7147,
    "Angle": 45.17964
  },
  {
    "MD": 1756.91,
    "TVD": 1371.26,
    "HD": 1000.376,
    "Angle": 44.15331
  },
  {
    "MD": 1774.36,
    "TVD": 1383.78,
    "HD": 1012.532,
    "Angle": 44.02519
  },
  {
    "MD": 1802.94,
    "TVD": 1404.33,
    "HD": 1032.394,
    "Angle": 43.83285
  },
  {
    "MD": 1831.4,
    "TVD": 1424.86,
    "HD": 1052.104,
    "Angle": 43.84196
  },
  {
    "MD": 1859.49,
    "TVD": 1445.12,
    "HD": 1071.561,
    "Angle": 45.09581
  },
  {
    "MD": 1888.19,
    "TVD": 1465.38,
    "HD": 1091.889,
    "Angle": 45.61758
  },
  {
    "MD": 1916.97,
    "TVD": 1485.51,
    "HD": 1112.458,
    "Angle": 45.76384
  },
  {
    "MD": 1945.51,
    "TVD": 1505.42,
    "HD": 1132.906,
    "Angle": 45.9293
  },
  {
    "MD": 1974.02,
    "TVD": 1525.25,
    "HD": 1153.39,
    "Angle": 45.75798
  },
  {
    "MD": 2002.6,
    "TVD": 1545.19,
    "HD": 1173.865,
    "Angle": 45.53326
  },
  {
    "MD": 2030.88,
    "TVD": 1565.0,
    "HD": 1194.047,
    "Angle": 45.55629
  },
  {
    "MD": 2059.7,
    "TVD": 1585.18,
    "HD": 1214.623,
    "Angle": 45.75928
  },
  {
    "MD": 2088.08,
    "TVD": 1604.98,
    "HD": 1234.954,
    "Angle": 46.42879
  },
  {
    "MD": 2116.56,
    "TVD": 1624.61,
    "HD": 1255.589,
    "Angle": 46.78178
  },
  {
    "MD": 2145.27,
    "TVD": 1644.27,
    "HD": 1276.511,
    "Angle": 46.62087
  },
  {
    "MD": 2173.88,
    "TVD": 1663.92,
    "HD": 1297.306,
    "Angle": 46.61753
  },
  {
    "MD": 2202.43,
    "TVD": 1683.53,
    "HD": 1318.055,
    "Angle": 47.00037
  },
  {
    "MD": 2230.92,
    "TVD": 1702.96,
    "HD": 1338.892,
    "Angle": 47.4714
  },
  {
    "MD": 2259.62,
    "TVD": 1722.36,
    "HD": 1360.042,
    "Angle": 47.76557
  },
  {
    "MD": 2288.11,
    "TVD": 1741.51,
    "HD": 1381.136,
    "Angle": 47.66965
  },
  {
    "MD": 2316.31,
    "TVD": 1760.5,
    "HD": 1401.983,
    "Angle": 47.22913
  },
  {
    "MD": 2345.07,
    "TVD": 1780.03,
    "HD": 1423.095,
    "Angle": 46.99385
  },
  {
    "MD": 2373.19,
    "TVD": 1799.21,
    "HD": 1443.659,
    "Angle": 47.13582
  },
  {
    "MD": 2402.12,
    "TVD": 1818.89,
    "HD": 1464.864,
    "Angle": 47.24735
  },
  {
    "MD": 2430.61,
    "TVD": 1838.23,
    "HD": 1485.784,
    "Angle": 47.21377
  },
  {
    "MD": 2459.45,
    "TVD": 1857.82,
    "HD": 1506.949,
    "Angle": 47.15636
  },
  {
    "MD": 2487.7,
    "TVD": 1877.03,
    "HD": 1527.663,
    "Angle": 47.23349
  },
  {
    "MD": 2516.05,
    "TVD": 1896.28,
    "HD": 1548.475,
    "Angle": 47.34455
  },
  {
    "MD": 2544.74,
    "TVD": 1915.72,
    "HD": 1569.575,
    "Angle": 47.22201
  },
  {
    "MD": 2573.29,
    "TVD": 1935.11,
    "HD": 1590.53,
    "Angle": 47.1664
  },
  {
    "MD": 2601.31,
    "TVD": 1954.16,
    "HD": 1611.078,
    "Angle": 47.41193
  },
  {
    "MD": 2630.48,
    "TVD": 1973.9,
    "HD": 1632.554,
    "Angle": 47.58529
  },
  {
    "MD": 2659.02,
    "TVD": 1993.15,
    "HD": 1653.625,
    "Angle": 47.37618
  },
  {
    "MD": 2687.55,
    "TVD": 2012.47,
    "HD": 1674.618,
    "Angle": 47.46607
  },
  {
    "MD": 2716.04,
    "TVD": 2031.73,
    "HD": 1695.611,
    "Angle": 47.57319
  },
  {
    "MD": 2744.44,
    "TVD": 2050.89,
    "HD": 1716.574,
    "Angle": 47.43155
  },
  {
    "MD": 2773.0,
    "TVD": 2070.21,
    "HD": 1737.608,
    "Angle": 47.21633
  },
  {
    "MD": 2801.65,
    "TVD": 2089.67,
    "HD": 1758.635,
    "Angle": 46.95408
  },
  {
    "MD": 2830.13,
    "TVD": 2109.11,
    "HD": 1779.448,
    "Angle": 46.96151
  },
  {
    "MD": 2858.57,
    "TVD": 2128.52,
    "HD": 1800.235,
    "Angle": 46.92321
  },
  {
    "MD": 2887.18,
    "TVD": 2148.06,
    "HD": 1821.133,
    "Angle": 46.63814
  },
  {
    "MD": 2915.77,
    "TVD": 2167.69,
    "HD": 1841.919,
    "Angle": 46.39239
  },
  {
    "MD": 2944.26,
    "TVD": 2187.34,
    "HD": 1862.548,
    "Angle": 46.60889
  },
  {
    "MD": 2972.82,
    "TVD": 2206.96,
    "HD": 1883.302,
    "Angle": 47.37638
  },
  {
    "MD": 3001.04,
    "TVD": 2226.07,
    "HD": 1904.067,
    "Angle": 47.8222
  },
  {
    "MD": 3029.71,
    "TVD": 2245.32,
    "HD": 1925.313,
    "Angle": 47.67405
  },
  {
    "MD": 3058.15,
    "TVD": 2264.47,
    "HD": 1946.339,
    "Angle": 47.34366
  },
  {
    "MD": 3086.81,
    "TVD": 2283.89,
    "HD": 1967.417,
    "Angle": 47.14648
  },
  {
    "MD": 3115.29,
    "TVD": 2303.26,
    "HD": 1988.295,
    "Angle": 47.15306
  },
  {
    "MD": 3143.7,
    "TVD": 2322.58,
    "HD": 2009.125,
    "Angle": 46.97574
  },
  {
    "MD": 3172.47,
    "TVD": 2342.21,
    "HD": 2030.157,
    "Angle": 46.87004
  },
  {
    "MD": 3200.92,
    "TVD": 2361.66,
    "HD": 2050.92,
    "Angle": 46.89487
  },
  {
    "MD": 3229.31,
    "TVD": 2381.06,
    "HD": 2071.648,
    "Angle": 46.83938
  },
  {
    "MD": 3258.08,
    "TVD": 2400.74,
    "HD": 2092.634,
    "Angle": 47.2318
  },
  {
    "MD": 3286.65,
    "TVD": 2420.14,
    "HD": 2113.607,
    "Angle": 47.62277
  },
  {
    "MD": 3300.27,
    "TVD": 2429.32,
    "HD": 2123.669,
    "Angle": 47.46256
  },
  {
    "MD": 3327.56,
    "TVD": 2447.77,
    "HD": 2143.777,
    "Angle": 47.28385
  },
  {
    "MD": 3355.48,
    "TVD": 2466.71,
    "HD": 2164.291,
    "Angle": 47.26401
  },
  {
    "MD": 3384.2,
    "TVD": 2486.2,
    "HD": 2185.385,
    "Angle": 47.25903
  },
  {
    "MD": 3412.49,
    "TVD": 2505.4,
    "HD": 2206.162,
    "Angle": 47.26017
  },
  {
    "MD": 3441.37,
    "TVD": 2525.0,
    "HD": 2227.373,
    "Angle": 47.2592
  },
  {
    "MD": 3470.22,
    "TVD": 2544.58,
    "HD": 2248.561,
    "Angle": 47.26299
  },
  {
    "MD": 3498.63,
    "TVD": 2563.86,
    "HD": 2269.428,
    "Angle": 0.0
  }
];

const casingData = [
  { section: "Casing", size: '30"',      fromMD: 0,      toMD: 108.93,   ID: 28,     OD: 30,     roughness: 0.001 },
  { section: "Casing", size: '20"',      fromMD: 0,      toMD: 384.93,   ID: 18.73,  OD: 20,     roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',  fromMD: 0,      toMD: 1748.93,  ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',   fromMD: 0,      toMD: 3309.93,  ID: 8.681,  OD: 9.625,  roughness: 0.001 },
  { section: "Liner",  size: '7"',       fromMD: 3165.93,toMD: 3508.93,  ID: 6.184,  OD: 7,      roughness: 0.001 }
];

const tubingData = [
  { toMD: 3334.37, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 4',        type: 'SSSV',   MD: 162.32,  enabled: true },
  { name: 'Packer GP',     type: 'Packer', MD: 3308.08, enabled: true }
];

const reservoirData = {
  name: 'S‑30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3344.43,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 170.9668,
  temperature: 107,
  c: 8.50e-7,
  n: 0.8,
  OGR: '7 sm3/mmsm3',
  WGR: '59 sm3/mmsm3',
  soilTempC: 30,
  chokeGasCoef: null,
  WTDate: "2020-11-05"
};


function C24P35() {
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

export default C24P35
