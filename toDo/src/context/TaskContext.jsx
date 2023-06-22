import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

    const [ tasklist, setTasklist ] =useState(() => {
        try {
            const storaged = localStorage.getItem("task_storage");
            return storaged 
                ? JSON.parse(storaged)
                :[]
        }catch(err) {
            return []
        }
    })
    useEffect(()=> {
        localStorage.setItem("task_storage", JSON.stringify(tasklist))
    }, [tasklist])

    const agregarTarea = (task) => {
        setTasklist([...tasklist, task])
    }
    const quitarTarea = (id) => {
        setTasklist(tasklist.filter(task => task.id !== id))
    }

    return(
        <TaskProvider.Provider value={{
            tasklist,
            setTasklist,
            agregarTarea,
            quitarTarea
        }}>
        {children}
        </TaskProvider.Provider>
    )

}