const sendForm = () => {
  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/application/json',
      },
      body: JSON.stringify(body),
    });
  };
  document.body.addEventListener('submit', e => {
    e.preventDefault();
    if(e.target.tagName.toLowerCase() !== 'form') return;
    let isFilled = false;
    Array.from(e.target.querySelectorAll('.input_required')).forEach(item => {
      if(item.classList.contains('consent__checkbox') && !item.checked){
        item.parentNode.classList.add('consent__title_required');
        isFilled = false;
      } else if (item.classList.contains('consent__checkbox') && item.checked){
        item.parentNode.classList.remove('consent__title_required');
        isFilled = true;
      }
      else if(!item.value){
        item.style.borderColor = '#CB0037';
        if(item.nextElementSibling) {
          item.nextElementSibling.classList.remove('hidden');
        }
        isFilled = false;
      } else {
        item.style.borderColor = '';
        if(item.nextElementSibling) {
          item.nextElementSibling.classList.add('hidden');
        }
        isFilled = true;
      }
    });
    if(!isFilled) return;
    const formData = new FormData(e.target);
    let body = {};
    for(let value of formData.entries()){
      body[value[0]] = value[1];
    }
    postData(body)
      .then((response)=> {
        if(response.status !== 200){
          throw new Error('status not 200');
        }
        e.target.querySelectorAll('input').forEach(input => input.value = '');

      })
      .catch(error => {
        console.error(error);
      })
  });
};

export default sendForm;