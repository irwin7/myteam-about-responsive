let btn = document.querySelectorAll('.directors__item-btn')

function allClassRemover(click){
  btn.forEach(item => {
    if(item.id !== click.id){
      item.parentNode.classList.remove('show')
    }
    else{
      item.parentNode.classList.toggle('show')
    }
  })
}

btn.forEach(item => {
  item.addEventListener('click' ,function(){
    allClassRemover(item)
  })
})