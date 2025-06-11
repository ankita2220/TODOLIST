import React from 'react'


const trajectoryData = [
    {
        "MD": 0.0,
        "TVD": 0.0,
        "HD": 0.0,
        "Angle": 0.0
    },
    {
        "MD": 21.42,
        "TVD": 21.42,
        "HD": 0.0,
        "Angle": 0.0
    },
    {
        "MD": 43.42,
        "TVD": 43.42,
        "HD": 0.0,
        "Angle": 1.514397
    },
    {
        "MD": 72.05,
        "TVD": 72.04,
        "HD": 0.7566373,
        "Angle": 2.109563
    },
    {
        "MD": 101.56,
        "TVD": 101.53,
        "HD": 1.842915,
        "Angle": 2.542298
    },
    {
        "MD": 111.72,
        "TVD": 111.68,
        "HD": 2.293582,
        "Angle": 3.368495
    },
    {
        "MD": 140.66,
        "TVD": 140.57,
        "HD": 3.994023,
        "Angle": 5.481337
    },
    {
        "MD": 169.09,
        "TVD": 168.87,
        "HD": 6.709699,
        "Angle": 7.282749
    },
    {
        "MD": 197.6,
        "TVD": 197.15,
        "HD": 10.3238,
        "Angle": 9.703101
    },
    {
        "MD": 226.26,
        "TVD": 225.4,
        "HD": 15.15423,
        "Angle": 12.33575
    },
    {
        "MD": 255.28,
        "TVD": 253.75,
        "HD": 21.35406,
        "Angle": 14.31497
    },
    {
        "MD": 281.69,
        "TVD": 279.34,
        "HD": 27.88399,
        "Angle": 15.3515
    },
    {
        "MD": 313.08,
        "TVD": 309.61,
        "HD": 36.19418,
        "Angle": 15.56333
    },
    {
        "MD": 341.99,
        "TVD": 337.46,
        "HD": 43.95083,
        "Angle": 15.85002
    },
    {
        "MD": 369.87,
        "TVD": 364.28,
        "HD": 51.56542,
        "Angle": 15.87871
    },
    {
        "MD": 397.65,
        "TVD": 391.0,
        "HD": 59.16608,
        "Angle": 15.78888
    },
    {
        "MD": 426.01,
        "TVD": 418.29,
        "HD": 66.88265,
        "Angle": 15.86148
    },
    {
        "MD": 453.85,
        "TVD": 445.07,
        "HD": 74.49167,
        "Angle": 16.00021
    },
    {
        "MD": 484.31,
        "TVD": 474.35,
        "HD": 82.88769,
        "Angle": 16.07064
    },
    {
        "MD": 512.97,
        "TVD": 501.89,
        "HD": 90.82142,
        "Angle": 15.8685
    },
    {
        "MD": 542.36,
        "TVD": 530.16,
        "HD": 98.85754,
        "Angle": 15.74055
    },
    {
        "MD": 571.16,
        "TVD": 557.88,
        "HD": 106.6705,
        "Angle": 15.83266
    },
    {
        "MD": 598.31,
        "TVD": 584.0,
        "HD": 114.0778,
        "Angle": 15.77959
    },
    {
        "MD": 628.03,
        "TVD": 612.6,
        "HD": 122.1597,
        "Angle": 15.69083
    },
    {
        "MD": 657.28,
        "TVD": 640.76,
        "HD": 130.0703,
        "Angle": 15.70889
    },
    {
        "MD": 685.66,
        "TVD": 668.08,
        "HD": 137.7542,
        "Angle": 15.69353
    },
    {
        "MD": 714.9,
        "TVD": 696.23,
        "HD": 145.6633,
        "Angle": 15.69128
    },
    {
        "MD": 743.88,
        "TVD": 724.13,
        "HD": 153.5011,
        "Angle": 15.81096
    },
    {
        "MD": 772.69,
        "TVD": 751.85,
        "HD": 161.3508,
        "Angle": 15.74147
    },
    {
        "MD": 801.22,
        "TVD": 779.31,
        "HD": 169.0909,
        "Angle": 15.63399
    },
    {
        "MD": 829.06,
        "TVD": 806.12,
        "HD": 176.5935,
        "Angle": 15.57689
    },
    {
        "MD": 857.92,
        "TVD": 833.92,
        "HD": 184.3433,
        "Angle": 15.4391
    },
    {
        "MD": 886.74,
        "TVD": 861.7,
        "HD": 192.0156,
        "Angle": 15.48682
    },
    {
        "MD": 916.21,
        "TVD": 890.1,
        "HD": 199.8846,
        "Angle": 15.44989
    },
    {
        "MD": 944.99,
        "TVD": 917.84,
        "HD": 207.5515,
        "Angle": 15.25181
    },
    {
        "MD": 973.95,
        "TVD": 945.78,
        "HD": 215.1698,
        "Angle": 15.07962
    },
    {
        "MD": 1002.7,
        "TVD": 973.54,
        "HD": 222.6494,
        "Angle": 14.96623
    },
    {
        "MD": 1031.59,
        "TVD": 1001.45,
        "HD": 230.1102,
        "Angle": 14.95842
    },
    {
        "MD": 1060.51,
        "TVD": 1029.39,
        "HD": 237.575,
        "Angle": 15.01712
    },
    {
        "MD": 1088.62,
        "TVD": 1056.54,
        "HD": 244.8585,
        "Angle": 15.07134
    },
    {
        "MD": 1116.82,
        "TVD": 1083.77,
        "HD": 252.1911,
        "Angle": 15.07172
    },
    {
        "MD": 1145.6,
        "TVD": 1111.56,
        "HD": 259.6747,
        "Angle": 15.09019
    },
    {
        "MD": 1175.76,
        "TVD": 1140.68,
        "HD": 267.5265,
        "Angle": 14.94895
    },
    {
        "MD": 1203.83,
        "TVD": 1167.8,
        "HD": 274.7674,
        "Angle": 15.01334
    },
    {
        "MD": 1232.54,
        "TVD": 1195.53,
        "HD": 282.2046,
        "Angle": 15.00808
    },
    {
        "MD": 1261.27,
        "TVD": 1223.28,
        "HD": 289.6444,
        "Angle": 15.02975
    },
    {
        "MD": 1290.21,
        "TVD": 1251.23,
        "HD": 297.1491,
        "Angle": 15.01071
    },
    {
        "MD": 1318.93,
        "TVD": 1278.97,
        "HD": 304.5876,
        "Angle": 15.16743
    },
    {
        "MD": 1347.35,
        "TVD": 1306.4,
        "HD": 312.0234,
        "Angle": 15.12398
    },
    {
        "MD": 1376.51,
        "TVD": 1334.55,
        "HD": 319.6315,
        "Angle": 15.15938
    },
    {
        "MD": 1404.96,
        "TVD": 1362.01,
        "HD": 327.0713,
        "Angle": 15.23741
    },
    {
        "MD": 1433.69,
        "TVD": 1389.73,
        "HD": 334.6221,
        "Angle": 15.34818
    },
    {
        "MD": 1462.57,
        "TVD": 1417.58,
        "HD": 342.2662,
        "Angle": 15.29913
    },
    {
        "MD": 1491.07,
        "TVD": 1445.07,
        "HD": 349.7861,
        "Angle": 15.145
    },
    {
        "MD": 1518.71,
        "TVD": 1471.75,
        "HD": 357.0074,
        "Angle": 15.20934
    },
    {
        "MD": 1547.26,
        "TVD": 1499.3,
        "HD": 364.4974,
        "Angle": 15.11964
    },
    {
        "MD": 1575.57,
        "TVD": 1526.63,
        "HD": 371.8817,
        "Angle": 15.10783
    },
    {
        "MD": 1605.66,
        "TVD": 1555.68,
        "HD": 379.7242,
        "Angle": 15.1093
    },
    {
        "MD": 1633.43,
        "TVD": 1582.49,
        "HD": 386.9628,
        "Angle": 15.15214
    },
    {
        "MD": 1662.77,
        "TVD": 1610.81,
        "HD": 394.6318,
        "Angle": 15.17549
    },
    {
        "MD": 1691.16,
        "TVD": 1638.21,
        "HD": 402.0636,
        "Angle": 15.23208
    },
    {
        "MD": 1719.91,
        "TVD": 1665.95,
        "HD": 409.6171,
        "Angle": 15.26592
    },
    {
        "MD": 1748.25,
        "TVD": 1693.29,
        "HD": 417.079,
        "Angle": 15.70693
    },
    {
        "MD": 1772.62,
        "TVD": 1716.75,
        "HD": 423.6764,
        "Angle": 16.09426
    },
    {
        "MD": 1807.32,
        "TVD": 1750.09,
        "HD": 433.2958,
        "Angle": 16.21574
    },
    {
        "MD": 1834.97,
        "TVD": 1776.64,
        "HD": 441.0172,
        "Angle": 15.95629
    },
    {
        "MD": 1863.78,
        "TVD": 1804.34,
        "HD": 448.9372,
        "Angle": 15.70492
    },
    {
        "MD": 1892.71,
        "TVD": 1832.19,
        "HD": 456.7681,
        "Angle": 16.36658
    },
    {
        "MD": 1921.09,
        "TVD": 1859.42,
        "HD": 464.765,
        "Angle": 17.45688
    },
    {
        "MD": 1951.27,
        "TVD": 1888.21,
        "HD": 473.8187,
        "Angle": 17.35925
    },
    {
        "MD": 1980.69,
        "TVD": 1916.29,
        "HD": 482.5965,
        "Angle": 17.18795
    },
    {
        "MD": 2007.56,
        "TVD": 1941.96,
        "HD": 490.5368,
        "Angle": 16.49464
    },
    {
        "MD": 2035.99,
        "TVD": 1969.22,
        "HD": 498.6088,
        "Angle": 15.24008
    },
    {
        "MD": 2064.71,
        "TVD": 1996.93,
        "HD": 506.1582,
        "Angle": 14.27361
    },
    {
        "MD": 2093.54,
        "TVD": 2024.87,
        "HD": 513.2664,
        "Angle": 14.12381
    },
    {
        "MD": 2122.32,
        "TVD": 2052.78,
        "HD": 520.2892,
        "Angle": 14.15867
    },
    {
        "MD": 2150.63,
        "TVD": 2080.23,
        "HD": 527.214,
        "Angle": 14.12889
    },
    {
        "MD": 2179.72,
        "TVD": 2108.44,
        "HD": 534.315,
        "Angle": 14.13864
    },
    {
        "MD": 2208.44,
        "TVD": 2136.29,
        "HD": 541.3304,
        "Angle": 14.05824
    },
    {
        "MD": 2236.82,
        "TVD": 2163.82,
        "HD": 548.2242,
        "Angle": 14.13866
    },
    {
        "MD": 2265.87,
        "TVD": 2191.99,
        "HD": 555.3202,
        "Angle": 14.16095
    },
    {
        "MD": 2294.5,
        "TVD": 2219.75,
        "HD": 562.3244,
        "Angle": 14.06075
    },
    {
        "MD": 2325.54,
        "TVD": 2249.86,
        "HD": 569.8656,
        "Angle": 14.05735
    },
    {
        "MD": 2351.92,
        "TVD": 2275.45,
        "HD": 576.2731,
        "Angle": 14.1388
    },
    {
        "MD": 2382.62,
        "TVD": 2305.22,
        "HD": 583.7723,
        "Angle": 14.1919
    },
    {
        "MD": 2409.16,
        "TVD": 2330.95,
        "HD": 590.2791,
        "Angle": 14.48319
    },
    {
        "MD": 2438.11,
        "TVD": 2358.98,
        "HD": 597.5194,
        "Angle": 14.65026
    },
    {
        "MD": 2468.56,
        "TVD": 2388.44,
        "HD": 605.2207,
        "Angle": 14.59793
    },
    {
        "MD": 2495.82,
        "TVD": 2414.82,
        "HD": 612.0912,
        "Angle": 14.52613
    },
    {
        "MD": 2524.6,
        "TVD": 2442.68,
        "HD": 619.3098,
        "Angle": 14.54392
    },
    {
        "MD": 2553.31,
        "TVD": 2470.47,
        "HD": 626.5195,
        "Angle": 14.67891
    },
    {
        "MD": 2582.11,
        "TVD": 2498.33,
        "HD": 633.8175,
        "Angle": 14.57998
    },
    {
        "MD": 2611.3,
        "TVD": 2526.58,
        "HD": 641.1655,
        "Angle": 0.0
    }
];

