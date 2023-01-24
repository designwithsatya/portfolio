import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MainContext = React.createContext();
export function useMainContext() {
  return useContext(MainContext);
}

export function ContextProvider(props) {
  const { children } = props;
  const [messageUpdate, setmessageUpdate] = useState();
  const [commentIncreement, setCommentIncreement] = useState(10);
  const [messageReset, setmessageReset] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const value = {
    messageReset,
    setmessageReset,
    messageUpdate,
    setmessageUpdate,
    commentIncreement,
    setCommentIncreement,
    userInfo,
    setUserInfo,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
