import React from 'react'
import { useStore,connect } from 'react-redux'

export default function Index() {
    
    const store = useStore()
    const [ValueStore, setValueStore] = React.useState({})
    React.useEffect(()=>{
        setValueStore(store.getState())
    })

    return (
        <div style={{flex:1}}>
            <h2>You Have to do :</h2>
            <div style={{marginInline:50,color:'gray'}} >
                {
                    ValueStore.todo&&ValueStore.todo.map(v=>(<h3>{v.text}</h3>))
                }
            </div>
        </div>
    )
}
