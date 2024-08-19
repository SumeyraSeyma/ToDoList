import React,{useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';




function List({todos,setTodos}) {
    const [checkedItems, setCheckedItems] = useState(() => {
      // Local Storage'dan checked items (tik işaretleri) alıyoruz
      const savedCheckedItems = localStorage.getItem('checkedItems');
      return savedCheckedItems ? JSON.parse(savedCheckedItems) : new Array(todos.length).fill(false);
  });

  useEffect(() => {
    // checked items'ı Local Storage'a kaydediyoruz
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
}, [checkedItems]);

    const [editIndex, setEditIndex] = useState(null);
    const [tempTitle, setTempTitle] = useState('');

  const onClickCheckbox = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];

    if(updatedCheckedItems[index]===true){
        toast('Task completed',{
          position: "top-center",
          color: 'rgb(228, 134, 147)',
          autoClose: 2000,
          closeOnClick: true,
        });
        
    }

    setCheckedItems(updatedCheckedItems);

    
    }

    const onClickDelete = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);  // Üst bileşende todos'u güncellemek için
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems.splice(index, 1);
        setCheckedItems(updatedCheckedItems);
      
        toast.warn('Task deleted',{
          position: "top-center",
          autoClose: 2000,
          closeOnClick: true,

        });


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
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              width: '85%',
              textAlign: 'left',
              textDecoration: checkedItems[i] ? 'line-through' : 'none',
              fontStyle: checkedItems[i] ? 'normal' : 'oblique',
              color: checkedItems[i] ? 'gray' : 'black',
              whiteSpace: 'pre-wrap',
            }}
            
          >
            {editIndex === i ? (
              <textarea
                value={tempTitle}
                style={{width:'50%',
                   height:'60px',
                   borderRidge: '2px',
                   padding: '5px',
                   minWidth: '20em',
                   minHeight: '5em',
                   maxHeight: '5em',
                   maxWidth: '20em',
                   overflow: 'auto',}}
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
          {!checkedItems[i] &&(
          <FontAwesomeIcon
              icon={faPen}
              onClick={() => onClickEdit(i)}
              style={{
                cursor: editIndex === i ? 'not-allowed' : 'pointer',
                pointerEvents: editIndex === i ? 'none' : 'auto',
                marginLeft: '10px',
                paddingRight: '10px',
                opacity: '0.7',
                
              }}
            />)}
          <button className="delete" onClick={() => onClickDelete(i)}
            style={{ width: '80px', height: '30px' }}>
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