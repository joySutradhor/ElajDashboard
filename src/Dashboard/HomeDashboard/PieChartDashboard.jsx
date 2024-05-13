
import { Tooltip } from '@mui/material';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

// eslint-disable-next-line react/prop-types
const PieChartDashboard = ({darkMode}) => (
  <>
  <h1 className={` text-center ${darkMode ? "darkSubHeading" : "subHeading"}`}>Appoinment Status</h1>
  <ResponsiveContainer width="100%" height="100%">
    <PieChart >
      <Tooltip />
      <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#95C11F" />
      <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#95C11F" label />
    </PieChart>
  </ResponsiveContainer>

  <h2 className='textColor'>Completed : 120</h2>
  <h2 className='textColor'>Rejected : 10</h2>
  <h2 className='textColor' >Pending : 12</h2>
  
  
  </>
);

export default PieChartDashboard;
