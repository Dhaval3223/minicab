import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileimg from '../image/dog1.png';
import { useQuery } from 'react-query';
import axios from 'axios';
import { add_user_document_url, baseUrl, get_document_type_url, get_register_terms_data_url, get_user_documents_url, ImagebaseUrl, profile_url } from '../utils/Url';
import { getDataWithToken, getmethodDataWithToken } from '../utils/Api';
import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { toastError, toastInfo, toastSuccess, toastWarn } from '../utils/Notifycustom';
import { formSchemaSignup } from '../utils/formValidation';
import { countryCodes } from '../utils/countryCodes';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Profile() {
  const [loading, setLoading] = useState(false); // Loading state
  const profileUrl = `${baseUrl}${profile_url}`
  const documentTypeUrl = `${baseUrl}${get_document_type_url}`
  const userdocumentUrl = `${baseUrl}${get_user_documents_url}`
  const terms_condition_url = `${baseUrl}${get_register_terms_data_url}`
  const token = localStorage.getItem('token')
  const postcodeRegex = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/i;
  // const postcodeRegex = /^([A-Za-z]{4} \d{3})(, [A-Za-z]{4} \d{3})*$/;
  const emailRegex = /^[^\d\s@][^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { data, isLoading: isLodingProfile, error: profileError, refetch: refetchProfileData } = useQuery("profileDataFetch", () => getDataWithToken(profileUrl, token), {
    enabled: !!token,  // Only fetch if token exists
  });
  const { data: DocumentType, isLoading: isLodingDocumenttype, error: documentTypeError } = useQuery("documentTypeDataFetch", () => getmethodDataWithToken(documentTypeUrl, token), {
    enabled: !!token,  // Only fetch if token exists
  });
  const { data: DocumentData, isLoading: isLodingDocumentData, error: DocumentDataError, refetch: refetchDocumentData } = useQuery("documentDataFetch", () => getmethodDataWithToken(userdocumentUrl, token), {
    enabled: !!token,  // Only fetch if token exists
  });
  const { data: termsConditions, isLoading, error } = useQuery("termsAndconditions", () => getmethodDataWithToken(terms_condition_url, token), {
    enabled: !!token,  // Only fetch if token exists
  });

  console.log(data, termsConditions, "profileData");

  const merchantDocs = DocumentData?.data?.data.filter(item => item.user_type === 'merchant') || []
  const vendorDocs = DocumentData?.data?.data.filter(item => item.user_type === 'vendor') || []
  // console.log(merchantDocs, "DocumentData", vendorDocs);

  // State to manage form fields
  const [profileData, setProfileData] = useState({
    f_name: '',
    l_name: '',
    company_name: '',
    email: '',
    cc_email: '',
    billing_email: '',
    mobile: '',
    phone: '',
    billing_address_1: '',
    billing_address_2: '',
    billing_address_3: '',
    billing_city: '',
    billing_postcode: '',
    bank_name: '',
    account_name: '',
    account_number: '',
    sort_code: '',
    billing_cycle: '',
    password: '',
    confirm_password: '',
  });

  // State to manage fleet options
  const [fleet, setFleet] = useState({
    Sedan: 0,
    Estate: 0,
    "Executive Car": 0,
    "People Carrier": 0,
    Saloon: 0,
    "8 Seater": 0,
    Coach: 0,
    "Executive People Carrier": 0,
    Minivan: 0,
    Minibus: 0,
    SUV: 0,
    "Sports Car": 0,
    "Muscle Car": 0,
    "Executive Bus": 0,
    "Any Suitable Vehicle": 0,
  });
  const [seePassword, setSeePassword] = useState(false)
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false)
  // API call effect: Update fleet state based on vendor_fleet from the API
  useEffect(() => {
    if (data?.data?.data?.vendor_fleet) {
      const selectedFleet = data.data.data.vendor_fleet.split('|');
      // console.log("Selected Fleet from API:", selectedFleet);

      setFleet((prevFleet) => {
        const updatedFleet = { ...prevFleet };

        // Update state based on the fleet types present in the API data
        Object.keys(updatedFleet).forEach((key) => {
          updatedFleet[key] = selectedFleet.includes(key) ? 1 : 0;
        });

        // console.log("Updated Fleet State:", updatedFleet);
        return updatedFleet;
      });
    }
  }, [data]); // Only run the effect when `data` changes


  // console.log('====================================');
  // console.log(JSON.stringify(fleet, null, 2)); // Pretty-print the object
  // console.log('====================================');


  // State to manage terms checkboxes
  const [terms, setTerms] = useState({
    merchantTerms: 0,
    vendorTerms: 0,
    auctionTerms: 0,
    jobTerms: 0,
  });
  const [postcode, setPostcode] = useState('');
  const [postcodeList, setPostcodeList] = useState([]);



  // UseEffect to populate data when fetched
  useEffect(() => {
    if (data?.data) {
      const fetchedData = data?.data?.data;

      const fetchedPostcode = fetchedData.vendor_familiar_postcode?.split(',');

      if (fetchedPostcode) {
        setPostcodeList(fetchedPostcode); // Use callback form for state update
      }


      // Set profile data fields
      setProfileData({
        f_name: fetchedData.f_name || '',
        l_name: fetchedData.l_name || '',
        company_name: fetchedData.company_name || '',
        email: fetchedData.email || '',
        cc_email: fetchedData.cc_email || '',
        billing_email: fetchedData.billing_email || '',
        mobile: fetchedData.mobile || '',
        mobileCountryCode: fetchedData.mobile_code || '',
        phone: fetchedData.phone || '',
        phoneCode: fetchedData.phone_code || '',
        billing_address_1: fetchedData.billing_address_1 || '',
        billing_address_2: fetchedData.billing_address_2 || '',
        billing_address_3: fetchedData.billing_address_3 || '',
        billing_city: fetchedData.billing_city || '',
        billing_postcode: fetchedData.billing_postcode || '',
        bank_name: fetchedData.bank_name || '',
        account_name: fetchedData.account_name || '',
        account_number: fetchedData.account_number || '',
        sort_code: fetchedData.sort_code || '',
        billing_cycle: fetchedData.vendor_billing_cycle || '',
      });

      // Handling vendor fleet
      const vendorFleetString = fetchedData.vendor_fleet || "";
      const vehicleTypes = vendorFleetString.split("|").map(type => type.trim());

      // Step 2: Create an object with each vehicle type assigned a value of 1
      const splitdat = vehicleTypes.reduce((acc, type) => {
        acc[type] = 1; // Set the value to 1 for each vehicle type
        return acc;
      }, {});

      // console.log(splitdat, "initialFleet");

      // Set terms and conditions if they exist in the fetched data
      setTerms({
        merchantTerms: fetchedData.m_agreement_acceptance || 0,
        vendorTerms: fetchedData.v_agreement_acceptance || 0,
        auctionTerms: fetchedData.a_agreement_acceptance || 0,
        jobTerms: fetchedData.jobTerms || 0,
      });
    }
  }, [data]); // Add postcodeList to dependencies to ensure updates are captured

  const [formErrors, setFormErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    console.log(name, value, "name value input field");

    if (['mobile', 'phone'].includes(name)) {
      // Only allow digits and enforce a maximum of 12 characters
      if (/^\d{0,12}$/.test(value)) {
        updatedValue = value;
      } else {
        return; // Exit if validation fails
      }
    }

    setProfileData({ ...profileData, [name]: updatedValue });

    // Real-time validation of the specific field using formSchemaSignup
    const fieldValidation = formSchemaSignup.pick({ [name]: true }).safeParse({ [name]: updatedValue });
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldValidation.success ? null : fieldValidation.error.flatten().fieldErrors[name]?.[0]
    }));
  };



  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFleet((prevFleet) => ({
      ...prevFleet,
      [name]: checked ? 1 : 0, // Set to 1 for checked, 0 for unchecked
    }));
  };
  const handleTermsChange = (e) => {
    const { name, checked } = e.target;
    setTerms((prevTerms) => ({ ...prevTerms, [name]: checked ? 1 : 0, }));
  };



  const handleAddPostcode = () => {

    const formattedPostcode = postcode.trim().toUpperCase();

    if (!formattedPostcode) {
      toastInfo('Please enter a postcode.', 'error');
      return;
    }
    if (postcodeList.some((code) => code.toUpperCase() === formattedPostcode)) {
      toastInfo('Postcode already added.', 'error');
      return;
    }
    if (!postcodeRegex.test(formattedPostcode)) {
      toastInfo('Invalid UK postcode. Please enter a valid one.', 'error');
      return;
    }


    setPostcodeList([...postcodeList, formattedPostcode]);
    setPostcode(''); // Clear input field after adding
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const [showMerchantModal, setShowMerchantModal] = useState(false);
  const [showVendorModal, setShowVendorModal] = useState(false);

  // Merchant documents state
  const [merchantFile, setMerchantFile] = useState(null);
  const [merchantExpiry, setMerchantExpiry] = useState('');
  const [merchantDocType, setMerchantDocType] = useState('');

  // Vendor documents state

  const [vendorFile, setVendorFile] = useState(null);
  const [vendorExpiry, setVendorExpiry] = useState('');
  const [vendorDocType, setVendorDocType] = useState('');

  // Modal Handlers
  const handleMerchantModalOpen = () => setShowMerchantModal(true);
  const handleMerchantModalClose = () => setShowMerchantModal(false);
  const handleVendorModalOpen = () => setShowVendorModal(true);
  const handleVendorModalClose = () => setShowVendorModal(false);

  // File input change handlers
  const handleMerchantFileChange = (e) => {
    setMerchantFile(e.target.files[0]);
  };

  const handleVendorFileChange = (e) => {
    setVendorFile(e.target.files[0]);
  };

  // Function to add merchant document
  const handleMerchantSave = async () => {
    try {
      const documentData = new FormData();
      documentData.append("document_type_id", merchantDocType)
      documentData.append("file", merchantFile)
      documentData.append("expiry_date", getFormattedDate(merchantExpiry))
      documentData.append("user_type", "merchant")




      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`, // Uncomment if authorization is needed
        }
      };

      // Make the POST request
      const res = await axios.post(`${baseUrl}${add_user_document_url}`, documentData, config);
      if (res.status === 201) {
        toastSuccess(res?.data?.message)
        // Store token and reset form state
        setMerchantDocType('')
        setMerchantExpiry('')
        setMerchantFile([])
        refetchDocumentData()
        handleMerchantModalClose();
      }

    } catch (error) {
      const errorMessage = error?.response?.data?.message
        ? Object.values(error.response.data.message)[0]?.[0]
        : "An error occurred. Please try again.";


      toastError(errorMessage);
      console.log(error);

    } finally {
      setLoading(false); // Stop loading
    }

  };

  // Function to add vendor document
  const handleVendorSave = async () => {

    try {
      setLoading(true); // Start loading
      const documentData = new FormData();
      documentData.append("document_type_id", vendorDocType)
      documentData.append("file", vendorFile)
      documentData.append("expiry_date", getFormattedDate(vendorExpiry))
      documentData.append("user_type", "vendor")




      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`, // Uncomment if authorization is needed
        }
      };

      // Make the POST request
      const res = await axios.post(`${baseUrl}${add_user_document_url}`, documentData, config);
      if (res.status === 201) {
        toastSuccess(res?.data?.message)
        // Store token and reset form state
        setMerchantDocType('')
        setMerchantExpiry('')
        setMerchantFile([])
        refetchDocumentData()
        handleVendorModalClose();
      }

    } catch (error) {
      const errorMessage = error?.response?.data?.message
        ? Object.values(error.response.data.message)[0]?.[0]
        : "An error occurred. Please try again.";


      toastError(errorMessage);
      console.log(error);

    } finally {
      setLoading(false); // Stop loading
    }

  };
  const getFormattedDate = (date) => {
    if (!date) return '';
    const [year, month, day] = date.split("-");
    console.log(`${year}/${month}/${day}`, "vendory date");

    return `${year}/${month}/${day}`
  };
  // Function to update profile
  const updateProfile = async () => {
    try {
      setLoading(true);

      if (profileData.email && !emailRegex.test(profileData.email)) {
        toastInfo('Please enter a valid email address for the Email field.', 'error');
        return;
      }

      if (profileData.cc_email && !emailRegex.test(profileData.cc_email)) {
        toastInfo('Please enter a valid email address for the CC Email field.', 'error');
        return;
      }

      if (profileData.billing_email && !emailRegex.test(profileData.billing_email)) {
        toastInfo('Please enter a valid email address for the Billing Email field.', 'error');
        return;
      }


      if (profileData.billing_postcode && !postcodeRegex.test(profileData.billing_postcode)) {
        toastInfo('Invalid UK postcode. Please enter a valid one.', 'error');
        return;
      }

      if (profileData.password || profileData.confirm_password) {
        if (profileData.password !== profileData.confirm_password) {
          toastError("Passwords do not match. Please try again.");
          return;
        }
      }


      // Create FormData object and append profile data
      const formData = new FormData();
      formData.append('f_name', profileData.f_name || '');
      formData.append('l_name', profileData.l_name || '');
      formData.append('company_name', profileData.company_name || '');
      formData.append('email', profileData.email || '');
      formData.append('cc_email', profileData.cc_email || '');
      formData.append('billing_email', profileData.billing_email || '');
      formData.append('phone_code', profileData.phoneCode || '');
      formData.append('phone', profileData.phone || '');
      formData.append('mobile_code', profileData.mobileCountryCode || '');
      formData.append('mobile', profileData.mobile || '');
      formData.append('password', profileData.password || '');
      formData.append('confirm_password', profileData.confirm_password || '');
      formData.append('billing_address_1', profileData.billing_address_1 || '');
      formData.append('billing_address_2', profileData.billing_address_2 || '');
      formData.append('billing_address_3', profileData.billing_address_3 || '');
      formData.append('billing_city', profileData.billing_city || '');
      formData.append('billing_postcode', profileData.billing_postcode || '');
      formData.append('vendor_billing_cycle', profileData.billing_cycle || '');
      formData.append('bank_name', profileData.bank_name || '');
      formData.append('account_name', profileData.account_name || '');
      formData.append('account_number', profileData.account_number || '');
      formData.append('sort_code', profileData.sort_code || '');
      formData.append('vendor_familiar_postcode', postcodeList.join(', ') || '');

      // Append fleet data
      Object.keys(fleet).forEach((key) => {
        if (fleet[key] > 0) {
          formData.append('vendor_fleet[]', key);
        }
      });

      formData.append('m_agreement_acceptance', terms.merchantTerms || '');
      formData.append('v_agreement_acceptance', terms.vendorTerms || '');
      formData.append('a_agreement_acceptance', terms.auctionTerms || '');
      formData.append('job_agreement_acceptance', terms.jobTerms || '');

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          // Axios will automatically set 'Content-Type'
        },
        maxBodyLength: Infinity, // Optional
      };

      const res = await axios.post(`${baseUrl}/api/update-profile`, formData, config);

      if (res.status === 200) {
        toastSuccess("Profile updated successfully!");
        refetchProfileData(); // Refresh data if necessary
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message
        ? Object.values(error.response.data.message)[0]?.[0]
        : "An error occurred. Please try again.";
      toastError(errorMessage);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };





  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Check if data exists
  //     if (data && data.data && data.data.data) {
  //       const mobileCode = data.data.data.mobile_code; // Get mobile_code from API

  //       // Set the mobileCountryCode state based on the fetched mobileCode
  //       setProfileData((prevData) => ({
  //         ...prevData,
  //         mobileCountryCode: mobileCode || "", // Set to empty string if mobileCode is undefined
  //       }));
  //     }
  //   };

  //   fetchData();
  // }, [data]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Check if data exists
  //     if (data && data.data && data.data.data) {
  //       const mobileCode = data.data.data.mobile_code; // Get mobile_code from API
  //       const phoneCode = data.data.data.phone_code; // Get phone_code from API

  //       // Set the mobileCountryCode and phoneCode states based on fetched values
  //       setProfileData((prevData) => ({
  //         ...prevData,
  //         mobileCountryCode: mobileCode || "", // Set to empty string if mobileCode is undefined
  //         phoneCode: phoneCode || "", // Set to empty string if phoneCode is undefined
  //       }));
  //     }
  //   };

  //   fetchData();
  // }, [data]);

  // console.log(formErrors);

  return (
    <div className="container-fluid p-5 w-100 text-white" style={{ backgroundColor: '#1d1d1d' }}>
      <div className="row">
        {/* Profile Info */}
        <div className="col-12  mb-3">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-2 border border-warning rounded mb-4 mb-lg-0 p-0">
              <div>
                <div className="bg-warning" style={{ height: '60px', width: '100%' }}></div>
                <div className="position-relative d-flex justify-content-center px-2" style={{ bottom: '35px' }}>
                  <div>
                    <div className='d-flex justify-content-center'>
                      <img
                        src={profileimg}
                        alt="User"
                        className="border border-warning img-fluid"
                        style={{ width: '70px', height: '70px', borderRadius: '50px' }}
                      />

                    </div>
                    <h5
                      className="mt-3 text-center"
                      style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
                    >
                      {data?.data?.data?.name}
                    </h5>
                    <p className="text-center">{data?.data?.data?.company_name}</p>
                    <p className="text-center" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                      {data?.data?.data?.email}
                    </p>
                    <div className='d-flex justify-content-center'>
                      <button className="btn btn-warning my-2" onClick={handleLogout}>Logout</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Right Side: Form Fields */}
            <div className="col-12  col-lg-9 border border-warning rounded p-3">
              {/* Personal Info Section */}
              <h3 className='text-warning fs-5'>Personal Info</h3>
              <div className="row p-3">
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={profileData.f_name}
                    name="f_name"
                    onChange={handleInputChange}
                    disabled={!profileData?.data_verified_at}
                    placeholder="First Name *"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={profileData.l_name}
                    name="l_name"
                    onChange={handleInputChange}
                    disabled={!profileData?.data_verified_at}
                    placeholder="Last Name *"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={profileData.company_name}
                    name="company_name"
                    onChange={handleInputChange}
                    disabled={!profileData?.data_verified_at}
                    placeholder="Company Name *"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={profileData?.email}
                    name="email"
                    onChange={handleInputChange}
                    disabled={!profileData?.data_verified_at}
                    placeholder="Email *"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={profileData?.cc_email}
                    name="cc_email"
                    onChange={handleInputChange}
                    // disabled={!profileData?.data_verified_at}
                    placeholder="CC Email"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={profileData?.billing_email}
                    name="billing_email"
                    onChange={handleInputChange}
                    placeholder="Billing Email"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <div className="row g-2">
                    <div className="col-4">
                      <select
                        name="mobileCountryCode"
                        value={profileData.mobileCountryCode}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                        disabled={profileData.mobileCountryCode == null}
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.code} ({country.shortName})
                          </option>
                        ))}
                        {!countryCodes.some((country) => country.code === profileData.mobileCountryCode) && (
                          <option value={profileData.mobileCountryCode}>
                            {profileData.mobileCountryCode} (Other)
                          </option>
                        )}
                      </select>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control"
                        value={profileData?.mobile}
                        name="mobile"
                        onChange={handleInputChange}
                        readOnly={profileData?.mobile == null}
                        placeholder="Mobile Number *"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="row g-2">
                    <div className="col-4">
                      <select
                        name="phoneCode"
                        value={profileData.phoneCode}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                        disabled={profileData.phoneCode == null}
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.code} ({country.shortName})
                          </option>
                        ))}
                        {!countryCodes.some((country) => country.code === profileData.phoneCode) && (
                          <option value={profileData.phoneCode}>
                            {profileData.phoneCode} (Other)
                          </option>
                        )}
                      </select>
                    </div>
                    <div className="col-8">
                      <input
                        type="text"
                        className="form-control"
                        value={profileData?.phone}
                        name="phone"
                        onChange={handleInputChange}
                        readOnly={profileData?.phone == null}
                        placeholder="Alternate Mobile *"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>



        {/* Address Section */}
        <div className=" col-12 border border-warning my-2 p-3 rounded">
          <h3 className='text-warning fs-5'>Address</h3>
          <div className="row p-3">
            <div className="col-12 col-md-4 mb-3">
              <input type="text" className="form-control" value={profileData.billing_address_1} name="billing_address_1" onChange={handleInputChange} placeholder='Billing Address - Line 1 *' />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <input type="text" className="form-control" value={profileData.billing_address_2} name="billing_address_2" onChange={handleInputChange} placeholder='Billing Address - Line 2' />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <input type="text" className="form-control" value={profileData.billing_address_3} name="billing_address_3" onChange={handleInputChange} placeholder='Billing Address - Line 3' />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <input type="text" className="form-control" value={profileData.billing_city} name="billing_city" onChange={handleInputChange} placeholder='Billing City *' />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <input type="text" className="form-control" value={profileData.billing_postcode} name="billing_postcode" onChange={handleInputChange} placeholder='Billing Postcode* Eg. SW7 8DA' />
            </div>
          </div>
        </div>



        {/* ID Section */}
        {
          data?.data?.data?.data_verified_at !== null && (
            <div className="col-12 border border-warning my-2 p-3 rounded">
              <h3 className="text-warning fs-5">ID's</h3>
              <div className="row p-3">
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <div className="d-flex align-items-center">
                    <p className="text-warning">Merchant Id:</p>
                    <p className="mx-2">
                      {data?.data?.data?.merchant_user_id}
                      {data?.data?.data?.merchant_status === 1 ? (
                        <CiCircleCheck className="text-warning ms-1 fs-4" />
                      ) : (
                        <CiCircleRemove className="text-danger ms-1 fs-4" />
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <div className="d-flex align-items-center">
                    <p className="text-warning">Vendor Id:</p>
                    <p className="mx-2">
                      {data?.data?.data?.vendor_user_id}
                      {data?.data?.data?.vendor_status === 1 ? (
                        <CiCircleCheck className="text-warning ms-1 fs-4" />
                      ) : (
                        <CiCircleRemove className="text-danger ms-1 fs-4" />
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <div className="d-flex align-items-center">
                    <p className="text-warning">Auction Id:</p>
                    <p className="mx-2">
                      {data?.data?.data?.auction_user_id}
                      {data?.data?.data?.auction_status === 1 ? (
                        <CiCircleCheck className="text-warning ms-1 fs-4" />
                      ) : (
                        <CiCircleRemove className="text-danger ms-1 fs-4" />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {/* Documents Section */}
        <div className="  col-12 border border-warning my-2 rounded p-3">
          <h3 className="text-warning">Documents</h3>
          <div className="row p-3">
            <div className="col-12 col-md-6 mb-3 border-md-end border-secondary">
              <div className="d-flex justify-content-between">
                <p className="text-warning">Merchant Upload Documents:</p>
                <button className="btn btn-warning" onClick={handleMerchantModalOpen}>Add Document</button>
              </div>

              {/* Responsive Merchant Documents Table with Scroll */}
              <div className="table-responsive mt-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th className="text-warning">Type</th>
                      <th className="text-warning">Name</th>
                      <th className="text-warning">Expiry</th>
                      <th className="text-warning">Date Added</th>
                    </tr>
                  </thead>
                  <tbody>
                    {merchantDocs.map((doc, index) => {
                      const add = new Date(doc.created_at).toLocaleDateString();
                      return (
                        <tr key={index}>
                          <td className="text-truncate" style={{ maxWidth: '100px' }}>
                            {doc.type
                              .toLowerCase()
                              .replace(/\b\w/g, char => char.toUpperCase())}
                          </td>


                          <td className="text-truncate" style={{ maxWidth: '100px' }}>
                            <a href={`${ImagebaseUrl}${doc.file}`} className="nav-link">View</a>
                          </td>
                          <td className="text-truncate" style={{ maxWidth: '100px' }}>{doc.expiry_date}</td>
                          <td className="text-truncate" style={{ maxWidth: '100px' }}>{add}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-3">
              <div className="d-flex justify-content-between">
                <p className="text-warning">Vendor Upload Documents:</p>
                <button className="btn btn-warning" onClick={handleVendorModalOpen}>Add Document</button>
              </div>

              {/* Responsive Vendor Documents Table with Scroll */}
              <div className="table-responsive mt-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th className="text-warning">Type</th>
                      <th className="text-warning">Name</th>
                      <th className="text-warning">Expiry</th>
                      <th className="text-warning">Date Added</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendorDocs.map((doc, index) => {
                      const add = new Date(doc.created_at).toLocaleDateString();
                      return (
                        <tr key={index}>
                          <td className="text-truncate" style={{ maxWidth: '100px' }}>
                            {doc.type
                              .toLowerCase()
                              .replace(/\b\w/g, char => char.toUpperCase())}
                          </td>



                          <td className="text-truncate" style={{ maxWidth: '100px' }}>
                            <a href={`${ImagebaseUrl}${doc.file}`} className="nav-link">View</a>
                          </td>
                          <td className="text-truncate" style={{ maxWidth: '100px' }}>{doc.expiry_date}</td>
                          <td className="text-truncate" style={{ maxWidth: '100px' }}>{add}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Merchant Modal */}
          {showMerchantModal && (
            <div className="modal fade show" style={{ display: 'block' }} onClick={handleMerchantModalClose}>
              <div className="modal-dialog">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header bg-dark">
                    <h5>Add New Document</h5>
                    <button type="button" className="btn-close btn btn-light" onClick={handleMerchantModalClose}></button>
                  </div>
                  <div className="modal-body">
                    <label>Uploaded File</label>
                    <input type="file" className="form-control" accept=".jpg,.jpeg,.png,.pdf" onChange={handleMerchantFileChange} />
                    <label className="mt-3">Expiry Date</label>
                    <input type="date" className="form-control" value={merchantExpiry} onChange={(e) => setMerchantExpiry(e.target.value)} />
                    <label className="mt-3">Document Type</label>
                    <select className="form-control" value={merchantDocType} onChange={(e) => setMerchantDocType(e.target.value)}>
                      <option value="" selected disabled>--select--</option>
                      {DocumentType.data.data.map((item, index) => (
                        <option key={index} value={item?.id}>{item?.type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleMerchantModalClose} disabled={loading}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleMerchantSave} disabled={loading}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Vendor Modal */}
          {showVendorModal && (
            <div className="modal fade show" style={{ display: 'block' }} onClick={handleVendorModalClose}>
              <div className="modal-dialog">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header bg-dark">
                    <h5 className="modal-title">Add New Document</h5>
                    <button type="button" className="btn-close" onClick={handleVendorModalClose}></button>
                  </div>
                  <div className="modal-body">
                    <label>Uploaded File</label>
                    <input type="file" className="form-control" onChange={handleVendorFileChange} />
                    <label className="mt-3">Expiry Date</label>
                    <input type="date" className="form-control" value={vendorExpiry} onChange={(e) => setVendorExpiry(e.target.value)} />
                    <label className="mt-3">Document Type</label>
                    <select className="form-control" value={vendorDocType} onChange={(e) => setVendorDocType(e.target.value)}>
                      <option value="" selected disabled>--select--</option>
                      {DocumentType.data.data.map((item, index) => (
                        <option key={index} value={item?.id}>{item?.type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleVendorModalClose} disabled={loading}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleVendorSave} disabled={loading}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>


        {/* Bank Details Section */}
        <div className="col-12 border border-warning my-2 rounded p-3">
          <h3 className="text-warning fs-5">Bank Details</h3>
          <div className="row p-3">
            {/* Bank Name */}
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                value={profileData?.bank_name}
                name="bank_name"
                onChange={(e) => {
                  let value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
                  value = value.substring(0, 100); // Limit to 100 characters
                  handleInputChange({ target: { name: 'bank_name', value } });
                }}
                placeholder="Bank Name *"
              />
            </div>

            {/* Account Name */}
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                value={profileData?.account_name}
                name="account_name"
                onChange={(e) => {
                  let value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
                  value = value.substring(0, 100); // Limit to 100 characters
                  handleInputChange({ target: { name: 'account_name', value } });
                }}
                placeholder="Account Name *"
              />
            </div>

            {/* Account Number */}
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                value={profileData?.account_number}
                name="account_number"
                onChange={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numeric values
                  value = value.substring(0, 20); // Limit to 20 characters
                  handleInputChange({ target: { name: 'account_number', value } });
                }}
                placeholder="Account Number *"
              />
            </div>

            {/* Sort Code */}
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                value={profileData?.sort_code}
                name="sort_code"
                onChange={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numeric values
                  value = value.substring(0, 10); // Limit to 10 characters
                  handleInputChange({ target: { name: 'sort_code', value } });
                }}
                placeholder="Sort Code *"
              />
            </div>
          </div>
          <h5 className="text-warning">Vendor Billing Cycle</h5>
          <div className="row p-3">
            {/* Vendor Billing Cycle Dropdown */}
            <div className="col-md-3 mb-3">
              <select
                className="form-select"
                value={profileData?.billing_cycle}
                name="billing_cycle"
                onChange={handleInputChange}
              >
                <option disabled>Select</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="fortnightly">Fortnightly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
        </div>


        {/* Fleet Section */}
        <div className="col-12 border border-warning my-2 rounded p-3">
          <h3 className="text-warning fs-5">Fleet</h3>
          <div className="d-flex flex-wrap p-3">
            {Object.keys(fleet).map((fleetType, index) => (
              <div className="mx-2 mb-3" key={index}>
                <input
                  type="checkbox"
                  className="me-2"
                  name={fleetType}
                  checked={fleet[fleetType] === 1} // Set checkbox to checked if value is 1
                  onChange={handleCheckboxChange} // Update state when checkbox is clicked
                />
                <span>{fleetType}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Familiar Postcode Section */}
        <div className="  col-12 border border-warning my-2 rounded p-3">
          <h3 className='text-warning fs-5'>Familiar PostCode</h3>
          <div className="row p-3">
            {/* Input for entering a new postcode */}
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                id="familiarPostcode1 "
                placeholder='Postcode 1 *  Eg SW10 1AA'
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>

            {/* Button to add the postcode */}
            <div className="col-md-3 mb-3">
              <button className='btn btn-warning' onClick={handleAddPostcode}>+ Add Postcode</button>
            </div>

            {/* Show added postcodes */}
            {/* Display added postcodes */}
            <div className="col-md-8 mb-3">

              <div className="border rounded border-warning text-warning p-2">
                {postcodeList.length > 0 ? postcodeList.join(', ') : 'No postcodes added yet.'}
              </div>
            </div>
            {/* <p>PS Please enter the post code separated by "," E.g ABIO IIAB,BC22 OIEF, GH98 761K</p> */}
          </div>
        </div>
        {/* Password Section */}
        <div className=" col-12 border border-warning my-2 p-3 rounded">
          <h3 className='text-warning fs-5'>Change Password</h3>
          <div className="row p-3">
            <div className="col-12 col-md-4 mb-3 input_grp">
              <div className='d-flex'>
              <input type={seePassword ?"text":"password"} name="password" value={profileData.password} onChange={handleInputChange}  placeholder='Password' />
              <span
                onClick={() => setSeePassword(!seePassword)}
                className="usericon"
              >
                {seePassword ? <FaEye className="usericon" /> : <FaEyeSlash className="usericon" />}
              </span>

              </div>

            </div>
            <div className="col-12 col-md-4 mb-3 d-flex input_grp">
              <input type={seeConfirmPassword?"text":"password"} name="confirm_password" value={profileData.confirm_password} onChange={handleInputChange}  placeholder='Confirm Password' />
              <span
                onClick={() => setSeeConfirmPassword(!seeConfirmPassword)}
                className="usericon"
              >
                {seeConfirmPassword ? <FaEye className="usericon" /> : <FaEyeSlash className="usericon" />}
              </span>
            </div>
          </div>
        </div>
        {/* Checkbox fields for terms and conditions */}
        <div className=" col-12 mb-1 mt-4">
          <label>
            <input
              type="checkbox"
              name="merchantTerms"
              checked={terms.merchantTerms}
              disabled={terms.merchantTerms}
              onChange={handleTermsChange}

              required
            />{' '}
            <span className="text-light mx-1" style={{ fontSize: '12px' }}>
              Merchant
            </span>
            <a href="#/" className="text-decoration-underline" data-bs-toggle="modal" data-bs-target="#merchantModal">
              Terms and Conditions  <span className="text-danger">*</span>
            </a>


          </label>
        </div>
        <div className=" col-12 my-1">
          <label>
            <input
              type="checkbox"
              name="vendorTerms"
              checked={terms.vendorTerms}
              disabled={terms.vendorTerms}
              onChange={handleTermsChange}
              required />
            <span className='text-light mx-1' style={{ fontSize: '12px' }}>Vendor</span>
            <a href="#/" className='text-decoration-underline' data-bs-toggle="modal" data-bs-target="#vendorModal">
              Terms and Conditions<span className='text-danger'>*</span>
            </a>
          </label>


        </div>
        <div className=" col-12 my-1">
          <label>
            <input
              type="checkbox"
              name="auctionTerms"
              checked={terms.auctionTerms}
              disabled={terms.auctionTerms}

              onChange={handleTermsChange}
              required
            />
            <span className='text-light mx-1' style={{ fontSize: '12px' }}>  Auction</span>
            <a href="#/" className='text-decoration-underline' data-bs-toggle="modal" data-bs-target="#auctionModal">
              Terms and Conditions<span className='text-danger'>*</span>
            </a>

          </label>

        </div>
        <div className="  col-12 my-1">
          <label>
            <input type="checkbox" required
              name="jobTerms"
              checked={terms.jobTerms}
              disabled={terms.jobTerms}
              onChange={handleTermsChange}
            />
            <span className='text-light mx-1' style={{ fontSize: '12px' }}>  Job</span>
            <a href="#/" className='text-decoration-underline' data-bs-toggle="modal" data-bs-target="#jobModal">
              Terms and Conditions<span className='text-danger'>*</span>
            </a>

          </label>

        </div>
        {/* Submit Section */}
        <div className=" col-12 p-4">
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary me-2">Cancel</button>
            <button onClick={updateProfile} className="btn btn-warning" disabled={loading}>Save</button>
          </div>
        </div>
      </div>
      {/* modals */}
      {/* Merchant Terms Modal */}
      <div className="modal fade" id="merchantModal" tabIndex="-1" aria-labelledby="merchantModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title " id="merchantModalLabel">Merchant Terms and Conditions</h5>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div className="modal-body text-dark">
              <div
                dangerouslySetInnerHTML={{ __html: termsConditions?.data?.value?.merchant_terms }}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ok</button>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Terms Modal */}
      <div className="modal fade" id="vendorModal" tabIndex="-1" aria-labelledby="vendorModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="vendorModalLabel">Vendor Terms and Conditions</h5>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div className="modal-body text-dark">
              <div
                dangerouslySetInnerHTML={{ __html: termsConditions?.data?.value?.vendor_terms }}
              />

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ok</button>
            </div>
          </div>
        </div>
      </div>

      {/* Auction Terms Modal */}
      <div className="modal fade" id="auctionModal" tabIndex="-1" aria-labelledby="auctionModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="auctionModalLabel">Auction Terms and Conditions</h5>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div className="modal-body text-dark">
              <div
                dangerouslySetInnerHTML={{ __html: termsConditions?.data?.value?.auction_terms }}
              />

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ok</button>
            </div>
          </div>
        </div>
      </div>

      {/* Job Terms Modal */}
      <div className="modal fade" id="jobModal" tabIndex="-1" aria-labelledby="jobModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="jobModalLabel">Job Terms and Conditions</h5>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div className="modal-body text-dark" >
              <div
                dangerouslySetInnerHTML={{ __html: termsConditions?.data?.value?.job_terms }}
              />

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ok</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Profile;
