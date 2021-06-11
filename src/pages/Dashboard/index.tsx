import React, {useEffect, useState} from 'react'
import {useHistory, RouteComponentProps} from 'react-router-dom'
import { Container } from './styles';
import api from '../../services/api';


interface Evento {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: string;
  dislike: string;
}

const Dashboard: React.FC = () => {
  const [events, setEvents] = useState<Evento[]>();
  useEffect(() => {
    api.get(`/events`).then((response) => {
      setEvents(response.data);;
    });
  }, []);

  async function handleAddEventos(event:any) {
    event.preventDefault();

    const { target: form } = event;

    const Evento = {
      nomeevento: form.nomeevento.value,
      local: form.local.value,
      diasemana: form.diasemana.value,
      horario: form.horario.value,
    };

    await api
    .post('/events', Evento)
    .then(response => {
      window.location.href = `/${``}`;
    })

   


    form.reset();
  }

  async function deleteEvento(id: string) {
    await api.delete(`/events/${id}`);
    window.location.reload(true)
  }

  async function like(id:string) {
    await api.post(`/events/like/${id}`);

    document.location.reload(true);
  }

  async function dislike(id:string) {
    await api.post(`/events/dislike/${id}`);

    document.location.reload(true);
  }
  

 

  return (
    <Container>
        
        <form onSubmit={handleAddEventos}>
        <h2>Cadastro de eventos</h2>
          <input type='text' name='nomeevento' placeholder='Nome do Evento' />
          <input type='text' name='local' placeholder='Local do Evento' />
          <input type='text' name='diasemana' placeholder='Dia da Semana' />
          <input type='text' name="horario" placeholder="Horário" />
          <button type="submit">Salvar</button>
        </form>
        <table>
          <tr>
            <td><strong>Nome do evento</strong></td>
            <td><strong>Local do evento</strong></td>
            <td><strong>Horário</strong></td>
            <td><strong>Dia da semana</strong></td>
            <td><strong>Like</strong></td>
            <td><strong>Dislike</strong></td>
          </tr>
          {events
          ? events.map((evento) => (
            <tr>
              <td><p>{evento.nomeevento}</p></td>
              <td><p>{evento.local}</p></td>
              <td><p>{evento.horario}</p></td>
              <td><p>{evento.diasemana}</p></td>
              <td><p>{evento.like}</p></td>
              <td><p>{evento.dislike}</p></td>
              <button onClick={() => {
                like(evento.id)
              }}>Like</button>
              <button onClick={() => {
                dislike(evento.id)
              }}>Dislike</button>
              <button onClick={() => {
                deleteEvento(evento.id)
              }}>Excluir</button>
              
              
            </tr>
            
              
          )): ''}

        </table>
    </Container>
  );
};

export default Dashboard



