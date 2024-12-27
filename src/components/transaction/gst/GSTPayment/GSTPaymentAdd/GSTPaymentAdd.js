// import { useState } from "react";
// import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";


// const GSTPaymentAdd = () => {
//     const breadCrumbsTitle = {
//         id: "1",
//         title_1: "Transaction",
//         title_2: 'GST',
//         title_3: `Add GST Payment`,
//         path_2: ``
//     };

//     const [formData, setFormData] = useState({
//         Date: '',
//         BankCash: '',
//         VoucherNo: '',
//         ChallanNo: '',
//         ChallanDate: '',
//         ChqNo: '',
//         ChqDate: ''
//     });

//     // State for dynamic expense and taxes data
//     const [expenses, setExpenses] = useState([]);

//     // Sample expense data based on tax type
//     const taxTypeData = {
//         "GST 5%": [
//             { name: 'CGST 1.5%', UtilizationForAc: 'CGST (O/P)', rate: 1.5, Tax: 0 },
//             { name: 'SGST 1.5%', UtilizationForAc: 'SGST (O/P)', rate: 1.5, Tax: 0 },
//         ],
//         "GST 12%": [
//             { name: 'CGST 6%', UtilizationForAc: 'CGST (O/P)', rate: 6, Tax: 0 },
//             { name: 'SGST 6%', UtilizationForAc: 'SGST (O/P)', rate: 6, Tax: 0 },
//         ],
//         "GST MULTIPLE": [
//             { name: 'CGST 1.5%', UtilizationForAc: 'CGST (O/P)', rate: 1.5, Tax: 0 },
//             { name: 'SGST 1.5%', UtilizationForAc: 'SGST (O/P)', rate: 1.5, Tax: 0 },
//             { name: 'CGST 2.5%', UtilizationForAc: 'CGST (O/P)', rate: 2.5, Tax: 0 },
//         ]
//     };

//     // Handle form input change
//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });

//         // Update expenses when tax type is selected
//         if (e.target.name === 'taxType') {
//             setExpenses(taxTypeData[e.target.value] || []);
//         }
//     };


//     ////////
//     const [rows, setRows] = useState([
//         { id: 1, TaxType: '', TaxAccount: '', Tax: 0, Interest: '', Penalty: '', Fees: '', Other: '', Total: '' },
//         { id: 1, TaxType: '', TaxAccount: '', Tax: 0, Interest: '', Penalty: '', Fees: '', Other: '', Total: '' },
//         { id: 1, TaxType: '', TaxAccount: '', Tax: 0, Interest: '', Penalty: '', Fees: '', Other: '', Total: '' },
//         { id: 1, TaxType: '', TaxAccount: '', Tax: 0, Interest: '', Penalty: '', Fees: '', Other: '', Total: '' },
//     ]);

//     // Function to handle value changes in the input fields
//     const handleChange = (index, key, value) => {
//         const updatedRows = rows.map((row, i) =>
//             i === index ? { ...row, [key]: value } : row
//         );
//         setRows(updatedRows);
//     };

//     // Function to render each row of the table
//     const renderRow = (row, index) => (
//         <tr key={row.id}>
//             {/* Cr/Db Select */}
//             <td>
//                 <select
//                     value={row.TaxType}
//                     onChange={(e) => handleChange(index, 'TaxType', e.target.value)}
//                 >
//                     <option value="">Select</option>
//                     <option value="Cr">Cr</option>
//                     <option value="Db">Db</option>
//                 </select>
//             </td>

//             {/* Account Name Select */}
//             <td>
//                 <select
//                     value={row.TaxAccount}
//                     onChange={(e) => handleChange(index, 'TaxAccount', e.target.value)}
//                 >
//                     <option value="">Select</option>
//                     <option value="Cr">Cr</option>
//                     <option value="Db">Db</option>
//                 </select>
//             </td>
//             <td>
//                 <input
//                     type="number"
//                     value={row.Tax}
//                     onChange={(e) => handleChange(index, 'Tax', e.target.value)}
//                 />
//             </td>

//             {/* HSNCode Input */}
//             <td>
//                 <input
//                     type="number"
//                     value={row.Interest}
//                     onChange={(e) => handleChange(index, 'Interest', e.target.value)}
//                 />
//             </td>

//             {/* Tax Input */}
//             <td>
//                 <input
//                     type="number"
//                     value={row.Penalty}
//                     onChange={(e) => handleChange(index, 'Penalty', e.target.value)}
//                 />
//             </td>