const casingData = [
  { section: "Casing", size: '30"',      fromMD: 0,      toMD: 106.3,   ID: 28,     OD: 30,    roughness: 0.001 },
  { section: "Casing", size: '20"',      fromMD: 0,      toMD: 386.3,   ID: 18.73,  OD: 20,    roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',  fromMD: 0,      toMD: 1786.3,  ID: 12.347, OD: 13.375,roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',   fromMD: 0,      toMD: 2505.3,  ID: 8.681,  OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',      fromMD: 1744.3, toMD: 2611.3, ID: 6.184,  OD: 7,     roughness: 0.001 }
];

const tubingData = [
  { toMD: 2547, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV',   type: 'SSSV', MD: 157.48, enabled: 'true' },
  { name: 'Packer', type: 'Pk' , MD: 2508.79 , enabled: 'true' },
  { name: '',     type: 'NA',     MD: 2539.851, enabled: 'true' }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2539.8,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 133.9668,
  temperature: 107,
  c: 2.32e-6,
  n: 0.8,
  OGR: '79 sm3/mmsm3',
  WGR: '42 sm3/mmsm3',
  soilTempC: 30,
  chokeGasCoef: null,
  WTDate: "2024-07-04"  
};

// const meta = {
//   soilTempC: 30,
//   chokeGasCoef: null,
//   WTDate: "2024-07-04"  
// };

// c:contentReference[oaicite:2]{index=2}


function C24P24() {
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
                <td className="border p-2">{item.enabled }</td>
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

export default C24P24
