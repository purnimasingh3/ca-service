import { useEffect, useState } from "react";
import logo from "asstes/logo.jpeg"; // apna logo image yaha import karo
import "./LogoAnimation.css"; // CSS file for animation styles

export default function LogoAnimation() {
  const [showSlogan, setShowSlogan] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSlogan(true);

      setTimeout(() => {
        setShowSlogan(false);
      }, 2500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-container">
      <div className={`logo-wrapper ${showSlogan ? "hide" : "show"}`}>
        <img src={logo} alt="Fintax Adviser" className="logo" />
      </div>
            <div className={`slogan ${showSlogan ? "visible" : "hidden"}`}>
        STRONG FINANCE. STRONG FUTURE.
      </div>
    </div>
  );
}