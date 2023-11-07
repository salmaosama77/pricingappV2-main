// import React, { useState } from 'react';
// import './CountryForm.css'; 

// const countryOptions = [
//   { value: 'afghanistan', label: 'Afghanistan' },
//   { value: 'aland-islands', label: 'Aland Islands' },
//   { value: 'albania', label: 'Albania' },
//   { value: 'algeria', label: 'Algeria' },
//   { value: 'andorra', label: 'Andorra' },
//   { value: 'angola', label: 'Angola' },
//   { value: 'anguilla', label: 'Anguilla' },
//   { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
//   { value: 'argentina', label: 'Argentina' },
//   { value: 'armenia', label: 'Armenia' },
//   { value: 'aruba', label: 'Aruba' },
//   { value: 'australia', label: 'Australia' },
//   { value: 'austria', label: 'Austria' },
//   { value: 'bahrain', label: 'Bahrain' },
//   { value: 'canada', label: 'Canada' },
//   { value: 'france', label: 'France' },
//   { value: 'germany', label: 'Germany' },
//   { value: 'kuwait', label: 'Kuwait' },
//   { value: 'nigeria', label: 'Nigeria' },
//   { value: 'oman', label: 'Oman' },
//   { value: 'philippines', label: 'Philippines' },
//   { value: 'qatar', label: 'Qatar' },
//   { value: 'saudi', label: 'Saudi Arabia' },
//   { value: 'singapore', label: 'Singapore' },
//   { value: 'turkey', label: 'Turkey' },
//   { value: 'uae', label: 'UAE' },
//   { value: 'unitedkingdom', label: 'United Kingdom' },
//   { value: 'unitedstates', label: 'United States' },
// ];


// function CountryForm() {
//   const [networks, setNetworks] = useState(['']);
//   const [formData, setFormData] = useState({
//     countryName: '',
//     ims: '',
//     technologies: [],
//   });

//   const handleNetworkChange = (index, value) => {
//     const updatedNetworks = [...networks];
//     updatedNetworks[index] = value;
//     setNetworks(updatedNetworks);
//   };

  // const handleAddNetwork = () => {
  //   setNetworks([...networks, '']);
  // };

  // const handleTechnologyChange = (technology) => {
  //   const updatedTechnologies = formData.technologies.includes(technology)
  //     ? formData.technologies.filter((tech) => tech !== technology)
  //     : [...formData.technologies, technology];
  //   setFormData({
  //     ...formData,
  //     technologies: updatedTechnologies,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form data:', formData);
  // };

//   return (
//     <div class="container">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="country" className="form-label">
//             Country
//           </label>
//           <select
//             id="country"
//             className="form-control"
//             value={formData.countryName}
//             onChange={(e) => setFormData({ ...formData, countryName: e.target.value })}
//           >
//             {countryOptions.map((country) => (
//               <option key={country.value} value={country.value}>
//                 {country.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label className="form-label">Networks</label>
//           {networks.map((network, index) => (
//             <div key={index} className="input-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={network}
//                 onChange={(e) => handleNetworkChange(index, e.target.value)}
//               />
//             </div>
//           ))}
//         </div>

