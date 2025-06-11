import React from 'react'

const trajectoryData =[
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 23.5,
        "TVD": 23.5,
        "HD": 0,
        "Angle": 1.428864
    },
    {
        "MD": 87.82,
        "TVD": 87.8,
        "HD": 1.60387,
        "Angle": 2.130607
    },
    {
        "MD": 116.75,
        "TVD": 116.71,
        "HD": 2.679417,
        "Angle": 3.362689
    },
    {
        "MD": 145.79,
        "TVD": 145.7,
        "HD": 4.382796,
        "Angle": 5.179363
    },
    {
        "MD": 175.18,
        "TVD": 174.97,
        "HD": 7.035945,
        "Angle": 7.135001
    },
    {
        "MD": 203.59,
        "TVD": 203.16,
        "HD": 10.56468,
        "Angle": 9.151193
    },
    {
        "MD": 232.66,
        "TVD": 231.86,
        "HD": 15.18798,
        "Angle": 11.07036
    },
    {
        "MD": 261.68,
        "TVD": 260.34,
        "HD": 20.76024,
        "Angle": 13.75081
    },
    {
        "MD": 290.29,
        "TVD": 288.13,
        "HD": 27.56082,
        "Angle": 16.94259
    },
    {
        "MD": 319.09,
        "TVD": 315.68,
        "HD": 35.95353,
        "Angle": 19.72961
    },
    {
        "MD": 348.56,
        "TVD": 343.42,
        "HD": 45.90206,
        "Angle": 22.03524
    },
    {
        "MD": 370.19,
        "TVD": 363.47,
        "HD": 54.01713,
        "Angle": 24.41003
    },
    {
        "MD": 404.87,
        "TVD": 395.05,
        "HD": 68.34913,
        "Angle": 26.97776
    },
    {
        "MD": 433.45,
        "TVD": 420.52,
        "HD": 81.31429,
        "Angle": 29.53859
    },
    {
        "MD": 462.84,
        "TVD": 446.09,
        "HD": 95.80385,
        "Angle": 32.62731
    },
    {
        "MD": 491.99,
        "TVD": 470.64,
        "HD": 111.5207,
        "Angle": 35.80023
    },
    {
        "MD": 521.1,
        "TVD": 494.25,
        "HD": 128.5489,
        "Angle": 38.34212
    },
    {
        "MD": 549.8,
        "TVD": 516.76,
        "HD": 146.3531,
        "Angle": 40.6081
    },
    {
        "MD": 577.58,
        "TVD": 537.85,
        "HD": 164.4346,
        "Angle": 42.68009
    },
    {
        "MD": 606.2,
        "TVD": 558.89,
        "HD": 183.8362,
        "Angle": 44.19579
    },
    {
        "MD": 635.56,
        "TVD": 579.94,
        "HD": 204.3035,
        "Angle": 45.00601
    },
    {
        "MD": 664.71,
        "TVD": 600.55,
        "HD": 224.9178,
        "Angle": 45.23458
    },
    {
        "MD": 693.48,
        "TVD": 620.81,
        "HD": 245.3444,
        "Angle": 45.23065
    },
    {
        "MD": 722.39,
        "TVD": 641.17,
        "HD": 265.869,
        "Angle": 45.23728
    },
    {
        "MD": 751.63,
        "TVD": 661.76,
        "HD": 286.6302,
        "Angle": 45.27928
    },
    {
        "MD": 780.11,
        "TVD": 681.8,
        "HD": 306.8665,
        "Angle": 45.35281
    },
    {
        "MD": 809.68,
        "TVD": 702.58,
        "HD": 327.904,
        "Angle": 45.49456
    },
    {
        "MD": 838.34,
        "TVD": 722.67,
        "HD": 348.3439,
        "Angle": 45.55362
    },
    {
        "MD": 867.33,
        "TVD": 742.97,
        "HD": 369.04,
        "Angle": 45.47806
    },
    {
        "MD": 895.24,
        "TVD": 762.54,
        "HD": 388.9393,
        "Angle": 45.565
    },
    {
        "MD": 925.35,
        "TVD": 783.62,
        "HD": 410.4392,
        "Angle": 45.57584
    },
    {
        "MD": 953.58,
        "TVD": 803.38,
        "HD": 430.6005,
        "Angle": 45.5396
    },
    {
        "MD": 982.42,
        "TVD": 823.58,
        "HD": 451.1846,
        "Angle": 45.27198
    },
    {
        "MD": 1011.28,
        "TVD": 843.89,
        "HD": 471.6883,
        "Angle": 45.08277
    },
    {
        "MD": 1040.37,
        "TVD": 864.43,
        "HD": 492.2878,
        "Angle": 45.11078
    },
    {
        "MD": 1068.95,
        "TVD": 884.6,
        "HD": 512.5359,
        "Angle": 45.13837
    },
    {
        "MD": 1098.04,
        "TVD": 905.12,
        "HD": 533.1553,
        "Angle": 45.0975
    },
    {
        "MD": 1127.35,
        "TVD": 925.81,
        "HD": 553.9158,
        "Angle": 45.07445
    },
    {
        "MD": 1156.28,
        "TVD": 946.24,
        "HD": 574.399,
        "Angle": 45.12711
    },
    {
        "MD": 1185.18,
        "TVD": 966.63,
        "HD": 594.8796,
        "Angle": 45.0713
    },
    {
        "MD": 1214.25,
        "TVD": 987.16,
        "HD": 615.4608,
        "Angle": 44.96297
    },
    {
        "MD": 1242.94,
        "TVD": 1007.46,
        "HD": 635.7346,
        "Angle": 44.68898
    },
    {
        "MD": 1271.93,
        "TVD": 1028.07,
        "HD": 656.122,
        "Angle": 44.37114
    },
    {
        "MD": 1301.07,
        "TVD": 1048.9,
        "HD": 676.4997,
        "Angle": 44.34196
    },
    {
        "MD": 1329.79,
        "TVD": 1069.44,
        "HD": 696.5733,
        "Angle": 44.15373
    },
    {
        "MD": 1358.92,
        "TVD": 1090.34,
        "HD": 716.8648,
        "Angle": 43.93374
    },
    {
        "MD": 1386.97,
        "TVD": 1110.54,
        "HD": 736.3266,
        "Angle": 44.08488
    },
    {
        "MD": 1416.79,
        "TVD": 1131.96,
        "HD": 757.0731,
        "Angle": 44.15362
    },
    {
        "MD": 1445.46,
        "TVD": 1152.53,
        "HD": 777.0442,
        "Angle": 44.11462
    },
    {
        "MD": 1473.15,
        "TVD": 1172.41,
        "HD": 796.3191,
        "Angle": 44.11252
    },
    {
        "MD": 1503.36,
        "TVD": 1194.1,
        "HD": 817.3473,
        "Angle": 44.0957
    },
    {
        "MD": 1531.25,
        "TVD": 1214.13,
        "HD": 836.7548,
        "Angle": 44.20233
    },
    {
        "MD": 1559.86,
        "TVD": 1234.64,
        "HD": 856.7016,
        "Angle": 44.33623
    },
    {
        "MD": 1580.58,
        "TVD": 1249.46,
        "HD": 871.1821,
        "Angle": 44.37328
    },
    {
        "MD": 1594.5,
        "TVD": 1259.41,
        "HD": 880.9168,
        "Angle": 44.71313
    },
    {
        "MD": 1603.9,
        "TVD": 1266.09,
        "HD": 887.5302,
        "Angle": 44.92863
    },
    {
        "MD": 1631.57,
        "TVD": 1285.68,
        "HD": 907.0715,
        "Angle": 45.00779
    },
    {
        "MD": 1661.81,
        "TVD": 1307.06,
        "HD": 928.4573,
        "Angle": 44.91266
    },
    {
        "MD": 1692.48,
        "TVD": 1328.78,
        "HD": 950.1112,
        "Angle": 44.71536
    },
    {
        "MD": 1717.36,
        "TVD": 1346.46,
        "HD": 967.6164,
        "Angle": 44.46681
    },
    {
        "MD": 1719.63,
        "TVD": 1348.08,
        "HD": 969.2065,
        "Angle": 44.57568
    },
    {
        "MD": 1748.76,
        "TVD": 1368.83,
        "HD": 989.6514,
        "Angle": 44.30381
    },
    {
        "MD": 1778.16,
        "TVD": 1389.87,
        "HD": 1010.186,
        "Angle": 44.06387
    },
    {
        "MD": 1806.87,
        "TVD": 1410.5,
        "HD": 1030.153,
        "Angle": 44.0594
    },
    {
        "MD": 1835.55,
        "TVD": 1431.11,
        "HD": 1050.097,
        "Angle": 44.0637
    },
    {
        "MD": 1864.58,
        "TVD": 1451.97,
        "HD": 1070.286,
        "Angle": 44.09363
    },
    {
        "MD": 1893.75,
        "TVD": 1472.92,
        "HD": 1090.584,
        "Angle": 44.01155
    },
    {
        "MD": 1922.24,
        "TVD": 1493.41,
        "HD": 1110.379,
        "Angle": 44.03546
    },
    {
        "MD": 1951.59,
        "TVD": 1514.51,
        "HD": 1130.78,
        "Angle": 44.08857
    },
    {
        "MD": 1979.95,
        "TVD": 1534.88,
        "HD": 1150.512,
        "Angle": 44.10798
    },
    {
        "MD": 2008.57,
        "TVD": 1555.43,
        "HD": 1170.432,
        "Angle": 44.11979
    },
    {
        "MD": 2037.14,
        "TVD": 1575.94,
        "HD": 1190.321,
        "Angle": 44.4193
    },
    {
        "MD": 2066.43,
        "TVD": 1596.86,
        "HD": 1210.821,
        "Angle": 45.06866
    },
    {
        "MD": 2094.55,
        "TVD": 1616.72,
        "HD": 1230.729,
        "Angle": 46.03198
    },
    {
        "MD": 2124.15,
        "TVD": 1637.27,
        "HD": 1252.033,
        "Angle": 46.07853
    },
    {
        "MD": 2152.91,
        "TVD": 1657.22,
        "HD": 1272.748,
        "Angle": 45.10586
    },
    {
        "MD": 2181.19,
        "TVD": 1677.18,
        "HD": 1292.782,
        "Angle": 44.17571
    },
    {
        "MD": 2210.54,
        "TVD": 1698.23,
        "HD": 1313.235,
        "Angle": 43.28509
    },
    {
        "MD": 2240.02,
        "TVD": 1719.69,
        "HD": 1333.448,
        "Angle": 42.38259
    },
    {
        "MD": 2268.68,
        "TVD": 1740.86,
        "HD": 1352.767,
        "Angle": 41.47608
    },
    {
        "MD": 2297.99,
        "TVD": 1762.82,
        "HD": 1372.179,
        "Angle": 40.60275
    },
    {
        "MD": 2326.94,
        "TVD": 1784.8,
        "HD": 1391.02,
        "Angle": 39.66162
    },
    {
        "MD": 2355.31,
        "TVD": 1806.64,
        "HD": 1409.127,
        "Angle": 38.71167
    },
    {
        "MD": 2384.35,
        "TVD": 1829.3,
        "HD": 1427.289,
        "Angle": 38.00655
    },
    {
        "MD": 2413.87,
        "TVD": 1852.56,
        "HD": 1445.466,
        "Angle": 37.63438
    },
    {
        "MD": 2443.09,
        "TVD": 1875.7,
        "HD": 1463.308,
        "Angle": 37.24993
    },
    {
        "MD": 2472.11,
        "TVD": 1898.8,
        "HD": 1480.874,
        "Angle": 36.93559
    },
    {
        "MD": 2501.16,
        "TVD": 1922.02,
        "HD": 1498.33,
        "Angle": 36.5562
    },
    {
        "MD": 2529.88,
        "TVD": 1945.09,
        "HD": 1515.436,
        "Angle": 36.44154
    },
    {
        "MD": 2558.11,
        "TVD": 1967.8,
        "HD": 1532.205,
        "Angle": 37.72828
    },
    {
        "MD": 2587.19,
        "TVD": 1990.8,
        "HD": 1549.999,
        "Angle": 40.17341
    },
    {
        "MD": 2616.1,
        "TVD": 2012.89,
        "HD": 1568.649,
        "Angle": 42.74047
    },
    {
        "MD": 2644.53,
        "TVD": 2033.77,
        "HD": 1587.944,
        "Angle": 45.49252
    },
    {
        "MD": 2673.46,
        "TVD": 2054.05,
        "HD": 1608.576,
        "Angle": 48.25138
    },
    {
        "MD": 2702.52,
        "TVD": 2073.4,
        "HD": 1630.257,
        "Angle": 50.99961
    },
    {
        "MD": 2730.55,
        "TVD": 2091.04,
        "HD": 1652.04,
        "Angle": 53.54103
    },
    {
        "MD": 2760.1,
        "TVD": 2108.6,
        "HD": 1675.807,
        "Angle": 54.86156
    },
    {
        "MD": 2789.88,
        "TVD": 2125.74,
        "HD": 1700.16,
        "Angle": 55.04937
    },
    {
        "MD": 2814.65,
        "TVD": 2139.93,
        "HD": 1720.462,
        "Angle": 55.16267
    },
    {
        "MD": 2838.44,
        "TVD": 2153.52,
        "HD": 1739.989,
        "Angle": 55.25402
    },
    {
        "MD": 2861.46,
        "TVD": 2166.64,
        "HD": 1758.904,
        "Angle": 54.77389
    },
    {
        "MD": 2890.69,
        "TVD": 2183.5,
        "HD": 1782.781,
        "Angle": 53.68412
    },
    {
        "MD": 2918.77,
        "TVD": 2200.13,
        "HD": 1805.407,
        "Angle": 52.48114
    },
    {
        "MD": 2948.03,
        "TVD": 2217.95,
        "HD": 1828.615,
        "Angle": 51.334
    },
    {
        "MD": 2976.36,
        "TVD": 2235.65,
        "HD": 1850.735,
        "Angle": 50.4627
    },
    {
        "MD": 3005.72,
        "TVD": 2254.34,
        "HD": 1873.378,
        "Angle": 49.74293
    },
    {
        "MD": 3034.41,
        "TVD": 2272.88,
        "HD": 1895.272,
        "Angle": 48.93616
    },
    {
        "MD": 3063.76,
        "TVD": 2292.16,
        "HD": 1917.402,
        "Angle": 48.21654
    },
    {
        "MD": 3092.38,
        "TVD": 2311.23,
        "HD": 1938.743,
        "Angle": 47.68653
    },
    {
        "MD": 3120.5,
        "TVD": 2330.16,
        "HD": 1959.537,
        "Angle": 46.9259
    },
    {
        "MD": 3149.58,
        "TVD": 2350.02,
        "HD": 1980.779,
        "Angle": 46.35912
    },
    {
        "MD": 3178.98,
        "TVD": 2370.31,
        "HD": 2002.055,
        "Angle": 46.12832
    },
    {
        "MD": 3208.17,
        "TVD": 2390.54,
        "HD": 2023.098,
        "Angle": 45.93506
    },
    {
        "MD": 3237.33,
        "TVD": 2410.82,
        "HD": 2044.051,
        "Angle": 45.99027
    },
    {
        "MD": 3266.26,
        "TVD": 2430.92,
        "HD": 2064.858,
        "Angle": 46.0346
    },
    {
        "MD": 3293.96,
        "TVD": 2450.15,
        "HD": 2084.795,
        "Angle": 46.01284
    },
    {
        "MD": 3304.5,
        "TVD": 2457.47,
        "HD": 2092.379,
        "Angle": 0
    }
];

