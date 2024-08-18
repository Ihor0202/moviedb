import React from 'react';
import {useForm} from "react-hook-form";
import styles from './Search.module.css'

// const SearchForm = () => {
//     const {handleSubmit, reset, register} = useForm()
//     const {item, setItem} = useState()
//     const search = (query: any)=> {
//         setItem(query.word)
//         reset()
//     }
//     return (
//         <div>
//             <form>
//                 <input type={"text"} {...register('word')}/>
//                 <button>search</button>
//             </form>
//             </div>
//     );
// };
const SearchForm = ({ onSearch }) => {
    const { handleSubmit, reset, register } = useForm();

    const search = (item) => {
        onSearch(item.movie)
        reset()

    };
    // console.log(onSearch)

    return (
        <div className="search-form">
            <form onSubmit={handleSubmit(search)} className={styles.searchFormContainer}>
                <input type="text" {...register('movie')} className={styles.searchFormInput}/>
                <button className={styles.searchFormButton}>Search</button>
            </form>
        </div>
    );
};
export default SearchForm;