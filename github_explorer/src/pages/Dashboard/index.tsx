import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="github explorer logo" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/repositories">
          <img
            src="https://avatars3.githubusercontent.com/u/48543208?s=460&u=26301084551e3a5bd7c000ebc6007f29adc8810b&v=4"
            alt="Caio Medeiros"
          />

          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy higly scalable ReactJS e React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
