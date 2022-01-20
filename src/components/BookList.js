import React, { useState } from 'react';
import './BookList.css';

export default function BookList() {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [ano, setAno] = useState("");
    const [livros, setLivros] = useState([
        { titulo: 'Duna', autor: 'Frank Herbert', ano: '2021' },
        { titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: '1899' },
        { titulo: 'Auto da Compadecida', autor: 'Ariano Suassuna', ano: '1955' }
    ]);


    const handleTitulo = event => {
        setTitulo(event.target.value);
    };

    const handleAutor = event => {
        setAutor(event.target.value);
    };

    const handleAno = event => {
        setAno(event.target.value);
    };

    const addLivro = (e) => {
        e.preventDefault()
        const newLivro = {titulo, autor, ano}
        setLivros(livro => [...livro, newLivro])
    };


    return (
        <div>
            <div>
                <form onSubmit={addLivro}>
                    <label>Título: </label>
                    <input type="text" name="titulo" onChange={handleTitulo} placeholder="Digite o título" />
                    <label> Autor: </label>
                    <input type="text" name="autor" onChange={handleAutor} placeholder="Digite o autor" />
                    <label> Ano: </label>
                    <input type="text" name="ano" onChange={handleAno} placeholder="Digite o ano" />
                    <button type="submit" className="button">Enviar</button>
                </form>
                <br></br>
            </div>
            <div>
                <table>
                    <thread>
                        <tr className="head">
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Ano</th>
                        </tr>
                    </thread>
                    <tbody>
                        <tr>
                            {livros.map((livro) => {
                                return (
                                    <tr>
                                        <th>{livro.titulo}</th>
                                        <td>{livro.autor}</td>
                                        <td>{livro.ano}</td>
                                    </tr>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
