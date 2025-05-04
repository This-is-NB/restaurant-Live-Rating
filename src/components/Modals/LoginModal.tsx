import React, { useState } from "react";

interface LoginModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  onSendOtp?: (phone: string) => void;
  error?: string;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, setShow, onSendOtp, error }) => {
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);

  if (!show) return null;

  const isValid = /^[0-9]{10}$/.test(phone);

  const handleSendOtp = (e: React.MouseEvent) => {
    e.preventDefault();
    setTouched(true);
    if (isValid && onSendOtp) {
      onSendOtp(phone);
    }
  };

  return (
    <div className="modal modal-top fade show" tabIndex={-1} style={{display: "block", background: "rgba(0,0,0,0.3)"}}>
      <div className="modal-dialog modal-content" >
        <div className="d-flex xross padding-20 z-index-3"  style={{position: "absolute", right: 5, top: 5}}>
          <button
            type="button"
            className="p-0"
            aria-label="Close"
            onClick={() => setShow(false)}
            style={{background: "none", border: "none"}}
          >
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_8_162)">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#666666"></path>
              </g>
              <defs>
                <clipPath id="clip0_8_162">
                  <rect fill="white" height="24" width="24"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        {(!!error || (touched && !isValid)) && (
          <div className="alert alert-danger" role="alert" style={{bottom: "auto", top: 0}}>
            <span>{error || "Please enter a valid 10 digit phone number."}</span>
          </div>
        )}
        <div id="loginModal" className="modal-body">
          <p  className="mb-2 login-common-heading">Login to continue</p>
          <p className="mb-3">You will receive a text message to verify your account.</p>
          <form className="form-email mb-0" onSubmit={e => e.preventDefault()}>
            <label htmlFor="mobileNo" className="label-p new-label-p" style={{color: "var(--main-bg-color)"}}>
              Phone Number
            </label>
            <div className="input-group">
              <input
                type="tel"
                className="form-control"
                id="mobileNo"
                placeholder="Enter 10 Digits Phone No."
                maxLength={10}
                autoComplete="off"
                pattern="[0-9]{10}"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, ""))}
                onBlur={() => setTouched(true)}
              />
            </div>
          </form>
          <button
            type="submit"
            className={`submit_btn animatebtn${isValid ? "" : " disable"}`}
            style={{marginTop: 16, width: "100%"}}
            disabled={!isValid}
            onClick={handleSendOtp}
          >
            Send OTP
          </button>
          <div className="center-line mt-0" id="truecallerOr" style={{display: "none"}}>
            <span className="or-span">or</span>
          </div>
          <button
            className="mail-btn mail-btns mb-3"
            style={{display: "none"}}
            type="button"
          >
            Continue with <img src="https://kakedihatti.com/assets/wla_new/img/truecaller-icon.png" alt="Truecaller Icon" loading="lazy" />
          </button>
          <p className="dont-have-account" style={{fontWeight: 400}}>
            By continuing, you agree to our{" "}
            <a href="https://kakedihatti.com/terms-and-conditions" target="_blank" rel="noopener noreferrer">
              Terms of services
            </a>{" "}
            &amp;{" "}
            <a href="https://kakedihatti.com/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;