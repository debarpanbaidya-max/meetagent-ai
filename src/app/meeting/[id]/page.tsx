"use client";

import { useParams } from "next/navigation";

export default function MeetingPage() {
  const params = useParams();
  const agentId = params.id;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Meeting with AI Agent {agentId}</h1>
      <div className="bg-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-3xl">
        <p className="mb-4">
          You are now in a live meeting session with <span className="text-indigo-400">Agent {agentId}</span>.
        </p>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700">Enable Video</button>
          <button className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600">Mute</button>
          <button className="px-4 py-2 rounded bg-red-600 hover:bg-red-700">End Meeting</button>
        </div>
      </div>
    </div>
  );
}
