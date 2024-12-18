import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import '../assets/Lists.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const selectColor = "rgb(4,155,229)";

function Lists({items, generateArray, onDetailsClick}){
    const [colors, setColors] = useState(Array(items.length).fill("white"));
    const [selected,setSelected] = useState([]);

    const navigate = useNavigate();

    const toggleColor = (index) => {
        setColors((prevColors) => 
            prevColors.map((color, i) => (i === index ? (color === "white" ? selectColor : "white") : color))
        );
    };

    const handleClick = () => {
        setSelected([]);
        for(let i = 0;i<items.length;i++){
            if(colors[i] === selectColor){
                selected.push(items[i]["Company Name"]);
            }
        }
        generateArray(selected);
    }

    const handleDetails = (company) => {
    
        onDetailsClick(company);
    }

    return(
        <div className='parent-container'>
            <div className='container'>
                <ListGroup className='list-container'>
                    {items.map((item, index) => (
                        <div
                            className="item-container"
                            style={{
                            borderBottom: index !== items.length - 1 ? '2px solid rgb(167,167,167)' : 'none', // Remove bottom border for last item
                            }}
                            key={index}
                        >
                            <button 
                                className='checkmark' 
                                style={{
                                    backgroundColor: colors[index],
                                }}
                                onClick={()=>{
                                    toggleColor(index);
                                }}
                            />
                            <ListGroup.Item style={{border:"none"}}>{item["Company Name"]}</ListGroup.Item>
                            <Button 
                                className='details-button' 
                                onClick={()=>(handleDetails(item))}>
                                    Details
                            </Button>
                        </div>
                    ))}
                </ListGroup>
            </div>
            <Button className='comp-button' onClick={handleClick}>generate competitor analysis</Button>
        </div>
    )
}

export default Lists;