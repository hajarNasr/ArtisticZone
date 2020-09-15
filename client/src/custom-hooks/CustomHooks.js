import { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategroyItems, clearState } from '../store/actions/dbItemsActions';
import { clearAuthErrors } from '../store/actions/authActions';

export const useDbItems = (category, limit="")=>{
    const dispatch = useDispatch();

    let state = useSelector(state=>{
        return limit? 
            state.dbItemsReducer[category]
            :
            state.dbItemsReducer.itemsList;
    });
    useEffect(()=>{
        dispatch(getAllCategroyItems(category, limit));
        return ()=> dispatch(clearState())
    }, [dispatch, category, limit]);
    
    return state;
}

export const useModal = ()=>{
    const dispatch = useDispatch();
    let [ isShowModal, setShowModal ] = useState(false);

    const hideModal = ()=> setShowModal(false);
    const showModal = ()=> setShowModal(true);

    return [isShowModal, showModal, hideModal, dispatch];
}

export const useWindowSize = ()=> {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
      const updateSize = ()=> {
        setSize([window.innerWidth, window.innerHeight]);
      }

      window.addEventListener('resize', updateSize);
      updateSize();

      return () => window.removeEventListener('resize', updateSize);
    },[]);
    
    return size;
}

export const useClearAuthErrors = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        return ()=> dispatch(clearAuthErrors());
    }, [dispatch])
}
  
export const useScrollToTop = () =>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
}