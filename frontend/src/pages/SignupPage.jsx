import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { MessageCircleIcon, LockIcon, MailIcon, UserIcon, LoaderIcon } from "lucide-react";
import { Link } from "react-router";

function SignUpPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-5xl">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row md:min-h-[560px]">  {/* 700px → 560px */}

            {/* FORM COLUMN - LEFT SIDE */}
            <div className="md:w-1/2 flex items-center justify-center p-6 md:border-r border-slate-600/30">  {/* p-8 → p-6 */}
              <div className="w-full max-w-sm">  {/* max-w-md → max-w-sm */}

                {/* HEADING TEXT */}
                <div className="text-center mb-6">  {/* mb-8 → mb-6 */}
                  <MessageCircleIcon className="w-10 h-10 mx-auto text-slate-400 mb-3" />  {/* w-12 h-12 → w-10 h-10 */}
                  <h2 className="text-xl font-bold text-slate-200 mb-1">Create Account</h2>  {/* text-2xl → text-xl */}
                  <p className="text-sm text-slate-400">Sign up for a new account</p>
                </div>

                {/* FORM */}
                <div className="space-y-4">  {/* space-y-6 → space-y-4 */}
                  {/* FULL NAME */}
                  <div>
                    <label className="auth-input-label">Full Name</label>
                    <div className="relative">
                      <UserIcon className="auth-input-icon" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="input"
                        placeholder="Raju Baba"
                      />
                    </div>
                  </div>

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
                        placeholder="youremailid@gmail.com"
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
                  <button className="auth-btn" onClick={handleSubmit} disabled={isSigningUp}>
                    {isSigningUp ? (
                      <LoaderIcon className="w-5 h-5 mx-auto animate-spin" />
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </div>

                <div className="mt-4 text-center">  {/* mt-6 → mt-4 */}
                  <Link to="/login" className="auth-link">
                    Already have an account? Login
                  </Link>
                </div>
              </div>
            </div>

            {/* ILLUSTRATION - RIGHT SIDE */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div className="flex flex-col items-center text-center w-full max-w-xs">
                <img
                  src="/signup.png"
                  alt="People using mobile devices"
                  className="w-full max-w-[700px] h-auto object-contain"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-cyan-400">Start Your Journey Today</h3>
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
export default SignUpPage;