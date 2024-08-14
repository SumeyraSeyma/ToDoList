import React,{useState} from 'react'




function List({todos,setTodos}) {
    const [checkedItems, setCheckedItems] = useState(new Array(todos.length).fill(false));

  const onClickCheckbox = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

    alert('You clicked the checkbox');
    }

    const onClickDelete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);  // Üst bileşende todos'u güncellemek için
        const updatedCheckedItems = checkedItems.filter((_, i) => i !== index);
        setCheckedItems(updatedCheckedItems);

        alert('You clicked the delete button')
      };
 


  return (
    <div>
        <ul className='list'>

            {
                todos.map((todo,i)=>
                    <li key={i} style={{ textDecoration: checkedItems[i] ? 'line-through' : 'none', 
                      fontStyle: checkedItems[i] ? 'italic' : 'normal',
                      color: checkedItems[i] ? 'gray' : 'black' }} >
                        {todo.title}
                        <input
                        id='checkbox'
                        checked={checkedItems[i]}
                        onChange={() => onClickCheckbox(i)}
                        type='checkbox'
                        />
                        <button className='delete'
                        onClick={() => onClickDelete(i)}
                        >Delete</button>
                    </li >)
            }
            

            

        </ul>

        <p id='son'>
        {todos.length} items left
      </p>

    </div>
  )
}

export default List