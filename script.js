const textBox=document.getElementById('textBox');
const toFarenheit=document.getElementById('toFarenheit');
const toCelcius=document.getElementById('toCelcius');
const result=document.getElementById('result');

function convert(){
    if(toFarenheit.checked){

        temp=textBox.value;
        temp=Number(temp);
        temp=temp*9/5+32;
        result.textContent=temp+"°F";

    } else if(toCelcius.checked){

        temp=textBox.value;
        temp=Number(temp);
        temp=(temp-32)*5/9;
        result.textContent=temp+"°C";

    } else{
        result.textContent=`Select an option`;
    }
}