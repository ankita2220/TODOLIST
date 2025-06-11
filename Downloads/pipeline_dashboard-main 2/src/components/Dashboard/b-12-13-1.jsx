import React from 'react';

const trajectoryData = [
    {
        "MD": 22.09,
        "TVD": 22.09,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 50.09,
        "TVD": 50.09,
        "HD": 0,
        "Angle": 2.225743
    },
    {
        "MD": 76.6,
        "TVD": 76.58,
        "HD": 1.029563,
        "Angle": 2.856174
    },
    {
        "MD": 84.65,
        "TVD": 84.62,
        "HD": 1.430686,
        "Angle": 3.555043
    },
    {
        "MD": 115.83,
        "TVD": 115.74,
        "HD": 3.364077,
        "Angle": 4.51905
    },
    {
        "MD": 144.78,
        "TVD": 144.6,
        "HD": 5.645064,
        "Angle": 6.264475
    },
    {
        "MD": 173.25,
        "TVD": 172.9,
        "HD": 8.751654,
        "Angle": 7.667455
    },
    {
        "MD": 202.33,
        "TVD": 201.72,
        "HD": 12.6316,
        "Angle": 8.526861
    },
    {
        "MD": 231.28,
        "TVD": 230.35,
        "HD": 16.92411,
        "Angle": 8.771599
    },
    {
        "MD": 260.35,
        "TVD": 259.08,
        "HD": 21.35716,
        "Angle": 8.529813
    },
    {
        "MD": 289.28,
        "TVD": 287.69,
        "HD": 25.64818,
        "Angle": 9.999769
    },
    {
        "MD": 319.56,
        "TVD": 317.51,
        "HD": 30.90613,
        "Angle": 13.5849
    },
    {
        "MD": 347.44,
        "TVD": 344.61,
        "HD": 37.45474,
        "Angle": 16.36668
    },
    {
        "MD": 376.56,
        "TVD": 372.55,
        "HD": 45.66028,
        "Angle": 17.17487
    },
    {
        "MD": 387.1,
        "TVD": 382.62,
        "HD": 48.77262,
        "Angle": 18.15468
    },
    {
        "MD": 405.38,
        "TVD": 399.99,
        "HD": 54.46837,
        "Angle": 20.84598
    },
    {
        "MD": 434.1,
        "TVD": 426.83,
        "HD": 64.68858,
        "Angle": 23.59639
    },
    {
        "MD": 464,
        "TVD": 454.23,
        "HD": 76.65729,
        "Angle": 25.95052
    },
    {
        "MD": 490.58,
        "TVD": 478.13,
        "HD": 88.28856,
        "Angle": 28.65166
    },
    {
        "MD": 519.98,
        "TVD": 503.93,
        "HD": 102.3854,
        "Angle": 30.99207
    },
    {
        "MD": 549.82,
        "TVD": 529.51,
        "HD": 117.7506,
        "Angle": 32.09589
    },
    {
        "MD": 578.87,
        "TVD": 554.12,
        "HD": 133.1859,
        "Angle": 32.22136
    },
    {
        "MD": 607.83,
        "TVD": 578.62,
        "HD": 148.6272,
        "Angle": 32.18728
    },
    {
        "MD": 637.11,
        "TVD": 603.4,
        "HD": 164.2243,
        "Angle": 32.31367
    },
    {
        "MD": 665.78,
        "TVD": 627.63,
        "HD": 179.5499,
        "Angle": 32.51376
    },
    {
        "MD": 693.98,
        "TVD": 651.41,
        "HD": 194.7075,
        "Angle": 32.62194
    },
    {
        "MD": 723.9,
        "TVD": 676.61,
        "HD": 210.8372,
        "Angle": 32.61384
    },
    {
        "MD": 753.01,
        "TVD": 701.13,
        "HD": 226.5267,
        "Angle": 32.40398
    },
    {
        "MD": 781.91,
        "TVD": 725.53,
        "HD": 242.0138,
        "Angle": 32.25294
    },
    {
        "MD": 810.75,
        "TVD": 749.92,
        "HD": 257.4045,
        "Angle": 32.43417
    },
    {
        "MD": 839.79,
        "TVD": 774.43,
        "HD": 272.9795,
        "Angle": 32.50145
    },
    {
        "MD": 867.5,
        "TVD": 797.8,
        "HD": 287.8687,
        "Angle": 32.52351
    },
    {
        "MD": 896.64,
        "TVD": 822.37,
        "HD": 303.5357,
        "Angle": 32.52135
    },
    {
        "MD": 925.72,
        "TVD": 846.89,
        "HD": 319.1695,
        "Angle": 32.28635
    },
    {
        "MD": 954.89,
        "TVD": 871.55,
        "HD": 334.7507,
        "Angle": 31.7426
    },
    {
        "MD": 984.64,
        "TVD": 896.85,
        "HD": 350.4023,
        "Angle": 31.45316
    },
    {
        "MD": 1012.68,
        "TVD": 920.77,
        "HD": 365.0336,
        "Angle": 31.40264
    },
    {
        "MD": 1042.31,
        "TVD": 946.06,
        "HD": 380.4723,
        "Angle": 31.41061
    },
    {
        "MD": 1070.97,
        "TVD": 970.52,
        "HD": 395.4089,
        "Angle": 31.53771
    },
    {
        "MD": 1100.15,
        "TVD": 995.39,
        "HD": 410.6718,
        "Angle": 31.55394
    },
    {
        "MD": 1130.18,
        "TVD": 1020.98,
        "HD": 426.3865,
        "Angle": 31.53217
    },
    {
        "MD": 1159.37,
        "TVD": 1045.86,
        "HD": 441.6522,
        "Angle": 31.51986
    },
    {
        "MD": 1187.43,
        "TVD": 1069.78,
        "HD": 456.3218,
        "Angle": 31.52859
    },
    {
        "MD": 1216.22,
        "TVD": 1094.32,
        "HD": 471.3768,
        "Angle": 31.6035
    },
    {
        "MD": 1244.54,
        "TVD": 1118.44,
        "HD": 486.2176,
        "Angle": 31.57523
    },
    {
        "MD": 1273.72,
        "TVD": 1143.3,
        "HD": 501.4967,
        "Angle": 31.59427
    },
    {
        "MD": 1304.35,
        "TVD": 1169.39,
        "HD": 517.5438,
        "Angle": 31.58355
    },
    {
        "MD": 1333.38,
        "TVD": 1194.12,
        "HD": 532.748,
        "Angle": 31.52357
    },
    {
        "MD": 1362.45,
        "TVD": 1218.9,
        "HD": 547.9473,
        "Angle": 31.50373
    },
    {
        "MD": 1391.42,
        "TVD": 1243.6,
        "HD": 563.0857,
        "Angle": 31.557
    },
    {
        "MD": 1420.43,
        "TVD": 1268.32,
        "HD": 578.2679,
        "Angle": 31.55177
    },
    {
        "MD": 1448.57,
        "TVD": 1292.3,
        "HD": 592.9927,
        "Angle": 31.47874
    },
    {
        "MD": 1478.74,
        "TVD": 1318.03,
        "HD": 608.747,
        "Angle": 31.28211
    },
    {
        "MD": 1507.63,
        "TVD": 1342.72,
        "HD": 623.7482,
        "Angle": 31.06825
    },
    {
        "MD": 1536.7,
        "TVD": 1367.62,
        "HD": 638.75,
        "Angle": 30.84604
    },
    {
        "MD": 1566.18,
        "TVD": 1392.93,
        "HD": 653.8654,
        "Angle": 30.57916
    },
    {
        "MD": 1594.87,
        "TVD": 1417.63,
        "HD": 668.4608,
        "Angle": 30.53499
    },
    {
        "MD": 1622.92,
        "TVD": 1441.79,
        "HD": 682.712,
        "Angle": 30.45167
    },
    {
        "MD": 1651.7,
        "TVD": 1466.6,
        "HD": 697.298,
        "Angle": 30.19155
    },
    {
        "MD": 1681.04,
        "TVD": 1491.96,
        "HD": 712.0529,
        "Angle": 30.07638
    },
    {
        "MD": 1710.08,
        "TVD": 1517.09,
        "HD": 726.6064,
        "Angle": 30.1359
    },
    {
        "MD": 1739.23,
        "TVD": 1542.3,
        "HD": 741.2412,
        "Angle": 30.23855
    },
    {
        "MD": 1768.04,
        "TVD": 1567.19,
        "HD": 755.75,
        "Angle": 30.27264
    },
    {
        "MD": 1777.94,
        "TVD": 1575.74,
        "HD": 760.7407,
        "Angle": 30.12502
    },
    {
        "MD": 1825.99,
        "TVD": 1617.3,
        "HD": 784.8565,
        "Angle": 30.04695
    },
    {
        "MD": 1855.16,
        "TVD": 1642.55,
        "HD": 799.4621,
        "Angle": 30.06293
    },
    {
        "MD": 1882.59,
        "TVD": 1666.29,
        "HD": 813.2032,
        "Angle": 30.05818
    },
    {
        "MD": 1911.59,
        "TVD": 1691.39,
        "HD": 827.7287,
        "Angle": 30.15412
    },
    {
        "MD": 1940.41,
        "TVD": 1716.31,
        "HD": 842.2058,
        "Angle": 30.11541
    },
    {
        "MD": 1970.71,
        "TVD": 1742.52,
        "HD": 857.4086,
        "Angle": 30.10855
    },
    {
        "MD": 1998.8,
        "TVD": 1766.82,
        "HD": 871.4997,
        "Angle": 30.12256
    },
    {
        "MD": 2029.16,
        "TVD": 1793.08,
        "HD": 886.7359,
        "Angle": 30.27815
    },
    {
        "MD": 2057.31,
        "TVD": 1817.39,
        "HD": 900.9291,
        "Angle": 30.51742
    },
    {
        "MD": 2086.33,
        "TVD": 1842.39,
        "HD": 915.6655,
        "Angle": 30.58868
    },
    {
        "MD": 2115.29,
        "TVD": 1867.32,
        "HD": 930.4024,
        "Angle": 30.69915
    },
    {
        "MD": 2145.26,
        "TVD": 1893.09,
        "HD": 945.703,
        "Angle": 30.5789
    },
    {
        "MD": 2174.31,
        "TVD": 1918.1,
        "HD": 960.4814,
        "Angle": 30.5442
    },
    {
        "MD": 2202.92,
        "TVD": 1942.74,
        "HD": 975.0211,
        "Angle": 30.54123
    },
    {
        "MD": 2232.04,
        "TVD": 1967.82,
        "HD": 989.8187,
        "Angle": 30.55948
    },
    {
        "MD": 2261.99,
        "TVD": 1993.61,
        "HD": 1005.046,
        "Angle": 30.54978
    },
    {
        "MD": 2290.95,
        "TVD": 2018.55,
        "HD": 1019.766,
        "Angle": 30.5789
    },
    {
        "MD": 2320,
        "TVD": 2043.56,
        "HD": 1034.545,
        "Angle": 30.56931
    },
    {
        "MD": 2348.78,
        "TVD": 2068.34,
        "HD": 1049.182,
        "Angle": 30.41489
    },
    {
        "MD": 2377.41,
        "TVD": 2093.03,
        "HD": 1063.676,
        "Angle": 30.48728
    },
    {
        "MD": 2406.92,
        "TVD": 2118.46,
        "HD": 1078.648,
        "Angle": 30.52742
    },
    {
        "MD": 2436.21,
        "TVD": 2143.69,
        "HD": 1093.525,
        "Angle": 30.44612
    },
    {
        "MD": 2464.13,
        "TVD": 2167.76,
        "HD": 1107.673,
        "Angle": 30.42561
    },
    {
        "MD": 2494.12,
        "TVD": 2193.62,
        "HD": 1122.861,
        "Angle": 30.37995
    },
    {
        "MD": 2522.96,
        "TVD": 2218.5,
        "HD": 1137.446,
        "Angle": 30.34533
    },
    {
        "MD": 2530.77,
        "TVD": 2225.24,
        "HD": 1141.392,
        "Angle": 30.53823
    },
    {
        "MD": 2549.37,
        "TVD": 2241.26,
        "HD": 1150.843,
        "Angle": 30.4544
    },
    {
        "MD": 2578,
        "TVD": 2265.94,
        "HD": 1165.354,
        "Angle": 30.49342
    },
    {
        "MD": 2606.92,
        "TVD": 2290.86,
        "HD": 1180.029,
        "Angle": 30.07487
    },
    {
        "MD": 2635.74,
        "TVD": 2315.8,
        "HD": 1194.472,
        "Angle": 29.67904
    },
    {
        "MD": 2664.63,
        "TVD": 2340.9,
        "HD": 1208.776,
        "Angle": 29.84172
    },
    {
        "MD": 2693.59,
        "TVD": 2366.02,
        "HD": 1223.187,
        "Angle": 29.76077
    },
    {
        "MD": 2706.1,
        "TVD": 2376.88,
        "HD": 1229.397,
        "Angle": 30.14098
    },
    {
        "MD": 2728.51,
        "TVD": 2396.26,
        "HD": 1240.649,
        "Angle": 0
    }
];

const casingData = [
  { section: 'Casing', size: '30"', fromMD: 0, toMD: 110.51, ID: 28, OD: 30, roughness: 0.001 },
  { section: 'Casing', size: '20"', fromMD: 0, toMD: 387.51, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: 'Casing', size: '13 3/8"', fromMD: 0, toMD: 1793.51, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: 'Casing', size: '9 5/8"', fromMD: 0, toMD: 2505.51, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: 'Liner', size: '7"', fromMD: 2419.51, toMD: 2728.51, ID: 6.184, OD: 7, roughness: 0.001 },
];

const tubingData = [
  { fromMD: 0, toMD: 2639.02, ID: 2.992, OD: 3.5, roughness: 0.001 },
];

const equipmentData = [
  { name: 'SSSV', type: 'SSSV', MD: 157.96 },
  { name: 'Packer', type: 'Pk', MD: 2632.64 },
];

const reservoirData = {
  name: 'S-40PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2669.51,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 142.97,
  temperature: 107,
  c: 8.7e-7,
  n: 0.8,
  OGR: '336 sm3/mmsm3',
  WGR: '35 sm3/mmsm3',
};

const WellboreDataPage = () => {
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
  );
};

export default WellboreDataPage;
