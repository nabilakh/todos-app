import React , {useState} from 'react'
import './Todo.css'

function Todo() {

    const[currentItem, setCurrentItem] = useState("")
    const[allItems, setAllItems] = useState(
        [
            {
                todo:"Reading",
                isCompleted: false
            },
            {
                todo: "Watching",
                isCompleted: false
            },
            {
                todo: "Swimming",
                isCompleted: false
            }
           
        ]
    )

function createNewItem()
{
    console.log("The current value:" + currentItem);
    if(currentItem !== "")
     {
       let allItemArray = [...allItems];
       allItemArray.push(
           {
               todo: currentItem,
               isCompleted: false
           }
       )
       setAllItems(allItemArray);
       setCurrentItem("")
    }
}

function changeCheckBox(e, index) {
    console.log("index:" + index);
    let allArrayItems = [...allItems];
    allArrayItems[index].isCompleted = e.target.checked;
    setAllItems(allArrayItems);
}

function deleteItem(index)
{
    let allItemsArray = [...allItems];
    allItemsArray.splice(index, 1);
    setAllItems(allItemsArray);
}

    return (
        <div>
            <input
            value={currentItem}
            onChange={e =>
                {
                    setCurrentItem(e.target.value)
                }}
                placeholder="Add Todos List"
                    />
                    <button onClick={createNewItem} className="add">Add Item</button>
            <ul>
                {
                    allItems.map((item, index) =>
                    (
                        <li key={index}>
                            <input type="checkbox" defaultChecked={item.isCompleted} onChange={e => changeCheckBox(e, index)} />
                            {item.todo}
                            {item.isCompleted && (<button onClick={() => deleteItem(index)} className="delete fas fa-times"></button>)}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo
