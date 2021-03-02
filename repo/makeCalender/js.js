const date=new Date();
date.setDate(1);

const renderCalendar=()=>{
    const monthDates=document.querySelector('.dates');

    const prevLastDate=new Date(date.getFullYear(),
    date.getMonth(),0).getDate();

    const lastDate=new Date(date.getFullYear(),
    date.getMonth()+1,0).getDate();

    const lastDay=new Date(date.getFullYear(),
    date.getMonth()+1,0).getDay();

    const nextDays=7-lastDay-1;


    const firstDay=date.getDay();

    const months=[
        "January",
        "Feburary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const month=document.querySelector('.month').innerHTML=
    months[date.getMonth()];
    
    let dates="";
    for(let x=firstDay;x>0;x--){
        dates+=`<div class="prev-date">${prevLastDate-x+1}</div>`
    }
    for(i=1;i<=lastDate;i++){
        if(i===new Date().getDate()&&date.getMonth()===new Date().getMonth()){
            dates+=`<div class="today">${i}</div>`
        }else{
            dates+=`<div>${i}</div>`
        }
    }
    console.log(nextDays);
    for(j=1;j<=nextDays;j++){
        dates+=`<div class="next-date">${j}</div>`
    }
    monthDates.innerHTML=dates;
}

document.querySelector('.prevBtn').
addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
})

document.querySelector('.nextBtn').
addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})
renderCalendar();