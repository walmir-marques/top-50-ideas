"use client";

import { ChevronLeft, Info, Send } from "lucide-react";
import Header from "../Home/components/Header";
import { useEffect, useState } from "react";
import { db } from "../../../utils/index";
import { Ideas } from "../../../utils/schema";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function AddNewIdea() {
  const navigation = useNavigate();
  const [idea, setIdea] = useState("");
  const [username, setUsername] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [existingUser, setExistingUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
      setExistingUser(true);
    }
  }, [showAlert]);

  const onSaveHandler = async () => {
    const result = await db
      .insert(Ideas)
      .values({
        content: idea,
        username: username,
        createdAt: moment().format("DD MM YYYY"),
      })
      .returning({ id: Ideas.id });

    if (result) {
      localStorage.setItem("username", username);
      setIdea("");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div>
      <Header />

      {showAlert && (
        <div role="alert" className="alert alert-success mt-5 shadow-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Idéia cadastrada com sucesso!</span>
        </div>
      )}

      <button
        className="btn mt-7 flex items-center"
        onClick={() => navigation("/")}
      >
        <ChevronLeft />
        Back
      </button>
      <h2 className="font-bold text-2xl mt-5">
        Do conceito a criação. Empodere a jornada da sua Startup.
      </h2>
      <div className="flex flex-col mt-7 gap-2">
        <label>Sua Idéia *</label>
        <textarea
          className="textarea textarea-bordered border-primary"
          placeholder="Digite a sua idéia aqui ..."
          onChange={(e) => setIdea(e.target.value)}
          value={idea}
        ></textarea>
      </div>
      {!existingUser && (
        <div
          className="flex flex-col mt-7 gap-2
      "
        >
          <label className="flex justify-between">
            Seu nome de usuário *
            <span className="flex items-center gap-2 text-sm">
              <Info className="w-4 h-4" /> Não precisa criar conta.
            </span>
          </label>
          <input
            type="text"
            placeholder="Digite um nome de usuário aqui ...."
            className="input input-bordered w-full  border-primary"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
      )}

      <button
        className="btn w-full btn-primary mt-7"
        disabled={!(idea && username)}
        onClick={() => onSaveHandler()}
      >
        Enviar <Send className="w-4 h-4" />
      </button>
    </div>
  );
}
export default AddNewIdea;
