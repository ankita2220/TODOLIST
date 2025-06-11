import React from 'react'
const trajectoryData =[
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
        "Angle": 0
    },
    {
        "MD": 61.31,
        "TVD": 61.31,
        "HD": 0,
        "Angle": 1.541978
    },
    {
        "MD": 116.54,
        "TVD": 116.52,
        "HD": 1.486203,
        "Angle": 2.14813
    },
    {
        "MD": 130.77,
        "TVD": 130.74,
        "HD": 2.019589,
        "Angle": 2.101389
    },
    {
        "MD": 145.64,
        "TVD": 145.6,
        "HD": 2.564841,
        "Angle": 2.613142
    },
    {
        "MD": 174.49,
        "TVD": 174.42,
        "HD": 3.880174,
        "Angle": 4.977398
    },
    {
        "MD": 203.66,
        "TVD": 203.48,
        "HD": 6.411043,
        "Angle": 7.26364
    },
    {
        "MD": 232.32,
        "TVD": 231.91,
        "HD": 10.03467,
        "Angle": 9.55872
    },
    {
        "MD": 261.13,
        "TVD": 260.32,
        "HD": 14.81881,
        "Angle": 11.97487
    },
    {
        "MD": 290.54,
        "TVD": 289.09,
        "HD": 20.92088,
        "Angle": 14.10413
    },
    {
        "MD": 319.4,
        "TVD": 317.08,
        "HD": 27.95362,
        "Angle": 15.57212
    },
    {
        "MD": 348.55,
        "TVD": 345.16,
        "HD": 35.77897,
        "Angle": 17.53774
    },
    {
        "MD": 371.57,
        "TVD": 367.11,
        "HD": 42.71568,
        "Angle": 19.38365
    },
    {
        "MD": 405.09,
        "TVD": 398.73,
        "HD": 53.8407,
        "Angle": 21.11667
    },
    {
        "MD": 433.98,
        "TVD": 425.68,
        "HD": 64.24885,
        "Angle": 23.38467
    },
    {
        "MD": 462.59,
        "TVD": 451.94,
        "HD": 75.60422,
        "Angle": 25.77421
    },
    {
        "MD": 491.74,
        "TVD": 478.19,
        "HD": 88.27939,
        "Angle": 28.02799
    },
    {
        "MD": 520.73,
        "TVD": 503.78,
        "HD": 101.9019,
        "Angle": 29.52154
    },
    {
        "MD": 549.46,
        "TVD": 528.78,
        "HD": 116.0586,
        "Angle": 31.43804
    },
    {
        "MD": 578.48,
        "TVD": 553.54,
        "HD": 131.1947,
        "Angle": 34.19141
    },
    {
        "MD": 607.12,
        "TVD": 577.23,
        "HD": 147.2893,
        "Angle": 36.76443
    },
    {
        "MD": 636.13,
        "TVD": 600.47,
        "HD": 164.6525,
        "Angle": 38.5151
    },
    {
        "MD": 665.18,
        "TVD": 623.2,
        "HD": 182.7426,
        "Angle": 39.68131
    },
    {
        "MD": 693.74,
        "TVD": 645.18,
        "HD": 200.9786,
        "Angle": 41.32795
    },
    {
        "MD": 722.93,
        "TVD": 667.1,
        "HD": 220.2547,
        "Angle": 43.49822
    },
    {
        "MD": 751.99,
        "TVD": 688.18,
        "HD": 240.2577,
        "Angle": 45.83591
    },
    {
        "MD": 780.61,
        "TVD": 708.12,
        "HD": 260.7882,
        "Angle": 47.28434
    },
    {
        "MD": 809.4,
        "TVD": 727.65,
        "HD": 281.941,
        "Angle": 47.58412
    },
    {
        "MD": 838.31,
        "TVD": 747.15,
        "HD": 303.2843,
        "Angle": 47.38131
    },
    {
        "MD": 867.02,
        "TVD": 766.59,
        "HD": 324.4114,
        "Angle": 47.28479
    },
    {
        "MD": 896.68,
        "TVD": 786.71,
        "HD": 346.2036,
        "Angle": 47.43869
    },
    {
        "MD": 925.51,
        "TVD": 806.21,
        "HD": 367.4384,
        "Angle": 47.38216
    },
    {
        "MD": 954.25,
        "TVD": 825.67,
        "HD": 388.5878,
        "Angle": 47.35682
    },
    {
        "MD": 983.05,
        "TVD": 845.18,
        "HD": 409.7727,
        "Angle": 47.68684
    },
    {
        "MD": 1012.21,
        "TVD": 864.81,
        "HD": 431.3358,
        "Angle": 47.71672
    },
    {
        "MD": 1041.03,
        "TVD": 884.2,
        "HD": 452.6577,
        "Angle": 47.45052
    },
    {
        "MD": 1069.97,
        "TVD": 903.77,
        "HD": 473.9776,
        "Angle": 47.52098
    },
    {
        "MD": 1098.86,
        "TVD": 923.28,
        "HD": 495.2847,
        "Angle": 47.63823
    },
    {
        "MD": 1128.26,
        "TVD": 943.09,
        "HD": 517.0085,
        "Angle": 47.52171
    },
    {
        "MD": 1156.41,
        "TVD": 962.1,
        "HD": 537.77,
        "Angle": 47.50655
    },
    {
        "MD": 1185.07,
        "TVD": 981.46,
        "HD": 558.9026,
        "Angle": 47.52542
    },
    {
        "MD": 1214.54,
        "TVD": 1001.36,
        "HD": 580.639,
        "Angle": 47.51535
    },
    {
        "MD": 1243.19,
        "TVD": 1020.71,
        "HD": 601.7672,
        "Angle": 47.56795
    },
    {
        "MD": 1272.18,
        "TVD": 1040.27,
        "HD": 623.1641,
        "Angle": 47.53721
    },
    {
        "MD": 1301.39,
        "TVD": 1059.99,
        "HD": 644.7128,
        "Angle": 47.57793
    },
    {
        "MD": 1330.43,
        "TVD": 1079.58,
        "HD": 666.15,
        "Angle": 47.67443
    },
    {
        "MD": 1359.39,
        "TVD": 1099.08,
        "HD": 687.561,
        "Angle": 47.62728
    },
    {
        "MD": 1388.22,
        "TVD": 1118.51,
        "HD": 708.8599,
        "Angle": 47.46943
    },
    {
        "MD": 1417.2,
        "TVD": 1138.1,
        "HD": 730.2157,
        "Angle": 47.55186
    },
    {
        "MD": 1446.27,
        "TVD": 1157.72,
        "HD": 751.6662,
        "Angle": 47.58971
    },
    {
        "MD": 1474.59,
        "TVD": 1176.82,
        "HD": 772.5758,
        "Angle": 47.52201
    },
    {
        "MD": 1503.91,
        "TVD": 1196.62,
        "HD": 794.2004,
        "Angle": 47.63489
    },
    {
        "MD": 1532.67,
        "TVD": 1216,
        "HD": 815.4501,
        "Angle": 47.78806
    },
    {
        "MD": 1561.47,
        "TVD": 1235.35,
        "HD": 836.7813,
        "Angle": 47.72316
    },
    {
        "MD": 1574.7,
        "TVD": 1244.25,
        "HD": 846.5702,
        "Angle": 47.76935
    },
    {
        "MD": 1608.95,
        "TVD": 1267.27,
        "HD": 871.9304,
        "Angle": 47.95978
    },
    {
        "MD": 1637.98,
        "TVD": 1286.71,
        "HD": 893.4903,
        "Angle": 48.11961
    },
    {
        "MD": 1667.25,
        "TVD": 1306.25,
        "HD": 915.283,
        "Angle": 48.10956
    },
    {
        "MD": 1696.05,
        "TVD": 1325.48,
        "HD": 936.7224,
        "Angle": 47.89001
    },
    {
        "MD": 1725.19,
        "TVD": 1345.02,
        "HD": 958.3401,
        "Angle": 47.65861
    },
    {
        "MD": 1754.26,
        "TVD": 1364.6,
        "HD": 979.8271,
        "Angle": 47.68212
    },
    {
        "MD": 1783.15,
        "TVD": 1384.05,
        "HD": 1001.189,
        "Angle": 47.65907
    },
    {
        "MD": 1811.76,
        "TVD": 1403.32,
        "HD": 1022.336,
        "Angle": 47.586
    },
    {
        "MD": 1840.76,
        "TVD": 1422.88,
        "HD": 1043.746,
        "Angle": 47.61611
    },
    {
        "MD": 1869.48,
        "TVD": 1442.24,
        "HD": 1064.96,
        "Angle": 47.55194
    },
    {
        "MD": 1898.15,
        "TVD": 1461.59,
        "HD": 1086.116,
        "Angle": 47.54853
    },
    {
        "MD": 1927.07,
        "TVD": 1481.11,
        "HD": 1107.454,
        "Angle": 47.62669
    },
    {
        "MD": 1955.87,
        "TVD": 1500.52,
        "HD": 1128.731,
        "Angle": 47.68052
    },
    {
        "MD": 1984.67,
        "TVD": 1519.91,
        "HD": 1150.026,
        "Angle": 47.67174
    },
    {
        "MD": 2013.48,
        "TVD": 1539.31,
        "HD": 1171.325,
        "Angle": 47.71721
    },
    {
        "MD": 2042.33,
        "TVD": 1558.72,
        "HD": 1192.669,
        "Angle": 47.70893
    },
    {
        "MD": 2071.22,
        "TVD": 1578.16,
        "HD": 1214.04,
        "Angle": 47.67815
    },
    {
        "MD": 2100.39,
        "TVD": 1597.8,
        "HD": 1235.608,
        "Angle": 47.63078
    },
    {
        "MD": 2129.4,
        "TVD": 1617.35,
        "HD": 1257.041,
        "Angle": 47.58222
    },
    {
        "MD": 2158.22,
        "TVD": 1636.79,
        "HD": 1278.317,
        "Angle": 47.6471
    },
    {
        "MD": 2187.15,
        "TVD": 1656.28,
        "HD": 1299.696,
        "Angle": 47.68422
    },
    {
        "MD": 2216.16,
        "TVD": 1675.81,
        "HD": 1321.148,
        "Angle": 47.63547
    },
    {
        "MD": 2244.95,
        "TVD": 1695.21,
        "HD": 1342.42,
        "Angle": 47.63778
    },
    {
        "MD": 2273.86,
        "TVD": 1714.69,
        "HD": 1363.781,
        "Angle": 47.67999
    },
    {
        "MD": 2302.63,
        "TVD": 1734.06,
        "HD": 1385.054,
        "Angle": 47.67422
    },
    {
        "MD": 2330.58,
        "TVD": 1752.88,
        "HD": 1405.718,
        "Angle": 47.61155
    },
    {
        "MD": 2360.41,
        "TVD": 1772.99,
        "HD": 1427.75,
        "Angle": 47.56535
    },
    {
        "MD": 2389.28,
        "TVD": 1792.47,
        "HD": 1449.058,
        "Angle": 47.8432
    },
    {
        "MD": 2418.2,
        "TVD": 1811.88,
        "HD": 1470.496,
        "Angle": 48.1272
    },
    {
        "MD": 2446.92,
        "TVD": 1831.05,
        "HD": 1491.882,
        "Angle": 48.14567
    },
    {
        "MD": 2476.04,
        "TVD": 1850.48,
        "HD": 1513.572,
        "Angle": 48.09302
    },
    {
        "MD": 2505.22,
        "TVD": 1869.97,
        "HD": 1535.289,
        "Angle": 48.12772
    },
    {
        "MD": 2534.18,
        "TVD": 1889.3,
        "HD": 1556.853,
        "Angle": 48.11844
    },
    {
        "MD": 2562.97,
        "TVD": 1908.52,
        "HD": 1578.288,
        "Angle": 47.86959
    },
    {
        "MD": 2591.86,
        "TVD": 1927.9,
        "HD": 1599.714,
        "Angle": 47.7022
    },
    {
        "MD": 2620.88,
        "TVD": 1947.43,
        "HD": 1621.178,
        "Angle": 47.6197
    },
    {
        "MD": 2649.78,
        "TVD": 1966.91,
        "HD": 1642.526,
        "Angle": 47.5885
    },
    {
        "MD": 2678.9,
        "TVD": 1986.55,
        "HD": 1664.026,
        "Angle": 47.62904
    },
    {
        "MD": 2707.82,
        "TVD": 2006.04,
        "HD": 1685.392,
        "Angle": 47.62962
    },
    {
        "MD": 2736.77,
        "TVD": 2025.55,
        "HD": 1706.781,
        "Angle": 47.56859
    },
    {
        "MD": 2765.79,
        "TVD": 2045.13,
        "HD": 1728.2,
        "Angle": 47.59914
    },
    {
        "MD": 2794.56,
        "TVD": 2064.53,
        "HD": 1749.445,
        "Angle": 47.60037
    },
    {
        "MD": 2823.39,
        "TVD": 2083.97,
        "HD": 1770.735,
        "Angle": 47.59472
    },
    {
        "MD": 2852.38,
        "TVD": 2103.52,
        "HD": 1792.141,
        "Angle": 47.55594
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
        "TVD": 2438,
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
        "Angle": 0
    }
];

