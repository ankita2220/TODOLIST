import React from 'react'


const trajectoryData = [
    {
        "MD": 0,
        "TVD": 0,
        "HD": 0,
        "Angle": 0.8061902
    },
    {
        "MD": 101.02,
        "TVD": 101.01,
        "HD": 1.421373,
        "Angle": 0
    },
    {
        "MD": 214.49,
        "TVD": 214.48,
        "HD": 1.421373,
        "Angle": 0
    },
    {
        "MD": 329.68,
        "TVD": 329.67,
        "HD": 1.421373,
        "Angle": 1.068355
    },
    {
        "MD": 444.73,
        "TVD": 444.7,
        "HD": 3.566507,
        "Angle": 3.084679
    },
    {
        "MD": 562.06,
        "TVD": 561.86,
        "HD": 9.880246,
        "Angle": 8.947181
    },
    {
        "MD": 682.87,
        "TVD": 681.2,
        "HD": 28.66909,
        "Angle": 16.83523
    },
    {
        "MD": 797.2,
        "TVD": 790.63,
        "HD": 61.78138,
        "Angle": 26.57669
    },
    {
        "MD": 912.85,
        "TVD": 894.06,
        "HD": 113.5226,
        "Angle": 37.51368
    },
    {
        "MD": 1028.28,
        "TVD": 985.62,
        "HD": 183.8138,
        "Angle": 46.72616
    },
    {
        "MD": 1143.41,
        "TVD": 1064.54,
        "HD": 267.6383,
        "Angle": 55.80279
    },
    {
        "MD": 1258.33,
        "TVD": 1129.13,
        "HD": 362.6896,
        "Angle": 59.8275
    },
    {
        "MD": 1373.49,
        "TVD": 1187.01,
        "HD": 462.2473,
        "Angle": 59.93116
    },
    {
        "MD": 1488.85,
        "TVD": 1244.81,
        "HD": 562.0826,
        "Angle": 59.90189
    },
    {
        "MD": 1603.55,
        "TVD": 1302.33,
        "HD": 661.3173,
        "Angle": 60.0314
    },
    {
        "MD": 1719.42,
        "TVD": 1360.21,
        "HD": 761.6954,
        "Angle": 59.99132
    },
    {
        "MD": 1833.81,
        "TVD": 1417.42,
        "HD": 860.7514,
        "Angle": 59.85699
    },
    {
        "MD": 1949.55,
        "TVD": 1475.54,
        "HD": 960.8405,
        "Angle": 59.95476
    },
    {
        "MD": 2037.31,
        "TVD": 1519.48,
        "HD": 1036.808,
        "Angle": 60.0057
    },
    {
        "MD": 2153.41,
        "TVD": 1577.52,
        "HD": 1137.359,
        "Angle": 59.90225
    },
    {
        "MD": 2268.53,
        "TVD": 1635.25,
        "HD": 1236.958,
        "Angle": 59.97684
    },
    {
        "MD": 2382.81,
        "TVD": 1692.43,
        "HD": 1335.904,
        "Angle": 59.97997
    },
    {
        "MD": 2498.42,
        "TVD": 1750.27,
        "HD": 1436.005,
        "Angle": 59.89689
    },
    {
        "MD": 2613.98,
        "TVD": 1808.23,
        "HD": 1535.979,
        "Angle": 60.11303
    },
    {
        "MD": 2728.05,
        "TVD": 1865.07,
        "HD": 1634.879,
        "Angle": 59.96669
    },
    {
        "MD": 2847.25,
        "TVD": 1924.73,
        "HD": 1738.074,
        "Angle": 59.81125
    },
    {
        "MD": 2963.03,
        "TVD": 1982.95,
        "HD": 1838.152,
        "Angle": 60.0115
    },
    {
        "MD": 3078.09,
        "TVD": 2040.46,
        "HD": 1937.808,
        "Angle": 60.03156
    },
    {
        "MD": 3193.36,
        "TVD": 2098.04,
        "HD": 2037.667,
        "Angle": 59.94512
    },
    {
        "MD": 3307.91,
        "TVD": 2155.41,
        "HD": 2136.815,
        "Angle": 59.7816
    },
    {
        "MD": 3423.15,
        "TVD": 2213.41,
        "HD": 2236.395,
        "Angle": 60.03421
    },
    {
        "MD": 3539.15,
        "TVD": 2271.35,
        "HD": 2336.889,
        "Angle": 60.37809
    },
    {
        "MD": 3619.49,
        "TVD": 2311.06,
        "HD": 2406.729,
        "Angle": 59.79914
    },
    {
        "MD": 3734.89,
        "TVD": 2369.11,
        "HD": 2506.465,
        "Angle": 59.853
    },
    {
        "MD": 3849.74,
        "TVD": 2426.79,
        "HD": 2605.781,
        "Angle": 60.19589
    },
    {
        "MD": 3964.46,
        "TVD": 2483.81,
        "HD": 2705.327,
        "Angle": 59.63506
    },
    {
        "MD": 3993.52,
        "TVD": 2498.5,
        "HD": 2730.4,
        "Angle": 59.66237
    },
    {
        "MD": 4007.26,
        "TVD": 2505.44,
        "HD": 2742.259,
        "Angle": 59.92513
    },
    {
        "MD": 4016.1,
        "TVD": 2509.87,
        "HD": 2749.909,
        "Angle": 0
    }
];

const casingData = [
  { section: "Casing", size: '30"',       fromMD: 0,      toMD: 122.1,   ID: 28,     OD: 30,    roughness: 0.001 },
  { section: "Casing", size: '20"',       fromMD: 0,      toMD: 482.1,   ID: 18.73,  OD: 20,    roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',   fromMD: 0,      toMD: 1678.1,  ID: 12.347, OD: 13.375,roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',    fromMD: 0,      toMD: 2293.1,  ID: 8.681,  OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',       fromMD: 2160.1, toMD: 2587.1,  ID: 6.184,  OD: 7,     roughness: 0.001 }
];

const tubingData = [
  { toMD: 2463.1, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV 5',   type: 'SSSV',  MD: 158.086, enabled: true },
  { name: 'Packer 6', type: 'Pk 6',  MD: 2434.1,  enabled: true },
  { name: 'NA',       type: 'NA',    MD: 2470.1,  enabled: true }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 2470.1,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 153.9668, // pressure raised from 133 ksc
  temperature: 107,
  c: 3.95e-6,
  n: 0.8,
  OGR: '53 sm3/mmsm3',
  WGR: '35 sm3/mmsm3',
  soilTempC: 30,
  chokeGasCoef: null,
  WTDate: "2024-04-03"
};

// const notes = `
//   • No solution at 133 ksc; reservoir pressure increased to 155 ksc due to high flowing wellhead pressure and mismatched rates.
//   • Well test conducted on 3 April 2024.
// `;

function C266() {
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

export default C266
