const init = function () {

    const btnCalcular = document.getElementById('calcular');
    const btnNew = document.getElementById('new');

    const coin1 = document.getElementById('coin_1');
    const coin2 = document.getElementById('coin_2');
    const coin3 = document.getElementById('coin_3');
    const coin4 = document.getElementById('coin_4');

    const multi1 = document.getElementById('multiplier_1');
    const multi2 = document.getElementById('multiplier_2');
    const multi3 = document.getElementById('multiplier_3');
    const multi4 = document.getElementById('multiplier_4');

    const res1 = document.getElementById('response_1');
    const res2 = document.getElementById('response_2');
    const res3 = document.getElementById('response_3');
    const res4 = document.getElementById('response_4');
    const total = document.getElementById('response_total');
    total.style.backgroundColor = 'white';
    total.style.color = 'black';

    coin1.value = '';
    coin2.value = '';
    coin3.value = '';
    coin4.value = '';
    multi1.value = '';
    multi2.value = '';
    multi3.value = '';
    multi4.value = '';
    res1.innerHTML = 0;
    res2.innerHTML = 0;
    res3.innerHTML = 0;
    res4.innerHTML = 0;
    total.innerHTML = 0;




    btnCalcular.addEventListener('click', (e) => {



        const coin1 = document.getElementById('coin_1').value;
        const coin2 = document.getElementById('coin_2').value;
        const coin3 = document.getElementById('coin_3').value;
        const coin4 = document.getElementById('coin_4').value;

        const multi1 = document.getElementById('multiplier_1').value;
        const multi2 = document.getElementById('multiplier_2').value;
        const multi3 = document.getElementById('multiplier_3').value;
        const multi4 = document.getElementById('multiplier_4').value;

        const res1 = document.getElementById('response_1');
        const res2 = document.getElementById('response_2');
        const res3 = document.getElementById('response_3');
        const res4 = document.getElementById('response_4');
        const total = document.getElementById('response_total');

        total.style.backgroundColor = 'darkgrey';
        total.style.color = 'white';
        total.style.fontSize = '23px';

        let arrayA = [coin1, coin2, coin3, coin4];
        let arrayB = [multi1, multi2, multi3, multi4];
        let arrayC = [];
        let op = 0;
        let n = arrayA.length;

        arrayA.sort();
        arrayB.sort();


        for (let i = 0; i < n; i++) {
            op += (arrayA[i] * arrayB[i]);
            arrayC.push(arrayA[i] * arrayB[i]);

        }

        res1.innerHTML = arrayC[3];
        res2.innerHTML = arrayC[2];
        res3.innerHTML = arrayC[1];
        res4.innerHTML = arrayC[0];
        total.innerHTML = op;

        console.log(arrayA);
        console.log(arrayB);
        console.log(arrayC);
        console.log(op);

    });

    btnNew.addEventListener('click', init);


};

init();