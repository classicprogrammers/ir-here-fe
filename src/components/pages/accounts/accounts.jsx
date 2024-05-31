import React, { useState } from 'react';

const Account = () => {
    const [menu, setMenu] = useState("accounts");
    const [passwordVisible, setPasswordVisible] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const handleAccountClick = () => {
        setMenu("accounts");
    };

    const handleSecurityClick = () => {
        setMenu("Security");
    };

    const togglePasswordVisibility = (field) => {
        setPasswordVisible((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    return (
        <div className="container-xxl flex-grow-1">
            <div className="row fv-plugins-icon-container">
                <div className="col-md-12">
                    <ul className="nav nav-pills flex-column flex-md-row mb-4">
                        <li className="nav-item">
                            <button onClick={handleAccountClick} className={`nav-link ${menu === "accounts" ? "active" : ""}`}>
                                <i className="ti-xs ti ti-users me-1"></i> Account
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={handleSecurityClick} className={`nav-link ${menu === "Security" ? "active" : ""}`}>
                                <i className="ti-xs ti ti-lock me-1"></i> Security
                            </button>
                        </li>
                    </ul>
                    {menu === "accounts" && <AccountSettings />}
                    {menu === "Security" && <SecuritySettings togglePasswordVisibility={togglePasswordVisibility} passwordVisible={passwordVisible} />}
                </div>
            </div>
        </div>
    );
};

const AccountSettings = () => {
    return (
        <div id='hm_account'>
            {/* Account settings component */}

            <div className="card mb-4">
                <div className="card-body">
                    <form id="formAccountSettings" className="fv-plugins-bootstrap5 fv-plugins-framework" >
                        <div className="row">

                            <div className="mb-3 col-md-6 fv-plugins-icon-container">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input className="form-control" type="text" id="firstName" name="firstName" placeholder='John' />
                                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>

                            <div className="mb-3 col-md-6 fv-plugins-icon-container">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input className="form-control" type="text" name="lastName" id="lastName" placeholder='Doe' />
                                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                            </div>

                            <div className="mb-3 col-md-6">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <input className="form-control" type="text" id="email" name="email" placeholder="john.doe@example.com" />
                            </div>

                            <div className="mb-3 col-md-6">
                                <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                <div className="input-group input-group-merge">
                                    <input type="text" id="phoneNumber" name="phoneNumber" className="form-control" placeholder="202 555 0111" />
                                </div>
                            </div>

                        </div>
                        <div className="mt-2">
                            <button type="submit" className="btn btn-primary me-2 waves-effect waves-light">Save changes</button>
                            <button type="reset" className="btn btn-label-secondary waves-effect">Cancel</button>
                        </div>

                        <input type="hidden" /></form>

                </div>
                {/* <!-- /Account --> */}
            </div>

            <div className="card">

                <h5 className="card-header">Delete Account</h5>

                <div className="card-body">

                    <div className="mb-3 col-12">
                        <div className="alert alert-warning">
                            <h5 className="alert-heading mb-1">Are you sure you want to delete your account?</h5>
                            <p className="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                        </div>
                    </div>

                    <form id="formAccountDeactivation" className="fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="checkbox" name="accountActivation" id="accountActivation" />
                            <label className="form-check-label" htmlFor="accountActivation">I confirm my account deactivation</label>
                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
                        <button type="submit" className="btn btn-danger deactivate-account waves-effect waves-light" disabled>Deactivate Account</button>
                        <input type="hidden" />
                    </form>

                </div>
            </div>

        </div>
    );
};

const SecuritySettings = ({ togglePasswordVisibility, passwordVisible }) => {
    return (
        <div id="hm_security">
            {/* Security settings component */}
            <div className="row">
                <div className="col-md-12">
                    {/* <!-- Change Password --> */}
                    <div className="card mb-4">

                        <h5 className="card-header">Change Password</h5>

                        <div className="card-body">

                            <form id="formAccountSettings" className="fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">

                                <div className="row">
                                    <div className="mb-3 col-md-6 form-password-toggle fv-plugins-icon-container">
                                        <label className="form-label" htmlFor="currentPassword">Current Password</label>
                                        <div className="input-group input-group-merge has-validation">
                                            <input className="form-control" type={passwordVisible.currentPassword ? "text" : "password"} name="currentPassword" id="currentPassword" placeholder="············" />
                                            <span className="input-group-text cursor-pointer" onClick={() => togglePasswordVisibility("currentPassword")}>
                                                <i className={`ti ${passwordVisible.currentPassword ? 'ti-eye' : 'ti-eye-off'}`}></i>
                                            </span>
                                        </div>
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col-md-6 form-password-toggle fv-plugins-icon-container">
                                        <label className="form-label" htmlFor="newPassword">New Password</label>
                                        <div className="input-group input-group-merge has-validation">
                                            <input className="form-control" type={passwordVisible.newPassword ? "text" : "password"} id="newPassword" name="newPassword" placeholder="············" />
                                            <span className="input-group-text cursor-pointer" onClick={() => togglePasswordVisibility("newPassword")}>
                                                <i className={`ti ${passwordVisible.newPassword ? 'ti-eye' : 'ti-eye-off'}`}></i>
                                            </span>
                                        </div>
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                    </div>

                                    <div className="mb-3 col-md-6 form-password-toggle fv-plugins-icon-container">
                                        <label className="form-label" htmlFor="confirmPassword">Confirm New Password</label>
                                        <div className="input-group input-group-merge has-validation">
                                            <input className="form-control" type={passwordVisible.confirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" placeholder="············" />
                                            <span className="input-group-text cursor-pointer" onClick={() => togglePasswordVisibility("confirmPassword")}>
                                                <i className={`ti ${passwordVisible.confirmPassword ? 'ti-eye' : 'ti-eye-off'}`}></i>
                                            </span>
                                        </div>
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                    </div>

                                    <div className="col-12 mb-4">
                                        <h6>Password Requirements:</h6>
                                        <ul className="ps-3 mb-0">
                                            <li className="mb-1">Minimum 8 characters long - the more, the better</li>
                                            <li className="mb-1">At least one lowercase character</li>
                                            <li>At least one number, symbol, or whitespace character</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <button type="submit" className="btn btn-primary me-2 waves-effect waves-light">Save changes</button>
                                        <button type="reset" className="btn btn-label-secondary waves-effect">Cancel</button>
                                    </div>

                                </div>
                                <input type="hidden" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;







