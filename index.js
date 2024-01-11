let data=[];
const mDiv=document.getElementById("MainDiv")

fetch("https://fakestoreapi.com/products")
.then(function(resp)
{
    console.log(resp)
    return resp.json();

})
.then(function(d)
{
    console.log(d)
    data=d;
    data.forEach(function(val)
    {
        const img=document.createElement("img")
        img.classList.add("img")
        img.src=val.image
        img.alt=val.title
        img.style.height = "100px"
	    img.style.width = "100px"
		const t=document.createElement("h3")
        t.classList.add("t")
        t.textContent=val.title
        const p =document.createElement("p")
		p.classList.add("price")
        p.textContent = val.price
		const btn=document.createElement("button")
        btn.classList.add("btn")
        btn.addEventListener('click',function()
        {
            alert("Item Added To Cart");
        })
        btn.textContent="Add To Cart"
        const subDiv = document.createElement("div") //div
		subDiv.appendChild(img) //<div subdiv><img src="" alt="">--img</div>
		subDiv.appendChild(t)
        subDiv.appendChild(p)
        subDiv.appendChild(btn)
        subDiv.classList.add('subDiv')
		mDiv.appendChild(subDiv)
			
        
    })
})
