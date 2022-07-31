ajaxForm();

function ajaxForm() {
    const form = document.querySelector('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    form.addEventListener('submit' , (e) => {
        e.preventDefault();
        console.log(form);
        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

        const request = new XMLHttpRequest();
        request.open('POST', 'send-order.php');

        request.setRequestHeader('Content-type', 'application/json');
        const formData = new FormData();

        const object = {};
        formData.forEach(function(value, key) {
            object[key] = value;
        });

        const json = JSON.stringify(object);

        request.send(json);

        request.addEventListener('load', () => {
            if (request.status === 200) {
                showSuccessMessage(message.success);
                form.reset();
                statusMessage.remove();
            } else {
                showSuccessMessage(message.failure);
            }
        });
    });
}

function showSuccessMessage(message) {
    const orderFormBlock = document.querySelector('.form-wrapper');

    orderFormBlock.classList.add('none');

    const successMessage = document.createElement('div');
    successMessage.setAttribute('id', 'order-form');
    successMessage.innerHTML = `
        <h5 class="card-title">${message}</h4>
    `;
    console.log(successMessage);
    document.querySelector('#order-form').append(successMessage);
    setTimeout(() => {
        successMessage.remove();
        orderFormBlock.classList.remove('none');
    }, 4000);
}
