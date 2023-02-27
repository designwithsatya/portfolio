import axios from 'axios';

export const SendEmail = async ({ fullName, email, message, setSend }) => {
  try {
    const datas = { fullName, email, message };
    const res = await axios.post(`process.env.REACT_APP_SERVER_URL/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    console.log(error);
  }
};
