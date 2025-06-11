import React from 'react'

const trajectoryData = [
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 23.08,
        "TVD": 23.08,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 45.48,
        "TVD": 45.48,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 50.38,
        "TVD": 50.38,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 67.39,
        "TVD": 67.39,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 87.16,
        "TVD": 87.16,
        "HD": 0,
        "Angle": 1.491644
    },
    {
        "MD": 116.67,
        "TVD": 116.66,
        "HD": 0.7681797,
        "Angle": 0
    },
    {
        "MD": 145.36,
        "TVD": 145.35,
        "HD": 0.7681797,
        "Angle": 3.366169
    },
    {
        "MD": 174.34,
        "TVD": 174.28,
        "HD": 2.469797,
        "Angle": 5.506594
    },
    {
        "MD": 202.51,
        "TVD": 202.32,
        "HD": 5.172998,
        "Angle": 7.699241
    },
    {
        "MD": 232.46,
        "TVD": 232,
        "HD": 9.185491,
        "Angle": 9.36003
    },
    {
        "MD": 260.25,
        "TVD": 259.42,
        "HD": 13.70519,
        "Angle": 11.68242
    },
    {
        "MD": 290.18,
        "TVD": 288.73,
        "HD": 19.76562,
        "Angle": 13.87682
    },
    {
        "MD": 317.59,
        "TVD": 315.34,
        "HD": 26.33951,
        "Angle": 16.59784
    },
    {
        "MD": 347.83,
        "TVD": 344.32,
        "HD": 34.97763,
        "Angle": 19.5341
    },
    {
        "MD": 369.2,
        "TVD": 364.46,
        "HD": 42.12307,
        "Angle": 21.66852
    },
    {
        "MD": 404.72,
        "TVD": 397.47,
        "HD": 55.23834,
        "Angle": 23.66327
    },
    {
        "MD": 433.74,
        "TVD": 424.05,
        "HD": 66.88583,
        "Angle": 25.77351
    },
    {
        "MD": 462.59,
        "TVD": 450.03,
        "HD": 79.43024,
        "Angle": 27.82503
    },
    {
        "MD": 491.65,
        "TVD": 475.73,
        "HD": 92.99466,
        "Angle": 29.97161
    },
    {
        "MD": 520.44,
        "TVD": 500.67,
        "HD": 107.3773,
        "Angle": 31.1019
    },
    {
        "MD": 549.24,
        "TVD": 525.33,
        "HD": 122.2543,
        "Angle": 30.96477
    },
    {
        "MD": 578.57,
        "TVD": 550.48,
        "HD": 137.3449,
        "Angle": 30.89847
    },
    {
        "MD": 606.05,
        "TVD": 574.06,
        "HD": 151.4564,
        "Angle": 30.9166
    },
    {
        "MD": 635.61,
        "TVD": 599.42,
        "HD": 166.644,
        "Angle": 30.84183
    },
    {
        "MD": 665.31,
        "TVD": 624.92,
        "HD": 181.8703,
        "Angle": 30.9081
    },
    {
        "MD": 693.9,
        "TVD": 649.45,
        "HD": 196.5559,
        "Angle": 30.95252
    },
    {
        "MD": 722.41,
        "TVD": 673.9,
        "HD": 211.2194,
        "Angle": 30.75473
    },
    {
        "MD": 751.35,
        "TVD": 698.77,
        "HD": 226.0183,
        "Angle": 30.80035
    },
    {
        "MD": 780.49,
        "TVD": 723.8,
        "HD": 240.9393,
        "Angle": 30.81893
    },
    {
        "MD": 809.1,
        "TVD": 748.37,
        "HD": 255.597,
        "Angle": 30.92568
    },
    {
        "MD": 838.01,
        "TVD": 773.17,
        "HD": 270.4546,
        "Angle": 31.0138
    },
    {
        "MD": 866.69,
        "TVD": 797.75,
        "HD": 285.2318,
        "Angle": 30.90947
    },
    {
        "MD": 895.7,
        "TVD": 822.64,
        "HD": 300.1338,
        "Angle": 30.79405
    },
    {
        "MD": 925.49,
        "TVD": 848.23,
        "HD": 315.3849,
        "Angle": 30.86145
    },
    {
        "MD": 953.67,
        "TVD": 872.42,
        "HD": 329.8402,
        "Angle": 30.87676
    },
    {
        "MD": 982.74,
        "TVD": 897.37,
        "HD": 344.7587,
        "Angle": 30.88653
    },
    {
        "MD": 1011.51,
        "TVD": 922.06,
        "HD": 359.5275,
        "Angle": 30.79986
    },
    {
        "MD": 1040.58,
        "TVD": 947.03,
        "HD": 374.4125,
        "Angle": 30.79544
    },
    {
        "MD": 1069.8,
        "TVD": 972.13,
        "HD": 389.3724,
        "Angle": 30.88043
    },
    {
        "MD": 1098.44,
        "TVD": 996.71,
        "HD": 404.0718,
        "Angle": 30.8735
    },
    {
        "MD": 1128.01,
        "TVD": 1022.09,
        "HD": 419.2455,
        "Angle": 30.96898
    },
    {
        "MD": 1156.28,
        "TVD": 1046.33,
        "HD": 433.7925,
        "Angle": 30.90449
    },
    {
        "MD": 1185.44,
        "TVD": 1071.35,
        "HD": 448.7693,
        "Angle": 30.85465
    },
    {
        "MD": 1214.48,
        "TVD": 1096.28,
        "HD": 463.6628,
        "Angle": 30.91472
    },
    {
        "MD": 1243.41,
        "TVD": 1121.1,
        "HD": 478.526,
        "Angle": 30.84143
    },
    {
        "MD": 1272.05,
        "TVD": 1145.69,
        "HD": 493.2087,
        "Angle": 30.85642
    },
    {
        "MD": 1301.44,
        "TVD": 1170.92,
        "HD": 508.2825,
        "Angle": 30.8399
    },
    {
        "MD": 1330.79,
        "TVD": 1196.12,
        "HD": 523.3285,
        "Angle": 30.85657
    },
    {
        "MD": 1359.12,
        "TVD": 1220.44,
        "HD": 537.8587,
        "Angle": 31.07867
    },
    {
        "MD": 1388.38,
        "TVD": 1245.5,
        "HD": 552.9631,
        "Angle": 31.25378
    },
    {
        "MD": 1417.39,
        "TVD": 1270.3,
        "HD": 568.0143,
        "Angle": 31.34924
    },
    {
        "MD": 1445.68,
        "TVD": 1294.46,
        "HD": 582.7323,
        "Angle": 31.55377
    },
    {
        "MD": 1470.57,
        "TVD": 1315.67,
        "HD": 595.7572,
        "Angle": 31.33706
    },
    {
        "MD": 1498.95,
        "TVD": 1339.91,
        "HD": 610.5168,
        "Angle": 30.94736
    },
    {
        "MD": 1527.68,
        "TVD": 1364.55,
        "HD": 625.2913,
        "Angle": 30.9166
    },
    {
        "MD": 1557.24,
        "TVD": 1389.91,
        "HD": 640.4789,
        "Angle": 30.96548
    },
    {
        "MD": 1587.13,
        "TVD": 1415.54,
        "HD": 655.8579,
        "Angle": 30.96881
    },
    {
        "MD": 1615.26,
        "TVD": 1439.66,
        "HD": 670.3328,
        "Angle": 30.93681
    },
    {
        "MD": 1644.22,
        "TVD": 1464.5,
        "HD": 685.2209,
        "Angle": 30.91919
    },
    {
        "MD": 1672.79,
        "TVD": 1489.01,
        "HD": 699.901,
        "Angle": 30.91857
    },
    {
        "MD": 1701.15,
        "TVD": 1513.34,
        "HD": 714.4729,
        "Angle": 30.98065
    },
    {
        "MD": 1729.96,
        "TVD": 1538.04,
        "HD": 729.3028,
        "Angle": 30.94696
    },
    {
        "MD": 1758.48,
        "TVD": 1562.5,
        "HD": 743.9691,
        "Angle": 30.98652
    },
    {
        "MD": 1787.91,
        "TVD": 1587.73,
        "HD": 759.1207,
        "Angle": 30.93168
    },
    {
        "MD": 1817.02,
        "TVD": 1612.7,
        "HD": 774.0837,
        "Angle": 30.98054
    },
    {
        "MD": 1845.69,
        "TVD": 1637.28,
        "HD": 788.8415,
        "Angle": 30.89702
    },
    {
        "MD": 1874.3,
        "TVD": 1661.83,
        "HD": 803.5327,
        "Angle": 30.88307
    },
    {
        "MD": 1903.57,
        "TVD": 1686.95,
        "HD": 818.5566,
        "Angle": 30.93367
    },
    {
        "MD": 1933.52,
        "TVD": 1712.64,
        "HD": 833.9522,
        "Angle": 30.8746
    },
    {
        "MD": 1962.1,
        "TVD": 1737.17,
        "HD": 848.6184,
        "Angle": 30.87522
    },
    {
        "MD": 1990.82,
        "TVD": 1761.82,
        "HD": 863.3566,
        "Angle": 30.9552
    },
    {
        "MD": 2020.94,
        "TVD": 1787.65,
        "HD": 878.8494,
        "Angle": 30.90207
    },
    {
        "MD": 2049.4,
        "TVD": 1812.07,
        "HD": 893.4657,
        "Angle": 30.97049
    },
    {
        "MD": 2079,
        "TVD": 1837.45,
        "HD": 908.6977,
        "Angle": 31.00272
    },
    {
        "MD": 2106.86,
        "TVD": 1861.33,
        "HD": 923.0478,
        "Angle": 31.26234
    },
    {
        "MD": 2136.13,
        "TVD": 1886.35,
        "HD": 938.2377,
        "Angle": 31.45093
    },
    {
        "MD": 2164.31,
        "TVD": 1910.39,
        "HD": 952.9411,
        "Angle": 31.50736
    },
    {
        "MD": 2193.07,
        "TVD": 1934.91,
        "HD": 967.9713,
        "Angle": 31.48161
    },
    {
        "MD": 2221.74,
        "TVD": 1959.36,
        "HD": 982.9435,
        "Angle": 31.42441
    },
    {
        "MD": 2250.58,
        "TVD": 1983.97,
        "HD": 997.9799,
        "Angle": 31.46239
    },
    {
        "MD": 2278.74,
        "TVD": 2007.99,
        "HD": 1012.678,
        "Angle": 31.45167
    },
    {
        "MD": 2308.28,
        "TVD": 2033.19,
        "HD": 1028.091,
        "Angle": 31.39288
    },
    {
        "MD": 2336.63,
        "TVD": 2057.39,
        "HD": 1042.859,
        "Angle": 31.39353
    },
    {
        "MD": 2366.55,
        "TVD": 2082.93,
        "HD": 1058.444,
        "Angle": 31.43146
    },
    {
        "MD": 2395.65,
        "TVD": 2107.76,
        "HD": 1073.619,
        "Angle": 31.42191
    },
    {
        "MD": 2425.04,
        "TVD": 2132.84,
        "HD": 1088.941,
        "Angle": 31.43104
    },
    {
        "MD": 2453.8,
        "TVD": 2157.38,
        "HD": 1103.939,
        "Angle": 31.45568
    },
    {
        "MD": 2482.38,
        "TVD": 2181.76,
        "HD": 1118.853,
        "Angle": 31.39922
    },
    {
        "MD": 2511.47,
        "TVD": 2206.59,
        "HD": 1134.009,
        "Angle": 31.1737
    },
    {
        "MD": 2540.21,
        "TVD": 2231.18,
        "HD": 1148.886,
        "Angle": 31.00272
    },
    {
        "MD": 2569.47,
        "TVD": 2256.26,
        "HD": 1163.957,
        "Angle": 30.91898
    },
    {
        "MD": 2597.97,
        "TVD": 2280.71,
        "HD": 1178.601,
        "Angle": 30.94367
    },
    {
        "MD": 2614.13,
        "TVD": 2294.57,
        "HD": 1186.91,
        "Angle": 30.94835
    },
    {
        "MD": 2655.08,
        "TVD": 2329.69,
        "HD": 1207.97,
        "Angle": 30.86555
    },
    {
        "MD": 2684.1,
        "TVD": 2354.6,
        "HD": 1222.858,
        "Angle": 30.63557
    },
    {
        "MD": 2713.69,
        "TVD": 2380.06,
        "HD": 1237.936,
        "Angle": 30.54214
    },
    {
        "MD": 2742.52,
        "TVD": 2404.89,
        "HD": 1252.587,
        "Angle": 30.42235
    },
    {
        "MD": 2770.41,
        "TVD": 2428.94,
        "HD": 1266.709,
        "Angle": 30.58398
    },
    {
        "MD": 2799.81,
        "TVD": 2454.25,
        "HD": 1281.668,
        "Angle": 30.6034
    },
    {
        "MD": 2829.03,
        "TVD": 2479.4,
        "HD": 1296.544,
        "Angle": 30.53988
    },
    {
        "MD": 2857.72,
        "TVD": 2504.11,
        "HD": 1311.122,
        "Angle": 30.67178
    },
    {
        "MD": 2877.02,
        "TVD": 2520.71,
        "HD": 1320.967,
        "Angle": 0
    },
    {
        "MD": 3073.05,
        "TVD": 2278.04,
        "HD": 1926.273,
        "Angle": 49.71411
    },
    {
        "MD": 3103.95,
        "TVD": 2298.02,
        "HD": 1949.844,
        "Angle": 49.91683
    },
    {
        "MD": 3132.06,
        "TVD": 2316.12,
        "HD": 1971.351,
        "Angle": 49.5805
    },
    {
        "MD": 3140.08,
        "TVD": 2321.32,
        "HD": 1977.457,
        "Angle": 49.39732
    },
    {
        "MD": 3149.96,
        "TVD": 2327.75,
        "HD": 1984.959,
        "Angle": 0
    }
];

