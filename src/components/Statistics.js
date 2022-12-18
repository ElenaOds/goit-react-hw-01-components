import PropTypes from 'prop-types';

export default function Statistics ({title, label, percentage}) {
    return (
<section>
  <h2>Upload stats</h2>
  <ul>
    <li>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
    {/* <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li> */}
  </ul>
</section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};