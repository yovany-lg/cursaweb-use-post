import { useState } from 'react';
import axios from 'axios';

const usePost = () => {
  const [postData, updatePostData] = useState({
    pending: false,
    data: undefined,
    error: undefined,
  });

  const execute = async ({ endpoint, postData }) => {
    updatePostData({
      pending: true,
      data: undefined,
      error: undefined,
    });
    return axios
      .post(`http://localhost:3006/${endpoint}`, { ...postData })
      .then(response => {
        updatePostData({ pending: false, data: response.data, error: undefined });
      })
      .catch(error => {
        updatePostData({ pending: false, data: undefined, error: error.message });
      });
  };

  return { execute, pending: postData.pending, data: postData.data, error: postData.error };
};

export default usePost;
