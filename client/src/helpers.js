export const config = {headers: {
    "Content-Type": "application/json; charset=utf-8"
}}

export const checkErrors = (errors, field=null)=>{
    if(errors.emptyFieldsErrors){
        return "Please fill all fields";
    }
    try{
       return errors[field];
    }
    catch(e){
        console.log("Another Error")
    }
}

export const getFormElements = (form, sliceTo)=>(
        Array.from(form.elements)
             .slice(0, sliceTo)
             .reduce((acc, obj)=> {
                    acc[obj.name] = obj.value;
                    return acc;
                    }, 
             {})
);

export const isAdmin = ()=>(
    localStorage.getItem("isAdmin") === "true"
)

export const isAuthenticated = ()=>(
    localStorage.getItem("token") !== null
)

export const getUserId = ()=>(
    localStorage.getItem("userId")
)

export const getCartCount= ()=>(
   parseInt(localStorage.getItem("cartItemsCount"))
);

export const categories = [{
    category:"paints",
    id:"Paintings",
    className:"paintings"
},
{
    category:"photos",
    id:"Photography",
    className:"photography"
},
{
    category:"tapestry",
    id:"Tapestry",
    className:"tapestry"
},
{
    category:"Embroidery",
    id:"Embroidery",
    className:"embroidery"
}];

