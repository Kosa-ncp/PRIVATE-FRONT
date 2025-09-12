"use client";

// import { Bot, Brain, Send, User } from "lucide-react";
// import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  // const [chatMessages, setChatMessages] = useState([
  //   {
  //     id: 1,
  //     type: "bot",
  //     message:
  //       "안녕하세요! 포트폴리오 AI 분석가입니다. 궁금한 것이 있으시면 언제든 물어보세요.",
  //     timestamp: new Date(),
  //   },
  // ]);
  // const [currentMessage, setCurrentMessage] = useState("");
  // const chatEndRef = useRef<null>(null);

  // const handleSendMessage = () => {
  //   if (!currentMessage.trim()) return;

  //   const userMessage = {
  //     id: Date.now(),
  //     type: "user",
  //     message: currentMessage,
  //     timestamp: new Date(),
  //   };

  //   setChatMessages((prev) => [...prev, userMessage]);

  //   // AI 응답 시뮬레이션
  //   setTimeout(() => {
  //     const botResponse = generateBotResponse(currentMessage);
  //     const botMessage = {
  //       id: Date.now() + 1,
  //       type: "bot",
  //       message: botResponse,
  //       timestamp: new Date(),
  //     };
  //     setChatMessages((prev) => [...prev, botMessage]);
  //   }, 1000);

  //   setCurrentMessage("");
  // };

  // // 자산별 수익률 계산
  // const calculateAssetPerformance = () => {
  //   return assets.map((asset) => ({
  //     name: asset.name,
  //     return: (
  //       ((asset.currentValue - asset.purchasePrice) / asset.purchasePrice) *
  //       100
  //     ).toFixed(1),
  //     profit: asset.currentValue - asset.purchasePrice,
  //     color: asset.currentValue >= asset.purchasePrice ? "#4ECDC4" : "#FF6B6B",
  //   }));
  // };

  // // 총 자산 계산
  // const getTotalStats = () => {
  //   const totalCurrent = assets.reduce(
  //     (sum, asset) => sum + asset.currentValue,
  //     0
  //   );
  //   const totalPurchase = assets.reduce(
  //     (sum, asset) => sum + asset.purchasePrice,
  //     0
  //   );
  //   const profit = totalCurrent - totalPurchase;
  //   const returnRate = ((profit / totalPurchase) * 100).toFixed(1);

  //   return {
  //     totalCurrent,
  //     totalPurchase,
  //     profit,
  //     returnRate,
  //   };
  // };

  // const calculatePortfolioData = () => {
  //   const typeGroups = assets.reduce((acc, asset) => {
  //     if (!acc[asset.type]) acc[asset.type] = 0;
  //     acc[asset.type] += asset.currentValue;
  //     return acc;
  //   }, {});

  //   const total = Object.values(typeGroups).reduce(
  //     (sum, value) => sum + value,
  //     0
  //   );
  //   const colors = {
  //     국내주식: "#FF6B6B",
  //     해외주식: "#4ECDC4",
  //     부동산: "#45B7D1",
  //     가상자산: "#96CEB4",
  //     예적금: "#FFEAA7",
  //     기타: "#DDA0DD",
  //   };

  //   return Object.entries(typeGroups).map(([type, value]) => ({
  //     name: type,
  //     value: Math.round((value / total) * 100),
  //     amount: value,
  //     color: colors[type] || "#DDA0DD",
  //   }));
  // };

  // const generateBotResponse = (userInput) => {
  //   const stats = getTotalStats();
  //   const portfolioData = calculatePortfolioData();
  //   const assetPerformance = calculateAssetPerformance();

  //   if (userInput.includes("수익률") || userInput.includes("수익")) {
  //     return `현재 총 수익률은 ${stats.returnRate}%입니다. 총 평가금액 ${(stats.totalCurrent / 10000).toFixed(0)}만원으로 ${stats.profit > 0 ? "+" : ""}${(stats.profit / 10000).toFixed(1)}만원의 ${stats.profit > 0 ? "수익" : "손실"}이 발생했습니다.`;
  //   }

  //   if (userInput.includes("포트폴리오") || userInput.includes("비중")) {
  //     const topAsset = portfolioData.sort((a, b) => b.value - a.value)[0];
  //     return `현재 포트폴리오에서 가장 큰 비중을 차지하는 것은 ${topAsset.name}(${topAsset.value}%)입니다. 총 ${portfolioData.length}개 자산군에 분산투자하고 계시네요.`;
  //   }

  //   if (userInput.includes("추천") || userInput.includes("조언")) {
  //     return `현재 포트폴리오를 분석한 결과, 다음과 같은 조언을 드립니다:\n\n1. 위험 자산과 안전 자산의 균형을 고려해보세요\n2. 정기적인 리밸런싱을 통해 목표 비중을 유지하세요\n3. 장기 투자 관점에서 꾸준한 분할 매수를 고려해보세요`;
  //   }

  //   return `포트폴리오에 대해 더 구체적으로 질문해주세요. 수익률, 자산 비중, 투자 전략 등에 대해 도움드릴 수 있습니다.`;
  // };

  // useEffect(() => {
  //   chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [chatMessages]);

  // return (
  //   <div className="space-y-6">
  //     {/* 챗봇 인터페이스 */}
  //     <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
  //       {/* 챗봇 헤더 */}
  //       <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
  //         <div className="flex items-center space-x-3">
  //           <div className="bg-white/20 p-2 rounded-lg">
  //             <Brain className="w-6 h-6 text-white" />
  //           </div>
  //           <div>
  //             <h3 className="text-xl font-semibold text-white">
  //               AI 포트폴리오 어시스턴트
  //             </h3>
  //             <p className="text-purple-100 text-sm">
  //               포트폴리오에 대해 무엇이든 물어보세요
  //             </p>
  //           </div>
  //         </div>
  //       </div>

  //       {/* 채팅 영역 */}
  //       <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-750">
  //         {chatMessages.map((message) => (
  //           <div
  //             key={message.id}
  //             className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
  //             <div
  //               className={`flex space-x-2 max-w-xs lg:max-w-md ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
  //               <div
  //                 className={`w-8 h-8 rounded-full flex items-center justify-center ${
  //                   message.type === "user" ? "bg-purple-500" : "bg-gray-600"
  //                 }`}>
  //                 {message.type === "user" ? (
  //                   <User className="w-4 h-4 text-white" />
  //                 ) : (
  //                   <Bot className="w-4 h-4 text-white" />
  //                 )}
  //               </div>
  //               <div
  //                 className={`p-3 rounded-lg ${
  //                   message.type === "user"
  //                     ? "bg-purple-500 text-white"
  //                     : "bg-gray-700 text-gray-100"
  //                 }`}>
  //                 <p className="text-sm whitespace-pre-line">
  //                   {message.message}
  //                 </p>
  //                 <p className="text-xs opacity-70 mt-1">
  //                   {message.timestamp.toLocaleTimeString("ko-KR", {
  //                     hour: "2-digit",
  //                     minute: "2-digit",
  //                   })}
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //         <div ref={chatEndRef} />
  //       </div>

  //       {/* 메시지 입력 */}
  //       <div className="p-4 border-t border-gray-700">
  //         <div className="flex space-x-2">
  //           <input
  //             type="text"
  //             value={currentMessage}
  //             onChange={(e) => setCurrentMessage(e.target.value)}
  //             onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
  //             placeholder="포트폴리오에 대해 질문해보세요..."
  //             className="flex-1 bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
  //           />
  //           <button
  //             onClick={handleSendMessage}
  //             className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2 rounded-lg transition-all">
  //             <Send className="w-5 h-5" />
  //           </button>
  //         </div>

  //         {/* 추천 질문 */}
  //         <div className="mt-3 flex flex-wrap gap-2">
  //           {["현재 수익률은?", "포트폴리오 비중은?", "투자 조언 부탁해"].map(
  //             (question) => (
  //               <button
  //                 key={question}
  //                 onClick={() => setCurrentMessage(question)}
  //                 className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded-full transition-colors">
  //                 {question}
  //               </button>
  //             )
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return <div>챗봇</div>;
};

export default Page;
