/* eslint-disable prettier/prettier */
import { applicationProperties } from '../../../application.properties';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const ImageService = {
  uploadProfileImage,
};




async function uploadProfileImage(url, data) {
  
  console.log(Bearer)
  try {
    let loginResponse = 
    console.log(loginResponse)
    return loginResponse;
  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: e,
    };
  }
}
