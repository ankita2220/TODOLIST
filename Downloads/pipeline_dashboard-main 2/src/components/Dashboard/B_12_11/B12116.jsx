import React from 'react'

const trajectoryData = [
    {
        "MD": 18.87,
        "TVD": 18.87,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 95.7,
        "TVD": 95.7,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 113.87,
        "TVD": 113.87,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 127.05,
        "TVD": 127.05,
        "HD": 0,
        "Angle": 1.513868
    },
    {
        "MD": 155.7,
        "TVD": 155.69,
        "HD": 0.7569016,
        "Angle": 2.620876
    },
    {
        "MD": 184.38,
        "TVD": 184.34,
        "HD": 2.068351,
        "Angle": 3.996261
    },
    {
        "MD": 213.17,
        "TVD": 213.06,
        "HD": 4.074766,
        "Angle": 5.458329
    },
    {
        "MD": 241.84,
        "TVD": 241.6,
        "HD": 6.801907,
        "Angle": 6.425978
    },
    {
        "MD": 270.49,
        "TVD": 270.07,
        "HD": 10.0084,
        "Angle": 7.864006
    },
    {
        "MD": 299.2,
        "TVD": 298.51,
        "HD": 13.93657,
        "Angle": 9.698015
    },
    {
        "MD": 327.89,
        "TVD": 326.79,
        "HD": 18.76955,
        "Angle": 10.70874
    },
    {
        "MD": 356.6,
        "TVD": 355,
        "HD": 24.10434,
        "Angle": 10.49177
    },
    {
        "MD": 385.31,
        "TVD": 383.23,
        "HD": 29.33227,
        "Angle": 10.16482
    },
    {
        "MD": 413.98,
        "TVD": 411.45,
        "HD": 34.39196,
        "Angle": 10.101
    },
    {
        "MD": 452.69,
        "TVD": 449.56,
        "HD": 41.18107,
        "Angle": 10.60265
    },
    {
        "MD": 481.39,
        "TVD": 477.77,
        "HD": 46.46178,
        "Angle": 11.92893
    },
    {
        "MD": 510.1,
        "TVD": 505.86,
        "HD": 52.39608,
        "Angle": 14.01267
    },
    {
        "MD": 539,
        "TVD": 533.9,
        "HD": 59.39383,
        "Angle": 16.63602
    },
    {
        "MD": 567.43,
        "TVD": 561.14,
        "HD": 67.53307,
        "Angle": 19.09685
    },
    {
        "MD": 596.14,
        "TVD": 588.27,
        "HD": 76.92601,
        "Angle": 21.62485
    },
    {
        "MD": 624.84,
        "TVD": 614.95,
        "HD": 87.50275,
        "Angle": 24.04719
    },
    {
        "MD": 653.53,
        "TVD": 641.15,
        "HD": 99.19361,
        "Angle": 26.34246
    },
    {
        "MD": 682.42,
        "TVD": 667.04,
        "HD": 112.0131,
        "Angle": 29.09472
    },
    {
        "MD": 710.95,
        "TVD": 691.97,
        "HD": 125.886,
        "Angle": 31.52424
    },
    {
        "MD": 739.68,
        "TVD": 716.46,
        "HD": 140.9077,
        "Angle": 33.3578
    },
    {
        "MD": 768.33,
        "TVD": 740.39,
        "HD": 156.6614,
        "Angle": 35.42712
    },
    {
        "MD": 797.01,
        "TVD": 763.76,
        "HD": 173.2862,
        "Angle": 38.05437
    },
    {
        "MD": 825.8,
        "TVD": 786.43,
        "HD": 191.0326,
        "Angle": 40.4718
    },
    {
        "MD": 854.47,
        "TVD": 808.24,
        "HD": 209.6416,
        "Angle": 42.47926
    },
    {
        "MD": 883.12,
        "TVD": 829.37,
        "HD": 228.9896,
        "Angle": 44.60645
    },
    {
        "MD": 911.83,
        "TVD": 849.81,
        "HD": 249.1507,
        "Angle": 46.96322
    },
    {
        "MD": 940.52,
        "TVD": 869.39,
        "HD": 270.1207,
        "Angle": 48.93506
    },
    {
        "MD": 969.23,
        "TVD": 888.25,
        "HD": 291.767,
        "Angle": 50.60804
    },
    {
        "MD": 997.94,
        "TVD": 906.47,
        "HD": 313.9548,
        "Angle": 52.60872
    },
    {
        "MD": 1026.61,
        "TVD": 923.88,
        "HD": 336.7333,
        "Angle": 55.1501
    },
    {
        "MD": 1055.31,
        "TVD": 940.28,
        "HD": 360.286,
        "Angle": 57.74699
    },
    {
        "MD": 1083.98,
        "TVD": 955.58,
        "HD": 384.5322,
        "Angle": 59.41144
    },
    {
        "MD": 1112.73,
        "TVD": 970.21,
        "HD": 409.2815,
        "Angle": 59.90768
    },
    {
        "MD": 1141.41,
        "TVD": 984.59,
        "HD": 434.0959,
        "Angle": 59.81567
    },
    {
        "MD": 1170.15,
        "TVD": 999.04,
        "HD": 458.9391,
        "Angle": 59.89632
    },
    {
        "MD": 1198.88,
        "TVD": 1013.45,
        "HD": 483.794,
        "Angle": 60.1728
    },
    {
        "MD": 1227.57,
        "TVD": 1027.72,
        "HD": 508.6834,
        "Angle": 60.06904
    },
    {
        "MD": 1256.31,
        "TVD": 1042.06,
        "HD": 533.5903,
        "Angle": 59.90781
    },
    {
        "MD": 1285.03,
        "TVD": 1056.46,
        "HD": 558.4394,
        "Angle": 60
    },
    {
        "MD": 1313.75,
        "TVD": 1070.82,
        "HD": 583.3117,
        "Angle": 60.05771
    },
    {
        "MD": 1342.4,
        "TVD": 1085.12,
        "HD": 608.1377,
        "Angle": 59.86149
    },
    {
        "MD": 1371.08,
        "TVD": 1099.52,
        "HD": 632.9406,
        "Angle": 59.86159
    },
    {
        "MD": 1399.78,
        "TVD": 1113.93,
        "HD": 657.7608,
        "Angle": 60.10372
    },
    {
        "MD": 1428.47,
        "TVD": 1128.23,
        "HD": 682.633,
        "Angle": 60.19541
    },
    {
        "MD": 1457.22,
        "TVD": 1142.52,
        "HD": 707.5801,
        "Angle": 60.28763
    },
    {
        "MD": 1485.93,
        "TVD": 1156.75,
        "HD": 732.5154,
        "Angle": 60.21883
    },
    {
        "MD": 1514.62,
        "TVD": 1171,
        "HD": 757.4163,
        "Angle": 59.69966
    },
    {
        "MD": 1543.3,
        "TVD": 1185.47,
        "HD": 782.1784,
        "Angle": 59.67606
    },
    {
        "MD": 1571.94,
        "TVD": 1199.93,
        "HD": 806.9,
        "Angle": 59.76905
    },
    {
        "MD": 1600.62,
        "TVD": 1214.37,
        "HD": 831.6796,
        "Angle": 59.45659
    },
    {
        "MD": 1629.31,
        "TVD": 1228.95,
        "HD": 856.3887,
        "Angle": 59.387
    },
    {
        "MD": 1658,
        "TVD": 1243.56,
        "HD": 881.0801,
        "Angle": 59.69945
    },
    {
        "MD": 1686.66,
        "TVD": 1258.02,
        "HD": 905.8249,
        "Angle": 60.03461
    },
    {
        "MD": 1715.33,
        "TVD": 1272.34,
        "HD": 930.6625,
        "Angle": 59.96538
    },
    {
        "MD": 1744,
        "TVD": 1286.69,
        "HD": 955.4827,
        "Angle": 59.72318
    },
    {
        "MD": 1772.72,
        "TVD": 1301.17,
        "HD": 980.2853,
        "Angle": 59.65385
    },
    {
        "MD": 1801.44,
        "TVD": 1315.68,
        "HD": 1005.07,
        "Angle": 59.50296
    },
    {
        "MD": 1830.13,
        "TVD": 1330.24,
        "HD": 1029.791,
        "Angle": 59.57276
    },
    {
        "MD": 1858.84,
        "TVD": 1344.78,
        "HD": 1054.547,
        "Angle": 59.79231
    },
    {
        "MD": 1887.54,
        "TVD": 1359.22,
        "HD": 1079.35,
        "Angle": 59.82845
    },
    {
        "MD": 1916.49,
        "TVD": 1373.77,
        "HD": 1104.378,
        "Angle": 59.79217
    },
    {
        "MD": 1945.17,
        "TVD": 1388.2,
        "HD": 1129.163,
        "Angle": 59.81554
    },
    {
        "MD": 1973.89,
        "TVD": 1402.64,
        "HD": 1153.989,
        "Angle": 59.83839
    },
    {
        "MD": 2002.57,
        "TVD": 1417.05,
        "HD": 1178.786,
        "Angle": 59.8614
    },
    {
        "MD": 2031.23,
        "TVD": 1431.44,
        "HD": 1203.572,
        "Angle": 59.60733
    },
    {
        "MD": 2059.93,
        "TVD": 1445.96,
        "HD": 1228.328,
        "Angle": 59.49155
    },
    {
        "MD": 2088.63,
        "TVD": 1460.53,
        "HD": 1253.054,
        "Angle": 59.88475
    },
    {
        "MD": 2117.35,
        "TVD": 1474.94,
        "HD": 1277.898,
        "Angle": 60.03454
    },
    {
        "MD": 2146.08,
        "TVD": 1489.29,
        "HD": 1302.787,
        "Angle": 59.94351
    },
    {
        "MD": 2175.37,
        "TVD": 1503.96,
        "HD": 1328.139,
        "Angle": 59.86526
    },
    {
        "MD": 2204.85,
        "TVD": 1518.76,
        "HD": 1353.634,
        "Angle": 59.69966
    },
    {
        "MD": 2233.53,
        "TVD": 1533.23,
        "HD": 1378.396,
        "Angle": 59.93067
    },
    {
        "MD": 2262.17,
        "TVD": 1547.58,
        "HD": 1403.182,
        "Angle": 60.04606
    },
    {
        "MD": 2290.89,
        "TVD": 1561.92,
        "HD": 1428.066,
        "Angle": 59.61877
    },
    {
        "MD": 2319.58,
        "TVD": 1576.43,
        "HD": 1452.816,
        "Angle": 59.45697
    },
    {
        "MD": 2348.29,
        "TVD": 1591.02,
        "HD": 1477.543,
        "Angle": 59.76356
    },
    {
        "MD": 2366.5,
        "TVD": 1600.19,
        "HD": 1493.275,
        "Angle": 60.09285
    },
    {
        "MD": 2405.67,
        "TVD": 1619.72,
        "HD": 1527.229,
        "Angle": 59.90024
    },
    {
        "MD": 2432.21,
        "TVD": 1633.03,
        "HD": 1550.19,
        "Angle": 58.78356
    },
    {
        "MD": 2459.3,
        "TVD": 1647.07,
        "HD": 1573.358,
        "Angle": 57.54359
    },
    {
        "MD": 2489.58,
        "TVD": 1663.32,
        "HD": 1598.908,
        "Angle": 57.0223
    },
    {
        "MD": 2518.24,
        "TVD": 1678.92,
        "HD": 1622.951,
        "Angle": 57.0803
    },
    {
        "MD": 2547,
        "TVD": 1694.55,
        "HD": 1647.093,
        "Angle": 57.10669
    },
    {
        "MD": 2575.67,
        "TVD": 1710.12,
        "HD": 1671.167,
        "Angle": 56.76894
    },
    {
        "MD": 2604.41,
        "TVD": 1725.87,
        "HD": 1695.207,
        "Angle": 56.91183
    },
    {
        "MD": 2633.15,
        "TVD": 1741.56,
        "HD": 1719.286,
        "Angle": 57.30971
    },
    {
        "MD": 2661.83,
        "TVD": 1757.05,
        "HD": 1743.423,
        "Angle": 57.00695
    },
    {
        "MD": 2690.57,
        "TVD": 1772.7,
        "HD": 1767.528,
        "Angle": 56.7905
    },
    {
        "MD": 2719.29,
        "TVD": 1788.43,
        "HD": 1791.558,
        "Angle": 56.98105
    },
    {
        "MD": 2748.01,
        "TVD": 1804.08,
        "HD": 1815.639,
        "Angle": 57.23652
    },
    {
        "MD": 2776.67,
        "TVD": 1819.59,
        "HD": 1839.74,
        "Angle": 57.84147
    },
    {
        "MD": 2805.34,
        "TVD": 1834.85,
        "HD": 1864.011,
        "Angle": 58.65372
    },
    {
        "MD": 2834.04,
        "TVD": 1849.78,
        "HD": 1888.522,
        "Angle": 59.88467
    },
    {
        "MD": 2862.74,
        "TVD": 1864.18,
        "HD": 1913.348,
        "Angle": 60.64249
    },
    {
        "MD": 2891.48,
        "TVD": 1878.27,
        "HD": 1938.397,
        "Angle": 60.63171
    },
    {
        "MD": 2920.19,
        "TVD": 1892.35,
        "HD": 1963.417,
        "Angle": 60.90677
    },
    {
        "MD": 2948.88,
        "TVD": 1906.3,
        "HD": 1988.488,
        "Angle": 60.92962
    },
    {
        "MD": 2977.57,
        "TVD": 1920.24,
        "HD": 2013.563,
        "Angle": 60.70234
    },
    {
        "MD": 3006.2,
        "TVD": 1934.25,
        "HD": 2038.531,
        "Angle": 60.80415
    },
    {
        "MD": 3034.88,
        "TVD": 1948.24,
        "HD": 2063.568,
        "Angle": 60.74667
    },
    {
        "MD": 3063.57,
        "TVD": 1962.26,
        "HD": 2088.599,
        "Angle": 60.57465
    },
    {
        "MD": 3092.27,
        "TVD": 1976.36,
        "HD": 2113.596,
        "Angle": 60.86225
    },
    {
        "MD": 3120.92,
        "TVD": 1990.31,
        "HD": 2138.621,
        "Angle": 60.81588
    },
    {
        "MD": 3149.59,
        "TVD": 2004.29,
        "HD": 2163.651,
        "Angle": 60.63259
    },
    {
        "MD": 3178.26,
        "TVD": 2018.35,
        "HD": 2188.637,
        "Angle": 60.62005
    },
    {
        "MD": 3206.98,
        "TVD": 2032.44,
        "HD": 2213.663,
        "Angle": 60.50551
    },
    {
        "MD": 3235.7,
        "TVD": 2046.58,
        "HD": 2238.661,
        "Angle": 60.60923
    },
    {
        "MD": 3264.39,
        "TVD": 2060.66,
        "HD": 2263.659,
        "Angle": 60.81531
    },
    {
        "MD": 3293.08,
        "TVD": 2074.65,
        "HD": 2288.706,
        "Angle": 60.5855
    },
    {
        "MD": 3321.81,
        "TVD": 2088.76,
        "HD": 2313.733,
        "Angle": 60.51287
    },
    {
        "MD": 3350.76,
        "TVD": 2103.01,
        "HD": 2338.933,
        "Angle": 60.70136
    },
    {
        "MD": 3379.43,
        "TVD": 2117.04,
        "HD": 2363.935,
        "Angle": 60.57425
    },
    {
        "MD": 3408.15,
        "TVD": 2131.15,
        "HD": 2388.95,
        "Angle": 60.51751
    },
    {
        "MD": 3436.84,
        "TVD": 2145.27,
        "HD": 2413.925,
        "Angle": 60.73599
    },
    {
        "MD": 3465.5,
        "TVD": 2159.28,
        "HD": 2438.927,
        "Angle": 60.59757
    },
    {
        "MD": 3494.2,
        "TVD": 2173.37,
        "HD": 2463.931,
        "Angle": 60.55172
    },
    {
        "MD": 3522.9,
        "TVD": 2187.48,
        "HD": 2488.923,
        "Angle": 60.68871
    },
    {
        "MD": 3551.62,
        "TVD": 2201.54,
        "HD": 2513.966,
        "Angle": 60.5626
    },
    {
        "MD": 3580.35,
        "TVD": 2215.66,
        "HD": 2538.986,
        "Angle": 60.56417
    },
    {
        "MD": 3609,
        "TVD": 2229.74,
        "HD": 2563.938,
        "Angle": 60.65461
    },
    {
        "MD": 3637.71,
        "TVD": 2243.81,
        "HD": 2588.964,
        "Angle": 60.65008
    },
    {
        "MD": 3659.52,
        "TVD": 2254.5,
        "HD": 2607.974,
        "Angle": 60.66472
    },
    {
        "MD": 3669.44,
        "TVD": 2259.36,
        "HD": 2616.622,
        "Angle": 60.73865
    },
    {
        "MD": 3697.55,
        "TVD": 2273.1,
        "HD": 2641.145,
        "Angle": 60.7756
    },
    {
        "MD": 3727.29,
        "TVD": 2287.62,
        "HD": 2667.1,
        "Angle": 60.7506
    },
    {
        "MD": 3755.39,
        "TVD": 2301.35,
        "HD": 2691.617,
        "Angle": 60.77076
    },
    {
        "MD": 3783.18,
        "TVD": 2314.92,
        "HD": 2715.869,
        "Angle": 60.78158
    },
    {
        "MD": 3812.27,
        "TVD": 2329.12,
        "HD": 2741.258,
        "Angle": 60.78881
    },
    {
        "MD": 3841.51,
        "TVD": 2343.39,
        "HD": 2766.779,
        "Angle": 60.82445
    },
    {
        "MD": 3870.68,
        "TVD": 2357.61,
        "HD": 2792.248,
        "Angle": 60.79134
    },
    {
        "MD": 3899.41,
        "TVD": 2371.63,
        "HD": 2817.325,
        "Angle": 60.57133
    },
    {
        "MD": 3927.7,
        "TVD": 2385.53,
        "HD": 2841.965,
        "Angle": 60.47459
    },
    {
        "MD": 3956.21,
        "TVD": 2399.58,
        "HD": 2866.772,
        "Angle": 60.2667
    },
    {
        "MD": 3984.7,
        "TVD": 2413.71,
        "HD": 2891.512,
        "Angle": 59.88386
    },
    {
        "MD": 4013.2,
        "TVD": 2428.01,
        "HD": 2916.164,
        "Angle": 59.72661
    },
    {
        "MD": 4042.28,
        "TVD": 2442.67,
        "HD": 2941.279,
        "Angle": 59.71193
    },
    {
        "MD": 4071.03,
        "TVD": 2457.17,
        "HD": 2966.104,
        "Angle": 59.75483
    },
    {
        "MD": 4099.4,
        "TVD": 2471.46,
        "HD": 2990.613,
        "Angle": 59.74021
    },
    {
        "MD": 4114.7,
        "TVD": 2479.17,
        "HD": 3003.828,
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
    OD: 30,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '20"',
    fromMD: 0,
    toMD: 434.7,
    ID: 18.73,
    OD: 20,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '13 3/8"',
    fromMD: 0,
    toMD: 2184.7,
    ID: 12.347,
    OD: 13.375,
    roughness: 0.001
  },
  {
    section: "Casing",
    size: '9 5/8"',
    fromMD: 0,
    toMD: 3668.7,
    ID: 8.681,
    OD: 9.625,
    roughness: 0.001
  },
  {
    section: "Liner",
    size: '7"',
    fromMD: 3515.7,
    toMD: 4116.7,
    ID: 6.184,
    OD: 7,
    roughness: 0.001
  }
];

const tubingData = [
  {
    toMD: 4038.7,
    ID: 3.958,
    OD: 4.5,
    roughness: 0.001
  }
];

const equipmentData = [
  {
    name: 'SSSV 5',
    type: 'SSSV',
    MD: 157.77
  },
  {
    name: 'Packer',
    type: 'Pk',
    MD: 4019.94
  },
  {
    name: 'NA 4',
    type: 'NA',
    MD: 4047.2
  }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 4047.2,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 158.9668, // raised from 126 ksc as no solution found at that lower pressure
  temperature: 107,
  c: 6.13e-6,
  n: 0.8,
  OGR: '160 sm3/mmsm3',
  WGR: '19 sm3/mmsm3'
};

// const notes = `
//   No solution existed at reservoir pressure of 126 ksc, so it was increased to 160 ksc.
//   Well test: July 7, 2024.
// `;

function B12116() {
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

export default B12116
