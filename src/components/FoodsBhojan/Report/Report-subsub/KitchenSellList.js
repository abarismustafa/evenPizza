import React from 'react'

function KitchenSellList() {
  return (
    <div className='table-responsive active-projects style-1'>
    <h3 className='tbl-caption text-light'>Kitchen Sell List</h3>
    <table class="table table-bordered table-hover">
      <thead class="table-primary">
        <tr>
          <th scope="col">Sr No</th>
          <th scope="col">Kitchen Name</th>
          <th scope="col">Total Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Main Kitchen</td>
          <td>₹25,000</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Grill Kitchen</td>
          <td>₹18,000</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Dessert Kitchen</td>
          <td>₹12,000</td>
        </tr>
      </tbody>
      <tfoot class="table-secondary">
      
        <tr>
          <th colspan="2" class="text-end">Sub Total</th>
          <th>₹55,000</th>
        </tr>

        <tr class="table-success">
          <th colspan="2" class="text-end">Grand Total</th>
          <th>₹55,000</th>
        </tr>
      </tfoot>
    </table>
  </div>
  
   
  )
}

export default KitchenSellList
