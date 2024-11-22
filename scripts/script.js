// 設計一個更新日期時間的函數
function updateDateTime() {
    let date = new Date();
    let year = date.getFullYear(); // 年份
    let month = date.getMonth() + 1; // 月份
    let day = date.getDate(); // 日期
    let hour = date.getHours(); // 小時
    let minute = date.getMinutes(); // 分鐘
    let second = date.getSeconds(); // 秒
    // 將日期和時間寫入span中
    document.getElementById("date").innerText = `${year}年${month}月${day}日`;
    document.getElementById("time").innerText = `${hour}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
 }

 // 每秒更新一次日期和時間
 setInterval(updateDateTime, 1000);

 // 初始化
 updateDateTime();

 // Get the test_area element
 const testArea = document.querySelector('.test_area');
 const dateElement = document.getElementById('date');
 const timeElement = document.getElementById('time');
 const nameInput = document.querySelector('.people input[type="text"]');
 const sexRadios = document.querySelectorAll('.sex input[type="radio"]');
 const fingerSelect = document.querySelector('.finger select');

 // Initialize variables
 let clickCount = 0;
 let startTime = 0;
 let timerId = 0;
 let countdownText = '';

 // Add event listener to test_area
 testArea.addEventListener('click', () => {
   // If timer is not running, start it
   if (timerId === 0) {
     startTime = new Date().getTime();
     timerId = setInterval(() => {
       // Calculate remaining time
       const remainingTime = 5 - Math.floor((new Date().getTime() - startTime) / 1000);
       countdownText = `還剩 ${remainingTime} 秒`;
       testArea.innerText = countdownText;

       // Check if 5 seconds have passed
       if (remainingTime <= 0) {
         clearInterval(timerId);
         timerId = 0;

         // Get user input values
         const testName = nameInput.value;
         const testSex = Array.from(sexRadios).find(radio => radio.checked).nextSibling.textContent;
         const testFinger = fingerSelect.value;

         // Display result
         testArea.innerHTML = `
           <p>日期: ${dateElement.innerText}</p>
           <p>時間: ${timeElement.innerText}</p>
           <p>姓名: ${testName}</p>
           <p>性別: ${testSex}</p>
           <p>指頭: ${testFinger}</p>
           <p>5秒鐘點了 ${clickCount} 次</p>
         `;
         clickCount = 0;
       }
     }, 1000);
   }
   // Increment click count
   clickCount++;
 });