const casingData = [
  {
    section: "Casing",
    size: '30"',
    fromMD: 0,
    toMD: 289.5,
    ID: 28,
    OD: 30,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '20"',
    fromMD: 0,
    toMD: 387.5,
    ID: 18.73,
    OD: 20,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '13 3/8"',
    fromMD: 0,
    toMD: 1593.5,
    ID: 12.347,
    OD: 13.375,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '9 5/8"',
    fromMD: 0,
    toMD: 2837.5,
    ID: 8.681,
    OD: 9.625,
    roughness: 0.001
  },
  {
    section: "Liner",
    size: '7"',
    fromMD: 2686.5,
    toMD: 3304.5,
    ID: 6.184,
    OD: 7,
    roughness: 0.001
  }
];

const tubingData = [
  {
    toMD: 2995.84,
    ID: 2.992,
    OD: 3.5,
    roughness: 0.001
  }
];

const equipmentData = [
  {
    name: 'SSSV',
    type: 'SSSV',
    MD: 161.67
  },
  {
    name: 'SSSV 1',
    type: 'SSSV',
    MD: 161.67
  },
  {
    name: 'Packer',
    type: 'Pk',
    MD: 2832.61
  },
  {
    name: 'NA 1',
    type: 'NA',
    MD: 3106.75
  }
];

const reservoirData = {
  name: 'S-40 PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3106.75,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 158.9668,
  temperature: 107,
  c: 4.07e-6,
  n: 0.8,
  OGR: '150 sm3/mmsm3',
  WGR: '3 sm3/mmsm3'
};

//  const notes = `
//   Reservoir pressure was increased from 140 ksc to 160 ksc because no solution matched the test rates.
//   Wireline test (WT) date: July 7, 2024.
//  `;
function B12112() {
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

export default B12112
