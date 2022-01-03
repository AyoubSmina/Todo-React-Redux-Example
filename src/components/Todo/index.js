import React, { useState } from 'react'
import PropTypes  from 'prop-types'
import { addTodo,deleteTodo,updateTodo } from "../../actions/Todo";
import { connect,useStore} from 'react-redux';


// const mapStateToProps = (state) => (
//     state.todo
// )
  
const mapDispatchToProps = {
    addTodo,deleteTodo,updateTodo
}
  

function Todo({todo,addTodo,deleteTodo,updateTodo,...props}) {
    const [text,settext] = React.useState('');
    const [id,setid] = React.useState(0);
    const [TODO, setTODO] = useState([])
    const store = useStore()
    React.useEffect(()=>{
        setTODO(store.getState().todo)
    })
    const actualiser = ()=>{
        settext('')
        setid('')
        setTODO(store.getState().todo)
    }
    const HandleAdd = ()=>{
        addTodo(text)
        actualiser()
    }
    const HandleDelete = ()=>{
        deleteTodo(id)
        actualiser()
    }
    const HandleUpdate = ()=>{
        updateTodo(id,text)
        actualiser()
    }


    return (
        <div style={{flex:1,display:'flex',flexDirection:'column'}}>
            <div style={{
                flex:.33,
                margin:'auto',
                }}>
                <button  onClick={HandleAdd}>add</button>
                <button  onClick={HandleUpdate}>Update</button>
                <button  onClick={HandleDelete} >Delete</button>
            </div>
            <div style={{
                flex:.33,
                margin:'auto',
                }}>
                <label for='text'>text</label>
                <input type='text' id='text' value={text} onChange={e=>settext(e.target.value)} />
                <label for='id'>id</label>
                <input type='number' id='id' value={id} onChange={e=>setid(e.target.value)} />
            </div>
            <div style={{flex:.33}}>
                {TODO.map((v)=><h4><span style={{color:'gray',fontSize:16}}>{v.id} : </span>{v.text}</h4>)}
            </div>
        </div>
    )
}

Todo.propTypes = {
    todo:PropTypes.array,
    addTodo:PropTypes.func,
    deleteTodo:PropTypes.func,
    updateTodo:PropTypes.func
}

// mapStateToProps,
export default connect(
    null,
    mapDispatchToProps
    )(Todo);