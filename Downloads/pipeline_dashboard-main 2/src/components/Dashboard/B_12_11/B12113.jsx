import React from 'react'

const trajectoryData = [
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 23.56,
        "TVD": 23.56,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 50.86,
        "TVD": 50.86,
        "HD": 0,
        "Angle": 2.507968
    },
    {
        "MD": 61.3,
        "TVD": 61.29,
        "HD": 0.456837,
        "Angle": 2.747386
    },
    {
        "MD": 87.4,
        "TVD": 87.36,
        "HD": 1.707877,
        "Angle": 4.322159
    },
    {
        "MD": 115.53,
        "TVD": 115.41,
        "HD": 3.827877,
        "Angle": 6.158214
    },
    {
        "MD": 144.99,
        "TVD": 144.7,
        "HD": 6.988177,
        "Angle": 8.000177
    },
    {
        "MD": 173.76,
        "TVD": 173.19,
        "HD": 10.99228,
        "Angle": 9.911557
    },
    {
        "MD": 203.24,
        "TVD": 202.23,
        "HD": 16.0666,
        "Angle": 12.24511
    },
    {
        "MD": 232.25,
        "TVD": 230.58,
        "HD": 22.21946,
        "Angle": 14.30993
    },
    {
        "MD": 260.29,
        "TVD": 257.75,
        "HD": 29.15002,
        "Angle": 16.84991
    },
    {
        "MD": 290.57,
        "TVD": 286.73,
        "HD": 37.92715,
        "Angle": 19.864
    },
    {
        "MD": 318.47,
        "TVD": 312.97,
        "HD": 47.40725,
        "Angle": 22.07418
    },
    {
        "MD": 348.21,
        "TVD": 340.53,
        "HD": 58.58375,
        "Angle": 23.46648
    },
    {
        "MD": 372.15,
        "TVD": 362.49,
        "HD": 68.11695,
        "Angle": 24.81032
    },
    {
        "MD": 404.22,
        "TVD": 391.6,
        "HD": 81.57402,
        "Angle": 26.83532
    },
    {
        "MD": 432.82,
        "TVD": 417.12,
        "HD": 94.48486,
        "Angle": 29.20375
    },
    {
        "MD": 461.85,
        "TVD": 442.46,
        "HD": 108.6491,
        "Angle": 31.39556
    },
    {
        "MD": 490.81,
        "TVD": 467.18,
        "HD": 123.7356,
        "Angle": 33.71273
    },
    {
        "MD": 519.65,
        "TVD": 491.17,
        "HD": 139.7427,
        "Angle": 36.14189
    },
    {
        "MD": 548.49,
        "TVD": 514.46,
        "HD": 156.7521,
        "Angle": 38.18139
    },
    {
        "MD": 577.61,
        "TVD": 537.35,
        "HD": 174.7527,
        "Angle": 39.23262
    },
    {
        "MD": 606.49,
        "TVD": 559.72,
        "HD": 193.0185,
        "Angle": 39.02371
    },
    {
        "MD": 635.13,
        "TVD": 581.97,
        "HD": 211.0514,
        "Angle": 38.62583
    },
    {
        "MD": 664.02,
        "TVD": 604.54,
        "HD": 229.0855,
        "Angle": 38.4197
    },
    {
        "MD": 692.47,
        "TVD": 626.83,
        "HD": 246.7648,
        "Angle": 38.52182
    },
    {
        "MD": 721.74,
        "TVD": 649.73,
        "HD": 264.9945,
        "Angle": 38.5826
    },
    {
        "MD": 750.28,
        "TVD": 672.04,
        "HD": 282.7933,
        "Angle": 38.76937
    },
    {
        "MD": 779.01,
        "TVD": 694.44,
        "HD": 300.7836,
        "Angle": 39.00511
    },
    {
        "MD": 808.08,
        "TVD": 717.03,
        "HD": 319.08,
        "Angle": 39.00227
    },
    {
        "MD": 836.84,
        "TVD": 739.38,
        "HD": 337.1801,
        "Angle": 39.11025
    },
    {
        "MD": 865.76,
        "TVD": 761.82,
        "HD": 355.4233,
        "Angle": 39.16255
    },
    {
        "MD": 895.14,
        "TVD": 784.6,
        "HD": 373.9774,
        "Angle": 39.0929
    },
    {
        "MD": 924.04,
        "TVD": 807.03,
        "HD": 392.2012,
        "Angle": 39.11297
    },
    {
        "MD": 953.09,
        "TVD": 829.57,
        "HD": 410.5274,
        "Angle": 39.14805
    },
    {
        "MD": 982.09,
        "TVD": 852.06,
        "HD": 428.8359,
        "Angle": 39.1436
    },
    {
        "MD": 1011.23,
        "TVD": 874.66,
        "HD": 447.231,
        "Angle": 39.1346
    },
    {
        "MD": 1040.16,
        "TVD": 897.1,
        "HD": 465.49,
        "Angle": 39.17302
    },
    {
        "MD": 1069.08,
        "TVD": 919.52,
        "HD": 483.7577,
        "Angle": 39.06888
    },
    {
        "MD": 1097.88,
        "TVD": 941.88,
        "HD": 501.909,
        "Angle": 39.05599
    },
    {
        "MD": 1127.28,
        "TVD": 964.71,
        "HD": 520.4334,
        "Angle": 39.07302
    },
    {
        "MD": 1155.94,
        "TVD": 986.96,
        "HD": 538.4981,
        "Angle": 39.091
    },
    {
        "MD": 1184.53,
        "TVD": 1009.15,
        "HD": 556.5256,
        "Angle": 38.98831
    },
    {
        "MD": 1213.22,
        "TVD": 1031.45,
        "HD": 574.5762,
        "Angle": 38.80907
    },
    {
        "MD": 1242.12,
        "TVD": 1053.97,
        "HD": 592.6887,
        "Angle": 38.70694
    },
    {
        "MD": 1271.44,
        "TVD": 1076.85,
        "HD": 611.0235,
        "Angle": 38.6037
    },
    {
        "MD": 1299.95,
        "TVD": 1099.13,
        "HD": 628.8118,
        "Angle": 38.58531
    },
    {
        "MD": 1328.99,
        "TVD": 1121.83,
        "HD": 646.9234,
        "Angle": 38.57207
    },
    {
        "MD": 1357.82,
        "TVD": 1144.37,
        "HD": 664.8989,
        "Angle": 38.83108
    },
    {
        "MD": 1386.96,
        "TVD": 1167.07,
        "HD": 683.1704,
        "Angle": 39.13079
    },
    {
        "MD": 1415.94,
        "TVD": 1189.55,
        "HD": 701.4595,
        "Angle": 39.22644
    },
    {
        "MD": 1444.74,
        "TVD": 1211.86,
        "HD": 719.6723,
        "Angle": 39.27109
    },
    {
        "MD": 1473.3,
        "TVD": 1233.97,
        "HD": 737.7505,
        "Angle": 39.26505
    },
    {
        "MD": 1502.71,
        "TVD": 1256.74,
        "HD": 756.3643,
        "Angle": 39.20831
    },
    {
        "MD": 1531.58,
        "TVD": 1279.11,
        "HD": 774.6142,
        "Angle": 39.14164
    },
    {
        "MD": 1560.5,
        "TVD": 1301.54,
        "HD": 792.8697,
        "Angle": 39.25943
    },
    {
        "MD": 1570.69,
        "TVD": 1309.43,
        "HD": 799.3183,
        "Angle": 39.52463
    },
    {
        "MD": 1592.82,
        "TVD": 1326.5,
        "HD": 813.402,
        "Angle": 39.79096
    },
    {
        "MD": 1610.09,
        "TVD": 1339.77,
        "HD": 824.4546,
        "Angle": 39.64489
    },
    {
        "MD": 1639.57,
        "TVD": 1362.47,
        "HD": 843.2637,
        "Angle": 39.3821
    },
    {
        "MD": 1668.46,
        "TVD": 1384.8,
        "HD": 861.594,
        "Angle": 39.08256
    },
    {
        "MD": 1697.33,
        "TVD": 1407.21,
        "HD": 879.7948,
        "Angle": 38.8223
    },
    {
        "MD": 1726.03,
        "TVD": 1429.57,
        "HD": 897.7871,
        "Angle": 38.90387
    },
    {
        "MD": 1754.93,
        "TVD": 1452.06,
        "HD": 915.9367,
        "Angle": 38.85075
    },
    {
        "MD": 1783.68,
        "TVD": 1474.45,
        "HD": 933.9714,
        "Angle": 38.80664
    },
    {
        "MD": 1812.81,
        "TVD": 1497.15,
        "HD": 952.227,
        "Angle": 38.85075
    },
    {
        "MD": 1841.56,
        "TVD": 1519.54,
        "HD": 970.2617,
        "Angle": 38.88955
    },
    {
        "MD": 1870.3,
        "TVD": 1541.91,
        "HD": 988.3053,
        "Angle": 38.92484
    },
    {
        "MD": 1899.08,
        "TVD": 1564.3,
        "HD": 1006.388,
        "Angle": 38.84195
    },
    {
        "MD": 1928.34,
        "TVD": 1587.09,
        "HD": 1024.739,
        "Angle": 38.84434
    },
    {
        "MD": 1957.28,
        "TVD": 1609.63,
        "HD": 1042.89,
        "Angle": 38.91078
    },
    {
        "MD": 1986.08,
        "TVD": 1632.04,
        "HD": 1060.98,
        "Angle": 38.88629
    },
    {
        "MD": 2014.96,
        "TVD": 1654.52,
        "HD": 1079.11,
        "Angle": 38.84164
    },
    {
        "MD": 2044.13,
        "TVD": 1677.24,
        "HD": 1097.405,
        "Angle": 38.87185
    },
    {
        "MD": 2072.85,
        "TVD": 1699.6,
        "HD": 1115.429,
        "Angle": 39.0227
    },
    {
        "MD": 2101.85,
        "TVD": 1722.13,
        "HD": 1133.688,
        "Angle": 39.28523
    },
    {
        "MD": 2130.7,
        "TVD": 1744.46,
        "HD": 1151.955,
        "Angle": 39.34375
    },
    {
        "MD": 2159.6,
        "TVD": 1766.81,
        "HD": 1170.277,
        "Angle": 39.26398
    },
    {
        "MD": 2188.48,
        "TVD": 1789.17,
        "HD": 1188.555,
        "Angle": 39.24127
    },
    {
        "MD": 2216.86,
        "TVD": 1811.15,
        "HD": 1206.508,
        "Angle": 39.33011
    },
    {
        "MD": 2246,
        "TVD": 1833.69,
        "HD": 1224.976,
        "Angle": 39.33078
    },
    {
        "MD": 2274.83,
        "TVD": 1855.99,
        "HD": 1243.249,
        "Angle": 39.35953
    },
    {
        "MD": 2303.84,
        "TVD": 1878.42,
        "HD": 1261.646,
        "Angle": 39.30723
    },
    {
        "MD": 2332.88,
        "TVD": 1900.89,
        "HD": 1280.043,
        "Angle": 39.23093
    },
    {
        "MD": 2361.23,
        "TVD": 1922.85,
        "HD": 1297.972,
        "Angle": 39.3035
    },
    {
        "MD": 2390.85,
        "TVD": 1945.77,
        "HD": 1316.735,
        "Angle": 39.45368
    },
    {
        "MD": 2419.42,
        "TVD": 1967.83,
        "HD": 1334.89,
        "Angle": 39.4827
    },
    {
        "MD": 2448.87,
        "TVD": 1990.56,
        "HD": 1353.615,
        "Angle": 39.23043
    },
    {
        "MD": 2477.62,
        "TVD": 2012.83,
        "HD": 1371.798,
        "Angle": 39.02556
    },
    {
        "MD": 2506.84,
        "TVD": 2035.53,
        "HD": 1390.197,
        "Angle": 38.94594
    },
    {
        "MD": 2535.77,
        "TVD": 2058.03,
        "HD": 1408.382,
        "Angle": 38.86552
    },
    {
        "MD": 2566.08,
        "TVD": 2081.63,
        "HD": 1427.401,
        "Angle": 38.84271
    },
    {
        "MD": 2593.53,
        "TVD": 2103.01,
        "HD": 1444.617,
        "Angle": 38.73815
    },
    {
        "MD": 2622.35,
        "TVD": 2125.49,
        "HD": 1462.652,
        "Angle": 38.68636
    },
    {
        "MD": 2651.7,
        "TVD": 2148.4,
        "HD": 1480.997,
        "Angle": 38.75214
    },
    {
        "MD": 2680.5,
        "TVD": 2170.86,
        "HD": 1499.025,
        "Angle": 38.75593
    },
    {
        "MD": 2709.34,
        "TVD": 2193.35,
        "HD": 1517.079,
        "Angle": 38.9282
    },
    {
        "MD": 2737.8,
        "TVD": 2215.49,
        "HD": 1534.961,
        "Angle": 39.20044
    },
    {
        "MD": 2766.77,
        "TVD": 2237.94,
        "HD": 1553.271,
        "Angle": 39.18248
    },
    {
        "MD": 2795.81,
        "TVD": 2260.45,
        "HD": 1571.619,
        "Angle": 39.27616
    },
    {
        "MD": 2824.54,
        "TVD": 2282.69,
        "HD": 1589.806,
        "Angle": 39.26398
    },
    {
        "MD": 2853.42,
        "TVD": 2305.05,
        "HD": 1608.084,
        "Angle": 39.18701
    },
    {
        "MD": 2881.92,
        "TVD": 2327.14,
        "HD": 1626.092,
        "Angle": 39.05116
    },
    {
        "MD": 2917.28,
        "TVD": 2354.6,
        "HD": 1648.37,
        "Angle": 39.12108
    },
    {
        "MD": 2946.14,
        "TVD": 2376.99,
        "HD": 1666.579,
        "Angle": 39.34541
    },
    {
        "MD": 2975.17,
        "TVD": 2399.44,
        "HD": 1684.984,
        "Angle": 39.22643
    },
    {
        "MD": 3003.26,
        "TVD": 2421.2,
        "HD": 1702.748,
        "Angle": 39.24239
    },
    {
        "MD": 3032.88,
        "TVD": 2444.14,
        "HD": 1721.485,
        "Angle": 39.15194
    },
    {
        "MD": 3061.34,
        "TVD": 2466.21,
        "HD": 1739.454,
        "Angle": 38.87652
    },
    {
        "MD": 3087.48,
        "TVD": 2486.56,
        "HD": 1755.861,
        "Angle": 38.84575
    },
    {
        "MD": 3109.5,
        "TVD": 2503.71,
        "HD": 1769.673,
        "Angle": 0
    }
];

