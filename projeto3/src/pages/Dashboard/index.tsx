import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import 'react-day-picker/lib/style.css';

import { FiPower } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  CharacterList,
} from './styles';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    api.get(`/characters/me/list`).then(response => {
      console.log(response);
    })
  }, []);

  return(
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <div>
              <span>Boas vindas,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Button type="submit">Criar Novo Personagem</Button>
      <Button type="submit">Excluir Personagem</Button>
      <Content>
        <CharacterList>
          <ul>
            <li>Nome</li>
          </ul>
        </CharacterList>
      </Content>
    </Container>
  );
}

export default Dashboard;