//         <div className="form-group">
//           <label htmlFor="dataCost" className="form-label">
//             Data Cost
//           </label>
//           {networks.map((network, index) => (
//             <div key={index} className="input-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={network}
//                 onChange={(e) => handleNetworkChange(index, e.target.value)}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="form-group">
//           <label htmlFor="dataCost" className="form-label">
//             IMSI
//           </label>
//           {networks.map((network, index) => (
//             <div key={index} className="input-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={network}
//                 onChange={(e) => handleNetworkChange(index, e.target.value)}
//               />
//             </div>
//           ))}
//         </div>

        // <h2 className='h1'>Technologies</h2>
        // <div className="form-check">
        //   <input
        //     type="checkbox"
        //     className="form-check-input"
        //     id="2G"
        //     checked={formData.technologies.includes('2G')}
        //     onChange={() => handleTechnologyChange('2G')}
        //   />
        //   <label className="form-check-label" htmlFor="2G">
        //     2G
        //   </label>
        // </div>
        // <div className="form-check">
        //  <input
        //      type="checkbox"
        //      className="form-check-input"
        //      id="3G"
        //      checked={formData.technologies.includes('3G')}
        //      onChange={() => handleTechnologyChange('3G')}
        //    />
        //    <label className="form-check-label" htmlFor="3G">
        //      3G
        //    </label>
        //  </div>

        //  <div className="form-check">
        //  <input
        //      type="checkbox"
        //      className="form-check-input"
        //      id="LTE"
        //      checked={formData.technologies.includes('LTE')}
        //      onChange={() => handleTechnologyChange('LTE')}
        //    />
        //    <label className="form-check-label" htmlFor="LTE">
        //      LTE
        //    </label>
        //  </div>

        //  <div className="form-check">
        //  <input
        //      type="checkbox"
        //      className="form-check-input"
        //      id="5G"
        //      checked={formData.technologies.includes('5G')}
        //      onChange={() => handleTechnologyChange('5G')}
        //    />
        //    <label className="form-check-label" htmlFor="5G">
        //      5G
        //    </label>
        //  </div>

        //  <div className="form-check">
        //  <input
        //      type="checkbox"
        //      className="form-check-input"
        //      id="LTE-M"
        //      checked={formData.technologies.includes('LTE-M')}
        //      onChange={() => handleTechnologyChange('LTE-M')}
        //    />
        //    <label className="form-check-label" htmlFor="LTE-M">
        //    LTE-M
        //    </label>
        //  </div>

        //  <div className="form-check">
        //  <input
        //      type="checkbox"
        //      className="form-check-input"
        //      id="NB_IoT"
        //      checked={formData.technologies.includes('NB_IoT')}
        //      onChange={() => handleTechnologyChange('NB_IoT')}
        //    />
        //    <label className="form-check-label" htmlFor="NB_IoT">
        //    NB_IoT
        //    </label>
        //  </div>

        // <button
        //   className="btn btn-outline-secondary rounded-circle"
        //   type="button"
        //   onClick={handleAddNetwork}
        // >
        //   Add Network +
        // </button>
        
        // <button type="submit" className="btn btn-primary btn-lg">
        //   Submit
        // </button>
        
//       </form>
//     </div>
//   );
// }

// export default CountryForm;

import React, { useState } from 'react';
import './CountryForm.css'; 

const countryOptions = [
  { value: 'afghanistan', label: 'Afghanistan' },
  { value: 'aland-islands', label: 'Aland Islands' },
  { value: 'albania', label: 'Albania' },
  { value: 'algeria', label: 'Algeria' },
  { value: 'andorra', label: 'Andorra' },
  { value: 'angola', label: 'Angola' },
  { value: 'anguilla', label: 'Anguilla' },
  { value: 'antigua-and-barbuda', label: 'Antigua and Barbuda' },
  { value: 'argentina', label: 'Argentina' },
  { value: 'armenia', label: 'Armenia' },
  { value: 'aruba', label: 'Aruba' },
  { value: 'australia', label: 'Australia' },
  { value: 'austria', label: 'Austria' },
  { value: 'bahrain', label: 'Bahrain' },
  { value: 'canada', label: 'Canada' },
  { value: 'france', label: 'France' },
  { value: 'germany', label: 'Germany' },
  { value: 'kuwait', label: 'Kuwait' },
  { value: 'nigeria', label: 'Nigeria' },
  { value: 'oman', label: 'Oman' },
  { value: 'philippines', label: 'Philippines' },
  { value: 'qatar', label: 'Qatar' },
  { value: 'saudi', label: 'Saudi Arabia' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'turkey', label: 'Turkey' },
  { value: 'uae', label: 'UAE' },
  { value: 'unitedkingdom', label: 'United Kingdom' },
  { value: 'unitedstates', label: 'United States' },
];


