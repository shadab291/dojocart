import React, { useState } from 'react';

const Settings = () => {
  const [accountSettings, setAccountSettings] = useState({
    username: '',
    email: '',
  });
  const [notificationPreferences, setNotificationPreferences] = useState({
    emailNotifications: 'enabled',
    smsNotifications: 'enabled',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    setAccountSettings(data);
    setShowPopup(true);
    console.log('Account Settings:', data);
  };

  const handleNotificationSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    setNotificationPreferences(data);
    setShowPopup(true);
    console.log('Notification Preferences:', data);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center mb-8">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl mb-2">Account Settings</h2>
          <form onSubmit={handleAccountSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1 font-semibold">Username</label>
              <input type="text" id="username" name="username" className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
              <input type="email" id="email" name="email" className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Save</button>
          </form>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl mb-2">Notification Preferences</h2>
          <form onSubmit={handleNotificationSubmit}>
            <div className="mb-4">
              <label htmlFor="emailNotifications" className="block mb-1 font-semibold">Email Notifications</label>
              <select id="emailNotifications" name="emailNotifications" className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="smsNotifications" className="block mb-1 font-semibold">SMS Notifications</label>
              <select id="smsNotifications" name="smsNotifications" className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
            <button type="submit" className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Save</button>
          </form>
        </div>
      </div>

      {/* Display the saved settings */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl mb-4">Saved Settings</h2>
            <div>
              <h3 className="text-xl">Account Settings</h3>
              <p>Username: {accountSettings.username}</p>
              <p>Email: {accountSettings.email}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl">Notification Preferences</h3>
              <p>Email Notifications: {notificationPreferences.emailNotifications}</p>
              <p>SMS Notifications: {notificationPreferences.smsNotifications}</p>
            </div>
            <button onClick={() => setShowPopup(false)} className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
