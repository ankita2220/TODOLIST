import React from 'react'


const trajectoryData = [
    {
        "MD": 59.54,
        "TVD": 59.52,
        "HD": 0,
        "Angle": 3.069539
    },
    {
        "MD": 66.51,
        "TVD": 66.48,
        "HD": 0.3732292,
        "Angle": 3.143016
    },
    {
        "MD": 99.75,
        "TVD": 99.67,
        "HD": 2.195727,
        "Angle": 5.056952
    },
    {
        "MD": 128.01,
        "TVD": 127.82,
        "HD": 4.686731,
        "Angle": 7.645107
    },
    {
        "MD": 157.26,
        "TVD": 156.81,
        "HD": 8.578055,
        "Angle": 9.902946
    },
    {
        "MD": 186.12,
        "TVD": 185.24,
        "HD": 13.54139,
        "Angle": 12.38299
    },
    {
        "MD": 214.49,
        "TVD": 212.95,
        "HD": 19.62521,
        "Angle": 15.08754
    },
    {
        "MD": 243.21,
        "TVD": 240.68,
        "HD": 27.10087,
        "Angle": 18.48814
    },
    {
        "MD": 272.08,
        "TVD": 268.06,
        "HD": 36.25578,
        "Angle": 21.23738
    },
    {
        "MD": 299.91,
        "TVD": 294,
        "HD": 46.33672,
        "Angle": 23.48504
    },
    {
        "MD": 326.71,
        "TVD": 318.58,
        "HD": 57.01678,
        "Angle": 25.10179
    },
    {
        "MD": 346.51,
        "TVD": 336.51,
        "HD": 65.41648,
        "Angle": 25.84193
    },
    {
        "MD": 356.91,
        "TVD": 345.87,
        "HD": 69.94974,
        "Angle": 27.26604
    },
    {
        "MD": 385.53,
        "TVD": 371.31,
        "HD": 83.06122,
        "Angle": 29.64756
    },
    {
        "MD": 414.48,
        "TVD": 396.47,
        "HD": 97.38172,
        "Angle": 32.31946
    },
    {
        "MD": 443.14,
        "TVD": 420.69,
        "HD": 112.7045,
        "Angle": 34.97462
    },
    {
        "MD": 472.1,
        "TVD": 444.42,
        "HD": 129.3048,
        "Angle": 37.66542
    },
    {
        "MD": 500.17,
        "TVD": 466.64,
        "HD": 146.4569,
        "Angle": 40.49373
    },
    {
        "MD": 529.52,
        "TVD": 488.96,
        "HD": 165.5158,
        "Angle": 43.42188
    },
    {
        "MD": 558.86,
        "TVD": 510.27,
        "HD": 185.6831,
        "Angle": 45.88706
    },
    {
        "MD": 587.65,
        "TVD": 530.31,
        "HD": 206.3534,
        "Angle": 47.06216
    },
    {
        "MD": 616.54,
        "TVD": 549.99,
        "HD": 227.5036,
        "Angle": 47.10767
    },
    {
        "MD": 645.44,
        "TVD": 569.66,
        "HD": 248.6767,
        "Angle": 46.99808
    },
    {
        "MD": 674.31,
        "TVD": 589.35,
        "HD": 269.7902,
        "Angle": 46.94269
    },
    {
        "MD": 702.74,
        "TVD": 608.76,
        "HD": 290.5632,
        "Angle": 46.95193
    },
    {
        "MD": 731.38,
        "TVD": 628.31,
        "HD": 311.4928,
        "Angle": 46.91856
    },
    {
        "MD": 760.09,
        "TVD": 647.92,
        "HD": 332.4621,
        "Angle": 46.98779
    },
    {
        "MD": 788.5,
        "TVD": 667.3,
        "HD": 353.2357,
        "Angle": 46.96505
    },
    {
        "MD": 816.81,
        "TVD": 686.62,
        "HD": 373.9285,
        "Angle": 46.96055
    },
    {
        "MD": 846.07,
        "TVD": 706.59,
        "HD": 395.3142,
        "Angle": 46.91238
    },
    {
        "MD": 874.44,
        "TVD": 725.97,
        "HD": 416.0331,
        "Angle": 46.94586
    },
    {
        "MD": 904.19,
        "TVD": 746.28,
        "HD": 437.7717,
        "Angle": 46.92517
    },
    {
        "MD": 932.23,
        "TVD": 765.43,
        "HD": 458.2539,
        "Angle": 46.93565
    },
    {
        "MD": 961.74,
        "TVD": 785.58,
        "HD": 479.8135,
        "Angle": 46.83076
    },
    {
        "MD": 990.52,
        "TVD": 805.27,
        "HD": 500.8038,
        "Angle": 46.54711
    },
    {
        "MD": 1019.6,
        "TVD": 825.27,
        "HD": 521.9141,
        "Angle": 46.51265
    },
    {
        "MD": 1048.4,
        "TVD": 845.09,
        "HD": 542.8093,
        "Angle": 46.53171
    },
    {
        "MD": 1077.37,
        "TVD": 865.02,
        "HD": 563.8344,
        "Angle": 46.53657
    },
    {
        "MD": 1106.11,
        "TVD": 884.79,
        "HD": 584.6943,
        "Angle": 46.54354
    },
    {
        "MD": 1134.97,
        "TVD": 904.64,
        "HD": 605.6437,
        "Angle": 46.57808
    },
    {
        "MD": 1162.83,
        "TVD": 923.79,
        "HD": 625.8787,
        "Angle": 46.61725
    },
    {
        "MD": 1191.54,
        "TVD": 943.51,
        "HD": 646.7446,
        "Angle": 46.5289
    },
    {
        "MD": 1219.68,
        "TVD": 962.87,
        "HD": 667.1664,
        "Angle": 46.37872
    },
    {
        "MD": 1249.25,
        "TVD": 983.27,
        "HD": 688.5726,
        "Angle": 46.4218
    },
    {
        "MD": 1278.06,
        "TVD": 1003.13,
        "HD": 709.4436,
        "Angle": 46.49294
    },
    {
        "MD": 1306.53,
        "TVD": 1022.73,
        "HD": 730.0925,
        "Angle": 46.34911
    },
    {
        "MD": 1335.49,
        "TVD": 1042.72,
        "HD": 751.0468,
        "Angle": 46.32161
    },
    {
        "MD": 1364.03,
        "TVD": 1062.43,
        "HD": 771.6877,
        "Angle": 46.4269
    },
    {
        "MD": 1392.48,
        "TVD": 1082.04,
        "HD": 792.2996,
        "Angle": 46.46392
    },
    {
        "MD": 1421.08,
        "TVD": 1101.74,
        "HD": 813.0329,
        "Angle": 46.44116
    },
    {
        "MD": 1449.61,
        "TVD": 1121.4,
        "HD": 833.7077,
        "Angle": 46.34837
    },
    {
        "MD": 1477.57,
        "TVD": 1140.7,
        "HD": 853.9382,
        "Angle": 46.31077
    },
    {
        "MD": 1506.64,
        "TVD": 1160.78,
        "HD": 874.9586,
        "Angle": 46.3718
    },
    {
        "MD": 1535.67,
        "TVD": 1180.81,
        "HD": 895.9714,
        "Angle": 46.25826
    },
    {
        "MD": 1564.77,
        "TVD": 1200.93,
        "HD": 916.9951,
        "Angle": 46.33608
    },
    {
        "MD": 1593.81,
        "TVD": 1220.98,
        "HD": 938.0027,
        "Angle": 46.40964
    },
    {
        "MD": 1622.28,
        "TVD": 1240.61,
        "HD": 958.6232,
        "Angle": 46.39908
    },
    {
        "MD": 1651.02,
        "TVD": 1260.43,
        "HD": 979.4356,
        "Angle": 46.37347
    },
    {
        "MD": 1679.79,
        "TVD": 1280.28,
        "HD": 1000.261,
        "Angle": 46.41052
    },
    {
        "MD": 1708.42,
        "TVD": 1300.02,
        "HD": 1020.997,
        "Angle": 46.43113
    },
    {
        "MD": 1734.13,
        "TVD": 1317.74,
        "HD": 1039.626,
        "Angle": 46.45043
    },
    {
        "MD": 1748.47,
        "TVD": 1327.62,
        "HD": 1050.019,
        "Angle": 46.39362
    },
    {
        "MD": 1763.81,
        "TVD": 1338.2,
        "HD": 1061.127,
        "Angle": 46.05876
    },
    {
        "MD": 1792.43,
        "TVD": 1358.06,
        "HD": 1081.734,
        "Angle": 45.88432
    },
    {
        "MD": 1820.96,
        "TVD": 1377.92,
        "HD": 1102.217,
        "Angle": 46.20178
    },
    {
        "MD": 1849.77,
        "TVD": 1397.86,
        "HD": 1123.012,
        "Angle": 46.22292
    },
    {
        "MD": 1878.62,
        "TVD": 1417.82,
        "HD": 1143.842,
        "Angle": 46.30591
    },
    {
        "MD": 1907.34,
        "TVD": 1437.66,
        "HD": 1164.608,
        "Angle": 46.54006
    },
    {
        "MD": 1936.14,
        "TVD": 1457.47,
        "HD": 1185.513,
        "Angle": 46.3335
    },
    {
        "MD": 1964.86,
        "TVD": 1477.3,
        "HD": 1206.288,
        "Angle": 46.15917
    },
    {
        "MD": 1993.46,
        "TVD": 1497.11,
        "HD": 1226.916,
        "Angle": 45.79699
    },
    {
        "MD": 2022.06,
        "TVD": 1517.05,
        "HD": 1247.419,
        "Angle": 45.50057
    },
    {
        "MD": 2050.88,
        "TVD": 1537.25,
        "HD": 1267.975,
        "Angle": 46.27386
    },
    {
        "MD": 2079.67,
        "TVD": 1557.15,
        "HD": 1288.78,
        "Angle": 46.96505
    },
    {
        "MD": 2107.98,
        "TVD": 1576.47,
        "HD": 1309.473,
        "Angle": 46.74021
    },
    {
        "MD": 2136.77,
        "TVD": 1596.2,
        "HD": 1330.439,
        "Angle": 46.43404
    },
    {
        "MD": 2165.63,
        "TVD": 1616.09,
        "HD": 1351.351,
        "Angle": 46.35058
    },
    {
        "MD": 2194.33,
        "TVD": 1635.9,
        "HD": 1372.117,
        "Angle": 46.30736
    },
    {
        "MD": 2223.21,
        "TVD": 1655.85,
        "HD": 1392.999,
        "Angle": 46.33023
    },
    {
        "MD": 2252.16,
        "TVD": 1675.84,
        "HD": 1413.94,
        "Angle": 46.38962
    },
    {
        "MD": 2281.04,
        "TVD": 1695.76,
        "HD": 1434.85,
        "Angle": 46.37797
    },
    {
        "MD": 2309.45,
        "TVD": 1715.36,
        "HD": 1455.416,
        "Angle": 46.53326
    },
    {
        "MD": 2338.29,
        "TVD": 1735.2,
        "HD": 1476.348,
        "Angle": 46.39152
    },
    {
        "MD": 2367.2,
        "TVD": 1755.14,
        "HD": 1497.28,
        "Angle": 45.8895
    },
    {
        "MD": 2396.02,
        "TVD": 1775.2,
        "HD": 1517.973,
        "Angle": 46.07853
    },
    {
        "MD": 2424.78,
        "TVD": 1795.15,
        "HD": 1538.689,
        "Angle": 46.39434
    },
    {
        "MD": 2453.59,
        "TVD": 1815.02,
        "HD": 1559.55,
        "Angle": 46.58966
    },
    {
        "MD": 2482.46,
        "TVD": 1834.86,
        "HD": 1580.523,
        "Angle": 46.49434
    },
    {
        "MD": 2510.8,
        "TVD": 1854.37,
        "HD": 1601.078,
        "Angle": 46.50016
    },
    {
        "MD": 2539.39,
        "TVD": 1874.05,
        "HD": 1621.817,
        "Angle": 46.74478
    },
    {
        "MD": 2568.27,
        "TVD": 1893.84,
        "HD": 1642.85,
        "Angle": 46.65543
    },
    {
        "MD": 2596.84,
        "TVD": 1913.45,
        "HD": 1663.627,
        "Angle": 46.80199
    },
    {
        "MD": 2625.59,
        "TVD": 1933.13,
        "HD": 1684.586,
        "Angle": 46.9239
    },
    {
        "MD": 2654.42,
        "TVD": 1952.82,
        "HD": 1705.645,
        "Angle": 46.67854
    },
    {
        "MD": 2683.25,
        "TVD": 1972.6,
        "HD": 1726.619,
        "Angle": 46.42366
    },
    {
        "MD": 2712.09,
        "TVD": 1992.48,
        "HD": 1747.512,
        "Angle": 46.36962
    },
    {
        "MD": 2740.8,
        "TVD": 2012.29,
        "HD": 1768.293,
        "Angle": 46.61532
    },
    {
        "MD": 2769.64,
        "TVD": 2032.1,
        "HD": 1789.252,
        "Angle": 46.57261
    },
    {
        "MD": 2798.37,
        "TVD": 2051.85,
        "HD": 1810.117,
        "Angle": 46.49913
    },
    {
        "MD": 2827.25,
        "TVD": 2071.73,
        "HD": 1831.066,
        "Angle": 46.42553
    },
    {
        "MD": 2856.12,
        "TVD": 2091.63,
        "HD": 1851.982,
        "Angle": 46.85997
    },
    {
        "MD": 2882.02,
        "TVD": 2109.34,
        "HD": 1870.881,
        "Angle": 47.62492
    },
    {
        "MD": 2910.73,
        "TVD": 2128.69,
        "HD": 1892.09,
        "Angle": 48.17183
    },
    {
        "MD": 2939.43,
        "TVD": 2147.83,
        "HD": 1913.476,
        "Angle": 48.42148
    },
    {
        "MD": 2968.12,
        "TVD": 2166.87,
        "HD": 1934.937,
        "Angle": 48.40375
    },
    {
        "MD": 2996.8,
        "TVD": 2185.91,
        "HD": 1956.385,
        "Angle": 47.59852
    },
    {
        "MD": 3025.54,
        "TVD": 2205.29,
        "HD": 1977.608,
        "Angle": 46.27831
    },
    {
        "MD": 3054.26,
        "TVD": 2225.14,
        "HD": 1998.364,
        "Angle": 45.60094
    },
    {
        "MD": 3082.96,
        "TVD": 2245.22,
        "HD": 2018.87,
        "Angle": 45.42132
    },
    {
        "MD": 3113.15,
        "TVD": 2266.41,
        "HD": 2040.374,
        "Angle": 45.63728
    },
    {
        "MD": 3141.84,
        "TVD": 2286.47,
        "HD": 2060.885,
        "Angle": 45.88461
    },
    {
        "MD": 3170.6,
        "TVD": 2306.49,
        "HD": 2081.533,
        "Angle": 46.22099
    },
    {
        "MD": 3199.29,
        "TVD": 2326.34,
        "HD": 2102.248,
        "Angle": 46.25717
    },
    {
        "MD": 3227.97,
        "TVD": 2346.17,
        "HD": 2122.967,
        "Angle": 46.02475
    },
    {
        "MD": 3256.63,
        "TVD": 2366.07,
        "HD": 2143.592,
        "Angle": 46.0101
    },
    {
        "MD": 3285.34,
        "TVD": 2386.01,
        "HD": 2164.248,
        "Angle": 46.04632
    },
    {
        "MD": 3314.04,
        "TVD": 2405.93,
        "HD": 2184.909,
        "Angle": 46.24219
    },
    {
        "MD": 3342.77,
        "TVD": 2425.8,
        "HD": 2205.66,
        "Angle": 46.29538
    },
    {
        "MD": 3371.47,
        "TVD": 2445.63,
        "HD": 2226.408,
        "Angle": 46.35524
    },
    {
        "MD": 3400.1,
        "TVD": 2465.39,
        "HD": 2247.125,
        "Angle": 46.16565
    },
    {
        "MD": 3428.79,
        "TVD": 2485.26,
        "HD": 2267.821,
        "Angle": 45.96171
    },
    {
        "MD": 3457.59,
        "TVD": 2505.28,
        "HD": 2288.524,
        "Angle": 46.16565
    },
    {
        "MD": 3486.28,
        "TVD": 2525.15,
        "HD": 2309.22,
        "Angle": 46.37629
    },
    {
        "MD": 3509.79,
        "TVD": 2541.37,
        "HD": 2326.238,
        "Angle": 46.34127
    },
    {
        "MD": 3518.09,
        "TVD": 2547.1,
        "HD": 2332.243,
        "Angle": 0
    }
];

