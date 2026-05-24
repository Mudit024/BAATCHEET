import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { MessageCircleIcon, MailIcon, LoaderIcon, LockIcon } from "lucide-react";
import { Link } from "react-router";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
  <div className="w-full min-h-screen flex items-center justify-center p-4 bg-slate-900">
    <div className="relative w-full max-w-5xl">
      <BorderAnimatedContainer>
        <div className="w-full flex flex-col md:flex-row md:min-h-[560px]">

          {/* FORM COLUMN - LEFT SIDE */}
          <div className="md:w-1/2 flex items-center justify-center p-6 md:border-r border-slate-600/30">
            <div className="w-full max-w-sm">

              {/* HEADING TEXT */}
              <div className="text-center mb-6">
                <MessageCircleIcon className="w-10 h-10 mx-auto text-slate-400 mb-3" />
                <h2 className="text-xl font-bold text-slate-200 mb-1">Welcome Back</h2>
                <p className="text-sm text-slate-400">Login to access your account</p>
              </div>

              {/* FORM */}
              <div className="space-y-4">
                {/* EMAIL INPUT */}
                <div>
                  <label className="auth-input-label">Email</label>
                  <div className="relative">
                    <MailIcon className="auth-input-icon" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input"
                      placeholder="yourmailid@gmail.com"
                    />
                  </div>
                </div>

                {/* PASSWORD INPUT */}
                <div>
                  <label className="auth-input-label">Password</label>
                  <div className="relative">
                    <LockIcon className="auth-input-icon" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="input"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button className="auth-btn" onClick={handleSubmit} disabled={isLoggingIn}>
                  {isLoggingIn ? (
                    <LoaderIcon className="w-5 h-5 mx-auto animate-spin" />
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>

              <div className="mt-4 text-center">
                <Link to="/signup" className="auth-link">
                  Don't have an account? Sign Up
                </Link>
              </div>
            </div>
          </div>

          {/* ILLUSTRATION - RIGHT SIDE */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
            <div className="flex flex-col items-center text-center w-full max-w-xs">
              <img
                src="/login.png"
                alt="People using mobile devices"
                className="w-full max-w-[320px] h-auto object-contain"
              />
              <div className="mt-4">
                <h3 className="text-lg font-medium text-cyan-400">Connect anytime, anywhere</h3>
                <div className="mt-3 flex justify-center gap-3 flex-wrap">
                  <span className="auth-badge">Free</span>
                  <span className="auth-badge">Easy Setup</span>
                  <span className="auth-badge">Private</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </BorderAnimatedContainer>
    </div>
  </div>
);
}
export default LoginPage;