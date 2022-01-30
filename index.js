//1. (Main theme: Programming Basics)

//function to log 1 to 100

function jackpot() {
  for (let i = 1; i <= 100; i++) {
    
    if (i%3===0 && i%5==0) {
      console.log(`${i} Jackpot`); continue;
    }else if (i%3===0) {
      console.log(`${i} This is divisible by 3`);continue;
    }else if (i%5===0) {
      console.log(`${i} This is divisible by 5`);continue;
    }
    console.log(i);
  }
}

//jackpot()

//2. (Main theme: DOM manipulation)

const button = document.createElement('button');
button.innerHTML="Click";
document.body.appendChild(button);

button.addEventListener('click',()=>{
  const randNumber = Math.floor((Math.random() * 10) + 1);
  const img = document.createElement('img');
  /* img.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Faccessories&psig=AOvVaw1ux_9QEayHit-liYhm4vQD&ust=1643626057189000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJC5p62m2fUCFQAAAAAdAAAAABAD"; */
  img.setAttribute("src","https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Faccessories&psig=AOvVaw1ux_9QEayHit-liYhm4vQD&ust=1643626057189000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJC5p62m2fUCFQAAAAAdAAAAABAD")
   document.body.appendChild(img);
})


//3. (Main theme: Async API calls)

;(async ()=>{
  try {
    const fetchApi = await fetch("https://reqres.in/api/users");
    const fetchResponse = await fetchApi.json();
    //console.log(fetchResponse.data);
    //const totalUser =(fetchResponse.data).length
    
    let count =0;
    for (const data of fetchResponse.data) {
      console.log(data.first_name);
      const ol = document.createElement('ol');
      ol.innerHTML=data.first_name;
      document.body.appendChild(ol);
      count++
      if(count>=3)break;
    }

  } catch (error) {
    console.log(error);
  }
})()
