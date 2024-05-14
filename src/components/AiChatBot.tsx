"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rocket } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
// import { useSession } from "next-auth/react";
import { Plus } from "lucide-react";
import axios from "axios";

function AiChatBot() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      message: "Hello, I am Sage. How can I help you ?",
    },
  ]);

  const addMessage = (from, message) => {
    setMessages((prev) => [...prev, { from, message }]);
  };

  const url = process.env.NEXT_PUBLIC_GEMINI_API;

  console.log(url);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hello");
    setLoading(true);

    if (input.trim() === "") return;
    addMessage("user", input);

    axios
      .post(url + "/chat", {
        message: input,
      })
      .then((res) => {
        addMessage("bot", res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    setInput("");
  }
  return (
    <main className="mx-6 mt-4">
      <h1 className="text-[#1A1A1A] text-3xl mb-5 font-medium border-b border-lightsilver pb-4">
        Sage
      </h1>
      {/* <hr /> */}
      <div className="space-y-4 pt-4 min-h-[70%] overflow-auto pb-48 mt-6">
        {messages.map((message, i) => (
          <Message key={i} from={message.from} message={message.message} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={loading}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white border-[#707070]  border px-6 py-3 fixed w-[87%] md:w-[90%] bottom-[6rem] rounded-sm "
          type="text"
          placeholder="Type or say to begin chat..."
        />
        <button
          disabled={loading}
          className="fixed bottom-[6rem] right-[10%] -translate-y-3 bg-[#006D77] text-white p-2 rounded-sm"
        >
          <Rocket size={12} />
        </button>
      </form>
    </main>
  );
}

function Message({ from, message }) {
//   const { data } = useSession();
//   const userImage = data?.user?.image;
  return (
    <div
      className={twMerge(
        "flex flex-col w-[90%] gap-1.5 rounded-[0.9375rem] border border-[#8D8D8D] p-5 text-[0.69156rem]",
        from === "bot" && "mr-auto",
        from === "user" && "translate-x-[30px] bg-[#006D77]"
      )}
    >
      <div>
        <Avatar
          className={twMerge(
            "w-8 h-8 rounded-full",
            from === "bot" && "mr-auto",
            from === "user" && "ml-auto "
          )}
        >
          <AvatarImage src={from === "bot" ? "/next.svg" : "/next.svg"} />
        </Avatar>
      </div>
      <div
        className={twMerge(
          "rounded-[1.875rem] flex-grow text-[#111] text-sm",
          from === "bot" && "text-left",
          from === "user" && "text-right text-white"
        )}
      >
        {message}
      </div>
    </div>
  );
}
export default AiChatBot;