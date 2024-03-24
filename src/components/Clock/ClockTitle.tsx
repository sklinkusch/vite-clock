import type { ClockTitleProps } from '../../types/custom';

const ClockTitle = ({ city }: ClockTitleProps) => {
  const correctedCity = city.replace('-', '–');
  return (
    <h2>
      <span>{correctedCity}</span>
    </h2>
  );
};

export default ClockTitle;
