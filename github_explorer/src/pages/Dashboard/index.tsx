import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {
  function getReposOnStorage(): Repository[] {
    const reposOnStorage = localStorage.getItem('@gitub_explorer:repos');

    if (reposOnStorage) {
      return JSON.parse(reposOnStorage);
    }

    return [];
  }

  const [newRepo, setNewRepo] = useState('');
  const [error, setError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(
    getReposOnStorage()
  );

  useEffect(() => {
    localStorage.setItem('@gitub_explorer:repos', JSON.stringify(repositories));
  }, [repositories]);

  useEffect(() => {
    const reposOnStorage = localStorage.getItem('@gitub_explorer:repos');

    if (reposOnStorage) {
      setRepositories(JSON.parse(reposOnStorage));
    }
  }, []);

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    if (!newRepo || !newRepo.includes('/')) {
      setError('Digite um repositório no formato autor/repositorio');
      return;
    }

    try {
      const { data } = await api.get<Repository>(`/repos/${newRepo}`);

      const repoAlreadyExists = repositories.find(
        repo => repo.full_name === data.full_name
      );

      if (!repoAlreadyExists) {
        setRepositories([...repositories, data]);
        setNewRepo('');
        setError('');
      }
    } catch {
      setError('Erro na busca por esse repositório');
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setNewRepo(e.target.value);
    setError('');
  }

  return (
    <>
      <img src={logo} alt="github explorer logo" />
      <Title>Explore repositórios no GitHub</Title>

      <Form onSubmit={handleAddRepository} error={!!error}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={handleInputChange}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {!!error && <Error>{error}</Error>}

      <Repositories>
        {repositories.map(repo => (
          <Link to={`/repositories/${repo.full_name}`} key={repo.full_name}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />

            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
