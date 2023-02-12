
/// <reference types="cypress"/>

class Helper {
    dateTime(){
        let date=new Date();
        let DateTime= date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"_"+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds();
         return DateTime.toString();
    }
}

export default Helper