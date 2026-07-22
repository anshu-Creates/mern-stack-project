import React from "react";
import Header from "../Header";
import Button from "../Button";
import { useState } from "react";

const Contact = () => {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      names,
      email,
      phone,
      subject,
      message,
    };

    const response = await fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const Backdata = await response.json();
    console.log(Backdata);

    setNames("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
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
        <img src="/src/assets/f6.png" alt="contact" className="w-60 h-40" />
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
          onChange={(e) => {
            setNames(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-blue-400  outline-none text-blue-900 placeholder:text-blue-400 p-2 m-2"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Phone Numbar"
          className="border border-blue-400  outline-none text-blue-900  placeholder:text-blue-400 p-2 m-2"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Subject"
          className="border border-blue-400  outline-none text-blue-900  placeholder:text-blue-400 p-2 m-2"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <textarea
          rows={7}
          placeholder="Your Message"
          className="border border-blue-400  outline-none text-blue-900  placeholder:text-blue-400 p-2 m-2"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <Button title="Submit" />
      </form>
    </div>
  );
};

export default Contact;
