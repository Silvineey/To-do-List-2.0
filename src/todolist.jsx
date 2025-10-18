import React, {useState} from "react"
import "./todolist.css"

export default function Todolist(){

    const [lista,setLista]=useState([])
    const [Entradas, setEntradas]=useState("")


    return(
        <div className="conteiner">
            <div className="caixa">
                <h1>Lista de tarefas</h1>
                <input value={Entradas} onChange={(v)=>{setEntradas(v.target.value)}} id="entrada" type="text"  placeholder="Digite a tarefa"/>
                <button>ADD</button>
            </div>
            <div className="caixa">
                <div>
                    <ul>
                        <li>Tarefa 1</li><button>DEL</button>
                        <li>Tarefa 2</li><button>DEL</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

