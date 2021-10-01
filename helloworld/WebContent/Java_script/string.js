'hello'.slice(0,3);
'hello'.substring(0,3);
'hello'.substr(1,2);

// 970101-2345678
// 090301-1234567
// 000503-3456789
// 0109014567890

function checkGender(birthInfo){
    // 2000년 01.01 이전 출생자 주민번호 뒷자리(1:남자, 2:여자)
    // 2000년 01.01 이후 출생자 주민번호 뒷자리(3.남자, 4:여자)


    let today = new Date();

    console.log(today);
    console.log(birthInfo.slice(6,-6));

    console.log(birthInfo.length);

    if(birthInfo.length==14){
        if(birthInfo.slice(0,3)>=50){
            switch(birthInfo.slice(7,-6)){
                case '1':
                    return '남자';
                    break;
                case '2':
                    return  '여자';
                    break;
            }
        }
        else if(birthInfo.slice(0,3)<=50){
            switch(birthInfo.slice(7,-6)){
                case '3':
                    return '남자';
                    break;
                case '4':
                    return '여자';
                    break;
            }
        }
    }

    else if(birthInfo.length==13){
        if(birthInfo.slice(0,3)>=50){
            switch(birthInfo.slice(6,-6)){
                case '1':
                    return '남자';
                    break;
                case '2':
                    return  '여자';
                    break;
            }
        }
        else if(birthInfo.slice(0,3)<=50){
            switch(birthInfo.slice(6,-6)){
                case '3':
                    return '남자';
                    break;
                case '4':
                    return '여자';
                    break;
            }
        }
    }
    else{
        document.write('잘못된주민번호입니다');
    }

    return '남자' | '여자'; 
}

console.log(checkGender('9701012345678'));
document.write(checkGender('9701012345678'))
