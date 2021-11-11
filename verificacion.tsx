// $(window).on('load', function () {
//   let specifications = []

//   alert("INICIO DE LA VERIFICAION DE DIRECCIONES")

//   const validateAddress = {
//     getSuggestedAddress: () => {
//       let city, street1, street2, postalCode, state

//       if ($('#ship-street').val() !== undefined) {
//         street1 = $('#ship-street').val()
//       } else if (
//         $(
//           '.vtex-omnishipping-1-x-addressForm .vtex-omnishipping-1-x-addressSummaryActive .address-summary-USA .street'
//         ).text() != ''
//       ) {
//         street1 = $(
//           '.vtex-omnishipping-1-x-addressForm .vtex-omnishipping-1-x-addressSummaryActive .address-summary-USA .street'
//         ).text()
//       } else {
//         street1 = $('.vtex-omnishipping-1-x-addressList label.address-item.vtex-omnishipping-1-x-active .street').text()
//       }
//       if ($('#ship-complement').val() !== undefined) {
//         street2 = $('#ship-complement').val()
//       } else if (
//         $('.vtex-omnishipping-1-x-addressList label.address-item.vtex-omnishipping-1-x-active .complement').text() != ''
//       ) {
//         street2 = $(
//           '.vtex-omnishipping-1-x-addressList label.address-item.vtex-omnishipping-1-x-active .complement'
//         ).text()
//       }
//       if ($('#ship-city').val() !== undefined) {
//         city = $('#ship-city').val()
//       } else if (
//         $(
//           '.vtex-omnishipping-1-x-addressForm .vtex-omnishipping-1-x-addressSummaryActive .address-summary-USA .city'
//         ).text() != ''
//       ) {
//         city = $(
//           '.vtex-omnishipping-1-x-addressForm .vtex-omnishipping-1-x-addressSummaryActive .address-summary-USA .city'
//         ).text()
//       } else {
//         city = $('.vtex-omnishipping-1-x-addressList label.address-item.vtex-omnishipping-1-x-active .city').text()
//       }
//       if ($('#ship-state').val() !== undefined) {
//         state = $('#ship-state').val()
//       } else if (
//         $(
//           '.vtex-omnishipping-1-x-addressForm .vtex-omnishipping-1-x-addressSummaryActive .address-summary-USA .state'
//         ).text() != ''
//       ) {
//         state = $(
//           '.vtex-omnishipping-1-x-addressForm .vtex-omnishipping-1-x-addressSummaryActive .address-summary-USA .state'
//         ).text()
//       } else {
//         state = $('.vtex-omnishipping-1-x-addressList label.address-item.vtex-omnishipping-1-x-active .state').text()
//       }
//       if ($('#ship-postalCode').val() != undefined) {
//         postalCode = $('#ship-postalCode').val()
//       } else {
//         postalCode = $(
//           '.vtex-omnishipping-1-x-addressList label.address-item.vtex-omnishipping-1-x-active .postalCode'
//         ).text()
//       }

//       const postData = {
//         addressLine1: 'Sara Garcia',
//         addressLine2: 'El Porvenir 2',
//         city: 'Lerma',
//         state: 'Virginia',
//         zipCode: '89756',
//       }

//       console.log('LA DATA A ENVIAR POR AJAX', postData)

//       $('.loading.loading-bg').show()
//       $('.icon-spinner').show()

//       $.ajax({
//         //   url: apiUrl,
//         url: 'http://dontpad.com/addressValidation',
//         type: 'post',
//         data: JSON.stringify(postData),
//         success: function (response) {
//           $('.loading.loading-bg').hide()
//           $('.icon-spinner').hide()

//           // console.log('address', city, street1, street2, postalCode, state, response)

//           //* if the addres returned is EXACTLY the same, ignore the modal and continue!
//           if (
//             response?.city === city &&
//             response?.street === street1 &&
//             response?.complement === street2 &&
//             response?.postalCode === postalCode &&
//             response?.state === state
//           ) {
//             validateAddress.validatePoBoxAndMilitaryAddress()
//           }

