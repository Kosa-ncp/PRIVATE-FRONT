import { useMutation, useQueryClient } from "@tanstack/react-query";
import sendChatMessage from "../utils/sendChatMessage";

interface ChatbotResponseDataType {
  response: string;
  // 필요에 따라 다른 필드들 추가 가능
  // timestamp?: string;
  // conversationId?: string;
}

const useSendChatMessage = () => {
  // const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending, error } = useMutation<
    ChatbotResponseDataType,
    Error,
    string
  >({
    mutationFn: sendChatMessage,

    onSuccess: async (data) => {
      // // 챗봇 관련 쿼리들을 무효화 (필요한 경우)
      // await Promise.all([
      //   queryClient.invalidateQueries({ queryKey: ["chatHistory"] }),
      //   queryClient.invalidateQueries({ queryKey: ["conversations"] }),
      // ]);

      console.log("챗봇 응답:", data.response);
    },

    onError: (error) => {
      console.error("챗봇 메시지 전송 실패:", error);
    },
  });

  return { mutate, mutateAsync, isPending, error };
};

export default useSendChatMessage;
