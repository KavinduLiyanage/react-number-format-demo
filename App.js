/* eslint-disable indent */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Switch from '@material-ui/core/Switch';
// import { FormControl, FormHelperText, TextField } from '@material-ui/core';
// import NumberFormat from 'react-number-format';

// components
// import { TextInput, SelectBox } from '../../../components/common/formHelper';
import { TextInput } from '../../../components/common/formHelper';
import { PrimaryButton } from '../../../components/common/buttons';

// const cardData = [
//     { key: 'VISA', value: 'VISA' },
//     { key: 'MASTERCARD', value: 'MASTERCARD' },
// ];

const formDetails = [
    {
        label: 'First name*',
        name: 'firstName',
    },
    {
        label: 'Last name*',
        name: 'lastName',
    },
    {
        label: 'Company name',
        name: 'company',
    },
    {
        label: 'ID*',
        name: 'id',
    },
    {
        label: 'Phone Number*',
        name: 'phoneNumber',
    },
    // {
    //     label: 'Card type',
    //     name: 'cardType',
    //     type: 'select',
    // },
    // {
    //     label: 'Card number',
    //     name: 'cardNumber',
    //     type: 'number',
    // },
    // {
    //     label: 'Expire date',
    //     name: 'expireDate',
    //     placeholder: 'MM/YY',
    // },
    // {
    //     label: 'CVV code',
    //     name: 'cvv',
    //     type: 'number',
    // },
];

// /**
//  * Card Number Format function
//  * @param {inputRef, onChange, ...other} props
//  */
// function NumberFormatCardNumber(props) {
//     const { inputRef, onChange, ...other } = props;

//     return (
//         <NumberFormat
//             {...other}
//             getInputRef={inputRef}
//             onValueChange={values => {
//                 onChange({
//                     target: {
//                         name: props.name,
//                         value: values.value,
//                     },
//                 });
//             }}
//             format="#### #### #### ####"
//         />
//     );
// }

// NumberFormatCardNumber.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

// /**
//  * Limit in Card Expiry
//  * @param {*} val
//  * @param {*} max
//  */
// function limit(val, max) {
//     if (val.length === 1 && val[0] > max[0]) {
//         val = `0${val}`;
//     }

//     if (val.length === 2) {
//         if (Number(val) === 0) {
//             val = '01';

//             // this can happen when user paste number
//         } else if (val > max) {
//             val = max;
//         }
//     }

//     return val;
// }
// /**
//  * Card Expiry
//  * @param {*} val
//  */
// function cardExpiry(val) {
//     const month = limit(val.substring(0, 2), '12');
//     const year = val.substring(2, 4);

//     return month + (year.length ? `/${year}` : '');
// }

// /**
//  * Card Expire date format function
//  * @param {inputRef, onChange, ...other} props
//  */
// function NumberFormatExpireDate(props) {
//     const { inputRef, onChange, ...other } = props;

//     return (
//         <NumberFormat
//             {...other}
//             getInputRef={inputRef}
//             onValueChange={values => {
//                 onChange({
//                     target: {
//                         name: props.name,
//                         value: values.value,
//                     },
//                 });
//             }}
//             format={cardExpiry}
//             placeholder="MM/YY"
//             mask={['M', 'M', 'Y', 'Y']}
//         />
//     );
// }

// NumberFormatExpireDate.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

// /**
//  * Cvv format function
//  * @param {inputRef, onChange, ...other} props
//  */
// function NumberFormatCvv(props) {
//     const { inputRef, onChange, ...other } = props;

//     return (
//         <NumberFormat
//             {...other}
//             getInputRef={inputRef}
//             onValueChange={values => {
//                 onChange({
//                     target: {
//                         name: props.name,
//                         value: values.value,
//                     },
//                 });
//             }}
//             format="####"
//             placeholder="cvv"
//         />
//     );
// }

// NumberFormatCvv.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

