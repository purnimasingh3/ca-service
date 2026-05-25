import ConsultantForm from "./ConsultantForm";
import "./consultant.css";

export default function GetFreeConsultant() {
  return (
    <div className="consultant-page">

      <div className="consultant-left">
        <h1>Get Free Consultation</h1>

        <p>
          Talk to our tax and business experts for free and get
          professional guidance for your company registration,
          GST, ITR filing, compliance and more.
        </p>

        <div className="consultant-features">
          <div>✔ Free 15 Minutes Call</div>
          <div>✔ Expert CA Support</div>
          <div>✔ Quick Response</div>
          <div>✔ 100% Professional Guidance</div>
        </div>

        <img
          src="/consulting.png"
          alt="Consultation"
          className="consultant-image"
        />
      </div>

      <div className="consultant-right">
        <ConsultantForm />
      </div>

    </div>
  );
}