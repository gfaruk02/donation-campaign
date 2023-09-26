import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const CustomizedPieChart = () => {
  const [donations, setDonations] = useState([])
  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem('donate'))
    if (donateItems) {
      setDonations(donateItems)
    } else {
      donations.length = 0;
    }
  }, [])
  const items = (donations.length);
  // console.log(items); 
  const total = 12 - items;
  const data = [
    { name: 'Total Donation', value: total },
    { name: 'Your Donation', value: items },
  ];
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  const COLORS = ['#fa4de0', '#1aaba4'];
  return (
    <div> {
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    }</div>
  );
};

export default CustomizedPieChart;
