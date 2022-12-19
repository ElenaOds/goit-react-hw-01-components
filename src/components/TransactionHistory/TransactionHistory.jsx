import PropTypes from 'prop-types';

import { Table, Head, Row  } from './TransactionHistory.styled';

export default function TransactionHistory({items}) {
    return (
        <Table>
  <Head>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Head>
  <tbody>
    {items.map (({id, type, amount, currency}) => {
        return (
        <Row key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </Row>
        )})}

  </tbody>
</Table>
    )};

    TransactionHistory.propTypes = {
        items: PropTypes.arrayOf(
          PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
          })
        ),
      };