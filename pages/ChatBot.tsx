import { useState } from "react";

export default function Chat() {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState<{ name: string; message: string }[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setMessages((prevState) => [...prevState, { name, message: inputValue }]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center h-screen w-full bg-gray-50">
      <div className="flex flex-col items-center justify-center fixed bottom-20 w-3/5 rounded-lg bg-white border border-gray-300 p-6 shadow-lg">
        <div className="text-lg font-bold mb-2">Enter your name:</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
        />
        <div className="flex items-center mt-4 space-x-2 w-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between h-3/5 max-w-lg mx-auto my-10 p-4 rounded-lg bg-white border border-gray-300 shadow-lg w-full">
        <h1 className="text-4xl font-bold mb-4">Chat Room</h1>
        <div className="flex flex-col h-full items-start gap-2 justify-start overflow-y-scroll overflow-x-hidden w-96">


          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                message.name === name ? "bg-blue-100" : "bg-gray-100"
              }`}
            >
              <p className="text-lg font-bold mb-2">{message.name}</p>
              <p>{message.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
