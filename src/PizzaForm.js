import Pizza from "./Assets/Pizza.jpg";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import formSchema from "./FormSchema";
import axios from "axios";



const PizzaForm = () => {

    // const [ instructions, setInstructions ] = useState("");

    const InstructionsHandler = event => {
        setForm({...form,specialtext: event.target.value});
    };

    const [ name, setName ] = useState("");
    
    const NameHandler = event => {
        const { name, value } = event.target;
        Yup.reach(formSchema, name).validate(value).then(valid => {
            setErrors({
                ...errors, [name]: ""
            });
        }).catch(err => {
            setErrors({
                ...errors, [name]: err.errors[0]
            });
        });
        setName(value);
        setForm({...form,name: value});
    }

    const toppingsHandler = event => {
        if(
            form.Toppings.includes(event.target.value)
        ){
            return("")
        }else{
            setForm({...form,Toppings: event.target.value});
        }
    }

    const [ errors, setErrors ] = useState({name: ""})    

    const [ gluten, setGluten ] = useState(true);

    const glutenHandler = () => {
        setGluten(!gluten);
        setForm({...form, Glutenfree: gluten})
    }

    const initialState= {size:"", sauce:"", Toppings: [], Glutenfree: false, specialtext:"", name:""}

    const [ form, setForm ] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        var selectedSize = document.getElementById('size-dropdown').value;
        console.log(selectedSize);
        var sauces = document.getElementsByName("sauce");
        for(let i = 0; i < sauces.length; i++){
            if(sauces[i].checked === true){
                var selectedSauce = sauces[i].value;
            }
        };
        console.log(selectedSauce);
        const completedForm = {...form, sauce: selectedSauce, size: selectedSize};
        console.log(completedForm);
        axios.post("https://reqres.in/api/orders", completedForm).then((response)=> {
            console.log(response)
        })
    }

      return(
        <div className="form">
            <h3>Build Your Own Pizza!</h3>
            <img className="pizzaPic" src={Pizza} alt="Tastey Pizza Pic!"/>
            <form id="pizza-form" onSubmit={submitHandler}>
                <h2>Build Your Own Pizza</h2>
                <label htmlFor="size-dropdown">Choice of Size<br/><span>Required</span><br/></label>
                <select defaultValue="Choose one" type="dropdown" id="size-dropdown" name="size" >
                    <option value="Choose one"disabled>Choose one</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Chungus">Chungus</option>
                </select><br/>
                <label >Choice of Sauce<br/><span>Required</span><br/>
                    <input id="Original Red" type="radio" name="sauce" value="Original Red"/>
                    <label htmlFor="Original Red">Original Red</label><br/>
                    <input id="Garlic Ranch" type="radio" name="sauce" value="Garlic Ranch"/>
                    <label htmlFor="Garlic Ranch">Garlic Ranch</label><br/>
                    <input id="BBQ Sauce" type="radio" name="sauce" value="BBQ Sauce"/>
                    <label htmlFor="BBQ Sauce">BBQ Sauce</label><br/>
                    <input id="Spinach Alfredo" type="radio" name="sauce" value="Spinach Alfredo"/>
                    <label htmlFor="Spinach Alfredo">Spinach Alfredo</label><br/>
                </label>
                <label>Add Toppings<br/><span>Choose up to 10</span><br/>
                    <input type="checkbox" value="Pepperoni" name="Pepperoni" onChange={toppingsHandler}/>
                    <label htmlFor="Pepperoni">Pepperoni</label><br/>
                    <input type="checkbox" value="Diced Tomatos" name="Diced Tomatos" onChange={toppingsHandler}/>
                    <label htmlFor="Diced Tomatos">Diced Tomatos</label><br/>
                    <input type="checkbox" value="Sausage" name="Sausage" onChange={toppingsHandler}/>
                    <label htmlFor="Sausage">Sausage</label><br/>
                    <input type="checkbox" value="Black Olives" name="Black Olives" onChange={toppingsHandler}/>
                    <label htmlFor="Black Olives">Black Olives</label><br/>
                    <input type="checkbox" value="Canadian Bacon" name="Canadian Bacon" onChange={toppingsHandler}/>
                    <label htmlFor="Canadian Bacon">Canadian Bacon</label><br/>
                    <input type="checkbox" value="Roasted Garlic" name="Roasted Garlic" onChange={toppingsHandler}/>
                    <label htmlFor="Roasted Garlic">Roasted Garlic</label><br/>
                    <input type="checkbox" value="Spicy Italian Sausage" name="Spicy Italian Sausage" onChange={toppingsHandler}/>
                    <label htmlFor="Spicy Italian Sausage">Spicy Italian Sausage</label><br/>
                    <input type="checkbox" value="Artichoke Hearts" name="Artichoke Hearts" onChange={toppingsHandler}/>
                    <label htmlFor="Artichoke Hearts">Artichoke Hearts</label><br/>
                    <input type="checkbox" value="Grilled Chicken" name="Grilled Chicken" onChange={toppingsHandler}/>
                    <label htmlFor="Grilled Chicken">Grilled Chicken</label><br/>
                    <input type="checkbox" value="Three Cheese" name="Three Cheese" onChange={toppingsHandler}/>
                    <label htmlFor="Three Cheese">Three Cheese</label><br/>
                    <input type="checkbox" value="Onions" name="Onions" onChange={toppingsHandler}/>
                    <label htmlFor="Onions">Onions</label><br/>
                    <input type="checkbox" value="Pineapple" name="Pineapple" onChange={toppingsHandler}/>
                    <label htmlFor="Pineapple">Pineapple</label><br/>
                    <input type="checkbox" value="Green Pepper" name="Green Pepper" onChange={toppingsHandler}/>
                    <label htmlFor="Green Pepper">Green Pepper</label><br/>
                    <input type="checkbox" value="Extra Cheese" name="Extra Cheese" onChange={toppingsHandler}/>
                    <label htmlFor="Extra Cheese">Extra Cheese</label><br/>
                </label>
                <label>Choice of Substitute<br/><span>Choose up to 1</span><br/>
                    <label className="switch">
                        <input type="checkbox" onChange={glutenHandler}/><span className="slider" name="Glutenfree"></span>
                    </label>
                    Gluten Free Crust (+1.00)<br/>
                </label>
                <label>
                    Special Instructions<br/>
                    <input type="text" id="special-text" onChange={InstructionsHandler} name="Specialtext"/><br/>
                </label>
                <label>
                    Name<br/>
                    <input type="text" id="name-input" value={name} onChange={NameHandler} name="name"/>
                </label>
                <button id="order-button">Add to Order</button>
            </form>
            {errors.name.length > 0 && <h1>{errors.name}</h1>}
        </div>
    )
}

export default PizzaForm;