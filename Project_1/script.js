// let userArr = [];
// let roll = [];

// document.querySelector("#mainForm").addEventListener("submit", (e)=>{
//     e.preventDefault()
//     let rollNo = document.querySelector("#i0").value
//     let name = document.querySelector("#i1").value
//     let fatherName = document.querySelector("#i2").value
//     let email = document.querySelector("#i3").value

//     if(roll.includes(rollNo)){
//         alert("Roll Number already exists.")
//         return;
//     }
//     roll.push(rollNo)

//     let userObj = {
//         rollNumber: rollNo,
//         username: name,
//         userFather: fatherName,
//         userEmail: email
//     }


//     function addNewRow(userObj){
//         let row = document.createElement("tr")
//         row.innerHTML = `<td>${userObj.rollNumber}</td>
//                         <td>${userObj.username}</td>
//                         <td>${userObj.userFather}</td>
//                         <td>${userObj.userEmail}</td>
//                         <button id="delBtn">Delete</button>`
//         return row
//     }

    
//     function addRowtoTable(userObj){
//         let table = document.querySelector("#mainTable tbody")
//         let tr = addNewRow(userObj)
//         table.appendChild(tr)
//     }
    
//     addRowtoTable(userObj);
//     userArr.push(userObj);
//     console.log(userArr);

// })




let x = 5;
let y = x++ + ++x + x++;
console.log(y)