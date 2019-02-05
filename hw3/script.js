var calc = function(){
    var val1,val2,signType,answer;
}
while(true){
    val1 = prompt('First value ?')
    if(val1 === null){
        break;
    }
    if(+val1){
        break;
    }
}
while(val1){
    val2 = prompt('Second value ?')
    if(val2 === null){
        break;
    }
    if(+val2){
        break;
    }
}
{
signType: while(val2){
    signType = prompt('What u want to do  ?')
    if(signType === null){
        break;
    }
    switch(signType){
            case '+':
                answer = +val1 + +val2;
                break signType;
            case '-':
                answer = +val1 - +val2;
                break signType;
            case '*':
                answer = +val1 * +val2;
                break signType;
            case '/':
                answer = +val1 / +val2;
                break signType;
                }
        }

        document.write(answer);
 }