const casingData = [
  {
    "section": "Casing",
    "size": "30\"",
    "fromMD": 0,
    "toMD": 379.5,
    "ID": 18.73,
    "OD": 20,
    "roughness": 0.001
  },
  {
    "section": "Casing",
    "size": "13 3/8\"",
    "fromMD": 0,
    "toMD": 3065.5,
    "ID": 8.681,
    "OD": 9.625,
    "roughness": 0.001
  },
  {
    "section": "Casing",
    "size": "9 5/8\"",
    "fromMD": 2909.5,
    "toMD": 3427.5,
    "ID": 6.184,
    "OD": 7,
    "roughness": 0.001
  },
  {
    "section": "Liner",
    "size": "7\"",
    "fromMD": 2705.42,
    "toMD": 3230.42,
    "ID": 6.184,
    "OD": 0.408,
    "roughness": 0.001
  }
];

const tubingData = [
  {  toMD: 3321.53, ID: 2.992, OD: 3.5, roughness: 0.001 },
];

const equipmentData = [
  { name: 'SSSV', type: 'SSSV', MD: 155.47 },
  { name: 'Packer', type: 'Pk', MD: 3225.48 },
  { name: '', type: 'NA', MD: 3346.25 },
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3346.25,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 170.9668,
  temperature: 107,
  c: 8.50e-7,
  n: 0.8,
  OGR: '7 sm3/mmsm3',
  WGR: '59 sm3/mmsm3'
};

const B12111 = () => {
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

export default B12111
