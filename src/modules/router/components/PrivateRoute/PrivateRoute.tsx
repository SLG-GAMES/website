import { useAccount } from 'modules/account/hooks/useAccount';
import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { ConnectWallet } from '../ConnectWallet';
import { ChangeWallet } from '../ChangeWallet';

interface IPrivateRouteProps extends RouteProps { }

export const PrivateRoute = (props: IPrivateRouteProps) => {
  const { isConnected, isChainSupported, loading } = useAccount();

  if (loading) {
    return <></>;
  }
  if (!isConnected && !loading) {
    return <Route {...props} component={ConnectWallet} />;
  }

  if (isConnected && !isChainSupported && !loading) {
    return <Route {...props} component={ChangeWallet} />;
  }

  return <Route {...props} />;
};

export const HalfPrivateRoute = (props: IPrivateRouteProps) => {
  const { isConnected, isChainSupported, loading } = useAccount();

  if (loading) {
    return <Route {...props} />;
  }

  if (isConnected && !isChainSupported && !loading) {
    return <Route {...props} component={ChangeWallet} />;
  }

  return <Route {...props} />;
};
