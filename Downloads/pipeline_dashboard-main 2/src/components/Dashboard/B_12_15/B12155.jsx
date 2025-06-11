import React from 'react'



const trajectoryData = [
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 19.68,
        "TVD": 19.68,
        "HD": 0,
        "Angle": 0.7900111
    },
    {
        "MD": 124.88,
        "TVD": 124.87,
        "HD": 1.450483,
        "Angle": 1.664481
    },
    {
        "MD": 148.58,
        "TVD": 148.56,
        "HD": 2.138887,
        "Angle": 1.402088
    },
    {
        "MD": 181.98,
        "TVD": 181.95,
        "HD": 2.956138,
        "Angle": 3.388464
    },
    {
        "MD": 210.58,
        "TVD": 210.5,
        "HD": 4.646552,
        "Angle": 4.801117
    },
    {
        "MD": 239.08,
        "TVD": 238.9,
        "HD": 7.031924,
        "Angle": 6.431598
    },
    {
        "MD": 267.68,
        "TVD": 267.32,
        "HD": 10.23561,
        "Angle": 8.292191
    },
    {
        "MD": 289.68,
        "TVD": 289.09,
        "HD": 13.40848,
        "Angle": 10.36051
    },
    {
        "MD": 291.52,
        "TVD": 290.9,
        "HD": 13.73939,
        "Angle": 8.099786
    },
    {
        "MD": 324.6,
        "TVD": 323.65,
        "HD": 18.40028,
        "Angle": 8.008545
    },
    {
        "MD": 353.31,
        "TVD": 352.08,
        "HD": 22.40018,
        "Angle": 9.464584
    },
    {
        "MD": 381.96,
        "TVD": 380.34,
        "HD": 27.11132,
        "Angle": 10.82128
    },
    {
        "MD": 410.64,
        "TVD": 408.51,
        "HD": 32.49589,
        "Angle": 12.55754
    },
    {
        "MD": 440.32,
        "TVD": 437.48,
        "HD": 38.94891,
        "Angle": 14.482
    },
    {
        "MD": 468.96,
        "TVD": 465.21,
        "HD": 46.11108,
        "Angle": 16.05498
    },
    {
        "MD": 496.65,
        "TVD": 491.82,
        "HD": 53.76902,
        "Angle": 18.07477
    },
    {
        "MD": 538.8,
        "TVD": 531.89,
        "HD": 66.84639,
        "Angle": 20.22744
    },
    {
        "MD": 567.5,
        "TVD": 558.82,
        "HD": 76.76934,
        "Angle": 22.20921
    },
    {
        "MD": 596.21,
        "TVD": 585.4,
        "HD": 87.62143,
        "Angle": 23.93206
    },
    {
        "MD": 624.94,
        "TVD": 611.66,
        "HD": 99.27584,
        "Angle": 25.5296
    },
    {
        "MD": 653.72,
        "TVD": 637.63,
        "HD": 111.6794,
        "Angle": 27.34819
    },
    {
        "MD": 682.44,
        "TVD": 663.14,
        "HD": 124.8732,
        "Angle": 29.22359
    },
    {
        "MD": 712.06,
        "TVD": 688.99,
        "HD": 139.3343,
        "Angle": 30.98549
    },
    {
        "MD": 739.74,
        "TVD": 712.72,
        "HD": 153.5845,
        "Angle": 32.62341
    },
    {
        "MD": 768.77,
        "TVD": 737.17,
        "HD": 169.235,
        "Angle": 34.42898
    },
    {
        "MD": 797.77,
        "TVD": 761.09,
        "HD": 185.6312,
        "Angle": 36.17018
    },
    {
        "MD": 825.84,
        "TVD": 783.75,
        "HD": 202.1977,
        "Angle": 37.61619
    },
    {
        "MD": 854.51,
        "TVD": 806.46,
        "HD": 219.697,
        "Angle": 39.18548
    },
    {
        "MD": 883.19,
        "TVD": 828.69,
        "HD": 237.8179,
        "Angle": 40.99439
    },
    {
        "MD": 913.04,
        "TVD": 851.22,
        "HD": 257.3991,
        "Angle": 42.69677
    },
    {
        "MD": 940.62,
        "TVD": 871.49,
        "HD": 276.1016,
        "Angle": 44.28485
    },
    {
        "MD": 969.34,
        "TVD": 892.05,
        "HD": 296.1547,
        "Angle": 45.89905
    },
    {
        "MD": 998.05,
        "TVD": 912.03,
        "HD": 316.7717,
        "Angle": 47.51677
    },
    {
        "MD": 1026.76,
        "TVD": 931.42,
        "HD": 337.9446,
        "Angle": 49.15797
    },
    {
        "MD": 1056.44,
        "TVD": 950.83,
        "HD": 360.398,
        "Angle": 50.73204
    },
    {
        "MD": 1084.12,
        "TVD": 968.35,
        "HD": 381.8277,
        "Angle": 52.07071
    },
    {
        "MD": 1112.85,
        "TVD": 986.01,
        "HD": 404.4891,
        "Angle": 53.61834
    },
    {
        "MD": 1141.51,
        "TVD": 1003.01,
        "HD": 427.5628,
        "Angle": 55.3864
    },
    {
        "MD": 1170.17,
        "TVD": 1019.29,
        "HD": 451.15,
        "Angle": 57.1434
    },
    {
        "MD": 1198.85,
        "TVD": 1034.85,
        "HD": 475.2421,
        "Angle": 58.95566
    },
    {
        "MD": 1227.51,
        "TVD": 1049.63,
        "HD": 499.7971,
        "Angle": 59.81541
    },
    {
        "MD": 1256.21,
        "TVD": 1064.06,
        "HD": 524.6056,
        "Angle": 59.79246
    },
    {
        "MD": 1284.93,
        "TVD": 1078.51,
        "HD": 549.4257,
        "Angle": 59.74628
    },
    {
        "MD": 1313.65,
        "TVD": 1092.98,
        "HD": 574.2341,
        "Angle": 59.71113
    },
    {
        "MD": 1342.32,
        "TVD": 1107.44,
        "HD": 598.9905,
        "Angle": 59.87318
    },
    {
        "MD": 1371.03,
        "TVD": 1121.85,
        "HD": 623.8222,
        "Angle": 59.95346
    },
    {
        "MD": 1399.47,
        "TVD": 1136.09,
        "HD": 648.4404,
        "Angle": 59.88459
    },
    {
        "MD": 1428.15,
        "TVD": 1150.48,
        "HD": 673.2491,
        "Angle": 59.71133
    },
    {
        "MD": 1456.84,
        "TVD": 1164.95,
        "HD": 698.0228,
        "Angle": 59.67674
    },
    {
        "MD": 1485.54,
        "TVD": 1179.44,
        "HD": 722.7964,
        "Angle": 59.75774
    },
    {
        "MD": 1514.25,
        "TVD": 1193.9,
        "HD": 747.599,
        "Angle": 59.83817
    },
    {
        "MD": 1542.89,
        "TVD": 1208.29,
        "HD": 772.3615,
        "Angle": 59.88483
    },
    {
        "MD": 1571.63,
        "TVD": 1222.71,
        "HD": 797.2221,
        "Angle": 59.8269
    },
    {
        "MD": 1600.32,
        "TVD": 1237.13,
        "HD": 822.0249,
        "Angle": 59.82714
    },
    {
        "MD": 1629.05,
        "TVD": 1251.57,
        "HD": 846.8624,
        "Angle": 59.88451
    },
    {
        "MD": 1657.71,
        "TVD": 1265.95,
        "HD": 871.6537,
        "Angle": 59.84979
    },
    {
        "MD": 1686.36,
        "TVD": 1280.34,
        "HD": 896.4277,
        "Angle": 59.80366
    },
    {
        "MD": 1715.03,
        "TVD": 1294.76,
        "HD": 921.2074,
        "Angle": 59.76905
    },
    {
        "MD": 1743.71,
        "TVD": 1309.2,
        "HD": 945.987,
        "Angle": 59.89632
    },
    {
        "MD": 1772.44,
        "TVD": 1323.61,
        "HD": 970.8419,
        "Angle": 59.95376
    },
    {
        "MD": 1801.06,
        "TVD": 1337.94,
        "HD": 995.616,
        "Angle": 59.93415
    },
    {
        "MD": 1821.16,
        "TVD": 1348.01,
        "HD": 1013.012,
        "Angle": 59.92454
    },
    {
        "MD": 1860.63,
        "TVD": 1367.79,
        "HD": 1047.168,
        "Angle": 59.63073
    },
    {
        "MD": 1889.35,
        "TVD": 1382.31,
        "HD": 1071.947,
        "Angle": 59.52646
    },
    {
        "MD": 1918.06,
        "TVD": 1396.87,
        "HD": 1096.691,
        "Angle": 59.54961
    },
    {
        "MD": 1946.77,
        "TVD": 1411.42,
        "HD": 1121.441,
        "Angle": 59.67652
    },
    {
        "MD": 1975.45,
        "TVD": 1425.9,
        "HD": 1146.197,
        "Angle": 59.90762
    },
    {
        "MD": 2004.11,
        "TVD": 1440.27,
        "HD": 1170.994,
        "Angle": 59.81515
    },
    {
        "MD": 2032.77,
        "TVD": 1454.68,
        "HD": 1195.768,
        "Angle": 59.79231
    },
    {
        "MD": 2061.47,
        "TVD": 1469.12,
        "HD": 1220.571,
        "Angle": 59.98847
    },
    {
        "MD": 2090.16,
        "TVD": 1483.47,
        "HD": 1245.414,
        "Angle": 59.75706
    },
    {
        "MD": 2118.79,
        "TVD": 1497.89,
        "HD": 1270.148,
        "Angle": 59.80366
    },
    {
        "MD": 2147.46,
        "TVD": 1512.31,
        "HD": 1294.927,
        "Angle": 59.87309
    },
    {
        "MD": 2176.15,
        "TVD": 1526.71,
        "HD": 1319.742,
        "Angle": 59.80393
    },
    {
        "MD": 2204.86,
        "TVD": 1541.15,
        "HD": 1344.556,
        "Angle": 59.873
    },
    {
        "MD": 2233.53,
        "TVD": 1555.54,
        "HD": 1369.353,
        "Angle": 59.45697
    },
    {
        "MD": 2262.24,
        "TVD": 1570.13,
        "HD": 1394.08,
        "Angle": 59.29414
    },
    {
        "MD": 2290.93,
        "TVD": 1584.78,
        "HD": 1418.747,
        "Angle": 59.75774
    },
    {
        "MD": 2319.64,
        "TVD": 1599.24,
        "HD": 1443.55,
        "Angle": 59.74592
    },
    {
        "MD": 2348.32,
        "TVD": 1613.69,
        "HD": 1468.324,
        "Angle": 59.53788
    },
    {
        "MD": 2377.02,
        "TVD": 1628.24,
        "HD": 1493.062,
        "Angle": 59.68841
    },
    {
        "MD": 2405.73,
        "TVD": 1642.73,
        "HD": 1517.847,
        "Angle": 59.71173
    },
    {
        "MD": 2434.46,
        "TVD": 1657.22,
        "HD": 1542.656,
        "Angle": 59.64192
    },
    {
        "MD": 2463.15,
        "TVD": 1671.72,
        "HD": 1567.412,
        "Angle": 59.69966
    },
    {
        "MD": 2491.83,
        "TVD": 1686.19,
        "HD": 1592.174,
        "Angle": 59.9654
    },
    {
        "MD": 2520.52,
        "TVD": 1700.55,
        "HD": 1617.011,
        "Angle": 60.01153
    },
    {
        "MD": 2549.21,
        "TVD": 1714.89,
        "HD": 1641.861,
        "Angle": 59.6882
    },
    {
        "MD": 2577.9,
        "TVD": 1729.37,
        "HD": 1666.628,
        "Angle": 59.64192
    },
    {
        "MD": 2606.59,
        "TVD": 1743.87,
        "HD": 1691.385,
        "Angle": 59.74592
    },
    {
        "MD": 2635.27,
        "TVD": 1758.32,
        "HD": 1716.158,
        "Angle": 59.73556
    },
    {
        "MD": 2664.08,
        "TVD": 1772.84,
        "HD": 1741.042,
        "Angle": 59.73445
    },
    {
        "MD": 2692.77,
        "TVD": 1787.3,
        "HD": 1765.821,
        "Angle": 59.75757
    },
    {
        "MD": 2721.46,
        "TVD": 1801.75,
        "HD": 1790.607,
        "Angle": 59.5839
    },
    {
        "MD": 2750.14,
        "TVD": 1816.27,
        "HD": 1815.339,
        "Angle": 59.72241
    },
    {
        "MD": 2778.78,
        "TVD": 1830.71,
        "HD": 1840.073,
        "Angle": 59.88467
    },
    {
        "MD": 2807.48,
        "TVD": 1845.11,
        "HD": 1864.899,
        "Angle": 59.79231
    },
    {
        "MD": 2836.18,
        "TVD": 1859.55,
        "HD": 1889.701,
        "Angle": 59.82714
    },
    {
        "MD": 2864.91,
        "TVD": 1873.99,
        "HD": 1914.539,
        "Angle": 59.78007
    },
    {
        "MD": 2893.52,
        "TVD": 1888.39,
        "HD": 1939.261,
        "Angle": 59.66553
    },
    {
        "MD": 2922.25,
        "TVD": 1902.9,
        "HD": 1964.057,
        "Angle": 59.79246
    },
    {
        "MD": 2950.97,
        "TVD": 1917.35,
        "HD": 1988.878,
        "Angle": 59.7574
    },
    {
        "MD": 2979.64,
        "TVD": 1931.79,
        "HD": 2013.646,
        "Angle": 59.71113
    },
    {
        "MD": 3008.31,
        "TVD": 1946.25,
        "HD": 2038.402,
        "Angle": 59.70029
    },
    {
        "MD": 3037.05,
        "TVD": 1960.75,
        "HD": 2063.216,
        "Angle": 59.46688
    },
    {
        "MD": 3065.67,
        "TVD": 1975.29,
        "HD": 2087.867,
        "Angle": 59.44402
    },
    {
        "MD": 3094.31,
        "TVD": 1989.85,
        "HD": 2112.53,
        "Angle": 59.79231
    },
    {
        "MD": 3123.01,
        "TVD": 2004.29,
        "HD": 2137.333,
        "Angle": 59.98846
    },
    {
        "MD": 3151.68,
        "TVD": 2018.63,
        "HD": 2162.159,
        "Angle": 59.66506
    },
    {
        "MD": 3180.37,
        "TVD": 2033.12,
        "HD": 2186.921,
        "Angle": 59.66553
    },
    {
        "MD": 3209.1,
        "TVD": 2047.63,
        "HD": 2211.718,
        "Angle": 59.8502
    },
    {
        "MD": 3237.83,
        "TVD": 2062.06,
        "HD": 2236.561,
        "Angle": 59.74646
    },
    {
        "MD": 3266.57,
        "TVD": 2076.54,
        "HD": 2261.387,
        "Angle": 59.58419
    },
    {
        "MD": 3295.27,
        "TVD": 2091.07,
        "HD": 2286.137,
        "Angle": 59.63048
    },
    {
        "MD": 3323.97,
        "TVD": 2105.58,
        "HD": 2310.899,
        "Angle": 59.89625
    },
    {
        "MD": 3352.68,
        "TVD": 2119.98,
        "HD": 2335.736,
        "Angle": 60.05771
    },
    {
        "MD": 3381.33,
        "TVD": 2134.28,
        "HD": 2360.562,
        "Angle": 59.94225
    },
    {
        "MD": 3409.98,
        "TVD": 2148.63,
        "HD": 2385.359,
        "Angle": 59.78053
    },
    {
        "MD": 3438.65,
        "TVD": 2163.06,
        "HD": 2410.133,
        "Angle": 59.81502
    },
    {
        "MD": 3467.29,
        "TVD": 2177.46,
        "HD": 2434.89,
        "Angle": 59.8385
    },
    {
        "MD": 3495.99,
        "TVD": 2191.88,
        "HD": 2459.704,
        "Angle": 59.873
    },
    {
        "MD": 3524.66,
        "TVD": 2206.27,
        "HD": 2484.501,
        "Angle": 59.66506
    },
    {
        "MD": 3553.35,
        "TVD": 2220.76,
        "HD": 2509.263,
        "Angle": 59.30889
    },
    {
        "MD": 3582.17,
        "TVD": 2235.47,
        "HD": 2534.047,
        "Angle": 59.44402
    },
    {
        "MD": 3610.81,
        "TVD": 2250.03,
        "HD": 2558.709,
        "Angle": 59.59562
    },
    {
        "MD": 3639.5,
        "TVD": 2264.55,
        "HD": 2583.454,
        "Angle": 59.64733
    },
    {
        "MD": 3666.75,
        "TVD": 2278.32,
        "HD": 2606.969,
        "Angle": 59.62685
    },
    {
        "MD": 3676.52,
        "TVD": 2283.26,
        "HD": 2615.398,
        "Angle": 59.64443
    },
    {
        "MD": 3685.84,
        "TVD": 2287.97,
        "HD": 2623.44,
        "Angle": 59.69987
    },
    {
        "MD": 3714.54,
        "TVD": 2302.45,
        "HD": 2648.22,
        "Angle": 59.48014
    },
    {
        "MD": 3743.25,
        "TVD": 2317.03,
        "HD": 2672.952,
        "Angle": 58.78006
    },
    {
        "MD": 3771.9,
        "TVD": 2331.88,
        "HD": 2697.453,
        "Angle": 58.12298
    },
    {
        "MD": 3800.55,
        "TVD": 2347.01,
        "HD": 2721.782,
        "Angle": 57.983
    },
    {
        "MD": 3829.22,
        "TVD": 2362.21,
        "HD": 2746.091,
        "Angle": 58.01625
    },
    {
        "MD": 3857.86,
        "TVD": 2377.38,
        "HD": 2770.383,
        "Angle": 57.97335
    },
    {
        "MD": 3886.56,
        "TVD": 2392.6,
        "HD": 2794.715,
        "Angle": 58.07723
    },
    {
        "MD": 3915.23,
        "TVD": 2407.76,
        "HD": 2819.049,
        "Angle": 58.05505
    },
    {
        "MD": 3943.92,
        "TVD": 2422.94,
        "HD": 2843.394,
        "Angle": 57.91152
    },
    {
        "MD": 3972.74,
        "TVD": 2438.25,
        "HD": 2867.812,
        "Angle": 57.92185
    },
    {
        "MD": 4001.38,
        "TVD": 2453.46,
        "HD": 2892.079,
        "Angle": 58.03151
    },
    {
        "MD": 4030.07,
        "TVD": 2468.65,
        "HD": 2916.418,
        "Angle": 58.00797
    },
    {
        "MD": 4058.76,
        "TVD": 2483.85,
        "HD": 2940.75,
        "Angle": 58.89108
    },
    {
        "MD": 4059.36,
        "TVD": 2484.16,
        "HD": 2941.264,
        "Angle": 57.82825
    },
    {
        "MD": 4089.86,
        "TVD": 2500.4,
        "HD": 2967.081,
        "Angle": 57.68036
    },
    {
        "MD": 4098.52,
        "TVD": 2505.03,
        "HD": 2974.399,
        "Angle": 0
    }
];

