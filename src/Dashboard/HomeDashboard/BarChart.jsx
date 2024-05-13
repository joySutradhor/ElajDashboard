
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: ' A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: ' B',
        uv: 3000,
        pv: 2198,
        amt: 2210,
    },
    {
        name: ' C',
        uv: 2000,
        pv: 4000,
        amt: 2290,
    },
    {
        name: ' D',
        uv: 2780,
        pv: 6608,
        amt: 2000,
    },
    {
        name: ' E',
        uv: 2780,
        pv: 5908,
        amt: 2000,
    },



];

// eslint-disable-next-line react/prop-types
const BarChartDashboard = ({darkMode}) => (
    <>

        <h3 className={`${darkMode ? "darkSubHeading" : "subHeading"}`}>Death & Recovery rate</h3>
        <div className='flex justify-between textColor py-2'>
            <div className='flex mb-5 '>
                <div className='mr-5'>
                    <h4>$1,056</h4>
                    <p>Expenses</p>
                </div>
                <div>
                    <h4>$3,098</h4>
                    <p>Total Profit</p>
                </div>
            </div>
            <div >
                <button className='filterButton'>D</button>
                <button className='filterButton'>W</button>
                <button className='filterButton bg-gray-100'>M</button>
            </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                // width={500}
                // height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 0, right: 0 }} />

                <Tooltip />

                <Bar dataKey="pv" fill="#9a9a9a" background={{ fill: '#95C11F' }} />

            </BarChart>
        </ResponsiveContainer>

    </>
);

export default BarChartDashboard;
