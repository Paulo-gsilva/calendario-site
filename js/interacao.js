document.addEventListener('DOMContentLoaded', function(){
    const arraymeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const numdias = document.getElementById('id-dias');
    
    function GetDayCalendar(mes, ano){
        document.getElementById('id-mes').innerHTML = arraymeses[mes];
        document.getElementById('id-ano').innerHTML = ano;

        let primeirodia = new Date(ano, mes, 1).getDay() - 1;
        let ultimodia = new Date(ano, mes + 1, 0).getDate();

        for(var i = -primeirodia, index = 0 ; i < (42 - primeirodia) ; i++, index++){
            let data = new Date(ano, mes, i);
            let datahoje = new Date();
            let contadias = numdias.getElementsByTagName('td')[index];
            contadias.classList.remove('mes-anterior');
            contadias.classList.remove('mes-posterior');
            contadias.classList.remove('dia-atual');
            contadias.innerHTML = data.getDate();

            if(data.getFullYear() == datahoje.getFullYear() && data.getMonth() == datahoje.getMonth() && data.getDate() == datahoje.getDate()){
                contadias.classList.add('dia-atual');
            }

            if(i < 1){
                contadias.classList.add('mes-anterior');
            }
            if(i > ultimodia){
                contadias.classList.add('mes-posterior');
            }

        }

    }

    let agora = new Date();
    let mes = agora.getMonth();
    let ano = agora.getFullYear();
    GetDayCalendar(mes, ano);
    
    const botaoant = document.getElementById('id-botao-anterior');
    const botaopost = document.getElementById('id-botao-posterior');

    botaoant.onclick = function(){
        mes--;
        if(mes < 0){
            mes = 11;
            ano--;
        }
        GetDayCalendar(mes, ano);
    }
    botaopost.onclick = function(){
        mes++;
        if(mes > 11){
            mes = 0;
            ano++;
        }
        GetDayCalendar(mes, ano);
    }
});