import React from 'react'


const trajectoryData = [
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 46.53,
        "TVD": 46.53,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 100.87,
        "TVD": 100.87,
        "HD": 0,
        "Angle": 1.472312
    },
    {
        "MD": 131.16,
        "TVD": 131.15,
        "HD": 0.7782673,
        "Angle": 0
    },
    {
        "MD": 159.26,
        "TVD": 159.25,
        "HD": 0.7782673,
        "Angle": 2.591667
    },
    {
        "MD": 188.59,
        "TVD": 188.55,
        "HD": 2.104503,
        "Angle": 5.437491
    },
    {
        "MD": 217.48,
        "TVD": 217.31,
        "HD": 4.842111,
        "Angle": 8.244561
    },
    {
        "MD": 245.54,
        "TVD": 245.08,
        "HD": 8.865878,
        "Angle": 10.34912
    },
    {
        "MD": 274.43,
        "TVD": 273.5,
        "HD": 14.05584,
        "Angle": 11.82136
    },
    {
        "MD": 302.72,
        "TVD": 301.19,
        "HD": 19.85135,
        "Angle": 13.20188
    },
    {
        "MD": 330.72,
        "TVD": 328.45,
        "HD": 26.24607,
        "Angle": 14.72147
    },
    {
        "MD": 359.05,
        "TVD": 355.85,
        "HD": 33.4453,
        "Angle": 15.98208
    },
    {
        "MD": 369.14,
        "TVD": 365.55,
        "HD": 36.22345,
        "Angle": 16.55394
    },
    {
        "MD": 388.2,
        "TVD": 383.82,
        "HD": 41.65398,
        "Angle": 17.8817
    },
    {
        "MD": 416.56,
        "TVD": 410.81,
        "HD": 50.362,
        "Angle": 20.36413
    },
    {
        "MD": 444.88,
        "TVD": 437.36,
        "HD": 60.21694,
        "Angle": 22.59967
    },
    {
        "MD": 473.27,
        "TVD": 463.57,
        "HD": 71.12693,
        "Angle": 24.57128
    },
    {
        "MD": 501.54,
        "TVD": 489.28,
        "HD": 82.88231,
        "Angle": 26.63704
    },
    {
        "MD": 529.9,
        "TVD": 514.63,
        "HD": 95.59714,
        "Angle": 28.85544
    },
    {
        "MD": 558.17,
        "TVD": 539.39,
        "HD": 109.2403,
        "Angle": 31.4377
    },
    {
        "MD": 586.85,
        "TVD": 563.86,
        "HD": 124.1989,
        "Angle": 33.96866
    },
    {
        "MD": 616.09,
        "TVD": 588.11,
        "HD": 140.5365,
        "Angle": 36.40646
    },
    {
        "MD": 644.68,
        "TVD": 611.12,
        "HD": 157.5049,
        "Angle": 38.77862
    },
    {
        "MD": 673.17,
        "TVD": 633.33,
        "HD": 175.3486,
        "Angle": 41.04932
    },
    {
        "MD": 701.52,
        "TVD": 654.71,
        "HD": 193.9663,
        "Angle": 43.25395
    },
    {
        "MD": 729.2,
        "TVD": 674.87,
        "HD": 212.9335,
        "Angle": 44.90396
    },
    {
        "MD": 758.75,
        "TVD": 695.8,
        "HD": 233.7935,
        "Angle": 45.7451
    },
    {
        "MD": 787.61,
        "TVD": 715.94,
        "HD": 254.4642,
        "Angle": 45.79621
    },
    {
        "MD": 816.31,
        "TVD": 735.95,
        "HD": 275.0382,
        "Angle": 45.65466
    },
    {
        "MD": 844.78,
        "TVD": 755.85,
        "HD": 295.3983,
        "Angle": 45.60681
    },
    {
        "MD": 873.24,
        "TVD": 775.76,
        "HD": 315.7345,
        "Angle": 45.53008
    },
    {
        "MD": 901.29,
        "TVD": 795.41,
        "HD": 335.7515,
        "Angle": 45.40868
    },
    {
        "MD": 929.65,
        "TVD": 815.32,
        "HD": 355.9476,
        "Angle": 45.43157
    },
    {
        "MD": 958.05,
        "TVD": 835.25,
        "HD": 376.1801,
        "Angle": 45.47456
    },
    {
        "MD": 986.6,
        "TVD": 855.27,
        "HD": 396.5345,
        "Angle": 45.51647
    },
    {
        "MD": 1015,
        "TVD": 875.17,
        "HD": 416.7966,
        "Angle": 45.48678
    },
    {
        "MD": 1043.87,
        "TVD": 895.41,
        "HD": 437.3834,
        "Angle": 45.31819
    },
    {
        "MD": 1072.27,
        "TVD": 915.38,
        "HD": 457.5765,
        "Angle": 45.27198
    },
    {
        "MD": 1101.13,
        "TVD": 935.69,
        "HD": 478.0802,
        "Angle": 45.29037
    },
    {
        "MD": 1130.44,
        "TVD": 956.31,
        "HD": 498.9103,
        "Angle": 45.3535
    },
    {
        "MD": 1159.37,
        "TVD": 976.64,
        "HD": 519.4927,
        "Angle": 45.34348
    },
    {
        "MD": 1187.74,
        "TVD": 996.58,
        "HD": 539.6732,
        "Angle": 45.40498
    },
    {
        "MD": 1216.91,
        "TVD": 1017.06,
        "HD": 560.4448,
        "Angle": 45.40791
    },
    {
        "MD": 1246.11,
        "TVD": 1037.56,
        "HD": 581.2388,
        "Angle": 45.3697
    },
    {
        "MD": 1275.76,
        "TVD": 1058.39,
        "HD": 602.3394,
        "Angle": 45.35197
    },
    {
        "MD": 1304.49,
        "TVD": 1078.58,
        "HD": 622.7789,
        "Angle": 45.34978
    },
    {
        "MD": 1333.66,
        "TVD": 1099.08,
        "HD": 643.5308,
        "Angle": 45.28328
    },
    {
        "MD": 1362.81,
        "TVD": 1119.59,
        "HD": 664.2446,
        "Angle": 45.02817
    },
    {
        "MD": 1391.66,
        "TVD": 1139.98,
        "HD": 684.6547,
        "Angle": 44.72659
    },
    {
        "MD": 1421.26,
        "TVD": 1161.01,
        "HD": 705.4849,
        "Angle": 44.66265
    },
    {
        "MD": 1450.04,
        "TVD": 1181.48,
        "HD": 725.7153,
        "Angle": 44.76704
    },
    {
        "MD": 1479.21,
        "TVD": 1202.19,
        "HD": 746.2575,
        "Angle": 44.76508
    },
    {
        "MD": 1507.21,
        "TVD": 1222.07,
        "HD": 765.9752,
        "Angle": 44.74802
    },
    {
        "MD": 1536.3,
        "TVD": 1242.73,
        "HD": 786.4543,
        "Angle": 44.76729
    },
    {
        "MD": 1565.78,
        "TVD": 1263.66,
        "HD": 807.2149,
        "Angle": 44.82537
    },
    {
        "MD": 1595.05,
        "TVD": 1284.42,
        "HD": 827.8488,
        "Angle": 44.82574
    },
    {
        "MD": 1624.01,
        "TVD": 1304.96,
        "HD": 848.2642,
        "Angle": 44.84961
    },
    {
        "MD": 1653.25,
        "TVD": 1325.69,
        "HD": 868.8857,
        "Angle": 44.7692
    },
    {
        "MD": 1682.9,
        "TVD": 1346.74,
        "HD": 889.7668,
        "Angle": 44.77513
    },
    {
        "MD": 1697.48,
        "TVD": 1357.09,
        "HD": 900.0358,
        "Angle": 44.76403
    },
    {
        "MD": 1712.86,
        "TVD": 1368.01,
        "HD": 910.8663,
        "Angle": 44.85398
    },
    {
        "MD": 1740.48,
        "TVD": 1387.59,
        "HD": 930.3467,
        "Angle": 44.87668
    },
    {
        "MD": 1770.27,
        "TVD": 1408.7,
        "HD": 951.366,
        "Angle": 44.90868
    },
    {
        "MD": 1799.3,
        "TVD": 1429.26,
        "HD": 971.8606,
        "Angle": 44.85982
    },
    {
        "MD": 1828.39,
        "TVD": 1449.88,
        "HD": 992.3799,
        "Angle": 44.8154
    },
    {
        "MD": 1857.81,
        "TVD": 1470.75,
        "HD": 1013.116,
        "Angle": 44.81448
    },
    {
        "MD": 1886.13,
        "TVD": 1490.84,
        "HD": 1033.076,
        "Angle": 44.6503
    },
    {
        "MD": 1915.93,
        "TVD": 1512.04,
        "HD": 1054.019,
        "Angle": 44.25627
    },
    {
        "MD": 1944.65,
        "TVD": 1532.61,
        "HD": 1074.062,
        "Angle": 43.7883
    },
    {
        "MD": 1974.1,
        "TVD": 1553.87,
        "HD": 1094.441,
        "Angle": 43.42373
    },
    {
        "MD": 2002.78,
        "TVD": 1574.7,
        "HD": 1114.155,
        "Angle": 43.14561
    },
    {
        "MD": 2031.85,
        "TVD": 1595.91,
        "HD": 1134.035,
        "Angle": 42.66707
    },
    {
        "MD": 2060.94,
        "TVD": 1617.3,
        "HD": 1153.75,
        "Angle": 41.80184
    },
    {
        "MD": 2090.09,
        "TVD": 1639.03,
        "HD": 1173.181,
        "Angle": 41.02034
    },
    {
        "MD": 2119.13,
        "TVD": 1660.94,
        "HD": 1192.24,
        "Angle": 40.14431
    },
    {
        "MD": 2148.25,
        "TVD": 1683.2,
        "HD": 1211.014,
        "Angle": 39.11621
    },
    {
        "MD": 2177.34,
        "TVD": 1705.77,
        "HD": 1229.367,
        "Angle": 38.29044
    },
    {
        "MD": 2206.44,
        "TVD": 1728.61,
        "HD": 1247.399,
        "Angle": 37.77549
    },
    {
        "MD": 2235.45,
        "TVD": 1751.54,
        "HD": 1265.169,
        "Angle": 37.26257
    },
    {
        "MD": 2264.5,
        "TVD": 1774.66,
        "HD": 1282.758,
        "Angle": 36.90237
    },
    {
        "MD": 2293.9,
        "TVD": 1798.17,
        "HD": 1300.412,
        "Angle": 36.86326
    },
    {
        "MD": 2322.66,
        "TVD": 1821.18,
        "HD": 1317.665,
        "Angle": 36.91522
    },
    {
        "MD": 2352.14,
        "TVD": 1844.75,
        "HD": 1335.372,
        "Angle": 37.05153
    },
    {
        "MD": 2380.47,
        "TVD": 1867.36,
        "HD": 1352.441,
        "Angle": 37.15041
    },
    {
        "MD": 2410.33,
        "TVD": 1891.16,
        "HD": 1370.474,
        "Angle": 37.28659
    },
    {
        "MD": 2438.61,
        "TVD": 1913.66,
        "HD": 1387.606,
        "Angle": 37.34632
    },
    {
        "MD": 2468.51,
        "TVD": 1937.43,
        "HD": 1405.745,
        "Angle": 37.40763
    },
    {
        "MD": 2497.1,
        "TVD": 1960.14,
        "HD": 1423.112,
        "Angle": 37.43182
    },
    {
        "MD": 2526.14,
        "TVD": 1983.2,
        "HD": 1440.763,
        "Angle": 37.35187
    },
    {
        "MD": 2555.3,
        "TVD": 2006.38,
        "HD": 1458.455,
        "Angle": 37.28634
    },
    {
        "MD": 2584.51,
        "TVD": 2029.62,
        "HD": 1476.15,
        "Angle": 37.28776
    },
    {
        "MD": 2613.62,
        "TVD": 2052.78,
        "HD": 1493.786,
        "Angle": 37.32178
    },
    {
        "MD": 2642.63,
        "TVD": 2075.85,
        "HD": 1511.374,
        "Angle": 37.40512
    },
    {
        "MD": 2671.71,
        "TVD": 2098.95,
        "HD": 1529.039,
        "Angle": 37.39132
    },
    {
        "MD": 2701.2,
        "TVD": 2122.38,
        "HD": 1546.947,
        "Angle": 37.33322
    },
    {
        "MD": 2729.9,
        "TVD": 2145.2,
        "HD": 1564.352,
        "Angle": 37.39845
    },
    {
        "MD": 2758.99,
        "TVD": 2168.31,
        "HD": 1582.02,
        "Angle": 37.19625
    },
    {
        "MD": 2788.14,
        "TVD": 2191.53,
        "HD": 1599.642,
        "Angle": 36.92994
    },
    {
        "MD": 2816.75,
        "TVD": 2214.4,
        "HD": 1616.832,
        "Angle": 36.87646
    },
    {
        "MD": 2845.84,
        "TVD": 2237.67,
        "HD": 1634.289,
        "Angle": 36.86334
    },
    {
        "MD": 2874.95,
        "TVD": 2260.96,
        "HD": 1651.752,
        "Angle": 36.73798
    },
    {
        "MD": 2903.95,
        "TVD": 2284.2,
        "HD": 1669.099,
        "Angle": 36.96925
    },
    {
        "MD": 2932.75,
        "TVD": 2307.21,
        "HD": 1686.419,
        "Angle": 37.27727
    },
    {
        "MD": 2961.68,
        "TVD": 2330.23,
        "HD": 1703.941,
        "Angle": 37.19184
    },
    {
        "MD": 2990.64,
        "TVD": 2353.3,
        "HD": 1721.447,
        "Angle": 0
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
        "TVD": 2525,
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
        "Angle": 0
    }
];

