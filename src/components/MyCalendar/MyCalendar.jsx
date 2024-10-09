import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './MyCalendar.css';
import { CalData } from "../../Data/Data";

// Localizer for calendar
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  // Set initial events from CalData
  useEffect(() => {
    const formattedEvents = CalData.map(event => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end)
    }));
    setEvents(formattedEvents);
  }, []);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventForm, setShowEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  // To handle new event creation
  const handleSelect = ({ start, end }) => {
    setShowEventForm(true); // Show the modal for adding event
    setNewEvent({ ...newEvent, start, end });
  };

  // Save the new event
  const handleSaveEvent = () => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setShowEventForm(false);
    setNewEvent({ title: "", start: "", end: "" }); // Reset form
  };

  // Handle event click to show details
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  // Handle deletion with confirmation
  const handleDeleteEvent = (eventToDelete) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter(event => event !== eventToDelete));
      setSelectedEvent(null); // Close the modal
    }
  };

  // Close modals
  const closeEventFormModal = () => {
    setShowEventForm(false);
  };

  const closeDetailsModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        className="MyCal"
        onSelectEvent={handleEventClick} // Click to show event details
        onSelectSlot={handleSelect} // Click on empty space to add an event
      />

      {/* Modal for event details */}
      {selectedEvent && (
        <div className="modal">
          <div className="modal-content">
            <h3>Event Details</h3>
            <p><strong>Title:</strong> {selectedEvent.title}</p>
            <p><strong>Start:</strong> {selectedEvent.start.toLocaleString()}</p>
            <p><strong>End:</strong> {selectedEvent.end.toLocaleString()}</p>
            <button onClick={() => handleDeleteEvent(selectedEvent)}>Delete Event</button>
            <button onClick={closeDetailsModal}>Close</button>
          </div>
        </div>
      )}

      {/* Modal for adding new event */}
      {showEventForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Event</h3>
            <label>Title:</label>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <label>Start Date:</label>
            <input
              type="datetime-local"
              value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
              onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
            />
            <label>End Date:</label>
            <input
              type="datetime-local"
              value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
              onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
            />
            <button onClick={handleSaveEvent}>Save Event</button>
            <button onClick={closeEventFormModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
