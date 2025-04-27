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
    <Container className="h-screen sm:pt-0">
      <div className="h-full flex justify-center items-center">
        <div className="space-y-4 bg-secondary px-4 py-8 rounded-2xl text-background">
          <h1 className="text-5xl font-bold">Welcome back</h1>
          {error && (
            <p role="alert" className="font-semibold text-error pb-2">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col w-19/20 gap-4">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className="text-2xl border-2 px-4 py-2 rounded                 
                focus:outline-none focus:ring-2 focus:ring-accent"
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
                className="text-2xl border-2 px-4 py-2 rounded
                focus:outline-none focus:ring-2 focus:ring-accent"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="border-2 rounded py-2 border-background bg-accent font-bold hover:cursor-pointer"
            >
              Log In
            </button>
          </form>

          <p className="">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