//           if (response?.street != undefined || response?.complement != undefined) modal.loadModal(postData, response)
//         },
//         error: function (error) {
//           $('.loading.loading-bg').hide()
//           $('.icon-spinner').hide()
//           console.error('** Error addressValidation ** => ', error)
//           window.location.href = rootPath() + '/checkout/#/shipping'
//         },
//       })
//     },
//     useSuggestedAddress: (address) => {
//       $('#ship-postalCode').val(address.postalCode && address.postalCode)
//       $('#ship-street').val(address.street && address.street)
//       $('#ship-city').val(address.city && address.city)
//       $('#ship-complement').val(address.complement && address.complement)
//       $('#ship-state').val(address.state && address.state)

//       sessionStorage.setItem('addressState', address.state && address.state)
//       sessionStorage.setItem('addressCity', address.city && address.city)
//       sessionStorage.setItem('addressPostalcode', address.postalCode && address.postalCode)
//       sessionStorage.setItem('addressComplement', address.complement && address.complement)
//       sessionStorage.setItem('addressStreet', address.street && address.street)

//       validateAddress.validatePoBoxAndMilitaryAddress()
//       validateAddress.setAddressToOrderForm(address)
//       $('#btn-go-to-payment').show()
//       $('.vtex-omnishipping-1-x-deliveryGroup').show()
//       modal.remove()
//     },

//     validatePoBoxAndMilitaryAddress: () => {
//       const regx = /P\.?O\.?\s+(.*)\d+/gi
//       let state, street1, poBox

//       if ($('#ship-state').val() !== undefined) {
//         state = $('#ship-state').val()
//       } else if (
//         $(
//           '.vtex-omnishipping-1-x-addressForm .vtex-omnishipping-1-x-addressSummaryActive .address-summary-USA .state'
//         ).text() != ''
//       ) {
//         state = $(
//           '.vtex-omnishipping-1-x-addressForm .vtex-omnishipping-1-x-addressSummaryActive .address-summary-USA .state'
//         ).text()
//       } else {
//         state = $('.vtex-omnishipping-1-x-addressList label.address-item.vtex-omnishipping-1-x-active .state').text()
//       }

//       if ($('#ship-street').val() !== undefined) {
//         street1 = $('#ship-street').val()
//       } else if (
//         $(
//           '.vtex-omnishipping-1-x-addressForm .vtex-omnishipping-1-x-addressSummaryActive .address-summary-USA .street'
//         ).text() != ''
//       ) {
//         street1 = $(
//           '.vtex-omnishipping-1-x-addressForm .vtex-omnishipping-1-x-addressSummaryActive .address-summary-USA .street'
//         ).text()
//       } else {
//         street1 = $('.vtex-omnishipping-1-x-addressList label.address-item.vtex-omnishipping-1-x-active .street').text()
//       }

//       poBox = regx.test(street1)

//       //Validating PO BOX address
//       //hide 2 day and Next Day Air Delivery shipping methods
//       if (poBox) {
//         fixedAlert.notify(
//           'warning',
//           'Your address is a postal box.',
//           '',
//           '*Expedited, 2-Day and Next Day Air shipping not available for postal box addresses.'
//         )
//         $('#delivery-packages-options')
//           .children()
//           .each(function () {
//             let shippingMethod = $(this).children()[0].id.toString().toLowerCase()

//             if (!shippingMethod.includes('economy')) {
//               $(this).hide()
//             }
//           })
//       }
//       //validating military address
//       //show only Economy shipping method
//       if (state.includes('AA') || state.includes('AE') || state.includes('AP')) {
//         fixedAlert.notify(
//           'warning',
//           'Your address is an Armed Forces postal box.',
//           '',
//           '*Expedited, 2-Day and Next Day Air shipping not available for Armed Forces addresses.'
//         )

