import axios from "axios";

export async function portfolioChat(
  newMessage: string,
  prevMessages: { role: string; content: string }[]
): Promise<string> {
  // FOR EMULATORS
  //   const ENDPOINT = "http://127.0.0.1:5001/fbd-pages/us-central1/portfolioChat/";

  const ENDPOINT = "https://portfoliochat-jbbpuvm5sq-uc.a.run.app ";

  const res = await axios.post(ENDPOINT, {
    newMessage,
    prevMessages,
  });

  return res.data.reply;
}
