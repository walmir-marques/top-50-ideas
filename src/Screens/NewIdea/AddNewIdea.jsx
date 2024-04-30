import { ChevronLeft, Info, Send } from "lucide-react";
import Header from "../Home/components/Header";

function AddNewIdea() {
  return (
    <div>
      <Header />

      <button className="btn mt-7 flex items-center">
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
        ></textarea>
      </div>
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
        />
      </div>
      <button className="btn w-full btn-primary mt-7">
        Enviar <Send className="w-4 h-4" />
      </button>
    </div>
  );
}
export default AddNewIdea;
