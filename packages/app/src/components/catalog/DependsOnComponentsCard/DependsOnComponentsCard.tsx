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

import { RELATION_DEPENDS_ON } from '@backstage/catalog-model';
import { InfoCardVariants } from '@backstage/core-components';
import React from 'react';
import {
  asComponentEntities,
  componentEntityColumns,
  componentEntityHelpLink,
  RelatedEntitiesCard,
} from '../RelatedEntitiesCard';

/** @public */
export interface DependsOnComponentsCardProps {
  variant?: Extract<InfoCardVariants, 'gridItem'>;
  title?: string;
}

export function DependsOnComponentsCard(props: DependsOnComponentsCardProps) {
  const { variant = 'gridItem', title = 'Depends on components' } = props;

  return (
    <RelatedEntitiesCard
      variant={variant}
      title={title}
      entityKind="Component"
      relationType={RELATION_DEPENDS_ON}
      columns={componentEntityColumns}
      emptyMessage="No component is a dependency of this component"
      emptyHelpLink={componentEntityHelpLink}
      asRenderableEntities={asComponentEntities}
    />
  );
}
