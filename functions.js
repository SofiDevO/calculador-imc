let button = document.getElementById('btn')


button.addEventListener('click', ()=>{

  const height = (document.getElementById("height").value);
  const weight = (document.getElementById('weight').value);
  const resultado = document.getElementById('output');

  let weightStatus = false, heightStatus = false ;

  if (height === '' || isNaN(height)|| (height <= 0)){
    document.getElementById('error-altura').innerHTML = 'Ingrese un dato válido';
  }else{
    document.getElementById('error-altura').innerHTML = '';
    heightStatus = true;
  }

  if(weight === '' || isNaN(weight)|| (weight <= 0)){
    document.getElementById('error-peso').innerHTML = 'Ingrese un dato válido';}else{
      document.getElementById('error-peso').innerHTML = '';
      weightStatus = true;
    }
    

    if(heightStatus && weightStatus) {
      
      const imc = (weight/(height * height)).toFixed(2);
      
      if (imc < 18.6){
        resultado.innerHTML = 'Por debajo de lo normal, tu IMC es de   ' + imc;
      }else if(imc >= 18.6 && imc < 24.9){
        resultado.innerHTML = 'Normal: ' + imc;  
      }else{
        resultado.innerHTML = 'Por encima de tu peso, tu IMC es de : ' + imc;
      }
    }else{
      alert('Error: Verifica la información')
      resultado.innerHTML = '';

    } 
})
