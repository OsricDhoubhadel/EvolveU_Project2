import { useState } from "react"

const RegistrationForm = () => {
    let [name, setName] = useState()
    let [category, setCategory] = useState()
    let [co2_consumption, setCO2_Consumption] = useState()
    let [product_life, setProduct_Life] = useState()
    let [water_consumption, setWater_Consumption] = useState()

    let [createError, setCreateError] = useState()

    async function onCreateClicked() {
        console.log('Create has been clicked!')
        let productToCreate = {
            name, 
            category,
            co2_consumption,
            product_life,
            water_consumption
        }
        console.log('Creating product with', productToCreate )
        try {
            let createResponse = await fetch('/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productToCreate)
            })
            // the server didn't like the data for some reason
            console.log('Create response is', createResponse)
            if (createResponse.status !== 200) {
                let errorMessage = await createResponse.text()
                console.log('We had an error.  it was: ', errorMessage)
                setCreateError(errorMessage)
            }
            else {
                setCreateError(undefined)
            }
        }
        catch (error) {
            // the server cannot be reached
            console.error('Fetch failed to reach the server.')
        }
    }

    const onInputChange = (event, setFunction) => {
        console.log('Changing input to be ', event.target.value)
        setFunction(event.target.value);
    };

    let createProductDataInvalid = !name || (name.trim().length === 0)

    return (
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" value={name} onChange={(event) => onInputChange(event,setName)}/>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <input id="category" value={category} onChange={(event) => onInputChange(event,setCategory)}/>
            </div>
            <div>
                <label htmlFor="co2_consumption">CO2 Consumption</label>
                <input id="co2_consumption" value={co2_consumption} onChange={(event) => onInputChange(event,setCO2_Consumption)}/>
            </div>
            <div>
                <label htmlFor="product_life">Product Life</label>
                <input id="product_life" value={product_life} onChange={(event) => onInputChange(event,setProduct_Life)}/>
            </div>
            <div>
                <label htmlFor="water_consumption">Water Consumption</label>
                <input id="water_consumption" value={water_consumption} onChange={(event) => onInputChange(event,setWater_Consumption)}/>
            </div>
            <button disabled={ createProductDataInvalid } onClick={ onCreateClicked }>Create Product</button>
            { createError && <div>{createError}</div> }            
        </div>
    )
}

export default RegistrationForm