import './App.css'

function App() {
  return ( 
    <main className='p-10 md:p-20 space-y-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>
          My Todo
        </h1>
        <button className='btn btn-primary'>
          + Add Task
        </button>
      </div>
      <section className='font-poppins'>
        <div className='w-full h-full bg-gray-50 space-y-4 p-5 rounded-2xl shadow-2xl'>
          {[1, 2, 3].map((item, index) => {
            return (
              <div key={index} className='flex items-center justify-between p-4 border-b border-gray-200 bg-gray-100'>
                <div className='flex items-center gap-4'>
                  <input type='checkbox' className='checkbox checkbox-primary' />
                  <p className='text-sm text-black'>Task {item}</p>
                </div>
                <button className='btn btn-error'>
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App