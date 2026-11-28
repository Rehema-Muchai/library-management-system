import { useState } from 'react';

export default function SpaceBookingPage() {
  const [form, setForm] = useState({
    spaceId: '',
    date: '',
    startTime: '',
    endTime: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Request:', form);
    setSubmitted(true);
    // In Week 5, you will POST this to your API here
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-green-100 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-green-800">Booking Request Sent!</h2>
        <p className="mt-2">We will confirm your reservation shortly.</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 text-blue-600 underline">
          Book another space
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Book a Study Space</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="spaceId"
          value={form.spaceId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select a space</option>
          <option value="1">Room A (4 seats)</option>
          <option value="2">Room B (8 seats)</option>
          <option value="3">Quiet Zone (2 seats)</option>
        </select>

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <div className="flex gap-4">
          <input
            name="startTime"
            type="time"
            value={form.startTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="endTime"
            type="time"
            value={form.endTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Request Booking
        </button>
      </form>
    </div>
  );
}