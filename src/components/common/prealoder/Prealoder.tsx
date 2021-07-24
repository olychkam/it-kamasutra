import React from 'react';
import preolader from "../../../assets/images/preolader1.gif";
import CircularProgress from '@material-ui/core/CircularProgress';

type PrealoderType={

}

const Prealoder=(props:PrealoderType)=>{
    return <div>
        {/*<img src={preolader}/>*/}
        <CircularProgress />
    </div>
}
export default Prealoder;