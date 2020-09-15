import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './containers/Home';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import Exhibition from './containers/Exhibition';
import AdminAddItemsPage from './containers/AdminAddItemsPages';
import ShoppingCart from './containers/ShoppingCart';
import { categories } from './helpers';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import Toaster from './components/Toaster';
import { useSelector } from 'react-redux';
import { useWindowSize } from './custom-hooks/CustomHooks';

const App = ()=>{
    const { addedToCart } = useSelector(state=>state.dbItemsReducer);
    const [ width, height ] = useWindowSize();
    return(
    <div>
        <MainLayout/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login/" component={LoginPage}/>
            <Route exact path= "/signup/" component={SignupPage}/>

            {categories.map(obj=>
                <Route exact path= {`/${obj.className}/`} 
                             key={`${obj.id} route`}
                             render = {()=><Exhibition
                                            category= {obj.category}
                                            id={obj.id}
                                            showCustomHeader= {true}
                                            className={obj.className}
                                            limit={4}
                                    />}/>
            )}

            <Route exact path="/shopping-cart/" component={ShoppingCart}/>                            
 
            <Route exact path="/admin/add/items/" component={AdminAddItemsPage}/>
            <Route component={PageNotFound}/>
        </Switch>
        {addedToCart &&
            <Toaster 
                msg="Successfully added to Cart!"
            />
        }
        {width>1000 &&
           <Footer/>
        }
    </div>
    )
}

export default App;