export const getCurrentTimeAndDate = () => {
    let today = new Date();
  
    let dateStamp = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`
  
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
  
    let timeString = hours + ':' + minutes + ':' + seconds;
    const [hrs, min, sec] = timeString.split(':')
    const newHrs = + hrs % 24;
    const timeStamp = (newHrs % 12 || 12) + ':' + min + ':' + sec + (newHrs < 12 ? ' AM' : ' PM');
  
    return { timeStamp, dateStamp }
  
  }