import { useMutation } from "@tanstack/react-query";
import sendChatMessage from "../utils/sendChatMessage";

interface ChatbotResponseDataType {
  response: string;
}

const useSendChatMessage = () => {
  const { mutate, mutateAsync, isPending, error } = useMutation<
    ChatbotResponseDataType,
    Error,
    string
  >({
    mutationFn: sendChatMessage,

    onSuccess: async (data) => {
      console.log("챗봇 응답:", data.response);
    },

    onError: (error) => {
      console.error("챗봇 메시지 전송 실패:", error);
    },
  });

  return { mutate, mutateAsync, isPending, error };
};

export default useSendChatMessage;
