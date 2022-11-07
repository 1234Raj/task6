

addEventListener('click', function(){
    if(this.document.getElementById('changes')) {
         change1.value = '4';
         change2.value = '1';
         change3.value = '2';
         change4.value = '9';
         change5.value = '3';
         change6.value = '7';
         change7.value = '6';
         change8.value = '4';
} 

else if(this.document.getElementsByClassName('btn')) {
    change1.value = '1';
    change2.value = '2';
    change3.value = '3';
    change4.value = '4';
    change5.value = '6';
    change6.value = '7';
    change7.value = '8';
    change8.value = '9';
} 
})

addEventListener('click', function(){
if(this.document.getElementById('changes')) {
    this.document.getElementsByClassName('btn').style.transition = all 3s ease;
    this.document.getElementsByClassName('btn').style.transform =rotate 120 deg;
  
  }
})
 