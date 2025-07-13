let userArr = [];

document.querySelector("#mainForm").addEventListener("submit", (e)=>{
    e.preventDefault()
    let name = document.querySelector("#i1").value
    let fatherName = document.querySelector("#i2").value
    let email = document.querySelector("#i3").value

    let userObj = {
        username: name,
        userFather: fatherName,
        userEmail: email
    }

    function addNewRow(userObj){
        let row = document.createElement("tr")
        row.innerHTML = `<td>${userObj.username}</td>
                        <td>${userObj.userFather}</td>
                        <td>${userObj.userEmail}</td>`
        return row
    }

    function addRowtoTable(userObj){
        let table = document.querySelector("#mainTable tbody")
        let tr = addNewRow(userObj)
        table.appendChild(tr)
    }
    
    addRowtoTable(userObj);
    userArr.push(userObj);
    console.log(userArr)

})