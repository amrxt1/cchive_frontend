import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "../components/shared/Container";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate("/feed");
    } catch {
      setError("Login failed. Check your credentials.");
    }
  };

  return (
    <Container className="py-48 sm:pt-0">
      <div className="flex h-full items-center justify-center">
        <div className="bg-secondary text-background space-y-4 rounded-2xl px-4 py-8">
          <h1 className="text-5xl font-bold">Welcome back</h1>
          {error && (
            <p role="alert" className="text-error pb-2 font-semibold">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit} className="flex w-19/20 flex-col gap-4">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className="focus:ring-accent rounded border-2 px-4 py-2 text-2xl focus:ring-2 focus:outline-none"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                className="focus:ring-accent rounded border-2 px-4 py-2 text-2xl focus:ring-2 focus:outline-none"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="border-background bg-accent rounded border-2 py-2 font-bold hover:cursor-pointer"
            >
              Log In
            </button>
          </form>

          <p className="">
            Don’t have an account?{" "}
            <Link to="/register" className="text-background font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
