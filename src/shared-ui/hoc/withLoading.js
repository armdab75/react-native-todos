import React from 'react';
import Loading from '../Loading';

const withLoadingIndicator = Component => props => {
  if (props.isLoading) {
    return <Loading />;
  }
  return <Component {...props} />;
};

export default withLoadingIndicator;