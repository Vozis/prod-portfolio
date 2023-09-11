import React from 'react';

import { ILink } from '@/shared/types/link.types';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
}

export interface ILinkButton extends IButton {
  link: ILink;
}