//         $('#delivery-packages-options')
//           .children()
//           .each(function () {
//             let shippingMethod = $(this).children()[0].id.toString().toLowerCase()

//             if (!shippingMethod.includes('economy')) {
//               $(this).hide()
//             }
//           })
//       }
//     },
//     setAddressToOrderForm: (address) => {
//       setTimeout(() => {
//         fetch(`/api/checkout/pub/orderForm/${vtexjs.checkout.orderForm.orderFormId}/attachments/shippingData`, {
//           credentials: 'include',
//           headers: {
//             accept: 'application/json, text/java, */*; q=0.01',
//             'cache-control': 'no-cache',
//             'content-type': 'application/json; charset=UTF-8',
//             pragma: 'no-cache',
//             'sec-fetch-mode': 'cors',
//             'sec-fetch-site': 'same-origin',
//             'x-requested-with': 'XMLHttpRequest',
//           },
//           referrerPolicy: 'no-referrer-when-downgrade',
//           body: JSON.stringify({
//             selectedAddresses: [
//               {
//                 street: address.street && address.street,
//                 state: address.state && address.state,
//                 postalCode: address.postalCode && address.postalCode,
//                 city: address.city && address.city,
//                 complement: address.complement && address.complement,
//                 addressType: 'residential',
//                 receiverName: vtexjs.checkout.orderForm.shippingData.selectedAddresses[0].receiverName,
//                 isDisposable: true,
//                 country: vtexjs.checkout.orderForm.shippingData.selectedAddresses[0].country,
//                 geoCoordinates: vtexjs.checkout.orderForm.shippingData.selectedAddresses[0].geoCoordinates,
//                 neighborhood: vtexjs.checkout.orderForm.shippingData.selectedAddresses[0].neighborhood,
//                 number: vtexjs.checkout.orderForm.shippingData.selectedAddresses[0].number,
//                 reference: vtexjs.checkout.orderForm.shippingData.selectedAddresses[0].reference,
//               },
//             ],
//             clearAddressIfPostalCodeNotFound: false,
//           }),
//           method: 'POST',
//           mode: 'cors',
//         })
//           .then((response) => response.json())
//           .then(function (data) {
//             vtexjs.checkout.getOrderForm().then(function (orderForm) {
//               // console.log('orderForm Address Updated => ', orderForm)
//               $('.payment-submit-wrap button').prop('disabled', false)
//             })
//           })
//           .catch(function (error) {
//             console.log('Fetch Error ** SHIPPING DATA ** => ', error.message)
//           })
//       }, 500)
//     },
//     validateTax: () => {
//       const taxes = vtexjs.checkout.orderForm.totalizers.find((item) => item.id.includes('Tax'))
//       $('.zeroTax').remove()

//       const html = `
//         <tr class="zeroTax">
//             <td class="info">
//                 <span class="postal-code-for-sla">
//                     <span
//                         class="shipping-name">Taxes
//                     </span>
//                 </span>
//             </td>
//             <td class="space"></td>
//             <td class="monetary">${location.hash != '#/payment' ? 'TBD' : '$ 0.0'}</td>
//             <td class="empty"></td>
//         </tr>
//         `

//       if (!taxes && $('.zeroTax').length === 0) {
//         $('tbody.totalizers-list').append(html)
//         return
//       }

//     },

//     limitPostalCode: () => {
//       let limit = 5
//       const inputPostalCode = '#ship-postalCode'

//       $(inputPostalCode).on('keydown', function () {
//         if ($(this).val().length >= limit) {
//           return false
//         }
//       })
//     },
//   }

//   const modal = {
//     loadModal: (typedAddress, address = '') => {
//       modal.remove()

