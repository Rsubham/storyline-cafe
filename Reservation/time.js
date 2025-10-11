(() => {
  const getLocalDateString = (date = new Date()) => {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().split("T")[0];
  };


  const dateInput = document.getElementById("Date");
  const timeInput = document.getElementById("Time");

  const setMinDate = () => {
    if (dateInput) dateInput.min = getLocalDateString();
  };

  const updateTimeLimits = () => {
    if (!dateInput || !timeInput) return;

    const selectedDate = new Date(dateInput.value);
    const now = new Date();

    const OPEN_TIME = "10:30";
    const CLOSE_TIME = "22:00";

    if (selectedDate.toDateString() === now.toDateString()) {
      const hh = now.getHours().toString().padStart(2, "0");
      const mm = now.getMinutes().toString().padStart(2, "0");
      const currentTime = `${hh}:${mm}`;
      timeInput.min = currentTime > OPEN_TIME ? currentTime : OPEN_TIME;
    } else {
      timeInput.min = OPEN_TIME;
    }

    timeInput.max = CLOSE_TIME;
  };

  setMinDate();
  updateTimeLimits();
  if (dateInput) dateInput.addEventListener("change", updateTimeLimits);
  setInterval(updateTimeLimits, 60 * 1000);


  const checkInInput = document.getElementById("CheckIn");
  const checkOutInput = document.getElementById("CheckOut");

  const setRoomMinDates = () => {
    if (checkInInput) checkInInput.min = getLocalDateString();
  };

  const handleCheckInChange = () => {
    if (!checkInInput || !checkOutInput || !checkInInput.value) return;

    const checkInDate = new Date(checkInInput.value);
    const nextDay = new Date(checkInDate);
    nextDay.setDate(checkInDate.getDate() + 1);

    const nextDayStr = getLocalDateString(nextDay);
    checkOutInput.min = nextDayStr;

    if (checkOutInput.value && new Date(checkOutInput.value) <= checkInDate) {
      checkOutInput.value = "";
    }
  };

  setRoomMinDates();
  if (checkInInput) checkInInput.addEventListener("change", handleCheckInChange);


  const eventDateInput = document.getElementById("EventDate");
  const eventTimeInput = document.getElementById("EventTime");

  const setEventMinDate = () => {
    if (eventDateInput) eventDateInput.min = getLocalDateString();
  };

  const updateEventTimeLimits = () => {
    if (!eventDateInput || !eventTimeInput) return;

    const selectedDate = new Date(eventDateInput.value);
    const now = new Date();

    const OPEN_TIME = "10:30";
    const CLOSE_TIME = "22:00";

    if (selectedDate.toDateString() === now.toDateString()) {
      const hh = now.getHours().toString().padStart(2, "0");
      const mm = now.getMinutes().toString().padStart(2, "0");
      const currentTime = `${hh}:${mm}`;
      eventTimeInput.min = currentTime > OPEN_TIME ? currentTime : OPEN_TIME;
    } else {
      eventTimeInput.min = OPEN_TIME;
    }

    eventTimeInput.max = CLOSE_TIME;
  };

  setEventMinDate();
  updateEventTimeLimits();
  if (eventDateInput) eventDateInput.addEventListener("change", updateEventTimeLimits);
  setInterval(updateEventTimeLimits, 60 * 1000);
})();
