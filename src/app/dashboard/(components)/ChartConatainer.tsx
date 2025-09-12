"use client";

import {
  Bar,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartConatainerProps {
  assetType: {
    name: string;
    rateOfReturn: number;
  }[];
}

const ChartConatainer = ({ assetType }: ChartConatainerProps) => {
  const assetPerformance = assetType.map((item, index) => {
    return {
      id: index,
      name: item.name,
      return: item.rateOfReturn,
      color: item.rateOfReturn < 0 ? "#FF6B6B" : "#4ECDC4",
    };
  });

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">
        카테고리별 수익률
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart style={{ outline: "none" }} data={assetPerformance}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "white", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "white", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              color: "#000000",
              fontSize: "12px",
            }}
            cursor={false}
            formatter={(value) => [`${value}%`, "수익률"]}
          />
          <Bar dataKey="return" radius={[4, 4, 0, 0]}>
            {assetPerformance.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartConatainer;
