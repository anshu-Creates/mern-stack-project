import Header from "../Header";
import Button from "../Button";
import { useState } from "react";
import API_URL from "../../api";

const Contact = () => {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      names,
      email,
      phone,
      subject,
      message,
    };
    setStatus("");
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const Backdata = await response.json();
      if (!response.ok) {
        throw new Error(Backdata.message || "Request failed");
      }
      setNames("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setStatus("Message sent successfully.");
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white px-5 py-10">
      <Header h1="CONTACT" h2="US" />
      <div className="p-5 flex justify-around items-center">
        <div className="text-lg text-blue-800 font-mono">
          <p>
            <span className="font-bold text-blue-900">Address : </span>
            Thane(West), 400610
          </p>
          <p>
            <span className="font-bold text-blue-900">Phone : </span>+91 98765
            43210 / +91 98765 43210
          </p>
          <p>
            <span className="font-bold text-blue-900">Email : </span>
            xyz123@abc.com
          </p>
        </div>
        <img src="/assets/f6.png" alt="contact" className="w-60 h-40" />
      </div>
      <form
        className="flex p-5 flex-col border-2 border-blue-800 my-5"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="border border-blue-400 outline-none text-blue-900  placeholder:text-blue-400 p-2 m-2"
          value={names}
          required
          onChange={(e) => {
            setNames(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-blue-400  outline-none text-blue-900 placeholder:text-blue-400 p-2 m-2"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Phone Numbar"
          className="border border-blue-400  outline-none text-blue-900  placeholder:text-blue-400 p-2 m-2"
          value={phone}
          required
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Subject"
          className="border border-blue-400  outline-none text-blue-900  placeholder:text-blue-400 p-2 m-2"
          value={subject}
          required
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <textarea
          rows={7}
          placeholder="Your Message"
          className="border border-blue-400  outline-none text-blue-900  placeholder:text-blue-400 p-2 m-2"
          value={message}
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <Button title={isSubmitting ? "Sending..." : "Submit"} />
        {status && (
          <p className="text-blue-800" role="status">
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
