import React, {useState} from 'react';

const BlogFilter = ({postQuery,latest, setSearchParams}) => {
const[search,setSearch]=useState(postQuery)
const[checked,setChecked]=useState(latest)
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target
        const query=form.search.value

        const islatest=form.latest.checked
        const params={}
        if(query.length){params.post=query}
        if(islatest){params.latest=true}
        setSearchParams(params)
    }
    const handleSearch=(e)=>{
    setSearch(e.currentTarget.value)
    }
    const handleChecked=(e)=>{
        setChecked(e.currentTarget.checked)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type={'search'} name={'search'} value={search} onChange={handleSearch}/>
            <label><input type={'checkbox'} name={'latest'} checked={checked} onChange={handleChecked}/> Latest</label>
            <input type={'submit'} value={'Search'}/>
        </form>
    );
};

export default BlogFilter;