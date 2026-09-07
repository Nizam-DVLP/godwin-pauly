import React,{useState} from 'react'
import Title from '../layouts/Title';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-200"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="STRATEGIC PARTNERSHIPS" des="Let's Connect" />
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <div className="w-full h-full py-10 bg-white border border-gray-200 flex flex-col gap-8 p-6 md:p-12 rounded-2xl shadow-shadowOne">
          <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2">
              {errMsg && (
                <p className="py-3 bg-red-50 border border-red-200 rounded-md text-center text-red-600 text-sm font-semibold tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-green-50 border border-green-200 rounded-md text-center text-green-700 text-sm font-semibold tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-3">
                  <p className="text-xs text-gray-700 font-bold uppercase tracking-wider">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-3">
                  <p className="text-xs text-gray-700 font-bold uppercase tracking-wider">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs text-gray-700 font-bold uppercase tracking-wider">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs text-gray-700 font-bold uppercase tracking-wider">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                  placeholder="Real Estate / Retail Collaboration"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs text-gray-700 font-bold uppercase tracking-wider">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                  placeholder="Tell me about the project or opportunity..."
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-black text-white font-bold rounded-lg text-sm tracking-widest uppercase hover:bg-gray-800 transition-all duration-300 shadow-md cursor-pointer"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-red-50 border border-red-200 rounded-md text-center text-red-600 text-sm font-semibold tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-green-50 border border-green-200 rounded-md text-center text-green-700 text-sm font-semibold tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
    </section>
  );
}

export default Contact