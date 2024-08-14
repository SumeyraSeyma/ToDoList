import React from 'react'

function List({todos}) {
  return (
    <div>
        <ul>

            {
                todos.map((todos,i)=>
                    <li key={i}>
                        {todos.title}
                    </li>
                )
            }

        </ul>
    </div>
  )
}

export default List