import './19.css'
function Color(){
    return(
        <div className='wraper'>
        <h1>Welcom to my page</h1>
        <input type='color' onChange={
            (e)=>{
                document.body.style.background=e.target.value}
        } />
        </div>
    )

}
export default Color