const casingData = [
  { section: "Casing", size: '30"', fromMD: 0,     toMD: 110.52,   ID: 28,     OD: 30,    roughness: 0.001 },
  { section: "Casing", size: '20"', fromMD: 0,     toMD: 291.52,   ID: 18.73,  OD: 20,    roughness: 0.001 },
  { section: "Casing", size: '13 3/8"', fromMD: 0, toMD: 1830.52,  ID: 12.347, OD: 13.375,roughness: 0.001 },
  { section: "Casing", size: '9 5/8"', fromMD: 0,   toMD: 3676.52,  ID: 8.681,  OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',    fromMD: 3511.52, toMD: 4093.52,  ID: 6.184,  OD: 7,     roughness: 0.001 }
];

const tubingData = [
  { toMD: 3984.11, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 1', type: 'SSSV', MD: 159.35 },
  { name: 'Choke',  type: 'lnipple', MD: 3964.49 },
  { name: 'Packer', type: 'Pk 1',    MD: 3977.09 }
];

const reservoirData = {
  name: 'S-40PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 4005.02,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 148.9668,
  temperature: 107,
  c: 8.50e-6,
  n: 0.8,
  OGR: '114 sm3/mmsm3',
  WGR: '6 sm3/mmsm3'
};

// const notes = `
//   Soil temperature: 30 °C.
//   Well test: July 7, 2024.
// `;

/* This schema is aligned with the “JSON Well Log Format”—
   using name/value pairs and depth‑ordered arrays, ideal for
   drilling log data exchange and interoperability :contentReference[oaicite:1]{index=1}. */


function B12155() {
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

export default B12155