const casingData = [
  {
    section: "Casing",
    size: '30"',
    fromMD: 0,
    toMD: 109.02,
    ID: 28,
    OD: 1,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '20"',
    fromMD: 0,
    toMD: 388.02,
    ID: 18.73,
    OD: 0.635,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '13 3/8"',
    fromMD: 0,
    toMD: 1462.02,
    ID: 12.347,
    OD: 0.514,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '9 5/8"',
    fromMD: 0,
    toMD: 2609.02,
    ID: 8.681,
    OD: 0.472,
    roughness: 0.001
  },
  {
    section: "Liner",
    size: '7"',
    fromMD: 2488.02,
    toMD: 2876.02,
    ID: 6.184,
    OD: 0.408,
    roughness: 0.001
  }
];

const tubingData = [
  {
    toMD: 2782.04,
    ID: 2.992,
    OD: 0.254,
    roughness: 0.001
  }
];

const equipmentData = [
  {
    name: 'SSSV 3',
    type: 'SSSV',
    MD: 171
  },
  {
    name: 'Packer',
    type: 'Pk',
    MD: 2750.12
  },
  {
    name: 'NA 2',
    type: 'NA',
    MD: 2796.27
  }
];

const reservoirData = {
  name: 'S-40 PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2796.27,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 137.9668,
  temperature: 107,
  c: 1.13e-6,
  n: 0.8,
  OGR: '0 sm3/mmsm3',
  WGR: '205 sm3/mmsm3'
};

// const notes = `
//   Well test: July 6, 2024 – Well is inactive per latest test data.
// `;

function B12114() {
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

export default B12114