function CountryForm() {
  const [networks, setNetworks] = useState(['']);
  const [dataCosts, setDataCosts] = useState(['']);
  const [imsi, setImsi] = useState(['']);
  const [formData, setFormData] = useState({
    countryName: '',
    technologies: [],
  });

  const handleNetworkChange = (index, value) => {
    const updatedNetworks = [...networks];
    updatedNetworks[index] = value;
    setNetworks(updatedNetworks);
  };

  const handleDataCostChange = (index, value) => {
    const updatedDataCosts = [...dataCosts];
    updatedDataCosts[index] = value;
    setDataCosts(updatedDataCosts);
  };

  const handleImsiChange = (index, value) => {
    const updatedImsi = [...imsi];
    updatedImsi[index] = value;
    setImsi(updatedImsi);
  };

  const handleAddNetwork = () => {
    setNetworks([...networks, '']);
    setDataCosts([...dataCosts, '']);
    setImsi([...imsi, '']);
  };

  const handleTechnologyChange = (technology) => {
    const updatedTechnologies = formData.technologies.includes(technology)
      ? formData.technologies.filter((tech) => tech !== technology)
      : [...formData.technologies, technology];
    setFormData({
      ...formData,
      technologies: updatedTechnologies,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select
            id="country"
            className="form-control"
            value={formData.countryName}
            onChange={(e) => setFormData({ ...formData, countryName: e.target.value })}
          >
            <option value="" disabled hidden>Select a country</option>
            {countryOptions.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Networks</label>
          {networks.map((network, index) => (
            <div key={index} className="input-group">
              <input
                type="text"
                className="form-control"
                value={network}
                onChange={(e) => handleNetworkChange(index, e.target.value)}
              />
            </div>
          ))}
        
          <button
            className="custom-plus-button"
            type="button"
            onClick={handleAddNetwork}
          >
            Add
          </button>

        </div>

        <div className="form-group">
          <label htmlFor="dataCost" className="form-label">
            Data Cost
          </label>
          {dataCosts.map((dataCost, index) => (
            <div key={index} className="input-group">
              <input
                type="text"
                className="form-control"
                value={dataCost}
                onChange={(e) => handleDataCostChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="form-group">
          <label htmlFor="imsi" className="form-label">
            IMSI
          </label>
          {imsi.map((imsiValue, index) => (
            <div key={index} className="input-group">
              <input
                type="number"
                className="form-control"
                value={imsiValue}
                onChange={(e) => handleImsiChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        
        <h2 className='h1'>Technologies</h2>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="2G"
            checked={formData.technologies.includes('2G')}
            onChange={() => handleTechnologyChange('2G')}
          />
          <label className="form-check-label" htmlFor="2G">
            2G
          </label>
        </div>

        <div className="form-check">
         <input
             type="checkbox"
             className="form-check-input"
             id="3G"
             checked={formData.technologies.includes('3G')}
             onChange={() => handleTechnologyChange('3G')}
           />
           <label className="form-check-label" htmlFor="3G">
             3G
           </label>
         </div>

         <div className="form-check">
         <input
             type="checkbox"
             className="form-check-input"
             id="LTE"
             checked={formData.technologies.includes('LTE')}
             onChange={() => handleTechnologyChange('LTE')}
           />
           <label className="form-check-label" htmlFor="LTE">
             LTE
           </label>
         </div>

         <div className="form-check">
         <input
             type="checkbox"
             className="form-check-input"
             id="5G"
             checked={formData.technologies.includes('5G')}
             onChange={() => handleTechnologyChange('5G')}
           />
           <label className="form-check-label" htmlFor="5G">
             5G
           </label>
         </div>

         <div className="form-check">
         <input
             type="checkbox"
             className="form-check-input"
             id="LTE-M"
             checked={formData.technologies.includes('LTE-M')}
             onChange={() => handleTechnologyChange('LTE-M')}
           />
           <label className="form-check-label" htmlFor="LTE-M">
           LTE-M
           </label>
         </div>

         <div className="form-check">
         <input
             type="checkbox"
             className="form-check-input"
             id="NB_IoT"
             checked={formData.technologies.includes('NB_IoT')}
             onChange={() => handleTechnologyChange('NB_IoT')}
           />
           <label className="form-check-label" htmlFor="NB_IoT">
           NB_IoT
           </label>
         </div>
        
        <button type="submit" className="btn btn-primary btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CountryForm;
