// import React from 'react'
// import { Link } from 'react-router-dom'

// function Dashboard() {
//   return (
//     <div className="w-screen h-screen overflow-auto bg-white">
//       <div className="relative min-w-[1800px] min-h-[1200px] p-4">
//         {/* Nodes */}
//         <Link to="/b-12-17" className='absolute left-[150px] top-[350px] bg-blue-400 text-white px-4 py-2 rounded shadow'>B-12-17</Link>
//         <Link to="/b-12-13" className="absolute left-[150px] top-[420px] bg-blue-400 text-white px-4 py-2 rounded shadow">B-12-13</Link>
//         <Link to="/b-12-15" className="absolute left-[150px] top-[500px] bg-blue-400 text-white px-4 py-2 rounded shadow">B-12-15</Link>
//         <Link to="/b-12-11" className="absolute left-[300px] top-[450px] bg-blue-500 text-white px-4 py-2 rounded shadow">B-12-11</Link>
//         <Link to="/c-24-p3" className="absolute left-[800px] top-[300px] bg-yellow-400 text-black px-4 py-2 rounded shadow">C-24-P3</Link>
//         <Link to="/c-24-p4" className="absolute left-[800px] top-[500px] bg-yellow-400 text-black px-4 py-2 rounded shadow">C-24-P4</Link>
//         <Link to="/c-24-p2" className="absolute left-[1000px] top-[200px] bg-yellow-400 text-black px-4 py-2 rounded shadow">C-24-P2</Link>
//         <Link to="/c-24-rp" className="absolute left-[1000px] top-[400px] bg-yellow-500 text-black px-4 py-2 rounded shadow">C-24-RP</Link>
//         <Link to="/c-24-p1" className="absolute left-[1200px] top-[400px] bg-yellow-500 text-black px-4 py-2 rounded shadow">C-24-P1</Link>
//         <Link to="/tcpp" className="absolute left-[1500px] top-[150px] bg-yellow-200 text-black px-4 py-2 rounded border border-yellow-600 shadow">TCP/TPP</Link>
//         <Link to="/c-2" className="absolute left-[1600px] top-[450px] bg-yellow-400 text-black px-4 py-2 rounded shadow">C-2</Link>
//         <Link to="/c-26" className="absolute left-[800px] top-[850px] bg-green-500 text-white px-4 py-2 rounded shadow">C-26</Link>
//         <Link to="/b-12-1" className="absolute left-[600px] top-[900px] bg-green-500 text-white px-4 py-2 rounded shadow">B-12-1</Link>
//         <Link to="/nqg" className="absolute left-[300px] top-[1000px] bg-green-700 text-white px-4 py-2 rounded shadow">NQG</Link>

//         {/* SVG Connections */}
//         <svg className="absolute inset-0 w-full h-full pointer-events-none">
//           <line x1="300" y1="470" x2="240" y2="380" stroke="green" strokeWidth="2" />
//           <line x1="300" y1="470" x2="240" y2="440" stroke="green" strokeWidth="2" />
//           <line x1="300" y1="470" x2="240" y2="520" stroke="green" strokeWidth="2" />
//           <line x1="385" y1="470" x2="1000" y2="420" stroke="green" strokeWidth="2" />

//           <line x1="1000" y1="420" x2="895" y2="320" stroke="green" strokeWidth="2" />
//           <line x1="1000" y1="420" x2="850" y2="500" stroke="green" strokeWidth="2" />
//           <line x1="1050" y1="400" x2="1050" y2="240" stroke="green" strokeWidth="2" />
//           <line x1="1095" y1="420" x2="1200" y2="420" stroke="green" strokeWidth="2" />

//           <line x1="1240" y1="400" x2="1500" y2="180" stroke="green" strokeWidth="2" />
//           <line x1="1295" y1="420" x2="1600" y2="450" stroke="green" strokeWidth="2" />

//           <line x1="1250" y1="440" x2="1000" y2="850" stroke="black" strokeWidth="2" />
//           <line x1="1000" y1="850" x2="600" y2="900" stroke="green" strokeWidth="2" />
//           <line x1="600" y1="900" x2="300" y2="1000" stroke="black" strokeWidth="3" strokeDasharray="5,5" />
//         </svg>
//       </div>
//     </div>
//   )
// }

// export default Dashboard



// import { nodes } from './nodes'
// import Node from '../Node'

// function Dashboard() {
//   return (
//     <div className='w-screen h-screen overflow-auto bg-blue-950'>
//         <div className="relative min-w-[1800px] min-h-[1200px] p-4">
//             {/* render all nodes */}
//             { nodes.map((node) => (
//                 <Node key={node.id} {...node} /> 
//                 ))}

