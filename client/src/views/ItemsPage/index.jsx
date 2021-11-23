import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Card} from '../../components/Card'
import {fetchService} from '../../api/fetchService';
import './style.scss'

function ItemsPage() {
    //redux hook для отправки данных в state
    const dispatch = useDispatch()
    //достаем товары из redux state
    const items = useSelector(state => state.items.items)
    useEffect(() => {
        async function fetchData() {
            const data = await fetchService.fetchItems()
            dispatch({
                type: 'FETCH_ITEMS',
                payload: data
            })
        }
        fetchData()
    }, [dispatch])
    

    
    return (
        <ul className="items-page__list">
            {
                !!items && items.length > 0 && items.map(item => {
                    return(
                        <Card className="items-page__card" key={item.id} item={item}></Card>
                    )
                }) 
            }
        </ul>
    )
}

export {
    ItemsPage
}