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
        "Angle": 0.8618668
    },
    {
        "MD": 108.07,
        "TVD": 108.06,
        "HD": 1.329549,
        "Angle": 0
    },
    {
        "MD": 114.18,
        "TVD": 114.17,
        "HD": 1.329549,
        "Angle": 2.477306
    },
    {
        "MD": 124.88,
        "TVD": 124.86,
        "HD": 1.792042,
        "Angle": 1.515191
    },
    {
        "MD": 153.48,
        "TVD": 153.45,
        "HD": 2.548283,
        "Angle": 1.517847
    },
    {
        "MD": 181.98,
        "TVD": 181.94,
        "HD": 3.3032,
        "Angle": 2.142866
    },
    {
        "MD": 210.58,
        "TVD": 210.52,
        "HD": 4.372592,
        "Angle": 3.03596
    },
    {
        "MD": 239.08,
        "TVD": 238.98,
        "HD": 5.882029,
        "Angle": 4.286481
    },
    {
        "MD": 267.68,
        "TVD": 267.5,
        "HD": 8.019692,
        "Angle": 5.881004
    },
    {
        "MD": 296.18,
        "TVD": 295.85,
        "HD": 10.93988,
        "Angle": 8.180562
    },
    {
        "MD": 324.68,
        "TVD": 324.06,
        "HD": 14.99523,
        "Angle": 11.87566
    },
    {
        "MD": 353.18,
        "TVD": 351.95,
        "HD": 20.86021,
        "Angle": 14.60596
    },
    {
        "MD": 369.58,
        "TVD": 367.82,
        "HD": 24.9958,
        "Angle": 15.24652
    },
    {
        "MD": 384.07,
        "TVD": 381.8,
        "HD": 28.80627,
        "Angle": 13.97895
    },
    {
        "MD": 425.94,
        "TVD": 422.43,
        "HD": 38.92061,
        "Angle": 12.21947
    },
    {
        "MD": 454.63,
        "TVD": 450.47,
        "HD": 44.99305,
        "Angle": 11.43814
    },
    {
        "MD": 483.33,
        "TVD": 478.6,
        "HD": 50.68455,
        "Angle": 11.14379
    },
    {
        "MD": 511.97,
        "TVD": 506.7,
        "HD": 56.21985,
        "Angle": 10.91573
    },
    {
        "MD": 540.71,
        "TVD": 534.92,
        "HD": 61.6622,
        "Angle": 10.60451
    },
    {
        "MD": 569.4,
        "TVD": 563.12,
        "HD": 66.94199,
        "Angle": 10.04042
    },
    {
        "MD": 598.13,
        "TVD": 591.41,
        "HD": 71.95086,
        "Angle": 9.340548
    },
    {
        "MD": 626.79,
        "TVD": 619.69,
        "HD": 76.60244,
        "Angle": 8.704624
    },
    {
        "MD": 655.44,
        "TVD": 648.01,
        "HD": 80.93835,
        "Angle": 7.869499
    },
    {
        "MD": 684.11,
        "TVD": 676.41,
        "HD": 84.86376,
        "Angle": 7.568023
    },
    {
        "MD": 712.81,
        "TVD": 704.86,
        "HD": 88.64364,
        "Angle": 7.25351
    },
    {
        "MD": 741.55,
        "TVD": 733.37,
        "HD": 92.27235,
        "Angle": 7.565384
    },
    {
        "MD": 770.27,
        "TVD": 761.84,
        "HD": 96.05355,
        "Angle": 8.290115
    },
    {
        "MD": 798.98,
        "TVD": 790.25,
        "HD": 100.1931,
        "Angle": 9.213336
    },
    {
        "MD": 827.66,
        "TVD": 818.56,
        "HD": 104.7851,
        "Angle": 9.205298
    },
    {
        "MD": 856.39,
        "TVD": 846.92,
        "HD": 109.3811,
        "Angle": 9.944485
    },
    {
        "MD": 885.01,
        "TVD": 875.11,
        "HD": 114.3236,
        "Angle": 10.60451
    },
    {
        "MD": 913.7,
        "TVD": 903.31,
        "HD": 119.6034,
        "Angle": 10.92718
    },
    {
        "MD": 942.38,
        "TVD": 931.47,
        "HD": 125.04,
        "Angle": 11.5404
    },
    {
        "MD": 971.07,
        "TVD": 959.58,
        "HD": 130.7797,
        "Angle": 12.49282
    },
    {
        "MD": 999.79,
        "TVD": 987.62,
        "HD": 136.9923,
        "Angle": 13.2997
    },
    {
        "MD": 1028.5,
        "TVD": 1015.56,
        "HD": 143.5969,
        "Angle": 14.62318
    },
    {
        "MD": 1057.21,
        "TVD": 1043.34,
        "HD": 150.8451,
        "Angle": 15.626
    },
    {
        "MD": 1085.89,
        "TVD": 1070.96,
        "HD": 158.5702,
        "Angle": 16.35703
    },
    {
        "MD": 1114.55,
        "TVD": 1098.46,
        "HD": 166.6415,
        "Angle": 17.32314
    },
    {
        "MD": 1143.21,
        "TVD": 1125.82,
        "HD": 175.1753,
        "Angle": 18.54329
    },
    {
        "MD": 1171.91,
        "TVD": 1153.03,
        "HD": 184.3025,
        "Angle": 19.8228
    },
    {
        "MD": 1200.6,
        "TVD": 1180.02,
        "HD": 194.0316,
        "Angle": 21.0469
    },
    {
        "MD": 1229.23,
        "TVD": 1206.74,
        "HD": 204.3136,
        "Angle": 21.74444
    },
    {
        "MD": 1257.9,
        "TVD": 1233.37,
        "HD": 214.9349,
        "Angle": 22.58389
    },
    {
        "MD": 1286.59,
        "TVD": 1259.86,
        "HD": 225.9529,
        "Angle": 23.69341
    },
    {
        "MD": 1315.3,
        "TVD": 1286.15,
        "HD": 237.4898,
        "Angle": 24.73312
    },
    {
        "MD": 1343.97,
        "TVD": 1312.19,
        "HD": 249.4851,
        "Angle": 25.09473
    },
    {
        "MD": 1372.68,
        "TVD": 1338.19,
        "HD": 261.6615,
        "Angle": 24.67657
    },
    {
        "MD": 1401.37,
        "TVD": 1364.26,
        "HD": 273.6394,
        "Angle": 24.37935
    },
    {
        "MD": 1430.08,
        "TVD": 1390.41,
        "HD": 285.4902,
        "Angle": 24.68094
    },
    {
        "MD": 1458.76,
        "TVD": 1416.47,
        "HD": 297.466,
        "Angle": 25.33347
    },
    {
        "MD": 1487.46,
        "TVD": 1442.41,
        "HD": 309.7463,
        "Angle": 25.00046
    },
    {
        "MD": 1516.17,
        "TVD": 1468.43,
        "HD": 321.8799,
        "Angle": 24.41902
    },
    {
        "MD": 1544.9,
        "TVD": 1494.59,
        "HD": 333.757,
        "Angle": 24.24248
    },
    {
        "MD": 1573.59,
        "TVD": 1520.75,
        "HD": 345.5371,
        "Angle": 24.24677
    },
    {
        "MD": 1602.27,
        "TVD": 1546.9,
        "HD": 357.3151,
        "Angle": 24.58073
    },
    {
        "MD": 1630.96,
        "TVD": 1572.99,
        "HD": 369.2494,
        "Angle": 24.58073
    },
    {
        "MD": 1659.65,
        "TVD": 1599.08,
        "HD": 381.1837,
        "Angle": 24.33957
    },
    {
        "MD": 1688.34,
        "TVD": 1625.22,
        "HD": 393.0081,
        "Angle": 24.72436
    },
    {
        "MD": 1717.03,
        "TVD": 1651.28,
        "HD": 405.0078,
        "Angle": 25.15511
    },
    {
        "MD": 1745.71,
        "TVD": 1677.24,
        "HD": 417.1988,
        "Angle": 24.94572
    },
    {
        "MD": 1771.65,
        "TVD": 1700.76,
        "HD": 428.1393,
        "Angle": 24.33573
    },
    {
        "MD": 1803.05,
        "TVD": 1729.37,
        "HD": 441.0787,
        "Angle": 24.33526
    },
    {
        "MD": 1831.75,
        "TVD": 1755.52,
        "HD": 452.9052,
        "Angle": 24.94437
    },
    {
        "MD": 1860.48,
        "TVD": 1781.57,
        "HD": 465.0217,
        "Angle": 25.04482
    },
    {
        "MD": 1889.09,
        "TVD": 1807.49,
        "HD": 477.1331,
        "Angle": 25.03877
    },
    {
        "MD": 1917.82,
        "TVD": 1833.52,
        "HD": 489.2926,
        "Angle": 24.80651
    },
    {
        "MD": 1946.54,
        "TVD": 1859.59,
        "HD": 501.3422,
        "Angle": 24.68531
    },
    {
        "MD": 1975.21,
        "TVD": 1885.64,
        "HD": 513.3158,
        "Angle": 24.82848
    },
    {
        "MD": 2003.88,
        "TVD": 1911.66,
        "HD": 525.3544,
        "Angle": 24.93996
    },
    {
        "MD": 2032.62,
        "TVD": 1937.72,
        "HD": 537.4731,
        "Angle": 24.8505
    },
    {
        "MD": 2061.24,
        "TVD": 1963.69,
        "HD": 549.5008,
        "Angle": 24.65052
    },
    {
        "MD": 2089.88,
        "TVD": 1989.72,
        "HD": 561.446,
        "Angle": 24.4802
    },
    {
        "MD": 2118.58,
        "TVD": 2015.84,
        "HD": 573.3387,
        "Angle": 24.54136
    },
    {
        "MD": 2147.25,
        "TVD": 2041.92,
        "HD": 585.2468,
        "Angle": 24.81968
    },
    {
        "MD": 2175.94,
        "TVD": 2067.96,
        "HD": 597.2898,
        "Angle": 24.65912
    },
    {
        "MD": 2204.67,
        "TVD": 2094.07,
        "HD": 609.2765,
        "Angle": 24.51532
    },
    {
        "MD": 2233.4,
        "TVD": 2120.21,
        "HD": 621.1976,
        "Angle": 24.559
    },
    {
        "MD": 2262.14,
        "TVD": 2146.35,
        "HD": 633.1428,
        "Angle": 24.71998
    },
    {
        "MD": 2290.84,
        "TVD": 2172.42,
        "HD": 645.1447,
        "Angle": 24.4802
    },
    {
        "MD": 2319.54,
        "TVD": 2198.54,
        "HD": 657.0374,
        "Angle": 24.52399
    },
    {
        "MD": 2348.25,
        "TVD": 2224.66,
        "HD": 668.9541,
        "Angle": 24.82848
    },
    {
        "MD": 2376.92,
        "TVD": 2250.68,
        "HD": 680.9928,
        "Angle": 24.82848
    },
    {
        "MD": 2405.59,
        "TVD": 2276.7,
        "HD": 693.0314,
        "Angle": 24.4932
    },
    {
        "MD": 2434.26,
        "TVD": 2302.79,
        "HD": 704.9176,
        "Angle": 24.26395
    },
    {
        "MD": 2462.9,
        "TVD": 2328.9,
        "HD": 716.6869,
        "Angle": 24.62433
    },
    {
        "MD": 2491.6,
        "TVD": 2354.99,
        "HD": 728.6452,
        "Angle": 24.4932
    },
    {
        "MD": 2520.27,
        "TVD": 2381.08,
        "HD": 740.5314,
        "Angle": 23.89095
    },
    {
        "MD": 2529.14,
        "TVD": 2389.19,
        "HD": 744.1237,
        "Angle": 23.86728
    },
    {
        "MD": 2546.33,
        "TVD": 2404.91,
        "HD": 751.0791,
        "Angle": 24.18185
    },
    {
        "MD": 2574.82,
        "TVD": 2430.9,
        "HD": 762.7496,
        "Angle": 24.63295
    },
    {
        "MD": 2603.72,
        "TVD": 2457.17,
        "HD": 774.7952,
        "Angle": 24.90915
    },
    {
        "MD": 2632.53,
        "TVD": 2483.3,
        "HD": 786.9294,
        "Angle": 24.88551
    },
    {
        "MD": 2660.64,
        "TVD": 2508.8,
        "HD": 798.7583,
        "Angle": 24.89515
    },
    {
        "MD": 2676.46,
        "TVD": 2523.15,
        "HD": 805.4179,
        "Angle": 24.92345
    },
    {
        "MD": 2687.52,
        "TVD": 2533.18,
        "HD": 810.0786,
        "Angle": 0
    },
    {
        "MD": 2832.45,
        "TVD": 1987.02,
        "HD": 1819.468,
        "Angle": 52.28366
    },
    {
        "MD": 2861.89,
        "TVD": 2005.03,
        "HD": 1842.756,
        "Angle": 52.25056
    },
    {
        "MD": 2890.72,
        "TVD": 2022.68,
        "HD": 1865.552,
        "Angle": 52.26292
    },
    {
        "MD": 2919.46,
        "TVD": 2040.27,
        "HD": 1888.28,
        "Angle": 52.28221
    },
    {
        "MD": 2948.85,
        "TVD": 2058.25,
        "HD": 1911.529,
        "Angle": 52.21162
    },
    {
        "MD": 2977.72,
        "TVD": 2075.94,
        "HD": 1934.344,
        "Angle": 52.24851
    },
    {
        "MD": 3006.81,
        "TVD": 2093.75,
        "HD": 1957.345,
        "Angle": 51.99505
    },
    {
        "MD": 3035.8,
        "TVD": 2111.6,
        "HD": 1980.188,
        "Angle": 51.54403
    },
    {
        "MD": 3064.55,
        "TVD": 2129.48,
        "HD": 2002.701,
        "Angle": 51.28679
    },
    {
        "MD": 3094.13,
        "TVD": 2147.98,
        "HD": 2025.782,
        "Angle": 51.43037
    },
    {
        "MD": 3123.45,
        "TVD": 2166.26,
        "HD": 2048.706,
        "Angle": 51.73768
    },
    {
        "MD": 3152.21,
        "TVD": 2184.07,
        "HD": 2071.288,
        "Angle": 51.49785
    },
    {
        "MD": 3181.22,
        "TVD": 2202.13,
        "HD": 2093.991,
        "Angle": 51.01198
    },
    {
        "MD": 3209.48,
        "TVD": 2219.91,
        "HD": 2115.957,
        "Angle": 50.69321
    },
    {
        "MD": 3240.61,
        "TVD": 2239.63,
        "HD": 2140.044,
        "Angle": 50.64437
    },
    {
        "MD": 3274.42,
        "TVD": 2261.07,
        "HD": 2166.187,
        "Angle": 50.51812
    },
    {
        "MD": 3303.61,
        "TVD": 2279.63,
        "HD": 2188.716,
        "Angle": 50.31652
    },
    {
        "MD": 3332.77,
        "TVD": 2298.25,
        "HD": 2211.157,
        "Angle": 50.44326
    },
    {
        "MD": 3361.27,
        "TVD": 2316.4,
        "HD": 2233.131,
        "Angle": 50.65609
    },
    {
        "MD": 3390.94,
        "TVD": 2335.21,
        "HD": 2256.076,
        "Angle": 50.76343
    },
    {
        "MD": 3419.35,
        "TVD": 2353.18,
        "HD": 2278.081,
        "Angle": 50.80809
    },
    {
        "MD": 3436.33,
        "TVD": 2363.91,
        "HD": 2291.241,
        "Angle": 50.86134
    },
    {
        "MD": 3458.51,
        "TVD": 2377.91,
        "HD": 2308.444,
        "Angle": 0
    }
];

const casingData = [
  { section: "Casing", size: '30"', fromMD: 0, toMD: 110.52, ID: 28, OD: 30, roughness: 0.001 },
  { section: "Casing", size: '20"', fromMD: 0, toMD: 385.05, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: "Casing", size: '13 3/8"', fromMD: 0, toMD: 1622.02, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"', fromMD: 0, toMD: 2539.52, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',    fromMD: 2383.52,    toMD: 2687.52,    ID: 6.184, OD: 7,    roughness: 0.001 }
];

const tubingData = [
  { toMD: 2594.09, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV',    type: 'SSSV', MD: 152.62 },
  { name: 'choke',   type: 'L/Nipple', MD: 2567.99 },
  { name: 'packer',  type: 'GP PKR', MD: 2582.59 },
  { name: 'NA',      type: 'NA',     MD: 2618.77 }
];

const reservoirData = {
  name: null,           // Not specified
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2618.77,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 173.9668,
  temperature: 107,
  c: 1.5e-7,
  n: 0.8,
  OGR: '127 sm3/mmsm3',
  WGR: '0 sm3/mmsm3'
};

// const notes = `
//   Soil temperature: 30 °C.
//   Well test: July 7, 2024.
// `;

function B12154() {
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

export default B12154
