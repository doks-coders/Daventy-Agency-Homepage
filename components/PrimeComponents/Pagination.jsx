import React, { useState } from 'react';
import { Paginator } from 'primereact/paginator';

const PaginatorDemo = ({total,onIndexChange,indexEntered,setBasicFirst,basicFirst}) => {
   
// 0, 1 ,2, 3,4,5

    const [basicRows, setBasicRows] = useState(2);
    const onBasicPageChange = (event) => {
        setBasicFirst(event.first);
        setBasicRows(event.rows);
        onIndexChange(event)
    }

    let getCorrectIndex = (value)=>{
        let answer =  (Number(value)-1) *2
        return answer
     }


    return (
        <div className="paginator-demo">
            <div className="card">
                <Paginator first={getCorrectIndex(indexEntered)} rows={basicRows} totalRecords={total}  onPageChange={onBasicPageChange}></Paginator>
            {/*rowsPerPageOptions={[10, 20, 30]}*/}
            </div>
        </div>
    );
}

export default PaginatorDemo