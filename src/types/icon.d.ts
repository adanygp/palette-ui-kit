import { SVGProps } from 'react';

export type IconName = 
  | 'settings' 
  | 'star' 
  | 'heart' 
  | 'share' 
  | 'map-pin' 
  | 'bed' 
  | 'bath' 
  | 'wifi' 
  | 'car' 
  | 'paw' 
  | 'users'
  | 'calendar'
  | 'fire'
  | 'chemistry'
  | 'lightning'
  | 'mail';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  className?: string;
}
