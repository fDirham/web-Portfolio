import axios from "axios";

export async function portfolioChat(
  newMessage: string,
  prevMessages: { role: string; content: string }[]
): Promise<string> {
  const BASE_URL = "http://127.0.0.1:5001/fbd-pages/us-central1/";
  const ENDPOINT = BASE_URL + "portfolioChat";

  const res = await axios.post(ENDPOINT, {
    newMessage,
    prevMessages,
  });

  return res.data.reply;
}
