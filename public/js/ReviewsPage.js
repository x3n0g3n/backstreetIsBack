// event.preventDefault();

    // Gather the data from the form elements on the page
    const activity = document.querySelector('#name-activity').value.trim();
    const location = document.querySelector('#name-location').value.trim(); 
    const review = document.querySelector('#name-reivew').value.trim();
    const name = document.querySelector('#name-rating').value.trim();
    
    if(activity && location && review) {
        const response =await fetch('/api/Reviews',{
            method: 'POST',
            body: JSON.stringify({activity, location , review}),
            headers:{'content-type': 'application/json'},
        });

      if (response.ok) {
        document.location.replace('/');
      }  else{
        alert('review not submitted')
      }
    };

document.querySelectorAll('.img-btn').forEach(function(btn){
    btn.addEventListener('click',function(event){
        var id=event.target.getAttribute('id').split('-')[1]
        location.herf='/reveiws/'+id

        console.log(btn)
    });
});