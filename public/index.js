const skill_box= document.querySelector('.skill-box')
const search=document.querySelector('.search')
const form =document.querySelector('form')

let search_args=[]

const pillCreator=(name)=>{
    return `<span class=' rounded-md overflow-hidden inline-flex items-center text-DesaturatedDarkCyan bg-LightGrayishCyanBackground m-2'>
    <div class='h-8 px-2 flex justify-center items-center'>
      <h2>
        ${name}
      </h2>
    </div>
    <div class=" w-8 h-8 ml-2 bg-DesaturatedDarkCyan  hover:bg-VeryDarkGrayishCyan close flex justify-center items-center cursor-pointer">
      <img src="images/icon-remove.svg" class="w-6/12 " alt="">
    </div>
  </span>`
}

form.addEventListener('submit',e=>{
  e.preventDefault()
})

search.addEventListener('keyup',e=>{
  if(e.code=='Comma'){
    let new_arg=search.value.slice(0,-1)
    
    if (!search_args.includes(new_arg.toLowerCase())){
        search_args.push(new_arg.toLowerCase())
        const pill=pillCreator(new_arg)
        skill_box.innerHTML+=pill

        if(!skill_box.classList.contains('my-2')){
            skill_box.classList.add('my-2')
        }
    }

    search.value=''
    
  }
})

skill_box.addEventListener('click',e=>{
    if(e.target.classList.contains('close') ||
    e.target.parentNode.classList.contains('close')){
        const parent=e.target.tagName=='IMG'?e.target.parentNode.parentNode:e.target.parentNode
        if(parent.parentNode.children.length==1){
            skill_box.classList.remove('my-2')
        }
        parent.parentNode.removeChild(parent)
        
        search_args=search_args.filter(e=>e!=parent.textContent.trim().toLowerCase())
        
    }

})

