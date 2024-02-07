const loader = `<div class="w-full flex justify-center" id="loadingAnimation">
<div class="loader"></div>
</div>`
const chatBox = document.getElementById('chatBox');
const inputElement = document.querySelector('#messageInput');



inputElement.focus();
inputElement.onkeyup = function (e) {
    if (e.key === 'Enter') {  // enter, return
        document.querySelector('#message-submit').click();
    }
};

document.querySelector('#message-submit').onclick = function (e) {
    // Prevent default form submission behavior
    e.preventDefault();
    // Check if the input value is valid
    if (inputElement.value.length < 1) {
        alert("Invalid input");
    } else {
        const message = inputElement.value;
        inputElement.value = "";
        chatBox.innerHTML += `<div class="msgBox p-2 border-2 rounded-md shadow-md ">
        <p id="role" class="font-bold">user</p>
        <p id="message">${message}</p>
    </div>`
        chatBox.innerHTML += loader;
        chatBox.scrollTop = chatBox.scrollHeight ;
        const url = window.location.origin;
        // Get the CSRF token from the cookie
        const csrftoken = getCookie('csrftoken');
        // Fetch request with message and CSRF token included
        fetch(url + '/gemini/', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                'X-CSRFToken': csrftoken // Include CSRF token in the headers
            },
            body: message
        })
            .then(response => {
                // Check if the response status is OK (200)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Process the response if needed
                return response.json(); // Parse and return the JSON response
            })
            .then(data => {
                // Process the JSON response data
                // console.log('Response:', data.message);
                document.getElementById('loadingAnimation').remove();
                chatBox.innerHTML += `
                <div class="msgBox p-2 rounded-md bg-[#deeeee] shadow-md">
            <p id="role" class="font-bold">Gemini AI</p>
            <p id="message">${data.message}</p>
        </div>`;
            

            })
            .catch(error => {
                // Handle any errors that occurred during the fetch
                console.error('Error:', error);
            });
    }
}

// Function to extract CSRF token from cookie
function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}