//             <td>
//                 <input
//                     type="number"
//                     value={row.Fees}
//                     onChange={(e) => handleChange(index, 'Fees', e.target.value)}
//                 />
//             </td>
//             <td>
//                 <input
//                     type="number"
//                     value={row.Other}
//                     onChange={(e) => handleChange(index, 'Other', e.target.value)}
//                 />
//             </td>
//             <td>
//                 <input
//                     type="number"
//                     value={row.Total}
//                     onChange={(e) => handleChange(index, 'Total', e.target.value)}
//                 />
//             </td>


//             {/* Delete Button */}
//             <td>
//                 <button onClick={() => handleDeleteRow(index)}>🗑️</button>
//             </td>
//         </tr>
//     );

//     // Function to handle row deletion
//     const handleDeleteRow = (index) => {
//         const updatedRows = rows.filter((_, i) => i !== index);
//         setRows(updatedRows);
//     };

//     // Function to add a new row
//     const handleAddRow = () => {
//         setRows([
//             ...rows,
//             { id: rows.length + 1, Utilization: '', UtilizationForAc: '', HSNCode: 0, Commodity: 0, Tax: 0 },
//         ]);
//     };


//     /////
//     return (
//         <>
//             <Breadcrumbs
//                 breadCrumbsTitle={breadCrumbsTitle} />
//             <div className="row m-4">
//                 <div className="col-xl-12">
//                     <div className="card">
//                         <div className="card-body p-0">
//                             <div className="table-responsive active-projects style-1">
//                                 <div className="tbl-caption tbl-caption-2">
//                                     <h4 className="heading mb-0">Add GST Payment</h4>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-md-3 mb-3">
//                                         <label htmlFor="voucher">Date </label>
//                                         <input
//                                             type="date"
//                                             className="form-control"
//                                             name="voucher"
//                                             value={formData.voucher}
//                                             onChange={handleInputChange}
//                                             placeholder="Enter Voucher"
//                                         />
//                                     </div>

//                                     <div className="col-md-3 mb-3">
//                                         <label htmlFor="voucherTax">Bank/Cash </label>
//                                         <input
//                                             type="number"
//                                             className="form-control"
//                                             name="voucherTax"
//                                             value={formData.voucherTax}
//                                             onChange={handleInputChange}
//                                             placeholder="Enter Voucher Tax"
//                                         />
//                                     </div>
//                                     <div className="col-md-3 mb-3">
//                                         <label htmlFor="voucher">Voucher No </label>
//                                         <input
//                                             type="number"
//                                             className="form-control"
//                                             name="voucher"
//                                             value={formData.voucher}
//                                             onChange={handleInputChange}
//                                             placeholder="Voucher No"
//                                         />
//                                     </div>
//                                     <div className="col-md-3 mb-3">
//                                         <label htmlFor="voucher">Challan No </label>
//                                         <input
//                                             type="number"
//                                             className="form-control"
//                                             name="voucher"
//                                             value={formData.voucher}
//                                             onChange={handleInputChange}
//                                             placeholder="Challan No"
//                                         />
//                                     </div>
//                                     <div className="col-md-3 mb-3">
//                                         <label htmlFor="voucher">Challan Date </label>
//                                         <input
//                                             type="date"
//                                             className="form-control"
//                                             name="voucher"
//                                             value={formData.voucher}
//                                             onChange={handleInputChange}
//                                             placeholder="Challan No"
//                                         />
//                                     </div>
//                                     <div className="col-md-3 mb-3">
//                                         <label htmlFor="voucher">Chq. No </label>
//                                         <input
//                                             type="number"
//                                             className="form-control"
//                                             name="voucher"
//                                             value={formData.voucher}
//                                             onChange={handleInputChange}
//                                             placeholder="Chq. No"
//                                         />
//                                     </div>
//                                     <div className="col-md-3 mb-3">
//                                         <label htmlFor="voucher">Chq. Date</label>
//                                         <input
//                                             type="date"
//                                             className="form-control"
//                                             name="voucher"
//                                             value={formData.voucher}
//                                             onChange={handleInputChange}
//                                             placeholder="Chq. No"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-12">
//                                     <table border="1" cellPadding="10">
//                                         <thead>
//                                             <tr>
//                                                 <th>Tax Type</th>
//                                                 <th>Tax Account</th>
//                                                 <th>Tax</th>
//                                                 <th>Interest</th>
//                                                 <th>Penalty</th>
//                                                 <th>Fees</th>
//                                                 <th>Other</th>
//                                                 <th>Total</th>
//                                                 <th>Action</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {rows.map((row, index) => renderRow(row, index))}
//                                         </tbody>
//                                     </table>
//                                     {/* <button type="button" onClick={handleAddRow}>Add Row</button>    */}
//                                 </div>

