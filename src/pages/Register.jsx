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
        form.bio
      );
      navigate("/feed");
    } catch (err) {
      console.log(err);
      setError("Registration Failed. Try again.");
    }
  };

  return (
    <Container className="min-h-screen pt-32">
      <div className="flex items-center h-full justify-center">
        <div className="space-y-4 bg-secondary px-4 py-8 rounded-2xl text-background max-w-screen">
          <h1 className="text-5xl font-bold">Create your account</h1>

          {error && (
            <div className="mb-4 text-error font-semibold">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col w-[95%] gap-4">
            <div className="flex flex-col">
              <label className="">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="text-xl border-2 px-4 py-0.5 rounded                 
                focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:min-w-0">
              <div className="flex flex-col flex-1 min-w-0">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  value={form.first_name}
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                  className="text-xl border-2 px-4 py-0.5 rounded                 
                focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  value={form.last_name}
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                  className="text-xl border-2 px-4 py-0.5 rounded                 
                focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:min-w-0 ">
              <div className="flex flex-col flex-1 min-w-0">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="text-xl border-2 px-4 py-0.5 rounded                 
                focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={form.password_confirmation}
                  onChange={(e) =>
                    setForm({ ...form, password_confirmation: e.target.value })
                  }
                  className="text-xl border-2 px-4 py-0.5 rounded                 
                focus:outline-none focus:ring-2 focus:ring-accent"
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
                className="text-xl border-2 px-4 py-2 rounded                 
                focus:outline-none focus:ring-2 focus:ring-accent"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="border-2 text-lg py-1 rounded border-background bg-accent font-bold hover:cursor-pointer"
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
