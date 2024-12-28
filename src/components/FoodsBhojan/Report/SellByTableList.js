import React from 'react'

function SellByTableList() {
  return (
    <div className='table-responsive active-projects style-1'>
    <h3 className='tbl-caption text-light'>Sell By Table List</h3>
      <table class="table table-bordered table-hover">
  <thead class="table-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Waiter</th>
      <th scope="col">Total (₹)</th>
      <th scope="col">Commission (₹)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>John Doe</td>
      <td>₹15,000</td>
      <td>₹1,500</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jane Smith</td>
      <td>₹20,000</td>
      <td>₹2,000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark Johnson</td>
      <td>₹12,500</td>
      <td>₹1,250</td>
    </tr>
  </tbody>
  <tfoot class="table-secondary">
    <tr>
      <th colspan="2" class="text-end">Total</th>
      <th>₹47,500</th>
      <th>₹4,750</th>
    </tr>
  </tfoot>
</table>
    </div>
  )
}

export default SellByTableList