//             {/* SVG Connections */}
//         <svg className="absolute inset-0 w-full h-full pointer-events-none">
//           <line x1="300" y1="470" x2="240" y2="380" stroke="green" strokeWidth="2" stroke-linecap="round" />
//           <line x1="300" y1="470" x2="240" y2="440" stroke="green" strokeWidth="2" />
//           <line x1="300" y1="470" x2="240" y2="520" stroke="green" strokeWidth="2" />
//           <line x1="385" y1="470" x2="1000" y2="420" stroke="green" strokeWidth="10" stroke-linecap="round" />

//           <line x1="1000" y1="420" x2="895" y2="320" stroke="green" strokeWidth="2" />
//           <line x1="1000" y1="420" x2="850" y2="500" stroke="green" strokeWidth="2" />
//           <line x1="1050" y1="400" x2="1050" y2="240" stroke="green" strokeWidth="2" />
//           <line x1="1095" y1="420" x2="1200" y2="420" stroke="green" strokeWidth="10" />

//           <line x1="1240" y1="400" x2="1500" y2="180" stroke="green" strokeWidth="2" />
//           <line x1="1295" y1="420" x2="1600" y2="450" stroke="green" strokeWidth="2" />

//           <line x1="1250" y1="440" x2="1000" y2="850" stroke="black" strokeWidth="10" />
//           <line x1="1000" y1="850" x2="600" y2="900" stroke="green" strokeWidth="2" />
//           <line x1="600" y1="900" x2="300" y2="1000" stroke="black" strokeWidth="2" />
//         </svg>
//         </div>
//     </div>
//   )
// }

// export default Dashboard

import { nodes } from './nodes';
import Node from '../Node';

