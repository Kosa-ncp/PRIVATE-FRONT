import instance from "./instance";

// 챗봇 요청/응답 타입 정의
interface ChatbotRequestData {
  message: string;
}

interface ChatbotResponseTypes {
  status: string;
  data: ChatbotResponseDataType;
}

interface ChatbotResponseDataType {
  response: string;
  // 필요에 따라 다른 필드들 추가 가능
  // timestamp?: string;
  // conversationId?: string;
}

const sendChatMessage = async (
  message: string
): Promise<ChatbotResponseDataType> => {
  try {
    const requestBody: ChatbotRequestData = { message };

    const res = await instance("/api/chatbot", {
      method: "POST",
      body: JSON.stringify(requestBody),
    });

    const result: ChatbotResponseTypes = await res.json();
    const data: ChatbotResponseDataType = result.data;

    return data;
  } catch (error) {
    throw error;
  }
};

export default sendChatMessage;

// 타입들도 export (필요한 경우)
export type {
  ChatbotRequestData,
  ChatbotResponseTypes,
  ChatbotResponseDataType,
};
