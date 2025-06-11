import React from 'react'

const trajectoryData = [
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 23.7,
        "TVD": 23.7,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 118.7,
        "TVD": 118.7,
        "HD": 0,
        "Angle": 1.994884
    },
    {
        "MD": 382.7,
        "TVD": 382.54,
        "HD": 9.189908,
        "Angle": 0
    },
    {
        "MD": 388.7,
        "TVD": 388.54,
        "HD": 9.189908,
        "Angle": 3.325105
    },
    {
        "MD": 400.58,
        "TVD": 400.4,
        "HD": 9.878965,
        "Angle": 3.683112
    },
    {
        "MD": 429.63,
        "TVD": 429.39,
        "HD": 11.74508,
        "Angle": 5.000609
    },
    {
        "MD": 458.53,
        "TVD": 458.18,
        "HD": 14.26419,
        "Angle": 6.409204
    },
    {
        "MD": 487.33,
        "TVD": 486.8,
        "HD": 17.47909,
        "Angle": 8.780683
    },
    {
        "MD": 516.34,
        "TVD": 515.47,
        "HD": 21.90755,
        "Angle": 11.16499
    },
    {
        "MD": 545.4,
        "TVD": 543.98,
        "HD": 27.53458,
        "Angle": 13.99807
    },
    {
        "MD": 574.36,
        "TVD": 572.08,
        "HD": 34.53969,
        "Angle": 16.25174
    },
    {
        "MD": 603.39,
        "TVD": 599.95,
        "HD": 42.66398,
        "Angle": 18.19487
    },
    {
        "MD": 632.39,
        "TVD": 627.5,
        "HD": 51.71922,
        "Angle": 21.13518
    },
    {
        "MD": 661.23,
        "TVD": 654.4,
        "HD": 62.11805,
        "Angle": 23.77394
    },
    {
        "MD": 690.22,
        "TVD": 680.93,
        "HD": 73.80476,
        "Angle": 25.4191
    },
    {
        "MD": 719.04,
        "TVD": 706.96,
        "HD": 86.17535,
        "Angle": 27.70291
    },
    {
        "MD": 748.09,
        "TVD": 732.68,
        "HD": 99.68032,
        "Angle": 30.28156
    },
    {
        "MD": 777.04,
        "TVD": 757.68,
        "HD": 114.2783,
        "Angle": 31.71665
    },
    {
        "MD": 805.9,
        "TVD": 782.23,
        "HD": 129.4506,
        "Angle": 33.36501
    },
    {
        "MD": 834.72,
        "TVD": 806.3,
        "HD": 145.3008,
        "Angle": 36.55294
    },
    {
        "MD": 863.75,
        "TVD": 829.62,
        "HD": 162.59,
        "Angle": 39.6365
    },
    {
        "MD": 892.72,
        "TVD": 851.93,
        "HD": 181.0704,
        "Angle": 43.00001
    },
    {
        "MD": 921.68,
        "TVD": 873.11,
        "HD": 200.8211,
        "Angle": 46.67475
    },
    {
        "MD": 950.61,
        "TVD": 892.96,
        "HD": 221.8668,
        "Angle": 49.20102
    },
    {
        "MD": 979.52,
        "TVD": 911.85,
        "HD": 243.7519,
        "Angle": 51.1777
    },
    {
        "MD": 1008.36,
        "TVD": 929.93,
        "HD": 266.2209,
        "Angle": 53.8099
    },
    {
        "MD": 1037.1,
        "TVD": 946.9,
        "HD": 289.4159,
        "Angle": 55.2123
    },
    {
        "MD": 1065.95,
        "TVD": 963.36,
        "HD": 313.1096,
        "Angle": 55.34214
    },
    {
        "MD": 1095,
        "TVD": 979.88,
        "HD": 337.005,
        "Angle": 55.07761
    },
    {
        "MD": 1123.91,
        "TVD": 996.43,
        "HD": 360.7092,
        "Angle": 55.47787
    },
    {
        "MD": 1152.76,
        "TVD": 1012.78,
        "HD": 384.4789,
        "Angle": 55.77858
    },
    {
        "MD": 1181.85,
        "TVD": 1029.14,
        "HD": 408.5326,
        "Angle": 55.44262
    },
    {
        "MD": 1210.78,
        "TVD": 1045.55,
        "HD": 432.3581,
        "Angle": 55.58366
    },
    {
        "MD": 1239.69,
        "TVD": 1061.89,
        "HD": 456.2075,
        "Angle": 55.17413
    },
    {
        "MD": 1268.74,
        "TVD": 1078.48,
        "HD": 480.0544,
        "Angle": 54.86414
    },
    {
        "MD": 1297.74,
        "TVD": 1095.17,
        "HD": 503.7703,
        "Angle": 54.56738
    },
    {
        "MD": 1326.77,
        "TVD": 1112,
        "HD": 527.4238,
        "Angle": 54.13781
    },
    {
        "MD": 1355.72,
        "TVD": 1128.96,
        "HD": 550.8858,
        "Angle": 54.00403
    },
    {
        "MD": 1384.73,
        "TVD": 1146.01,
        "HD": 574.3565,
        "Angle": 54.27799
    },
    {
        "MD": 1413.59,
        "TVD": 1162.86,
        "HD": 597.7868,
        "Angle": 54.2842
    },
    {
        "MD": 1442.54,
        "TVD": 1179.76,
        "HD": 621.292,
        "Angle": 53.94205
    },
    {
        "MD": 1471.32,
        "TVD": 1196.7,
        "HD": 644.5583,
        "Angle": 53.88446
    },
    {
        "MD": 1500.23,
        "TVD": 1213.74,
        "HD": 667.9127,
        "Angle": 53.77622
    },
    {
        "MD": 1529.15,
        "TVD": 1230.83,
        "HD": 691.2429,
        "Angle": 53.8398
    },
    {
        "MD": 1558.08,
        "TVD": 1247.9,
        "HD": 714.6001,
        "Angle": 53.53094
    },
    {
        "MD": 1586.95,
        "TVD": 1265.06,
        "HD": 737.8168,
        "Angle": 53.09063
    },
    {
        "MD": 1615.99,
        "TVD": 1282.5,
        "HD": 761.0367,
        "Angle": 52.921
    },
    {
        "MD": 1644.8,
        "TVD": 1299.87,
        "HD": 784.0215,
        "Angle": 53.28942
    },
    {
        "MD": 1673.54,
        "TVD": 1317.05,
        "HD": 807.0614,
        "Angle": 53.625
    },
    {
        "MD": 1702.39,
        "TVD": 1334.16,
        "HD": 830.29,
        "Angle": 53.50157
    },
    {
        "MD": 1731.24,
        "TVD": 1351.32,
        "HD": 853.4818,
        "Angle": 52.50258
    },
    {
        "MD": 1760.12,
        "TVD": 1368.9,
        "HD": 876.3946,
        "Angle": 52.26818
    },
    {
        "MD": 1788.7,
        "TVD": 1386.39,
        "HD": 898.9981,
        "Angle": 52.77116
    },
    {
        "MD": 1790.7,
        "TVD": 1387.6,
        "HD": 900.5905,
        "Angle": 51.85413
    },
    {
        "MD": 1806.55,
        "TVD": 1397.39,
        "HD": 913.0556,
        "Angle": 50.79927
    },
    {
        "MD": 1835.14,
        "TVD": 1415.46,
        "HD": 935.211,
        "Angle": 51.50251
    },
    {
        "MD": 1864.41,
        "TVD": 1433.68,
        "HD": 958.1188,
        "Angle": 52.91199
    },
    {
        "MD": 1895.32,
        "TVD": 1452.32,
        "HD": 982.776,
        "Angle": 53.812
    },
    {
        "MD": 1924.18,
        "TVD": 1469.36,
        "HD": 1006.068,
        "Angle": 53.96812
    },
    {
        "MD": 1952.74,
        "TVD": 1486.16,
        "HD": 1029.165,
        "Angle": 53.91424
    },
    {
        "MD": 1979.82,
        "TVD": 1502.11,
        "HD": 1051.049,
        "Angle": 53.87602
    },
    {
        "MD": 2009.25,
        "TVD": 1519.46,
        "HD": 1074.821,
        "Angle": 53.92099
    },
    {
        "MD": 2038.44,
        "TVD": 1536.65,
        "HD": 1098.412,
        "Angle": 53.96666
    },
    {
        "MD": 2067.05,
        "TVD": 1553.48,
        "HD": 1121.549,
        "Angle": 53.98716
    },
    {
        "MD": 2093.31,
        "TVD": 1568.92,
        "HD": 1142.79,
        "Angle": 54.01837
    },
    {
        "MD": 2122.33,
        "TVD": 1585.97,
        "HD": 1166.273,
        "Angle": 53.97506
    },
    {
        "MD": 2152.34,
        "TVD": 1603.62,
        "HD": 1190.544,
        "Angle": 53.97242
    },
    {
        "MD": 2181.43,
        "TVD": 1620.73,
        "HD": 1214.07,
        "Angle": 54.01837
    },
    {
        "MD": 2210.45,
        "TVD": 1637.78,
        "HD": 1237.553,
        "Angle": 54.03892
    },
    {
        "MD": 2239.28,
        "TVD": 1654.71,
        "HD": 1260.889,
        "Angle": 53.96093
    },
    {
        "MD": 2268.26,
        "TVD": 1671.76,
        "HD": 1284.322,
        "Angle": 53.84687
    },
    {
        "MD": 2297.5,
        "TVD": 1689.01,
        "HD": 1307.932,
        "Angle": 53.91135
    },
    {
        "MD": 2326.14,
        "TVD": 1705.88,
        "HD": 1331.076,
        "Angle": 53.95136
    },
    {
        "MD": 2355.98,
        "TVD": 1723.44,
        "HD": 1355.202,
        "Angle": 53.89231
    },
    {
        "MD": 2384.03,
        "TVD": 1739.97,
        "HD": 1377.864,
        "Angle": 53.84472
    },
    {
        "MD": 2412.76,
        "TVD": 1756.92,
        "HD": 1401.061,
        "Angle": 53.77741
    },
    {
        "MD": 2443.83,
        "TVD": 1775.28,
        "HD": 1426.126,
        "Angle": 53.8879
    },
    {
        "MD": 2472.42,
        "TVD": 1792.13,
        "HD": 1449.223,
        "Angle": 53.92761
    },
    {
        "MD": 2502.26,
        "TVD": 1809.7,
        "HD": 1473.342,
        "Angle": 53.87419
    },
    {
        "MD": 2530.23,
        "TVD": 1826.19,
        "HD": 1495.934,
        "Angle": 53.88969
    },
    {
        "MD": 2558.94,
        "TVD": 1843.11,
        "HD": 1519.129,
        "Angle": 53.67019
    },
    {
        "MD": 2586.69,
        "TVD": 1859.55,
        "HD": 1541.485,
        "Angle": 53.65789
    },
    {
        "MD": 2615.9,
        "TVD": 1876.86,
        "HD": 1565.013,
        "Angle": 53.88969
    },
    {
        "MD": 2644.61,
        "TVD": 1893.78,
        "HD": 1588.207,
        "Angle": 53.91697
    },
    {
        "MD": 2673.95,
        "TVD": 1911.06,
        "HD": 1611.919,
        "Angle": 53.87312
    },
    {
        "MD": 2702.92,
        "TVD": 1928.14,
        "HD": 1635.318,
        "Angle": 53.91502
    },
    {
        "MD": 2731.97,
        "TVD": 1945.25,
        "HD": 1658.795,
        "Angle": 53.99322
    },
    {
        "MD": 2760.19,
        "TVD": 1961.84,
        "HD": 1681.623,
        "Angle": 53.88903
    },
    {
        "MD": 2790.24,
        "TVD": 1979.55,
        "HD": 1705.9,
        "Angle": 53.79946
    },
    {
        "MD": 2819.43,
        "TVD": 1996.79,
        "HD": 1729.455,
        "Angle": 53.63007
    },
    {
        "MD": 2849.7,
        "TVD": 2014.74,
        "HD": 1753.829,
        "Angle": 53.47224
    },
    {
        "MD": 2877.27,
        "TVD": 2031.15,
        "HD": 1775.983,
        "Angle": 53.43533
    },
    {
        "MD": 2905.84,
        "TVD": 2048.17,
        "HD": 1798.93,
        "Angle": 53.5377
    },
    {
        "MD": 2934.58,
        "TVD": 2065.25,
        "HD": 1822.044,
        "Angle": 54.15453
    },
    {
        "MD": 2963.61,
        "TVD": 2082.25,
        "HD": 1845.576,
        "Angle": 55.1749
    },
    {
        "MD": 2991.75,
        "TVD": 2098.32,
        "HD": 1868.676,
        "Angle": 56.39278
    },
    {
        "MD": 3020.35,
        "TVD": 2114.15,
        "HD": 1892.496,
        "Angle": 56.76414
    },
    {
        "MD": 3049.36,
        "TVD": 2130.05,
        "HD": 1916.76,
        "Angle": 56.01945
    },
    {
        "MD": 3079.49,
        "TVD": 2146.89,
        "HD": 1941.745,
        "Angle": 55.30002
    },
    {
        "MD": 3108.07,
        "TVD": 2163.16,
        "HD": 1965.242,
        "Angle": 54.65057
    },
    {
        "MD": 3136.71,
        "TVD": 2179.73,
        "HD": 1988.601,
        "Angle": 53.86421
    },
    {
        "MD": 3166.81,
        "TVD": 2197.48,
        "HD": 2012.911,
        "Angle": 53.37917
    },
    {
        "MD": 3173.7,
        "TVD": 2201.59,
        "HD": 2018.441,
        "Angle": 53.11729
    },
    {
        "MD": 3196.06,
        "TVD": 2215.01,
        "HD": 2036.326,
        "Angle": 52.5249
    },
    {
        "MD": 3224.1,
        "TVD": 2232.07,
        "HD": 2058.579,
        "Angle": 51.85549
    },
    {
        "MD": 3294.82,
        "TVD": 2275.75,
        "HD": 2114.197,
        "Angle": 51.33794
    },
    {
        "MD": 3322.16,
        "TVD": 2292.83,
        "HD": 2135.545,
        "Angle": 51.07318
    },
    {
        "MD": 3352.59,
        "TVD": 2311.95,
        "HD": 2159.218,
        "Angle": 50.96677
    },
    {
        "MD": 3381.41,
        "TVD": 2330.1,
        "HD": 2181.605,
        "Angle": 50.97436
    },
    {
        "MD": 3410.33,
        "TVD": 2348.31,
        "HD": 2204.072,
        "Angle": 50.89816
    },
    {
        "MD": 3437.3,
        "TVD": 2365.32,
        "HD": 2225.001,
        "Angle": 50.88213
    },
    {
        "MD": 3468.35,
        "TVD": 2384.91,
        "HD": 2249.092,
        "Angle": 50.86854
    },
    {
        "MD": 3497.03,
        "TVD": 2403.01,
        "HD": 2271.339,
        "Angle": 50.88755
    },
    {
        "MD": 3525.69,
        "TVD": 2421.09,
        "HD": 2293.576,
        "Angle": 50.87928
    },
    {
        "MD": 3555.28,
        "TVD": 2439.76,
        "HD": 2316.533,
        "Angle": 50.94151
    },
    {
        "MD": 3584.37,
        "TVD": 2458.09,
        "HD": 2339.121,
        "Angle": 50.96476
    },
    {
        "MD": 3615.11,
        "TVD": 2477.45,
        "HD": 2362.999,
        "Angle": 50.95765
    },
    {
        "MD": 3641.67,
        "TVD": 2494.18,
        "HD": 2383.627,
        "Angle": 50.87559
    },
    {
        "MD": 3652.7,
        "TVD": 2501.14,
        "HD": 2392.184,
        "Angle": 0
    }
];

