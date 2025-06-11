import React from 'react'


const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 41.89,
    "TVD": 41.89,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 49.13,
    "TVD": 49.13,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 78.54,
    "TVD": 78.54,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 116.72,
    "TVD": 116.72,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 144.48,
    "TVD": 144.48,
    "HD": 0.0,
    "Angle": 1.525359
  },
  {
    "MD": 172.7,
    "TVD": 172.69,
    "HD": 0.751199,
    "Angle": 2.085322
  },
  {
    "MD": 187.8,
    "TVD": 187.78,
    "HD": 1.300653,
    "Angle": 3.329312
  },
  {
    "MD": 199.65,
    "TVD": 199.61,
    "HD": 1.988839,
    "Angle": 3.98451
  },
  {
    "MD": 228.61,
    "TVD": 228.5,
    "HD": 4.001176,
    "Angle": 4.899853
  },
  {
    "MD": 258.71,
    "TVD": 258.49,
    "HD": 6.572149,
    "Angle": 6.021137
  },
  {
    "MD": 285.9,
    "TVD": 285.53,
    "HD": 9.424253,
    "Angle": 7.061742
  },
  {
    "MD": 316.22,
    "TVD": 315.62,
    "HD": 13.15176,
    "Angle": 8.409808
  },
  {
    "MD": 344.12,
    "TVD": 343.22,
    "HD": 17.2322,
    "Angle": 10.01922
  },
  {
    "MD": 367.07,
    "TVD": 365.82,
    "HD": 21.22501,
    "Angle": 11.42119
  },
  {
    "MD": 391.31,
    "TVD": 389.58,
    "HD": 26.02501,
    "Angle": 12.97995
  },
  {
    "MD": 419.88,
    "TVD": 417.42,
    "HD": 32.44212,
    "Angle": 15.61478
  },
  {
    "MD": 448.33,
    "TVD": 444.82,
    "HD": 40.09996,
    "Angle": 18.15969
  },
  {
    "MD": 477.04,
    "TVD": 472.1,
    "HD": 49.0479,
    "Angle": 20.35691
  },
  {
    "MD": 505.54,
    "TVD": 498.82,
    "HD": 58.96211,
    "Angle": 22.47157
  },
  {
    "MD": 532.67,
    "TVD": 523.89,
    "HD": 69.33188,
    "Angle": 24.58103
  },
  {
    "MD": 561.58,
    "TVD": 550.18,
    "HD": 81.35785,
    "Angle": 25.51946
  },
  {
    "MD": 590.69,
    "TVD": 576.45,
    "HD": 93.89895,
    "Angle": 25.96737
  },
  {
    "MD": 618.92,
    "TVD": 601.83,
    "HD": 106.2597,
    "Angle": 26.23524
  },
  {
    "MD": 647.46,
    "TVD": 627.43,
    "HD": 118.876,
    "Angle": 26.12829
  },
  {
    "MD": 676.23,
    "TVD": 653.26,
    "HD": 131.5458,
    "Angle": 26.13963
  },
  {
    "MD": 703.02,
    "TVD": 677.31,
    "HD": 143.3485,
    "Angle": 26.06238
  },
  {
    "MD": 733.31,
    "TVD": 704.52,
    "HD": 156.6563,
    "Angle": 26.138
  },
  {
    "MD": 760.69,
    "TVD": 729.1,
    "HD": 168.7182,
    "Angle": 26.13858
  },
  {
    "MD": 790.22,
    "TVD": 755.61,
    "HD": 181.7274,
    "Angle": 26.0932
  },
  {
    "MD": 817.3,
    "TVD": 779.93,
    "HD": 193.6381,
    "Angle": 26.21876
  },
  {
    "MD": 846.75,
    "TVD": 806.35,
    "HD": 206.6491,
    "Angle": 26.1493
  },
  {
    "MD": 875.67,
    "TVD": 832.31,
    "HD": 219.3945,
    "Angle": 26.06306
  },
  {
    "MD": 904.09,
    "TVD": 857.84,
    "HD": 231.8811,
    "Angle": 25.9587
  },
  {
    "MD": 934.42,
    "TVD": 885.11,
    "HD": 245.1572,
    "Angle": 25.99997
  },
  {
    "MD": 961.79,
    "TVD": 909.71,
    "HD": 257.1555,
    "Angle": 25.99645
  },
  {
    "MD": 992.33,
    "TVD": 937.16,
    "HD": 270.5416,
    "Angle": 26.04692
  },
  {
    "MD": 1021.08,
    "TVD": 962.99,
    "HD": 283.1659,
    "Angle": 26.137
  },
  {
    "MD": 1049.44,
    "TVD": 988.45,
    "HD": 295.6591,
    "Angle": 26.0196
  },
  {
    "MD": 1078.94,
    "TVD": 1014.96,
    "HD": 308.6001,
    "Angle": 25.97344
  },
  {
    "MD": 1106.86,
    "TVD": 1040.06,
    "HD": 320.8278,
    "Angle": 26.01713
  },
  {
    "MD": 1135.28,
    "TVD": 1065.6,
    "HD": 333.2939,
    "Angle": 26.08429
  },
  {
    "MD": 1164.44,
    "TVD": 1091.79,
    "HD": 346.1153,
    "Angle": 26.1181
  },
  {
    "MD": 1193.33,
    "TVD": 1117.73,
    "HD": 358.8334,
    "Angle": 26.01429
  },
  {
    "MD": 1221.46,
    "TVD": 1143.01,
    "HD": 371.1711,
    "Angle": 26.01755
  },
  {
    "MD": 1252.05,
    "TVD": 1170.5,
    "HD": 384.5893,
    "Angle": 26.06842
  },
  {
    "MD": 1280.95,
    "TVD": 1196.46,
    "HD": 397.2892,
    "Angle": 26.04937
  },
  {
    "MD": 1309.99,
    "TVD": 1222.55,
    "HD": 410.042,
    "Angle": 26.08936
  },
  {
    "MD": 1338.55,
    "TVD": 1248.2,
    "HD": 422.6019,
    "Angle": 25.95897
  },
  {
    "MD": 1367.69,
    "TVD": 1274.4,
    "HD": 435.3573,
    "Angle": 25.65485
  },
  {
    "MD": 1395.89,
    "TVD": 1299.82,
    "HD": 447.5664,
    "Angle": 25.56318
  },
  {
    "MD": 1424.8,
    "TVD": 1325.9,
    "HD": 460.0413,
    "Angle": 25.75082
  },
  {
    "MD": 1453.7,
    "TVD": 1351.93,
    "HD": 472.5971,
    "Angle": 25.5878
  },
  {
    "MD": 1480.72,
    "TVD": 1376.3,
    "HD": 484.2669,
    "Angle": 25.84648
  },
  {
    "MD": 1509.61,
    "TVD": 1402.3,
    "HD": 496.8618,
    "Angle": 26.06384
  },
  {
    "MD": 1539.11,
    "TVD": 1428.8,
    "HD": 509.8233,
    "Angle": 25.98357
  },
  {
    "MD": 1565.03,
    "TVD": 1452.1,
    "HD": 521.1792,
    "Angle": 26.13367
  },
  {
    "MD": 1595.06,
    "TVD": 1479.06,
    "HD": 534.4064,
    "Angle": 26.16647
  },
  {
    "MD": 1623.65,
    "TVD": 1504.72,
    "HD": 547.014,
    "Angle": 26.019
  },
  {
    "MD": 1653.25,
    "TVD": 1531.32,
    "HD": 559.9986,
    "Angle": 26.08387
  },
  {
    "MD": 1681.92,
    "TVD": 1557.07,
    "HD": 572.6045,
    "Angle": 26.04231
  },
  {
    "MD": 1710.68,
    "TVD": 1582.91,
    "HD": 585.2311,
    "Angle": 26.13718
  },
  {
    "MD": 1741.68,
    "TVD": 1610.74,
    "HD": 598.8873,
    "Angle": 26.14134
  },
  {
    "MD": 1767.88,
    "TVD": 1634.26,
    "HD": 610.4306,
    "Angle": 26.02795
  },
  {
    "MD": 1797.46,
    "TVD": 1660.84,
    "HD": 623.4106,
    "Angle": 25.97959
  },
  {
    "MD": 1827.94,
    "TVD": 1688.24,
    "HD": 636.7624,
    "Angle": 26.0495
  },
  {
    "MD": 1855.7,
    "TVD": 1713.18,
    "HD": 648.9532,
    "Angle": 26.02243
  },
  {
    "MD": 1884.01,
    "TVD": 1738.62,
    "HD": 661.3734,
    "Angle": 25.92587
  },
  {
    "MD": 1913.72,
    "TVD": 1765.34,
    "HD": 674.3628,
    "Angle": 25.95413
  },
  {
    "MD": 1941.78,
    "TVD": 1790.57,
    "HD": 686.6433,
    "Angle": 25.85097
  },
  {
    "MD": 1970.86,
    "TVD": 1816.74,
    "HD": 699.3232,
    "Angle": 25.88459
  },
  {
    "MD": 1998.57,
    "TVD": 1841.67,
    "HD": 711.4202,
    "Angle": 25.91239
  },
  {
    "MD": 2026.52,
    "TVD": 1866.81,
    "HD": 723.6343,
    "Angle": 25.85088
  },
  {
    "MD": 2055.9,
    "TVD": 1893.25,
    "HD": 736.4448,
    "Angle": 25.9564
  },
  {
    "MD": 2084.55,
    "TVD": 1919.01,
    "HD": 748.9846,
    "Angle": 25.87245
  },
  {
    "MD": 2114.68,
    "TVD": 1946.12,
    "HD": 762.1324,
    "Angle": 25.86143
  },
  {
    "MD": 2141.64,
    "TVD": 1970.38,
    "HD": 773.8922,
    "Angle": 25.83751
  },
  {
    "MD": 2171.35,
    "TVD": 1997.12,
    "HD": 786.8405,
    "Angle": 25.88802
  },
  {
    "MD": 2199.85,
    "TVD": 2022.76,
    "HD": 799.2839,
    "Angle": 25.89125
  },
  {
    "MD": 2229.14,
    "TVD": 2049.11,
    "HD": 812.0738,
    "Angle": 25.83765
  },
  {
    "MD": 2259.85,
    "TVD": 2076.75,
    "HD": 825.458,
    "Angle": 25.8466
  },
  {
    "MD": 2288.04,
    "TVD": 2102.12,
    "HD": 837.7478,
    "Angle": 25.85157
  },
  {
    "MD": 2315.32,
    "TVD": 2126.67,
    "HD": 849.643,
    "Angle": 25.83275
  },
  {
    "MD": 2343.94,
    "TVD": 2152.43,
    "HD": 862.114,
    "Angle": 25.92972
  },
  {
    "MD": 2373.84,
    "TVD": 2179.32,
    "HD": 875.1883,
    "Angle": 26.07552
  },
  {
    "MD": 2404.1,
    "TVD": 2206.5,
    "HD": 888.4893,
    "Angle": 26.2982
  },
  {
    "MD": 2430.96,
    "TVD": 2230.58,
    "HD": 900.3894,
    "Angle": 26.39088
  },
  {
    "MD": 2459.65,
    "TVD": 2256.28,
    "HD": 913.1419,
    "Angle": 26.23445
  },
  {
    "MD": 2488.58,
    "TVD": 2282.23,
    "HD": 925.9303,
    "Angle": 26.0271
  },
  {
    "MD": 2516.88,
    "TVD": 2307.66,
    "HD": 938.3482,
    "Angle": 25.79306
  },
  {
    "MD": 2546.49,
    "TVD": 2334.32,
    "HD": 951.2322,
    "Angle": 25.81524
  },
  {
    "MD": 2576.05,
    "TVD": 2360.93,
    "HD": 964.1047,
    "Angle": 25.73687
  },
  {
    "MD": 2604.88,
    "TVD": 2386.9,
    "HD": 976.6238,
    "Angle": 25.7063
  },
  {
    "MD": 2617.51,
    "TVD": 2398.28,
    "HD": 982.1022,
    "Angle": 25.67112
  },
  {
    "MD": 2633.72,
    "TVD": 2412.89,
    "HD": 989.1244,
    "Angle": 25.7596
  },
  {
    "MD": 2648.11,
    "TVD": 2425.85,
    "HD": 995.3782,
    "Angle": 25.78951
  },
  {
    "MD": 2663.17,
    "TVD": 2439.41,
    "HD": 1001.93,
    "Angle": 25.83241
  },
  {
    "MD": 2690.79,
    "TVD": 2464.27,
    "HD": 1013.965,
    "Angle": 25.86654
  },
  {
    "MD": 2701.47,
    "TVD": 2473.88,
    "HD": 1018.625,
    "Angle": 25.90012
  },
  {
    "MD": 2721.78,
    "TVD": 2492.15,
    "HD": 1027.496,
    "Angle": 0.0
  },
  {
    "MD": 2881.23,
    "TVD": 2122.99,
    "HD": 1813.43,
    "Angle": 47.56075
  },
  {
    "MD": 2909.89,
    "TVD": 2142.33,
    "HD": 1834.581,
    "Angle": 47.55395
  },
  {
    "MD": 2938.65,
    "TVD": 2161.74,
    "HD": 1855.804,
    "Angle": 47.57345
  },
  {
    "MD": 2967.48,
    "TVD": 2181.19,
    "HD": 1877.084,
    "Angle": 47.62266
  },
  {
    "MD": 2996.53,
    "TVD": 2200.77,
    "HD": 1898.544,
    "Angle": 47.65417
  },
  {
    "MD": 3025.36,
    "TVD": 2220.19,
    "HD": 1919.852,
    "Angle": 47.65585
  },
  {
    "MD": 3047.05,
    "TVD": 2234.8,
    "HD": 1935.883,
    "Angle": 47.42105
  },
  {
    "MD": 3090.65,
    "TVD": 2264.3,
    "HD": 1967.988,
    "Angle": 47.41575
  },
  {
    "MD": 3119.63,
    "TVD": 2283.91,
    "HD": 1989.326,
    "Angle": 47.64023
  },
  {
    "MD": 3148.2,
    "TVD": 2303.16,
    "HD": 2010.437,
    "Angle": 47.61649
  },
  {
    "MD": 3176.49,
    "TVD": 2322.23,
    "HD": 2031.333,
    "Angle": 47.6331
  },
  {
    "MD": 3205.62,
    "TVD": 2341.86,
    "HD": 2052.856,
    "Angle": 47.43627
  },
  {
    "MD": 3234.7,
    "TVD": 2361.53,
    "HD": 2074.274,
    "Angle": 47.55792
  },
  {
    "MD": 3263.64,
    "TVD": 2381.06,
    "HD": 2095.631,
    "Angle": 47.89784
  },
  {
    "MD": 3291.8,
    "TVD": 2399.94,
    "HD": 2116.524,
    "Angle": 47.95101
  },
  {
    "MD": 3320.84,
    "TVD": 2419.39,
    "HD": 2138.088,
    "Angle": 47.92154
  },
  {
    "MD": 3348.61,
    "TVD": 2438.0,
    "HD": 2158.7,
    "Angle": 48.12804
  },
  {
    "MD": 3377.72,
    "TVD": 2457.43,
    "HD": 2180.376,
    "Angle": 48.021
  },
  {
    "MD": 3406.62,
    "TVD": 2476.76,
    "HD": 2201.86,
    "Angle": 47.5851
  },
  {
    "MD": 3421.95,
    "TVD": 2487.1,
    "HD": 2213.178,
    "Angle": 47.44676
  },
  {
    "MD": 3444.5,
    "TVD": 2502.35,
    "HD": 2229.789,
    "Angle": 0.0
  }
];

const casingData = [
  { section: "Casing", size: '30"',      fromMD: 0,      toMD: 108.78,   ID: 28,     OD: 30,    roughness: 0.001 },
  { section: "Casing", size: '20"',      fromMD: 0,      toMD: 384.78,   ID: 18.73,  OD: 20,    roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',  fromMD: 0,      toMD: 1580.78,  ID: 12.347, OD: 13.375,roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',   fromMD: 0,      toMD: 2632.78,  ID: 8.681,  OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',      fromMD: 2478.78, toMD: 2721.78, ID: 6.184,  OD: 7,     roughness: 0.001 }
];

const tubingData = [
  { toMD: 2644.75, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 1',         type: 'SSSV',         MD: 150.21, enabled: true },
  { name: 'Packer 1',       type: 'Pk 1',         MD: 2578.91, enabled: true },
  { name: 'Packer GP',      type: 'GP',           MD: 2611.15, enabled: true },
  { name: 'Sliding sleeve', type: 'Sleeve',       MD: 2612.83, enabled: false }
];

const reservoirData = {
  name: 'S‑30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2655.78,
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
  WTDate: "2023-06-24" 
};


function C24P33() {
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

export default C24P33
