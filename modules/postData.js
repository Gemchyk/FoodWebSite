

const PostData = () => {

    const userData = document.querySelector('#myForm');

    const postData = async (url, data) => {
        console.log(url);
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };


    function sendMessage() {
        $.ajax({
            type: "POST",
            url: "http://localhost:5000/message",
            success: callbackFunc("sudasuda")
        });
    }

    function callbackFunc(response) {
        // do something with the response
        console.log(response);
    }


    function sendData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const object = {};

            formData.forEach((value, key) => {
                object[key] = value;
            });

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            request.send(json);

            request.addEventListener('load', () => {
                if(request.status === 200){
                    console.log('Bomba');
                    sendMessage();
                }
            });
        });
    }


    sendData(userData);
}

export default PostData;