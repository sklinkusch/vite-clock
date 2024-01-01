type Props = {
  city: string;
};

const ClockTitle = ({ city }: Props) => {
  const correctedCity = city.replace('-', '–');
  return (
    <h2>
      <span>{correctedCity}</span>
    </h2>
  );
};

export default ClockTitle;
