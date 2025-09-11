"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  BarChart3,
  Shield,
  Brain,
  Plus,
  Settings,
  Bell,
  User,
  Send,
  MessageCircle,
  Bot,
  Edit,
  Trash2,
  Download,
} from "lucide-react";

const PrivatePortfolioDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [assets, setAssets] = useState([
    {
      id: 1,
      type: "국내주식",
      name: "삼성전자",
      currentValue: 4375000,
      purchasePrice: 4200000,
      purchaseDate: "2024-01-15",
      memo: "장기 투자",
    },
    {
      id: 2,
      type: "해외주식",
      name: "애플(AAPL)",
      currentValue: 3125000,
      purchasePrice: 2800000,
      purchaseDate: "2024-02-20",
      memo: "기술주 투자",
    },
    {
      id: 3,
      type: "부동산",
      name: "부동산 펀드",
      currentValue: 2500000,
      purchasePrice: 2400000,
      purchaseDate: "2024-03-01",
      memo: "안정적 투자",
    },
    {
      id: 4,
      type: "가상자산",
      name: "비트코인",
      currentValue: 1000000,
      purchasePrice: 1200000,
      purchaseDate: "2024-04-10",
      memo: "소액 투자",
    },
    {
      id: 5,
      type: "예적금",
      name: "정기예금",
      currentValue: 1250000,
      purchasePrice: 1250000,
      purchaseDate: "2024-01-01",
      memo: "안전자산",
    },
  ]);

  // 챗봇 관련 상태
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "bot",
      message:
        "안녕하세요! 포트폴리오 AI 분석가입니다. 궁금한 것이 있으시면 언제든 물어보세요.",
      timestamp: new Date(),
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const chatEndRef = useRef<null>(null);

  // 자산 입력 폼 상태
  const [assetForm, setAssetForm] = useState({
    type: "국내주식",
    name: "",
    currentValue: "",
    purchasePrice: "",
    purchaseDate: "",
    memo: "",
  });

  // 채팅 스크롤 자동 이동
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // 포트폴리오 데이터 계산
  const calculatePortfolioData = () => {
    const typeGroups = assets.reduce((acc, asset) => {
      if (!acc[asset.type]) acc[asset.type] = 0;
      acc[asset.type] += asset.currentValue;
      return acc;
    }, {});

    const total = Object.values(typeGroups).reduce(
      (sum, value) => sum + value,
      0
    );
    const colors = {
      국내주식: "#FF6B6B",
      해외주식: "#4ECDC4",
      부동산: "#45B7D1",
      가상자산: "#96CEB4",
      예적금: "#FFEAA7",
      기타: "#DDA0DD",
    };

    return Object.entries(typeGroups).map(([type, value]) => ({
      name: type,
      value: Math.round((value / total) * 100),
      amount: value,
      color: colors[type] || "#DDA0DD",
    }));
  };

  // 자산별 수익률 계산
  const calculateAssetPerformance = () => {
    return assets.map((asset) => ({
      name: asset.name,
      return: (
        ((asset.currentValue - asset.purchasePrice) / asset.purchasePrice) *
        100
      ).toFixed(1),
      profit: asset.currentValue - asset.purchasePrice,
      color: asset.currentValue >= asset.purchasePrice ? "#4ECDC4" : "#FF6B6B",
    }));
  };

  // 총 자산 계산
  const getTotalStats = () => {
    const totalCurrent = assets.reduce(
      (sum, asset) => sum + asset.currentValue,
      0
    );
    const totalPurchase = assets.reduce(
      (sum, asset) => sum + asset.purchasePrice,
      0
    );
    const profit = totalCurrent - totalPurchase;
    const returnRate = ((profit / totalPurchase) * 100).toFixed(1);

    return {
      totalCurrent,
      totalPurchase,
      profit,
      returnRate,
    };
  };

  // 챗봇 메시지 전송
  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      message: currentMessage,
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, userMessage]);

    // AI 응답 시뮬레이션
    setTimeout(() => {
      const botResponse = generateBotResponse(currentMessage);
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        message: botResponse,
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setCurrentMessage("");
  };

  // 봇 응답 생성
  const generateBotResponse = (userInput) => {
    const stats = getTotalStats();
    const portfolioData = calculatePortfolioData();
    const assetPerformance = calculateAssetPerformance();

    if (userInput.includes("수익률") || userInput.includes("수익")) {
      return `현재 총 수익률은 ${stats.returnRate}%입니다. 총 평가금액 ${(stats.totalCurrent / 10000).toFixed(0)}만원으로 ${stats.profit > 0 ? "+" : ""}${(stats.profit / 10000).toFixed(1)}만원의 ${stats.profit > 0 ? "수익" : "손실"}이 발생했습니다.`;
    }

    if (userInput.includes("포트폴리오") || userInput.includes("비중")) {
      const topAsset = portfolioData.sort((a, b) => b.value - a.value)[0];
      return `현재 포트폴리오에서 가장 큰 비중을 차지하는 것은 ${topAsset.name}(${topAsset.value}%)입니다. 총 ${portfolioData.length}개 자산군에 분산투자하고 계시네요.`;
    }

    if (userInput.includes("추천") || userInput.includes("조언")) {
      return `현재 포트폴리오를 분석한 결과, 다음과 같은 조언을 드립니다:\n\n1. 위험 자산과 안전 자산의 균형을 고려해보세요\n2. 정기적인 리밸런싱을 통해 목표 비중을 유지하세요\n3. 장기 투자 관점에서 꾸준한 분할 매수를 고려해보세요`;
    }

    return `포트폴리오에 대해 더 구체적으로 질문해주세요. 수익률, 자산 비중, 투자 전략 등에 대해 도움드릴 수 있습니다.`;
  };

  // 자산 추가
  const handleAddAsset = () => {
    if (
      !assetForm.name ||
      !assetForm.currentValue ||
      !assetForm.purchasePrice
    ) {
      alert("필수 정보를 모두 입력해주세요.");
      return;
    }

    const newAsset = {
      id: Date.now(),
      type: assetForm.type,
      name: assetForm.name,
      currentValue: parseInt(assetForm.currentValue),
      purchasePrice: parseInt(assetForm.purchasePrice),
      purchaseDate: assetForm.purchaseDate,
      memo: assetForm.memo,
    };

    setAssets((prev) => [...prev, newAsset]);
    setAssetForm({
      type: "국내주식",
      name: "",
      currentValue: "",
      purchasePrice: "",
      purchaseDate: "",
      memo: "",
    });
    alert("자산이 성공적으로 추가되었습니다!");
  };

  // 자산 삭제
  const handleDeleteAsset = (id) => {
    if (window.confirm("정말로 이 자산을 삭제하시겠습니까?")) {
      setAssets((prev) => prev.filter((asset) => asset.id !== id));
    }
  };

  const stats = getTotalStats();
  const portfolioData = calculatePortfolioData();
  const assetPerformance = calculateAssetPerformance();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-600">
          <p className="text-white font-medium">{label}</p>
          <p className="text-blue-400">{`수익률: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return percent > 0.05 ? (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">PRIVATE</h1>
              <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                AI 포트폴리오 관리
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
              <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
              <User className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: "dashboard", name: "대시보드", icon: BarChart3 },
              { id: "portfolio", name: "포트폴리오", icon: Target },
              { id: "analysis", name: "AI 분석", icon: Brain },
              { id: "input", name: "자산 입력", icon: Plus },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-purple-500 text-purple-400"
                    : "border-transparent text-gray-400 hover:text-white hover:border-gray-300"
                }`}>
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* 요약 카드들 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">
                      총 자산
                    </p>
                    <p className="text-white text-2xl font-bold">
                      ₩{(stats.totalCurrent / 10000).toFixed(1)}만
                    </p>
                    <p className="text-green-100 text-xs flex items-center mt-1">
                      {stats.profit >= 0 ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {stats.returnRate}%
                    </p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-100" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">
                      투자 원금
                    </p>
                    <p className="text-white text-2xl font-bold">
                      ₩{(stats.totalPurchase / 10000).toFixed(1)}만
                    </p>
                    <p className="text-blue-100 text-xs">누적 투자금</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-blue-100" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">
                      평가 손익
                    </p>
                    <p className="text-white text-2xl font-bold">
                      {stats.profit >= 0 ? "+" : ""}₩
                      {(Math.abs(stats.profit) / 10000).toFixed(1)}만
                    </p>
                    <p className="text-purple-100 text-xs">총 손익</p>
                  </div>
                  <Target className="w-8 h-8 text-purple-100" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm font-medium">
                      보유 자산
                    </p>
                    <p className="text-white text-2xl font-bold">
                      {assets.length}개
                    </p>
                    <p className="text-orange-100 text-xs">다각화 자산</p>
                  </div>
                  <Target className="w-8 h-8 text-orange-100" />
                </div>
              </div>
            </div>

            {/* 최근 수익률 차트 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">
                자산별 수익률
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={assetPerformance}>
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
                      backgroundColor: "#374151",
                      border: "1px solid #6B7280",
                      borderRadius: "8px",
                      color: "white",
                    }}
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
          </div>
        )}

        {activeTab === "portfolio" && (
          <div className="space-y-8">
            {/* 포트폴리오 구성 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  포트폴리오 구성
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value">
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#374151",
                        border: "1px solid #6B7280",
                        borderRadius: "8px",
                        color: "white",
                      }}
                      formatter={(value, name) => [`${value}%`, name]}
                    />
                    <Legend
                      wrapperStyle={{ color: "white" }}
                      iconType="square"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  자산 현황
                </h3>
                <div className="space-y-3">
                  {portfolioData.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: item.color }}></div>
                        <span className="text-white font-medium">
                          {item.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">
                          {item.value}%
                        </div>
                        <div className="text-gray-400 text-sm">
                          ₩{(item.amount / 10000).toFixed(1)}만
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 개별 자산 목록 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  보유 자산 목록
                </h3>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>내보내기</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-300">
                        자산명
                      </th>
                      <th className="text-left py-3 px-4 text-gray-300">
                        유형
                      </th>
                      <th className="text-right py-3 px-4 text-gray-300">
                        평가금액
                      </th>
                      <th className="text-right py-3 px-4 text-gray-300">
                        매입금액
                      </th>
                      <th className="text-right py-3 px-4 text-gray-300">
                        손익
                      </th>
                      <th className="text-right py-3 px-4 text-gray-300">
                        수익률
                      </th>
                      <th className="text-center py-3 px-4 text-gray-300">
                        관리
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.map((asset) => {
                      const profit = asset.currentValue - asset.purchasePrice;
                      const returnRate = (
                        (profit / asset.purchasePrice) *
                        100
                      ).toFixed(1);

                      return (
                        <tr
                          key={asset.id}
                          className="border-b border-gray-700 hover:bg-gray-750">
                          <td className="py-3 px-4 text-white font-medium">
                            {asset.name}
                          </td>
                          <td className="py-3 px-4 text-gray-300">
                            {asset.type}
                          </td>
                          <td className="py-3 px-4 text-right text-white">
                            ₩{asset.currentValue.toLocaleString()}
                          </td>
                          <td className="py-3 px-4 text-right text-gray-300">
                            ₩{asset.purchasePrice.toLocaleString()}
                          </td>
                          <td
                            className={`py-3 px-4 text-right font-medium ${profit >= 0 ? "text-green-400" : "text-red-400"}`}>
                            {profit >= 0 ? "+" : ""}₩{profit.toLocaleString()}
                          </td>
                          <td
                            className={`py-3 px-4 text-right font-medium ${returnRate >= 0 ? "text-green-400" : "text-red-400"}`}>
                            {returnRate >= 0 ? "+" : ""}
                            {returnRate}%
                          </td>
                          <td className="py-3 px-4 text-center">
                            <div className="flex justify-center space-x-2">
                              <button className="text-blue-400 hover:text-blue-300">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteAsset(asset.id)}
                                className="text-red-400 hover:text-red-300">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "analysis" && (
          <div className="space-y-6">
            {/* 챗봇 인터페이스 */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              {/* 챗봇 헤더 */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      AI 포트폴리오 어시스턴트
                    </h3>
                    <p className="text-purple-100 text-sm">
                      포트폴리오에 대해 무엇이든 물어보세요
                    </p>
                  </div>
                </div>
              </div>

              {/* 채팅 영역 */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-750">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex space-x-2 max-w-xs lg:max-w-md ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === "user"
                            ? "bg-purple-500"
                            : "bg-gray-600"
                        }`}>
                        {message.type === "user" ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-lg ${
                          message.type === "user"
                            ? "bg-purple-500 text-white"
                            : "bg-gray-700 text-gray-100"
                        }`}>
                        <p className="text-sm whitespace-pre-line">
                          {message.message}
                        </p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString("ko-KR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* 메시지 입력 */}
              <div className="p-4 border-t border-gray-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="포트폴리오에 대해 질문해보세요..."
                    className="flex-1 bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2 rounded-lg transition-all">
                    <Send className="w-5 h-5" />
                  </button>
                </div>

                {/* 추천 질문 */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "현재 수익률은?",
                    "포트폴리오 비중은?",
                    "투자 조언 부탁해",
                  ].map((question) => (
                    <button
                      key={question}
                      onClick={() => setCurrentMessage(question)}
                      className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded-full transition-colors">
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "input" && (
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                자산 정보 입력
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      자산 유형
                    </label>
                    <select
                      value={assetForm.type}
                      onChange={(e) =>
                        setAssetForm((prev) => ({
                          ...prev,
                          type: e.target.value,
                        }))
                      }
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option>국내주식</option>
                      <option>해외주식</option>
                      <option>부동산</option>
                      <option>가상자산</option>
                      <option>예적금</option>
                      <option>기타</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      자산명 *
                    </label>
                    <input
                      type="text"
                      value={assetForm.name}
                      onChange={(e) =>
                        setAssetForm((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="예: 삼성전자, 애플 주식"
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      현재 평가금액 *
                    </label>
                    <input
                      type="number"
                      value={assetForm.currentValue}
                      onChange={(e) =>
                        setAssetForm((prev) => ({
                          ...prev,
                          currentValue: e.target.value,
                        }))
                      }
                      placeholder="원"
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      매입 원가 *
                    </label>
                    <input
                      type="number"
                      value={assetForm.purchasePrice}
                      onChange={(e) =>
                        setAssetForm((prev) => ({
                          ...prev,
                          purchasePrice: e.target.value,
                        }))
                      }
                      placeholder="원"
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      매입일
                    </label>
                    <input
                      type="date"
                      value={assetForm.purchaseDate}
                      onChange={(e) =>
                        setAssetForm((prev) => ({
                          ...prev,
                          purchaseDate: e.target.value,
                        }))
                      }
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      메모 (선택)
                    </label>
                    <textarea
                      value={assetForm.memo}
                      onChange={(e) =>
                        setAssetForm((prev) => ({
                          ...prev,
                          memo: e.target.value,
                        }))
                      }
                      placeholder="추가 정보나 투자 목적 등"
                      rows={3}
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={() =>
                    setAssetForm({
                      type: "국내주식",
                      name: "",
                      currentValue: "",
                      purchasePrice: "",
                      purchaseDate: "",
                      memo: "",
                    })
                  }
                  className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition-colors">
                  초기화
                </button>
                <button
                  onClick={handleAddAsset}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg transition-all">
                  자산 추가
                </button>
              </div>
            </div>

            {/* 개인정보 보호 안내 */}
            <div className="bg-green-900 border border-green-700 p-4 rounded-lg">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-200 font-medium">
                  프라이버시 보호
                </span>
              </div>
              <p className="text-green-300 text-sm mt-2">
                입력하신 모든 데이터는 암호화되어 저장됩니다. 언제든지 데이터를
                삭제하거나 내보내기할 수 있습니다.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PrivatePortfolioDashboard;
