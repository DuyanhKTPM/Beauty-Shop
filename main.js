const buttons = document.querySelectorAll(".hinhanh")
buttons.forEach(function(hinhanh,index){
        hinhanh.addEventListener("click", function(event){
                var mhItem = event.target
                var product = mhItem.parentElement.parentElement
                var productImg = product.querySelector("img").src
                var productName = product.querySelector(".sanpham-name").text
                var productGia = product.querySelector(".sampham-Gia").textContent
               
                var tbody = document.querySelector("tbody");
                var tr = document.createElement("tr");
                //--------thong báo--------------
                var  cartItem = document.querySelectorAll("tbody tr")
                for(var i=0;i<cartItem.length;i++){
                        var productT = document.querySelectorAll(".title")
                        if(productT[i].innerHTML == productName){
                                alert("Sản Phẩm Đã Có Trong Vỏ Hàng")
                                return
                        }

                }

                tr.innerHTML = '<tr><td style="display: flex; align-items: center; font-size: 20px;"> ' + 
                '<img style="width: 70px;margin: 20px;" src="' + productImg + '" alt=""><span class ="title">'+productName+'</span></td>' + 
                '<td><p style="margin:30px ;font-size: 20px;"><span class = "gia">' + productGia.substring(0, productGia.indexOf(" VND")) + '</span></p></td>' + 
                '<td><input style="width: 30px; outline: none ;font-size: 15px; " type="number" value="1" min="0"></td>' +
                '<td style="cursor: pointer;font-size: 20px;" class="xoa">Xóa</td></tr>';
                tbody.appendChild(tr);
                carttotal()

                const xoas = document.querySelectorAll(".xoa")
                xoas.forEach(function(xoa,index){
                        xoa.addEventListener("click", function(event){
                                var tr = event.target.parentElement;
                                tr.remove()
                                carttotal()
                        });
                 });

        });
 });

 function carttotal(){
        var  cartItem = document.querySelectorAll("tbody tr")
        console.log(cartItem.length)    
        tongtien = 0 
        for(var i=0;i<cartItem.length;i++){
                var inputValue = cartItem[i].querySelector("input").value
                //console.log(inputValue)
                var giasp = cartItem[i].querySelector(".gia").innerHTML
               // console.log(giasp)
                thanhtien = inputValue*giasp*1000
                //tien = thanhtien.toLocaleString('de-DE')
                //console.log(tien)
                tongtien= tongtien + thanhtien
                //tien = tongtien.toLocaleString('de-DE')

        }
        var cartthanhtien = document.querySelector(".tongsotien span")
        cartthanhtien.innerHTML = tongtien.toLocaleString('de-DE')
        //console.log(tongtien)
        inputthemsp()
}
function inputthemsp(){
        var cartItem = document.querySelectorAll("tbody tr") 
        for(var i=0;i<cartItem.length;i++){
         var inputValue = cartItem[i].querySelector("input")
         inputValue.addEventListener("change",function(){
                 carttotal()
         })
    }
 }
 const ghang = document.querySelector(".fa-times")
 const htghang = document.querySelector(".fa-cart-shopping")
 htghang.addEventListener("click",function(){
         document.querySelector(".cart").style.right = "0"       
 })
 ghang.addEventListener("click",function(){
         document.querySelector(".cart").style.right = "-100%"       
 })
 // -----------------------------------
 function loginValidation(frm){
         if(frm.username.value.length<8){
             alert('Vui lòng nhập lại Username lớn hơn 8 kí tự !');
             frm.username.focus();
             return false;
         } else if(frm.password.value.length<8){
             alert('Mật khẩu phải từ 8 ký tự!');
             frm.password.focus();
             return false;
         } else {
             alert('Bạn đăng nhập thành công!');
                return true;
         }
     }
     
     // Trang dang ky
     function registerValidation(frm) {
         if(frm.username.value.length<8){
                 alert('Vui lòng nhập lại Username lớn hơn 8 kí tự !');
                 frm.username.focus();
                 return false;}
         var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
         if(emailReg.test(frm.email.value)==false){
             alert('Vui lòng nhập lại email!');
             frm.email.focus();
             return false;
         } else if(frm.password.value.length<8){
             alert('Mật khẩu phải từ 8 ký tự!');
             frm.password.focus();
             return false;
         } else if(frm.password1.value.length<8){
             alert('Mật khẩu phải từ 8 ký tự!');
             frm.password1.focus();
             return false;
         } else {
             alert('Bạn đăng ký thành công!');
         //     window.location.href = "login.html"
           return true;
         }
     }
