// components/ListaAlunos.js
import { useEffect, useState } from 'react';
import db from '../firebase'; 

const ListaAlunos = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        // Obtém a coleção "alunos" do Firestore
        const alunosSnapshot = await getDocs(collection(db, 'alunos'));
        const listaAlunos = [];

        // Itera sobre os documentos da coleção e adiciona à lista
        alunosSnapshot.forEach((doc) => {
          listaAlunos.push({ id: doc.id, ...doc.data() });
        });

        setAlunos(listaAlunos);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error);
      }
    };

    fetchAlunos();
  }, []);

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            {aluno.nomeCompleto} - {aluno.sala}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAlunos;
