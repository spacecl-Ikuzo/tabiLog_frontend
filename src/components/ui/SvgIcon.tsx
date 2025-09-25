import React from 'react';

interface SvgIconProps {
  name: 'walking' | 'car' | 'clock';
  className?: string;
  size?: number;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, className = '', size = 16 }) => {
  const iconPath = import.meta.env.PROD
    ? `https://storage.googleapis.com/tabilog-dev/svg/${name}.svg`
    : `./svg/${name}.svg`;

  return <img src={iconPath} alt={name} className={className} width={size} height={size} />;
};

export default SvgIcon;
