import React from 'react'


const trajectoryData = [
  { "MD": 0, "TVD": 0, "Horizontal_distance": 0, "Angle": 0 },
  { "MD": 22.63, "TVD": 22.63, "Horizontal_distance": 0, "Angle": 0 },
  { "MD": 50.01, "TVD": 50.01, "Horizontal_distance": 0, "Angle": 0 },
  { "MD": 79.22, "TVD": 79.22, "Horizontal_distance": 0, "Angle": 1.507827 },
  { "MD": 108.1, "TVD": 108.09, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 137.02, "TVD": 137.01, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 165.92, "TVD": 165.91, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 194.81, "TVD": 194.8, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 223.72, "TVD": 223.71, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 238.88, "TVD": 238.87, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 249.62, "TVD": 249.61, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 278.5, "TVD": 278.49, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 307.41, "TVD": 307.4, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 336.28, "TVD": 336.27, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 365.16, "TVD": 365.15, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 394.04, "TVD": 394.03, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 422.9, "TVD": 422.89, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 451.76, "TVD": 451.75, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 480.62, "TVD": 480.61, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 538.36, "TVD": 538.35, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 596.11, "TVD": 596.1, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 653.86, "TVD": 653.85, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 682.76, "TVD": 682.75, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 711.61, "TVD": 711.6, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 740.52, "TVD": 740.51, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 769.4, "TVD": 769.39, "Horizontal_distance": 0.7599342, "Angle": 0 },
  { "MD": 798.25, "TVD": 798.24, "Horizontal_distance": 0.7599342, "Angle": 1.50835 },
  { "MD": 827.11, "TVD": 827.09, "Horizontal_distance": 1.519605, "Angle": 0 },
  { "MD": 855.99, "TVD": 855.97, "Horizontal_distance": 1.519605, "Angle": 0 },
  { "MD": 884.87, "TVD": 884.85, "Horizontal_distance": 1.519605, "Angle": 0 },
  { "MD": 913.76, "TVD": 913.74, "Horizontal_distance": 1.519605, "Angle": 0 },
  { "MD": 942.67, "TVD": 942.65, "Horizontal_distance": 1.519605, "Angle": 0 },
  { "MD": 971.6, "TVD": 971.58, "Horizontal_distance": 1.519605, "Angle": 0 },
  { "MD": 1000.5, "TVD": 1000.48, "Horizontal_distance": 1.519605, "Angle": 0 },
  { "MD": 1029.37, "TVD": 1029.35, "Horizontal_distance": 1.519605, "Angle": 1.507305 },
  { "MD": 1058.27, "TVD": 1058.24, "Horizontal_distance": 2.279803, "Angle": 0 },
  { "MD": 1087.23, "TVD": 1087.2, "Horizontal_distance": 2.279803, "Angle": 0 },
  { "MD": 1116.17, "TVD": 1116.14, "Horizontal_distance": 2.279803, "Angle": 0 },
  { "MD": 1145.08, "TVD": 1145.05, "Horizontal_distance": 2.279803, "Angle": 0 },
  { "MD": 1173.95, "TVD": 1173.92, "Horizontal_distance": 2.279803, "Angle": 0 },
  { "MD": 1202.81, "TVD": 1202.78, "Horizontal_distance": 2.279803, "Angle": 1.507827 },
  { "MD": 1231.69, "TVD": 1231.65, "Horizontal_distance": 3.039737, "Angle": 0 },
  { "MD": 1260.55, "TVD": 1260.51, "Horizontal_distance": 3.039737, "Angle": 0.5446213 },
  { "MD": 1703.26, "TVD": 1703.2, "Horizontal_distance": 7.247824, "Angle": 0 },
  { "MD": 1712.89, "TVD": 1712.83, "Horizontal_distance": 7.247824, "Angle": 1.507305 },
  { "MD": 1741.79, "TVD": 1741.72, "Horizontal_distance": 8.008022, "Angle": 2.609977 },
  { "MD": 1770.71, "TVD": 1770.61, "Horizontal_distance": 9.32495, "Angle": 4.523743 },
  { "MD": 1799.6, "TVD": 1799.41, "Horizontal_distance": 11.60357, "Angle": 7.391726 },
  { "MD": 1828.48, "TVD": 1828.05, "Horizontal_distance": 15.31905, "Angle": 9.176535 },
  { "MD": 1857.39, "TVD": 1856.59, "Horizontal_distance": 19.92953, "Angle": 10.23636 },
  { "MD": 1886.29, "TVD": 1885.03, "Horizontal_distance": 25.06532, "Angle": 10.98606 },
  { "MD": 1915.21, "TVD": 1913.42, "Horizontal_distance": 30.57661, "Angle": 12.26635 },
  { "MD": 1944.12, "TVD": 1941.67, "Horizontal_distance": 36.71873, "Angle": 14.5697 },
  { "MD": 1973.04, "TVD": 1969.66, "Horizontal_distance": 43.99377, "Angle": 16.91009 },
  { "MD": 2001.95, "TVD": 1997.32, "Horizontal_distance": 52.40285, "Angle": 18.25209 },
  { "MD": 2030.77, "TVD": 2024.69, "Horizontal_distance": 61.42922, "Angle": 19.98677 },
  { "MD": 2059.66, "TVD": 2051.84, "Horizontal_distance": 71.30392, "Angle": 22.604 },
  { "MD": 2088.56, "TVD": 2078.52, "Horizontal_distance": 82.41192, "Angle": 24.64161 },
  { "MD": 2117.44, "TVD": 2104.77, "Horizontal_distance": 94.45317, "Angle": 25.15588 },
  { "MD": 2146.54, "TVD": 2131.11, "Horizontal_distance": 106.8231, "Angle": 24.57671 },
  { "MD": 2175.46, "TVD": 2157.41, "Horizontal_distance": 118.8512, "Angle": 24.4112 },
  { "MD": 2185.08, "TVD": 2166.17, "Horizontal_distance": 122.827, "Angle": 24.54196 },
  { "MD": 2194.71, "TVD": 2174.93, "Horizontal_distance": 126.8269, "Angle": 24.60456 },
  { "MD": 2267.73, "TVD": 2241.32, "Horizontal_distance": 157.229, "Angle": 25.1088 },
  { "MD": 2286.99, "TVD": 2258.76, "Horizontal_distance": 165.4018, "Angle": 25.69106 },
  { "MD": 2296.6, "TVD": 2267.42, "Horizontal_distance": 169.5679, "Angle": 25.91679 },
  { "MD": 2315.89, "TVD": 2284.77, "Horizontal_distance": 177.9989, "Angle": 25.1555 },
  { "MD": 2344.78, "TVD": 2310.92, "Horizontal_distance": 190.2793, "Angle": 25.09556 },
  { "MD": 2373.7, "TVD": 2337.11, "Horizontal_distance": 202.5452, "Angle": 25.09997 },
  { "MD": 2402.61, "TVD": 2363.29, "Horizontal_distance": 214.8088, "Angle": 24.25389 },
  { "MD": 2431.5, "TVD": 2389.63, "Horizontal_distance": 226.6762, "Angle": 23.74565 },
  { "MD": 2460.44, "TVD": 2416.12, "Horizontal_distance": 238.3297, "Angle": 24.01557 },
  { "MD": 2489.32, "TVD": 2442.5, "Horizontal_distance": 250.0834, "Angle": 24.30212 },
  { "MD": 2518.21, "TVD": 2468.83, "Horizontal_distance": 261.973, "Angle": 24.35783 },
  { "MD": 2546.97, "TVD": 2495.03, "Horizontal_distance": 273.8346, "Angle": 24.04116 },
  { "MD": 2576.02, "TVD": 2521.56, "Horizontal_distance": 285.6694, "Angle": 23.85025 },
  { "MD": 2593, "TVD": 2537.09, "Horizontal_distance": 292.5352, "Angle": 23.98541 },
  { "MD": 2610.95, "TVD": 2553.49, "Horizontal_distance": 299.832, "Angle": 0 },
  { "MD": 2330.21, "TVD": 2207.28, "Horizontal_distance": 668.136, "Angle": 21.39327 },
  { "MD": 2357.06, "TVD": 2232.28, "Horizontal_distance": 677.93, "Angle": 21.29127 },
  { "MD": 2385.63, "TVD": 2258.9, "Horizontal_distance": 688.3041, "Angle": 21.44195 },
  { "MD": 2413.66, "TVD": 2284.99, "Horizontal_distance": 698.5507, "Angle": 21.58385 },
  { "MD": 2442.04, "TVD": 2311.38, "Horizontal_distance": 708.9906, "Angle": 21.64427 },
  { "MD": 2469.98, "TVD": 2337.35, "Horizontal_distance": 719.2961, "Angle": 21.54589 },
  { "MD": 2499.89, "TVD": 2365.17, "Horizontal_distance": 730.2804, "Angle": 21.25633 },
  { "MD": 2527.23, "TVD": 2390.65, "Horizontal_distance": 740.1923, "Angle": 20.94528 },
  { "MD": 2555.53, "TVD": 2417.08, "Horizontal_distance": 750.3088, "Angle": 20.93726 },
  { "MD": 2583.7, "TVD": 2443.39, "Horizontal_distance": 760.3753, "Angle": 20.97936 },
  { "MD": 2612.06, "TVD": 2469.87, "Horizontal_distance": 770.529, "Angle": 20.9229 },
  { "MD": 2638.6, "TVD": 2494.66, "Horizontal_distance": 780.0068, "Angle": 21.01547 },
  { "MD": 2656.34, "TVD": 2511.22, "Horizontal_distance": 786.3687, "Angle": 0 },
  { "MD": 2672.79, "TVD": 1858.3, "Horizontal_distance": 1634.758, "Angle": 56.25619 },
  { "MD": 2702.35, "TVD": 1874.72, "Horizontal_distance": 1659.338, "Angle": 56.35672 },
  { "MD": 2730.58, "TVD": 1890.36, "Horizontal_distance": 1682.839, "Angle": 56.32299 },
  { "MD": 2759.29, "TVD": 1906.28, "Horizontal_distance": 1706.731, "Angle": 56.29885 },
  { "MD": 2788.09, "TVD": 1922.26, "Horizontal_distance": 1730.691, "Angle": 56.33522 },
  { "MD": 2817.17, "TVD": 1938.38, "Horizontal_distance": 1754.894, "Angle": 56.28868 },
  { "MD": 2845.62, "TVD": 1954.17, "Horizontal_distance": 1778.56, "Angle": 56.2803 },
  { "MD": 2874.37, "TVD": 1970.13, "Horizontal_distance": 1802.473, "Angle": 56.27236 },
  { "MD": 2903.06, "TVD": 1986.06, "Horizontal_distance": 1826.334, "Angle": 56.26182 },
  { "MD": 2931.4, "TVD": 2001.8, "Horizontal_distance": 1849.902, "Angle": 56.22716 },
  { "MD": 2960.29, "TVD": 2017.86, "Horizontal_distance": 1873.916, "Angle": 56.33833 },
  { "MD": 2989.21, "TVD": 2033.89, "Horizontal_distance": 1897.987, "Angle": 56.39368 },
  { "MD": 3017.63, "TVD": 2049.62, "Horizontal_distance": 1921.657, "Angle": 56.25902 },
  { "MD": 3046.31, "TVD": 2065.55, "Horizontal_distance": 1945.506, "Angle": 56.27464 },
  { "MD": 3075.47, "TVD": 2081.74, "Horizontal_distance": 1969.759, "Angle": 56.24292 },
  { "MD": 3103.85, "TVD": 2097.51, "Horizontal_distance": 1993.354, "Angle": 56.21953 },
  { "MD": 3133.04, "TVD": 2113.74, "Horizontal_distance": 2017.616, "Angle": 56.28058 },
  { "MD": 3161.52, "TVD": 2129.55, "Horizontal_distance": 2041.305, "Angle": 56.22389 },
  { "MD": 3189.76, "TVD": 2145.25, "Horizontal_distance": 2064.778, "Angle": 56.24833 },
  { "MD": 3218.36, "TVD": 2161.14, "Horizontal_distance": 2088.558, "Angle": 56.34234 },
  { "MD": 3246.85, "TVD": 2176.93, "Horizontal_distance": 2112.272, "Angle": 56.40238 },
  { "MD": 3275.15, "TVD": 2192.59, "Horizontal_distance": 2135.844, "Angle": 56.54883 },
  { "MD": 3304.92, "TVD": 2209, "Horizontal_distance": 2160.683, "Angle": 56.59016 },
  { "MD": 3326.55, "TVD": 2220.91, "Horizontal_distance": 2178.738, "Angle": 56.3498 },
  { "MD": 3356.76, "TVD": 2237.65, "Horizontal_distance": 2203.886, "Angle": 56.14606 },
  { "MD": 3385.23, "TVD": 2253.51, "Horizontal_distance": 2227.53, "Angle": 56.03258 },
  { "MD": 3414.01, "TVD": 2269.59, "Horizontal_distance": 2251.398, "Angle": 56.25373 },
  { "MD": 3442.2, "TVD": 2285.25, "Horizontal_distance": 2274.839, "Angle": 56.48718 },
  { "MD": 3470.69, "TVD": 2300.98, "Horizontal_distance": 2298.592, "Angle": 56.50972 },
  { "MD": 3499.65, "TVD": 2316.96, "Horizontal_distance": 2322.745, "Angle": 56.47855 },
  { "MD": 3528.55, "TVD": 2332.92, "Horizontal_distance": 2346.838, "Angle": 56.4234 },
  { "MD": 3557.39, "TVD": 2348.87, "Horizontal_distance": 2370.866, "Angle": 56.31817 },
  { "MD": 3585.88, "TVD": 2364.67, "Horizontal_distance": 2394.573, "Angle": 56.13623 },
  { "MD": 3609.91, "TVD": 2378.06, "Horizontal_distance": 2414.527, "Angle": 56.20881 },
  { "MD": 3633.5, "TVD": 2391.18, "Horizontal_distance": 2434.132, "Angle": 0 }
];

