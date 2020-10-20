import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { useDispatch } from 'react-redux'
import { saveDeliveryLocation } from '../../actions'

import Swal from "sweetalert2";

import "./styles.css";

const ListDelivery = () => {
  const dispatch = useDispatch()
  const [listDelivery, setListDelivery] = useState([]);
  useEffect(() => {
    const getListDelivery = async () => {
      try {
        const { data } = await api.get("/delivery");
        setListDelivery(data);
      } catch (e) {
        console.log(e);
      }
    };
    getListDelivery();
  }, []);

  const deleteDelivery = async (id) => {
    try {
      await api.delete(`/delivery/${id}`);
      Swal.fire({
        text: "Entrega deletada com sucesso",
        icon: "success",
      });
      const deleteDeliveryFromArray = listDelivery.filter(
        (item) => item._id !== id
      );
      setListDelivery(deleteDeliveryFromArray);
    } catch (e) {
      console.log(e);
      Swal.fire({
        text: "Houve um erro ao deletar a entrega. Tente novamente.",
        icon: "warning",
      });
    }
  };

  const parseDateToPTBR = (date) => {
    const datePTBR = date.split("-");
    return `${datePTBR[2]}-${datePTBR[1]}-${datePTBR[0]}`;
  };
  return (
    <main className="main-table">
      <h1>Lista de entregas</h1>
      <Link className="link" to="/">
        Voltar para tela de cadastro de entregas
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Nome do cliente</th>
            <th>Data da entrega</th>
            <th>Ponto de partida</th>
            <th>Ponto de entrega</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listDelivery.map(
            ({
              _id,
              name,
              delivery_date,
              start_point_delivery,
              end_point_delivery,
            }) => (
                <tr key={_id}>
                  <td data-label="Nome do cliente">{name}</td>
                  <td data-label="Data da entrega">
                    {parseDateToPTBR(delivery_date.split("T")[0])}
                  </td>
                  <td data-label="Ponto de entrega">{start_point_delivery}</td>
                  <td data-label="Ponto de destino">{end_point_delivery}</td>
                  <td data-label="Ações">
                    <button
                      className="map-button"
                      onClick={() => dispatch(saveDeliveryLocation(start_point_delivery, end_point_delivery))
                      }
                    >
                      <Link to={`/map/${_id}`}>Ver trajeto</Link>
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => deleteDelivery(_id)}
                    >
                      Deletar
                  </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </main>
  );
};

export default ListDelivery;
