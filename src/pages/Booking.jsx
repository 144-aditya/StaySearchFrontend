import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/booking.css';

function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const propertyId = searchParams.get('propertyId');
  const [step, setStep] = useState(1); // 1: Personal Details, 2: Booking Details, 3: Payment
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    checkInDate: '',
    propertyType: '',
    roomType: '',
    branchName: '',
    duration: '1',
    guests: '1',
    specialRequests: '',
    paymentMethod: 'online',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const [branches, setBranches] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);

  // Dummy data for branches & rooms
  useEffect(() => {
    if (formData.propertyType) {
      const dummyBranches = {
        'PG': ['Connaught Place, Delhi', 'South Extension, Delhi', 'Rajouri Garden, Delhi'],
        'Hostel': ['North Campus', 'South Campus', 'Dwarka'],
        'Lodge': ['Paharganj', 'Karol Bagh', 'Aerocity']
      };
      setBranches(dummyBranches[formData.propertyType] || []);
    }
  }, [formData.propertyType]);

  useEffect(() => {
    if (formData.propertyType) {
      const dummyRoomTypes = {
        'PG': ['Single Room', '2 Sharing', '3 Sharing', '4 Sharing'],
        'Hostel': ['Dormitory (6 Sharing)', 'Dormitory (8 Sharing)', 'Private Room'],
        'Lodge': ['Deluxe Room', 'Standard Room', 'Suite']
      };
      setRoomTypes(dummyRoomTypes[formData.propertyType] || []);
    }
  }, [formData.propertyType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'propertyType') {
      setFormData(prev => ({
        ...prev,
        branchName: '',
        roomType: ''
      }));
    }
  };

  const nextStep = () => {
    if (validateCurrentStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const validateCurrentStep = () => {
    switch(step) {
      case 1:
        if (!formData.name || !formData.phone || !formData.email || !formData.address) {
          alert('Please fill all personal details');
          return false;
        }
        if (!/^\d{10}$/.test(formData.phone)) {
          alert('Please enter a valid 10-digit phone number');
          return false;
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          alert('Please enter a valid email address');
          return false;
        }
        return true;

      case 2:
        if (!formData.checkInDate || !formData.propertyType || 
            !formData.roomType || !formData.branchName) {
          alert('Please fill all booking details');
          return false;
        }
        const checkInDate = new Date(formData.checkInDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (checkInDate < today) {
          alert('Check-in date cannot be in the past');
          return false;
        }
        return true;

      default:
        return true;
    }
  };

    const calculateTotal = () => {
          const basePrice = {
            'PG': { 'Single Room': 15000, '2 Sharing': 10000, '3 Sharing': 8000, '4 Sharing': 6000 },
            'Hostel': { 'Dormitory (6 Sharing)': 4000, 'Dormitory (8 Sharing)': 3500, 'Private Room': 12000 },
            'Lodge': { 'Deluxe Room': 2500, 'Standard Room': 1800, 'Suite': 3500 }
          };

          const pricePerMonth = basePrice[formData.propertyType]?.[formData.roomType] || 5000;
          const total = pricePerMonth * parseInt(formData.duration || 1);
          const gst = total * 0.18;

          return { basePrice: total, gst: gst, total: total + gst };
        };

        const handleSubmit = async (e) => {
        e.preventDefault();

        if (step === 3) {
          if (formData.paymentMethod === 'online') {
            if (!formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv) {
              alert('Please fill all payment details');
              return;
            }
            if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
              alert('Please enter a valid 16-digit card number');
              return;
            }
            if (!/^\d{3,4}$/.test(formData.cvv)) {
              alert('Please enter a valid CVV');
              return;
            }
          }

          const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            propertyType: formData.propertyType,
            roomType: formData.roomType,
            branch: formData.branchName,
            checkIn: formData.checkInDate,
            duration: formData.duration,
            amount: calculateTotal().total.toFixed(2),
            paymentMethod: formData.paymentMethod,
            transactionId: 'TXN' + Date.now(),
            paymentStatus: formData.paymentMethod === 'online' ? 'Paid' : 'Pending'
          };

          try {
            const response = await axios.post(
              "staysearch-fullstack-backend-production.up.railway.app/api/staysearch/payments",
              payload // send payload, not data
            );

            // Save userId and redirect
            const userId = response.data.userId;
            localStorage.setItem('userId', userId);
            navigate('/profile');

            alert('Booking & Payment Successful!\n' + JSON.stringify(response.data));

          } catch (err) { // ← fix: use same variable name here
            console.log("FULL ERROR:", err);
            console.log("ERROR DATA:", err.response?.data);
            alert('Booking failed! Check console for details.');
          }
        }
};
  // RENDER STEPS
  const renderStep1 = () => (
    <div className="booking-step">
      <h2>Personal Details</h2>
      <div className="form-group">
        <label>Full Name *</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
      </div>

      <div className="form-group">
        <label>Phone Number *</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="10-digit mobile number" pattern="[0-9]{10}" required />
      </div>

      <div className="form-group">
        <label>Email Address *</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
      </div>

      <div className="form-group">
        <label>Full Address *</label>
        <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter your complete address" rows="3" required />
      </div>

      <div className="step-buttons">
        <button type="button" className="btn-next" onClick={nextStep}>Next: Booking Details →</button>
      </div>
    </div>
  );

  const renderStep2 = () => {
    const priceDetails = calculateTotal();

    return (
      <div className="booking-step">
        <h2>Booking Details</h2>
        <div className="form-group">
          <label>Check-in Date *</label>
          <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} min={new Date().toISOString().split('T')[0]} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Property Type *</label>
            <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
              <option value="">Select Property Type</option>
              <option value="PG">PG</option>
              <option value="Hostel">Hostel</option>
              <option value="Lodge">Lodge</option>
            </select>
          </div>

          <div className="form-group">
            <label>Duration (Months) *</label>
            <select name="duration" value={formData.duration} onChange={handleChange} required>
              <option value="1">1 Month</option>
              <option value="2">2 Months</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Room Type *</label>
            <select name="roomType" value={formData.roomType} onChange={handleChange} required disabled={!formData.propertyType}>
              <option value="">Select Room Type</option>
              {roomTypes.map((type, index) => <option key={index} value={type}>{type}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label>Number of Guests *</label>
            <select name="guests" value={formData.guests} onChange={handleChange} required>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Select Branch *</label>
          <select name="branchName" value={formData.branchName} onChange={handleChange} required disabled={!formData.propertyType}>
            <option value="">Select Branch</option>
            {branches.map((branch, index) => <option key={index} value={branch}>{branch}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label>Special Requests (Optional)</label>
          <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} placeholder="Any special requirements or requests" rows="3" />
        </div>

        <div className="price-summary">
          <h3>Price Summary</h3>
          <div className="price-item"><span>Base Price ({formData.duration} months):</span><span>₹{priceDetails.basePrice.toFixed(2)}</span></div>
          <div className="price-item"><span>GST (18%):</span><span>₹{priceDetails.gst.toFixed(2)}</span></div>
          <div className="price-total"><span>Total Amount:</span><span>₹{priceDetails.total.toFixed(2)}</span></div>
        </div>

        <div className="step-buttons">
          <button type="button" className="btn-prev" onClick={prevStep}>← Previous</button>
          <button type="button" className="btn-next" onClick={nextStep}>Next: Payment →</button>
        </div>
      </div>
    );
  };

  const renderStep3 = () => {
    const priceDetails = calculateTotal();

    return (
      <div className="booking-step">
        <h2>Payment Details</h2>
        <div className="form-group">
          <label>Payment Method *</label>
          <div className="payment-methods">
            <label className="payment-method">
              <input type="radio" name="paymentMethod" value="online" checked={formData.paymentMethod === 'online'} onChange={handleChange} />
              <span>Online Payment</span>
            </label>
            <label className="payment-method">
              <input type="radio" name="paymentMethod" value="cash" checked={formData.paymentMethod === 'cash'} onChange={handleChange} />
              <span>Cash on Check-in</span>
            </label>
          </div>
        </div>

        {formData.paymentMethod === 'online' && (
          <div className="card-details">
            <div className="form-group">
              <label>Card Number *</label>
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" maxLength="19" />
            </div>
            <div className="form-group">
              <label>Cardholder Name *</label>
              <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} placeholder="Name on card" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date *</label>
                <input type="month" name="expiryDate" value={formData.expiryDate} onChange={handleChange} min={`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,'0')}`} />
              </div>
              <div className="form-group">
                <label>CVV *</label>
                <input type="password" name="cvv" value={formData.cvv} onChange={handleChange} maxLength="4" />
              </div>
            </div>
          </div>
        )}

        <div className="final-summary">
          <h3>Booking Summary</h3>
          <div className="summary-item"><span>Property Type:</span><span>{formData.propertyType}</span></div>
          <div className="summary-item"><span>Room Type:</span><span>{formData.roomType}</span></div>
          <div className="summary-item"><span>Branch:</span><span>{formData.branchName}</span></div>
          <div className="summary-item"><span>Check-in Date:</span><span>{formData.checkInDate}</span></div>
          <div className="summary-item"><span>Duration:</span><span>{formData.duration} months</span></div>
          <div className="summary-item"><span>Guests:</span><span>{formData.guests}</span></div>
          <div className="price-total"><span>Total to Pay:</span><span>₹{priceDetails.total.toFixed(2)}</span></div>
        </div>

        <div className="step-buttons">
          <button type="button" className="btn-prev" onClick={prevStep}>← Previous</button>
          <button type="submit" className="btn-submit">Confirm Booking & Pay ₹{priceDetails.total.toFixed(2)}</button>
        </div>
      </div>
    );
  };

  return (
    <div className="booking">
      <div className="booking-header">
        <h1>Book Your Stay</h1>
        <div className="step-indicator">
          <div className={`step ${step >= 1 ? 'active' : ''}`}><span>1</span><p>Personal Details</p></div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}><span>2</span><p>Booking Details</p></div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}><span>3</span><p>Payment</p></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </form>

      <div className="booking-note">
        <p><strong>Note:</strong> All fields marked with * are mandatory.</p>
        <p>Your booking will be confirmed after successful payment.</p>
      </div>
    </div>
  );
}

export default Booking;