const casingData = [
  { section: 'Casing', size: '30"', fromMD: 0, toMD: 119.2, ID: 28, OD: 30, roughness: 0.001 },
  { section: 'Casing', size: '20"', fromMD: 0, toMD: 285.2, ID: 18.73, OD: 20, roughness: 0.001 },
  { section: 'Casing', size: '13 3/8"', fromMD: 0, toMD: 1732.2, ID: 12.347, OD: 13.375, roughness: 0.001 },
  { section: 'Casing', size: '9 5/8"', fromMD: 0, toMD: 2300.2, ID: 8.681, OD: 9.625, roughness: 0.001 },
  { section: 'Liner', size: '7"', fromMD: 2157.2, toMD: null, ID: 6.184, OD: 7, roughness: 0.001 }
];

const tubingData = [
  { fromMD: 0, toMD: 2589.88, ID: 3.826, OD: 4.5, roughness: 0.001 }
];


const equipmentData = [
  { name: 'SSSV 1', type: 'SSSV', MD: 163.01 },
  { name: 'Pk 1', type: 'Pk', MD: 2366.28 },
  { name: 'LN', type: 'Choke', MD: 2395.96 }
];



const reservoirData = {
  name: 'S-30PAY',
  geometry: 'Vertical',
  fluidEntry: 'Single point',
  middleMD: 3250.35,
  type: 'Perforation',
  iprModel: 'Back pressure',
  resPressure: 148.9668,
  temperature: 107,
  c: 8.63e-06,
  n: 0.8,
  OGR: '9.4687 sm3/mmsm3',
  WGR: '148 sm3/mmsm3'
};


function C24P12() {
  return (

       <div>
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
                <td className="border p-2">{item.Horizontal_distance}</td>
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

    </div>
  )
}

export default C24P12
