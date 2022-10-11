import { useEffect } from 'react';

import { textState } from '../App';
import {useRecoilState,} from 'recoil';




const Api = () => {
  const [_, setText] = useRecoilState(textState);
  const getMovies = async () => {
     try {
      const response = await fetch('https://worker.nti-johanneberg.workers.dev/status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"uuid": localStorage.getItem('uuid')}),
      });
      const json = await response.json();
      if (json === "No valid uuid"){
        localStorage.setItem('uuid', "");
      }
      else{
      console.log(json);
      setText(json)}
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])}

  export default Api;