const casingData = [
  {
    section: "Casing",
    size: '30"',
    fromMD: 0,
    toMD: 109.5,
    ID: 28,
    OD: 30,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '20"',
    fromMD: 0,
    toMD: 388.5,
    ID: 18.73,
    OD: 20,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '13 3/8"',
    fromMD: 0,
    toMD: 1584.5,
    ID: 12.347,
    OD: 13.375,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '9 5/8"',
    fromMD: 0,
    toMD: 2902.5,
    ID: 8.681,
    OD: 9.625,
    roughness: 0.001
  },
  {
    section: "Liner",
    size: '7"',
    fromMD: 2752.5,
    toMD: 3109.5,
    ID: 6.184,
    OD: 7,
    roughness: 0.001
  }
];

const tubingData = [
  {
    toMD: 3044.301,
    ID: 3.958,
    OD: 4.5,
    roughness: 0.001
  }
];

const equipmentData = [
  {
    name: 'SSSV 2',
    type: 'SSSV',
    MD: 159.6
  },
  {
    name: 'Packer',
    type: 'Pk',
    MD: 3015.23
  },
  {
    name: 'NA 6',
    type: 'NA',
    MD: 3053.75
  }
];

const reservoirData = {
  name: 'S-40 PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3053.75,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 146.9668,
  temperature: 107,
  c: 1.0e-5,
  n: 0.8,
  OGR: '396 sm3/mmsm3',
  WGR: '0 sm3/mmsm3'
};

// const notes = `
//   Well is inactive per latest test data.
//   Wireline test (WT) date: July 27, 2022.
// `;


function B12113() {
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

export default B12113