const casingData = [
  { section: "Casing", size: '30"',        fromMD: 0,       toMD: 110.47,  ID: 28,     OD: 30,     roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',    fromMD: 0,       toMD: 1791.47, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',     fromMD: 0,       toMD: 2917.47, ID: 8.681,  OD: 9.625,  roughness: 0.001 },
  { section: "Liner",   size: '7"',        fromMD: 2917.47, toMD: 3557.47, ID: 6.184,  OD: 7,      roughness: 0.001 }
];

const tubingData = [
  { toMD: 3467.4, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 2',     type: 'SSSV',  MD: 165.4,    enabled: true },
  { name: 'Packer GP PKR', type: 'GP PKR', MD: 3463.47, enabled: true }
];

const reservoirData = {
  name: 'S-50 PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3501.97,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 158.9668,
  temperature: 107,
  c: null,       // not provided
  n: 0.8,
  OGR: '',       // not provided
  WGR: '',        // not provided
  soilTempC: 30,                   // °C soil temperature
  chokeGasCoef: null,              // not specified
  WTDate: "2020-08-10" 
};

// const meta = {
//   soilTempC: 30,                   // °C soil temperature
//   chokeGasCoef: null,              // not specified
//   WTDate: "2020-08-10"             // ISO‑8601 format recommended :contentReference[oaicite:1]{index=1}
// };

// c:contentReference[oaicite:2]{index=2}

function C24P22Z() {
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

export default C24P22Z
