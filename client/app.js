function mCalendar(){
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    var days = []
    if(year%4==0){
        days = [{n:31},{n:28},{n:31},{n:30},{n:31},{n:30},{n:31},{n:31},{n:30},{n:31},{n:30},{n:31}]
    }
    else{
        days = [{n:31},{n:29},{n:31},{n:30},{n:31},{n:30},{n:31},{n:31},{n:30},{n:31},{n:30},{n:31}]
    }
    for(var i=0;i<= days[month].n-1;i++){
        const div = document.createElement("div")
        div.innerHTML = (i+1)
        div.classList.add("day")
        document.getElementById("miniCalendar").appendChild(div)
    }
}
mCalendar()