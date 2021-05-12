import React, {useState} from 'react';
import s from '../../Users/Users.module.css'


export type UsersPropsType = {
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}
const Paginator = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / props.pageSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.pageSize + 1
    let rightPortionPageNumber = portionNumber * props.pageSize


    return <div>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>

}


export default Paginator;