// Variable declarations for buttons and the loader
const btn1 = document.getElementById("input-003");
const btn2 = document.getElementById("input-002");
const btn3 = document.getElementById("input-001");
const loader = document.querySelector(".pol");

// Logic for Page 1 button (input-003)
if (btn1 && loader) {
    btn1.addEventListener("click", function() {
        // Show the loading animation
        loader.style.display = "flex";

        // Wait for 3 seconds before redirecting to the first page
        setTimeout(function() {
            window.location.href = "index.html";
        }, 3000);
    });
}

// Logic for Page 2 button (input-002)
if (btn2 && loader) {
    btn2.addEventListener("click", function() {
        // Show the loading animation
        loader.style.display = "flex";

        // Wait for 3 seconds before redirecting to the second page
        setTimeout(function() {
            window.location.href = "secound.index.html";
        }, 3000);
    });
}


// Logic for Page 3 button (input-001)
if (btn3 && loader) {
    btn3.addEventListener("click", function() {
        // Show the loading animation
        loader.style.display = "flex";

        // Wait for 3 seconds before redirecting to the second page
        setTimeout(function() {
            window.location.href = "third.index.html";
        }, 3000);
    });
}
// تعريف العناصر
const btnSubmit = document.getElementById("input-55");
const formContainer = document.querySelector(".box-x"); // الحاوية التي تريد إخفاءها

if (btnSubmit && loader) {
    btnSubmit.addEventListener("click", function(event) {
        // منع الفورم من تحديث الصفحة فوراً إذا كنت تريد رؤية اللوجو
        event.preventDefault(); 
        
        // 1. إخفاء محتوى النموذج
        if (formContainer) formContainer.style.display = "none";
        
        // 2. إظهار اللوجو
        loader.style.display = "flex";
        
        // اختياري: إذا أردت الانتقال لصفحة أخرى بعد 3 ثوانٍ
        
        setTimeout(function() {
            window.location.href = "index.html"; 
        }, 3000);
      
    });
}

function handleSubmit() {
    // إظهار رسالة النجاح
    alert("تم إرسال بياناتك بنجاح! شكراً لتعاملك مع NOVA MTM");

    // الانتظار 3 ثوانٍ ثم تقديم النموذج فعلياً لإرسال الإيميل
    setTimeout(function() {
        document.getElementById("from-x").submit();
    }, 3000);
}