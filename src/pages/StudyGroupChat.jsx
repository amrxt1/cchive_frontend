import Container from "../components/shared/Container";
import { useEffect, useState, useRef } from "react";
import { useCable } from "../context/CableContext";
import api from "../lib/api";
import { useParams } from "react-router-dom";

const StudyGroupChat = () => {
  const { id: studyGroupId } = useParams();
  const cable = useCable();
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await api.get(`/study_groups/${studyGroupId}/messages`);
      setMessages(res.data);
    };

    fetchMessages();
  }, [studyGroupId]);

  useEffect(() => {
    if (!cable) return;

    const subscription = cable.subscriptions.create(
      { channel: "StudyGroupChannel", study_group_id: studyGroupId },
      {
        received: (data) => {
          setMessages((prev) => [...prev, data]);
        },
      },
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [cable, studyGroupId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      await api.post(`/study_groups/${studyGroupId}/messages`, {
        message: {
          content,
          study_group_id: studyGroupId,
        },
      });
      setContent("");
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  return (
    <Container className="overflow-clip">
      <div className="mt-4 grid h-[100vh] gap-y-4 pb-20">
        <h1 className="text-primary text-3xl font-bold">Study Group Chat</h1>

        <div className="bg-surface overflow-scroll rounded-md px-2 py-4">
          {messages.map((msg, i) => (
            <div key={i} className="mb-2">
              <span className="text-primary">{msg.full_name}</span>:{" "}
              <span className="text-base">{msg.message || msg.content}</span>{" "}
              {msg.created_at && (
                <span className="text-text/60 text-xs">
                  {new Date(msg.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-surface grid w-full grid-cols-4 gap-x-2 rounded-md px-2 py-2"
        >
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-background text-md border-primary col-span-3 rounded-md border-2 px-2 py-1"
            placeholder="Type your message..."
          />
          <button className="bg-background border-primary rounded-md border-2">
            Send
          </button>
        </form>
      </div>
    </Container>
  );
};

export default StudyGroupChat;
