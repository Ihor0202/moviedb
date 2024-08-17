import React from 'react';
import {useForm} from "react-hook-form";

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
const SearchForm = ({ onSearch },{ nameMo}) => {
    const { handleSubmit, reset, register } = useForm();

    const search = (item) => {
        onSearch(item.movie)
        reset()

    };
    // console.log(onSearch)

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" {...register('movie')} />
            <button>Search</button>
        </form>
    );
};
export default SearchForm;