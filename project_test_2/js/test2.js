//<день недели>, <номер недели> неделя <месяц> <год> года


function getDayInfo(out) {
    let days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    
    let str =  dateInput.value;
    console.log("str is: ",str);
      
    let d = new Date(str);
    
    let weekDay = (days[d.getDay()]);

    currentdate = new Date(str);
    let   oneJan = new Date(currentdate.getFullYear(),0,1);
    let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil(( (currentdate.getDay() + 1 + numberOfDays) / 7));

    let month =["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let mm = (month[d.getMonth()]);

    let year = (d.getFullYear());

    alert(weekDay + ', ' + result + ' неделя ' + mm + ' ' + year + ' года');
}
