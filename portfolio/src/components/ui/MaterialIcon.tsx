'use client';

import React, { FC } from 'react';
import * as MaterialIcons from 'react-icons/fa';

import { TypeMaterialIconName } from '@/shared/types/icon.types';

const MaterialIcon: FC<
  { name: TypeMaterialIconName } & React.HTMLAttributes<HTMLDivElement>
> = ({ name, className }) => {
  const IconComponent = MaterialIcons[name];

  return <IconComponent className={className} /> || <MaterialIcons.FaHammer />;
};

export default MaterialIcon;
