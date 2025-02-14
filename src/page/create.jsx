import { useState } from "react";
import { addTodo } from "../repository/todo";

function CreatePage() { 
    const [data, setData] = useState('')

    async function onSave() {
        try {
            await addTodo({
                title: data,
                checked: false
            })
            alert('Data saved')

            // Redirect to home page
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
                    Create Todo
                </h1>
                <button className='btn btn-primary'
                    onClick={onSave}
                >
                    Save
                </button>
            </div>
            <textarea className="textarea w-full"
                placeholder="Enter your task here"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
        </main>
    )
}

export default CreatePage;