document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');
    const updateList = document.getElementById('updateList');
    const reminderList = document.getElementById('reminderList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  

        const childName = document.getElementById('childName').value.trim();
        const dob = document.getElementById('dob').value;
        const vaccDate = document.getElementById('vaccDate').value;
        const vaccType = document.getElementById('vaccType').value;

        if (!childName || !dob || !vaccDate || !vaccType) {
            alert('Please fill out all fields.');
            return;
        }

        const updateMessage = `Appointment booked for ${childName} on ${vaccDate} for ${vaccType}.`;
        const reminderMessage = `Reminder: ${vaccType} vaccination for ${childName} on ${vaccDate}.`;

        const updateItem = document.createElement('li');
        updateItem.innerHTML = `<span>${updateMessage}</span><span class="date">${new Date().toLocaleString()}</span>`;
        updateList.appendChild(updateItem);

        const reminderItem = document.createElement('li');
        reminderItem.innerHTML = `<span>${reminderMessage}</span><span class="date">${new Date().toLocaleString()}</span>`;
        reminderList.appendChild(reminderItem);

        form.reset();
    });
});
