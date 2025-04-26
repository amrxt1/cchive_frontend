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
    <Container className="h-screen pt-16 sm:pt-0">
      <div className="h-full flex justify-center items-center">
        <div className="text-[1.25rem]">
          <h1 className="text-4xl font-bold pb-8">Welcome back to CCHive</h1>

          {error && (
            <p role="alert" className="font-semibold text-error pb-2">
              {error}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className=" w-full grid grid-cols-3 gap-y-4 gap-x-3"
          >
            <label className="col-span-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="border px-3 py-0.5 rounded font-special col-span-2"
            />

            <label className="col-span-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="border px-3 py-0.5 rounded font-special col-span-2 "
            />

            <button
              type="submit"
              className="col-span-3 text-2xl bg-accent rounded border-2 hover:bg-background hover:text-accent w-full "
            >
              Log In
            </button>
          </form>

          <p className="pt-8 flex gap-4 items-center">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="bg-accent px-4 py-1 rounded text-center flex-1 border hover:bg-background"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
