import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

declare type PropsWithChildrenAndClassName = {
  children: ReactNode,
  className?: ClassNameValue;
}