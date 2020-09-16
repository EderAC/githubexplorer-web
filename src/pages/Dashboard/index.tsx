import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

// FC functionComponents
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/42493587?s=400&u=087883c03b466ad7860412f12a3e2d6233ab4ef1&v=4"
            alt="Eder Chiquito"
          />
          <div>
            <strong>EderAC/LGPD_QuizFE Private</strong>
            <p>No description, website, or topics provided.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/42493587?s=400&u=087883c03b466ad7860412f12a3e2d6233ab4ef1&v=4"
            alt="Eder Chiquito"
          />
          <div>
            <strong>EderAC/LGPD_QuizFE Private</strong>
            <p>No description, website, or topics provided.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/42493587?s=400&u=087883c03b466ad7860412f12a3e2d6233ab4ef1&v=4"
            alt="Eder Chiquito"
          />
          <div>
            <strong>EderAC/LGPD_QuizFE Private</strong>
            <p>No description, website, or topics provided.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