const casingData = [
  { section: "Casing", size: '30"',        fromMD: 0,       toMD: 116.38,   ID: 28,     OD: 30,    roughness: 0.001 },
  { section: "Casing", size: '20"',        fromMD: 0,       toMD: 384.38,   ID: 18.73,  OD: 20,    roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',    fromMD: 0,       toMD: 1711.38,  ID: 12.347, OD: 13.375,roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',     fromMD: 0,       toMD: 3010.38,  ID: 8.681,  OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',        fromMD: 3010.38, toMD: 3311.418,ID: 6.184,  OD: 7,     roughness: 0.001 }
];

const tubingData = [
  { toMD: 3020.5, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'Choke LN',         type: 'Choke', MD: 0,       enabled: true },
  { name: 'SSSV 2',          type: 'SSSV',  MD: 155.59, enabled: true },
  { name: 'Packer 2',        type: 'Pk 2',  MD: 2693.55, enabled: true },
  { name: 'Sleeve 1',        type: 'Sliding sleeve', MD: 3579.442, enabled: false },
  { name: 'NA',              type: 'NA',    MD: 3607.81, enabled: true }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3607.81,
  type: 'Perforation',
  iprModel: 'Back pressure',
  // Note: pressure, temp, and c values were not provided
  resPressure: null,
  temperature: null,
  c: null,
  n: 0.8,
  OGR: '',  // no gas ratio given
  WGR: '' ,  // no water ratio given
  soilTempC: 30,
  chokeGasCoef: 0.85,
  WTDate: "2020-08-10" 
};

// const meta = {
//   soilTempC: 30,
//   chokeGasCoef: 0.85,
//   WTDate: "2020-08-10"
// };

// const notes = `
//   • Well test performed on August 10, 2020  
//   • Choke gas coefficient: 0.85  
//   • A few reservoir parameters (pressure, temperature, c, OGR, WGR) were not specified in the test record.
// `;

function C24P43() {
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

export default C24P43
