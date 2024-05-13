
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

// import 'path-to-your-styles.css';

// eslint-disable-next-line react/prop-types
const Example = ({darkMode}) => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <h3 className={`${darkMode ? "darkSubHeading" : "subHeading"}`}>This Years Hospital Revenue</h3>
      <p className='textColor'>It is the period time a user is actively engaged with your website, page or app, etc</p>
      <div className='flex justify-between items-center py-3'>
        <div className='flex '>
          <div className='mr-5'>
            <h4 className='priceColor'>$1,056</h4>
            <p className='textColor'>Expenses</p>
          </div>
          <div>
            <h4 className='priceColor'>$3,098</h4>
            <p className='textColor'>Total Profit</p>
          </div>
        </div>
        <div>
          <button className='filterButton'>Day</button>
          <button className='filterButton'>Week</button>
          <button className='filterButton bg-gray-100'>Month</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis className='textColor' dataKey="name" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#95C11F" fill="mainColor" fillOpacity={0.1} />
          {/* <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} /> */}
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Example;
