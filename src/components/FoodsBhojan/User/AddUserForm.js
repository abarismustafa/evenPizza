import React from 'react'

function AddUserForm() {
  return (
    <div>
      <form className='row'>
      <div class="mb-3 col-lg-3 col-md-6 col-12">
        <label for="firstName" class="form-label">First Name <span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="firstName" placeholder="First Name" required/>
      </div>
      <div class="mb-3 col-lg-3 col-md-6 col-12">
        <label for="lastName" class="form-label">Last Name <span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="lastName" placeholder="Last Name" required/>
      </div>
      <div class="mb-3 col-lg-3 col-md-6 col-12">
        <label for="email" class="form-label">Email Address <span class="text-danger">*</span></label>
        <input type="email" class="form-control" id="email" placeholder="admin@example.com" required/>
      </div>
      <div class="mb-3 col-lg-3 col-md-6 col-12">
        <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
        <input type="password" class="form-control" id="password" placeholder="•••••" required/>
      </div>
      <div class="mb-3 col-lg-3 col-md-6 col-12">
        <label for="about" class="form-label">About</label>
        <textarea class="form-control" id="about" rows="3" placeholder="About"></textarea>
      </div>
      <div class="mb-3 col-lg-3 col-md-6 col-12">
        <label for="imageUpload" class="form-label">Preview Image</label>
        <input type="file" class="form-control" id="imageUpload"/>
      </div>
      <div class="mb-3 form-check col-lg-3 col-md-6 col-12">
        <input type="checkbox" class="form-check-input" id="isMonitorDisplay"/>
        <label class="form-check-label" for="isMonitorDisplay">Is Monitor Display</label>
      </div>
      <div class="mb-3 col-lg-3 col-md-6 col-12">
        <label for="status" class="form-label">Status <span class="text-danger">*</span></label>
        <select class="form-select" id="status" required>
          <option value="Active" selected>Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div class="text-center">
        <button type="reset" class="btn btn-secondary">Reset</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
      </form>
    </div>
  )
}

export default AddUserForm
