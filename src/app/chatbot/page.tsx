"use client";

import { Bot, Brain, Send, User } from "lucide-react";
import { useRef, useState } from "react";

const Page = () => {
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

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      message: currentMessage,
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, userMessage]);

    // setTimeout(() => {
    //   const botResponse = generateBotResponse(currentMessage);
    //   const botMessage = {
    //     id: Date.now() + 1,
    //     type: "bot",
    //     message: botResponse,
    //     timestamp: new Date(),
    //   };
    //   setChatMessages((prev) => [...prev, botMessage]);
    // }, 1000);

    setCurrentMessage("");
  };

  return (
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
                    message.type === "user" ? "bg-purple-500" : "bg-gray-600"
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
            {["현재 수익률은?", "포트폴리오 비중은?", "투자 조언 부탁해"].map(
              (question) => (
                <button
                  key={question}
                  onClick={() => setCurrentMessage(question)}
                  className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded-full transition-colors">
                  {question}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
