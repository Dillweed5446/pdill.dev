import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
import hale from '../public/images/hale-o-hooponopono1.jpg'
import sunset from '../public/images/kona-sunset.jpg'
import paddler from '../public/images/pd.png'
import config from '../public/images/next.config'

export default class Slider extends React.Component{ 
    render() {
        return(
    <AwesomeSlider>
      <div><img src={hale} alt="hale" /></div>
      <div><img src={sunset} alt="sunset" /></div>
      <div><img src={paddler} alt="winning" /></div>
    </AwesomeSlider>
      );
    };
}