import React from "react";

const AllocationTable = (data: any, index_component: any) => {
  let total_token_value = 0;

  data?.forEach((coin: any) => {
    total_token_value +=
      index_component.find((token: any) => token.name === coin.id).quantity *
      coin.current_price;
  });

  console.log("total token value", total_token_value);

  return (
    <table>
      <thead>
        <tr>
          <th>Underlying token</th>
          <th>Quantity per Token</th>
          <th>Token Price</th>
          <th>Allocation</th>
          <th>Value per Token</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((coin: any) => (
          <tr key={coin.id}>
            <th data-label="token">{coin.name}</th>
            <td data-label="quantity">
              {index_component.find((token: any) => token.name === coin.id).quantity}
            </td>
            <td data-label="price">${coin.current_price.toLocaleString()}</td>
            <td data-label="allocation">
              {(
                ((index_component.find((token: any) => token.name === coin.id)
                  .quantity *
                  coin.current_price) /
                  total_token_value) *
                100
              ).toFixed(2)}
              %
            </td>
            <td data-label="value">
              $
              {(
                index_component.find((token: any) => token.name === coin.id)
                  .quantity * coin.current_price
              ).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllocationTable;
