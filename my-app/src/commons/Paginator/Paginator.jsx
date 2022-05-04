
import { useState } from "react";
import s from "./Paginator.module.css"
const Paginator = ({totalItemsPage,pageSize, portionSize = 20,currentPage,onPageChange}) => {
    let pagesCount = Math.ceil(totalItemsPage / pageSize)
    let pages = [];

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber,setPortionNumber] = useState(1)
    let leftPortionBorder = (portionNumber - 1) * portionSize + 1;
    let rightPortionBorder = portionNumber * portionSize;

    for (let i = 1; i <= pagesCount; i++) {
       pages.push(i)
    }
    
    
    return (
    
       <div className={s.numberWrapper}>
          {portionNumber > 1 ?
          <button className={s.paginatorBtn} onClick={()=>{ setPortionNumber(portionNumber - 1)}}>Prev</button> 
          :
          ""
          }
          <div >

             {pages.filter( p => p >= leftPortionBorder && p <= rightPortionBorder)
             .map(p => {
                return <span onClick={() => { onPageChange(p) }} key={p} className={currentPage === p ? s.selectedNumber : ''}>{p}</span>
             })}
          </div>
          { portionCount > portionNumber ?  <button className={s.paginatorBtn} onClick={()=>{setPortionNumber(portionNumber + 1)}}>Next</button> : ""}
        </div>
        
    )
 }
 export default Paginator;