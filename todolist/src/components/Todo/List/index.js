import React,{useState} from 'react'

function List({todos}) {
    const [checkedItems, setCheckedItems] = useState(new Array(todos.length).fill(false));

  const onClickCheckbox = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
    };


  return (
    <div>
        <ul>

            {
                todos.map((todos,i)=>
                    <li key={i} style={{ textDecoration: checkedItems[i] ? 'line-through' : 'none' }} >
                        {todos.title}
                        <input
                        checked={checkedItems[i]}
                        onChange={() => onClickCheckbox(i)}
                        type='checkbox'
                        />
                    </li >)
            }


            

        </ul>

        <p>
        {todos.length} items left
      </p>

    </div>
  )
}

export default List