const casingData = [
  {
    section: "Casing",
    size: '30"',
    fromMD: 0,
    toMD: 109.7,
    ID: 28,
    OD: 1,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '20"',
    fromMD: 0,
    toMD: 382.7,
    ID: 18.73,
    OD: 0.635,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '13 3/8"',
    fromMD: 0,
    toMD: 1789.7,
    ID: 12.347,
    OD: 0.514,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '9 5/8"',
    fromMD: 0,
    toMD: 3251.7,
    ID: 8.681,
    OD: 0.472,
    roughness: 0.001
  },
  {
    section: "Liner",
    size: '7"',
    fromMD: 3100.7,
    toMD: 3653.7,
    ID: 6.184,
    OD: 0.408,
    roughness: 0.001
  }
];

const tubingData = [
  {
    toMD: 3291.67,
    ID: 3.958,
    OD: 0.271,
    roughness: 0.001
  }
];

const equipmentData = [
  {
    name: 'SSSV 4',
    type: 'SSSV',
    MD: 151.66
  },
  {
    name: 'Packer',
    type: 'Pk',
    MD: 3271.54
  },
  {
    name: 'NA 3',
    type: 'NA',
    MD: 3300.2
  }
];

const reservoirData = {
  name: 'S-40 PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3300.2,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 198.9668,
  temperature: 107,
  c: 1.68e-6,
  n: 0.8,
  OGR: '163 sm3/mmsm3',
  WGR: '0 sm3/mmsm3'
};

// const notes = `
//   Well test: July 7, 2024 – well is inactive per latest data.
// `;


function B12115() {
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

export default B12115
