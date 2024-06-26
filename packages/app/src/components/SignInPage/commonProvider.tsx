/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { InfoCard } from '@backstage/core-components';
import {
  ProviderComponent,
  ProviderLoader,
  SignInProvider,
  SignInProviderConfig,
} from './types';
import { useApi, errorApiRef } from '@backstage/core-plugin-api';
import { GridItem } from './styles';
import { ForwardedError } from '@backstage/errors';
import { UserIdentity } from './UserIdentity';

const Component: ProviderComponent = ({ config, onSignInSuccess }) => {
  const { apiRef, title, message } = config as SignInProviderConfig;
  const authApi = useApi(apiRef);
  const errorApi = useApi(errorApiRef);

  const handleLogin = async () => {
    try {
      const identityResponse = await authApi.getBackstageIdentity({
        instantPopup: true,
      });
      if (!identityResponse) {
        throw new Error(
          `The ${title} provider is not configured to support sign-in`,
        );
      }

      const profile = await authApi.getProfile();

      onSignInSuccess(
        UserIdentity.create({
          identity: identityResponse.identity,
          profile,
          authApi,
        }),
      );
    } catch (error) {
      errorApi.post(new ForwardedError('Login failed', error));
    }
  };

  return (
    <GridItem>
      <InfoCard
        variant="fullHeight"
        title={title}
        actions={
          <Button color="primary" variant="outlined" onClick={handleLogin}>
            Sign In
          </Button>
        }
      >
        <Typography variant="body1">{message}</Typography>
      </InfoCard>
    </GridItem>
  );
};

const loader: ProviderLoader = async (apis, apiRef) => {
  const authApi = apis.get(apiRef)!;

  const identityResponse = await authApi.getBackstageIdentity({
    optional: true,
  });

  if (!identityResponse) {
    return undefined;
  }

  const profile = await authApi.getProfile();

  return UserIdentity.create({
    identity: identityResponse.identity,
    profile,
    authApi,
  });
};

export const commonProvider: SignInProvider = { Component, loader };
