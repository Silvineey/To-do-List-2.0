import React, {useState} from "react"
import "./todolist.css"

export default function Todolist(){

    const [lista,setlista]=useState([])
    const [novoitem, setnovoitem]=useState("")

    function additem(form){
        form.preventDefault()
        if(novoitem===""){
            window.alert("Não adicione tarefas vazias alma sebosa")
        }
        else{
            setlista([...lista,{text:novoitem}])
            setnovoitem("")
            document.getElementById("entrada").focus()
        }
    }
    function deleta(index){
        const listaAux=[...lista]
        listaAux.splice(index,1)
        setlista(listaAux)
    }

    return(
        <div className="conteiner">
            <form onSubmit={additem} className="caixa">
                <h1>Lista de tarefas</h1>
                <input value={novoitem} 
                onChange={(v)=>{setnovoitem(v.target.value)}} 
                id="entrada" 
                type="text"  
                placeholder="Digite a tarefa"/>
                <button type="submit" onClick={additem}>ADD</button>
            </form>
            <div className="caixa">
                <div>
                    <ul>
                        {
                        lista.map((item,index)=>(
                            <li  key={index}>{item.text}
                            <button className="btndel" onClick={()=>deleta(index)}>remover</button>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

