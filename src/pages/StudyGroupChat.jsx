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
          console.log(data);
          setMessages((prev) => [...prev, data]);
        },
      }
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
    <Container>
      <div>
        <h1>Study Group Chat</h1>

        <div>
          {messages.map((msg, i) => (
            <div key={i} className="mb-2">
              <span>{msg.full_name}</span>:{" "}
              <span>{msg.message || msg.content}</span>
              {msg.created_at && (
                <span>({new Date(msg.created_at).toLocaleTimeString()})</span>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Type your message..."
          />
          <button>Send</button>
        </form>
      </div>
    </Container>
  );
};

export default StudyGroupChat;