function Dashboard() {
  const connections = [
    [1, 300, 470, 240, 380, '8" X 19.5 Km', 255, 410, 'left'],
    [2, 300, 470, 240, 440, '12" X 17 Km', 243, 440, 'left'],
    [3, 300, 470, 240, 510, '12" X 7 Km', 255, 495, 'left'],
    [4, 390, 470, 995, 420, '18" X 18 Km', 650, 435, 'center'],
    [5, 1000, 420, 890, 310, '10" X 7.3 Km', 925, 370, 'right'],
    [6, 1000, 420, 850, 500, '10" X 4 Km', 930, 445, 'right'],
    [7, 1050, 400, 1050, 240, '12" X 5.5 Km', 1000, 380, 'right'],
    [8, 1095, 420, 1195, 420, '18" X 150 m', 1110, 410, 'left'],
    [9, 1240, 400, 1500, 180, '24" X 37 Km', 1370, 280, 'center'],
    [10, 1290, 430, 1600, 450, '20" X 37 Km', 1450, 435, 'center'],
    [11, 1250, 445, 1000, 850, '28" X 21.8 Km', 1130, 625, 'center'],
    [12, 1000, 850, 600, 900, '28" X 14.3 Km', 800, 885, 'center'],
    [13, 600, 900, 300, 1000, '28" X 78 Km', 450, 960, 'center'], 
    [14, 815, 780, 1000, 850, '12" X 4.4 Km', 890, 815, 'right'],
    [15, 460, 790, 600, 900, '8" X 2.7 Km', 480, 840, 'left'],
  ];

  return (
    <div className='w-screen h-screen overflow-auto bg-blue-950'>
      <div className="relative min-w-[1800px] min-h-[1200px] p-4">
        {nodes.map((node) => (
          <Node key={node.id} {...node} />
        ))}

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map(([id, x1, y1, x2, y2, label, midX, midY, align], idx) => {
            const isThick = idx === 3 || idx === 7 || idx === 10;
            const isBlack = idx === 10 || idx === 11 || idx === 12;
            
            let textX = midX;
            let textAnchor = 'middle';
            let textY = midY;
       
            if (align === 'left') {
              textX = midX - 10;
              textAnchor = 'start';
            } else if (align === 'right') {
              textX = midX + 10;
              textAnchor = 'end';
            }
            
            let textRoutation = 0;
            if (id == 1){
              textRoutation = "57";
            }else if(id == 2){
              textRoutation = "30";
            }else if(id == 3){
              textRoutation = "-40";
            }else if(id == 4){
              textRoutation = "-5";
            }else if(id == 5){
              textRoutation = "45";
            }else if(id == 6){
              textRoutation = "-30";
            }else if(id == 7){
              textRoutation = "90";
            }else if(id == 8){
              textRoutation = "0";
            }else if(id == 9){
              textRoutation = "-40";
            }else if(id == 10){
              textRoutation = "5";
            }else if(id == 11){
              textRoutation = "-60";
            }else if(id == 12){
              textRoutation = "-10";
            }else if(id == 13){
              textRoutation = "-17";
            }else if(id == 14){
              textRoutation = "20";
            }else if(id == 15){
              textRoutation = "40";
            }

            return (
              <g key={idx}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isBlack ? 'black' : 'green'}
                  strokeWidth={isThick ? 10 : 2}
                  strokeLinecap="round"
                  strokeDasharray={idx === 12 ? "5,5" : "0"}
                />
                <text
                  x={textX}
                  y={textY}
                  fill="white"
                  fontSize="11"
                  // fontWeight="bold"
                  textAnchor={textAnchor}
                  dominantBaseline="middle"
                  className="font-sans"
                  transform={`rotate(${textRoutation}, ${textX + 30}, ${textY})`}
                >
                {/* {block.lines.map((line, i) => (
          <tspan key={i} x={block.x} dy={`${i === 0 ? 0 : 1.2}em`}>
            {line}
          </tspan>
        ))} */}
                  {label}
                </text>
                <g>
                  <text x={150} y={280} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={150} dy="1.2em">Back Pr.: 87.2 Ksc</tspan>
                    <tspan x={150} dy="1.2em">Qg: 1.11 MMscmd </tspan>
                    <tspan x={150} dy="1.2em">Qc: 242 m³/d</tspan>
                  </text>
                  <text x={20} y={420} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={20} dy="1.2em">Back Pr.: 50.5 Ksc</tspan>
                    <tspan x={20} dy="1.2em">Qg: 1.01 MMscmd</tspan>
                    <tspan x={20} dy="1.2em">Qc: 144 m³/d</tspan>
                  </text> 
                  <text x={150} y={550} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={150} dy="1.2em">Back Pr.: 49 Ksc</tspan>
                    <tspan x={150} dy="1.2em">Qg: 0.38 MMscmd</tspan>
                    <tspan x={150} dy="1.2em">Qc: 36 m³/d</tspan>
                  </text> 
                  <text x={300} y={500} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={300} dy="1.2em">Back Pr.: 48 Ksc</tspan>
                    <tspan x={300} dy="1.2em">Qg: 1.48 MMscmd</tspan>
                    <tspan x={300} dy="1.2em">Qc: 153 m³/d</tspan>
                  </text> 
                  <text x={800} y={550} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={800} dy="1.2em">Back Pr.: 39.8 Ksc</tspan>
                    <tspan x={800} dy="1.2em">Qg: 0.13 MMscmd</tspan>
                    <tspan x={800} dy="1.2em">Qc: 17 m³/d</tspan>
                  </text> 
                  <text x={800} y={230} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={800} dy="1.2em">Back Pr.: 42 Ksc</tspan>
                    <tspan x={800} dy="1.2em">Qg: 0.215 MMscmd</tspan>
                    <tspan x={800} dy="1.2em">Qc: 23 m³/d</tspan>
                  </text> 
                  <text x={1000} y={130} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={1000} dy="1.2em">Back Pr.: 40.5 Ksc</tspan>
                    <tspan x={1000} dy="1.2em">Qg: 0.63 MMscmd</tspan>
                    <tspan x={1000} dy="1.2em">Qc: 106 m³/d</tspan>
                  </text>
                  {/* <text x={1000} y={450} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={1000} dy="1.2em">Back Pr.: -- Ksc</tspan>
                    <tspan x={1000} dy="1.2em">Qg: --- MMscmd</tspan>
                    <tspan x={1000} dy="1.2em">Qc: --- m³/d</tspan>
                  </text> */} 
                  <text x={1250} y={450} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={1250} dy="1.2em">Back Pr.: 36.5 Ksc</tspan>
                    <tspan x={1250} dy="1.2em">Qg: 0.35 MMscmd</tspan>
                    <tspan x={1250} dy="1.2em">Qc: 20.4 m³/d</tspan>
                  </text>
                  <text x={1500} y={200} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={1500} dy="1.2em">Back Pr.: 29.5 Ksc</tspan>
                    <tspan x={1500} dy="1.2em">Qg: 7.2 MMscmd</tspan>
                    <tspan x={1500} dy="1.2em">Qc: 945 m³/d</tspan>
                  </text>
                  <text x={1600} y={500} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={1600} dy="1.2em">Back Pr.: 38 Ksc</tspan>
                    <tspan x={1600} dy="1.2em">Qg: 0.17 MMscmd</tspan>
                    <tspan x={1600} dy="1.2em">Qc: 31 m³/d</tspan>
                  </text>
                  <text x={750} y={800} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={750} dy="1.2em">Back Pr.: 38 Ksc</tspan>
                    <tspan x={750} dy="1.2em">Qg: 1.29 MMscmd</tspan>
                    <tspan x={750} dy="1.2em">Qc: 132 m³/d</tspan>
                  </text>
                  <text x={500} y={750} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={500} dy="1.2em">Back Pr.: 40 Ksc</tspan>
                    <tspan x={500} dy="1.2em">Qg: 0.46 MMscmd</tspan>
                    <tspan x={500} dy="1.2em">Qc: 41 m³/d</tspan>
                  </text>
                  {/* <text x={300} y={1050} fill="black" fontSize="14" fontWeight="bold">
                    <tspan x={300} dy="1.2em">Back Pr.: -- Ksc</tspan>
                    <tspan x={300} dy="1.2em">Qg: --- MMscmd</tspan>
                    <tspan x={300} dy="1.2em">Qc: -- m³/d</tspan>
                  </text> */}
                </g>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default Dashboard;