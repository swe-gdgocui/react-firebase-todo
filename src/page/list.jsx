import { marked } from "marked";
import { useEffect, useState } from 'react';
import { deleteTodo, getTodos, toggleCheck } from '../repository/todo';

function ListPage() {
    const [todos, setTodos] = useState([]);
    const getData = async () => {
        const data = await getTodos();
        setTodos(data);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <main className='p-5 md:p-20 space-y-4'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>
                    GDGOCUI Todo List
                </h1>
                <a href="/create">
                    <button className='btn btn-primary'>
                        + Add Task
                    </button>
                </a>
            </div>
            <section className='font-poppins'>
                {
                    todos.length == 0 ?
                        <div>
                            <h1 className='text-sm font-medium text-center'>No Task Found</h1>
                        </div>
                        :
                        <div className='w-full h-full bg-gray-50 space-y-4 p-5 rounded-2xl shadow-2xl'>
                            {todos.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-col md:flex-row gap-2 md:items-center justify-between p-4 border-b border-gray-200 bg-gray-100'>
                                        <div className='flex items-center gap-4'>
                                            <input type='checkbox' className='checkbox checkbox-primary'
                                                checked={item.checked}
                                                onChange={async () => {
                                                    await toggleCheck(item.id, item.checked)
                                                    document.location.reload()
                                                }}
                                            />
                                            <p
                                                className={`text-xs md:text-sm ${item.checked ? 'line-through' : ''} text-black whitespace-pre-wrap`}
                                                dangerouslySetInnerHTML={{ __html: marked.parse(item.title) }}
                                            ></p>
                                        </div>
                                        <div className='flex items-center gap-4 justify-end'>
                                            <button className='btn btn-primary'
                                                onClick={async () => {
                                                    document.location.href = `/edit/${item.id}`
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button className='btn btn-error'
                                                onClick={async () => {
                                                    await deleteTodo(item.id)
                                                    alert('Task Deleted')
                                                    document.location.reload()
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                }
            </section>
        </main>
    )
}

export default ListPage;