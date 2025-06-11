import React from 'react'


const trajectoryData = [
  {
    "MD": 0.0,
    "TVD": 0.0,
    "HD": 0.0,
    "Angle": 0.0
  },
  {
    "MD": 78.84,
    "TVD": 78.84,
    "HD": 0.0,
    "Angle": 1.046088
  },
  {
    "MD": 138.84,
    "TVD": 138.83,
    "HD": 1.095399,
    "Angle": 3.094809
  },
  {
    "MD": 179.98,
    "TVD": 179.91,
    "HD": 3.31648,
    "Angle": 4.780919
  },
  {
    "MD": 228.84,
    "TVD": 228.6,
    "HD": 7.388765,
    "Angle": 5.895688
  },
  {
    "MD": 262.87,
    "TVD": 262.45,
    "HD": 10.88425,
    "Angle": 9.135858
  },
  {
    "MD": 318.84,
    "TVD": 317.71,
    "HD": 19.77094,
    "Angle": 12.31225
  },
  {
    "MD": 348.84,
    "TVD": 347.02,
    "HD": 26.16812,
    "Angle": 15.64679
  },
  {
    "MD": 385.27,
    "TVD": 382.1,
    "HD": 35.99352,
    "Angle": 20.06037
  },
  {
    "MD": 438.84,
    "TVD": 432.42,
    "HD": 54.36857,
    "Angle": 22.23084
  },
  {
    "MD": 470.32,
    "TVD": 461.56,
    "HD": 66.27868,
    "Angle": 24.22874
  },
  {
    "MD": 527.31,
    "TVD": 513.53,
    "HD": 89.66627,
    "Angle": 27.47622
  },
  {
    "MD": 560.91,
    "TVD": 543.34,
    "HD": 105.1687,
    "Angle": 30.77977
  },
  {
    "MD": 610.25,
    "TVD": 585.73,
    "HD": 130.4179,
    "Angle": 32.90254
  },
  {
    "MD": 648.84,
    "TVD": 618.13,
    "HD": 151.3804,
    "Angle": 36.43381
  },
  {
    "MD": 695.5,
    "TVD": 655.67,
    "HD": 179.0915,
    "Angle": 40.5122
  },
  {
    "MD": 738.84,
    "TVD": 688.62,
    "HD": 207.2456,
    "Angle": 44.24647
  },
  {
    "MD": 779.77,
    "TVD": 717.94,
    "HD": 235.8044,
    "Angle": 48.22623
  },
  {
    "MD": 828.84,
    "TVD": 750.63,
    "HD": 272.3998,
    "Angle": 52.07141
  },
  {
    "MD": 864.81,
    "TVD": 772.74,
    "HD": 300.7722,
    "Angle": 56.08079
  },
  {
    "MD": 918.84,
    "TVD": 802.89,
    "HD": 345.6076,
    "Angle": 59.31396
  },
  {
    "MD": 948.84,
    "TVD": 818.2,
    "HD": 371.4069,
    "Angle": 60.53703
  },
  {
    "MD": 1002.9,
    "TVD": 844.79,
    "HD": 418.4755,
    "Angle": 60.53242
  },
  {
    "MD": 1038.84,
    "TVD": 862.47,
    "HD": 449.7661,
    "Angle": 60.52749
  },
  {
    "MD": 1085.75,
    "TVD": 885.55,
    "HD": 490.6056,
    "Angle": 60.52831
  },
  {
    "MD": 1128.84,
    "TVD": 906.75,
    "HD": 528.1197,
    "Angle": 60.56431
  },
  {
    "MD": 1173.85,
    "TVD": 928.87,
    "HD": 567.3193,
    "Angle": 60.54994
  },
  {
    "MD": 1218.84,
    "TVD": 950.99,
    "HD": 606.4959,
    "Angle": 60.37492
  },
  {
    "MD": 1258.47,
    "TVD": 970.58,
    "HD": 640.9454,
    "Angle": 60.39981
  },
  {
    "MD": 1308.84,
    "TVD": 995.46,
    "HD": 684.7417,
    "Angle": 60.4065
  },
  {
    "MD": 1339.7,
    "TVD": 1010.7,
    "HD": 711.5761,
    "Angle": 60.4242
  },
  {
    "MD": 1398.84,
    "TVD": 1039.89,
    "HD": 763.0104,
    "Angle": 60.33887
  },
  {
    "MD": 1429.05,
    "TVD": 1054.84,
    "HD": 789.2619,
    "Angle": 60.06708
  },
  {
    "MD": 1483.28,
    "TVD": 1081.9,
    "HD": 836.2581,
    "Angle": 59.94417
  },
  {
    "MD": 1518.84,
    "TVD": 1099.71,
    "HD": 867.0367,
    "Angle": 59.94312
  },
  {
    "MD": 1565.38,
    "TVD": 1123.02,
    "HD": 907.3184,
    "Angle": 59.96955
  },
  {
    "MD": 1608.84,
    "TVD": 1144.77,
    "HD": 944.9443,
    "Angle": 59.90655
  },
  {
    "MD": 1651.34,
    "TVD": 1166.08,
    "HD": 981.7156,
    "Angle": 59.90245
  },
  {
    "MD": 1698.84,
    "TVD": 1189.9,
    "HD": 1022.811,
    "Angle": 59.88342
  },
  {
    "MD": 1735.75,
    "TVD": 1208.42,
    "HD": 1054.739,
    "Angle": 59.81914
  },
  {
    "MD": 1788.84,
    "TVD": 1235.11,
    "HD": 1100.632,
    "Angle": 59.9287
  },
  {
    "MD": 1821.33,
    "TVD": 1251.39,
    "HD": 1128.749,
    "Angle": 59.94205
  },
  {
    "MD": 1878.43,
    "TVD": 1279.99,
    "HD": 1178.17,
    "Angle": 59.88027
  },
  {
    "MD": 1908.84,
    "TVD": 1295.25,
    "HD": 1204.474,
    "Angle": 59.76884
  },
  {
    "MD": 1961.85,
    "TVD": 1321.94,
    "HD": 1250.275,
    "Angle": 59.77617
  },
  {
    "MD": 1998.84,
    "TVD": 1340.56,
    "HD": 1282.237,
    "Angle": 59.73802
  },
  {
    "MD": 2048.15,
    "TVD": 1365.41,
    "HD": 1324.827,
    "Angle": 59.76396
  },
  {
    "MD": 2088.84,
    "TVD": 1385.9,
    "HD": 1359.982,
    "Angle": 59.67478
  },
  {
    "MD": 2132.65,
    "TVD": 1408.02,
    "HD": 1397.797,
    "Angle": 59.77774
  },
  {
    "MD": 2178.84,
    "TVD": 1431.27,
    "HD": 1437.709,
    "Angle": 59.7893
  },
  {
    "MD": 2216.56,
    "TVD": 1450.25,
    "HD": 1470.306,
    "Angle": 59.78463
  },
  {
    "MD": 2268.84,
    "TVD": 1476.56,
    "HD": 1515.483,
    "Angle": 59.71935
  },
  {
    "MD": 2300.71,
    "TVD": 1492.63,
    "HD": 1543.005,
    "Angle": 59.80449
  },
  {
    "MD": 2356.6,
    "TVD": 1520.74,
    "HD": 1591.312,
    "Angle": 59.75344
  },
  {
    "MD": 2388.84,
    "TVD": 1536.98,
    "HD": 1619.163,
    "Angle": 59.77107
  },
  {
    "MD": 2440.92,
    "TVD": 1563.2,
    "HD": 1664.161,
    "Angle": 59.8079
  },
  {
    "MD": 2478.84,
    "TVD": 1582.27,
    "HD": 1696.937,
    "Angle": 59.82489
  },
  {
    "MD": 2526.11,
    "TVD": 1606.03,
    "HD": 1737.801,
    "Angle": 59.72867
  },
  {
    "MD": 2568.84,
    "TVD": 1627.57,
    "HD": 1774.705,
    "Angle": 59.71469
  },
  {
    "MD": 2610.64,
    "TVD": 1648.65,
    "HD": 1810.8,
    "Angle": 59.80765
  },
  {
    "MD": 2658.84,
    "TVD": 1672.89,
    "HD": 1852.462,
    "Angle": 59.76995
  },
  {
    "MD": 2694.83,
    "TVD": 1691.01,
    "HD": 1883.557,
    "Angle": 59.69943
  },
  {
    "MD": 2748.84,
    "TVD": 1718.26,
    "HD": 1930.189,
    "Angle": 59.72768
  },
  {
    "MD": 2779.25,
    "TVD": 1733.59,
    "HD": 1956.452,
    "Angle": 59.75353
  },
  {
    "MD": 2835.69,
    "TVD": 1762.02,
    "HD": 2005.209,
    "Angle": 59.71019
  },
  {
    "MD": 2868.84,
    "TVD": 1778.74,
    "HD": 2033.833,
    "Angle": 59.70923
  },
  {
    "MD": 2920.11,
    "TVD": 1804.6,
    "HD": 2078.104,
    "Angle": 59.73487
  },
  {
    "MD": 2958.84,
    "TVD": 1824.12,
    "HD": 2111.555,
    "Angle": 59.75309
  },
  {
    "MD": 3005.79,
    "TVD": 1847.77,
    "HD": 2152.113,
    "Angle": 59.69987
  },
  {
    "MD": 3048.84,
    "TVD": 1869.49,
    "HD": 2189.283,
    "Angle": 59.68857
  },
  {
    "MD": 3090.33,
    "TVD": 1890.43,
    "HD": 2225.101,
    "Angle": 59.77471
  },
  {
    "MD": 3138.84,
    "TVD": 1914.85,
    "HD": 2267.016,
    "Angle": 59.94353
  },
  {
    "MD": 3174.0,
    "TVD": 1932.46,
    "HD": 2297.448,
    "Angle": 59.97587
  },
  {
    "MD": 3228.84,
    "TVD": 1959.9,
    "HD": 2344.929,
    "Angle": 59.95588
  },
  {
    "MD": 3258.84,
    "TVD": 1974.92,
    "HD": 2370.898,
    "Angle": 59.75221
  },
  {
    "MD": 3314.98,
    "TVD": 2003.2,
    "HD": 2419.395,
    "Angle": 59.45138
  },
  {
    "MD": 3348.84,
    "TVD": 2020.41,
    "HD": 2448.555,
    "Angle": 59.43662
  },
  {
    "MD": 3400.07,
    "TVD": 2046.46,
    "HD": 2492.668,
    "Angle": 59.70092
  },
  {
    "MD": 3438.84,
    "TVD": 2066.02,
    "HD": 2526.142,
    "Angle": 59.90445
  },
  {
    "MD": 3483.87,
    "TVD": 2088.6,
    "HD": 2565.102,
    "Angle": 59.93377
  },
  {
    "MD": 3528.84,
    "TVD": 2111.13,
    "HD": 2604.021,
    "Angle": 59.90982
  },
  {
    "MD": 3580.22,
    "TVD": 2136.89,
    "HD": 2648.477,
    "Angle": 59.80715
  },
  {
    "MD": 3664.35,
    "TVD": 2179.2,
    "HD": 2721.193,
    "Angle": 59.81825
  },
  {
    "MD": 3748.15,
    "TVD": 2221.33,
    "HD": 2793.633,
    "Angle": 59.71084
  },
  {
    "MD": 3832.93,
    "TVD": 2264.09,
    "HD": 2866.84,
    "Angle": 59.79632
  },
  {
    "MD": 3917.47,
    "TVD": 2306.62,
    "HD": 2939.903,
    "Angle": 59.80314
  },
  {
    "MD": 3976.34,
    "TVD": 2336.23,
    "HD": 2990.784,
    "Angle": 0.0
  }
];

