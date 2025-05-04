import { LoginForm } from './LoginForm';
function LoginPage() {
  return <main className="flex min-h-screen w-full bg-gray-50">
      {/* Left side - decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800 opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-white/5">
          <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
          opacity: 0.2
        }}></div>
        </div>
        <div className="relative z-10 text-white max-w-md">
          <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Sign in to access your account and continue your journey with us.
            We're excited to have you back!
          </p>
        </div>
      </div>
      {/* Right side - login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
            <p className="text-gray-500 mt-2">
              Enter your credentials to access your account
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>;
}
export default LoginPage;