//                                 {/* Total Tax */}
//                                 <div className="mt-3">
//                                     <h4>
//                                         Total Tax: {expenses.reduce((total, expense) => total + expense.Tax, 0)}
//                                     </h4>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <button type="button" className="btn btn-primary">Submit</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default GSTPaymentAdd


import { useEffect, useState } from "react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { getAccAddProjectByPage, getAllAccountData, getAllLocationsData, getAllPickupPointsData, getAllProductsData, getAllTaxTypeData, getAllTransportersData, getAttTaxTypeData, getbyIdPurchase, getPickupByPage, getTaxtype, postPurchase, updatePurchase } from "../../../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";
import Loadar from "../../../../../common/loader/Loader";
import { useParams } from "react-router-dom";


const GSTPaymentAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'GST',
        title_3: `Add GST Payment`,
        path_2: ``
    };
    const [allAccounts, setAllAccounts] = useState();
    const [allTaxes, setAllTaxes] = useState();
    const [allTransports, setAllTransports] = useState();
    const [allProducts, setAllProducts] = useState();
    const [allPickupPoints, setAllPickupPoints] = useState();

    const [formData, setFormData] = useState({
        date: '',
        account: '',
        order_no: '',
        transporter: '673843f385dbbfa354004862',
        prj_id: '',
        tax_type: ''
    });

    const parem = useParams()
    const getEditData = async () => {
        try {
            const res = await getbyIdPurchase(parem.id)
            console.log(res);
            setFormData({
                date: res.data?.date,
                account: res.data?.account,
                order_no: res.data?.order_no,
                transporter: '673843f385dbbfa354004862',
                prj_id: res.data?.prj_id,
                tax_type: res.data?.tax_type,
                narration: res.data?.narration
            })
            setRows(res.data?.products)
        } catch (error) {

        }
    }

    useEffect(() => {
        if (parem?.id) {
            getEditData()
        }
    }, [])




    // State for dynamic expense and taxes data
    const [expenses, setExpenses] = useState([]);

    // Sample expense data based on tax type
    const taxTypeData = {
        "GST 5%": [
            { name: 'CGST 1.5%', Product: 'CGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'SGST 1.5%', Product: 'SGST (O/P)', rate: 1.5, amount: 0 },
        ],
        "GST 12%": [
            { name: 'CGST 6%', Product: 'CGST (O/P)', rate: 6, amount: 0 },
            { name: 'SGST 6%', Product: 'SGST (O/P)', rate: 6, amount: 0 },
        ],
        "GST MULTIPLE": [
            { name: 'CGST 1.5%', Product: 'CGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'SGST 1.5%', Product: 'SGST (O/P)', rate: 1.5, amount: 0 },
            { name: 'CGST 2.5%', Product: 'CGST (O/P)', rate: 2.5, amount: 0 },
        ]
    };

    // Handle form input change
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        // Update expenses when tax type is selected
        if (e.target.name === 'taxType') {
            setExpenses(taxTypeData[e.target.value] || []);
        }
    };



    const [rows, setRows] = useState([
        { id: 1, item: '', variant: '', sku: "", Tax: 0, pickupPoint: '', quantity2: '', quantity: 0, rate: 0, disc_rs: '', disc_type: '', amount: 0 },
    ]);


    const handleDeleteRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };
    const handleAddRow = () => {
        setRows([
            ...rows,
            { id: rows.length + 1, item: '', variant: '', sku: "", Tax: 0, pickupPoint: '', quantity2: '', quantity: 0, rate: 0, disc_rs: '', disc_type: '', amount: 0 },
        ]);
    };



    const handleChange = (index, key, value, varArr) => {
        if (key === "item") {
            const variantItem = allProducts?.find((item) => item?._id?.uid === value);
            const updatedRows = rows.map((row, i) =>
                i === index
                    ? {
                        ...row,
                        product_id: value,
                        variant: '',
                        variantArr: variantItem?.product?.variations,
                    }
                    : row
            );
            setRows(updatedRows);
            return;
        }

        if (key === "variant") {
            const skuD = varArr?.find((item) => item?._id === value);
            const updatedRows = rows.map((row, i) =>
                i === index
                    ? {
                        ...row,
                        variant_id: value,
                        sku: skuD?.sku,
                    }
                    : row
            );
            setRows(updatedRows);
            return;
        }

        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                const updatedRow = { ...row, [key]: value };

                // Perform calculations for Amount based on Quantity, Quantity2, Rate, Discount, etc.
                const totalQuantity = parseFloat(updatedRow.quantity || 0) + parseFloat(updatedRow.quantity2 || 0);
                const rate = parseFloat(updatedRow.rate || 0);
                let discount = 0;

                if (updatedRow.disc_type === "Fixed") {
                    discount = parseFloat(updatedRow.disc_rs || 0);
                } else if (updatedRow.disc_type === "per") {
                    discount = (parseFloat(updatedRow.disc_rs || 0) / 100) * (rate * totalQuantity);
                }

                // Calculate Amount
                const amount = (rate * totalQuantity) - discount;
                updatedRow.amount = amount > 0 ? amount.toFixed(2) : 0;
                return updatedRow;
            }
            return row;
        });

        setRows(updatedRows);
    };


    const renderRow = (row, index) => (
        <tr key={row.id}>
            <td>
                <select
                    value={row.product_id}
                    onChange={(e) => handleChange(index, 'item', e.target.value)}
                >
                    <option value="">Select Product</option>
                    {allProducts?.map((item, i) => (
                        <option key={i} value={item?._id?.uid}>
                            {/* {item?._id?.uid} */}
                            {item?.product?.name}
                        </option>
                    ))}
                </select>
            </td>
            <td>
                <select
                    value={row.variant_id}
                    name="variant_id"
                    onChange={(e) => handleChange(index, 'variant', e.target.value, row.variantArr)}
                >
                    <option value="">Select Variant</option>
                    {row?.variantArr?.map((item, i) => (
                        <option key={i} value={item?.uid}>
                            {item?.weight}
                        </option>
                    ))}
                </select>
            </td>
            <td>
                <input
                    type="text"
                    // disabled
                    value={row.sku}
                    onChange={(e) => handleChange(index, 'sku', e.target.value)}
                />
            </td>
            {/* <td>
                <input
                    type="number"
                    value={row.Tax}
                    onChange={(e) => handleChange(index, 'Tax', e.target.value)}
                />
            </td> */}
            <td>
                <select
                    value={row.tax}
                    onChange={(e) => handleChange(index, 'tax', e.target.value)}
                >
                    <option value="">Select Tax Type</option>
                    {allTaxes && allTaxes?.map((item, i) => {
                        return <option value={item?._id}>{item?.name}</option>
                    })}


                </select>
            </td>
            <td>
                <select
                    value={row.location}
                    onChange={(e) => handleChange(index, 'location', e.target.value)}
                >
                    <option value="">Select PickupPoint</option>
                    {allPickupPoints?.map((item, i) => (
                        <option key={i} value={item?._id}>
                            {item?.pickupPoint_name}
                        </option>
                    ))}
                </select>
            </td>
            <td>
                <input
                    type="number"
                    value={row.quantity2}
                    onChange={(e) => handleChange(index, 'quantity2', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.quantity}
                    onChange={(e) => handleChange(index, 'quantity', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.rate}
                    onChange={(e) => handleChange(index, 'rate', e.target.value)}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={row.disc_rs}
                    onChange={(e) => handleChange(index, 'disc_rs', e.target.value)}
                />
            </td>
            <td>
                <select
                    value={row.disc_type}
                    onChange={(e) => handleChange(index, 'disc_type', e.target.value)}
                >
                    <option value="">Select Disc Type</option>
                    <option value="Fixed">Fixed</option>
                    <option value="per">Per</option>
                    <option value="Quantity">Quantity</option>

                </select>
            </td>
            <td>
                <input type="number" value={row.amount} disabled />
            </td>
            <td>
                <button onClick={() => handleDeleteRow(index)}>🗑️</button>
            </td>
        </tr>
    );






    const getAllAccount = async () => {
        try {
            const res = await getAllAccountData();
            setAllAccounts(res?.data?.voucher)
        } catch (error) {

        }
    };

    const getAllTaxType = async () => {
        try {
            const res = await getAllTaxTypeData();
            setAllTaxes(res?.data)
        } catch (error) {

        }
    };
    const getAllTransporters = async () => {
        try {
            const res = await getAllTransportersData();
            setAllTransports(res?.data)
        } catch (error) {

        }
    };
    const getAllProducts = async () => {
        try {
            const res = await getAllProductsData();
            console.log('Products---', res)
            setAllProducts(res)
        } catch (error) {

        }
    };
    const getAllPickupPoints = async () => {
        try {
            const res = await getPickupByPage();
            setAllPickupPoints(res.data)
        } catch (error) {

        }
    };
    const [peoject, setProjects] = useState()
    const getAllProject = async () => {
        try {
            const res = await getAccAddProjectByPage(0, 200, '67444e0fcd1dc218d6090ddc');
            setProjects(res.data)
        } catch (error) {

        }
    };

    useEffect(() => {
        getAllAccount();
        getAllTaxType();
        getAllTransporters();
        getAllProject();
        getAllProducts();
        getAllPickupPoints();
    }, []);
    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
        });
    };

    const [load, setLoad] = useState(false)
    const handleSubmitData = async () => {
        setLoad(true)
        const produ = rows.map((item) => {
            return {
                product_id: item.product_id,
                variant_id: item.variant_id,
                sku: item.sku,
                tax: item.tax,
                location: item.location,
                quantity2: item.quantity2,
                quantity: item.quantity,
                rate: item.rate,
                rate: item.rate,
                disc_rs: item.disc_rs,
                disc_type: item.disc_type,
                amount: item.amount,
            }
        })
        let Quantity = 0
        produ.forEach(element => {
            Quantity = Quantity + +element.quantity

        });
        let Product_amount = 0
        produ.forEach(element => {
            Product_amount = Product_amount + +element.amount

        });
        const obj = { ...formData, products: produ, total_items: produ.length, quantity: Quantity, product_amount: Product_amount }
        // console.log("obj----", obj)

        try {
            const res = await postPurchase(obj)
            if (res?.statusCode == '200') {
                setLoad(false)
                toastSuccessMessage(" Added successfully");
            }
        } catch (error) {

        }
        setLoad(false)
    };


    const handleUpdateData = async () => {
        setLoad(true)
        const produ = rows.map((item) => {
            return {
                product_id: item.product_id,
                variant_id: item.variant_id,
                sku: item.sku,
                tax: item.tax,
                location: item.location,
                quantity2: item.quantity2,
                quantity: item.quantity,
                rate: item.rate,
                rate: item.rate,
                disc_rs: item.disc_rs,
                disc_type: item.disc_type,
                amount: item.amount,
            }
        })
        let Quantity = 0
        produ.forEach(element => {
            Quantity = Quantity + +element.quantity

        });
        let Product_amount = 0
        produ.forEach(element => {
            Product_amount = Product_amount + +element.amount

        });
        const obj = { ...formData, products: produ, total_items: produ.length, quantity: Quantity, product_amount: Product_amount }
        // console.log("obj----", obj)

        try {
            const res = await updatePurchase(obj, parem.id)
            if (res?.statusCode == '200') {
                setLoad(false)
                toastSuccessMessage(" Update successfully");
            }
        } catch (error) {

        }
        setLoad(false)
    };



    return (
        <>
            <ToastContainer />
            {load && <Loadar />}
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2">Add GST Payment</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Date </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Enter Voucher"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucherTax">Bank/Cash </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucherTax"
                                            value={formData.voucherTax}
                                            onChange={handleInputChange}
                                            placeholder="Enter Voucher Tax"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Voucher No </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Voucher No"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Challan No </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Challan No"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Challan Date </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Challan No"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Chq. No </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Chq. No"
                                        />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Chq. Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Chq. No"
                                        />
                                    </div>
                                </div>


                                <div className="col-lg-12" style={{ overflow: "auto" }}>
                                    <table border="1" cellPadding="10" >
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Variants</th>
                                                <th>SKU</th>
                                                <th>Tax %</th>
                                                <th>Location</th>
                                                <th>Quantity2</th>
                                                <th>Quantity</th>
                                                <th>Rate</th>
                                                <th>Disc.(Rs.)</th>
                                                <th>Disc Type</th>
                                                <th>Amount</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows?.map((row, index) => renderRow(row, index))}
                                        </tbody>
                                    </table>
                                    <button type="button" onClick={handleAddRow}>Add Row</button>
                                </div>


                                {/* Expense and Taxes Table */}
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Account Name</th>
                                                <th>Rate</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {expenses.length > 0 ? (
                                                expenses.map((expense, index) => (
                                                    <tr key={index}>
                                                        <td>{expense.name}</td>
                                                        <td>{expense.Product}</td>
                                                        <td>{expense.rate}</td>
                                                        <td>{expense.amount}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="text-center">
                                                        Amount expenses available for the selected tax type.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col-lg-12">
                                    <label htmlFor="taxType">Narration</label>
                                    <textarea name="narration" id="" cols={180} value={formData.narration}
                                        onChange={handleInputChange}></textarea>
                                </div>

                                {/* Total Amount */}
                                <div className="mt-3">
                                    <h5>
                                        Total Amount: {expenses.reduce((total, expense) => total + expense.amount, 0)}
                                    </h5>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <button type="button" className="btn btn-primary" onClick={parem?.id ? handleUpdateData : handleSubmitData}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default GSTPaymentAdd