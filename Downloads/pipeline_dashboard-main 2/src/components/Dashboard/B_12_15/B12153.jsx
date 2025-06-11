import React from 'react'


const trajectoryData = [
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 0
    },
    {
        "MD": 20.63,
        "TVD": 20.63,
        "HD": 0,
        "Angle": 1.885794
    },
    {
        "MD": 112.95,
        "TVD": 112.9,
        "HD": 3.038009,
        "Angle": 2.704708
    },
    {
        "MD": 139.88,
        "TVD": 139.8,
        "HD": 4.308796,
        "Angle": 2.153434
    },
    {
        "MD": 168.2,
        "TVD": 168.1,
        "HD": 5.372939,
        "Angle": 3.048827
    },
    {
        "MD": 196.46,
        "TVD": 196.32,
        "HD": 6.876003,
        "Angle": 3.718494
    },
    {
        "MD": 224.96,
        "TVD": 224.76,
        "HD": 8.724353,
        "Angle": 4.940254
    },
    {
        "MD": 254.57,
        "TVD": 254.26,
        "HD": 11.27427,
        "Angle": 6.604565
    },
    {
        "MD": 283.2,
        "TVD": 282.7,
        "HD": 14.56719,
        "Angle": 9.027977
    },
    {
        "MD": 312.26,
        "TVD": 311.4,
        "HD": 19.12719,
        "Angle": 11.99236
    },
    {
        "MD": 340.21,
        "TVD": 338.74,
        "HD": 24.93468,
        "Angle": 15.16775
    },
    {
        "MD": 369.49,
        "TVD": 367,
        "HD": 32.59567,
        "Angle": 17.94813
    },
    {
        "MD": 400.93,
        "TVD": 396.91,
        "HD": 42.28409,
        "Angle": 20.62638
    },
    {
        "MD": 430.57,
        "TVD": 424.65,
        "HD": 52.72545,
        "Angle": 23.72841
    },
    {
        "MD": 458.96,
        "TVD": 450.64,
        "HD": 64.14964,
        "Angle": 25.6045
    },
    {
        "MD": 486.76,
        "TVD": 475.71,
        "HD": 76.16359,
        "Angle": 25.74528
    },
    {
        "MD": 515.37,
        "TVD": 501.48,
        "HD": 88.59095,
        "Angle": 25.49322
    },
    {
        "MD": 543.82,
        "TVD": 527.16,
        "HD": 100.836,
        "Angle": 25.5674
    },
    {
        "MD": 572.21,
        "TVD": 552.77,
        "HD": 113.0883,
        "Angle": 25.78176
    },
    {
        "MD": 600.64,
        "TVD": 578.37,
        "HD": 125.4538,
        "Angle": 25.58944
    },
    {
        "MD": 628.88,
        "TVD": 603.84,
        "HD": 137.6512,
        "Angle": 25.54104
    },
    {
        "MD": 657.43,
        "TVD": 629.6,
        "HD": 149.9607,
        "Angle": 25.54348
    },
    {
        "MD": 685.77,
        "TVD": 655.17,
        "HD": 162.1808,
        "Angle": 25.57124
    },
    {
        "MD": 714.56,
        "TVD": 681.14,
        "HD": 174.6075,
        "Angle": 25.57388
    },
    {
        "MD": 743.14,
        "TVD": 706.92,
        "HD": 186.9448,
        "Angle": 25.51831
    },
    {
        "MD": 771.33,
        "TVD": 732.36,
        "HD": 199.089,
        "Angle": 25.48337
    },
    {
        "MD": 800.11,
        "TVD": 758.34,
        "HD": 211.4716,
        "Angle": 25.45412
    },
    {
        "MD": 828.44,
        "TVD": 783.92,
        "HD": 223.6475,
        "Angle": 25.49809
    },
    {
        "MD": 857.29,
        "TVD": 809.96,
        "HD": 236.0669,
        "Angle": 25.52291
    },
    {
        "MD": 885.47,
        "TVD": 835.39,
        "HD": 248.2088,
        "Angle": 25.51042
    },
    {
        "MD": 914.19,
        "TVD": 861.31,
        "HD": 260.5778,
        "Angle": 25.50808
    },
    {
        "MD": 942.71,
        "TVD": 887.05,
        "HD": 272.8596,
        "Angle": 25.54177
    },
    {
        "MD": 971.77,
        "TVD": 913.27,
        "HD": 285.3894,
        "Angle": 25.48867
    },
    {
        "MD": 1000.23,
        "TVD": 938.96,
        "HD": 297.6367,
        "Angle": 25.45055
    },
    {
        "MD": 1028.98,
        "TVD": 964.92,
        "HD": 309.9915,
        "Angle": 25.43442
    },
    {
        "MD": 1057.25,
        "TVD": 990.45,
        "HD": 322.1328,
        "Angle": 25.48663
    },
    {
        "MD": 1085.92,
        "TVD": 1016.33,
        "HD": 334.4695,
        "Angle": 25.47631
    },
    {
        "MD": 1114.51,
        "TVD": 1042.14,
        "HD": 346.7672,
        "Angle": 25.51147
    },
    {
        "MD": 1142.92,
        "TVD": 1067.78,
        "HD": 359.0031,
        "Angle": 25.43276
    },
    {
        "MD": 1171.4,
        "TVD": 1093.5,
        "HD": 371.2339,
        "Angle": 25.37682
    },
    {
        "MD": 1199.9,
        "TVD": 1119.25,
        "HD": 383.4481,
        "Angle": 25.36964
    },
    {
        "MD": 1227.69,
        "TVD": 1144.36,
        "HD": 395.3549,
        "Angle": 25.45191
    },
    {
        "MD": 1256.54,
        "TVD": 1170.41,
        "HD": 407.7533,
        "Angle": 25.38908
    },
    {
        "MD": 1285.22,
        "TVD": 1196.32,
        "HD": 420.0502,
        "Angle": 25.42822
    },
    {
        "MD": 1313.71,
        "TVD": 1222.05,
        "HD": 432.2833,
        "Angle": 25.31107
    },
    {
        "MD": 1342.46,
        "TVD": 1248.04,
        "HD": 444.5748,
        "Angle": 25.3442
    },
    {
        "MD": 1371.24,
        "TVD": 1274.05,
        "HD": 456.8943,
        "Angle": 25.39041
    },
    {
        "MD": 1399.71,
        "TVD": 1299.77,
        "HD": 469.1017,
        "Angle": 25.43276
    },
    {
        "MD": 1428.19,
        "TVD": 1325.49,
        "HD": 481.3325,
        "Angle": 25.26317
    },
    {
        "MD": 1456.42,
        "TVD": 1351.02,
        "HD": 493.3804,
        "Angle": 25.24211
    },
    {
        "MD": 1485.22,
        "TVD": 1377.07,
        "HD": 505.662,
        "Angle": 25.32717
    },
    {
        "MD": 1513.83,
        "TVD": 1402.93,
        "HD": 517.901,
        "Angle": 25.29702
    },
    {
        "MD": 1542.09,
        "TVD": 1428.48,
        "HD": 529.9768,
        "Angle": 25.34148
    },
    {
        "MD": 1570.98,
        "TVD": 1454.59,
        "HD": 542.3421,
        "Angle": 25.3555
    },
    {
        "MD": 1600.15,
        "TVD": 1480.95,
        "HD": 554.8336,
        "Angle": 25.31346
    },
    {
        "MD": 1653.89,
        "TVD": 1529.53,
        "HD": 577.8113,
        "Angle": 25.28931
    },
    {
        "MD": 1682.48,
        "TVD": 1555.38,
        "HD": 590.0246,
        "Angle": 25.14527
    },
    {
        "MD": 1710.76,
        "TVD": 1580.98,
        "HD": 602.0412,
        "Angle": 24.94292
    },
    {
        "MD": 1738.85,
        "TVD": 1606.45,
        "HD": 613.8872,
        "Angle": 24.86025
    },
    {
        "MD": 1767.34,
        "TVD": 1632.3,
        "HD": 625.8645,
        "Angle": 25.08942
    },
    {
        "MD": 1795.85,
        "TVD": 1658.12,
        "HD": 637.9537,
        "Angle": 25.01969
    },
    {
        "MD": 1824.41,
        "TVD": 1684,
        "HD": 650.0326,
        "Angle": 24.79708
    },
    {
        "MD": 1851.85,
        "TVD": 1708.91,
        "HD": 661.5411,
        "Angle": 24.79673
    },
    {
        "MD": 1881.46,
        "TVD": 1735.79,
        "HD": 673.9595,
        "Angle": 24.83171
    },
    {
        "MD": 1909.69,
        "TVD": 1761.41,
        "HD": 685.8148,
        "Angle": 24.90037
    },
    {
        "MD": 1938.52,
        "TVD": 1787.56,
        "HD": 697.9535,
        "Angle": 24.90392
    },
    {
        "MD": 1968.74,
        "TVD": 1814.97,
        "HD": 710.679,
        "Angle": 24.96686
    },
    {
        "MD": 1996.67,
        "TVD": 1840.29,
        "HD": 722.4681,
        "Angle": 25.06263
    },
    {
        "MD": 2025.24,
        "TVD": 1866.17,
        "HD": 734.5706,
        "Angle": 25.0472
    },
    {
        "MD": 2054.27,
        "TVD": 1892.47,
        "HD": 746.8609,
        "Angle": 25.07328
    },
    {
        "MD": 2082.71,
        "TVD": 1918.23,
        "HD": 758.9131,
        "Angle": 25.04443
    },
    {
        "MD": 2110.47,
        "TVD": 1943.38,
        "HD": 770.6645,
        "Angle": 25.04198
    },
    {
        "MD": 2138.98,
        "TVD": 1969.21,
        "HD": 782.7323,
        "Angle": 25.01676
    },
    {
        "MD": 2167.44,
        "TVD": 1995,
        "HD": 794.7675,
        "Angle": 25.02123
    },
    {
        "MD": 2195.89,
        "TVD": 2020.78,
        "HD": 806.8006,
        "Angle": 25.05321
    },
    {
        "MD": 2224.8,
        "TVD": 2046.97,
        "HD": 819.0428,
        "Angle": 25.06844
    },
    {
        "MD": 2252.72,
        "TVD": 2072.26,
        "HD": 830.8725,
        "Angle": 25.07354
    },
    {
        "MD": 2281.69,
        "TVD": 2098.5,
        "HD": 843.1495,
        "Angle": 24.98696
    },
    {
        "MD": 2310.11,
        "TVD": 2124.26,
        "HD": 855.1544,
        "Angle": 25.04808
    },
    {
        "MD": 2338.5,
        "TVD": 2149.98,
        "HD": 867.1741,
        "Angle": 25.07354
    },
    {
        "MD": 2367.47,
        "TVD": 2176.22,
        "HD": 879.4511,
        "Angle": 25.08763
    },
    {
        "MD": 2396.09,
        "TVD": 2202.14,
        "HD": 891.5861,
        "Angle": 25.08942
    },
    {
        "MD": 2424.6,
        "TVD": 2227.96,
        "HD": 903.6752,
        "Angle": 25.14125
    },
    {
        "MD": 2453.1,
        "TVD": 2253.76,
        "HD": 915.7835,
        "Angle": 25.09688
    },
    {
        "MD": 2480.64,
        "TVD": 2278.7,
        "HD": 927.4646,
        "Angle": 25.01931
    },
    {
        "MD": 2510.16,
        "TVD": 2305.45,
        "HD": 939.9493,
        "Angle": 25.11887
    },
    {
        "MD": 2538.71,
        "TVD": 2331.3,
        "HD": 952.0687,
        "Angle": 25.13677
    },
    {
        "MD": 2567.22,
        "TVD": 2357.11,
        "HD": 964.1792,
        "Angle": 25.10993
    },
    {
        "MD": 2595.79,
        "TVD": 2382.98,
        "HD": 976.3031,
        "Angle": 25.03065
    },
    {
        "MD": 2608.78,
        "TVD": 2394.75,
        "HD": 981.7992,
        "Angle": 24.93182
    },
    {
        "MD": 2653.42,
        "TVD": 2435.23,
        "HD": 1000.617,
        "Angle": 24.79294
    },
    {
        "MD": 2681.52,
        "TVD": 2460.74,
        "HD": 1012.4,
        "Angle": 24.9058
    },
    {
        "MD": 2709.8,
        "TVD": 2486.39,
        "HD": 1024.31,
        "Angle": 25.06216
    },
    {
        "MD": 2737.84,
        "TVD": 2511.79,
        "HD": 1036.187,
        "Angle": 25.06807
    },
    {
        "MD": 2756.1,
        "TVD": 2528.33,
        "HD": 1043.924,
        "Angle": 25.01522
    },
    {
        "MD": 2779.02,
        "TVD": 2549.1,
        "HD": 1053.616,
        "Angle": 0
    }
];

const casingData = [
  { section: "Casing", size: '30"', fromMD: 0, toMD: 109.02, ID: 28, OD: 30, roughness: 0.001 },
  { section: "Casing", size: '20"', fromMD: 0, toMD: 385.05, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: "Casing", size: '13 3/8"', fromMD: 0, toMD: 1622.02, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: "Casing", size: '9 5/8"', fromMD: 0, toMD: 2623.02, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: "Liner", size: '7"', fromMD: 2482.02, toMD: 2778.36, ID: 6.184, OD: 7, roughness: 0.001 }
];

const tubingData = [
  { toMD: 2625.12, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV', type: 'SSSV', MD: 156.54 },
  { name: 'Packer', type: 'Pk', MD: 2620.4 },
  { name: 'NA', type: 'NA', MD: 2655.77 }
];

const reservoirData = {
  name: 'S-40PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2655.77,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 129.9668,
  temperature: 107,
  c: 1.52e-6,
  n: 0.8,
  OGR: '103 sm3/mmsm3',
  WGR: '95.44792 sm3/mmsm3'
};

// const notes = `
//   Soil temp: 30 °C.
//   Well test: July 7, 2024.
// `;

function B12153() {
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

export default B12153
