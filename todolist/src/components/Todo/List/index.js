import React,{useState} from 'react'


function List({todos,setTodos}) {
    const [checkedItems, setCheckedItems] = useState(new Array(todos.length).fill(false));
    const [editIndex, setEditIndex] = useState(null);
    const [tempTitle, setTempTitle] = useState('');

  const onClickCheckbox = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

    alert('Your task is completed');
    }

    const onClickDelete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);  // Üst bileşende todos'u güncellemek için
        const updatedCheckedItems = checkedItems.filter((_, i) => i !== index);
        setCheckedItems(updatedCheckedItems);

        alert('You deleted the task');
      };

    const onClickEdit=(index)=>{
        setEditIndex(index);
        setTempTitle(todos[index].title);
    }

    const onSaveEdit=(index)=>{
        const updatedTodos = [...todos];
        updatedTodos[index].title = tempTitle;
        setTodos(updatedTodos);
        setEditIndex(null);
    };

    const onCancelEdit=()=>{
        setEditIndex(null);
    };
 


  return (
    <div>
    <ul className="list">
      {todos.map((todo, i) => (
        <li key={i}>
          <span
            style={{
              textDecoration: checkedItems[i] ? 'line-through' : 'none',
              fontStyle: checkedItems[i] ? 'normal' : 'oblique',
              color: checkedItems[i] ? 'gray' : 'black',
              cursor: !checkedItems[i] ? 'pointer' : 'default',
              whiteSpace: 'pre-wrap',
            }}
            onClick={() => !checkedItems[i] && onClickEdit(i)}
          >
            {editIndex === i ? (
              <textarea
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    setTempTitle(tempTitle + '\n');
                  } else if (e.key === 'Escape') {
                    onCancelEdit();
                  }
                }}
                onBlur={() => onSaveEdit(i)}
                rows = '2'
                autoFocus
              />
            ) : (
              todo.title
            )}
          </span>
          <input
            className="checkbox"
            checked={checkedItems[i]}
            onChange={() => onClickCheckbox(i)}
            type="checkbox"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="delete" onClick={() => onClickDelete(i)}>
            Delete
          </button>
        </li>
      ))}
    </ul>

    <p id="son">{todos.length} items left</p>
  </div>
  )
}

export default List