const PaymentForm = ({ formik, data }) => {
    const paymentData = useSelector(state => state.payment.paymentData);
    const [buttonStyle] = useState('payment__form_btn');

    const [state, setState] = React.useState({
        checkedA: true,
    });

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    // useEffect(() => {
    //     if (paymentData.data) {
    //         setButtonStyle('payment__form_btn_hide');
    //     }
    // }, [paymentData]);

    return (
        <form onSubmit={formik.handleSubmit} className="payment__form">
            {formDetails.map((item, index) => {
                // if (item.type === 'select')
                //     return (
                //         <SelectBox
                //             key={index}
                //             data={cardData}
                //             id={item.name}
                //             inputLabel={item.label}
                //             size="small"
                //             onChange={formik.handleChange}
                //             value={formik.values[item.name]}
                //             inputError={formik.touched[item.name] && formik.errors[item.name]}
                //             formClass="payment__form_item"
                //             {...item}
                //         />
                //     );

                // if (item.name === 'cardNumber')
                //     return (
                //         <FormControl className="payment__form_item" error={!!formik.touched.cardNumber && formik.errors.cardNumber}>
                //             <TextField
                //                 variant="outlined"
                //                 id="cardNumber"
                //                 name="cardNumber"
                //                 label={item.label}
                //                 error={!!(formik.touched.cardNumber && formik.errors.cardNumber)}
                //                 onChange={formik.handleChange}
                //                 value={formik.values.cardNumber}
                //                 placeholder="0000 0000 0000 0000"
                //                 InputProps={{
                //                     inputComponent: NumberFormatCardNumber,
                //                 }}
                //             />
                //             <FormHelperText className="defaultHellperTxt">{formik.touched.cardNumber && formik.errors.cardNumber}</FormHelperText>
                //         </FormControl>
                //     );

                // if (item.name === 'expireDate')
                //     return (
                //         <FormControl className="payment__form_item" error={!!formik.touched.expireDate && formik.errors.expireDate}>
                //             <TextField
                //                 variant="outlined"
                //                 id="expireDate"
                //                 name="expireDate"
                //                 label={item.label}
                //                 error={!!(formik.touched.expireDate && formik.errors.expireDate)}
                //                 onChange={formik.handleChange}
                //                 value={formik.values.expireDate}
                //                 InputProps={{
                //                     inputComponent: NumberFormatExpireDate,
                //                 }}
                //             />
                //             <FormHelperText className="defaultHellperTxt">{formik.touched.expireDate && formik.errors.expireDate}</FormHelperText>
                //         </FormControl>
                //     );
                // if (item.name === 'cvv')
                //     return (
                //         <FormControl className="payment__form_item" error={!!formik.touched.cvv && formik.errors.cvv}>
                //             <TextField
                //                 variant="outlined"
                //                 id="cvv"
                //                 name="cvv"
                //                 label={item.label}
                //                 error={!!(formik.touched.cvv && formik.errors.cvv)}
                //                 onChange={formik.handleChange}
                //                 value={formik.values.cvv}
                //                 InputProps={{
                //                     inputComponent: NumberFormatCvv,
                //                 }}
                //             />
                //             <FormHelperText className="defaultHellperTxt">{formik.touched.cvv && formik.errors.cvv}</FormHelperText>
                //         </FormControl>
                //     );

                return (
                    <TextInput
                        key={index}
                        id={item.name}
                        type={item.type || ''}
                        size="small"
                        onChange={formik.handleChange}
                        value={formik.values[item.name]}
                        inputError={formik.touched[item.name] && formik.errors[item.name]}
                        onKeyDown={
                            item.name === 'id' || item.name === 'phoneNumber'
                                ? evt => {
                                      if (
                                          // Allow: backspace, delete, tab, escape, enter
                                          [46, 8, 9, 27, 13, 110].includes(evt.keyCode) ||
                                          // Allow: Ctrl+A,Ctrl+C,Ctrl+V, Command+A
                                          ((evt.keyCode === 65 || evt.keyCode === 86 || evt.keyCode === 67) &&
                                              (evt.ctrlKey === true || evt.metaKey === true)) ||
                                          // Allow: home, end, left, right, down, up
                                          (evt.keyCode >= 35 && evt.keyCode <= 40) ||
                                          ['+'].includes(evt.key)
                                      ) {
                                          // let it happen, don't do anything
                                          return;
                                      }
                                      // Ensure that it is a number and stop the keypress
                                      if ((evt.shiftKey || evt.keyCode < 48 || evt.keyCode > 57) && (evt.keyCode < 96 || evt.keyCode > 105)) {
                                          evt.preventDefault();
                                      }
                                  }
                                : null
                        }
                        formClass="payment__form_item"
                        {...item}
                    />
                );
            })}

            <div className="payment__form_advice">
                <h5>Please be advised: </h5>
                <p>• Your card will be charged monthly for the period stated above </p>
                <p>• First payment will be double the amount stated </p>
                <p>• To cancel the deal, please contact 30 days in advance</p>
                <p>• After cancellation notice is received, your final payment will be deposited back to your account.</p>
            </div>
            <div className="payment__form_submit">
                <PrimaryButton type="submit" className={buttonStyle}>
                    {paymentData.loading ? 'Booking...' : 'Book Now'}
                </PrimaryButton>
                <p className="payment__form_btn_helper">{`${data} free cancellation`}</p>
            </div>
            <div className="payment__form_footer">
                <p>Use card for future actions WorkWise</p>
                <Switch checked={state.checkedA} onChange={handleChange} name="checkedA" inputProps={{ 'aria-label': 'secondary checkbox' }} />
            </div>
        </form>
    );
};

PaymentForm.propTypes = {
    formik: PropTypes.object.isRequired,
    data: PropTypes.string.isRequired,
};

export default PaymentForm;
