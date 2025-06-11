import React from 'react'
const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 20.63,
    "TVD": 20.63,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 45.63,
    "TVD": 45.63,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 48.17,
    "TVD": 48.17,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 76.28,
    "TVD": 76.28,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 112.72,
    "TVD": 112.72,
    "HD": 0.0,
    "Angle": 1.52374
  },
  {
    "MD": 141.0,
    "TVD": 140.99,
    "HD": 0.7519973,
    "Angle": 2.630989
  },
  {
    "MD": 169.46,
    "TVD": 169.42,
    "HD": 2.058405,
    "Angle": 4.56584
  },
  {
    "MD": 197.82,
    "TVD": 197.69,
    "HD": 4.315992,
    "Angle": 5.873789
  },
  {
    "MD": 226.39,
    "TVD": 226.11,
    "HD": 7.239774,
    "Angle": 7.322723
  },
  {
    "MD": 254.59,
    "TVD": 254.08,
    "HD": 10.83409,
    "Angle": 8.639719
  },
  {
    "MD": 282.79,
    "TVD": 281.96,
    "HD": 15.07031,
    "Angle": 10.49177
  },
  {
    "MD": 311.5,
    "TVD": 310.19,
    "HD": 20.29824,
    "Angle": 13.23503
  },
  {
    "MD": 340.49,
    "TVD": 338.41,
    "HD": 26.93538,
    "Angle": 15.46156
  },
  {
    "MD": 366.74,
    "TVD": 363.71,
    "HD": 33.93342,
    "Angle": 17.63949
  },
  {
    "MD": 398.43,
    "TVD": 393.91,
    "HD": 43.53634,
    "Angle": 19.9626
  },
  {
    "MD": 426.89,
    "TVD": 420.66,
    "HD": 53.25278,
    "Angle": 21.94135
  },
  {
    "MD": 455.33,
    "TVD": 447.04,
    "HD": 63.87959,
    "Angle": 22.24849
  },
  {
    "MD": 483.94,
    "TVD": 473.52,
    "HD": 74.71203,
    "Angle": 21.82608
  },
  {
    "MD": 511.98,
    "TVD": 499.55,
    "HD": 85.13703,
    "Angle": 21.69472
  },
  {
    "MD": 540.78,
    "TVD": 526.31,
    "HD": 95.78327,
    "Angle": 21.71308
  },
  {
    "MD": 569.25,
    "TVD": 552.76,
    "HD": 106.316,
    "Angle": 21.96091
  },
  {
    "MD": 597.64,
    "TVD": 579.09,
    "HD": 116.9331,
    "Angle": 21.96224
  },
  {
    "MD": 626.44,
    "TVD": 605.8,
    "HD": 127.7042,
    "Angle": 21.70193
  },
  {
    "MD": 655.08,
    "TVD": 632.41,
    "HD": 138.2946,
    "Angle": 21.51873
  },
  {
    "MD": 683.63,
    "TVD": 658.97,
    "HD": 148.7669,
    "Angle": 21.56573
  },
  {
    "MD": 712.2,
    "TVD": 685.54,
    "HD": 159.2684,
    "Angle": 21.53782
  },
  {
    "MD": 740.7,
    "TVD": 712.05,
    "HD": 169.7311,
    "Angle": 21.54666
  },
  {
    "MD": 769.32,
    "TVD": 738.67,
    "HD": 180.2421,
    "Angle": 21.63095
  },
  {
    "MD": 797.72,
    "TVD": 765.07,
    "HD": 190.7111,
    "Angle": 21.59441
  },
  {
    "MD": 826.5,
    "TVD": 791.83,
    "HD": 201.3031,
    "Angle": 21.56573
  },
  {
    "MD": 855.07,
    "TVD": 818.4,
    "HD": 211.8045,
    "Angle": 21.44875
  },
  {
    "MD": 883.66,
    "TVD": 845.01,
    "HD": 222.259,
    "Angle": 21.5111
  },
  {
    "MD": 912.23,
    "TVD": 871.59,
    "HD": 232.7351,
    "Angle": 21.53889
  },
  {
    "MD": 941.3,
    "TVD": 898.63,
    "HD": 243.4076,
    "Angle": 21.46295
  },
  {
    "MD": 969.42,
    "TVD": 924.8,
    "HD": 253.6967,
    "Angle": 21.3486
  },
  {
    "MD": 998.13,
    "TVD": 951.54,
    "HD": 264.1484,
    "Angle": 21.24726
  },
  {
    "MD": 1026.67,
    "TVD": 978.14,
    "HD": 274.4911,
    "Angle": 21.26989
  },
  {
    "MD": 1055.15,
    "TVD": 1004.68,
    "HD": 284.8225,
    "Angle": 21.43213
  },
  {
    "MD": 1083.35,
    "TVD": 1030.93,
    "HD": 295.1268,
    "Angle": 21.51888
  },
  {
    "MD": 1112.33,
    "TVD": 1057.89,
    "HD": 305.7569,
    "Angle": 21.31682
  },
  {
    "MD": 1140.54,
    "TVD": 1084.17,
    "HD": 316.0119,
    "Angle": 21.40526
  },
  {
    "MD": 1168.81,
    "TVD": 1110.49,
    "HD": 326.3294,
    "Angle": 21.51083
  },
  {
    "MD": 1196.95,
    "TVD": 1136.67,
    "HD": 336.6477,
    "Angle": 21.69183
  },
  {
    "MD": 1226.04,
    "TVD": 1163.7,
    "HD": 347.3997,
    "Angle": 21.81387
  },
  {
    "MD": 1254.53,
    "TVD": 1190.15,
    "HD": 357.9864,
    "Angle": 21.51757
  },
  {
    "MD": 1283.37,
    "TVD": 1216.98,
    "HD": 368.5645,
    "Angle": 21.29027
  },
  {
    "MD": 1311.21,
    "TVD": 1242.92,
    "HD": 378.6731,
    "Angle": 21.3344
  },
  {
    "MD": 1339.52,
    "TVD": 1269.29,
    "HD": 388.9725,
    "Angle": 21.46073
  },
  {
    "MD": 1367.79,
    "TVD": 1295.6,
    "HD": 399.3155,
    "Angle": 21.54136
  },
  {
    "MD": 1426.06,
    "TVD": 1349.8,
    "HD": 420.7106,
    "Angle": 21.28373
  },
  {
    "MD": 1454.65,
    "TVD": 1376.44,
    "HD": 431.0884,
    "Angle": 21.23953
  },
  {
    "MD": 1482.18,
    "TVD": 1402.1,
    "HD": 441.0617,
    "Angle": 21.38665
  },
  {
    "MD": 1511.37,
    "TVD": 1429.28,
    "HD": 451.7061,
    "Angle": 21.56573
  },
  {
    "MD": 1539.94,
    "TVD": 1455.85,
    "HD": 462.2075,
    "Angle": 21.54842
  },
  {
    "MD": 1567.84,
    "TVD": 1481.8,
    "HD": 472.4548,
    "Angle": 21.62314
  },
  {
    "MD": 1607.06,
    "TVD": 1518.26,
    "HD": 486.9074,
    "Angle": 21.88654
  },
  {
    "MD": 1629.12,
    "TVD": 1538.73,
    "HD": 495.1307,
    "Angle": 21.76156
  },
  {
    "MD": 1655.36,
    "TVD": 1563.1,
    "HD": 504.8591,
    "Angle": 21.51492
  },
  {
    "MD": 1683.92,
    "TVD": 1589.67,
    "HD": 515.3332,
    "Angle": 21.39767
  },
  {
    "MD": 1712.5,
    "TVD": 1616.28,
    "HD": 525.7603,
    "Angle": 21.38433
  },
  {
    "MD": 1740.97,
    "TVD": 1642.79,
    "HD": 536.1411,
    "Angle": 21.35612
  },
  {
    "MD": 1769.66,
    "TVD": 1669.51,
    "HD": 546.589,
    "Angle": 21.38797
  },
  {
    "MD": 1797.83,
    "TVD": 1695.74,
    "HD": 556.8621,
    "Angle": 21.31108
  },
  {
    "MD": 1826.64,
    "TVD": 1722.58,
    "HD": 567.3325,
    "Angle": 21.37016
  },
  {
    "MD": 1856.02,
    "TVD": 1749.94,
    "HD": 578.0383,
    "Angle": 21.46682
  },
  {
    "MD": 1884.13,
    "TVD": 1776.1,
    "HD": 588.3255,
    "Angle": 21.34386
  },
  {
    "MD": 1913.29,
    "TVD": 1803.26,
    "HD": 598.9387,
    "Angle": 21.28786
  },
  {
    "MD": 1940.55,
    "TVD": 1828.66,
    "HD": 608.8356,
    "Angle": 21.19313
  },
  {
    "MD": 1969.53,
    "TVD": 1855.68,
    "HD": 619.3122,
    "Angle": 21.18047
  },
  {
    "MD": 1997.36,
    "TVD": 1881.63,
    "HD": 629.3674,
    "Angle": 21.2972
  },
  {
    "MD": 2026.5,
    "TVD": 1908.78,
    "HD": 639.9512,
    "Angle": 21.585
  },
  {
    "MD": 2055.59,
    "TVD": 1935.83,
    "HD": 650.6529,
    "Angle": 21.64282
  },
  {
    "MD": 2083.25,
    "TVD": 1961.54,
    "HD": 660.8544,
    "Angle": 21.4769
  },
  {
    "MD": 2111.91,
    "TVD": 1988.21,
    "HD": 671.3476,
    "Angle": 21.2991
  },
  {
    "MD": 2140.02,
    "TVD": 2014.4,
    "HD": 681.5582,
    "Angle": 21.29481
  },
  {
    "MD": 2169.02,
    "TVD": 2041.42,
    "HD": 692.09,
    "Angle": 21.30873
  },
  {
    "MD": 2197.69,
    "TVD": 2068.13,
    "HD": 702.5085,
    "Angle": 21.30636
  },
  {
    "MD": 2226.22,
    "TVD": 2094.71,
    "HD": 712.875,
    "Angle": 21.34804
  },
  {
    "MD": 2254.64,
    "TVD": 2121.18,
    "HD": 723.2208,
    "Angle": 21.24349
  },
  {
    "MD": 2283.19,
    "TVD": 2147.79,
    "HD": 733.5654,
    "Angle": 21.26611
  },
  {
    "MD": 2311.68,
    "TVD": 2174.34,
    "HD": 743.8987,
    "Angle": 21.49588
  },
  {
    "MD": 2340.29,
    "TVD": 2200.96,
    "HD": 754.3824,
    "Angle": 21.62104
  },
  {
    "MD": 2369.0,
    "TVD": 2227.65,
    "HD": 764.9611,
    "Angle": 21.62244
  },
  {
    "MD": 2397.28,
    "TVD": 2253.94,
    "HD": 775.3819,
    "Angle": 21.66247
  },
  {
    "MD": 2425.74,
    "TVD": 2280.39,
    "HD": 785.8876,
    "Angle": 21.57511
  },
  {
    "MD": 2447.72,
    "TVD": 2300.83,
    "HD": 793.9701,
    "Angle": 21.57337
  },
  {
    "MD": 2453.43,
    "TVD": 2306.14,
    "HD": 796.0696,
    "Angle": 21.51057
  },
  {
    "MD": 2483.15,
    "TVD": 2333.79,
    "HD": 806.9671,
    "Angle": 21.42648
  },
  {
    "MD": 2511.22,
    "TVD": 2359.92,
    "HD": 817.2213,
    "Angle": 21.46554
  },
  {
    "MD": 2539.91,
    "TVD": 2386.62,
    "HD": 827.7202,
    "Angle": 21.45524
  },
  {
    "MD": 2549.29,
    "TVD": 2395.35,
    "HD": 831.1511,
    "Angle": 20.46416
  },
  {
    "MD": 2594.45,
    "TVD": 2437.66,
    "HD": 846.94,
    "Angle": 18.34288
  },
  {
    "MD": 2625.94,
    "TVD": 2467.55,
    "HD": 856.85,
    "Angle": 16.69364
  },
  {
    "MD": 2641.6,
    "TVD": 2482.55,
    "HD": 861.3484,
    "Angle": 15.73348
  },
  {
    "MD": 2664.02,
    "TVD": 2504.13,
    "HD": 867.4279,
    "Angle": 0.0
  }
];

const casingData = [
  { section: "Casing", size: '30"',      fromMD: 0,      toMD: 376.34, ID: 18.73,  OD: 20,    roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',  fromMD: 0,      toMD: 1920.34, ID: 12.347, OD: 13.375,roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',   fromMD: 0,      toMD: 3554.22, ID: 8.681,  OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',      fromMD: 3383.34, toMD: 3914.34, ID: 6.184,  OD: 7,     roughness: 0.001 }
];

const tubingData = [
  { toMD: 3598.46, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV',   type: 'SSSV', MD: 161.5,  enabled: true },
  { name: 'Packer', type: 'Pk',   MD: 3560.43, enabled: true },
  { name: 'Choke',  type: 'LN',   MD: 3563.93, enabled: true },
  { name: 'NA',     type: 'NA',   MD: 3628.84, enabled: true }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3628.84,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 163.9668,
  temperature: 107,
  c: 1.30e-5,
  n: 0.8,
  OGR: '98.235 sm3/mmsm3',
  WGR: '114 sm3/mmsm3',
  soilTempC: 30,
  chokeGasCoef: null, 
  WTDate: "2024-04-03"   
};


function B12151() {
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

export default B12151
