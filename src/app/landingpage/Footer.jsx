export default function LandingFooter() {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <img
          src="/assets/logo.jpeg"
          alt="Fintax Adviser"
          className="h-12 mx-auto mb-4 rounded-2xl"
        />

        <p className="text-slate-300 text-sm">
          © {new Date().getFullYear()} Fintax Adviser. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}