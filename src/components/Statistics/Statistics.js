import PropTypes from 'prop-types';
import { Section, Name, Stats, Item, Label, Percentage } from './Statistics.styled';

export default function Statistics ({title, stats}) {
    return (
<Section>
  {title && <Name>{title}</Name>}
  <Stats>
    {stats.map(({ id, label, percentage}) => {
      return (
    <Item
    key={id}
    >
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
  })}
  </Stats>
</Section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
    )
};