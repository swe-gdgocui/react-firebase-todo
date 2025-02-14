import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodo, updateTodo } from "../repository/todo";

function EditPage() {
    const [data, setData] = useState('')

    const { id } = useParams();

    useEffect(() => {
        const temp = getTodo(id)

        temp.then((res) => {
            setData(res.title)
        })
    }, [])

    async function onSave() {
        try {
            await updateTodo(id, {
                title: data,
                checked: false
            })
            alert('Data saved')
            document.location.href = '/'
        }
        catch (error) {
            console.error(error)
            alert('Error saving data')
        }
    }
    return (
        // Create todo page
        <main className='p-5 md:p-20 space-y-4'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>
                    Edit My Todo
                </h1>
                <button className='btn btn-primary'
                    onClick={onSave}
                >
                    Save
                </button>
            </div>
            <textarea className="textarea  w-full"
                placeholder="Enter your task here"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
        </main>
    )
}

export default EditPage;