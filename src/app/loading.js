export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#081028] via-[#0F172A] to-[#1D4ED8] flex items-center justify-center z-50">
      {/* Container */}
      <div className="flex flex-col items-center gap-8">
        {/* Animated Spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white border-r-blue-300 animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold mb-2">
            Loading
          </h1>
          <p className="text-blue-100 text-sm font-medium tracking-widest">
            Please wait...
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}