const casingData = [
  { section: "Casing", size: '30"',      fromMD: 0,      toMD: 376.34,   ID: 18.73, OD: 20,    roughness: 0.001 },
  { section: "Casing", size: '13 3/8"',  fromMD: 0,      toMD: 1920.34,  ID: 12.347, OD: 13.375,roughness: 0.001 },
  { section: "Casing", size: '9 5/8"',   fromMD: 0,      toMD: 3554.22,  ID: 8.681,  OD: 9.625, roughness: 0.001 },
  { section: "Liner",   size: '7"',      fromMD: 3383.34, toMD: 3914.34, ID: 6.184,  OD: 7,     roughness: 0.001 }
];

const tubingData = [
  { toMD: 3598.46, ID: 2.992, OD: 3.5, roughness: 0.001 }
];

const equipmentData = [
  { name: 'SSSV',   type: 'SSSV', MD: 161.5 },
  { name: 'Packer', type: 'Pk',   MD: 3560.43 },
  { name: 'Choke',  type: 'LN',   MD: 3563.93 },
  { name: 'NA',     type: 'NA',   MD: 3628.84 }
];

const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3628.84,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 163.9668,  // Increased because no solution at 146 ksc
  temperature: 107,
  c: 1.30e-5,
  n: 0.8,
  OGR: '98.235 sm3/mmsm3',
  WGR: '114 sm3/mmsm3',
  soilTempC: 30,               // °C
  chokeGasCoef: null,          // Not specified
  WTDate: "2024-04-03"  
};



function C261() {
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

export default C261
