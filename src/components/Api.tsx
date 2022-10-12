import { useEffect } from 'react';
import { textState } from '../App';
import { useRecoilState } from 'recoil';


const Api = () => {
  const [_, setText] = useRecoilState(textState);
  const apirequest = async () => {
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
      console.log("Data successfully fetched");
      setText(json)}
    } 
    catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    apirequest();
  }, [])
}

export default Api;