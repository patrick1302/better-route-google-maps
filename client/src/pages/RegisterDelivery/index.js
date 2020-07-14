import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import Swal from "sweetalert2";

import "./styles.css";

const RegisterDelivery = () => {
  const INITIAL_STATE = {
    name: "",
    delivery_date: "",
    start_point_delivery: "",
    end_point_delivery: "",
  };
  const [inputsRegisterDelivery, setInputsRegisterDelivery] = useState(
    INITIAL_STATE
  );

  const registerDelivery = async () => {
    try {
      await api.post("/delivery", inputsRegisterDelivery);
      Swal.fire({
        text: "Entrega cadastrada com sucesso",
        icon: "success",
      });
      setInputsRegisterDelivery(INITIAL_STATE);
    } catch (e) {
      console.log(e);
      Swal.fire({
        text: "Houve um erro. Verifique se todos os campos estão preenchidos.",
        icon: "warning",
      });
    }
  };

  const handleChange = (e) => {
    setInputsRegisterDelivery({
      ...inputsRegisterDelivery,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <div className="box-register">
        <div className="box-form">
          <label className="label-register" htmlFor="name">
            Nome do cliente
          </label>
          <input
            className="input-register"
            id="name"
            name="name"
            type="text"
            placeholder="Ex: Shell"
            value={inputsRegisterDelivery.name}
            onChange={handleChange}
          />
        </div>
        <div className="box-form">
          <label className="label-register" htmlFor="delivery_date">
            Data de entrega
          </label>
          <input
            className="input-register"
            id="delivery_date"
            name="delivery_date"
            type="date"
            placeholder="Data de entrega"
            value={inputsRegisterDelivery.delivery_date}
            onChange={handleChange}
          />
        </div>
        <div className="box-form">
          <label className="label-register" htmlFor="start_point_delivery">
            Ponto de partida
          </label>
          <input
            className="input-register"
            id="start_point_delivery"
            name="start_point_delivery"
            type="text"
            placeholder="Ex: Rua Carioca, Centro, RJ"
            value={inputsRegisterDelivery.start_point_delivery}
            onChange={handleChange}
          />
        </div>
        <div className="box-form">
          <label className="label-register" htmlFor="end_point_delivery">
            Ponto de destino
          </label>
          <input
            className="input-register"
            id="end_point_delivery"
            name="end_point_delivery"
            type="text"
            placeholder="Ex: Uruguaiana, RJ"
            value={inputsRegisterDelivery.end_point_delivery}
            onChange={handleChange}
          />
        </div>
        <div className="div-button">
          <button
            className="button-register"
            onClick={() => registerDelivery()}
          >
            Cadastrar entrega
          </button>
        </div>
        <div className="div-link">
          <Link className="link-deliveries" to="/list_delivery">
            Exibir lista de entregas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterDelivery;
