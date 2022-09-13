import React, { Component,useEffect } from 'react';
import Page from './Page';

import { textState } from '../App';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';




const Api = () => {
  const [text, setText] = useRecoilState(textState);
  console.log("hi")
  const getMovies = async () => {
     try {
      const response = await fetch('http://127.0.0.1:8787');
      const json = await response.json();
      console.log(json);
      setText(json)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])}

  export default Api;