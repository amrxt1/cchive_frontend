import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Container from "../components/shared/Container";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
    bio: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.password_confirmation) {
      return setError("Passwords do not match.");
    }

    try {
      await register(
        form.email,
        form.password,
        form.first_name,
        form.last_name,
        form.bio,
      );
      navigate("/feed");
    } catch (err) {
      console.log(err);
      setError("Registration Failed. Try again.");
    }
  };

  return (
    <Container className="py-16">
      <div className="flex h-full items-center justify-center">
        <div className="bg-secondary text-background max-w-screen space-y-4 rounded-2xl px-4 py-8">
          <h1 className="text-5xl font-bold">Create your account</h1>

          {error && (
            <div className="text-error mb-4 font-semibold">{error}</div>
          )}

          <form
            onSubmit={handleSubmit}
            className="text-surface flex flex-col gap-4 text-lg"
          >
            <div className="flex flex-col">
              <label className="">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="focus:ring-accent rounded border-2 px-4 py-0.5 text-xl focus:ring-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-4 sm:min-w-0 sm:flex-row">
              <div className="flex min-w-0 flex-1 flex-col">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  value={form.first_name}
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                  className="focus:ring-accent rounded border-2 px-4 py-0.5 text-xl focus:ring-2 focus:outline-none"
                  required
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  value={form.last_name}
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                  className="focus:ring-accent rounded border-2 px-4 py-0.5 text-xl focus:ring-2 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:min-w-0 sm:flex-row">
              <div className="flex min-w-0 flex-1 flex-col">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="focus:ring-accent rounded border-2 px-4 py-0.5 text-xl focus:ring-2 focus:outline-none"
                  required
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={form.password_confirmation}
                  onChange={(e) =>
                    setForm({ ...form, password_confirmation: e.target.value })
                  }
                  className="focus:ring-accent rounded border-2 px-4 py-0.5 text-xl focus:ring-2 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Bio (optional)</label>
              <textarea
                placeholder="Tell us a little about yourself..."
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                className="focus:ring-accent rounded border-2 px-4 py-2 text-xl focus:ring-2 focus:outline-none"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="border-background bg-text rounded border-2 py-1 text-lg font-bold hover:cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