//       const htmlSame = `<div id="addressModal">
//       <div class="addressModal-precontent">
//         <div class="addressModal-header">
//           <div class="addressModal-close" id="closeModal" >
//             <span class="addressModal-edit">X</span>
//           </div>
//         </div>
//         <div class="addressModal-container">
//           <h2>Is this correct address?</h2>
//           <span>
//             Your address couldn't be verified, which could lead to delivery delays or lost pachages. Please check and edit your adress os choose to continue with this address.
//           </span>
//           <strong>You Entered:</strong>
//           <span class='address-content'>
//             ${typedAddress.addressLine1}, ${typedAddress.addressLine2}, ${typedAddress.city}, ${typedAddress.state}, ${typedAddress.zipCode}
//           </span>
//         </div>
//         <div class="addressModal-footer">
//           <div class="addressModal-continue" id="continueModal" >
//             <span>Continue with this address</span>
//           </div>
//           <div class="addressModal-edit" id="closeModalTwo" >
//             <span>Edit Address</span>
//           </div>
//         </div>
//       </div>`

//       const html = `<div id="addressModal">
//         <div class="addressModal-content">
//           <div class="addressModal-header">
//             <div class="addressModal-close" id="closeModalThree" >
//               <span class="addressModal-edit">X</span>
//             </div>
//           </div>
//           <div class="addressModal-container">
//             <span class="addressModal-match">Address Verification</span>
//             <span>
//               Using the address you entered may cause issues with delivery. Please Review the address and confirm that all information below is correct or view the suggested corrections.
//             </span>
//             <div class="addressess">
//               <div class="addressModal-address">
//                 <span class="addressTyped">Use Address As Is</span>
//                 <label for="addressTyped"><input type="radio" id="addressTyped" name="address" value="addressTyped">
//                  ${typedAddress.addressLine1}, ${typedAddress.addressLine2 && typedAddress.addressLine2 + ', '} ${typedAddress.city
//         }, ${typedAddress.state}, ${typedAddress.zipCode}
//                 </label>
//               </div>
//               <div class="addressModal-address">
//                 <span class="addressSuggested">Suggested Address</span>
//                 <label for="addressSuggested"><input type="radio" id="addressSuggested" name="address" value="addressSuggested">
//                   ${address.street}, ${address.complement ? address.complement + ',' : ''} ${address.city}, ${address.state}, ${address.postalCode}
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div class="addressModal-footer">
//             <div class="addressModal-back-shipping" id="backModal" >
//               <span>Back to shipping</span>
//             </div>
//             <div class="addressModal-apply" id="applyModal" >
//               <span>Continue</span>
//             </div>
//           </div>
//         </div>
//       </div>`

//       if (typedAddress.addressLine1 == address.street && typedAddress.addressLine2 == address.complement) {
//         $('body').append(htmlSame)
//       } else {
//         $('body').append(html)
//       }

//       $('#closeModal').on('click', function (e) {
//         e.preventDefault()
//         modal.remove()
//       })

//       $('#closeModalTwo').on('click', function (e) {
//         e.preventDefault()
//         modal.remove()
//       })

//       $('#closeModalThree').on('click', function (e) {
//         e.preventDefault()
//         modal.remove()
//       })

//       $('#continueModal').on('click', function (e) {
//         e.preventDefault()
//         modal.remove()
//       })

//       $('#backModal').on('click', function (e) {
//         e.preventDefault()
//         modal.remove()
//       })

//       $('.addressess input').on('change', function (e) {
//         e.preventDefault()

//         const target = e.target

//         $('#applyModal').on('click', function () {
//           if (target.value == 'addressTyped') {
//             validateAddress.validatePoBoxAndMilitaryAddress()
//             modal.remove()
//           }

//           if (target.value == 'addressSuggested') {
//             validateAddress.useSuggestedAddress(address)
//             modal.remove()
//           }
//         })
//       })

//       modal.show()
//     },

//     show: () => $('#addressModal').css('display', 'flex'),
//     hide: () => $('#addressModal').hide(),
//     remove: () => $('#addressModal').remove(),
//   }

//     validateAddress.getSuggestedAddress()
//     validateAddress.validateTax()
//     validateAddress.limitPostalCode()
// })
