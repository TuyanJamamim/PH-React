// const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url).then(res => res.json()).then(data => {
//     console.log(data)
// })


const loadData = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json();
    return data;

}


/**Api calling using Use() techniques: 
 * write a simple fetch with till res.json()
 * wrap the loading component under <suspense>  
 */